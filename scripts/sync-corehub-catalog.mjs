import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { CoreHubCatalogSchemaValidator } from "./corehub-schema-validator.mjs";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const generatedPath = resolve(repoRoot, "src/corehub-catalog.generated.js");
const localCoreHubCatalogPath = resolve(repoRoot, "../corehub/catalog.json");
const localCoreHubSchemaPath = resolve(repoRoot, "../corehub/schemas/corehub.catalog.schema.json");
const remoteCoreHubCatalogUrl =
  "https://raw.githubusercontent.com/coreblow/corehub/main/catalog.json";
const remoteCoreHubSchemaUrl =
  "https://raw.githubusercontent.com/coreblow/corehub/main/schemas/corehub.catalog.schema.json";

const isCheck = process.argv.includes("--check");

const catalog = await readCanonicalCatalog();
const schema = await readCanonicalSchema();
const schemaErrors = new CoreHubCatalogSchemaValidator(schema).validate(catalog);
if (schemaErrors.length > 0) {
  for (const error of schemaErrors) console.error(error);
  process.exit(1);
}
const generated = renderCatalogModule(catalog);

if (isCheck) {
  const current = await readFile(generatedPath, "utf8");
  if (current !== generated) {
    console.error(
      "CoreHub catalog drift detected. Run `npm run sync:corehub` from coreblow.com.",
    );
    process.exitCode = 1;
  }
} else {
  await writeFile(generatedPath, generated, "utf8");
  console.log(`Synced ${generatedPath}`);
}

async function readCanonicalCatalog() {
  return readLocalJsonWithRemoteFallback(localCoreHubCatalogPath, remoteCoreHubCatalogUrl, "catalog");
}

async function readCanonicalSchema() {
  return readLocalJsonWithRemoteFallback(localCoreHubSchemaPath, remoteCoreHubSchemaUrl, "schema");
}

async function readLocalJsonWithRemoteFallback(localPath, remoteUrl, label) {
  try {
    const raw = await readFile(localPath, "utf8");
    return parseJson(raw, localPath, label);
  } catch (error) {
    if (!isMissingPathError(error)) throw error;
  }

  const response = await fetch(remoteUrl, {
    headers: { "User-Agent": "coreblow.com-corehub-sync" },
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch ${remoteUrl}: HTTP ${response.status}`);
  }
  return parseJson(await response.text(), remoteUrl, label);
}

function parseJson(raw, source, label) {
  const parsed = JSON.parse(raw);
  if (label === "catalog" && !Array.isArray(parsed)) {
    throw new Error(`CoreHub catalog from ${source} must be an array`);
  }
  return parsed;
}

function renderCatalogModule(catalog) {
  return `// Generated from github.com/coreblow/corehub/catalog.json.
// Run \`npm run sync:corehub\` after changing the CoreHub catalog.

export const COREHUB_CATALOG = ${JSON.stringify(catalog, null, 2)};
`;
}

function isMissingPathError(error) {
  return error?.code === "ENOENT" || error?.code === "ENOTDIR";
}

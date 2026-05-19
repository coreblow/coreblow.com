import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const generatedPath = resolve(repoRoot, "src/corehub-catalog.generated.js");
const localCoreHubCatalogPath = resolve(repoRoot, "../corehub/catalog.json");
const remoteCoreHubCatalogUrl =
  "https://raw.githubusercontent.com/coreblow/corehub/main/catalog.json";

const isCheck = process.argv.includes("--check");

const catalog = await readCanonicalCatalog();
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
  try {
    const raw = await readFile(localCoreHubCatalogPath, "utf8");
    return parseCatalog(raw, localCoreHubCatalogPath);
  } catch (error) {
    if (!isMissingPathError(error)) throw error;
  }

  const response = await fetch(remoteCoreHubCatalogUrl, {
    headers: { "User-Agent": "coreblow.com-corehub-sync" },
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch ${remoteCoreHubCatalogUrl}: HTTP ${response.status}`);
  }
  return parseCatalog(await response.text(), remoteCoreHubCatalogUrl);
}

function parseCatalog(raw, source) {
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
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

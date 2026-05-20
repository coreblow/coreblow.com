# CoreBlow Website

CoreBlow public website and install landing surface.

## Overview

CoreBlow Website is part of the CoreBlow public repository family. Public website and install landing surface for CoreBlow.

This repository follows the same ecosystem split that CoreBlow uses to keep release surfaces small, auditable, and independently governed.

## Repository Role

- Phase: 2
- Priority: foundation
- Kind: website
- Family: CoreBlow public repository family
- Branding: CoreBlow

## Scope

- Website worker source.
- Install landing content.
- CoreHub public directory surface at `https://coreblow.com/corehub`.
- CoreHub Registry API v1 at `https://coreblow.com/corehub/api/v1`.
- Public links to docs and the core repository.

## Out of Scope

- Docs site content.
- Runtime package publishing.

## Key Files

- `.gitignore`
- `package.json`
- `public/dev/mascot-clean.png`
- `public/dev/mascot-original.png`
- `public/dev/mascot.png`
- `src/index.js`
- `wrangler.toml`
- `.github/CODEOWNERS`

## Development

### Develop

```sh
npm run dev
```

### Check

```sh
npm run check
```

### Sync CoreHub

`corehub/catalog.json` is the canonical directory source. This repository serves a generated copy for `https://coreblow.com/corehub/catalog.json`.
The sync check also validates the catalog against `corehub/schemas/corehub.catalog.schema.json`.

```sh
npm run sync:corehub
```

### CoreHub Registry API

The first read-only Registry API is served from the same generated catalog:

```text
https://coreblow.com/corehub/api/v1
https://coreblow.com/corehub/api/v1/catalog
https://coreblow.com/corehub/api/v1/entries
https://coreblow.com/corehub/api/v1/search?q=plugin
https://coreblow.com/corehub/api/v1/packages
https://coreblow.com/corehub/api/v1/packages/search?q=plugin
```

### Deploy

```sh
npm run deploy
```

## Release Policy

Do not publish packages, tags, installers, or release artifacts from this repository without explicit CoreBlow release approval.

Version changes must follow the coordinated CoreBlow release plan.

## Links

- [CoreBlow](https://github.com/coreblow/coreblow)
- [CoreHub](https://coreblow.com/corehub)
- [Documentation](https://docs.coreblow.com)
- [Website](https://coreblow.com)
- [Security Policy](SECURITY.md)
- [Contributing](CONTRIBUTING.md)

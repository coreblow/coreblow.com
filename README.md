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

### Deploy

```sh
npm run deploy
```

## Release Policy

Do not publish packages, tags, installers, or release artifacts from this repository without explicit CoreBlow release approval.

Version changes must follow the coordinated CoreBlow release plan.

## Links

- [CoreBlow](https://github.com/coreblow/coreblow)
- [Documentation](https://docs.coreblow.com)
- [Website](https://coreblow.com)
- [Security Policy](SECURITY.md)
- [Contributing](CONTRIBUTING.md)

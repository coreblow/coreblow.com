# CoreBlow Website

Public website and install landing surface for CoreBlow.

## Development

```sh
npm install
npm run dev
```

The Cloudflare Worker entrypoint lives in `src/index.js`.

## Deployment

```sh
npm run deploy
```

Production routes are configured in `wrangler.toml`.

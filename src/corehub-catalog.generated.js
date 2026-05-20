// Generated from github.com/coreblow/corehub/catalog.json.
// Run `npm run sync:corehub` after changing the CoreHub catalog.

export const COREHUB_CATALOG = [
  {
    "id": "coreblow",
    "kind": "plugin",
    "name": "CoreBlow Bundled Plugins",
    "summary": "Bundled plugin source shipped with the CoreBlow core runtime.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "bundled",
      "runtime",
      "plugins"
    ],
    "capabilities": [
      "plugin loading",
      "channel integrations",
      "provider integrations"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://github.com/coreblow",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-05-19",
      "notes": "Canonical bundled plugin source for the CoreBlow runtime."
    },
    "coreblow": {
      "minCoreblowVersion": "1.0.0",
      "platforms": [
        "linux",
        "macos",
        "windows"
      ]
    }
  },
  {
    "id": "corehub-directory",
    "kind": "skill",
    "name": "CoreHub Directory Metadata",
    "summary": "Reference skill entry documenting CoreHub submission, review, and search metadata.",
    "source": "https://github.com/coreblow/corehub",
    "homepage": "https://coreblow.com/corehub",
    "version": "0.1.0",
    "tags": [
      "directory",
      "metadata",
      "review"
    ],
    "capabilities": [
      "skill validation",
      "directory search",
      "review metadata"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://github.com/coreblow",
      "verified": true,
      "contact": "https://github.com/coreblow/corehub/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-05-19",
      "notes": "Bootstrap entry for the CoreHub directory contract."
    },
    "coreblow": {
      "minCoreblowVersion": "1.0.0",
      "platforms": [
        "linux",
        "macos",
        "windows"
      ]
    }
  },
  {
    "id": "plugin-lab",
    "kind": "plugin",
    "name": "Plugin Lab",
    "summary": "Compatibility lab for CoreBlow community plugins and plugin API contracts.",
    "source": "https://github.com/coreblow/plugin-lab",
    "homepage": "https://github.com/coreblow/plugin-lab",
    "version": "0.1.0",
    "tags": [
      "testing",
      "compatibility",
      "plugins"
    ],
    "capabilities": [
      "plugin fixtures",
      "compatibility checks",
      "contract validation"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://github.com/coreblow",
      "verified": true,
      "contact": "https://github.com/coreblow/plugin-lab/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-05-19",
      "notes": "CoreBlow ecosystem compatibility surface."
    },
    "coreblow": {
      "minCoreblowVersion": "1.0.0",
      "platforms": [
        "linux",
        "macos",
        "windows"
      ]
    }
  }
];

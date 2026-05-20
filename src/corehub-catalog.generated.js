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
    },
    "versions": [
      {
        "version": "1.0.0",
        "tag": "latest",
        "publishedAt": "2026-05-20",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "coreblow-1.0.0.corehub-manifest.json",
          "mediaType": "application/vnd.coreblow.corehub.manifest+json",
          "size": 224,
          "sha256": "53062b4761f16935c3d6121ab57a8c97403c6a15fd0c866437af8e5d7c0b3e64",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/coreblow-1.0.0.corehub-manifest.json",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/coreblow-1.0.0.corehub-manifest.json"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "files": []
        }
      }
    ]
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
    },
    "versions": [
      {
        "version": "0.1.0",
        "tag": "latest",
        "publishedAt": "2026-05-20",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "corehub-directory-0.1.0.corehub-manifest.json",
          "mediaType": "application/vnd.coreblow.corehub.manifest+json",
          "size": 232,
          "sha256": "b8a8ec1c45932e11131927c8e1aa8bdcb2adbd42b97b7fad9e271575ae98f820",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/corehub-directory-0.1.0.corehub-manifest.json",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/corehub-directory-0.1.0.corehub-manifest.json"
          },
          "provenance": {
            "source": "https://github.com/coreblow/corehub",
            "reviewState": "verified"
          },
          "files": []
        }
      }
    ]
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
    },
    "versions": [
      {
        "version": "0.1.0",
        "tag": "latest",
        "publishedAt": "2026-05-20",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "plugin-lab-0.1.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 363,
          "sha256": "43dbdab7bcf34e243b12072edd89cab97965104193c169114d8754c447d5beab",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/plugin-lab-0.1.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/plugin-lab-0.1.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/plugin-lab",
            "reviewState": "verified"
          },
          "files": [
            {
              "path": "coreblow.plugin.json",
              "size": 147,
              "sha256": "8b238efe0bb0963196eeb08dda670272614a04f55b541642f8d2043c353ebefc"
            },
            {
              "path": "index.js",
              "size": 78,
              "sha256": "c8c32710010c476a058bd11d43e81c773f6a96700684c3abccaba82cdcdb369d"
            },
            {
              "path": "README.md",
              "size": 101,
              "sha256": "6b4a496fecadafe2fedbb327fe0f1ab955ab40bacb311af7339e0bebb8314243"
            }
          ]
        }
      }
    ]
  }
];

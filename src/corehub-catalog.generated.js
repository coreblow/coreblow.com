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
          "size": 736,
          "sha256": "4de3b0826298645b080a471904b5bfb7731aaed67a6b6da2bad26402e91a6c90",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "4de3b0826298645b080a471904b5bfb7731aaed67a6b6da2bad26402e91a6c90",
          "format": "tgz",
          "packageName": "plugin-lab",
          "version": "0.1.0",
          "downloadEnabled": true,
          "npm": {
            "integrity": "sha512-86GAbUwzaG5U7IscaczYhN8ICmfn9qatYKUYOjrViW7hPoaDv7c0mgciYocB1xQn7K2Hmuls4SJ+d9Tg5fIGFw==",
            "shasum": "92aaddee3857612f80e227060f2fda0b40219794",
            "tarballName": "plugin-lab-0.1.0.coreblow-plugin.tgz",
            "unpackedSize": 1267,
            "fileCount": 5
          },
          "npmIntegrity": "sha512-86GAbUwzaG5U7IscaczYhN8ICmfn9qatYKUYOjrViW7hPoaDv7c0mgciYocB1xQn7K2Hmuls4SJ+d9Tg5fIGFw==",
          "npmShasum": "92aaddee3857612f80e227060f2fda0b40219794",
          "npmTarballName": "plugin-lab-0.1.0.coreblow-plugin.tgz",
          "npmUnpackedSize": 1267,
          "npmFileCount": 5,
          "unpackedSize": 1267,
          "fileCount": 5,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/plugin-lab-0.1.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/b184ccee4dc283abf850d880f971ef103ddb2ab8/artifacts/plugin-lab-0.1.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/plugin-lab",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "coreblow-plugin",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "plugin",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "coreblow.plugin.json",
              "size": 337,
              "sha256": "726d9d5ef53490c05d40f33982e25f5e084538b0589e1d3b460ddd947179051f"
            },
            {
              "path": "corehub.artifact.json",
              "size": 317,
              "sha256": "bac3f563399ae127442545d08f20c0c178e89723f00fec50d6fb8b89b1165bbc"
            },
            {
              "path": "index.js",
              "size": 78,
              "sha256": "c8c32710010c476a058bd11d43e81c773f6a96700684c3abccaba82cdcdb369d"
            },
            {
              "path": "package.json",
              "size": 434,
              "sha256": "72de8ecd9700d93d772d792e2015c9c3574df25579719e54c39d6dcc52e02475"
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
  },
  {
    "id": "@coreblow/discord",
    "kind": "channel",
    "name": "@coreblow/discord",
    "summary": "Official CoreBlow discord community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "discord",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for discord."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "discord-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 396572,
          "sha256": "a01ae13895ad28a55fad34cb4b0ae1dc11806b7a933151cb97a44ca784279e20",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "a01ae13895ad28a55fad34cb4b0ae1dc11806b7a933151cb97a44ca784279e20",
          "format": "tgz",
          "packageName": "@coreblow/discord",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/discord-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/discord-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "account-inspect-api.ts",
              "size": 291,
              "sha256": "e75edbd354ac14338419008d02a23bc845a2d28dfb335c9e0a06a940860f7057"
            },
            {
              "path": "action-runtime-api.ts",
              "size": 64,
              "sha256": "b50b55485558812fb42e94eb832f6f9ec12126a397dba6a2ef35c3d0fc64baf0"
            },
            {
              "path": "api.ts",
              "size": 992,
              "sha256": "bd44d69b98c36dacd03c3f36ab6b7b8ed6bbf2b56a166ccd495df23875c8344f"
            },
            {
              "path": "channel-config-api.ts",
              "size": 69,
              "sha256": "544eaa6b230aa97f2c2a0493a5239900f6b88ed0500331c319cc8ce2b1d2487b"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 198,
              "sha256": "411ff06cf082c6f9a77a6c34d06871726f721424b3cd05f624549ba0a2f4b64f"
            },
            {
              "path": "config-api.ts",
              "size": 120,
              "sha256": "041e4ee73acd27e934fe0961742860bad7adf1937ec11dc47e4a5b70134cf199"
            },
            {
              "path": "configured-state.ts",
              "size": 216,
              "sha256": "fcf833ae674b4dabfeb66783367475cdb02a8653de4b2abb1f3e5637665583e1"
            },
            {
              "path": "contract-api.ts",
              "size": 803,
              "sha256": "25e83434f431e9f4b130bd849ed22ed4b7b88049925ba384bd5a57ffeaf75600"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 160,
              "sha256": "9c424d478cc8012ddeba6c38985b1cbfbb9c2399793db3a5b4b76b01b7d656f2"
            },
            {
              "path": "corehub.artifact.json",
              "size": 580,
              "sha256": "187712489a41dafe6c3cca0347b657a3d8ec9528534e2f5220298d24c2f9c373"
            },
            {
              "path": "directory-contract-api.ts",
              "size": 124,
              "sha256": "d2f29ef385a5805b4170f5aac35c7eea2edf53a4e31fb7e4d90d0efc60a34ac5"
            },
            {
              "path": "doctor-contract-api.ts",
              "size": 92,
              "sha256": "aa98446585c88e99f7e439de8fb2f745ef645821d449404694d3b45875115d87"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 593,
              "sha256": "9d60676c9046a5b8926f7a99d0e661b0b36d6eb7c06daee0d3e6681fe5cff2c3"
            },
            {
              "path": "package.json",
              "size": 1195,
              "sha256": "e89282f57ce140e1ef1805e0e324afca8a8288704f0461012b2c7b14fdb1b8ed"
            },
            {
              "path": "README.md",
              "size": 232,
              "sha256": "205a744660da9a26cf25e9366899c455e8ab7fc8b5e3c06f30efa21f49999bdb"
            },
            {
              "path": "runtime-api.actions.ts",
              "size": 541,
              "sha256": "eb7b126f308dc3f5e325d5afcb4c78c81f497cc39631647e20f65cc69624d0d1"
            },
            {
              "path": "runtime-api.lookup.ts",
              "size": 791,
              "sha256": "cd5f74b86103803a70a324658651fcf35384ab0a2fb73792568808b5e0a6a820"
            },
            {
              "path": "runtime-api.monitor.ts",
              "size": 1346,
              "sha256": "ad32e0e33bc10bda2941831bdfd3bca18ee37b2e23329aec1fc1fdf2afbb48c3"
            },
            {
              "path": "runtime-api.send.ts",
              "size": 2084,
              "sha256": "38390fcb57bc2aabfee7b3f0c6b7364516295a1687bfe638071c1f11a787407b"
            },
            {
              "path": "runtime-api.threads.ts",
              "size": 1028,
              "sha256": "173cb5582de5e60511457ce87e45e31ca20ca11200b92c898227892e7910d5f4"
            },
            {
              "path": "runtime-api.ts",
              "size": 795,
              "sha256": "6f9998f27997421d64e02010f1415cc4a316f7b6a9dd61e8aa5792f38e7201e0"
            },
            {
              "path": "runtime-setter-api.ts",
              "size": 192,
              "sha256": "fb9718bd45f28f35b1583124cdd21d326b47ce8ecbec901792b4f9de89cb6715"
            },
            {
              "path": "secret-contract-api.ts",
              "size": 117,
              "sha256": "d1d4bbb6360bab63188e8206edd6fe1afff7a2c0e950dc40c09d98b2fbb20dbc"
            },
            {
              "path": "security-audit-contract-api.ts",
              "size": 79,
              "sha256": "17b67e50a5f2e00749ec7722b54051167685158d6063a8d0fd527f8fa3ad425c"
            },
            {
              "path": "security-contract-api.ts",
              "size": 132,
              "sha256": "7c54ee667d120fbbe5e146fb7b387c1edd0a88d7dda5380e45d2f6893c900a40"
            },
            {
              "path": "session-key-api.ts",
              "size": 89,
              "sha256": "b7bfc89e67289c71288ebc9d58d3b65ebe263e10a9adb63d5a2196cf943e058e"
            },
            {
              "path": "setup-entry.ts",
              "size": 250,
              "sha256": "f1117b8709589803ac9568c70af9407e2cec85c42faf652e0671e27d15937296"
            },
            {
              "path": "setup-plugin-api.ts",
              "size": 178,
              "sha256": "c93631b8e5df12e588517aa90071b16944c53ff475b07b8229f2f339eae4a008"
            },
            {
              "path": "src/account-inspect.ts",
              "size": 3612,
              "sha256": "693907ab3ee0911cf6b5d9cbd12d18415531a90fb129ebf268d4f758cb66d5b2"
            },
            {
              "path": "src/accounts.ts",
              "size": 4128,
              "sha256": "b0f288efb67e7066ed2d85bae7a8b9db099379270c9f04151997b48e7f64ed05"
            },
            {
              "path": "src/actions/handle-action.guild-admin.ts",
              "size": 13855,
              "sha256": "08fdb36eb49ab85fec46bca44aa2b5bfbe8c6f976e11fb108f174bca7f74a9fb"
            },
            {
              "path": "src/actions/handle-action.ts",
              "size": 9323,
              "sha256": "0e7afb68b5efbfb1317124220851e6489579193d003ab5ffbab81870a3014578"
            },
            {
              "path": "src/actions/runtime.guild.ts",
              "size": 19181,
              "sha256": "5d764f93f4b5ccaecf45b875f075be88976f133685db30db69c0c20bb4455f77"
            },
            {
              "path": "src/actions/runtime.messaging.messages.ts",
              "size": 7871,
              "sha256": "3ad3e291cde235d723f62d1b151afb139f00945f940482a99460f958f9fcf2f5"
            },
            {
              "path": "src/actions/runtime.messaging.reactions.ts",
              "size": 2270,
              "sha256": "cb93376a902f0e611ac2a8f29b3f4d6b25ad36bfc3eae1f15609fdde144dc2f6"
            },
            {
              "path": "src/actions/runtime.messaging.runtime.ts",
              "size": 2093,
              "sha256": "19c88f7b632c49439392daf16b1add332774b91996bdecb39ed8a37b54d83884"
            },
            {
              "path": "src/actions/runtime.messaging.send.ts",
              "size": 11058,
              "sha256": "08b2df810db51ccf501b60c0b79e9b73d6d6f19b3035abb4a5ee2d9fb0a99400"
            },
            {
              "path": "src/actions/runtime.messaging.shared.ts",
              "size": 3467,
              "sha256": "38930c27c9f98a403d3fc83950bd41be9d09ba61c32bf136054d69dbb3e2bff9"
            },
            {
              "path": "src/actions/runtime.messaging.ts",
              "size": 1735,
              "sha256": "d7ef21e19ee88d5a637499460b7c6db1d7d0d50e0b58428cb2a080f035e26c15"
            },
            {
              "path": "src/actions/runtime.moderation-shared.ts",
              "size": 1616,
              "sha256": "ed04bbf8dfd4cb6f63757ab14d11d2a06ff35cd6670b7c538ee5e7784a364f6a"
            },
            {
              "path": "src/actions/runtime.moderation.ts",
              "size": 3983,
              "sha256": "023dd4b02abbbeb12c019a0e83d54836f3e59ac2c36aace8ec0508865601bb68"
            },
            {
              "path": "src/actions/runtime.presence.ts",
              "size": 3218,
              "sha256": "ebb877317ff7fa41a7559b8e70c4c1f20b17d1248699b0b98f39f8c3a59f90fc"
            },
            {
              "path": "src/actions/runtime.shared.ts",
              "size": 3171,
              "sha256": "a3c1a274ad22ae468cfe6ae5f6c3b96a52ff09de307d0a053c52f6e988c6dec6"
            },
            {
              "path": "src/actions/runtime.ts",
              "size": 2266,
              "sha256": "394ecde6109443e75909e009994c68ef15338af2756a6a0bf34e2f539cb62e0e"
            },
            {
              "path": "src/adapter.ts",
              "size": 499,
              "sha256": "c0f146ec1c75308e1145eaf6c38dd1df738d344a839eb4d71e3e1e1beb0f5a67"
            },
            {
              "path": "src/api.ts",
              "size": 4049,
              "sha256": "ad20c75825e2a0774923a1443cbd7a47d000e53925883be8d033bf5ef4f65a8a"
            },
            {
              "path": "src/approval-handler.runtime.ts",
              "size": 20459,
              "sha256": "7a5a6dc63f2eab0f4e0ed6baad59a78a6de92cdc57c80dd3773de170f7d68009"
            },
            {
              "path": "src/approval-native.ts",
              "size": 8625,
              "sha256": "a7c04236b735dba7949bbd0f7317e8501ac87f85025b4087fbfa6ec688f6c1e9"
            },
            {
              "path": "src/approval-runtime.ts",
              "size": 560,
              "sha256": "6396883e7e78166de4627425dd39284128c51f97b78d6c1178d7243a8190175c"
            },
            {
              "path": "src/approval-shared.ts",
              "size": 1673,
              "sha256": "02985a59ff6e15db57d10fe77d2944e36c0b9faa05667c80814cd5a0a3cade10"
            },
            {
              "path": "src/audit-core.ts",
              "size": 5249,
              "sha256": "6f251edc83061911c897826e33ba7588449d65742034a04d6c4abdbb0ed25510"
            },
            {
              "path": "src/audit.ts",
              "size": 4013,
              "sha256": "55b8ea016bf0c9ac0e4db727b744f5fc51abc7e90a667c341ed9ff8af70412db"
            },
            {
              "path": "src/channel-actions.runtime.ts",
              "size": 73,
              "sha256": "29e2c186c800b48314496171f63b9a1e1ee505b297b83132c7e1b40469f545d5"
            },
            {
              "path": "src/channel-actions.ts",
              "size": 4716,
              "sha256": "295f81ab2c737541561b24f8165c0e024b55469cd9285ae1ac46a3dfd8d80e89"
            },
            {
              "path": "src/channel-api.ts",
              "size": 976,
              "sha256": "369de33ecf1de6ed988a9f999642950d1b7de7dac5f30226167c7379d57021c4"
            },
            {
              "path": "src/channel.conversation.ts",
              "size": 4727,
              "sha256": "727c8209c9748af1952359496af4c0197f7e39eacab440960b291a28fcb76d33"
            },
            {
              "path": "src/channel.loaders.ts",
              "size": 1945,
              "sha256": "6844e09344c7964ca583557a6071bd5f9efce306a368602e2c3bc0ad69934ef0"
            },
            {
              "path": "src/channel.runtime.ts",
              "size": 308,
              "sha256": "922a2a3759d3f00a4749f370f984667eba50e3e6f975a7e758226df38f4cd286"
            },
            {
              "path": "src/channel.setup.ts",
              "size": 374,
              "sha256": "64825fb019e81dab4d54b91b5751c93969880fa91968a82cc61755ddd14b3e03"
            },
            {
              "path": "src/channel.ts",
              "size": 33406,
              "sha256": "d79098dc9c7ad1fc894638b50b5b3adb24f699b7e0aedea03a42839f05e54d7f"
            },
            {
              "path": "src/chunk.ts",
              "size": 7717,
              "sha256": "fbbe5977dce9d048cdcc4264c4401d191e534479081e46d093090c9e047293a0"
            },
            {
              "path": "src/client.ts",
              "size": 3271,
              "sha256": "4d85798822db9b011b7d8561333bce3a090130d15d4c0e58d0ed9561a8b543a1"
            },
            {
              "path": "src/component-custom-id.ts",
              "size": 2283,
              "sha256": "61031324cc8032bff77cb80363c2c6cb80b48ffa205ae4d19b96eb9715c0dd84"
            },
            {
              "path": "src/components-registry.ts",
              "size": 3151,
              "sha256": "e7cd9afad1cff423e1dc40e4b40e18d38e7c1e4fc5b37d1ee186f32908ce8fc3"
            },
            {
              "path": "src/components.builders.ts",
              "size": 12521,
              "sha256": "06360df772f6c980bc8dfb13c1c6fba60acb7db606d62797b605f9f047948656"
            },
            {
              "path": "src/components.modal.ts",
              "size": 4269,
              "sha256": "fb1420bd1b0635b39d33f828a76e2599ab663ea771c7ee8806c29559aebac66b"
            },
            {
              "path": "src/components.parse.ts",
              "size": 14420,
              "sha256": "ceabc6132fa747f6a4dd7cad715ba581a90171198a1a672b3474e2e98a2ef699"
            },
            {
              "path": "src/components.ts",
              "size": 36666,
              "sha256": "1e71bd84ad4ea17007aed1b6b6db72d5784303da4fd06128acb7771a2b35f417"
            },
            {
              "path": "src/components.types.ts",
              "size": 4376,
              "sha256": "1c13fef10b5a899a32f7923acdd9483dcb427342f73397fffdcc7b0e7db73f9b"
            },
            {
              "path": "src/config-schema.ts",
              "size": 315,
              "sha256": "467463ea6cf6aa84854c4deefb2ea1c0991ef71eab6e1a272d21ed0d5a95c305"
            },
            {
              "path": "src/config-ui-hints.ts",
              "size": 10090,
              "sha256": "c27b051e38aadb32c1af46fb5c83193951b8bec44e223e3f424a90c56ccb4c52"
            },
            {
              "path": "src/config.ts",
              "size": 685,
              "sha256": "f41fff7011da72858f2d17f20dfa184c086ab439a887863c91a69ec7d2bd1336"
            },
            {
              "path": "src/conversation-identity.ts",
              "size": 1731,
              "sha256": "edefe0f3a048f96642ff03529103ab56728d624f79295a72b386a07ad9b30e2a"
            },
            {
              "path": "src/delivery-retry.ts",
              "size": 1837,
              "sha256": "b7f70657d9daed067f2db8582777cdbba96909299ebd521fb88bf6bc3483ce76"
            },
            {
              "path": "src/directory-cache.ts",
              "size": 3374,
              "sha256": "0241b6fb12210eab1ec2545558c05a9a8ac8146f08664182f2764effc7a2246f"
            },
            {
              "path": "src/directory-config.ts",
              "size": 2179,
              "sha256": "ba084f74902307ac061146e199cda798100739a740c00442ed4284450ec99200"
            },
            {
              "path": "src/directory-live.ts",
              "size": 4093,
              "sha256": "90eb75922bd9947e1262c0755e323a084a7a3367bafda6dbe90c337908e64a87"
            },
            {
              "path": "src/doctor-contract.ts",
              "size": 15613,
              "sha256": "070bcb40b467ba7273c372f0e75a1d17ee6df5938052d5c8e8d65778ef8ab9b1"
            },
            {
              "path": "src/doctor-shared.ts",
              "size": 336,
              "sha256": "7fea15f88615fc7b17315dc1834883b649782a33e107edd230e580610b4a5b24"
            },
            {
              "path": "src/doctor.ts",
              "size": 11365,
              "sha256": "c426c51e7866063b3265b04063ddd3572f57a180e04424dd2cb19d94f2f7e3e4"
            },
            {
              "path": "src/draft-chunking.ts",
              "size": 1602,
              "sha256": "97d8488a100f5d3eee57ac416ef0882d2e6490d436e2a44cc3065c8ac54762f6"
            },
            {
              "path": "src/draft-stream.ts",
              "size": 4886,
              "sha256": "86fd458fd70b0ff6ecf63f4d336e30a5f319e25c726aa1b89abf197968888043"
            },
            {
              "path": "src/error-body.ts",
              "size": 1099,
              "sha256": "b65e536d14a1ae6108e65bcee3f1b9969ab330e0915c37dc9b10792aaa9abe58"
            },
            {
              "path": "src/exec-approvals.ts",
              "size": 1666,
              "sha256": "eaadd72fbd97548df57b93b29cd1461c7c7e295864fcc91acd7b9bb11780d330"
            },
            {
              "path": "src/extension.ts",
              "size": 437,
              "sha256": "78ce32f9d8a1602d72e02e8fce76ef2ab3f6797955a0d6fa51fd8d8e073e58e1"
            },
            {
              "path": "src/formatter.ts",
              "size": 836,
              "sha256": "38c0a53d4b72d8d8e542db34a89c8923d7affcc6e15d842e23f0d4caf64dcbd4"
            },
            {
              "path": "src/gateway-logging.ts",
              "size": 1932,
              "sha256": "3eb255069d19a4ad2eba0c88a8cb487022a3fd84974fb3c516df31a2118ab962"
            },
            {
              "path": "src/group-policy.ts",
              "size": 3605,
              "sha256": "2204e1a0473b6823dcf667e4b6cde8be3fc98af89934376bf3cd2daf4221ee0a"
            },
            {
              "path": "src/guilds.ts",
              "size": 715,
              "sha256": "fbb241da0ed5df0b9ae755b241e5b6044028eaa32adef53ea67fc9bf6ff47a32"
            },
            {
              "path": "src/handler.ts",
              "size": 410,
              "sha256": "dfdb8fdff34e39c09e277f75d962e65c6feae4423ede8a598cc676d817d7849c"
            },
            {
              "path": "src/inbound-event-delivery.ts",
              "size": 3659,
              "sha256": "557a108c53b34389aaec85970f9c24cb78ea2e96e5ede0ab5256e7439c2ac548"
            },
            {
              "path": "src/index.ts",
              "size": 233,
              "sha256": "18e24d0a3159eb4f1401f7205e635a1b9c7c920aaabd936dde9903f64b1e0f9c"
            },
            {
              "path": "src/interactive-dispatch.ts",
              "size": 3148,
              "sha256": "48fb6607b527405271fe2ea2d3363050fe9f43102a078ca46c44bbce43a84f6d"
            },
            {
              "path": "src/internal/api.commands.ts",
              "size": 1432,
              "sha256": "0b442cb8d02742858071f0496b98eb0ec954daadd824941fb0b7f50af018b058"
            },
            {
              "path": "src/internal/api.guild.ts",
              "size": 4345,
              "sha256": "8babcb26745d3e5a484a1984b8089b35bb2b58b02fa13db6c5c49e4bf2491527"
            },
            {
              "path": "src/internal/api.interactions.ts",
              "size": 1527,
              "sha256": "58723be6b14c0e6b88e19d723b009ad128eec06013fbbab632185728be6e5abf"
            },
            {
              "path": "src/internal/api.messages.ts",
              "size": 3312,
              "sha256": "3c265a9dff7dd41f0781fee2c36f7cf66b29792ece86cd67f522fec1b2cb8487"
            },
            {
              "path": "src/internal/api.reactions.ts",
              "size": 1090,
              "sha256": "13d93ddd57778db0ef500cdc33add3220a9feaf2aeedb90de4c94210ff5c0122"
            },
            {
              "path": "src/internal/api.ts",
              "size": 1456,
              "sha256": "c8353616c4fdc0556fab22e46670fc16028c76c7a979af367006e665919d9d1d"
            },
            {
              "path": "src/internal/api.users.ts",
              "size": 669,
              "sha256": "4e49a7fb157007bdcf3aba54b650f39be6b71ae72b01a41ad86408713ecefc7f"
            },
            {
              "path": "src/internal/api.webhooks.ts",
              "size": 382,
              "sha256": "31ddc0015f8b5bb0024b228954605bd115e2bdfd9b4614d983a8f01042910b88"
            },
            {
              "path": "src/internal/client.ts",
              "size": 9697,
              "sha256": "09f4c812f90e341a0519556697b220112339b030dd26148c245688fc8c3c7e5b"
            },
            {
              "path": "src/internal/command-deploy.ts",
              "size": 11470,
              "sha256": "f421af1dba2f333b3f5a9d4dfc3b43eef1a0719eea27189b390bcfee76db7709"
            },
            {
              "path": "src/internal/commands.ts",
              "size": 6682,
              "sha256": "a0b7fa31e077871723f20d9d5da324a3a79ca9a3ec9bc32945ad64ec3e72a2a7"
            },
            {
              "path": "src/internal/components.base.ts",
              "size": 2235,
              "sha256": "e3c48ac4eaa05284cc9a61b252296101b8d0ab90b86e694dda6ae71e82517b86"
            },
            {
              "path": "src/internal/components.message.ts",
              "size": 7847,
              "sha256": "49e2ebb1bd4bfb7517d49dcfc16aac1acf572c3ce5bfff9c3cb836719d03c0f2"
            },
            {
              "path": "src/internal/components.modal.ts",
              "size": 2723,
              "sha256": "748a096428edc83ce9c11a9e0d49150632d8178fed15a28c89a1f2796069a519"
            },
            {
              "path": "src/internal/components.ts",
              "size": 715,
              "sha256": "4b66ce49b2638acb1e85db2421ad62caa9520bb3e3472729b0393b8db9734487"
            },
            {
              "path": "src/internal/discord.ts",
              "size": 344,
              "sha256": "d74ba93bea15e25526fadbd0dcfc30505167b0a7d1c1f2d1469de8d28a54b8dc"
            },
            {
              "path": "src/internal/embeds.ts",
              "size": 1059,
              "sha256": "1c244d0156ee6ddbdd9002ed5594a962e0d4c02c7313c6b3edd58a297fde0fb4"
            },
            {
              "path": "src/internal/entity-cache.ts",
              "size": 3377,
              "sha256": "db50ff2bb91dbc6b93cf966dde17082d9752dba6a97961909515e33d8794aa2c"
            },
            {
              "path": "src/internal/event-queue.ts",
              "size": 5530,
              "sha256": "90151fa3130ed7cb62606549c613abb4b2697ef59af6eb6549f23d0398f8daf6"
            },
            {
              "path": "src/internal/gateway-close-codes.ts",
              "size": 828,
              "sha256": "d54f952f490a4fea713a8798dae5210567df0f3fd116d8d7236bd5a636ee9b8f"
            },
            {
              "path": "src/internal/gateway-dispatch.ts",
              "size": 3132,
              "sha256": "990c3a32847f9f307a47f748df3ee6962c653d0bf536322f6c35ae0cd74e9418"
            },
            {
              "path": "src/internal/gateway-identify-limiter.ts",
              "size": 895,
              "sha256": "af949b3374f248a88a70d7dd0c4241ad29f9d6a6fe60174d51be8e6f69a7437d"
            },
            {
              "path": "src/internal/gateway-lifecycle.ts",
              "size": 1849,
              "sha256": "c8fb5a224e79cb441e4134d54f0de8d5ec0c156b351b20184802c0f91c2c6d76"
            },
            {
              "path": "src/internal/gateway-rate-limit.ts",
              "size": 2963,
              "sha256": "e4bf5827cf32dbc3907ea06464d6ad8d8ef582f346cfef67d52c233126c79ce3"
            },
            {
              "path": "src/internal/gateway.ts",
              "size": 15469,
              "sha256": "a6e54ab38a28e7683e079008f62778b87415f49a2a469b05a1ba8eb0ad79597c"
            },
            {
              "path": "src/internal/interaction-dispatch.ts",
              "size": 5755,
              "sha256": "7e600ba9383068349ac46e61d93cf56fcc806b3cf42825cba018b04328a6effb"
            },
            {
              "path": "src/internal/interaction-options.ts",
              "size": 3192,
              "sha256": "ba191a7606d57f991378b3f58270116e1d8d18b3c943f900aed57be07147e4c5"
            },
            {
              "path": "src/internal/interaction-response.ts",
              "size": 1389,
              "sha256": "0f1ad060f46eb2c64cd96ec2bfe674afa2ddd05fddd76210619aada805cba9a6"
            },
            {
              "path": "src/internal/interactions.ts",
              "size": 12388,
              "sha256": "0604328898ce2dfa6f128421695638131b571e26b4d94ce1e3fc09b666bc714d"
            },
            {
              "path": "src/internal/listeners.ts",
              "size": 2974,
              "sha256": "d5c3eaf20a0c6b4665a1ef6b035f3691defb44e944c9fa8750d8b2791b1a368c"
            },
            {
              "path": "src/internal/modal-fields.ts",
              "size": 3085,
              "sha256": "67ffed3307188931f90ec5151266237e7d361bcb2244d609f0297ebe222b53e2"
            },
            {
              "path": "src/internal/payload.ts",
              "size": 2279,
              "sha256": "a51a68c79c6263c1ebe7b8668065da7c2170954346cb4dfdfb7df6fa68f02e3c"
            },
            {
              "path": "src/internal/rest-body.ts",
              "size": 4270,
              "sha256": "db7eee8a14c2cba3f94a8524db3b3e9ae7498e3039dba7a9c5a9c3e5752cdc52"
            },
            {
              "path": "src/internal/rest-errors.ts",
              "size": 2861,
              "sha256": "701f6c68dc685657085bd3024364293fa02b7fd4924ab91440f3cf07cf6dd59f"
            },
            {
              "path": "src/internal/rest-routes.ts",
              "size": 1690,
              "sha256": "1c0058fbaf82b18d7f4b765a4d07091371b605ddc57dd9e41c2a412cc278c96b"
            },
            {
              "path": "src/internal/rest-scheduler.ts",
              "size": 17552,
              "sha256": "f2f5335bd8a4a58d035a6fc6d0faab8347b96252d2081699e45ace5128f63561"
            },
            {
              "path": "src/internal/rest.ts",
              "size": 10613,
              "sha256": "f6553a2414241684ef562c0848470cd6c31b8069aef178ab34ffc7d539949318"
            },
            {
              "path": "src/internal/schemas.ts",
              "size": 1022,
              "sha256": "68332dc27aa58562f6e98999eb3cdda1566caadd171ed797c2836abcf8e4344a"
            },
            {
              "path": "src/internal/structures.ts",
              "size": 8434,
              "sha256": "30d7f1faa88b4cb61a06fa36501e9bcbb813696e52c7357b3581082c18ec80d4"
            },
            {
              "path": "src/internal/test-builders.test-support.ts",
              "size": 4691,
              "sha256": "58ee58f3a8d9021e61d6d0466be421db497062e8f1f827c0424a54fb77f01c84"
            },
            {
              "path": "src/internal/voice.ts",
              "size": 1484,
              "sha256": "d1ae10ad4c3e3cf4a7f9bb185d4e3f2c9e40d22bd573b6544da5fbb834b61188"
            },
            {
              "path": "src/media-detection.ts",
              "size": 919,
              "sha256": "79e660c716e5fd9f9714f5dad643fa8a6744aca42746ad2c7ddfa2a9e726a32f"
            },
            {
              "path": "src/media.ts",
              "size": 898,
              "sha256": "3af141a1746ebf93ec07a3beee3047d0b3bf2efc742ca8b0ffaf5c0f371a576b"
            },
            {
              "path": "src/mentions.ts",
              "size": 2820,
              "sha256": "04fdca824510b0c02c7591e7f8f2ce238492549b185b61d5b2d56af563704b62"
            },
            {
              "path": "src/message-tool-schema.ts",
              "size": 3933,
              "sha256": "28a973399588c5e6f3751476b1e93154f37073a5a6b2528e8d6c9f1e3991d967"
            },
            {
              "path": "src/monitor.gateway.ts",
              "size": 2335,
              "sha256": "1811d74bb5318bbbd382ef363c4049fcab5a3fa7fd3788c1423fa9b300890ade"
            },
            {
              "path": "src/monitor.tool-result.test-harness.ts",
              "size": 2490,
              "sha256": "8a1556525f6321477de3eca9378c51c2f23cd41df266253cb1e46ae657cefd5a"
            },
            {
              "path": "src/monitor.tool-result.test-helpers.ts",
              "size": 8758,
              "sha256": "a0c01f2e39f2321b1367f287a89f0bfb7a11abb15b2959499fcd7c975faec1c4"
            },
            {
              "path": "src/monitor.ts",
              "size": 1120,
              "sha256": "201da65c89dbc150eb2811b71774608835b20cabbcb0050be2f0eeee49c4c293"
            },
            {
              "path": "src/monitor/ack-reactions.ts",
              "size": 2041,
              "sha256": "5bf44cad6408acbc78415bf035d63379ccf367fa81214d69cd318d96ac914e47"
            },
            {
              "path": "src/monitor/agent-components-auth.ts",
              "size": 287,
              "sha256": "27fd0f6d95c286e55adfe85ddfbfe45bf0d90b515981eb73b064ea6112c0378b"
            },
            {
              "path": "src/monitor/agent-components-context.ts",
              "size": 4828,
              "sha256": "96628b4190f35b550d6ede16adcfcd40805314105b9f67d3f588f7cf5a45d863"
            },
            {
              "path": "src/monitor/agent-components-data.ts",
              "size": 6819,
              "sha256": "c1de6b6ccb938e25ce777a563a1b480102ad6c0cf93d5313d746bbb054cfc902"
            },
            {
              "path": "src/monitor/agent-components-dm-auth.ts",
              "size": 5445,
              "sha256": "3268c057fab037e8da7d8836d3a1374f2808a778ddab3191c301eb5b16727e9b"
            },
            {
              "path": "src/monitor/agent-components-guild-auth.ts",
              "size": 9664,
              "sha256": "c06abe5a2c23e34f30a5387d87f55a8a23bb0066f1946440247b2e7399b963be"
            },
            {
              "path": "src/monitor/agent-components-helpers.runtime.ts",
              "size": 289,
              "sha256": "6871104a1109e4ae6c961f375a0b2363860e81762bca461d62bd41d662c5492b"
            },
            {
              "path": "src/monitor/agent-components-helpers.ts",
              "size": 24240,
              "sha256": "2f8ce7a8b8d9a94fd2c8773e0c6987adb3e94b702753d52f98a8e3a63283c3e6"
            },
            {
              "path": "src/monitor/agent-components-reply.ts",
              "size": 274,
              "sha256": "e5e28958b73611798ce04e20effe1ed1ea8f017e8a5a13018ffe4c8539dc8434"
            },
            {
              "path": "src/monitor/agent-components.deps.runtime.ts",
              "size": 179,
              "sha256": "e95f888fa13f345d307856e154678355aec731ae48efc989eb365b858cfa0df5"
            },
            {
              "path": "src/monitor/agent-components.dispatch.ts",
              "size": 13284,
              "sha256": "55734b71851319cd15919cf0788d44057e3dbe72a29f6ab47ef09a86bf01212c"
            },
            {
              "path": "src/monitor/agent-components.handlers.ts",
              "size": 8285,
              "sha256": "2d61e368c7f96f5346fe1ab7b543c446e63157ad966bee25e61df090bd0f38ad"
            },
            {
              "path": "src/monitor/agent-components.modal.ts",
              "size": 4558,
              "sha256": "45b6a5a6c06963fa0da1f2d27cdfb81ba14af6ef8882de330f677ac95d37258b"
            },
            {
              "path": "src/monitor/agent-components.plugin-interactive.ts",
              "size": 6255,
              "sha256": "ac67bb14a4e01c205fb985bb7dbef0d21fdb8cd22fdaf27cef00f497b2b2c9aa"
            },
            {
              "path": "src/monitor/agent-components.runtime.ts",
              "size": 486,
              "sha256": "3b9820ebb994331a02d4b26fbd7f1ff80ec8e55be3f7c27fe0eee4e4d7e0e2c9"
            },
            {
              "path": "src/monitor/agent-components.system-controls.ts",
              "size": 5630,
              "sha256": "b25c94e3fcd3277816fba1124545c14d2884d17bd4b8e810e5e91ead3d3f06ab"
            },
            {
              "path": "src/monitor/agent-components.ts",
              "size": 42487,
              "sha256": "4a3eed45606ce404fb55fe7d4c8bd9f6032fd9835153573fef0d5e4d80b162a6"
            },
            {
              "path": "src/monitor/agent-components.types.ts",
              "size": 1767,
              "sha256": "77c124e73e0b7870468b1ba4227de329aa5f13bc3ab88665583a272ca2e75022"
            },
            {
              "path": "src/monitor/agent-components.wildcard-controls.ts",
              "size": 5272,
              "sha256": "8506e3fa0239a27cf3c529759e251e74b23ac2f8912c27fc16d15528fb8de91c"
            },
            {
              "path": "src/monitor/allow-list.ts",
              "size": 19004,
              "sha256": "a2dcfdea3504def1de98bf973693a1803c6a64eb1a02794caddb6a942dacf2dd"
            },
            {
              "path": "src/monitor/auto-presence.ts",
              "size": 10107,
              "sha256": "b9a20f286c3c172b8fe48a966e85b3064efda0d090bf0223fbf02657148a3243"
            },
            {
              "path": "src/monitor/channel-access.ts",
              "size": 3171,
              "sha256": "97c01c51e090bfef10991fcfcbcfd5aa0c96a3a120daf2db683bfc6ee492aa47"
            },
            {
              "path": "src/monitor/commands.ts",
              "size": 271,
              "sha256": "1f037ec20a05f97c0a95331dfc6ddc7f8ea4083c68a00ffa373b04bcaa9f3f59"
            },
            {
              "path": "src/monitor/dm-command-auth.ts",
              "size": 6157,
              "sha256": "823de017dc41ff95fe1f37ee842c2ca019626ae1b7508794a7cb731faea9d5bc"
            },
            {
              "path": "src/monitor/dm-command-decision.ts",
              "size": 1611,
              "sha256": "b87c0a0cb6a24f67718644ba7a6c69024446cbbf1337fc708c61e44149aeb6bc"
            },
            {
              "path": "src/monitor/event-types.ts",
              "size": 959,
              "sha256": "123877b88b091ca9fc90e23ae4df26650332f75575fb566cefa3df130544924d"
            },
            {
              "path": "src/monitor/exec-approvals.ts",
              "size": 34951,
              "sha256": "6e61f632fe35ba471d459034ec4e9abe8ee1a4785f1ebac18bdded7e03319e35"
            },
            {
              "path": "src/monitor/format.ts",
              "size": 1409,
              "sha256": "288007929f209566c6f524e2e5511c13fc73fd63e1dfac06b9b6564aca20ed91"
            },
            {
              "path": "src/monitor/gateway-handle.ts",
              "size": 973,
              "sha256": "9b9683dd4538483b01363b3ac2c7c96a6f1985de96edfea0e21a30515cff0f7b"
            },
            {
              "path": "src/monitor/gateway-metadata.ts",
              "size": 9300,
              "sha256": "0a772fc54d4f2682110a95f45ea8c27ead3a867f5aefbe9fa15a336197e91b94"
            },
            {
              "path": "src/monitor/gateway-plugin.ts",
              "size": 11053,
              "sha256": "df59694eade72c65aff59d65498ece1dcd55977a3fc4d8c385aa44390ad93d56"
            },
            {
              "path": "src/monitor/gateway-registry.ts",
              "size": 1407,
              "sha256": "b4950b0ef9ff1944e2021464e20269df2ed00f09eb4103858034d3e7ad3e2eb1"
            },
            {
              "path": "src/monitor/gateway-supervisor.ts",
              "size": 3964,
              "sha256": "13fa2f1a6a01b074eb24639d720fd32a9fff2f2872f5a6868856778707f55cbd"
            },
            {
              "path": "src/monitor/inbound-context.test-helpers.ts",
              "size": 1120,
              "sha256": "cc8b049bd045c914d47a70f1a49b2f4e09bb4fa487b8a30f0910f667959134b2"
            },
            {
              "path": "src/monitor/inbound-context.ts",
              "size": 3106,
              "sha256": "ed9e2cf026df8a9f5b38758443392f546941fccdc5d7945b214b659a3ad27118"
            },
            {
              "path": "src/monitor/inbound-dedupe.ts",
              "size": 2469,
              "sha256": "4d965f1f23388872b13c32ce6ef3eb9038fe015472d8a8e5f47d34f8ee0ae757"
            },
            {
              "path": "src/monitor/inbound-job.ts",
              "size": 2885,
              "sha256": "640463749f624da47190fd02b99cf49c3daf864f4c119b7602718e06b3d00a8a"
            },
            {
              "path": "src/monitor/inbound-worker.ts",
              "size": 6681,
              "sha256": "fa4705bc9441b9ff4c3e4de8f3e7069194653a26fb488d2e03d4fbc71bd0af94"
            },
            {
              "path": "src/monitor/listeners.queue.ts",
              "size": 2585,
              "sha256": "5cf385250d4a969814b31fadcc0d9d8f020d0e7f43d872c3f3628d528c1759a0"
            },
            {
              "path": "src/monitor/listeners.ts",
              "size": 25226,
              "sha256": "3e82eec136a420409bc717a8ee74ecd19d0bb951bc7b6a499f31772c6d2eccd7"
            },
            {
              "path": "src/monitor/message-channel-info.ts",
              "size": 3036,
              "sha256": "fa324bd940765488c14b71da0843163514cdb3b25c0240964905edead363d236"
            },
            {
              "path": "src/monitor/message-forwarded.ts",
              "size": 3977,
              "sha256": "749c6bb60759960049a4bc43eab51d4a760d9817a5033027d903accd08e21592"
            },
            {
              "path": "src/monitor/message-handler.batch-gate.ts",
              "size": 593,
              "sha256": "65fe17f36aa62f3c068ed3b0bf9e7da55c7918c8684cc0fa71c11f9efae024c4"
            },
            {
              "path": "src/monitor/message-handler.context.ts",
              "size": 17574,
              "sha256": "ab8b609b75600f3e4259ab57b2db71d44a76dbec93d6906b5c3d2d1775ebef9b"
            },
            {
              "path": "src/monitor/message-handler.dm-preflight.ts",
              "size": 4272,
              "sha256": "6361228dfe9ecbeb316371c1098c728775b76ddbabe0a53e38f38b56036e458a"
            },
            {
              "path": "src/monitor/message-handler.draft-preview.ts",
              "size": 14056,
              "sha256": "ed02faf1af5dae19be8f8a53382860331367f42753a2fd89c8add7ffd1abf388"
            },
            {
              "path": "src/monitor/message-handler.hydration.ts",
              "size": 7301,
              "sha256": "0fec369a6328ac494bb4d8159646c3b54ea4925b9406482de6b1e0625a274995"
            },
            {
              "path": "src/monitor/message-handler.module-test-helpers.ts",
              "size": 835,
              "sha256": "f906b88acc8271115c68be2dce16b1033cc89fd6c729cdf2e40cd817d2193c2d"
            },
            {
              "path": "src/monitor/message-handler.preflight-channel-access.ts",
              "size": 3554,
              "sha256": "0c0d2057c5956e42377dbe3991a2d8b5fbdffee798dd3f03c4d4e906703b8746"
            },
            {
              "path": "src/monitor/message-handler.preflight-channel-context.ts",
              "size": 1988,
              "sha256": "cb01bbce6b2bb3c8780bf533fd558d95ea767d8660a64c1f72e59c0e1f519827"
            },
            {
              "path": "src/monitor/message-handler.preflight-context.ts",
              "size": 1546,
              "sha256": "52e34a87550d57b1bf6f247dc4955cc589d5eb93f34444fdab85cd4f0a798c3b"
            },
            {
              "path": "src/monitor/message-handler.preflight-helpers.ts",
              "size": 4853,
              "sha256": "c4b1282c05798f204c7be91e05583581c306b18fb3e779d177b5baf3402a527b"
            },
            {
              "path": "src/monitor/message-handler.preflight-history.ts",
              "size": 880,
              "sha256": "1715b69d9c191385598d0fb2c76e6648c356b097ca14a8d3cd94d5fc63d4f104"
            },
            {
              "path": "src/monitor/message-handler.preflight-logging.ts",
              "size": 1714,
              "sha256": "63dd5d1e22d1b0c7881b31204337c82ff12150d15e07e23245c16a3dd91bbfd7"
            },
            {
              "path": "src/monitor/message-handler.preflight-pluralkit.ts",
              "size": 1004,
              "sha256": "95b192801c96977e4a93115160d197b6ff3ef65fda8e3d96fafe604084483ef0"
            },
            {
              "path": "src/monitor/message-handler.preflight-runtime.ts",
              "size": 1114,
              "sha256": "347e5a28211f8e7054c812f14422bfeab155228622bf4d5051a1923a6e0e3e15"
            },
            {
              "path": "src/monitor/message-handler.preflight-thread.ts",
              "size": 1715,
              "sha256": "a1cb12e68dfdc0b7fb109aae56d64b4980d792f28365ad21aaaf0e4455de6319"
            },
            {
              "path": "src/monitor/message-handler.preflight.test-helpers.ts",
              "size": 3098,
              "sha256": "c197dccd2cb565fc0cf4d289ea34ba7640de172d946b97cf64f22c5f00280f9f"
            },
            {
              "path": "src/monitor/message-handler.preflight.ts",
              "size": 32630,
              "sha256": "40c8685bb7d35b3c4569ee483260f3fb01a65ec9e0043786a56d824454309358"
            },
            {
              "path": "src/monitor/message-handler.preflight.types.ts",
              "size": 3763,
              "sha256": "ddf19055c7b21cbe273e7e182f562b5e589b26b462fd40145970cbfe1bd9310e"
            },
            {
              "path": "src/monitor/message-handler.process.ts",
              "size": 30030,
              "sha256": "dd9eaf4888f75de5a6edf516552c22de6c434baf43eb3f109da1fb83e6fd7a45"
            },
            {
              "path": "src/monitor/message-handler.routing-preflight.ts",
              "size": 3848,
              "sha256": "fb3263a1988f5e9b813a16a31e19adf774c4ac8d2a7d1570fcb7902e18727102"
            },
            {
              "path": "src/monitor/message-handler.test-harness.ts",
              "size": 2948,
              "sha256": "285be473831330aa27f762d6a055d0195d74b2aca027f0413448760a2156b2b8"
            },
            {
              "path": "src/monitor/message-handler.test-helpers.ts",
              "size": 2047,
              "sha256": "9136e01d7d1b940bf1c1b68d146c68801b6d6735f894aebe97d281a66648711d"
            },
            {
              "path": "src/monitor/message-handler.ts",
              "size": 7596,
              "sha256": "5c7844a740ec09b5f7a46b2831f02fe5897cbfbc471ccd634e43db6962144229"
            },
            {
              "path": "src/monitor/message-media.ts",
              "size": 17033,
              "sha256": "81ac2e4e98bbf09b7ec81ea0008643ce7018ff8481a174e9e5367393195bd31a"
            },
            {
              "path": "src/monitor/message-run-queue.ts",
              "size": 3274,
              "sha256": "503e5b482315e2e10544f774a5b5b48ca612ea47336f96bcbf5e41160c952869"
            },
            {
              "path": "src/monitor/message-text.ts",
              "size": 6897,
              "sha256": "e9b56a6f3ae1bb10a73620b78da44a02248cf0486481f2335aeb70145f53e4c8"
            },
            {
              "path": "src/monitor/message-utils.ts",
              "size": 19127,
              "sha256": "be647af56f23badc4e381ca6a3382b1e4ab09e3606d3e52dfea819fef442f96a"
            },
            {
              "path": "src/monitor/model-picker-preferences.ts",
              "size": 4900,
              "sha256": "dadc6acc1ee0408db422ce0ac672f8e7fa51356b1a0b359fe1032e583078441a"
            },
            {
              "path": "src/monitor/model-picker.state.ts",
              "size": 11128,
              "sha256": "716607cafae629225b5c1ea1854002e0f7cdfeacb49cf5db9d05037048873a64"
            },
            {
              "path": "src/monitor/model-picker.test-utils.ts",
              "size": 869,
              "sha256": "f40bf69923f91dcf740780a508f815e465542efe107025dbb804365a01225283"
            },
            {
              "path": "src/monitor/model-picker.ts",
              "size": 27883,
              "sha256": "79e3f5cc974f6a5139bef743697b9fe72d5a1ff78b4cafeeaa854487f9bf536f"
            },
            {
              "path": "src/monitor/model-picker.view.ts",
              "size": 21112,
              "sha256": "20e5cce145f52173b5b9f1b8bc690f58d8439455a37c64917ea00255ca8e9d88"
            },
            {
              "path": "src/monitor/native-command-agent-reply.ts",
              "size": 4369,
              "sha256": "2871a7511b947d94a6c43526a979d738015727c7dd2e42ed54c59c76c853aa0b"
            },
            {
              "path": "src/monitor/native-command-arg-ui.ts",
              "size": 7301,
              "sha256": "d291de63ccf752424104b6e80d965b1c5d925559b39e185b42296a6f4bf8aed5"
            },
            {
              "path": "src/monitor/native-command-auth.ts",
              "size": 10439,
              "sha256": "e93497f13c5442a86e88ce0c01b2ef706bd7393b41c669421b1b0c7c6f065d3f"
            },
            {
              "path": "src/monitor/native-command-bypass.ts",
              "size": 640,
              "sha256": "4f41a1454b0fa417643672902e16e293876f03e92c58bf606ec61af086a81ed1"
            },
            {
              "path": "src/monitor/native-command-context.ts",
              "size": 3455,
              "sha256": "8b4cf3a30763cf73a992dd3ad73b1e4d6c22e15fdef437b10a84fa5f423222ca"
            },
            {
              "path": "src/monitor/native-command-dispatch.ts",
              "size": 1238,
              "sha256": "6880af6c9807d2dc068ac99f94c29c768b34817ab67776dd677f382022242aa8"
            },
            {
              "path": "src/monitor/native-command-model-picker-apply.ts",
              "size": 7545,
              "sha256": "fb4cbd4265e0c71c76ed1fbc233435006b9597e2eb860f48fa652905161d4fd6"
            },
            {
              "path": "src/monitor/native-command-model-picker-interaction.ts",
              "size": 13683,
              "sha256": "1a18e52d0612cedb301a538d5fe9b8cc37a71440d6faa8e519ebb4f0efa62039"
            },
            {
              "path": "src/monitor/native-command-model-picker-ui.ts",
              "size": 11144,
              "sha256": "6141f54ad635880c52ce83f38a3092453efc09755922b504e5478a931ffde87e"
            },
            {
              "path": "src/monitor/native-command-reply.ts",
              "size": 5610,
              "sha256": "7841e8c111d9a2d2d86d8b723e3d56f4d903aff19a0bd90db4a3f6c343ede0b7"
            },
            {
              "path": "src/monitor/native-command-route.ts",
              "size": 3119,
              "sha256": "d12140e086a1b18319d436849020de10b4ae61d8ca5e22fc09951d2093db6c08"
            },
            {
              "path": "src/monitor/native-command-status.ts",
              "size": 3139,
              "sha256": "301dc551ffc00bb71e70d5ac5f6be920ce215cc94ee97a302f59c0f9ce5b6cb3"
            },
            {
              "path": "src/monitor/native-command-ui.ts",
              "size": 35029,
              "sha256": "37dea12e7604e58ad120a1833bb1950e06b0e34dc564788b64a9c896645c6826"
            },
            {
              "path": "src/monitor/native-command-ui.types.ts",
              "size": 609,
              "sha256": "7c0c063ae6e9a8e6a499224d925ff1567837e3b369ac7bae1f172b69857dd4d5"
            },
            {
              "path": "src/monitor/native-command.args.ts",
              "size": 1472,
              "sha256": "df92a1df18a5e1c09a3dcb445c81456466725b37b7408442e46604df2c5bed17"
            },
            {
              "path": "src/monitor/native-command.options.ts",
              "size": 5424,
              "sha256": "318ed617c694ebf2113d5c9a5de0a825aae4cac497f9531478fe7b4ee9b86e2c"
            },
            {
              "path": "src/monitor/native-command.runtime.ts",
              "size": 2158,
              "sha256": "348f355d91c8f22524868d41a849991fea0e70acb04897040c9ac2101d1e9bee"
            },
            {
              "path": "src/monitor/native-command.test-helpers.ts",
              "size": 1764,
              "sha256": "3cad6eab5fa8ea39417783601e61a147a9d7565e885052873075ea21681a22d9"
            },
            {
              "path": "src/monitor/native-command.ts",
              "size": 41950,
              "sha256": "f3defeab0d0fa384c96b4ff2d696c63082caa4b59cab433b158d132444f5304a"
            },
            {
              "path": "src/monitor/native-command.types.ts",
              "size": 326,
              "sha256": "6eae4e2f8aeb75ca6352a01151b674525535aceb45330f91dbe4f2bbc534c68e"
            },
            {
              "path": "src/monitor/native-interaction-channel-context.ts",
              "size": 1684,
              "sha256": "38d14697cecc141769bd457ed51bd090005540366033fc61ce73fe3faba0bf62"
            },
            {
              "path": "src/monitor/preflight-audio.runtime.ts",
              "size": 383,
              "sha256": "13ad54ac49a04e953ff8cded90076ed61a596fe423a35f341414e20922797eb4"
            },
            {
              "path": "src/monitor/preflight-audio.ts",
              "size": 2581,
              "sha256": "0803957568fcd2e54832ee0a65f2e39194c13ef686ea6134ea9af5119d035d61"
            },
            {
              "path": "src/monitor/presence-cache.ts",
              "size": 1837,
              "sha256": "820cc7cbd1113febeb146cf0c233b57bacb18853802e612679c40c0b8d7fe6d7"
            },
            {
              "path": "src/monitor/presence.ts",
              "size": 1582,
              "sha256": "bf75f08deedda697fb7d897d6c9999bdec11907a02231cd26722518ad2e878f4"
            },
            {
              "path": "src/monitor/provider-session.runtime.ts",
              "size": 463,
              "sha256": "4a9daf4ccce47588b54313be5559525de2e4dc9a016651634d5eabb156c14371"
            },
            {
              "path": "src/monitor/provider.acp.ts",
              "size": 3180,
              "sha256": "19f6bc5df0c9cd0a6055d85e35ac1b8e52cba1992bcc175b28166cdbe65a3eef"
            },
            {
              "path": "src/monitor/provider.allowlist.ts",
              "size": 11183,
              "sha256": "91ffaa7ff31115e8ce8f9befd601dbc9b8727beeaf1c299509f2be0d5e1832e9"
            },
            {
              "path": "src/monitor/provider.cleanup.ts",
              "size": 1494,
              "sha256": "8aba6b24c444039a02677db47f357aa897b83a65a3213d0249a1fa48566f342d"
            },
            {
              "path": "src/monitor/provider.commands.ts",
              "size": 4348,
              "sha256": "26af004c1a2102f0c9622d704f7200e4f6a3a7297c77ce916c4a4bb8c0ea1082"
            },
            {
              "path": "src/monitor/provider.config-log.ts",
              "size": 2119,
              "sha256": "81c161540d17b7ad53f44a2982885da693c97a7c40db4d3eece549f47bc72f4b"
            },
            {
              "path": "src/monitor/provider.deploy-errors.ts",
              "size": 11919,
              "sha256": "96bbe1e19f7dc66e3bcf399502cb683ff1ae26a601ef88c8062ca4aae71f463b"
            },
            {
              "path": "src/monitor/provider.deploy.ts",
              "size": 7753,
              "sha256": "6ffdc69b4e50a893404e9267f781b93b4f915e240e8dd98a057868d242aa809b"
            },
            {
              "path": "src/monitor/provider.interactions.ts",
              "size": 5565,
              "sha256": "eaa18ad6721724a023ea35e17ce238ea36ee20b38ae59e059c1e996275b0993d"
            },
            {
              "path": "src/monitor/provider.lifecycle.reconnect.ts",
              "size": 16099,
              "sha256": "38fcbf0039a418daab5859bd1195d689f6caaee4a45e346cb395b340d7f0e6c0"
            },
            {
              "path": "src/monitor/provider.lifecycle.ts",
              "size": 5410,
              "sha256": "b3f5b642f83ff0a3232ba707bc9cd814be038d4f5718a7c75442aff4385e0d28"
            },
            {
              "path": "src/monitor/provider.runtime.ts",
              "size": 56,
              "sha256": "c292254f9987ce2a5c832b32c0f5555c6f58635b9916cc646fcde3367c8febce"
            },
            {
              "path": "src/monitor/provider.startup-log.ts",
              "size": 1161,
              "sha256": "d1c6babc1db3afe80c4c41ed57e41363ee424093503b230335e70ae6da4c2a7e"
            },
            {
              "path": "src/monitor/provider.startup.ts",
              "size": 8146,
              "sha256": "7a994a139f7272db6769dcce288b481f65d33444b8a3f9b2613c4fefa987947e"
            },
            {
              "path": "src/monitor/provider.ts",
              "size": 43840,
              "sha256": "391034fdea70026a933c226e2c29db5523b5c91ed5e9e392c1ac7afad02dab3e"
            },
            {
              "path": "src/monitor/reply-context.ts",
              "size": 1676,
              "sha256": "254aef64628065561dd5f5ede76052cfc54c6be474c2ee95ec65be04cc19061b"
            },
            {
              "path": "src/monitor/reply-delivery.ts",
              "size": 12358,
              "sha256": "bf2b1455e7f720c5d7f87a2014452127774db7d6978ef896b1e19798cc936463"
            },
            {
              "path": "src/monitor/reply-safety.ts",
              "size": 3662,
              "sha256": "762f0f22a57c07ff541967c7b57116f47a46255115349a9fa7a86d5e14a88c22"
            },
            {
              "path": "src/monitor/rest-fetch.ts",
              "size": 958,
              "sha256": "98a20352feec9f2873c60cc7e76e23faebd65309657827e44288ddce74ee503c"
            },
            {
              "path": "src/monitor/route-resolution.ts",
              "size": 4451,
              "sha256": "68b8518bd33edc6ae2e5d5b1736970a64a1eac3165dd266e6abadea9b4170a07"
            },
            {
              "path": "src/monitor/sender-identity.ts",
              "size": 2490,
              "sha256": "631dcaa8b447f53d39790dedfe54e0f4a4a2ee98c9ef1768582f20b86457710a"
            },
            {
              "path": "src/monitor/startup-status.ts",
              "size": 373,
              "sha256": "4e0f4a2154b136cf0bdb4b8a08958ed8e646d205d7f710b8737b8476cf254841"
            },
            {
              "path": "src/monitor/status.ts",
              "size": 516,
              "sha256": "a7af33fa793d704d1a1753e516c77d49631ec047cf7c5d382921f18c21eaf5c4"
            },
            {
              "path": "src/monitor/system-events.ts",
              "size": 2980,
              "sha256": "16f258ce1ffeac4d8c3bd2d0c82251637e93f63646127c5de20609c12606708d"
            },
            {
              "path": "src/monitor/thread-bindings.config.ts",
              "size": 1457,
              "sha256": "9b877343127743d9a4fa66ba92ef1ab4f2ed664b023eb87a7426887563c77914"
            },
            {
              "path": "src/monitor/thread-bindings.discord-api.ts",
              "size": 8718,
              "sha256": "9c8bcf793a71b41eee84f59d670d58eaa6c497f0d95e9416eb1b195b10c03b6d"
            },
            {
              "path": "src/monitor/thread-bindings.lifecycle.ts",
              "size": 11869,
              "sha256": "5f91078228a72ba35bb8c87e03ecf50e4ee3dace6d549b81bba7b5c45a709fa4"
            },
            {
              "path": "src/monitor/thread-bindings.manager.ts",
              "size": 23009,
              "sha256": "f8b96767ca7167549bda1f4a7e05b8f3510123247fba4f1611f97c91f502b04c"
            },
            {
              "path": "src/monitor/thread-bindings.messages.ts",
              "size": 199,
              "sha256": "804b28b626ee07a83e2c68df7213fe743a62e0e6504e9807d4e023df72933452"
            },
            {
              "path": "src/monitor/thread-bindings.persona.ts",
              "size": 880,
              "sha256": "ccecb334e146cc1df34b5707c264435e5e6b9599ca8b35bddd08b73c94901b95"
            },
            {
              "path": "src/monitor/thread-bindings.session-adapter.ts",
              "size": 7424,
              "sha256": "ebf0987ac98398d82a252490bbcb723cde789a87e952d7d9f9b7787f0803e2cd"
            },
            {
              "path": "src/monitor/thread-bindings.session-shared.ts",
              "size": 1655,
              "sha256": "42d4feeec40f8aea87a1e2418605cbb5c61c52c9bd100d11e18a53f65b4f666c"
            },
            {
              "path": "src/monitor/thread-bindings.session-updates.ts",
              "size": 1084,
              "sha256": "52c0a7c2952dc18ddc9e668b633f0c0309007477ac92297ea22b269132196799"
            },
            {
              "path": "src/monitor/thread-bindings.state.ts",
              "size": 17723,
              "sha256": "d5402df1897af6b1c9f44eeaa0d0a6d809553b0b930e429e58bf5e7b21cfe955"
            },
            {
              "path": "src/monitor/thread-bindings.ts",
              "size": 1353,
              "sha256": "d8007835bbc77cae8569e750ec3d962521b1b6bc0cc2948b98fe9c6cb62ee7c7"
            },
            {
              "path": "src/monitor/thread-bindings.types.ts",
              "size": 2760,
              "sha256": "87b96d2843bcd290af240a725bcac9701f0c3a02ed956e9e75efad7f82e073bf"
            },
            {
              "path": "src/monitor/thread-channel-context.ts",
              "size": 3482,
              "sha256": "c12434d6867e06e18b394cdc7f8eb6af88c2ee00c5ac309d7b4962cf4bf8a209"
            },
            {
              "path": "src/monitor/thread-session-close.ts",
              "size": 2242,
              "sha256": "f475c570e5b6ab40641b89ee00c92c06f0c28ef26493a4a6b58e3951b0701c54"
            },
            {
              "path": "src/monitor/thread-title.ts",
              "size": 5745,
              "sha256": "0a99e67c6ee88865e9de56b97c3e7b4ac9d71caf661441a07dc20336e9aed179"
            },
            {
              "path": "src/monitor/threading.auto-thread.ts",
              "size": 8935,
              "sha256": "fdda8d89e8ac6d1ba7f2166c6a7f5fe9ed4a44ec06bb28f60db60b8dc85cd44e"
            },
            {
              "path": "src/monitor/threading.cache.ts",
              "size": 1402,
              "sha256": "b59c217a72c0d5760ca54a60b84006b91cbbb1ab20fa311c42b885b62094cad5"
            },
            {
              "path": "src/monitor/threading.starter.ts",
              "size": 9813,
              "sha256": "92a363b7b6879e71c077ca5c0fbba41a22d2d7d44e7975cfd84c3f3c6686832e"
            },
            {
              "path": "src/monitor/threading.ts",
              "size": 18451,
              "sha256": "44f2fa49452102b23d4fe0d7f35aef5495fae69df496a571ad089290d4b4c054"
            },
            {
              "path": "src/monitor/threading.types.ts",
              "size": 2866,
              "sha256": "02e9da6bff8cb211570673e1e3169217ac2073d5a00287938464891d8388e6c9"
            },
            {
              "path": "src/monitor/timeouts.ts",
              "size": 5081,
              "sha256": "fd8cf037e49fa055d2d257f7f5be7c1811d277f74b8e6392e43aa4583cdf03fd"
            },
            {
              "path": "src/monitor/typing.ts",
              "size": 356,
              "sha256": "52021a6d5611bb9afab5d5f1917d6036b348747558b45274147bba33b0993b5f"
            },
            {
              "path": "src/network-config.ts",
              "size": 2315,
              "sha256": "c5bbe9196913e491f05d20e03d2d95c2e0409c7b9066ee2a77e00d7f6488808d"
            },
            {
              "path": "src/normalize.ts",
              "size": 2321,
              "sha256": "1cb98df1acee66260a03360e444612d575a53d283e5bfa6632e9ea49f17f5e0c"
            },
            {
              "path": "src/outbound-adapter.test-harness.ts",
              "size": 4439,
              "sha256": "68e728a2d02219726c3882c7a05eaa313e476f0e77be2b672a58aefe23dee34f"
            },
            {
              "path": "src/outbound-adapter.ts",
              "size": 7154,
              "sha256": "aa88bdbd0c4d70c7cd218c16cf693f20c123a4b6a9eca92bfa879b2cf86648f7"
            },
            {
              "path": "src/outbound-approval.ts",
              "size": 853,
              "sha256": "2567518354abc57f5d3c9e43557a1ee291c60c175096fd87175717927dd041b4"
            },
            {
              "path": "src/outbound-components.ts",
              "size": 3077,
              "sha256": "17d67c1badb4432af06345246065e2c5d2235d7549751406db70f32d69aefa53"
            },
            {
              "path": "src/outbound-payload.ts",
              "size": 7207,
              "sha256": "fe24b9958fa698d2d32ef93575b8620e86c2b2488d71a6e7356f152a3c740b3f"
            },
            {
              "path": "src/outbound-send-context.ts",
              "size": 2958,
              "sha256": "a979135283579f1ecb04ec10356d0bf08541ce293e26e1a7ce630c5da9e21501"
            },
            {
              "path": "src/outbound-session-route.ts",
              "size": 2254,
              "sha256": "145873a651a42621fbf1cf5275873b6ea7f8aa1b7714039f797a04eab346efa0"
            },
            {
              "path": "src/pluralkit.ts",
              "size": 1486,
              "sha256": "a1ca26debb1c41a9169c33d36a8011910790605b8f158fc9da4c356e40283ea7"
            },
            {
              "path": "src/preview-streaming.ts",
              "size": 476,
              "sha256": "8b15a8cecb27d70e8f4d0bff661b0881eefa2e14ed528acfb4e1ff695fc99abc"
            },
            {
              "path": "src/probe.runtime.ts",
              "size": 28,
              "sha256": "962cf4e9e338346358eed343d5a5d261b74988837b2629fcb6712cc6e5012d4f"
            },
            {
              "path": "src/probe.ts",
              "size": 7160,
              "sha256": "a2409a1376b41a7881c568be90c174b438f172f5dea0714b9d07ef3f8ea2949f"
            },
            {
              "path": "src/proxy-fetch.ts",
              "size": 2908,
              "sha256": "35d7e313b6bf52997d0facee140a1705dd9af0921b3e113723b468fe53bf88f1"
            },
            {
              "path": "src/proxy-request-client.ts",
              "size": 563,
              "sha256": "9f3ad804b7f09147a71026932765fc2a9a34fe0f239ff00b656bec9422d2224d"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 863,
              "sha256": "1e42599970d93add8ff876caf79466ac06ddb8ebd47a36489ca1def9295d1f31"
            },
            {
              "path": "src/recipient-resolution.ts",
              "size": 1122,
              "sha256": "91a24e7b8c46b7d771495cbccf29f0e5ff350acd44775544da8ebbd6dd8a33eb"
            },
            {
              "path": "src/resolve-allowlist-common.ts",
              "size": 1203,
              "sha256": "f09f3c00921a1dc429ec64777155f1cc59c5171b41b1b8b6f3d08d154e71a6f0"
            },
            {
              "path": "src/resolve-channels.ts",
              "size": 10613,
              "sha256": "7340f0f4ae738990d01e370cd70bc17262908b86573cde1221257c68509c880c"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 832,
              "sha256": "4add8a832cf58b2b3a1bf43ff26b718103d66483b989c6fcbba151a4b3954905"
            },
            {
              "path": "src/resolve-users.ts",
              "size": 4612,
              "sha256": "68fd1b63f589e353c3ebc8dc4536789ef80b2cbbe6972caeb8260b6a1f642161"
            },
            {
              "path": "src/retry.ts",
              "size": 743,
              "sha256": "e9dc8d46fb01de71d85f901d6f78ac6ea3c9cc44e3081c0db278af48eacce7ab"
            },
            {
              "path": "src/runtime-api.ts",
              "size": 1730,
              "sha256": "dbd0e6d052251240ae5cd4c6e8b252ffea05ccd9c32b7f70ac1e76e46b2fac20"
            },
            {
              "path": "src/runtime-config.ts",
              "size": 293,
              "sha256": "4849aac52e22eee9574e22c7870bfa65695275464117a29e136dc0151cb68c90"
            },
            {
              "path": "src/runtime.ts",
              "size": 343,
              "sha256": "cc5c53fd225922ace9a4680d2084801bd99e4f1c094731b861b72f4747612631"
            },
            {
              "path": "src/secret-config-contract.ts",
              "size": 4973,
              "sha256": "e62fa50c4bd96a4473c0277350d0fed25ed0e27b4d3233e369c4bd3bbe8f5da4"
            },
            {
              "path": "src/security-audit.runtime.ts",
              "size": 75,
              "sha256": "eb26a83513a9482c846c8e3ddf1f63f6c8c881ee95722e9d599000e8163b523c"
            },
            {
              "path": "src/security-audit.ts",
              "size": 8666,
              "sha256": "846b35561bd3e4c52984b7f4cb572709e0660c78618b2fbab78cd7bd7b3da990"
            },
            {
              "path": "src/security-contract.ts",
              "size": 1400,
              "sha256": "1f6d567aaf6953dccf55ad3d38bc93d9629cb11a3654a385f9b730509d8a6af0"
            },
            {
              "path": "src/security-doctor.ts",
              "size": 472,
              "sha256": "7603d7d56aea85eff8b2b5a519e608df3368a1bd460c1d7bdc8ef063b9906c62"
            },
            {
              "path": "src/security.ts",
              "size": 2468,
              "sha256": "4b5832216c5e29fb294e5e072d05c6d721d634be981dc85d38fc0866b1e0c192"
            },
            {
              "path": "src/send-target-parsing.ts",
              "size": 403,
              "sha256": "33baa38ed745160e2b2cd7a36a5ddcb18e165780f32168dcb3edcc56cc3f799c"
            },
            {
              "path": "src/send.channels.ts",
              "size": 3962,
              "sha256": "2529300ad20832fe925d102bb1bf245e1e7c71cb10a77d8f5190227129e0fb87"
            },
            {
              "path": "src/send.components.ts",
              "size": 7559,
              "sha256": "a4c71c0d9be1e09c3a335f96290374d12f47e1666eca519a7e490147e7a82b86"
            },
            {
              "path": "src/send.emojis-stickers.ts",
              "size": 2346,
              "sha256": "d83f3ce7fb24d72879f9e08fbb1c85ce4b60a000d5b4d9bef4d6df59cbe9b9ab"
            },
            {
              "path": "src/send.guild.ts",
              "size": 4570,
              "sha256": "ed390c22d642cfb07eaed7e5cc96652ed8bee7f78969a69fdb2d0a74b9d381c3"
            },
            {
              "path": "src/send.message-request.ts",
              "size": 3255,
              "sha256": "6947ea9eba0fb517efa07ac424dc7bb1e3082f425ba1cb1fea2dfbf0192bfc13"
            },
            {
              "path": "src/send.messages.ts",
              "size": 6109,
              "sha256": "3867bfad4dba05acc125e9ec6bcb109e7bf5e0b3fcd9cc53a860a1c3c364a3a6"
            },
            {
              "path": "src/send.outbound.ts",
              "size": 17956,
              "sha256": "8c811050f9e6cdf80d81c8172a87f78f3a652b2308418ea5bf3a30024cbe4d68"
            },
            {
              "path": "src/send.permissions.ts",
              "size": 9767,
              "sha256": "e1816c45be1cc70aa2a595b37aad933bcd40620df55f985747c4d9aa2eb24dd3"
            },
            {
              "path": "src/send.reactions.ts",
              "size": 3917,
              "sha256": "e3330680445a512a91c6a1c8625f4487d0b8fd439cc1886574e1c503719034f9"
            },
            {
              "path": "src/send.receipt.ts",
              "size": 2044,
              "sha256": "c53d0e23096237bab58c8475962c14764bcddbd2bcc7e71c2a86aa011ed9a48c"
            },
            {
              "path": "src/send.shared.ts",
              "size": 15565,
              "sha256": "fb3f6c53228edfedbb0988848f695b1b975a7d5b34efdffd30a1294eb70a836b"
            },
            {
              "path": "src/send.test-harness.ts",
              "size": 1439,
              "sha256": "acbd522479ae0194a8e9d879f8e8feca4d9b4862ffc4f4562fe29064b5794ef3"
            },
            {
              "path": "src/send.ts",
              "size": 2213,
              "sha256": "66605f9a44c7ae969c1110fbd0869aa76c752728e36e481fca31661815305902"
            },
            {
              "path": "src/send.types.ts",
              "size": 3894,
              "sha256": "c2b1bb520d3d614c0addf0f78b5a5f360dde7968155ddb3b3d5709ec710eec6c"
            },
            {
              "path": "src/send.typing.ts",
              "size": 375,
              "sha256": "0d4b03c7bcf495aac770da641732c2a2504e4effb8e48ebd620b27528e366f94"
            },
            {
              "path": "src/send.voice.ts",
              "size": 4698,
              "sha256": "dfa93bd9413694fb7dd600c731926f7153788001d68e7eb3f03197fd0436508e"
            },
            {
              "path": "src/send.webhook.ts",
              "size": 4164,
              "sha256": "48adcc08854a4ccbfc53e864770c43c8338c1fa5597b583e419829d741df769f"
            },
            {
              "path": "src/session-contract.ts",
              "size": 191,
              "sha256": "712314cdc7398865346e4d3b32943114c879866059aa76de82e5c8a9c6cb6510"
            },
            {
              "path": "src/session-key-normalization.ts",
              "size": 1443,
              "sha256": "e361cf0a8744466db71d8969823d813d0021e82f24d110fe85fa5dfb867c487b"
            },
            {
              "path": "src/setup-account-state.ts",
              "size": 4104,
              "sha256": "30866180492b95f1b7a0d0857fb6e5e476b1e8ffc9089d980ebf54514d6f007a"
            },
            {
              "path": "src/setup-adapter.ts",
              "size": 561,
              "sha256": "aac14215fbd69d9e7dcfc236718d9c9dec65b2fe1769392fe08b9d666d114541"
            },
            {
              "path": "src/setup-core.ts",
              "size": 7960,
              "sha256": "29a48b476d590255941721fa96f91600345e6270adfbe4f3d55ef39b1fb1a1bb"
            },
            {
              "path": "src/setup-runtime-helpers.ts",
              "size": 368,
              "sha256": "fbc84aa5635075297f151b39f91298943cfadd216fb73c88c0387c07a7ab0d1e"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 4249,
              "sha256": "f037ca351b95bb33ba355654469f89026d49d5ed142efbad13b97bbdf3c606d4"
            },
            {
              "path": "src/shared-interactive.ts",
              "size": 4324,
              "sha256": "8be6083ccb90bd5284c02f095bd8bf511b1fcb56fd0cd2e3fb61745d5cc262b4"
            },
            {
              "path": "src/shared.ts",
              "size": 3125,
              "sha256": "2badbe9acee11ecc472f4492e90dd467c74aafee719123901369b17c9fa388bf"
            },
            {
              "path": "src/status-issues.ts",
              "size": 5205,
              "sha256": "a4cd7aeeedd8fc14ee581908e2725c917d24dd865e7f6d1815b7757bf299ca47"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 6262,
              "sha256": "a2ab4413fe88dd11fc7bd23eb58757a6eb11e8f9565f9957a76d309422d5a12c"
            },
            {
              "path": "src/target-parsing.ts",
              "size": 2211,
              "sha256": "d6ae1991ca058bbc0622a045882149e2a445ad4d1c2adc8ad58c2de9a6c23455"
            },
            {
              "path": "src/target-resolver.ts",
              "size": 4036,
              "sha256": "05f537a1b352adc685a36bbb9ecaf97a6461bd3f414ada6ad234421310126242"
            },
            {
              "path": "src/targets.ts",
              "size": 5029,
              "sha256": "3a423bbdda5220973154caf4f1685ba8defcfff6e0734320c1c8d15da11836e8"
            },
            {
              "path": "src/test-http-helpers.ts",
              "size": 299,
              "sha256": "00952238c32d218a8e89495c8de263551cfd8ce79f2b6a936a8ef2359276afe6"
            },
            {
              "path": "src/test-support/component-runtime.ts",
              "size": 7328,
              "sha256": "2cd77109f8071856f6daa937204f4262f028905bb15fbf366f19dd716e94e3c4"
            },
            {
              "path": "src/test-support/config.ts",
              "size": 217,
              "sha256": "b8d33a1c6b2caf6fd4b4c79728d01a0b9a584e9afd9ad93a865eb32e89c1db96"
            },
            {
              "path": "src/test-support/configured-binding-runtime.ts",
              "size": 1174,
              "sha256": "d026667d8b11a37c6e29ed088e4cd9c8c9cf2a707712dccf9ac136e94a18b34b"
            },
            {
              "path": "src/test-support/partial-channel.ts",
              "size": 649,
              "sha256": "eff7ac398bdbe476438f0b5f6658750315585174777e04e8726c4ac12285c34e"
            },
            {
              "path": "src/test-support/provider.test-support.ts",
              "size": 14680,
              "sha256": "2b5e5f3ca41f0b8ed771653b62a22c62636bea827c20a7f85e465ed2fbf8c7df"
            },
            {
              "path": "src/token.ts",
              "size": 2118,
              "sha256": "f48d97cbdae354a79972d0d40077f849a5dd341e836b866972943e95fefb60b5"
            },
            {
              "path": "src/types.ts",
              "size": 374,
              "sha256": "03eef208a67e523d2ab919ed5f08bb93e1748b19a7d4370adcd40ecc4b1cf96d"
            },
            {
              "path": "src/ui-colors.ts",
              "size": 953,
              "sha256": "08394dd3ba3c32b3d231ddc968f21974dcbdebebc4eb0f4ab7a2b1a9a8f41106"
            },
            {
              "path": "src/ui.ts",
              "size": 1603,
              "sha256": "f9c6033791ea6ba9c3b1f56bcec3aa61456e4f442c4583dac8981ce5fa4e6cda"
            },
            {
              "path": "src/voice-message.ts",
              "size": 11761,
              "sha256": "0a46b9a30d460c4e9981c0f87b68b5119fa12b048a2efc2644421575f1fb34f2"
            },
            {
              "path": "src/voice/access.ts",
              "size": 4337,
              "sha256": "6aecad07439e122f85d33d4b2ae3871a2d34c4e3bad810abc0c176065fcc3bf9"
            },
            {
              "path": "src/voice/audio.ts",
              "size": 7872,
              "sha256": "536c91c1a68dc7d9631d7e70f8a2a65f9c2c7a742a2835f8b4f2789d0e2bed03"
            },
            {
              "path": "src/voice/capture-state.ts",
              "size": 3560,
              "sha256": "4721a8ca05d76fed497be565d0cd9eff642941d7c1031a85dcb34805e6766a54"
            },
            {
              "path": "src/voice/command.ts",
              "size": 12496,
              "sha256": "90df4d555e7e5e7e174cf79d784c4957bf7498c931d07bc50f3ba84a208d23bd"
            },
            {
              "path": "src/voice/config.ts",
              "size": 266,
              "sha256": "2ad20ef830f4786b05d65f8c7ff2ee1ba922a2d5814a0af0a3fad927b527f12b"
            },
            {
              "path": "src/voice/ingress.ts",
              "size": 5528,
              "sha256": "e52039ace3475aba354ba5832d251dd03a91ef50afe71dfb30e0af76dad72734"
            },
            {
              "path": "src/voice/manager.runtime.ts",
              "size": 294,
              "sha256": "8336795e287900d05ffd24242c59e02c43f8327c4e9be6a2c0ac41727939669d"
            },
            {
              "path": "src/voice/manager.ts",
              "size": 28702,
              "sha256": "5f30e6dceb4043728e6219d4f45bb48f6e1fdf9c622d500aaeffaf07e2c2fd79"
            },
            {
              "path": "src/voice/prompt.ts",
              "size": 1527,
              "sha256": "246b64faadc7a73acf66d921269340d553c260c201e5d7d1c82f9d8859fd07cd"
            },
            {
              "path": "src/voice/realtime.ts",
              "size": 53205,
              "sha256": "cd9a2d5db6e780cf8bc03c409bc7a8ca8acaa78038b8805ab2bd050cd1cb14ca"
            },
            {
              "path": "src/voice/receive-recovery.ts",
              "size": 4636,
              "sha256": "27ea0fb66b68a7e0a11ec9dad64ce341f533046b91a059f676061c6204ca15a6"
            },
            {
              "path": "src/voice/sanitize.ts",
              "size": 929,
              "sha256": "3495fa37401b8a3abbd978b0fc137634b3890be9ef1b833bf96aae2d14ce3966"
            },
            {
              "path": "src/voice/sdk-runtime.ts",
              "size": 455,
              "sha256": "e6a8c0ca684ad7e53a9fe3b1aef96c44b3dc60cc005ac26fcd03cedb97ca764b"
            },
            {
              "path": "src/voice/segment.ts",
              "size": 5360,
              "sha256": "f385f14cdbd41008c64acde13537a7fa0c564be846652a230f37f3c55739206a"
            },
            {
              "path": "src/voice/session.ts",
              "size": 2427,
              "sha256": "bbe726c913d5f4533e0bb93a8bb1b50d0d552a0a336ef500c3143707cbf5ec4f"
            },
            {
              "path": "src/voice/speaker-context.ts",
              "size": 3663,
              "sha256": "004e93cc3f1112b677cc102b3d74de00e966a4af910c79edbfefcec8e25a8d63"
            },
            {
              "path": "src/voice/tts.ts",
              "size": 3940,
              "sha256": "30e1509438f2e51166098110bb0e5f926ee94f3e618ca965b4bd18fdc2b00439"
            },
            {
              "path": "src/webhook.ts",
              "size": 1160,
              "sha256": "6938e165d021c2dccea8780d2ee7f7ca2fc020292ffc0c137b9108fd82593272"
            },
            {
              "path": "subagent-hooks-api.ts",
              "size": 1200,
              "sha256": "9680ba9e4a914a7aa6cc4980b3cde04ea24f493a6d4d8d783b7bfd288e912a4d"
            },
            {
              "path": "test-api.ts",
              "size": 168,
              "sha256": "84b3257f357a87958c61199f4f175fee508bd4e0726a35e3f4b6d4a51916f0f7"
            },
            {
              "path": "thread-binding-api.ts",
              "size": 58,
              "sha256": "fa6997c6cc5c7af6a0306cec15e6532dd7378ca550465dc14bb44c80e60461d8"
            },
            {
              "path": "timeouts.ts",
              "size": 129,
              "sha256": "13bb6a29fd5048b28a7eae28330fee1472c98e56fa5c915e4830bdaab3ad155e"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/matrix",
    "kind": "channel",
    "name": "@coreblow/matrix",
    "summary": "Official CoreBlow matrix community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "matrix",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for matrix."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "matrix-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 211829,
          "sha256": "ab017d39c212eb706346f47a312ab133efb76c697b34a496fe1b3d3459b8ee18",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "ab017d39c212eb706346f47a312ab133efb76c697b34a496fe1b3d3459b8ee18",
          "format": "tgz",
          "packageName": "@coreblow/matrix",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/matrix-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/matrix-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 661,
              "sha256": "935805ce1466d968c5de9686a0ef83ff87ab89b0d346e99096e03f4d4e811487"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 197,
              "sha256": "1f798ae7b778458703aafdc5c345a479004eb66e42165032aa09a0cde805c922"
            },
            {
              "path": "cli-metadata.ts",
              "size": 374,
              "sha256": "53f6690c451d8b42a99549a188ecc137bc0df341ffb253e30f692bc005d2998e"
            },
            {
              "path": "contract-api.ts",
              "size": 635,
              "sha256": "63a490ad22b7b1b589e2280b53f06d1899ce7da9f47ff8fd3f53229199c2cdd3"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 603,
              "sha256": "2362090129c86c2269002dae0aacc213df20563da9a2ec9a75112e79309a3d70"
            },
            {
              "path": "corehub.artifact.json",
              "size": 578,
              "sha256": "8248343395f2a64d946631ba402915663143ca3f95e8b9ab8fc046e5c49bbc15"
            },
            {
              "path": "doctor-contract-api.ts",
              "size": 92,
              "sha256": "aa98446585c88e99f7e439de8fb2f745ef645821d449404694d3b45875115d87"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "helper-api.ts",
              "size": 119,
              "sha256": "a3a46f7336a5654b92f9716538c8335521daa4935fe31fcbabb346bd7ee04eac"
            },
            {
              "path": "index.ts",
              "size": 1938,
              "sha256": "80e2fc1c5362085274dd23e4eab8a2878248444bcf9d13fd954c1bb9b9bd4428"
            },
            {
              "path": "legacy-crypto-inspector.ts",
              "size": 189,
              "sha256": "6abae3590579e1c62fbc114337c9ed5b26bf0c2a078ca455caa8ee26f290220d"
            },
            {
              "path": "package.json",
              "size": 1083,
              "sha256": "62ccde908d2975cb09c65d4880a716e61457ca1fecec75f9c2fbc0b723461924"
            },
            {
              "path": "README.md",
              "size": 217,
              "sha256": "b5bac22b683cd9e0be517b253112a20efa75ba2df35dc9013073f6daf87a932e"
            },
            {
              "path": "runtime-api.ts",
              "size": 1872,
              "sha256": "bb017b3558be42e8d904fd43c728eee6b2a0f080774c17b923f171b4e429676d"
            },
            {
              "path": "runtime-setter-api.ts",
              "size": 211,
              "sha256": "c8a7d0316b3bfc4c145460f3202372651e451be7d61933386bb4be54b2f11290"
            },
            {
              "path": "secret-contract-api.ts",
              "size": 128,
              "sha256": "c381e9461fc33c8b3f797fc2541fc4e91960ae02623fcfaf834ed0d56d6b9f02"
            },
            {
              "path": "setup-entry.ts",
              "size": 465,
              "sha256": "335d6b175afb6c8c6c119e9d0e887456e89763083101045e37905a42e1351ec1"
            },
            {
              "path": "setup-plugin-api.ts",
              "size": 176,
              "sha256": "c5d8b8708dc6162bc6094ce2137bb476454c3a322f72dc2bb721d1fb6ff04f75"
            },
            {
              "path": "src/account-selection.ts",
              "size": 7705,
              "sha256": "6e012b139657d117bed2c5ee872e6e4779e756ea86e837bd7f54b37ec9ba8f21"
            },
            {
              "path": "src/actions.ts",
              "size": 10930,
              "sha256": "41d7d76e5409fa629249c4ac36e7611902c2e3809778a05f6e7fa5694cff350c"
            },
            {
              "path": "src/adapter.ts",
              "size": 497,
              "sha256": "107a57b1c7bff8079e51f4017f307c36390e166541febac7b7d8a80a23831f4a"
            },
            {
              "path": "src/approval-auth.ts",
              "size": 902,
              "sha256": "6e0280db0dcc3144eb1761518a8ee6c5a0718ad3cb81f33e5b854f0d3cea98fd"
            },
            {
              "path": "src/approval-handler.runtime.ts",
              "size": 19662,
              "sha256": "dc5610706c913281085a4f3c09f4e300605012d1a5f588ca02c6da3764df43a5"
            },
            {
              "path": "src/approval-ids.ts",
              "size": 255,
              "sha256": "625bef6c7a1ac8f0dbc9b482de4f611115ec59b7fbf7265425b94f897d763d3f"
            },
            {
              "path": "src/approval-native.ts",
              "size": 12075,
              "sha256": "d0e163ba187451e7b97a44cdef3a6d2721b55ada4fa940cdde1145a95833dd9f"
            },
            {
              "path": "src/approval-reaction-auth.ts",
              "size": 1540,
              "sha256": "503a27ed77395d8af3da9cb01de14dd1bcc8d0a56650d79f95621369ce680360"
            },
            {
              "path": "src/approval-reactions.ts",
              "size": 8919,
              "sha256": "4fa3057d5b9d8ad48d335846b9e10c039c2402cfcd74be069a80d4e993451246"
            },
            {
              "path": "src/auth-precedence.ts",
              "size": 1795,
              "sha256": "d00de30b91c5308443a63005380e162b17d95bb18cab2780c2ba19a8baf4e4f9"
            },
            {
              "path": "src/channel-account-paths.ts",
              "size": 2668,
              "sha256": "1252c0ba2b0b412bdb91a1c3f7a9436e761117f2831b89857a9ec2f5615592cf"
            },
            {
              "path": "src/channel.runtime.ts",
              "size": 611,
              "sha256": "8f4fe435639cc8660b4e52200141956329ba1676b5294ea73b5d73d2f2bfe9c8"
            },
            {
              "path": "src/channel.setup.ts",
              "size": 1712,
              "sha256": "5c004a6441e1145f1a334baf3b866d79e51a59872e6a054decf67d13f2f32086"
            },
            {
              "path": "src/channel.ts",
              "size": 24748,
              "sha256": "a4c7efd5be86113cc63d908fd1e8f3abc85a577c0031c1bb33b6783b7b336210"
            },
            {
              "path": "src/cli-metadata.ts",
              "size": 529,
              "sha256": "a1c1b72d095e7ee50cabdf9fd03b8ba02356b8e53f7356fbbd95cff6b454c5ad"
            },
            {
              "path": "src/cli.ts",
              "size": 43732,
              "sha256": "11d7f3c8ab50cd6de6fb004731d20bb40ece3916062c3c62da0ac9e6368bbeed"
            },
            {
              "path": "src/config-adapter.ts",
              "size": 1278,
              "sha256": "4457248f278b1ee25435e560893adb58a70c79573233c7666df6bf019e59b8e2"
            },
            {
              "path": "src/config-schema.ts",
              "size": 5597,
              "sha256": "f6a4bb1f35826aa6cd1dfda2bc88607dc3bfa1ef8a6df7f75add7159ff6c0378"
            },
            {
              "path": "src/config-ui-hints.ts",
              "size": 2962,
              "sha256": "06e5f6bf38d3eb23904e5f218e995a9b9b015ddf3df4c39e860fb101cec26cd7"
            },
            {
              "path": "src/config.ts",
              "size": 679,
              "sha256": "e5697cf8fafb0b1cf7aa186ee3ebc40bf677d99735aa9a59af4d1a55de060ac3"
            },
            {
              "path": "src/directory-live.ts",
              "size": 6018,
              "sha256": "ca04dd9511b3a052a16ba3be91c044ee96bcc84352cd1729fa93d40d8ac48f2a"
            },
            {
              "path": "src/doctor-contract.ts",
              "size": 10050,
              "sha256": "c6de1072288dabab148e1fa89d8f51998824cc82428be5de76e98133a7d8e26b"
            },
            {
              "path": "src/doctor.ts",
              "size": 8611,
              "sha256": "0ab39faa880a6161de70b9e794250855037d5803d5706e22e814aaa112500e1b"
            },
            {
              "path": "src/env-vars.ts",
              "size": 2777,
              "sha256": "af4ebcfed79ba23e18b31ef3378ab717acc6ec3402be26074d24eaac69a0c753"
            },
            {
              "path": "src/exec-approval-resolver.ts",
              "size": 860,
              "sha256": "172cf8528b64a66af0b34d25afc2d2082ed71d9dd37882552deb312cba70d802"
            },
            {
              "path": "src/exec-approvals.ts",
              "size": 8870,
              "sha256": "bdc6726deedf5b342a8517f511959ffe57c5f8b65aa752fa9bb9f49f172f28c0"
            },
            {
              "path": "src/extension.ts",
              "size": 434,
              "sha256": "94b9153781b0e8c8837355d881b5d485132752b67edcca4a6fb85f889a63f2a2"
            },
            {
              "path": "src/formatter.ts",
              "size": 834,
              "sha256": "c5b5bbbffc13c306319ea70a95c4d3aa43eb3243e6a462556b56699c6928329e"
            },
            {
              "path": "src/group-mentions.ts",
              "size": 1520,
              "sha256": "c0a723cbf271fe77dd751d653c55305ecf5ae18cf2412922618f0f75fd040d41"
            },
            {
              "path": "src/handler.ts",
              "size": 421,
              "sha256": "0807a26032f714e7b0a241015330d0b18f9a9d5b5d851dc5788331702e662a43"
            },
            {
              "path": "src/index.ts",
              "size": 219,
              "sha256": "8fa1827e81f4d0bd92049c42bc60c54aabe236c6eb5c3ee7fa35d5e3f57657b7"
            },
            {
              "path": "src/legacy-crypto-inspector-availability.ts",
              "size": 1927,
              "sha256": "8a2c9fcd4e97313e7529557a5977b051acba6b320bc8bc33db55e608e894b7be"
            },
            {
              "path": "src/legacy-crypto.ts",
              "size": 16850,
              "sha256": "7ade76d2bd415b6b5f96783d7b89e62b2086981a882f73e74c7ea529ec91178f"
            },
            {
              "path": "src/legacy-state.ts",
              "size": 4529,
              "sha256": "ce96413b04d76428b528a40314226698ae018b2d7e20032e65f478afe620e66a"
            },
            {
              "path": "src/matrix-migration.runtime.ts",
              "size": 436,
              "sha256": "a0be3d12f70a06b4784b9f29b315e12fb686b3aae43bc3eeaeda00fb973af1e4"
            },
            {
              "path": "src/matrix/account-config.ts",
              "size": 1891,
              "sha256": "2b3f511d8da64aff54328d9b75c94bc3555e92d99a37c0cfaf9c0c97e1cb4776"
            },
            {
              "path": "src/matrix/accounts.ts",
              "size": 4893,
              "sha256": "edfbfad58cc827614c7f4b6cb32e6e5126e992943d19ce1ec4337a0022d856d8"
            },
            {
              "path": "src/matrix/actions.ts",
              "size": 1248,
              "sha256": "1b1fbf6c2fdddadacf09c3e46a034c718cd0bd53688076338760aebba9e4d30a"
            },
            {
              "path": "src/matrix/actions/client.ts",
              "size": 1169,
              "sha256": "4c4208b0150583a8cfd791a547824d89d04fd4a1a4d0bc894457b7b521307298"
            },
            {
              "path": "src/matrix/actions/devices.ts",
              "size": 1353,
              "sha256": "60097a96096b5895c9f7f2327999d77767f5f37a07c7a5fd1ce948668ef89718"
            },
            {
              "path": "src/matrix/actions/limits.ts",
              "size": 207,
              "sha256": "e1c01771b12430d6092d842743c7043cfaf263564e3c0a9ee744ab6019093d1b"
            },
            {
              "path": "src/matrix/actions/messages.ts",
              "size": 4105,
              "sha256": "041e031bdda329795951152cb82f97fbdee147b6665fc88ed8b59e2c10e70a39"
            },
            {
              "path": "src/matrix/actions/pins.ts",
              "size": 2076,
              "sha256": "52046b7adfa98b03dcbeaa538d43af4f94d268269826f3127004c1c33c2540f6"
            },
            {
              "path": "src/matrix/actions/polls.ts",
              "size": 3523,
              "sha256": "43ecb47714ffa44aafc8e589a237f798306620200217599e433a45ecb3c76763"
            },
            {
              "path": "src/matrix/actions/profile.ts",
              "size": 1290,
              "sha256": "b4af1233ec343c93b42a2de42c61affdfd7a5c434886cf5b0b4e58f9cf3d403a"
            },
            {
              "path": "src/matrix/actions/reactions.ts",
              "size": 2012,
              "sha256": "cc5667e0a59e67a69f093428ff6bcae8ad15619dc7ebae1be7eadf8c0b21424a"
            },
            {
              "path": "src/matrix/actions/room.ts",
              "size": 2364,
              "sha256": "0dd5ac931f6330f30f02d5b558bae8b47b2f0ade9c8ec7061c20d66781de4bba"
            },
            {
              "path": "src/matrix/actions/summary.ts",
              "size": 2648,
              "sha256": "f59b768c66a8b212808b64c36b9607704035a09944d714ca26233e21f43b806e"
            },
            {
              "path": "src/matrix/actions/types.ts",
              "size": 1990,
              "sha256": "4168ae637eff59f05ecd91124846f400ba23aa02ad9b1182f3a01746136f9856"
            },
            {
              "path": "src/matrix/actions/verification.ts",
              "size": 7619,
              "sha256": "098f8bef328820be16738f7de1f4e186119da353ec191f909dce5fbf799762ad"
            },
            {
              "path": "src/matrix/active-client.ts",
              "size": 783,
              "sha256": "b8c29fcc4ee09d3b37662360ec9707f1be07d0c7d7a8699f2f01d351eee415ca"
            },
            {
              "path": "src/matrix/async-lock.ts",
              "size": 482,
              "sha256": "5b059ade963ac605f1e983958c6560a71a9a54b4cd0fec9937e04967fbfb4e47"
            },
            {
              "path": "src/matrix/backup-health.ts",
              "size": 3404,
              "sha256": "e5598796452a01fa66a8efd2461cb18851f794e2d95f3faece029c77c2c34146"
            },
            {
              "path": "src/matrix/client-bootstrap.ts",
              "size": 4181,
              "sha256": "43c51a664c17debb2096882e63338521c100909a3f10ec9b0101e54157549062"
            },
            {
              "path": "src/matrix/client-resolver.test-helpers.ts",
              "size": 4718,
              "sha256": "656aaa940f48344f6f7d0c5406e06699fe42d694879bf43ef992976f1bbfe8f7"
            },
            {
              "path": "src/matrix/client.ts",
              "size": 725,
              "sha256": "6c983360ef0fea4e728ef6f05ffba7508f7a5dafabf5b882a9138b4def9e71fa"
            },
            {
              "path": "src/matrix/client/config.ts",
              "size": 26703,
              "sha256": "bb1ee505132ef599c9dbc519fb814fec5ba87a29b9812d5895b5d9986bbf1097"
            },
            {
              "path": "src/matrix/client/create-client.ts",
              "size": 2215,
              "sha256": "f4587fd0297ebb007d982f49a13ae4ed691f1f25d2b674b10be5981efb6af066"
            },
            {
              "path": "src/matrix/client/env-auth.ts",
              "size": 3343,
              "sha256": "d30cc81a2b81546d08df2553c372a006aae7f30b89fd44b0757120ad534bd6f9"
            },
            {
              "path": "src/matrix/client/file-sync-store.ts",
              "size": 8506,
              "sha256": "67d812db211fb0eec4ca0824cb4d1ab18249d5c9c04116fa3171e2b8b66e5d61"
            },
            {
              "path": "src/matrix/client/logging.ts",
              "size": 4126,
              "sha256": "b53319fe32f55aa53cd8a0df2abbfaa282a0b04c38ef07d8aa9ac723394f5655"
            },
            {
              "path": "src/matrix/client/private-network-host.ts",
              "size": 76,
              "sha256": "c77c029b62e6ee08823522456accda9ccf043c49677c12a68127ccb46719a207"
            },
            {
              "path": "src/matrix/client/runtime.ts",
              "size": 144,
              "sha256": "2b28516aa51a0197ffd11358e3a2904bce3116cbc3d31cce16578d377d2d8e81"
            },
            {
              "path": "src/matrix/client/shared.ts",
              "size": 7477,
              "sha256": "9f5c852a34a1d8bd528caab25ab78859a63e4be2d809383c395bc7ab5d91b86f"
            },
            {
              "path": "src/matrix/client/storage.ts",
              "size": 14363,
              "sha256": "78c341ec2618e03bc6422afbeed943c7c73499559c4634f5442b634d698d4eaf"
            },
            {
              "path": "src/matrix/client/types.ts",
              "size": 1298,
              "sha256": "9e871bf5fb6e6951525757b998116274256c0f6cb4fa71671bf39b81f7348082"
            },
            {
              "path": "src/matrix/client/url-validation.ts",
              "size": 2353,
              "sha256": "9aa797eff2359970b4490c14dd688841aa2822e92fee9915f318a301ab64089f"
            },
            {
              "path": "src/matrix/config-update.ts",
              "size": 8726,
              "sha256": "5cdac847e80d290c12764907b78df90672f679fcffae46a044536d7abc3d634b"
            },
            {
              "path": "src/matrix/credentials-read.ts",
              "size": 4914,
              "sha256": "41129158b15646d0baa12dc6dfb388c2f768c2b3ba34729b896e9051dd1cf383"
            },
            {
              "path": "src/matrix/credentials-write.runtime.ts",
              "size": 665,
              "sha256": "c7c3443f5d4bdb48c32bfe5cf88128f2348a27818e27004752dd64f6867c551f"
            },
            {
              "path": "src/matrix/credentials.ts",
              "size": 1435,
              "sha256": "24246869f6fa8af7629c3f06cf7f80fa0e41c22581c456aa6dbb37a5e40f3cd3"
            },
            {
              "path": "src/matrix/deps.ts",
              "size": 6002,
              "sha256": "d8337ff430fb0fcd6a5abc8ad7331556f210073bbe96bbde02f470b629c8d831"
            },
            {
              "path": "src/matrix/device-health.ts",
              "size": 1031,
              "sha256": "bce673a7f1cde7d2d14fe58fb996013d56f51ab74acb592369fb402f4a76389e"
            },
            {
              "path": "src/matrix/direct-management.ts",
              "size": 7159,
              "sha256": "0cb65183354936059a7f7dfdecd76d4dd6d986cf21d5cbcc8e4dfe65bef272dd"
            },
            {
              "path": "src/matrix/direct-room.ts",
              "size": 3145,
              "sha256": "307e8c5fbb70099da84844e89b4ad9e5163819b6e4f35d0c3614f12e35b4b68a"
            },
            {
              "path": "src/matrix/draft-stream.ts",
              "size": 7512,
              "sha256": "4bcdc38eea1f2107ee0db31b913dd2f1eb36b6ea3b7413339ff84bb8776a24ee"
            },
            {
              "path": "src/matrix/encryption-guidance.ts",
              "size": 1079,
              "sha256": "67319c5ee8f6e870348be4851e0f5a186ab9d32dbbc38f822aff3cea7a58eb89"
            },
            {
              "path": "src/matrix/errors.ts",
              "size": 813,
              "sha256": "02838f06da6d665ae7c6ef718413c562562071e298061e91bed23a6d8343de89"
            },
            {
              "path": "src/matrix/format.ts",
              "size": 12819,
              "sha256": "928c80d9b74ec2447b2e203ea32e473761f26f41f091003c0ad5feb44a561904"
            },
            {
              "path": "src/matrix/index.ts",
              "size": 60,
              "sha256": "0ec17c52a93c09b5e95a58ff200b137df4f626891e77191721168f205fbedb5d"
            },
            {
              "path": "src/matrix/legacy-crypto-inspector.ts",
              "size": 2982,
              "sha256": "d9a4d0cf2b43aafe9f98acbcd86476d749c6079dabd512dff9067b8ce5eb4ddc"
            },
            {
              "path": "src/matrix/media-text.ts",
              "size": 3729,
              "sha256": "5a8b25eaa17ec4c1860630dd05edb127e934d5dec39cba854146858ad93ebd3b"
            },
            {
              "path": "src/matrix/monitor/access-state.ts",
              "size": 2360,
              "sha256": "c3b597fb6059f8812654a0dc521b0ce5f5549c81c8087095482ae8ccf9534df7"
            },
            {
              "path": "src/matrix/monitor/ack-config.ts",
              "size": 1039,
              "sha256": "de39f693781290cb876f867412cd36b1885b3fc3c6c457dc32c7ea205760144d"
            },
            {
              "path": "src/matrix/monitor/allowlist.ts",
              "size": 3042,
              "sha256": "e69bd0fb1adf67c20284447d12143854d07ce7ff626dc4dca727fd30331acea9"
            },
            {
              "path": "src/matrix/monitor/auto-join.ts",
              "size": 2917,
              "sha256": "2edbf17e7948051ce4279fb204a9fe76e90f375b549880abd0768af8e9beec1b"
            },
            {
              "path": "src/matrix/monitor/config.ts",
              "size": 8761,
              "sha256": "6c95fe7f5dbe5a9823f6bc1947cc3c0c262529b30c83e81f04c6cb1da91d6454"
            },
            {
              "path": "src/matrix/monitor/context-summary.ts",
              "size": 1358,
              "sha256": "ac25ab5738d634db0d4ef15359af6315ccc116df128be9cd9fe92c57bb5f9b7d"
            },
            {
              "path": "src/matrix/monitor/direct.ts",
              "size": 4959,
              "sha256": "bad39ba96aa1ca53c64d90c2c31248fae6c627dce5d0f5dc269534b5f71cc488"
            },
            {
              "path": "src/matrix/monitor/events.ts",
              "size": 6579,
              "sha256": "8b7f2224e57c60c71cf6dbcec0250d40d713f50399e705679bd5ef1ccd34c951"
            },
            {
              "path": "src/matrix/monitor/handler.test-helpers.ts",
              "size": 10808,
              "sha256": "93eea79f63b8d41c56240ec0383054a627d95578c9cf7271236b5948733cce70"
            },
            {
              "path": "src/matrix/monitor/handler.ts",
              "size": 34407,
              "sha256": "fa63d02b097304333c50959f9d623a162c3404f0636c2cff005094e7b41c3804"
            },
            {
              "path": "src/matrix/monitor/inbound-dedupe.ts",
              "size": 6958,
              "sha256": "dac1c432474b0898e46d78edfe4a7d6b7096afd51da405184a4fb5ad4768e701"
            },
            {
              "path": "src/matrix/monitor/index.ts",
              "size": 11540,
              "sha256": "7e9d00e17b37194439e226c27f9a2e4a23f963041b9302c0281fc556203cd949"
            },
            {
              "path": "src/matrix/monitor/legacy-crypto-restore.ts",
              "size": 4674,
              "sha256": "85bc10b9629450e043ff641b278d7f3089a017f90f7a75e2fbb531a39f35afd7"
            },
            {
              "path": "src/matrix/monitor/location.ts",
              "size": 2722,
              "sha256": "c1e0224ae83f57a99623d3ce9def63a20d630b1a49856996e0784578fb77ffa4"
            },
            {
              "path": "src/matrix/monitor/media.ts",
              "size": 2932,
              "sha256": "d963d12e0dceca9533324b80a9f1fd5d31d36fc6e1f856be8b25d6e00efc1e17"
            },
            {
              "path": "src/matrix/monitor/mentions.ts",
              "size": 5651,
              "sha256": "05141efc3499f3858c16a91ea34e6f0acabf413857ac74171d63fcd340d36528"
            },
            {
              "path": "src/matrix/monitor/reaction-events.ts",
              "size": 3523,
              "sha256": "b129f37e20c9b6ffa019170f7f5e053a6a4e3a50a19f854c1e5e0ca3d7ff3329"
            },
            {
              "path": "src/matrix/monitor/replies.ts",
              "size": 4394,
              "sha256": "63faff3c79114e3d05401e2f3e58f1627430bb62277f1f0c9859c123adbe536e"
            },
            {
              "path": "src/matrix/monitor/reply-context.ts",
              "size": 2932,
              "sha256": "d81702a3744372b0d067c167c03d19107d48b0b9dac1f259dd7e3cb45293b71a"
            },
            {
              "path": "src/matrix/monitor/room-info.ts",
              "size": 3328,
              "sha256": "3cf9229abde7a7a6ead0e22d1acac5d121813c55fbf9ecfedede0516f550dd00"
            },
            {
              "path": "src/matrix/monitor/rooms.ts",
              "size": 1307,
              "sha256": "479f0de81ce1d72235b0c5dd91e34a9c21e296cd1e0673d226f1372deb26e057"
            },
            {
              "path": "src/matrix/monitor/route.ts",
              "size": 3159,
              "sha256": "c69a79ffcf9360d700c123c65fdef9d285b7d358b75e927c124aaff8e3302e89"
            },
            {
              "path": "src/matrix/monitor/startup-verification.ts",
              "size": 7084,
              "sha256": "4506c6c719ab5522aed52be66f7631ba8ddefcce66c848d8fa3f09f3bb799f32"
            },
            {
              "path": "src/matrix/monitor/startup.ts",
              "size": 6253,
              "sha256": "c2194cdf8464d2887872fe2f0ef52ccb4b2131625c9fb4e6c205d60fe96bd5ea"
            },
            {
              "path": "src/matrix/monitor/thread-context.ts",
              "size": 3384,
              "sha256": "dcb3d61bf15cc591c3e47c2889297a51c2bd436627cfe80715bc4d3339483ec6"
            },
            {
              "path": "src/matrix/monitor/threads.ts",
              "size": 1560,
              "sha256": "aa7c20ad3caf575e506046ef2d363b3dff8a9a30e76f629105a34d47b86ff67f"
            },
            {
              "path": "src/matrix/monitor/types.ts",
              "size": 770,
              "sha256": "90c9647e478e44ef0f226f3bd721e0aeea1e8557cda702c08d579ebce96b55b4"
            },
            {
              "path": "src/matrix/monitor/verification-events.ts",
              "size": 19267,
              "sha256": "ef41fec096be611c80bfa77390ce30198f680427d94b050fe75ca2e76a53ae11"
            },
            {
              "path": "src/matrix/monitor/verification-utils.ts",
              "size": 1456,
              "sha256": "d3e70636f51864b4aa25c406551006f05e6ab9efe98b02205549ca7dc8689f43"
            },
            {
              "path": "src/matrix/outbound-media-runtime.ts",
              "size": 79,
              "sha256": "5bd0c8806bb2a3a01e8d8a84bc9fefac66783ee4d119baa3c370d1755768359d"
            },
            {
              "path": "src/matrix/poll-summary.ts",
              "size": 2932,
              "sha256": "a2c2bf12b48b14ed0070109d4deefcf68f0f5499963adfc25587f8b7d6b5b23f"
            },
            {
              "path": "src/matrix/poll-types.ts",
              "size": 11821,
              "sha256": "ac0f27260d61b80815e792e1faaebbd1da2dd3c4da58472f0e174423346db843"
            },
            {
              "path": "src/matrix/probe.ts",
              "size": 2116,
              "sha256": "c0464c42e38a6910693ab670e7546ee0bce9ddd922567b7cf6ec87b34fd48ae9"
            },
            {
              "path": "src/matrix/profile.ts",
              "size": 5878,
              "sha256": "1a3e3b6175d2e3fa678c561283d6af06d65ff98ddd269a3b724efed8b4a01ef9"
            },
            {
              "path": "src/matrix/reaction-common.ts",
              "size": 3926,
              "sha256": "c17d6baa35613220fc92a5d1f17da1b1c66a51d001204ace81723488d226a117"
            },
            {
              "path": "src/matrix/sdk.ts",
              "size": 52068,
              "sha256": "538da725ddc6ab050767a3fc410a6766e42522936aa86155d6d6245b68ef1d81"
            },
            {
              "path": "src/matrix/sdk/crypto-bootstrap.ts",
              "size": 12264,
              "sha256": "bbbf3030ff6aeaeaeaf4824c6e8c22d6a2b980627a335929b3190790e9e912bb"
            },
            {
              "path": "src/matrix/sdk/crypto-facade.ts",
              "size": 7864,
              "sha256": "399fa56a8e6d1d82c73897bc5d6901254b74b6f16aebf6a94f769cbe2f2c62f3"
            },
            {
              "path": "src/matrix/sdk/crypto-node.runtime.ts",
              "size": 148,
              "sha256": "6bdd7cc8cce3e9eb9e6c3774994c457a26e7222bed053915084235838d32c13a"
            },
            {
              "path": "src/matrix/sdk/decrypt-bridge.ts",
              "size": 10497,
              "sha256": "9141ea1275d72bbe20efe05e9dac5fbbe6a61b002a9d52540a383be7de3c7b3b"
            },
            {
              "path": "src/matrix/sdk/event-helpers.ts",
              "size": 2088,
              "sha256": "a9297324b69b36d6dbee9c93adee364fdaa5a204cc6da6e296687e049b940aad"
            },
            {
              "path": "src/matrix/sdk/http-client.ts",
              "size": 2099,
              "sha256": "5a882a4099c86c20a27745ac42fdfbbbb227bb9bf1846192aec424563acaa23d"
            },
            {
              "path": "src/matrix/sdk/idb-persistence.ts",
              "size": 8252,
              "sha256": "1ebac87404788ea7b3cff482c4016e3474e04c2a5467d32859159eae2a980381"
            },
            {
              "path": "src/matrix/sdk/logger.ts",
              "size": 3192,
              "sha256": "43d2657034a530bd544410b29d3c55fa736d999ee0e2161f4828408b0257e053"
            },
            {
              "path": "src/matrix/sdk/read-response-with-limit.ts",
              "size": 664,
              "sha256": "b86462939a3b337747b22c7cb098eb20862fb4fca8a68804f36f21e2f9ffd39b"
            },
            {
              "path": "src/matrix/sdk/recovery-key-store.ts",
              "size": 14473,
              "sha256": "190e41b17f3e5d9afaec76bb16ea3819aa47ef4314e361fcf1da9dd1ceb24cf4"
            },
            {
              "path": "src/matrix/sdk/transport.ts",
              "size": 8662,
              "sha256": "00de59a74ccb2061df36db6571f5b1158e5888755261b0ec8a59a85b1f2c640d"
            },
            {
              "path": "src/matrix/sdk/types.ts",
              "size": 6309,
              "sha256": "9b739e9bc8540def2a739918fa593327946ef4055dfbaf5a75617d75a4ae0349"
            },
            {
              "path": "src/matrix/sdk/verification-manager.ts",
              "size": 23879,
              "sha256": "a23b7410ddb9cce75ee5f7c7110f4d91dae5979f70ad006a8dd032f47a766d2c"
            },
            {
              "path": "src/matrix/sdk/verification-status.ts",
              "size": 723,
              "sha256": "b8e4c0f3d6d86148f898ac5b6a33fc249ca886231b7eaa97076ac75c6a20faa6"
            },
            {
              "path": "src/matrix/send.ts",
              "size": 21179,
              "sha256": "a8c193ef84e6b383b198811b9b790a17ab5e1bd87d8ec6433f2741d6d26fb157"
            },
            {
              "path": "src/matrix/send/client.ts",
              "size": 2855,
              "sha256": "f1b55a110a2eeb69c5a1bfa2b100ceee0dcd31d83bbb7673be9b5592cd3372b9"
            },
            {
              "path": "src/matrix/send/formatting.ts",
              "size": 5182,
              "sha256": "fb86a34c768dc547e44bafd6cf3f25a7456240eeb5ed9efe268c296df0f293d2"
            },
            {
              "path": "src/matrix/send/media.ts",
              "size": 6493,
              "sha256": "1a7cb0d51c21c4b5f1bc8b93368f370203c3c485c32ac0f4eed37493c8dba19a"
            },
            {
              "path": "src/matrix/send/targets.ts",
              "size": 3503,
              "sha256": "b780106f229a2341f6db221ab35f2ef5342b8f61426eade128b25669a90dc4a7"
            },
            {
              "path": "src/matrix/send/types.ts",
              "size": 3449,
              "sha256": "2a19735d6f2cb0369da4a3d3fec27331ca742fd3babf8b4438e2c6e5fd2ffdc0"
            },
            {
              "path": "src/matrix/session-store-metadata.ts",
              "size": 3277,
              "sha256": "82b43b8047d8cbd38312625413da5ff4ae0fffc423a5a39f456c787e367d4571"
            },
            {
              "path": "src/matrix/subagent-hooks.ts",
              "size": 9011,
              "sha256": "d83e827e2afddd0515f45b1c3c95738ad45baa52d82ee83ea1f6cc48fb47b8b0"
            },
            {
              "path": "src/matrix/target-ids.ts",
              "size": 3225,
              "sha256": "b803a486ab0852b127d1f13e5f8ab5c982d5287a595d5aaa8c401110df5dee98"
            },
            {
              "path": "src/matrix/thread-bindings-shared.ts",
              "size": 6379,
              "sha256": "f2bedde92f911e2c8de3b9c4e82717a6aa5f636d007b981916e180b06c5dacb9"
            },
            {
              "path": "src/matrix/thread-bindings.ts",
              "size": 19306,
              "sha256": "d981671187d78e2fdd67f49b65665998212e34c06b4f55ccfcabd53b9d144367"
            },
            {
              "path": "src/media.ts",
              "size": 896,
              "sha256": "1fec17d48b996c8c5bd30e85f68dda0313af443d4bd0c0628806eda9a2d4d5a9"
            },
            {
              "path": "src/migration-config.ts",
              "size": 7605,
              "sha256": "0d21f2066c8f51b1a251f3c6697c9d0b8d73dcb5a91a941fc23946bd298c5765"
            },
            {
              "path": "src/migration-snapshot-backup.ts",
              "size": 3766,
              "sha256": "c0ac836da82982c494abc5ff84e22dfaabb18a5f0167739484d7f297817a1eb7"
            },
            {
              "path": "src/migration-snapshot.ts",
              "size": 1807,
              "sha256": "cb05190b8e7ac0c89699e114678c70aa75e82ac5effd69426beb02f52804e3ea"
            },
            {
              "path": "src/onboarding.test-harness.ts",
              "size": 10252,
              "sha256": "90f98a43f01647fce12d83a91f2d3c8d11e9802de2c54e2494e00b2e9477dd2d"
            },
            {
              "path": "src/onboarding.ts",
              "size": 25976,
              "sha256": "85d8079a8a2e447c98f75166f88264eb28329b40db6452df45b7a3c74e35e155"
            },
            {
              "path": "src/outbound.ts",
              "size": 7692,
              "sha256": "2f889cafd230b78e7bdc288c94bfc397bfb60fc764e0fdf00615f1386495f7ba"
            },
            {
              "path": "src/plugin-entry.runtime.ts",
              "size": 2180,
              "sha256": "a5a62e29c3d244c76e2ce2ea40aabc3fb0b2d3ab6914cc82058610e586e7ef4f"
            },
            {
              "path": "src/profile-update.ts",
              "size": 2427,
              "sha256": "57c4040f7d8fc0b50c5df8fd94445dd168c1381123035f31e5dfffc40f379a86"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 861,
              "sha256": "0aa6981680f4bb70291d6fade59ba9bebb1e1864bc3f613e314a4432bb7269ce"
            },
            {
              "path": "src/record-shared.ts",
              "size": 92,
              "sha256": "ab21bead2d511ffb6611011086fefc25358290890283a06ce6616f77ebe5280a"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 831,
              "sha256": "dd7f1dae923a80fae9c50f6bc1c5522318fe0ef3d782818cfb5058144a659843"
            },
            {
              "path": "src/resolve-targets.ts",
              "size": 5199,
              "sha256": "b095cbc8c8cbaa4d3989c45e5180db79fe50ae6b96dc3a3b9134b260ffcf8ea9"
            },
            {
              "path": "src/resolver.runtime.ts",
              "size": 128,
              "sha256": "c6ce87f5ef0ec90846b48b0160d7c5a7c3a0ab7cdd741676b9a5c9be1c4b9160"
            },
            {
              "path": "src/resolver.ts",
              "size": 709,
              "sha256": "31076efc4e93163a37f993911b1e15ba4e59c239fc6a21a7d1bd95c5ee78f198"
            },
            {
              "path": "src/runtime-api.ts",
              "size": 1902,
              "sha256": "546453382022cdcae9b0f47097c5540edf4dd2e3b9afedb92fc68198ee1a5a92"
            },
            {
              "path": "src/runtime.ts",
              "size": 445,
              "sha256": "dd87e63aa20965fa69da9cd2a3fb79e4898bd9d4d2a6da7efa169fd074bfb2ff"
            },
            {
              "path": "src/secret-contract.ts",
              "size": 5735,
              "sha256": "db1a4e1e65c981133d69b5afd90cde8f37640168e12484f8d0ace5dba29a0a17"
            },
            {
              "path": "src/session-route.ts",
              "size": 4117,
              "sha256": "6c0e32730fb2460a26a7395f8c7bc14dd5f7ce7e702f411e7ed13860a7ebb99a"
            },
            {
              "path": "src/setup-bootstrap.ts",
              "size": 2758,
              "sha256": "e0e6aa08ac414c9f1428962627c50dcf6235fe7b61486e64938b37bc20dba40e"
            },
            {
              "path": "src/setup-config.ts",
              "size": 6800,
              "sha256": "5fc6ef80dd10b2c862934e0197fa134332fca9e15bda3550b52e4ce569cc6b57"
            },
            {
              "path": "src/setup-contract.ts",
              "size": 2493,
              "sha256": "3b95380393461c722c2e9101f51e8e8d5d5a32eee3e697ff3827fd5b071c0c31"
            },
            {
              "path": "src/setup-core.ts",
              "size": 5889,
              "sha256": "3fe50e97833e4bb61310d25d7d347bc75b8b34279a722059de6ac2a291ed8e4c"
            },
            {
              "path": "src/setup-dm-policy.ts",
              "size": 560,
              "sha256": "eb3b556c010dcecae3f6dc9f109fd9292ffb2790b478b2e4aa564cb43d2b0bb9"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 110,
              "sha256": "0fcd26693ab1f4b337da736c24a33261c0ae136e61f64d60b975e364aeaab37a"
            },
            {
              "path": "src/startup-maintenance.ts",
              "size": 3425,
              "sha256": "fbcf0c4b66486bdd489d278e59556bf693a437aa713696c4e1dce97f4d223abd"
            },
            {
              "path": "src/storage-paths.ts",
              "size": 2620,
              "sha256": "df72b1de379df0c6831e05a95cc5d97b51f37db99e3b7f64ffd9cb177bb7b9ae"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1038,
              "sha256": "fa8ebd5472ef76dc3771c123a945eb0d0b984ee140f4c166359efab5bc46a981"
            },
            {
              "path": "src/test-helpers.ts",
              "size": 1344,
              "sha256": "b0df1d35da7c76847197ce72fa017fe8048909484b4098fd3586958380f450b4"
            },
            {
              "path": "src/test-mocks.ts",
              "size": 1393,
              "sha256": "4123b09fec7fbd514ebad027c292558514aec7b804ed02d184a13a1b58fd2e67"
            },
            {
              "path": "src/test-runtime.ts",
              "size": 2132,
              "sha256": "d506b46b83c9eea4f1b46636cdc693401fdb2ae9d84822aa6bd6eb2ee173e7e7"
            },
            {
              "path": "src/thread-binding-api.ts",
              "size": 918,
              "sha256": "3de3224c03de9afad67987773c7eb23559b05334183f2c635f9787b0acd7ea78"
            },
            {
              "path": "src/tool-actions.runtime.ts",
              "size": 56,
              "sha256": "e7045c1d42d03b762a84496bb86ea7d8b87ee4426de3bf46864be58aecd11706"
            },
            {
              "path": "src/tool-actions.ts",
              "size": 18053,
              "sha256": "ae476ba5592278b2bf52e062b0e9787fabbd8d441b65c6044c2493d0f710bed9"
            },
            {
              "path": "src/types.ts",
              "size": 7200,
              "sha256": "3e2c0b1ab859c81e3c50cabd48759b906721ad0440aefd8dcf56fce384bd7e2a"
            },
            {
              "path": "src/webhook.ts",
              "size": 1158,
              "sha256": "9b2c672a0544aa7f3c71e6f1163df6fde865b568b9a47abe589163de5d666d6e"
            },
            {
              "path": "subagent-hooks-api.ts",
              "size": 1246,
              "sha256": "15f813a8d7cc5099078dc5f55866e7308e352dc14f85a8e270b8bbc865ad780b"
            },
            {
              "path": "test-api.ts",
              "size": 102,
              "sha256": "8fd40c8fb3954e407d41b86c943c24dbf427ffb10f99e3c356738de8be229c34"
            },
            {
              "path": "thread-bindings-runtime.ts",
              "size": 151,
              "sha256": "10717b9b0da29924defa9ad7fe2cfa3f72329a454a104be9dee4dc386b1e1cae"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/twitch",
    "kind": "channel",
    "name": "@coreblow/twitch",
    "summary": "Official CoreBlow twitch community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "twitch",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for twitch."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "twitch-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 27844,
          "sha256": "30e290d9fdd9a4954b4d8316933fe6c1b5683e587c0de2fc35f2a9c451be6785",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "30e290d9fdd9a4954b4d8316933fe6c1b5683e587c0de2fc35f2a9c451be6785",
          "format": "tgz",
          "packageName": "@coreblow/twitch",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/twitch-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/twitch-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 34,
              "sha256": "301dccbe59e1a79720c8c52b6a96ebd0267b860494a3f617511e93065d462c50"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 48,
              "sha256": "af840e4e03da69837c9f7cff4fa46c028d03733a26893436b9aaf2f61505a8ec"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 158,
              "sha256": "f192c2222e0cf52b2d65c68f1e1190d15f515cb7490a0ea0befa72e386a87f54"
            },
            {
              "path": "corehub.artifact.json",
              "size": 578,
              "sha256": "62edfd3346dd6775b16985e7aa7d352ac0a6afef4716d772e5f5dd847b83dee5"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 426,
              "sha256": "a95c8e2400fd6f0559c099542a47977bae2d0a03b8aeadd48d879ab5fc7093b7"
            },
            {
              "path": "package.json",
              "size": 835,
              "sha256": "8c37d859337a40f112481ef6b5fe43f2c771329db0b10ee2672a8e16d67357d7"
            },
            {
              "path": "README.md",
              "size": 208,
              "sha256": "3dcc72a7deeb535c94c6f56907aa53dac5fb779b56163577cd49d08a28540bbc"
            },
            {
              "path": "runtime-api.ts",
              "size": 176,
              "sha256": "e1f6b9429fe61894ce5f64167772cccc359c3fe5f18476c15b22638172ec3788"
            },
            {
              "path": "setup-entry.ts",
              "size": 154,
              "sha256": "0b1d7895abf8f92c38d317c6968126282af779c9b5822ddab4fea5b96d8e68c4"
            },
            {
              "path": "setup-plugin-api.ts",
              "size": 82,
              "sha256": "ba86f241616b5a240d0ece4d1896ecbf965ba703cbf8451fba62780a933aa03e"
            },
            {
              "path": "src/access-control.ts",
              "size": 4255,
              "sha256": "ebe23100b85cacd6f6e25265f543327b113bd44f76a27e286ae4bfecc9d8a445"
            },
            {
              "path": "src/actions.ts",
              "size": 4991,
              "sha256": "4778ad840e8ed68972a9876e52736559d7f6b06de6b6d8d70076005e55231191"
            },
            {
              "path": "src/adapter.ts",
              "size": 497,
              "sha256": "51ce041f497ed53a98a9d7f68621bb3ceaa600d064d365128c0fceac256c2ea2"
            },
            {
              "path": "src/channel.ts",
              "size": 1458,
              "sha256": "fd16c5e55568b7c7223a8cbd261a07cc29ace4701a5a088c470da77b3f015a67"
            },
            {
              "path": "src/client-manager-registry.ts",
              "size": 2943,
              "sha256": "c9e2dc9695ae7598bfbd0fba5f10850c00fe4ccebb25974b57c91da2e7d19f0b"
            },
            {
              "path": "src/config-schema.ts",
              "size": 3144,
              "sha256": "6e2535796d38301f17e7c97dd311910e1b435a2432743e9a73d5e71167c8fd67"
            },
            {
              "path": "src/config.ts",
              "size": 5862,
              "sha256": "e99721095bc408d27c5969f76d8e1848f792d09320e69dd76f30d6b7036036b0"
            },
            {
              "path": "src/extension.ts",
              "size": 434,
              "sha256": "4f2f3525aa9416271d528fae0ffdf9c7512fc3488470f86775f9d5dce1177a52"
            },
            {
              "path": "src/formatter.ts",
              "size": 834,
              "sha256": "af5d800f02270242d316d1b5d90c30fda7bf31a77ea82fa3384a0eb435fecdb5"
            },
            {
              "path": "src/handler.ts",
              "size": 421,
              "sha256": "4f30f65272d88197e4e5a8018c8208b499a4337f8a2bf88258485b27a4c6b733"
            },
            {
              "path": "src/index.ts",
              "size": 225,
              "sha256": "5c2880839038f6eacdce58e3f4a8e195dde9cd6797fb9c197117171515c4cb11"
            },
            {
              "path": "src/media.ts",
              "size": 896,
              "sha256": "6ae23c8a91b6b097f12de313de577c2fee440d4b77cacaf7177597ebb8d685d9"
            },
            {
              "path": "src/monitor.ts",
              "size": 7516,
              "sha256": "0e54f099dfd8eae02e7952cb563c2340d8c92237b8da080958d7fbf2ed129961"
            },
            {
              "path": "src/outbound.ts",
              "size": 5613,
              "sha256": "9b4df8cc99108f6b6beaad94f3fb1f1dd5cb247d5db4655a00bc6c2061ee97a1"
            },
            {
              "path": "src/plugin.ts",
              "size": 7330,
              "sha256": "249bf5af95657675fe4cbfcc59198234ae8eb5730fedb3005a9f8728e4107918"
            },
            {
              "path": "src/probe.ts",
              "size": 3309,
              "sha256": "53f2b2c0d6837ce6be624b307c37252b2bbb4aa46f8a391a98da4fddc702c36a"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 861,
              "sha256": "7e985eed8f10cfadeca8830d16cb7951ad99bd9ad202012af8bffde76015892f"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 831,
              "sha256": "3353c905f07e38f5984d204807d0b944a2641278364c04bb15ebfc3095378996"
            },
            {
              "path": "src/resolver.ts",
              "size": 4043,
              "sha256": "327a0f844843959749ff64d44b35ba1874dc964362df6c2e647e750a907eeb7a"
            },
            {
              "path": "src/runtime.ts",
              "size": 1326,
              "sha256": "19949a9f7c0b759cd298354fb3ad9a5317b971f68baa55b362badaaae66b3bd1"
            },
            {
              "path": "src/send.ts",
              "size": 3783,
              "sha256": "e30650b382e40faa23d090a6cc30fc1a4752cd37f5d3596d653e3394f487e3b8"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 12383,
              "sha256": "7b12bf75aa9ba33ebd59ca5e8390ed0882401d84b13218d642e810a0210a338f"
            },
            {
              "path": "src/status.ts",
              "size": 5745,
              "sha256": "505f4dace05ed5c7443e6be81cab97d4fac454d1d282d12e9bc94680b9b67ed5"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1038,
              "sha256": "308f89f900c0190142a74dc8957905cf27ff51e5ec6781ff838fe3ef0fb96676"
            },
            {
              "path": "src/test-fixtures.ts",
              "size": 629,
              "sha256": "c097dd18b82cfd8a210954d6cbce6bbe5465654ba90c0d77c0f10c7b5f9e818f"
            },
            {
              "path": "src/token.ts",
              "size": 3150,
              "sha256": "afe2145789699290a2f60efca996e937537ffd27e515c20e0796008a2b578ad2"
            },
            {
              "path": "src/twitch-client.ts",
              "size": 8492,
              "sha256": "87e903d5961ff48187e90c06054b12b9418812820ceffeccae443d5bf8580707"
            },
            {
              "path": "src/types.ts",
              "size": 3920,
              "sha256": "17c7bce99159813bc389ea83b55f96768ea2e6d4eec2373ec1e471f25a81c4a9"
            },
            {
              "path": "src/utils/markdown.ts",
              "size": 2943,
              "sha256": "5f1dac27aa005e02cc8792029070063f56449001a3428c7bb4e9c3a7a21709c6"
            },
            {
              "path": "src/utils/twitch.ts",
              "size": 2370,
              "sha256": "d2dac7d077b560387a33e688b7f349e4c5bcf9d83d0b2546a686f30b0ed49e46"
            },
            {
              "path": "src/webhook.ts",
              "size": 1158,
              "sha256": "fd0e2caf30e2908d5463e238060c97037ac2203abf761c42e8851727d31ce123"
            },
            {
              "path": "test/setup.ts",
              "size": 154,
              "sha256": "a24b3cea301d2437f92806f4a8e162d7ec828a7bb9d3636c8e86885d30b15291"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/feishu",
    "kind": "channel",
    "name": "@coreblow/feishu",
    "summary": "Official CoreBlow feishu community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "feishu",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for feishu."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "feishu-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 126672,
          "sha256": "0c1f1104d9cbcd447a2f5fec2dd632d83932005156c659b31bb890aa6a109665",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "0c1f1104d9cbcd447a2f5fec2dd632d83932005156c659b31bb890aa6a109665",
          "format": "tgz",
          "packageName": "@coreblow/feishu",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/feishu-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/feishu-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 318,
              "sha256": "eef495c387adee42ce072deb8314ab8b9f42495426b9a3dd4ffeb43cd6871973"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 158,
              "sha256": "453a64eb8b68918d4f27d2fd710db4defe755586befa3d344302cd25b0a03509"
            },
            {
              "path": "corehub.artifact.json",
              "size": 577,
              "sha256": "a6b69a00ce121fa03f09707526c872558cb35d1c6dc332515668b1c829c9f2b9"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 2428,
              "sha256": "fb6acfb406c1e5ac799bcff172ee8f2a8e7e8cf34669f0f074d07f8aec958b90"
            },
            {
              "path": "package.json",
              "size": 1116,
              "sha256": "c8b690580e6b0e294383d8a1a1d3738a0af90fa753f913c05f4c5a4634356917"
            },
            {
              "path": "README.md",
              "size": 195,
              "sha256": "615ca133fa6684d92d1da3e04193a9fe41acf25478532015ac53519807f6f79d"
            },
            {
              "path": "runtime-api.ts",
              "size": 716,
              "sha256": "1f908ee4621ac9e5184b2cac4d0a081428fba95d1edaf23d795e727dc5355e6b"
            },
            {
              "path": "security-contract-api.ts",
              "size": 85,
              "sha256": "68abef2ea485a4130034be749f62f22b4b6194b9a7a0f7d3642f72de717a32ff"
            },
            {
              "path": "setup-api.ts",
              "size": 118,
              "sha256": "e952891187aed8de1eb93054368929a820cf4266a41c155b6e8f1300485e1e71"
            },
            {
              "path": "setup-entry.ts",
              "size": 170,
              "sha256": "c4b8705c0afa05b45465c979545303ec70ea84fd1d5afa22aa1ea5943dd407be"
            },
            {
              "path": "src/accounts.ts",
              "size": 9232,
              "sha256": "6a909c78562bcd400a361afce4aec110392ba6e906cef8dc083110d86f3ac380"
            },
            {
              "path": "src/adapter.ts",
              "size": 497,
              "sha256": "e71cc9284264fb28cc97aee7c59a7d76ef3d61180dd94bd05b7972c78b4182c1"
            },
            {
              "path": "src/async.ts",
              "size": 2266,
              "sha256": "c35dc543a3ec65eb887f6517736189ed015eccf48f264fe64599d9b6a6fa7dab"
            },
            {
              "path": "src/bitable.ts",
              "size": 22671,
              "sha256": "ebeea1419df0b8a234be1ccdcb547b5920d12481cfc8062aae720be63d86ba6b"
            },
            {
              "path": "src/bot-content.ts",
              "size": 13579,
              "sha256": "dd09a616284576f1b43e5235585f735a791e85f21a161a0a3fc141135dbbf370"
            },
            {
              "path": "src/bot-sender-name.ts",
              "size": 3873,
              "sha256": "fd0f05583c562244ddfdd394edba02e1a352789ee964f040f16b67660af8d471"
            },
            {
              "path": "src/bot.ts",
              "size": 43384,
              "sha256": "cd34706aff61434cfca055c81f1289b2f63cd89cdcae6b579454cb233635a974"
            },
            {
              "path": "src/card-action.ts",
              "size": 9352,
              "sha256": "670ff1cad0cfe8cb0b08a1495d49933b1d5ba22d1c32f282df1b03f92f4db33e"
            },
            {
              "path": "src/card-interaction.ts",
              "size": 4740,
              "sha256": "0f04792d4a5bb8bab67f3ecef97e671bfd15225eb1eb80038a7e5ec0e96c659d"
            },
            {
              "path": "src/card-ux-approval.ts",
              "size": 1823,
              "sha256": "1bcbf66277ebdbc69b6318090766ae08fbb30713e6a5b9d5bc41855207f49661"
            },
            {
              "path": "src/card-ux-launcher.ts",
              "size": 3654,
              "sha256": "dcf3161698441773721d57ea9fe252d94e1d901024250300c337d4a471501deb"
            },
            {
              "path": "src/card-ux-shared.ts",
              "size": 827,
              "sha256": "ce3dc987e695b93e246628d6d6f5f8167289873aca530da45919aee63503a0f7"
            },
            {
              "path": "src/channel.runtime.ts",
              "size": 1795,
              "sha256": "5b4c62892ecddddccf20a85de5001aeac589097d272f57a2fb3449201647b16f"
            },
            {
              "path": "src/channel.ts",
              "size": 41040,
              "sha256": "cff1b27dd33c03f480ba6eef9cf65355e6bfbe58f49cc0831fa5f0231eaffea5"
            },
            {
              "path": "src/chat-schema.ts",
              "size": 1077,
              "sha256": "fea44f364bfb5a3b7603c7bcfe24cac1970a64d83b40f7e691e936e9a1e96207"
            },
            {
              "path": "src/chat.ts",
              "size": 5733,
              "sha256": "eb546091030ba97e994b9fffbc486d304edce81a05604217c6407c5f265b5161"
            },
            {
              "path": "src/client.ts",
              "size": 7261,
              "sha256": "6b6bed1a9f95f2041ee3a30fa1e2114e50f931009643ea95d4d7e4d7a076b33e"
            },
            {
              "path": "src/config-schema.ts",
              "size": 11907,
              "sha256": "ff5d0dc8decfa70537bbfd280d6e739e2a0680b62d69512ed5eddb67951ae54e"
            },
            {
              "path": "src/config.ts",
              "size": 679,
              "sha256": "bebc8503af8668f6fe9e2c53e28a89a06a948d31da81c42313c0f7f2be7f5812"
            },
            {
              "path": "src/conversation-id.ts",
              "size": 4467,
              "sha256": "3bcddd886c36e1059507cc2a9c0d8ea9f884246b8214c5830e21ca4c36083348"
            },
            {
              "path": "src/dedup.ts",
              "size": 6120,
              "sha256": "2a6df08570a531ca7598c34cd60f8b86e2953d47d0da139cd5676cea740f916b"
            },
            {
              "path": "src/directory.static.ts",
              "size": 1976,
              "sha256": "2f2f50f6adbf039b5faf0d3e8755f9b8e5cd51012f3daade4d8ff245548707ad"
            },
            {
              "path": "src/directory.ts",
              "size": 3331,
              "sha256": "1f906434d290ee52e747e510fc0d79287ba75ac28a1190e8d7a46edfccc17220"
            },
            {
              "path": "src/doc-schema.ts",
              "size": 7387,
              "sha256": "558c68a0bca70b884937cef6974770fc240c823dd1a72e60d035de39b06abc3d"
            },
            {
              "path": "src/docx-batch-insert.ts",
              "size": 6860,
              "sha256": "f229c9b4b567e84062f4e401d62c9b96f5f31d73db76baea81f2b67dad26ed27"
            },
            {
              "path": "src/docx-color-text.ts",
              "size": 4169,
              "sha256": "aa36732c662503b7be036c880e742f983ea8cb1bdfdee5733e523c83aee5a67c"
            },
            {
              "path": "src/docx-table-ops.ts",
              "size": 9727,
              "sha256": "1cfdbef1715f95dc768feb01a37b33f233ff18684b5fefe9e69f12d291998583"
            },
            {
              "path": "src/docx-types.ts",
              "size": 851,
              "sha256": "05aaf2a80e2659a1573bd1fb67f4e711f9f64781e94e6a5153dc9831c8b29133"
            },
            {
              "path": "src/docx.ts",
              "size": 52448,
              "sha256": "7e5398fd82644d1f29b136421262839fb2b61f062d7e3170b687f0ee9076a973"
            },
            {
              "path": "src/drive-schema.ts",
              "size": 1341,
              "sha256": "66f7fc453358d0c7c1937294edcc1fd62c0d73fc335688870a7afb3d8b9968cc"
            },
            {
              "path": "src/drive.ts",
              "size": 7032,
              "sha256": "f3c2b3af464b994a401f940faa7d73104c92da47afe466ea5653ceb734f18bc0"
            },
            {
              "path": "src/dynamic-agent.ts",
              "size": 4056,
              "sha256": "a5160059a521f32d20869cfaaa109962ea8c5b5ea5e620ac8967a1c0a22109e0"
            },
            {
              "path": "src/extension.ts",
              "size": 434,
              "sha256": "9b38335f146cf85196e6db18a2d3cf93a0d3a74a51871683c513634cd45674b4"
            },
            {
              "path": "src/external-keys.ts",
              "size": 569,
              "sha256": "563c22a6bc84b0e0953651658320722a9e98279b1caf294825f85d1ecfbc88b2"
            },
            {
              "path": "src/feishu-command-handler.ts",
              "size": 1392,
              "sha256": "84acf3b73ec8c373350cc98f678fde12046870b56af70d62dc36e3308341f069"
            },
            {
              "path": "src/formatter.ts",
              "size": 834,
              "sha256": "ec5c2720b029bdf45e369e2ac53da057996c4a4ec2b8fb4081f212e744d64910"
            },
            {
              "path": "src/handler.ts",
              "size": 421,
              "sha256": "30e63494ee54e5983b12df53e7c8162395d1db89c49d7b276bf6fdb729ca2b37"
            },
            {
              "path": "src/index.ts",
              "size": 197,
              "sha256": "1e56aca18fb17e8ed914f023155c348ff2f3c70e0bbd486be60f408ad5a10ede"
            },
            {
              "path": "src/lifecycle.test-support.ts",
              "size": 3646,
              "sha256": "f8e5c17934c77fc38de0d946753d2397e8a234a758aba6ae9f081bc64b58ff13"
            },
            {
              "path": "src/media.ts",
              "size": 19573,
              "sha256": "af5e3b7a13a2c0bee8071cf157efe2a69f76a1ab24476bd9191dad96095703a7"
            },
            {
              "path": "src/mention.ts",
              "size": 3460,
              "sha256": "cb343ae8e3b3c2c92fd8dfad5d7a653d4fb1d0105d01022541128919ffd755be"
            },
            {
              "path": "src/monitor.account.ts",
              "size": 27081,
              "sha256": "a6c6045708212dcb6d93af89e1e8092d8feca31cac44b96173637c9b5df79bef"
            },
            {
              "path": "src/monitor.bot-identity.ts",
              "size": 2936,
              "sha256": "964876880e0ab0f0d3eec1991429b435299c3a737d7b3d8f55504c8988390581"
            },
            {
              "path": "src/monitor.startup.ts",
              "size": 2478,
              "sha256": "96a272dcc15a060fa8f05c9a021e0f80be3663ca79495ed8f9e96158a8219255"
            },
            {
              "path": "src/monitor.state.ts",
              "size": 4962,
              "sha256": "c1d155081524fc6fcc23207c4baa7697267b3e3616660116b5475421702e9a77"
            },
            {
              "path": "src/monitor.test-mocks.ts",
              "size": 1116,
              "sha256": "6cb67d432898bccc79b43f1194f87f2f7c111372cec6992a5ed2dc2b7e8836d3"
            },
            {
              "path": "src/monitor.transport.ts",
              "size": 8492,
              "sha256": "23a5e86fca168c53f6888d265d0d123b241353cd1b6f8e5efb0c928818642182"
            },
            {
              "path": "src/monitor.ts",
              "size": 2856,
              "sha256": "0cfbdfafdba8de6ee105cc14a31029149fc02c1e5677c2d92743b3793e279597"
            },
            {
              "path": "src/monitor.webhook.test-helpers.ts",
              "size": 2675,
              "sha256": "e2f50c6b56586b916c2896d02b4f2ab93752c07651aa00bff242c413522232ed"
            },
            {
              "path": "src/outbound.ts",
              "size": 6254,
              "sha256": "de7b8e7787f5a0ae0d2c622d66e8ef319eada691270d8f7492fbd7823e473438"
            },
            {
              "path": "src/perm-schema.ts",
              "size": 1353,
              "sha256": "95a3984ff9a532c116d41510fdd436c673bf8ab48f07d893b02124c3941dce8d"
            },
            {
              "path": "src/perm.ts",
              "size": 4500,
              "sha256": "ac10f566bd3fe74c61734d202947cdccc125a3837c07c2bd145a86e794618639"
            },
            {
              "path": "src/pins.ts",
              "size": 3301,
              "sha256": "aaed2bf4087d904963bee5e3f97fdad3fb1de0cd433811d551d9f3a3aa34393f"
            },
            {
              "path": "src/policy.ts",
              "size": 4729,
              "sha256": "cf203e533c4dd5d56f168e3cbac7b40385f42df0b0be17a771d3df590c707208"
            },
            {
              "path": "src/post.ts",
              "size": 7600,
              "sha256": "b6d9fc29228fbf4eae4d9f01bf227f13e1d98f67c0d47bccc8df719ec7bed302"
            },
            {
              "path": "src/probe.ts",
              "size": 4569,
              "sha256": "7f26ad60d3f9a0c97b813bc77f980c49f789762eb6f6189400896045371f62de"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 861,
              "sha256": "28031bdc385e838cf865e031280ca825bc1a30976f86d0d4fa7e9f3470521f77"
            },
            {
              "path": "src/reactions.ts",
              "size": 4360,
              "sha256": "a094b1fab716e409882ae1c7c811bd650576244e65f5e101982fb85286a3837b"
            },
            {
              "path": "src/reply-dispatcher.ts",
              "size": 17161,
              "sha256": "be5398f7dcfc1ddace4061e8e02ce5e9a65ed06489194737fdfbd67248fbd8b7"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 831,
              "sha256": "3b052daf868186111aeb9939534b41d34d43514dd161b7792bfac6b8f0835a69"
            },
            {
              "path": "src/runtime.ts",
              "size": 1326,
              "sha256": "07e0df149fbeacfc7e81bb7872be4518475913517b19ada94e43c318a8e9ee72"
            },
            {
              "path": "src/secret-input.ts",
              "size": 174,
              "sha256": "7eae9009c9862e4df8a0403ebd0ca7a9ba65bed857ed9657c058ed3a76424f89"
            },
            {
              "path": "src/security-audit-shared.ts",
              "size": 2358,
              "sha256": "5df3d89984eb3c9c436550513e019dd6dce78cf8d00dc1106c76ba7353df9163"
            },
            {
              "path": "src/send-message.ts",
              "size": 2266,
              "sha256": "26d9b3376bcd6370fe7e91794ec39b3660b10bfff025ec60ef66173837fc7e14"
            },
            {
              "path": "src/send-result.ts",
              "size": 575,
              "sha256": "604c2c7553b45821848c4ccf37deda61eecf753931b7d1556e9fdd37ea932c5e"
            },
            {
              "path": "src/send-target.ts",
              "size": 1137,
              "sha256": "8a6c586cd5d45260c940d0232b211260af60cacaec5d46180d39ba2f13869f25"
            },
            {
              "path": "src/send.ts",
              "size": 20878,
              "sha256": "d1218295f7964ddf5bf27aeb98dd6d97f9d4e37c441f086c3008e61b7192c482"
            },
            {
              "path": "src/session-route.ts",
              "size": 1375,
              "sha256": "5f1f0b49d739f441994154b6802b6a1ff2f45cad63716ab4096cf6634ec4abfb"
            },
            {
              "path": "src/setup-core.ts",
              "size": 1178,
              "sha256": "2ebe22235742bf3ca4e6dd4dafe41e562c880ad0c50650e5bf2d616b1b0eeb0a"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 14409,
              "sha256": "d2c1ad9422f1297e0cb42c319474ebf309567280f97271397b4afbf142157852"
            },
            {
              "path": "src/streaming-card.ts",
              "size": 14487,
              "sha256": "2a02bf0f6b159f4708bae0e2e8ab54e7d0a987842941a66ec8b7765ece7871a7"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 10390,
              "sha256": "58c3ee4ef082f078defe63a1337e7f34429b2455cbe66fd52eb2ad6929da7924"
            },
            {
              "path": "src/targets.ts",
              "size": 2945,
              "sha256": "187f69a3d9b2928bbd3e5ce4bf7ad29746f403e713e110ac2133bc6225d24b6e"
            },
            {
              "path": "src/thread-bindings.ts",
              "size": 11324,
              "sha256": "04fdc261f7cb67444739f99de3fd92e1398d1f0226026e700f0ff8c9cb87da2d"
            },
            {
              "path": "src/tool-account.ts",
              "size": 3180,
              "sha256": "451d7313aab8fe158c37325b03e645b199184fe112668de9aeaf904f18b061d1"
            },
            {
              "path": "src/tool-factory-test-harness.ts",
              "size": 2315,
              "sha256": "79b657ba6bb2594ee51c9e81bf0ce500d98cd8d86dfc176162fc3c377b846cb0"
            },
            {
              "path": "src/tool-result.ts",
              "size": 453,
              "sha256": "1f833a8fbebe645cf889b52db670aff8355c4f1c9b6204107deff214ee947e3a"
            },
            {
              "path": "src/tools-config.ts",
              "size": 546,
              "sha256": "5fc89e08c2852eff0756f38a5750a600abd309b8becef6f8b1153874f0964562"
            },
            {
              "path": "src/types.ts",
              "size": 2673,
              "sha256": "d1dcd5a526787c1da03c8339d0a73daaa479c6ffb3fd611b65f93cb07bd958a5"
            },
            {
              "path": "src/typing.ts",
              "size": 7086,
              "sha256": "d19533b34cc75c6fac1fbf80e6b246c6248bf9c17dabefd520ba3a9f9b52882a"
            },
            {
              "path": "src/webhook.ts",
              "size": 1158,
              "sha256": "32eb73d4863d68300ddf56761d8ee960f94ab34bdcb498647997d3e7f6b0aca9"
            },
            {
              "path": "src/wiki-schema.ts",
              "size": 2032,
              "sha256": "63cd8961fe9ab54a1d1622d3d90422a224ef905c29c60d88c9548af34270b780"
            },
            {
              "path": "src/wiki.ts",
              "size": 6623,
              "sha256": "d0abbc77df83b7ec1a8916ddeeffdd3844097974185cb8356c54f293bc1a78db"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/line",
    "kind": "channel",
    "name": "@coreblow/line",
    "summary": "Official CoreBlow line community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "line",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for line."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "line-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 53143,
          "sha256": "64798d5477ca72cacd7a3b70525b9b977c77a2354e03f5fc0c94fffb5760ecc5",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "64798d5477ca72cacd7a3b70525b9b977c77a2354e03f5fc0c94fffb5760ecc5",
          "format": "tgz",
          "packageName": "@coreblow/line",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/line-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/line-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 1251,
              "sha256": "38315da69ad1e1b4cc5a8012e6b286526f3cfc1b53fcb9b2992ad5b70526f54e"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 47,
              "sha256": "ae2328396cf182722b293b8ab884965165db794082075f403d47b2219f97a586"
            },
            {
              "path": "contract-api.ts",
              "size": 112,
              "sha256": "8bb4d2a43406052be774ae64a43d0ab1496f8fe7b7a7cc07316cd3515b1dff00"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 154,
              "sha256": "9edf6fedc58217f6258c29100c741ce7683795d26334cd561b878e746a743837"
            },
            {
              "path": "corehub.artifact.json",
              "size": 573,
              "sha256": "b3b34bfa6cb44fac9148b9cc602c31f1670d19297b042f22d73ec654b90a858a"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 568,
              "sha256": "6f6031139c27bcee11e920b75f4545775fa665676a1c0699c36bd90fb030a0ed"
            },
            {
              "path": "package.json",
              "size": 978,
              "sha256": "76d6f887444eab25b2e0162764ade7c50aaff80a5713a036c48311894599a066"
            },
            {
              "path": "README.md",
              "size": 180,
              "sha256": "00f5b16895a70327a86bc512b2b1c6fdfa168f654f66fea30440e951348a3c65"
            },
            {
              "path": "runtime-api.ts",
              "size": 3638,
              "sha256": "2d7adbd309bcd7df29c78a3b1311dd9175cec17d5f229c30e49b8ad0db95d6bb"
            },
            {
              "path": "secret-contract-api.ts",
              "size": 148,
              "sha256": "4fbdb40bc4a1fffb30728b0ef75ef982994ab6f6b9616851321d72ca79f558cd"
            },
            {
              "path": "setup-api.ts",
              "size": 114,
              "sha256": "57531f68891e114cf2eb76fc8aad18f147120e56a7b661b2bf1e3d1dd6ed96a4"
            },
            {
              "path": "setup-entry.ts",
              "size": 241,
              "sha256": "93d1eee86c2535631f6187a98a9e646b8c5425e572ddc7d516ae3992566e827a"
            },
            {
              "path": "src/account-helpers.ts",
              "size": 474,
              "sha256": "274e25039bd0b8978ef8846037ee488787e4f07d1eb6f946608691a5c21a7a68"
            },
            {
              "path": "src/accounts.ts",
              "size": 5135,
              "sha256": "6c9cb45b517d64efc52933390b014db20645d3410ac5cfc180f1884efb08c73f"
            },
            {
              "path": "src/actions.ts",
              "size": 1279,
              "sha256": "19e250d9879e5617303a5aeed3ef9b0722f98e8101b278bb5fea8a3f2f975ecb"
            },
            {
              "path": "src/adapter.ts",
              "size": 493,
              "sha256": "8a65b8ce088426784b171a8663ae26a85695a7e88ebaafb4d45835e014b02bdf"
            },
            {
              "path": "src/auto-reply-delivery.ts",
              "size": 5907,
              "sha256": "f55608eed31e483b736887c63c47a22a6c6a11471ca8f995fedec2dd4b8a79cd"
            },
            {
              "path": "src/bindings.ts",
              "size": 571,
              "sha256": "d3cfccd53d505d12c4f5bb43ae50bf21ff157e88f961ca2fdd1aa3decfda00e6"
            },
            {
              "path": "src/bot-access.ts",
              "size": 1291,
              "sha256": "19488d45f7ffa89c9a81b01ed778410a0457dd0436dc9e283f36d7d7e10a0db3"
            },
            {
              "path": "src/bot-handlers.ts",
              "size": 22424,
              "sha256": "dacce41a2db95248a1fdbf46ee89bba5d24dd40f75be6055c57fba1984f3aa8c"
            },
            {
              "path": "src/bot-message-context.ts",
              "size": 15431,
              "sha256": "c3f0d85d69d817fb1883d1151b399477e4adc1fe56ed9d33f9180b453777ce3d"
            },
            {
              "path": "src/bot.ts",
              "size": 2591,
              "sha256": "a37be24ee39ee3066c49992dc801df36d391cb74a97d14d415b6ae804c3a55cf"
            },
            {
              "path": "src/card-command.ts",
              "size": 10450,
              "sha256": "5300e54dfe58174cbcc23d461c88a0c9adffe71d42b57eb7f92677a5917894f5"
            },
            {
              "path": "src/channel-access-token.ts",
              "size": 469,
              "sha256": "103745195fd168d0893c249bb43cb1453d3ffaa9e618414d4837ed2d4a56d06a"
            },
            {
              "path": "src/channel-api.ts",
              "size": 403,
              "sha256": "bc0a808bdd0df0314c244e091fa332f7ba5f1dd78d066e365f815961d6cb624f"
            },
            {
              "path": "src/channel-shared.ts",
              "size": 1803,
              "sha256": "04d3c33c5bfee227924cebb4b3b00982fe5808ca71e873538177342d826812f4"
            },
            {
              "path": "src/channel.runtime.ts",
              "size": 140,
              "sha256": "92a5b1f166a29decd4e0e29e2597e86d9c967de408f422253fedab6ab9abf586"
            },
            {
              "path": "src/channel.setup.ts",
              "size": 419,
              "sha256": "12fbdb35a03c9964749bf017a272e688d9532764aff769c8f60ad895ce9c15f8"
            },
            {
              "path": "src/channel.ts",
              "size": 20207,
              "sha256": "ad80b484d695289c11de6de0a4be66ea33b2fb391e02fe002a20341bce21467d"
            },
            {
              "path": "src/config-adapter.ts",
              "size": 1003,
              "sha256": "5a532717f0a096ea878604235fcf53fd37c3d8a625df5614d3617173400028bd"
            },
            {
              "path": "src/config-schema.ts",
              "size": 1815,
              "sha256": "2744a8a3a571a125615f2bd2f47603b51c780d013a51a245ff5145a7706b550c"
            },
            {
              "path": "src/config.ts",
              "size": 667,
              "sha256": "7dd9eb767be2d2cf52d20a3cd46ab87137830c5b0e6688c6cf1a5165463f9dc8"
            },
            {
              "path": "src/download.ts",
              "size": 2948,
              "sha256": "2fe4b44e598af9a09b7414a09c38112c3c09b568694c5aac73a0418a479d8932"
            },
            {
              "path": "src/extension.ts",
              "size": 428,
              "sha256": "8b9eb24ac62f857649aa198a6eb794836eb1aa797ea15017e034454af840ce4e"
            },
            {
              "path": "src/flex-templates.ts",
              "size": 686,
              "sha256": "08e0d45458b6a2415b9cc717a1945a8921a8bbf2441db2a05684f1543abe5e58"
            },
            {
              "path": "src/flex-templates/basic-cards.ts",
              "size": 8821,
              "sha256": "c6a337350a60c20df20dc8476f75ac2190025adb3158eced051cc24d2c3313a6"
            },
            {
              "path": "src/flex-templates/common.ts",
              "size": 457,
              "sha256": "80582f584f3b0d6e6f23c5e3cfbba3873f9a9c5b0b75b15fb9de2e0b35cdda9d"
            },
            {
              "path": "src/flex-templates/media-control-cards.ts",
              "size": 12610,
              "sha256": "6c2733693e66f49605a42e482df8f04d517669b98269ccb3192f451a8bf1654c"
            },
            {
              "path": "src/flex-templates/message.ts",
              "size": 328,
              "sha256": "f30688af66ba9b09934a936630345776fe2e08e84325be5f2646434346ac00ab"
            },
            {
              "path": "src/flex-templates/schedule-cards.ts",
              "size": 10999,
              "sha256": "00a9aae983581ab612054d465e5ba3f682753e9ee58f6de108c4e1ca6c7206ee"
            },
            {
              "path": "src/flex-templates/types.ts",
              "size": 669,
              "sha256": "d1e0a4a18e90ff2611c634edf9e468501ed4d3aa78d4e609ead789001755b344"
            },
            {
              "path": "src/formatter.ts",
              "size": 830,
              "sha256": "aa292d0357f054c7135853f86b712cbc4d9af51a93da1a13a0d834b237e1117f"
            },
            {
              "path": "src/gateway.ts",
              "size": 95,
              "sha256": "9b30c5b373bb228ab8c057c221234c9d149f0a4c4ba31efa2b00d3c67c7406ac"
            },
            {
              "path": "src/group-keys.ts",
              "size": 2328,
              "sha256": "88e6156babb84162c0131f9ca57d54c8508e7af2899e3c687b7092a28fe34495"
            },
            {
              "path": "src/group-policy.ts",
              "size": 689,
              "sha256": "4983090927bd75483d9b37f2dc9fe0f2427982035a2749a3fab0d6c3c5a91bb2"
            },
            {
              "path": "src/handler.ts",
              "size": 413,
              "sha256": "2f5d8331c1003128d524e913d1f7fd079ecc1767f4c9d0c55e5c7558c2545553"
            },
            {
              "path": "src/index.ts",
              "size": 184,
              "sha256": "15216f071e2621caab7e394b7ff2ebc11c9e0e7a7250c87409e4c96258d2b0c5"
            },
            {
              "path": "src/markdown-to-line.ts",
              "size": 10882,
              "sha256": "79aa5e54a023a4c811459939d082f6d5b548cbb92d0cd70c18c4764bdb977cd9"
            },
            {
              "path": "src/media.ts",
              "size": 892,
              "sha256": "5a46d67be7db94e3c1a2a255fbae2861140000e9374aa40a7aca8a57e723ac76"
            },
            {
              "path": "src/monitor-durable.ts",
              "size": 73,
              "sha256": "218dbec49e643c5a075306641c6d6ca0b000d9751dec48377c752c8a611355a8"
            },
            {
              "path": "src/monitor.runtime.ts",
              "size": 52,
              "sha256": "93fed3f07c9019847026555dd30a4d7aa598eb47a13186f8904bf640d5d998d9"
            },
            {
              "path": "src/monitor.ts",
              "size": 9455,
              "sha256": "b75147ea2ba047bab786425875cf3e4da847a3e8ae6c460878f2c40c9656faa8"
            },
            {
              "path": "src/outbound-media.ts",
              "size": 842,
              "sha256": "2dab2df1da9fe22cf2743cf06645bf6bfbdfeb70635dca7b65c781a15e7ea4bc"
            },
            {
              "path": "src/outbound.runtime.ts",
              "size": 346,
              "sha256": "419bcffb6e573ad37e9b511662001fa828c2e48c1c56225a1c57eae6dfe05bcc"
            },
            {
              "path": "src/outbound.ts",
              "size": 275,
              "sha256": "e2477326b57b9fb5924db09f12365e5e17c1c58cb521ba5d43a08b8c6b932b2d"
            },
            {
              "path": "src/probe.runtime.ts",
              "size": 43,
              "sha256": "932afef9e56c16c900f67d400493a34cff8adf14f4bde65a92cc39f17ca5ff78"
            },
            {
              "path": "src/probe.ts",
              "size": 942,
              "sha256": "7de9a94abc2ceb3e43253f0dfc2cfe9f81ba58e23115d245f1c066146b9af3c7"
            },
            {
              "path": "src/quick-reply-fallback.ts",
              "size": 354,
              "sha256": "7683857304ee8da2c5966f8bab937cb30efc0197b1cd629a9b3ba744925c3fba"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 857,
              "sha256": "18b61579a2839df09a1e82dea7decb711b1760d84aa3da5c98d9b701119862eb"
            },
            {
              "path": "src/reply-chunks.ts",
              "size": 3050,
              "sha256": "2adbdf4b68aed12dd8e43f2006330792a06c4b42ae5bd3ccf4290da1397dadea"
            },
            {
              "path": "src/reply-payload-transform.ts",
              "size": 931,
              "sha256": "5361e2dd52773643af85edf6b7215771ee9ba7c3a05a94ba9f99eea09971f3e6"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 829,
              "sha256": "5dfa2027ffd104a709980d43b0236f990ada57ac3b87294c15144b2434242575"
            },
            {
              "path": "src/rich-menu.ts",
              "size": 8551,
              "sha256": "3a44e26a04c69af54f9c12901a12f458e3c1dfccc1667e596fc023b889366d7b"
            },
            {
              "path": "src/runtime.ts",
              "size": 1354,
              "sha256": "a308720baeaaa8d3dfb32dd00464daa5897dfe517a2a7fb2a0a4df46a403c0b2"
            },
            {
              "path": "src/send-receipt.ts",
              "size": 909,
              "sha256": "ac1bd277ec95ce639a6040cab9fc28a0c13b04e56d5bccdffb90a7dc3b138ab2"
            },
            {
              "path": "src/send.ts",
              "size": 11892,
              "sha256": "5cf01709c0970fd955631b5435f834d5dae8b765d595add6290dbba632cbf3b5"
            },
            {
              "path": "src/setup-core.ts",
              "size": 4552,
              "sha256": "20fbf7ca7171950fa55accc4cba95460b320463fc1b5e4bc17e957b97d7dd00e"
            },
            {
              "path": "src/setup-runtime-api.ts",
              "size": 361,
              "sha256": "8011e98cd9a783513ef5fb4168cc7995f0488f84868255f1d17d204b1d1fffc5"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 6607,
              "sha256": "83b59d5012bea668fb665287ab6d631cc6b03c3af3029583a270423053a32f91"
            },
            {
              "path": "src/signature.ts",
              "size": 531,
              "sha256": "bbeb3864cf426dd910d152b84f738f62734266ef64d7295897ada233f781e1a3"
            },
            {
              "path": "src/status.ts",
              "size": 97,
              "sha256": "0ad8b7f15f2ac59abc444ddf4ee5b7de3399843272e5ac7a557f542edcbb7402"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1024,
              "sha256": "2e99fdc0413c5b13618e7734519344b9c7fc6564e97bc60bbe73f85322e90c74"
            },
            {
              "path": "src/template-messages.ts",
              "size": 9623,
              "sha256": "72f2524d10ef01b7d7a028b6ba7622b040ebc78df1e9749d150daf87f5c088d8"
            },
            {
              "path": "src/types.ts",
              "size": 3121,
              "sha256": "bf76a13b2999dfd9b6596d9aff96b6604a1ecaf4bfdd6f78bb98b6ef2f1b8f4f"
            },
            {
              "path": "src/webhook-node.ts",
              "size": 4455,
              "sha256": "01c1195ee03a3738e414da394a5e6949a12b07c98aeb116178971d5e837d349e"
            },
            {
              "path": "src/webhook-utils.ts",
              "size": 294,
              "sha256": "ce9437eb5000dd5779a665ab7855b80b404f6a2b04efe4fdec78ed3d1993f2b9"
            },
            {
              "path": "src/webhook.ts",
              "size": 3498,
              "sha256": "b1715b84990d5259fb6b05b9e813692f25d19ef9301e6d100a7d5246bfeb0151"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/zalo",
    "kind": "channel",
    "name": "@coreblow/zalo",
    "summary": "Official CoreBlow zalo community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "zalo",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for zalo."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "zalo-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 26891,
          "sha256": "366d26c981c67727e7d9d93e3c80ace3b3a901ae65b1d237f1f706e19dada966",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "366d26c981c67727e7d9d93e3c80ace3b3a901ae65b1d237f1f706e19dada966",
          "format": "tgz",
          "packageName": "@coreblow/zalo",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/zalo-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/zalo-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 173,
              "sha256": "946d865dda11bfbd3942cab9b25d77eb763df2d1dc0344f36b75312887df2144"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 47,
              "sha256": "3b0f01a01416f1db95ffc6047c8990847d92b7549f22b61ce4727e2794c94980"
            },
            {
              "path": "contract-api.ts",
              "size": 181,
              "sha256": "48acfdcc319ed6bdac42bca08adcdac849a1c061040ac60a8ee2821ed68ba366"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 154,
              "sha256": "4d852de6e9beeee832f77fb6b3bb0957e37f5e82d220938d787e7ab178ae42ff"
            },
            {
              "path": "corehub.artifact.json",
              "size": 573,
              "sha256": "670eec93a2e12e4c8d02f0cfc864b590d2a6dc06f8202d7dcc97ab67160ec45b"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 448,
              "sha256": "07746939ba139df83fb4da0074912ec41f62a36c341e2e6ad94c096c7c0eb015"
            },
            {
              "path": "package.json",
              "size": 970,
              "sha256": "39e943b070b88576350d39fc8b2b095945ef5ed96da0a0a9f2671a212d6f32b8"
            },
            {
              "path": "README.md",
              "size": 180,
              "sha256": "9c2dc82884bac4443619f9effb653fc64552bab2ac572abed5a0d709d80b3cef"
            },
            {
              "path": "runtime-api.ts",
              "size": 172,
              "sha256": "b48b613b5ba83f215d52d50476132262d2612a8fa55ec0ce93ff557be231115a"
            },
            {
              "path": "secret-contract-api.ts",
              "size": 128,
              "sha256": "c381e9461fc33c8b3f797fc2541fc4e91960ae02623fcfaf834ed0d56d6b9f02"
            },
            {
              "path": "setup-api.ts",
              "size": 287,
              "sha256": "f126d41eeb9291901fd79fae92da5720c56339f5acaeda72c4dd412436ff8ade"
            },
            {
              "path": "setup-entry.ts",
              "size": 166,
              "sha256": "b40e6034c7058bebbe08818bab3e082870c02ab1eed6c49d2e78482e34158d2f"
            },
            {
              "path": "src/accounts.ts",
              "size": 2134,
              "sha256": "edbb0977e0a13d8e41014c8007bc82c4be039505220e12fa3e0165d53ae0b42b"
            },
            {
              "path": "src/actions.runtime.ts",
              "size": 148,
              "sha256": "1856d2e96f07531242402299fed85974861a51e2ca3dc2a1ef4b58adf0685cf0"
            },
            {
              "path": "src/actions.ts",
              "size": 2016,
              "sha256": "ec6bddcd11b33750238ef173922dfcce27f145d1b25a4f12768fda6b3009698b"
            },
            {
              "path": "src/adapter.ts",
              "size": 493,
              "sha256": "779206e6958e478a13035e59fc7dda7a080f6f2409a6ceec62e98e6ad998e2da"
            },
            {
              "path": "src/api.ts",
              "size": 5548,
              "sha256": "daf448fe11a9425268a2f67cdd3ade746d85745dd9bea08214487991767afa7a"
            },
            {
              "path": "src/approval-auth.ts",
              "size": 1350,
              "sha256": "4228b871c1f8c32b766c328f4d431541194b1194360a0f0a5b576babd63042ee"
            },
            {
              "path": "src/channel.runtime.ts",
              "size": 2911,
              "sha256": "f259a355b139cd18807939d8302b89ba01d2777db43b02c98895b164f8721f53"
            },
            {
              "path": "src/channel.ts",
              "size": 10113,
              "sha256": "26d1a2b0bf988c0d14d00a20797bf7922feb50b745fc89cb9cf39914e8760544"
            },
            {
              "path": "src/config-schema.ts",
              "size": 1009,
              "sha256": "29ff23f32e0c460224b9d9a9f5fbc7c903f81d70819f87c78dcf2ae0987f9013"
            },
            {
              "path": "src/config.ts",
              "size": 667,
              "sha256": "1c3e6a73a17b57b09bce0d4fbfec7d720adf1cb0112a696157ad12fefe921b73"
            },
            {
              "path": "src/extension.ts",
              "size": 428,
              "sha256": "43c2418a09bc7ef9b9daa16ddfb999ffd268e93053b07adaa24cea4d5ff558c1"
            },
            {
              "path": "src/formatter.ts",
              "size": 830,
              "sha256": "e767c9bfff095e37db7fbb47a3d502cf0dc2f44ec3452f02dcc143344574b3b9"
            },
            {
              "path": "src/group-access.ts",
              "size": 1606,
              "sha256": "afd4f469b5074e63f086e941440683243c92f2a4d76e1c30bd3dfc3b9171306a"
            },
            {
              "path": "src/handler.ts",
              "size": 413,
              "sha256": "407483f97602de302bc8625a6103ad7caeb06fcdf41832be6dc6b4fd46652ed7"
            },
            {
              "path": "src/index.ts",
              "size": 184,
              "sha256": "2d1ccc2669607576e7daaeaadf6ae694632c1160b4009fe33a87f916bd0a8965"
            },
            {
              "path": "src/media.ts",
              "size": 892,
              "sha256": "a854127782cd7ab60b021e874a9c9e87f16e44895cd3b3a1a9b9ef26b2fe8604"
            },
            {
              "path": "src/monitor-durable.ts",
              "size": 1029,
              "sha256": "74a4ef97ca2be527eb9fe197bc02200b7beaa743b902fa15a242d4aa039a565b"
            },
            {
              "path": "src/monitor.ts",
              "size": 23797,
              "sha256": "8300051220c91b293d939bdd14241b95d97fb1e649913190ee2f685a8aa8dbb2"
            },
            {
              "path": "src/monitor.types.ts",
              "size": 106,
              "sha256": "22345a5cf9ec7e7a27780ce5a865e6cba9a5de090e112f51fe3235f4f9b1b200"
            },
            {
              "path": "src/monitor.webhook.ts",
              "size": 7987,
              "sha256": "585d58303cbbfc07894d056420b053dfdec6329cb0dd0d8b81a5c9a9201dbcfa"
            },
            {
              "path": "src/outbound-media.ts",
              "size": 973,
              "sha256": "324d811abd901f92a8db156b844be95517db1f4af1928005849f6277457cb1c6"
            },
            {
              "path": "src/probe.ts",
              "size": 1294,
              "sha256": "666450cc29fdbc6dcb22928ccde67eda9ac6c9f3a48dc056e4512c41ec2a68b2"
            },
            {
              "path": "src/proxy.ts",
              "size": 748,
              "sha256": "768d1244683a96a4709c6b9eab636762d8f29c7bcb96d9995d7266a87c86853e"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 857,
              "sha256": "677bc0f2cd7de1ab95be5e60598ea2f562a4d125eb601bda5fe0ab1f4296884d"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 829,
              "sha256": "64008ce974610e781e988bb5f87042583e7316e0fab060d60bde55c9efd1a437"
            },
            {
              "path": "src/runtime-api.ts",
              "size": 35,
              "sha256": "bbda79c18eeca06fc193a6fe2276b3a04f5f9f085b799e3a70f1e082dbbc20a4"
            },
            {
              "path": "src/runtime-support.ts",
              "size": 665,
              "sha256": "a03c8ac8c797af95421cf58e470b5cf7103db58357c9088a0f591da461d01701"
            },
            {
              "path": "src/runtime.ts",
              "size": 1296,
              "sha256": "21c24e43b40099a1fbaa16db233d761cfa4f08a17ea8b8a68e18d565a334dd0c"
            },
            {
              "path": "src/secret-contract.ts",
              "size": 1675,
              "sha256": "5d047e1bb1a6f3136a988e3d9da3fdc41523d844600f63f8f41f8ed1ce5e4253"
            },
            {
              "path": "src/secret-input.ts",
              "size": 174,
              "sha256": "7eae9009c9862e4df8a0403ebd0ca7a9ba65bed857ed9657c058ed3a76424f89"
            },
            {
              "path": "src/send.ts",
              "size": 4070,
              "sha256": "56fae7da4fe461bbe66055d0e946157a1e9e725ed695f008e550f6048301c37e"
            },
            {
              "path": "src/session-route.ts",
              "size": 898,
              "sha256": "67e751ed7f018f7f32b3ab4edd99d58e0f0a875e2c26b1405ee34434a19bc72a"
            },
            {
              "path": "src/setup-allow-from.ts",
              "size": 2251,
              "sha256": "cb4aa51c52a90390e1fe8295fbd83d413a38df2a54b3f3ec9da5a49d3afd7f59"
            },
            {
              "path": "src/setup-core.ts",
              "size": 1832,
              "sha256": "5a1531eb182f7e1f972592057dc4b305b8f667a02a3ac86ae80614d547a68811"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 11798,
              "sha256": "966341465665c346240a25b08201bd0c8959e32cbb42c319c2d2e0b717a2ac1e"
            },
            {
              "path": "src/status-issues.ts",
              "size": 1169,
              "sha256": "bf133682832039c4d6f72ab904f1d0b68bbe9575c7518c3fb599c5b2c6fada97"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1024,
              "sha256": "4fa117777c61ba6842e899446f04f5bbb7ba801027227e8014af4ed23f9d1111"
            },
            {
              "path": "src/test-support/lifecycle-test-support.ts",
              "size": 109,
              "sha256": "7efde8644a1ea2b1cbe6c2c4d40fb601e81b16eabdc07492438105d0fccdbe87"
            },
            {
              "path": "src/test-support/monitor-mocks-test-support.ts",
              "size": 142,
              "sha256": "3bb4e14fe2f91fc96f3a8d6f11f94e296ea79797e298589e5a01a8a6631c3406"
            },
            {
              "path": "src/token.ts",
              "size": 2762,
              "sha256": "a11d0cfa8ac01c65b892ce9ed8f519e759a5f437be676a03704b6b1d0d356712"
            },
            {
              "path": "src/types.ts",
              "size": 1831,
              "sha256": "3561508d8c2573c9bf42b74b9de978deaf2b6b52ff86e93acc490ac44d92101e"
            },
            {
              "path": "src/webhook.ts",
              "size": 1154,
              "sha256": "a01cdb1541f963bd8a8d363ab5e33e4062877f1837065ae7ddbba6c34727560d"
            },
            {
              "path": "test-api.ts",
              "size": 49,
              "sha256": "5f1f2e803687b406e384284c1c5f1124440a6b646c07a30f9a9f4c539c1b7116"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/zalouser",
    "kind": "channel",
    "name": "@coreblow/zalouser",
    "summary": "Official CoreBlow zalouser community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "zalouser",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for zalouser."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "zalouser-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 48450,
          "sha256": "a962d87622a3ff6b7869b1bab4429a53887fd235ebd9c6e9e9d83f6491bf4a02",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "a962d87622a3ff6b7869b1bab4429a53887fd235ebd9c6e9e9d83f6491bf4a02",
          "format": "tgz",
          "packageName": "@coreblow/zalouser",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/zalouser-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/zalouser-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 77,
              "sha256": "de6812b5f57de0e61c6b10fac9a446da1e6679cced09eb88348b89d77204b4ce"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 51,
              "sha256": "81692bb19517481464a200514c3f05b02bffc319888831ca26c8e762efe48577"
            },
            {
              "path": "contract-api.ts",
              "size": 172,
              "sha256": "a9390d9293c152fa20760bb1d8012b52771c98c8279202ca7a00a7772a407f47"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 162,
              "sha256": "ac949fd1b11af20baf7e90a5704935d808c0a4dabb0b2781a99989496d92f405"
            },
            {
              "path": "corehub.artifact.json",
              "size": 582,
              "sha256": "64361844f545874ece400aeb35f1633162974c53a7215a054db40b30d2cf21c2"
            },
            {
              "path": "doctor-contract-api.ts",
              "size": 92,
              "sha256": "ed08fea6a1d291a636d63a141e4b87d50b40a1a151747d7518820d5d9b946d83"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 689,
              "sha256": "33edf79c008a4b6c10a09c3758a9b97d4de07aa4c1994a28ab08b7c878863eeb"
            },
            {
              "path": "package.json",
              "size": 1106,
              "sha256": "cbe705e6268bad573ee70b4e97b455f827b820092cc884a8f9593ff729cfd643"
            },
            {
              "path": "README.md",
              "size": 202,
              "sha256": "fcb98624864fe58b144b608c6948b79a0d59d0efec87566d0ee7d494fd95d20b"
            },
            {
              "path": "runtime-api.ts",
              "size": 185,
              "sha256": "94916124450cceda91e3d6cd429c451477e191bccd66885f8a26feb430f198ea"
            },
            {
              "path": "secret-contract-api.ts",
              "size": 148,
              "sha256": "4fbdb40bc4a1fffb30728b0ef75ef982994ab6f6b9616851321d72ca79f558cd"
            },
            {
              "path": "setup-entry.ts",
              "size": 253,
              "sha256": "7710fb8eada8dd796f8e226a4858b24ed5348ff3b63da68ac668b156121a50bf"
            },
            {
              "path": "setup-plugin-api.ts",
              "size": 62,
              "sha256": "74fe697aa9ea360ddae934b93b30e8f8fc19eeb68c4dcfde86c72f55214e63ee"
            },
            {
              "path": "src/accounts.runtime.ts",
              "size": 72,
              "sha256": "107f6020dea0ec01746a15e846287ac900fe234bee3320cef4c0c72e1c3313d9"
            },
            {
              "path": "src/accounts.test-mocks.ts",
              "size": 587,
              "sha256": "6c64f2cbb780ed35c4c569b2f2a4dd2247b383c5dd2e2e06b9b745f677163ed6"
            },
            {
              "path": "src/accounts.ts",
              "size": 3699,
              "sha256": "57990ddad95a879334f47a45ca6f943b66f899e3550a0f05bffea57a320a2382"
            },
            {
              "path": "src/adapter.ts",
              "size": 501,
              "sha256": "5952dd26c5d3bc869d0197ec8557ceca5da518e7ff7c7b35849dc0b74ed7b9a5"
            },
            {
              "path": "src/channel-api.ts",
              "size": 731,
              "sha256": "f9b5bb821b2cc76174eb5f830180661aad1872b5e806b65344f72b30b178ab94"
            },
            {
              "path": "src/channel.adapters.ts",
              "size": 47,
              "sha256": "270b05d377898abbb15c3d46cef8cce65375d86e4f854eca8ca3aab10d71c4a9"
            },
            {
              "path": "src/channel.runtime.ts",
              "size": 382,
              "sha256": "906f864c15cbfa927d48973cb1d9068b3c2e5de58c526cdbc8d359fc8eddb5e7"
            },
            {
              "path": "src/channel.setup.ts",
              "size": 478,
              "sha256": "451fbe09d9c55e031034f868ef6ae845c88dc73079cb87fb19f5d5280ca7bdd7"
            },
            {
              "path": "src/channel.ts",
              "size": 19533,
              "sha256": "e4ef57b72fe564ba418b0972b918ad8bfe7ea24201de617472bf6e4f3289d60e"
            },
            {
              "path": "src/config-schema.ts",
              "size": 1143,
              "sha256": "35363b8058e44ce30f9b2e5b1bdd8c718fb9f8dc431f9b473d307c0e3db51b7d"
            },
            {
              "path": "src/config.ts",
              "size": 691,
              "sha256": "ff5934ecf1d67f99bf5618e1dc353e234bb8fc083ac7029b40a3dff88fa94b14"
            },
            {
              "path": "src/directory.ts",
              "size": 1446,
              "sha256": "f230072e68ba93245b22f254bd43ea4af29aad4203516282a777dc98244aa6c4"
            },
            {
              "path": "src/doctor-contract.ts",
              "size": 3235,
              "sha256": "5f135939fe55080f649e818a210a244b76a5c137a19f37074ff95d62f6e85666"
            },
            {
              "path": "src/doctor.ts",
              "size": 628,
              "sha256": "ced1bf39fc17074455fa9ec2af9182f0b8d0247a142ee5f010c34219806a5dd3"
            },
            {
              "path": "src/extension.ts",
              "size": 440,
              "sha256": "2cc51e82583b18971fd93557306d08377d990be5f6a4fbc5b7d3c5073a50d5c8"
            },
            {
              "path": "src/formatter.ts",
              "size": 838,
              "sha256": "6e80d7bb30a75af13c3c971e48a56fa8385fe2b19ab3ad8f974fed421f1f6850"
            },
            {
              "path": "src/group-policy.ts",
              "size": 2056,
              "sha256": "3ac72b16199b8518464ed159321be720236cc8e0aee61313194d5c593d99298a"
            },
            {
              "path": "src/handler.ts",
              "size": 429,
              "sha256": "846d4a3b2074917481c80a588db48fa689ab550612ca1e2e2d1b34d57e9a1a87"
            },
            {
              "path": "src/index.ts",
              "size": 202,
              "sha256": "d937453d815437b4b146bf134ba1037946f4b870e1f611194e3cc2a2438852c2"
            },
            {
              "path": "src/media.ts",
              "size": 900,
              "sha256": "1a4d2a59a11f24e32ff5d39a39ae4b719a855991e5b2f900166ab8928df8b111"
            },
            {
              "path": "src/message-sid.ts",
              "size": 2402,
              "sha256": "85c2ea53c4a4a0fabf92d617d08a838e427ab8c1ab8840277de123d0b1f90edc"
            },
            {
              "path": "src/monitor.send-mocks.ts",
              "size": 788,
              "sha256": "b8fcd2d646ed77a71529ab89571e238e90d498d937f06303d3f9cfebc4669686"
            },
            {
              "path": "src/monitor.ts",
              "size": 31044,
              "sha256": "7e86c360d7bfbf07aac7ca356cf4657f5cb49d8117a01e0e46ae825fa8608bab"
            },
            {
              "path": "src/probe.ts",
              "size": 875,
              "sha256": "75688f8824db13a351b0b1a56f4328209b558a53f2e7bfbf399d182786ecc689"
            },
            {
              "path": "src/qr-temp-file.ts",
              "size": 716,
              "sha256": "53be2e3740eb20766add9e374572c966ae36330299c680f4f2d7c80a902da494"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 865,
              "sha256": "2cb304af764b3ab8ec5969d397dcd678eeb61d804445bc57ff174b12561d4639"
            },
            {
              "path": "src/reaction.ts",
              "size": 787,
              "sha256": "5c37fd31874344681be413d3b33474a75a047839342c9b8e28679230ff52d6a2"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 833,
              "sha256": "b960f820d18a30765a488a6c567d22d5bf6a7b3019fcbc0b33e1953c5c65a628"
            },
            {
              "path": "src/runtime.ts",
              "size": 1429,
              "sha256": "21902508b267e5682e39c7c5c6b8d260b0ee351630a2c9c7862fcb74cb0d2b1d"
            },
            {
              "path": "src/security-audit.ts",
              "size": 2232,
              "sha256": "1f602756d5edb6b2604246b80a2af1204e423ee47ae326ba8e489e9b7f112fd9"
            },
            {
              "path": "src/send-receipt.ts",
              "size": 958,
              "sha256": "c4e4f6831f357e4ea204be80bb564bff80b0d5131d719bbd28eb6b39e709389d"
            },
            {
              "path": "src/send.ts",
              "size": 6957,
              "sha256": "30fbfe742d94fb2bb2141407f5509a9ab2069acb59a6adce452972d240ba62d7"
            },
            {
              "path": "src/session-route.ts",
              "size": 3544,
              "sha256": "a57599db54eea6502728a03736691007a5b33a128e0f33598406fcf48f7d24b8"
            },
            {
              "path": "src/setup-core.ts",
              "size": 270,
              "sha256": "a4b9f892006e682a9781594621b62a86ad485320d48f9b533e3e9ee25b207e47"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 14477,
              "sha256": "9ad4105fc7cf9aff3620b007fa3674fdf14ef37c9a0187da5c2a163e6519958d"
            },
            {
              "path": "src/setup-test-helpers.ts",
              "size": 58,
              "sha256": "779f7ed8562f784a5516322200955ab71c42b5c16b627b2bc855270f3a4ba663"
            },
            {
              "path": "src/shared.ts",
              "size": 2642,
              "sha256": "bd088ac1c0e9185d2e07dd5274620944085ea6d78e473dd345041e87358528e2"
            },
            {
              "path": "src/status-issues.ts",
              "size": 1499,
              "sha256": "8a9c35c81aed3deb384fbcb806228f12688a720da38fe322c2e4e0269a66526a"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1052,
              "sha256": "6f945de8d385de26f4effd68c813dceaf718b5377b5fa5336664d946ebb500d3"
            },
            {
              "path": "src/test-helpers.ts",
              "size": 635,
              "sha256": "ada875eb9cd18b096234bb4d05875491fef35ad8d37748c7aa27eede959bf90d"
            },
            {
              "path": "src/text-styles.ts",
              "size": 14461,
              "sha256": "21b714184f5c0b1a362d0979b696207515ed41a6eb53f9dce559b806a395114d"
            },
            {
              "path": "src/tool.ts",
              "size": 6968,
              "sha256": "a278f43359a2c663e84abce2d590ade4078bebbb882d91d745d9bdb05dd49d38"
            },
            {
              "path": "src/types.ts",
              "size": 2627,
              "sha256": "89e2dd589a3c698a511ba6aeeb1c16035b730b7d64da0d579797f2150a86bc87"
            },
            {
              "path": "src/webhook.ts",
              "size": 1162,
              "sha256": "69b274ced19bf7a300caa3f8151325157995bbdc9f0fab866085540f88fa30aa"
            },
            {
              "path": "src/zalo-js.test-mocks.ts",
              "size": 3005,
              "sha256": "cdbc214b3bc43753ad681e5ccc870c1ffac3eae9627554695fd166767f1bfd35"
            },
            {
              "path": "src/zalo-js.ts",
              "size": 48884,
              "sha256": "003eb420699bc28bd687998870e10298cd74527f5b67bb3ac6f11c6b349fcfc7"
            },
            {
              "path": "src/zca-client.ts",
              "size": 6091,
              "sha256": "62b1938b5f66968da552b58dc3c7a921f4531ff986b689d536acf5d57b324f4b"
            },
            {
              "path": "src/zca-constants.ts",
              "size": 1128,
              "sha256": "b81fd31615a15eb3f620da296f351a94e2b6035740c783814fac594f7d248b62"
            },
            {
              "path": "src/zca-js-exports.d.ts",
              "size": 576,
              "sha256": "f2660a1265d0728125d56037b05a29a3dbd0013a1a109fbbe9466ce16ad3a78e"
            },
            {
              "path": "test-api.ts",
              "size": 576,
              "sha256": "01b40cc8d1a6287ffd592b98b8124ee232729ce80ea74f7133a486aacb622397"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/qqbot",
    "kind": "channel",
    "name": "@coreblow/qqbot",
    "summary": "Official CoreBlow qqbot community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "qqbot",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for qqbot."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "qqbot-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 18405,
          "sha256": "a2b9d7a4e7d0e3925b76b3d94bbb50fe06f82acd30d584cbc4f8d20bd6b70496",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "a2b9d7a4e7d0e3925b76b3d94bbb50fe06f82acd30d584cbc4f8d20bd6b70496",
          "format": "tgz",
          "packageName": "@coreblow/qqbot",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/qqbot-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/qqbot-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 122,
              "sha256": "1a659947a71c115b9b013549a9e2aecddad33168237244cb822b505eaffaa15b"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 163,
              "sha256": "639f17255e643d0ad398dfceef3b77f06fae2044117bebe8c156127abfe1a3b5"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 4934,
              "sha256": "d4f26882cb690568bf34ca874e7a53fee53b411caf282d038d986a0d0b99d5e8"
            },
            {
              "path": "corehub.artifact.json",
              "size": 570,
              "sha256": "9df1c96203704076bc256d50dfd5dc77cf4a791222612ec8627c584845580840"
            },
            {
              "path": "index.ts",
              "size": 117,
              "sha256": "cc297d729005f4585e93002eaca801bae6f826bbc81f81301b288c2bf69a452a"
            },
            {
              "path": "package.json",
              "size": 1514,
              "sha256": "8fc148b6cf3ab2017dbd6b5aceff8f85db842a921bc75425ee0dbe63147c0588"
            },
            {
              "path": "runtime-api.ts",
              "size": 144,
              "sha256": "4db4f1fa495aed8cd608e6bd90c0f2ccc25ab88f9b541ef8935ef37467272922"
            },
            {
              "path": "secret-contract-api.ts",
              "size": 166,
              "sha256": "66acc8028cca07b2c59a5a91dc8c91102639f075288831ccdf7ee6ca417ad48d"
            },
            {
              "path": "setup-entry.ts",
              "size": 108,
              "sha256": "89e82437f498346595c111d5eae33f7195b376577c6ef39b778dd0b78608b3ed"
            },
            {
              "path": "setup-plugin-api.ts",
              "size": 58,
              "sha256": "77f08f5ce69fd42d1c338df0093428a09ac27ffec15c229ca6ffa270e4da0b5a"
            },
            {
              "path": "skills/qqbot-channel/references/api_references.md",
              "size": 13764,
              "sha256": "e3104ffea78a99fa42a63a93143703fb7d37fb8417c57d9063d9c046a7838e90"
            },
            {
              "path": "skills/qqbot-channel/SKILL.md",
              "size": 12418,
              "sha256": "b81514a2920b89d93e5ff29de376ceff0b693aadb40f543c23f306093628e924"
            },
            {
              "path": "skills/qqbot-media/SKILL.md",
              "size": 1807,
              "sha256": "66e80380e35fd1c3029c1a2d11759d494ff0b7844905f23b8c832c638dcd1e3e"
            },
            {
              "path": "skills/qqbot-remind/SKILL.md",
              "size": 6354,
              "sha256": "de840765bad88e281de42b201d216b44e9a03c4806cfef8f28c339418fb63c73"
            },
            {
              "path": "src/bridge/approval/capability.ts",
              "size": 163,
              "sha256": "deee1ffab2718471bdd4570941000dce3c9ff9dbed0078dbf43e5c7725c02226"
            },
            {
              "path": "src/bridge/approval/handler-runtime.ts",
              "size": 176,
              "sha256": "50e00da2a486e9d7905121b43d5e42a09181b45cc00e1b44830c5a7cc12b0964"
            },
            {
              "path": "src/bridge/bootstrap.ts",
              "size": 151,
              "sha256": "360a441d520b7d6d11b0aba30027ee0d307f6abbf8146b319242af06c243edae"
            },
            {
              "path": "src/bridge/channel-entry.ts",
              "size": 161,
              "sha256": "8ba2382d4f687f55aabff09b783f9186fbb1ae37746fd4114991423434f7f45a"
            },
            {
              "path": "src/bridge/commands/framework-context-adapter.ts",
              "size": 204,
              "sha256": "2a09c40d104425921d9292df045a8b85e6168491804ad5e4de04d09b80d57dec"
            },
            {
              "path": "src/bridge/commands/framework-registration.ts",
              "size": 197,
              "sha256": "87525c0f63ff8edfdfbabaa18e2cd7db12168dc73f681d0839f8bcb0984eeceb"
            },
            {
              "path": "src/bridge/commands/from-parser.ts",
              "size": 164,
              "sha256": "d712854f61e055437c0f486a68b8071d99796cdec49c667e31e140f96af9d991"
            },
            {
              "path": "src/bridge/commands/result-dispatcher.ts",
              "size": 182,
              "sha256": "f4573c6c0f20d4994c30824c13bac5bb1b6b0fecf341cb0d17489aedd9e3b8dc"
            },
            {
              "path": "src/bridge/config-shared.ts",
              "size": 161,
              "sha256": "e57528e7eafceebd41133f07ac543c60386a62ca07e009d4b56d5ef362910051"
            },
            {
              "path": "src/bridge/config.ts",
              "size": 142,
              "sha256": "f1753e047ff4ec87ab0369776788d79ace9e5c27e7b70d1de458a9c4d67ae4ea"
            },
            {
              "path": "src/bridge/gateway.ts",
              "size": 145,
              "sha256": "e700cfe1e0f484fa4a6849f469767b60716ec2057f43f9a95b3985d3fdd85ae7"
            },
            {
              "path": "src/bridge/logger.ts",
              "size": 142,
              "sha256": "f8734f9a205106c8c1b71be3d01b3be52821d9ed9609dd15645790df0bc1b841"
            },
            {
              "path": "src/bridge/narrowing.ts",
              "size": 151,
              "sha256": "4f1f7c1a9a5c9f3a45b1613e718d68f954c9e52987515bea00aa3f5061e803ab"
            },
            {
              "path": "src/bridge/plugin-version.ts",
              "size": 164,
              "sha256": "38459657bffb5ee2a8907cf7bc36156c2bd4fe3f994cb253318b888860e39401"
            },
            {
              "path": "src/bridge/runtime.ts",
              "size": 145,
              "sha256": "d82fbb64cfe60cd15e1e43f9396cbaf2e5573166ef8cb908d3ee637061050e45"
            },
            {
              "path": "src/bridge/sdk-adapter.ts",
              "size": 155,
              "sha256": "c6dd1e6635b08d550613d986dc7855a01eadc17d3306a95a2f5a3fb255b8b604"
            },
            {
              "path": "src/bridge/setup/finalize.ts",
              "size": 154,
              "sha256": "a1ae8e59c11b9c7741089d6e441c7d4a692a4c293acfc2356a3c42b8c276c576"
            },
            {
              "path": "src/bridge/setup/surface.ts",
              "size": 151,
              "sha256": "a52ee674d0855dd9b9247274995972e03e38dde579ea5ec3370eeca4ae26b201"
            },
            {
              "path": "src/bridge/tools/channel.ts",
              "size": 151,
              "sha256": "9763b2328ffc1f8c44934c1cbf7ca95fe91f253bc4291affce0f3a04271558b6"
            },
            {
              "path": "src/bridge/tools/index.ts",
              "size": 117,
              "sha256": "cc297d729005f4585e93002eaca801bae6f826bbc81f81301b288c2bf69a452a"
            },
            {
              "path": "src/bridge/tools/remind.ts",
              "size": 148,
              "sha256": "8efbde227bca68f32c315072976736319633f85de938b677d5b7e73502af6093"
            },
            {
              "path": "src/channel.setup.ts",
              "size": 154,
              "sha256": "a174ca34528c961a7413b6d8324e37af75555ba9b26c5c29b03d717300ca2382"
            },
            {
              "path": "src/channel.ts",
              "size": 138,
              "sha256": "83786cfe04309638e16cafb974ea3d31e7fca2f7daa81436b4d9b4c356b13a31"
            },
            {
              "path": "src/config-schema.ts",
              "size": 154,
              "sha256": "b376acb380e91568bafc8e8a845bf557efaae3c835714ebbdc534fdbbaeb180e"
            },
            {
              "path": "src/engine/access/index.ts",
              "size": 117,
              "sha256": "cc297d729005f4585e93002eaca801bae6f826bbc81f81301b288c2bf69a452a"
            },
            {
              "path": "src/engine/access/resolve-policy.ts",
              "size": 171,
              "sha256": "cbc8a926f709e318b90fe83ef959a73b8bf8dbbe79ddc5ae5aa98722574849d6"
            },
            {
              "path": "src/engine/access/sender-match.ts",
              "size": 165,
              "sha256": "060d2ab0b46c2f00bf41844a080d542550395cdcb219483eb098dbac47cf37d9"
            },
            {
              "path": "src/engine/access/types.ts",
              "size": 146,
              "sha256": "8198896d2b70ca77c6a9c639a90b09d6375c5d40fdd551ebf23b75ce259ea605"
            },
            {
              "path": "src/engine/adapter/audio.port.ts",
              "size": 160,
              "sha256": "7cc8c4e30c20906ab5d6ce16b544f6714dd1d8febc68d4deca11c0b38501ca27"
            },
            {
              "path": "src/engine/adapter/commands.port.ts",
              "size": 169,
              "sha256": "807b7acee506378f8b97bd16924fe8a199a5bce534f7f791ebbb9114b7209373"
            },
            {
              "path": "src/engine/adapter/history.port.ts",
              "size": 166,
              "sha256": "b59c4e350b748911859d6ad7479efed84b1f8437e1a2d7562cc545736f489e0a"
            },
            {
              "path": "src/engine/adapter/index.ts",
              "size": 117,
              "sha256": "cc297d729005f4585e93002eaca801bae6f826bbc81f81301b288c2bf69a452a"
            },
            {
              "path": "src/engine/adapter/mention-gate.port.ts",
              "size": 179,
              "sha256": "3ef4000c42510a1bf0f5ef54598dedcfbfba464657b6e79c3d40b9390215e40a"
            },
            {
              "path": "src/engine/adapter/types.ts",
              "size": 147,
              "sha256": "fb552f85e0076feba82c1f1c33b4427cdbb85778b12a08339d0c9579ea23c91e"
            },
            {
              "path": "src/engine/api/api-client.ts",
              "size": 156,
              "sha256": "1fbb0dd2cc7f3a6865b516479561555722a90198417cbb172a1c1dc2ad6695a2"
            },
            {
              "path": "src/engine/api/media-chunked.ts",
              "size": 165,
              "sha256": "0de8c0e9d3e0b916d6d3875c8b32d3f6f982d2a605fdbd549e3bb9e14d7b1dff"
            },
            {
              "path": "src/engine/api/media.ts",
              "size": 143,
              "sha256": "a2e946213501bcf4c164b014f11fe46942a045ed1651a4c5d97a825376dfae9c"
            },
            {
              "path": "src/engine/api/messages.ts",
              "size": 152,
              "sha256": "be10d848a9a112e9369e7a6db6c342eb022b43aa55be8ed3602c3a21769269f3"
            },
            {
              "path": "src/engine/api/retry.ts",
              "size": 143,
              "sha256": "465856116d1f2851ca390c4d9398bc50db5531554df108eee388a94a6b519b5d"
            },
            {
              "path": "src/engine/api/routes.ts",
              "size": 146,
              "sha256": "02ee7c25e999977674f22a4bb13216453b55ab51176e59bd9b913f060d57ae3c"
            },
            {
              "path": "src/engine/api/token.ts",
              "size": 143,
              "sha256": "6ffaef0c8033fe6a4216a7b972902d4fcb802ad63e5b31d90c9467ebfbade3b0"
            },
            {
              "path": "src/engine/approval/index.ts",
              "size": 117,
              "sha256": "cc297d729005f4585e93002eaca801bae6f826bbc81f81301b288c2bf69a452a"
            },
            {
              "path": "src/engine/commands/builtin/log-helpers.ts",
              "size": 172,
              "sha256": "c271c5d6136d8f32b9cf7b8f80da3ed7f8d2f2ce0763f79cc84101445e51ae26"
            },
            {
              "path": "src/engine/commands/builtin/register-all.ts",
              "size": 175,
              "sha256": "3ede505780504670db265c1ce73bbfa7c4bb0a758bfa9b88847f7fc7a9cdec5d"
            },
            {
              "path": "src/engine/commands/builtin/register-approve.ts",
              "size": 187,
              "sha256": "488b83c8998ff53476e64a2eeaf3fe2a3bcc2d5487ff6e450919ff1e4860817e"
            },
            {
              "path": "src/engine/commands/builtin/register-basic.ts",
              "size": 181,
              "sha256": "201491436f1938a22f6febaeaafd1f41dd635775568b91fbbe93301eb93089f0"
            },
            {
              "path": "src/engine/commands/builtin/register-clear-storage.ts",
              "size": 203,
              "sha256": "a13cd794891569b3bdd3baa1948e5e4a5bf417719a5c06964943358581cb5839"
            },
            {
              "path": "src/engine/commands/builtin/register-logs.ts",
              "size": 178,
              "sha256": "28ea50cbfcd3a78728334380ba118e3e1354fc6a7571dfc04f0ef97be2456d44"
            },
            {
              "path": "src/engine/commands/builtin/register-streaming.ts",
              "size": 193,
              "sha256": "f36747a4ac4645ebca509181cd5a213e7fb1748986b180bbaf79c8c267b4670e"
            },
            {
              "path": "src/engine/commands/builtin/state.ts",
              "size": 156,
              "sha256": "f04e2837c4ce042a5639aa76c068749f403e609f0a8a631a527ed0a0caff1f6c"
            },
            {
              "path": "src/engine/commands/slash-command-auth.ts",
              "size": 183,
              "sha256": "e379b9c48bb918e66416ec40864bd675b885e56fdebf628e154774b05f45c7f9"
            },
            {
              "path": "src/engine/commands/slash-command-handler.ts",
              "size": 192,
              "sha256": "ae9e10e193bf6ff18d89207b80bb0229450c1df001df2ca5fc6907f421647d74"
            },
            {
              "path": "src/engine/commands/slash-command-test-support.ts",
              "size": 205,
              "sha256": "bb3295c06bc2e3a550adf30a81b879bf7fd8b6a1c205d6e9e716b09de3728e98"
            },
            {
              "path": "src/engine/commands/slash-commands-impl.ts",
              "size": 186,
              "sha256": "960dfe4a062485ae19786dbdf443a1b506c0046715034300d6144c36ccdf1044"
            },
            {
              "path": "src/engine/commands/slash-commands.ts",
              "size": 173,
              "sha256": "f9799558145d06d2ef27a6376b5c0bc2fa5cebc6c6ebfb3dc78bde1a7ee29948"
            },
            {
              "path": "src/engine/config/credential-backup.ts",
              "size": 180,
              "sha256": "b87844848bdb7e08b945c0a251a3b547f04d9cdc1d0e1bbdeec5ad82701b74a8"
            },
            {
              "path": "src/engine/config/credentials.ts",
              "size": 164,
              "sha256": "380c0ee7576d6e2f3f66c930a90379ea766a9f2cf7d5b8c88a36297700c94957"
            },
            {
              "path": "src/engine/config/group.ts",
              "size": 146,
              "sha256": "25819317dfcda6d4e75e31cb5927094aab959181066e7a965be665ec7be7ec4b"
            },
            {
              "path": "src/engine/config/resolve.ts",
              "size": 152,
              "sha256": "0c24c68022ee21d009e2814254b8c9b620f2ac560b8bf3c629105edbef953c39"
            },
            {
              "path": "src/engine/config/setup-logic.ts",
              "size": 162,
              "sha256": "5ab87d99d36b2aad2b0d4c55ffda833e8a90e56a5e4363c576960c75ce0d0045"
            },
            {
              "path": "src/engine/gateway/active-cfg.ts",
              "size": 160,
              "sha256": "698ade44ab82cd4762045cd203b06577a7ef1eb7798cd57f5dea770541e52547"
            },
            {
              "path": "src/engine/gateway/codec.ts",
              "size": 147,
              "sha256": "763ece3b4fe833d6edbcbc31b6aa1f2865b21db5ba1c9378d58b0d3461fb5967"
            },
            {
              "path": "src/engine/gateway/constants.ts",
              "size": 159,
              "sha256": "16d3995a47abf9e94b6ce683ce24c1966bd788ce9b58fb16641d79dc3b7860f6"
            },
            {
              "path": "src/engine/gateway/event-dispatcher.ts",
              "size": 178,
              "sha256": "a0f331d21b155be103a44e3011d4182a3bd17f320116fb2a065d8ff29ae02708"
            },
            {
              "path": "src/engine/gateway/gateway-connection.ts",
              "size": 184,
              "sha256": "43fa77f8050a52ebb0aaf170a9e7ad849f974bc5f9586115c4ba5c55bdc2497d"
            },
            {
              "path": "src/engine/gateway/gateway.ts",
              "size": 153,
              "sha256": "cfac2d7d8be5c4a7fb84900f407f246a15cc93d12381e713f87b59a45b0c7afa"
            },
            {
              "path": "src/engine/gateway/inbound-attachments.ts",
              "size": 187,
              "sha256": "f9c472c57b4d8893b8bb4e67b9475b8899347ea273ef69e2228c45a23b1fd163"
            },
            {
              "path": "src/engine/gateway/inbound-context.ts",
              "size": 175,
              "sha256": "e0937d2fb18fb24844e58ed0458c713976c455ea447fad75707f51b80c0c7837"
            },
            {
              "path": "src/engine/gateway/inbound-pipeline.ts",
              "size": 178,
              "sha256": "6fbb571ef1e5e79ff99ad49c9dbaaf5ede83a5acbfe757117084d31fcb385093"
            },
            {
              "path": "src/engine/gateway/interaction-handler.ts",
              "size": 187,
              "sha256": "35d023d7109a8cf35618ae8cc9a75c18c30445fee0cbb9403d63b5612fa8d60f"
            },
            {
              "path": "src/engine/gateway/message-queue.ts",
              "size": 169,
              "sha256": "4fccb71bb29e93ea861d130f1318c4bb69eac4b20cd97f6307cbf24dd34f8c41"
            },
            {
              "path": "src/engine/gateway/outbound-dispatch.ts",
              "size": 181,
              "sha256": "0b27f82cc09a18ce97b4a8e72c0d03d1daca76a8b147278add4c4c6ca529175a"
            },
            {
              "path": "src/engine/gateway/reconnect.ts",
              "size": 159,
              "sha256": "37e99cd76e835fd67d5b7c910335d2ff6ae7ad42b23a87c3a33400b9cef61025"
            },
            {
              "path": "src/engine/gateway/stages/access-stage.ts",
              "size": 173,
              "sha256": "490c726c4fabadbf8e416e0d1b32a46df77ab5b7be3640ffde1d9caa475d1000"
            },
            {
              "path": "src/engine/gateway/stages/assembly-stage.ts",
              "size": 179,
              "sha256": "b5f6b51826ebb32a3e66463b2d0657c17b5dcf76cc86be2d388583ea379cc58a"
            },
            {
              "path": "src/engine/gateway/stages/content-stage.ts",
              "size": 176,
              "sha256": "b2d2186e1faade5c407b565113bc9b48604001eae2bdd770ee7527a1e5c596f1"
            },
            {
              "path": "src/engine/gateway/stages/envelope-stage.ts",
              "size": 179,
              "sha256": "6654d4b41e54a8dbd5289f0eff7b89750d9afc7082dd987092312abc0a7c191c"
            },
            {
              "path": "src/engine/gateway/stages/group-gate-stage.ts",
              "size": 183,
              "sha256": "e6d6904d4d1a950f416fa1a5e00336a6cd719b1d65d185f3d29a74b928f62925"
            },
            {
              "path": "src/engine/gateway/stages/index.ts",
              "size": 117,
              "sha256": "cc297d729005f4585e93002eaca801bae6f826bbc81f81301b288c2bf69a452a"
            },
            {
              "path": "src/engine/gateway/stages/quote-stage.ts",
              "size": 170,
              "sha256": "449dfab1a79650b0985686aa4e215a1f20118635da2e17e067b6a0399ef60e56"
            },
            {
              "path": "src/engine/gateway/stages/refidx-stage.ts",
              "size": 173,
              "sha256": "c5781dde5eb5c2ce1de2d4c1bdabbd0849cdd6f1b8293c8d9d992dde64ef4edb"
            },
            {
              "path": "src/engine/gateway/stages/stub-contexts.ts",
              "size": 176,
              "sha256": "9f0868ca067bb053e47c4cfd92c5c62f3c9fa5985c39f4f00add5e2f93ecc2bf"
            },
            {
              "path": "src/engine/gateway/types.ts",
              "size": 147,
              "sha256": "f4020f38a08b4516274091207c2e0eab544114f72a9be20e371607a0d0f55771"
            },
            {
              "path": "src/engine/gateway/typing-keepalive.ts",
              "size": 178,
              "sha256": "ad6d47cf34af655f5e34f565086181e5ce17406c1f0a8954f28d0905310586a9"
            },
            {
              "path": "src/engine/gateway/ws-client.ts",
              "size": 157,
              "sha256": "c8617564ee8df37248a4de6d276dc8b52a5a688277319a4b4a6c941b4bccd3eb"
            },
            {
              "path": "src/engine/group/activation.ts",
              "size": 160,
              "sha256": "a1dbd9b4024248b131596614b8a241de1d85b72ead6b7c2a923917b9eef3774e"
            },
            {
              "path": "src/engine/group/history.ts",
              "size": 151,
              "sha256": "8ae12e5fcc8cebd81f343af508fd1654f9c67141f65601a42aaba6b81c16eff3"
            },
            {
              "path": "src/engine/group/mention.ts",
              "size": 151,
              "sha256": "43a41fa32656b4af039367720e075d0d42e58feccb04a122f27211548d74743f"
            },
            {
              "path": "src/engine/group/message-gating.ts",
              "size": 170,
              "sha256": "ff654fea6a013d6a777d851fe45a38639ff934f410de013fffe10241d10af9e5"
            },
            {
              "path": "src/engine/messaging/decode-media-path.ts",
              "size": 181,
              "sha256": "723bea7039d357f8a7a6091200701e9fabe6e7f5d5354019e73a005ec822c33e"
            },
            {
              "path": "src/engine/messaging/media-source.ts",
              "size": 168,
              "sha256": "281d85479c15e61d5e34b2210a3fdcca06977ab77541ff6440ae421e0e3f8208"
            },
            {
              "path": "src/engine/messaging/media-type-detect.ts",
              "size": 181,
              "sha256": "dd1fc06b755b05ad9fdceaca897f68d8c476b00cbef0f62b88a69630cf8b5590"
            },
            {
              "path": "src/engine/messaging/outbound-audio-port.ts",
              "size": 187,
              "sha256": "2ef76d245872bbb7436aa6ab9f95bb5c6075e9295cd3cfdc089e765d6fc65c95"
            },
            {
              "path": "src/engine/messaging/outbound-deliver.ts",
              "size": 180,
              "sha256": "0b7a566085732ea5b74274fb162d67159398815cb220f6134715f7b47fd9e35b"
            },
            {
              "path": "src/engine/messaging/outbound-media-send.ts",
              "size": 187,
              "sha256": "d6f825c731bbe8b7a7b3cfd841272b6ec504ab9a9ca29bc3e19eb29e490f7117"
            },
            {
              "path": "src/engine/messaging/outbound-reply.ts",
              "size": 174,
              "sha256": "0a382db44973cd1b3a28a6a8c67fec542ccf0b47691707590641b9a9522c1447"
            },
            {
              "path": "src/engine/messaging/outbound-result-helpers.ts",
              "size": 199,
              "sha256": "386baad5fea11f1988255eb9e9d911c34c748f7bf09b27c9befcbcca12c8fcf8"
            },
            {
              "path": "src/engine/messaging/outbound-types.ts",
              "size": 174,
              "sha256": "7f66e400fb340d2c66e4e1bd91ce7c7481255c1acee673840f79e237b986786e"
            },
            {
              "path": "src/engine/messaging/outbound.ts",
              "size": 158,
              "sha256": "ee54700d5a81d7448bf7bf3d6119a9586781100d1b7cb4b49fae10a630282d7f"
            },
            {
              "path": "src/engine/messaging/reply-dispatcher.ts",
              "size": 180,
              "sha256": "8fd1a615d55dcfff992a970ac177aafb7bda73e065d54ecf32cf4c20642e3639"
            },
            {
              "path": "src/engine/messaging/reply-limiter.ts",
              "size": 171,
              "sha256": "8365c9ad2803b3b4ef0d883bbd651c078693ff6dd20e70737e4d37711c5c1897"
            },
            {
              "path": "src/engine/messaging/sender.ts",
              "size": 152,
              "sha256": "fffaaf41cd5218241d73a64415d926748d53ec3e20038d5930d8d2182fc51b6c"
            },
            {
              "path": "src/engine/messaging/streaming-c2c.ts",
              "size": 171,
              "sha256": "7100351b32a0d5d4d92294080a850b06d6d7403a97b796adf7a866747d0586f5"
            },
            {
              "path": "src/engine/messaging/streaming-media-send.ts",
              "size": 190,
              "sha256": "c7c88c2206b7d48c249fa57454adf8dd32bdbd6c215fe1852a2fe365efa5d47e"
            },
            {
              "path": "src/engine/messaging/target-parser.ts",
              "size": 171,
              "sha256": "acf629a9e05de27a1b9399c7fdbee9306be49a0a8f1caa9296d1af120c7f3b0b"
            },
            {
              "path": "src/engine/ref/format-message-ref.ts",
              "size": 178,
              "sha256": "f4935c6880bdaacb1001bc9a448eda7cd41263da7c39878be8429c80dd4cf0ce"
            },
            {
              "path": "src/engine/ref/format-ref-entry.ts",
              "size": 172,
              "sha256": "8c091301ba336d990e226ffaf16d7a63099253e93bbe810fc218a8757ba5c455"
            },
            {
              "path": "src/engine/ref/store.ts",
              "size": 143,
              "sha256": "1db588e481f8b3ffda9309d5347721d051f556ccc66c63c143fbef5cacbf0e66"
            },
            {
              "path": "src/engine/ref/types.ts",
              "size": 143,
              "sha256": "0ca4abfef9ed08c49f92cb62f61098e2069ce2f2bf30fc9799be38a05355a1b4"
            },
            {
              "path": "src/engine/session/known-users.ts",
              "size": 163,
              "sha256": "b429fb3831c3d0e761a9afd97f51d284ea0cada7561328636adcfcccc67272b7"
            },
            {
              "path": "src/engine/session/session-store.ts",
              "size": 169,
              "sha256": "da5b6b37e5a5f99646bd6948643f5e9751b4676e3adb25df870b4e439c7ab6ef"
            },
            {
              "path": "src/engine/tools/channel-api.ts",
              "size": 161,
              "sha256": "2482ac31191d958bf07ef1e64eacf62860ba924ddd3bd1fc0cfb23490bb73c1f"
            },
            {
              "path": "src/engine/tools/remind-logic.ts",
              "size": 164,
              "sha256": "8dd6a5b2dc6289f6302cae3af9ec1d05a7ff0c3949a1a52e693ef1032a93d962"
            },
            {
              "path": "src/engine/types.ts",
              "size": 139,
              "sha256": "1ae0e07917824dad5474d9b718ba53201ef66b2866e1562727820e370de081b6"
            },
            {
              "path": "src/engine/utils/attachment-tags.ts",
              "size": 173,
              "sha256": "8d466b9b344f526c4c71ff05c12747f1bde2ae7dd1e7f3d60724371db983fa30"
            },
            {
              "path": "src/engine/utils/audio.ts",
              "size": 145,
              "sha256": "ebec08e71a344eed1c1741cced60e210477354a8a0ee4cff67a1c2d7b5cec5e9"
            },
            {
              "path": "src/engine/utils/data-paths.ts",
              "size": 158,
              "sha256": "3cea0ba8544d98b034e6fe91a022ba8e136fac099f90e9da999dc8ad921eec70"
            },
            {
              "path": "src/engine/utils/diagnostics.ts",
              "size": 163,
              "sha256": "42514434ca61a3e83f7476fb72cefaf7fe5ebb468d4f7a4dbfdf1459a841aaaa"
            },
            {
              "path": "src/engine/utils/file-utils.ts",
              "size": 158,
              "sha256": "5ebc06a7c737b8c0e013f931a4b7adc576058c15a072c45f403b0fd8c45b8abf"
            },
            {
              "path": "src/engine/utils/format.ts",
              "size": 148,
              "sha256": "ae4cdcbc7b38d24adba900b3ce14ad4226296b932fc91349528d1cd968e39901"
            },
            {
              "path": "src/engine/utils/image-size.ts",
              "size": 158,
              "sha256": "6e1933eab4002f2aa9ceb7b250de03a624ab4ba4d5158c94cf64c2920057066e"
            },
            {
              "path": "src/engine/utils/log.ts",
              "size": 139,
              "sha256": "72d2de76fd3b21831a875974a185a133d92c0ff218abe238ef354ee964338a77"
            },
            {
              "path": "src/engine/utils/media-tags.ts",
              "size": 158,
              "sha256": "c2214f196f1cb76e0cb31a35121d8b89855ba95901f9dac4a6f4d4d771445b12"
            },
            {
              "path": "src/engine/utils/payload.ts",
              "size": 151,
              "sha256": "53aca28d7fec28ea901d6b75d4008d5434d81c178aceaaabd4d3b6ed438d1b60"
            },
            {
              "path": "src/engine/utils/platform.ts",
              "size": 154,
              "sha256": "75453d682dc6ff1254a2eae41f22a78a250b0161094b2352ff00d37cb189a275"
            },
            {
              "path": "src/engine/utils/request-context.ts",
              "size": 173,
              "sha256": "a19ce061873e5e80a6f15f00302c6e825340770ddf01c7124017fb6ac9f32b55"
            },
            {
              "path": "src/engine/utils/string-normalize.ts",
              "size": 176,
              "sha256": "5c2d343c6696d1bfc674a83c928d3b963ff55ad989f498765da728d8750bae8d"
            },
            {
              "path": "src/engine/utils/stt.ts",
              "size": 139,
              "sha256": "9add4dd3fd47e98663496bc971b3b640980d2168026e5936cdd81784896d1c78"
            },
            {
              "path": "src/engine/utils/text-parsing.ts",
              "size": 164,
              "sha256": "206a1051f8a64e95a20a82d24e1bd7795cf0acd8ca982f4f8525454924ffc1d5"
            },
            {
              "path": "src/engine/utils/upload-cache.ts",
              "size": 164,
              "sha256": "5a834add28158a3963ee25b85273978011504dce62d0b7c46e7275022cda9fc7"
            },
            {
              "path": "src/engine/utils/voice-text.ts",
              "size": 158,
              "sha256": "418714b6ee286abaa00f2677b7ad04d64e0cf24b7cca8ace4b1377fd0514e1d7"
            },
            {
              "path": "src/exec-approvals.ts",
              "size": 157,
              "sha256": "ea460b542d0f6be5f4104657257f4505594789c7bd0a98ceafbca9b4674b788a"
            },
            {
              "path": "src/qqbot-test-support.ts",
              "size": 167,
              "sha256": "fa048aa1a4762262ba80242a9c294ecd115130f0b3ed3b8f904dcc35dbe41be4"
            },
            {
              "path": "src/secret-contract.ts",
              "size": 160,
              "sha256": "9139ac04b5b09c254b61abff2c6927a2c5b3f022d3763b20fd714258831d2c69"
            },
            {
              "path": "src/types.ts",
              "size": 132,
              "sha256": "d2b0cdec5492e9fbb84970186c2b97c50af7e04caf578ecbb32a3109b1c8fe08"
            },
            {
              "path": "tsconfig.json",
              "size": 339,
              "sha256": "c302043431a156148175d7fef676d40b8803daa4a7d5210e47387472f0468237"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/mattermost",
    "kind": "channel",
    "name": "@coreblow/mattermost",
    "summary": "Official CoreBlow mattermost community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "mattermost",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for mattermost."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "mattermost-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 73223,
          "sha256": "2cca52d15f55c40424000d2ec8e7b75159eb453904ef98c1763ec2811cb60ad2",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "2cca52d15f55c40424000d2ec8e7b75159eb453904ef98c1763ec2811cb60ad2",
          "format": "tgz",
          "packageName": "@coreblow/mattermost",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/mattermost-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/mattermost-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 131,
              "sha256": "0f612a87589ba76aac907542dbe58f28579c2f0d73f029d9d4b1c5807967d92e"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 128,
              "sha256": "0f202defbb306637d1de461e5354a69bed1ef7f1f3ac5898912bef574cee1591"
            },
            {
              "path": "channel-plugin-runtime.ts",
              "size": 53,
              "sha256": "60e9da9171a1eea01450c72c4128d6bc5d0f59bf854c9d32aa3759eb3a129833"
            },
            {
              "path": "contract-api.ts",
              "size": 202,
              "sha256": "58bbccec2819b6d94995fd639fe486f6e97a68d45188eefa073b552f3fc70add"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 166,
              "sha256": "54253b1ae34ca81e9ec25121b80890839c2286a502165f718b817861724e50fe"
            },
            {
              "path": "corehub.artifact.json",
              "size": 585,
              "sha256": "fc4f4d93f727a384c62d31634c201be64c6004767a5f47c96b42f0553dbaeca2"
            },
            {
              "path": "doctor-contract-api.ts",
              "size": 92,
              "sha256": "ed08fea6a1d291a636d63a141e4b87d50b40a1a151747d7518820d5d9b946d83"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "gateway-auth-api.ts",
              "size": 121,
              "sha256": "48498eca9cc42790f541fd422d5364d02caa0d19c9485e45796f2264d5b1db9e"
            },
            {
              "path": "index.ts",
              "size": 784,
              "sha256": "deb8b37d83635bbd56dcd5c5da38a87e815fbd35be046ff646c11eec9f69c77f"
            },
            {
              "path": "package.json",
              "size": 958,
              "sha256": "c6e54801c546f45ab155650de4452cbbf135b16c6608436f961c4e8ef28231b3"
            },
            {
              "path": "policy-api.ts",
              "size": 78,
              "sha256": "c339e6f60ac000a5ce88cc84f6c260af85bb788c67fa39a8307aa8c26d1da5f6"
            },
            {
              "path": "README.md",
              "size": 215,
              "sha256": "a1f1a6478aafdcbb40e6ceb8d4e99544cfdd7b4f13a97f88271b09b51644d340"
            },
            {
              "path": "runtime-api.ts",
              "size": 184,
              "sha256": "6085618ac759a638918d8c8a8523acb8d60a7575d785bb88035718acfa93236d"
            },
            {
              "path": "secret-contract-api.ts",
              "size": 128,
              "sha256": "c381e9461fc33c8b3f797fc2541fc4e91960ae02623fcfaf834ed0d56d6b9f02"
            },
            {
              "path": "setup-entry.ts",
              "size": 178,
              "sha256": "f2971df736bfad2ecf527b4985c31277c8ab9746c6928fb4ac220d6d054d8187"
            },
            {
              "path": "slash-route-api.ts",
              "size": 77,
              "sha256": "627a4192a34935358478edc9a740b62b095b2a07fbcf206f47818437b97b556f"
            },
            {
              "path": "src/adapter.ts",
              "size": 505,
              "sha256": "b81808c59e2bc394985a083043a49a069d386ff1ff74cb87e79f6e14e98bb8b0"
            },
            {
              "path": "src/approval-auth.ts",
              "size": 955,
              "sha256": "bf76b53752570d7ef370b2d23c631eb8e01bd57c891c6e1fcfd65b1756f2ea8c"
            },
            {
              "path": "src/channel-api.ts",
              "size": 281,
              "sha256": "f00d897db73864a1b14d2b4dbeeec37c1fceed59441747b93aa9fc36a3a5eed5"
            },
            {
              "path": "src/channel-config-shared.ts",
              "size": 2681,
              "sha256": "09636343cca613dcade8982590c134628145ddb7fda7b20a22e15319fe54d10c"
            },
            {
              "path": "src/channel.runtime.ts",
              "size": 474,
              "sha256": "c4ac14797cf4b382305016ab5e70ec8dbd030299214293354c0dcdef57fb90fb"
            },
            {
              "path": "src/channel.setup.ts",
              "size": 1081,
              "sha256": "e85d65d349295eb68104c4ea31b0292ff567170facb75d8b7713c303296200fc"
            },
            {
              "path": "src/channel.ts",
              "size": 18680,
              "sha256": "1c1a35ac1cb6afccc8d418ddb13cf2915729759c9cb910e2f54022cdd53b68b6"
            },
            {
              "path": "src/config-runtime.ts",
              "size": 180,
              "sha256": "bca7bc815e72dfa32d7524b6c094c2563fc9441ee258d195fd1c288230d61197"
            },
            {
              "path": "src/config-schema-core.ts",
              "size": 4546,
              "sha256": "78aeb2d76ab843c9c7cf0bb5c5d46172eb6e7cf6d541445f098882ef4307c706"
            },
            {
              "path": "src/config-schema.ts",
              "size": 4520,
              "sha256": "3378a66e5d8b114ed27413a1485ba192b88871ff54aaf0c556442c462a7b4292"
            },
            {
              "path": "src/config-surface.ts",
              "size": 252,
              "sha256": "9b822a0d09ff265e22d7e2ba94b0f5d64ffdb24b04295d47b99431fae04e9244"
            },
            {
              "path": "src/config-ui-hints.ts",
              "size": 727,
              "sha256": "886bbe755268844368c32162a3cc60103d902e7cbcf30dfcc091bdc703f83de9"
            },
            {
              "path": "src/config.ts",
              "size": 703,
              "sha256": "9552fa065dbbb4090a0c2792001ba9b3493489ed51951dda093ca56be99a87fe"
            },
            {
              "path": "src/doctor-contract.ts",
              "size": 1291,
              "sha256": "6b1097415cb50c021cc50100bdea94d4c1ed2471db5149555f36e3a0eb4f8ebb"
            },
            {
              "path": "src/doctor.ts",
              "size": 2441,
              "sha256": "c7dcf6d34a9a51d9196a64af39485ab25c25470cf22adad2cbd4bd776b7df098"
            },
            {
              "path": "src/extension.ts",
              "size": 446,
              "sha256": "8bcb099f0885122486f74acdb7d67563baa154a557c45fb9432e6e4caa16bf80"
            },
            {
              "path": "src/formatter.ts",
              "size": 842,
              "sha256": "104fc556b3e894615dab4ba8e53f8cd11da670d4b07e680c7c722858a3b76b59"
            },
            {
              "path": "src/gateway-auth-bypass.ts",
              "size": 2604,
              "sha256": "452a690993732a044f3f07163165cd5e0c24e80687115a6003ba270c318174a8"
            },
            {
              "path": "src/group-mentions.ts",
              "size": 822,
              "sha256": "88a7eb4b5a60153f6aae3a969aeea43076173db05718b68500cee91d21c5ad8b"
            },
            {
              "path": "src/handler.ts",
              "size": 437,
              "sha256": "e9c4a695ba33713f3e9d101db63c013413cb40aa9c1708e6a55a2625915feb7b"
            },
            {
              "path": "src/index.ts",
              "size": 213,
              "sha256": "414fd292046de621687c68d4eda20e46543b2c05a416308ddabdee12d88b7146"
            },
            {
              "path": "src/mattermost/accounts.ts",
              "size": 4607,
              "sha256": "9e306bd1b418d4bb25cbc2d67d49683c1e546a5f7c1460c33676cfe6afb8ad6a"
            },
            {
              "path": "src/mattermost/client.ts",
              "size": 17509,
              "sha256": "d17d57d0927c7e91e44c181329e5688d9e4da38051ed75b142557c350fa5e35b"
            },
            {
              "path": "src/mattermost/directory.ts",
              "size": 5791,
              "sha256": "415cab1d4c10e19ca8f1b1cca940f63df730203e9247cae6f42047a6c75ea173"
            },
            {
              "path": "src/mattermost/draft-stream.ts",
              "size": 4481,
              "sha256": "371555f8e09489ea69d26bae5d2bb4e28c69eaddd1acf53fda7ab304dbd4bfb2"
            },
            {
              "path": "src/mattermost/index.ts",
              "size": 314,
              "sha256": "95b17b8f8b529f7497208143b7cb9aa68710743d54d6db148066c1637db17d74"
            },
            {
              "path": "src/mattermost/interactions.ts",
              "size": 22888,
              "sha256": "18bcad8a3e5923d07d32596eaba1b4fbb3e6058e59a83f9f58778816c32dfe3f"
            },
            {
              "path": "src/mattermost/model-picker.ts",
              "size": 10570,
              "sha256": "ea3f2656349c1f7cf85e42114e1a3f0c515a19a37a331b93db459d2dbc4564a6"
            },
            {
              "path": "src/mattermost/monitor-auth.ts",
              "size": 8745,
              "sha256": "84e6b5f86be20bdc187d671f3a9f2094cf30e188f881363e1a8916bcf0f28e6a"
            },
            {
              "path": "src/mattermost/monitor-gating.ts",
              "size": 2578,
              "sha256": "0677fbad981a04e217678e52adf53eeebd0e8e4eb0c6528aa7d52a535310132e"
            },
            {
              "path": "src/mattermost/monitor-helpers.ts",
              "size": 3443,
              "sha256": "48753252ce4de5af354422de308e866aa4cf6010cb365cb54f68accaff88b739"
            },
            {
              "path": "src/mattermost/monitor-onchar.ts",
              "size": 733,
              "sha256": "5544e26b9db9088c8033c088cebf78bad9615caafff66fad23be815c7507f105"
            },
            {
              "path": "src/mattermost/monitor-resources.ts",
              "size": 5323,
              "sha256": "56ee9022561b2a137d6b8f8d6a47988e01532929db124663a7e9592716734e0b"
            },
            {
              "path": "src/mattermost/monitor-slash.ts",
              "size": 6774,
              "sha256": "cb92cac12f358f915c2f4554bc4d6c8a6c6bc1d812baa6ed21ec4ffd84dcc9a0"
            },
            {
              "path": "src/mattermost/monitor-websocket.ts",
              "size": 7261,
              "sha256": "381704023c7309d101aae703bf197e151c624401244d4ca6a01488df043405e3"
            },
            {
              "path": "src/mattermost/monitor.ts",
              "size": 59535,
              "sha256": "d8158540975bfc1ada325d369faea4251a770ce29a1f06110cc6b38fd88fb58a"
            },
            {
              "path": "src/mattermost/no-visible-reply-diagnostic.ts",
              "size": 1569,
              "sha256": "ecf0e83f088d6a846d70d3745527f0d1f93cf53fc466328f2f268eb421c5eb58"
            },
            {
              "path": "src/mattermost/probe.ts",
              "size": 1640,
              "sha256": "7cdb78bd5413c18763c89cfc4e6056a79d1fcaf2f4c3d0cae8df83c55091de4b"
            },
            {
              "path": "src/mattermost/reactions.test-helpers.ts",
              "size": 2842,
              "sha256": "7bc2f2a9b4564f0f0f3d06c4d59068059672feb5a5217c49d98c82fd0a8955b6"
            },
            {
              "path": "src/mattermost/reactions.ts",
              "size": 3674,
              "sha256": "33b12e5c47f7fc20350087f712db130f05f578e262fce113a72d9efe8c24c1c4"
            },
            {
              "path": "src/mattermost/reconnect.ts",
              "size": 2837,
              "sha256": "94d352c2c823863cca9db9dfd9d33914b76b75bb1f7c5a37159f0b2c3a8f5417"
            },
            {
              "path": "src/mattermost/reply-delivery.ts",
              "size": 2217,
              "sha256": "4bdbf3f961519bf73b5ecbd371fd8747d609ac651487d15871ba57138c08278a"
            },
            {
              "path": "src/mattermost/runtime-api.ts",
              "size": 38,
              "sha256": "f7a7bf56cd3410fb561a69aad83f12cb8c33fdc07db835c1c5fd74e5fc3291c3"
            },
            {
              "path": "src/mattermost/send.ts",
              "size": 14405,
              "sha256": "d65594e81f1d86f8ef61cf3109950c37d958de6813d1ad7b65c09f61ae022a5c"
            },
            {
              "path": "src/mattermost/slash-commands.ts",
              "size": 18387,
              "sha256": "112ddfa7ccc72a4eb7b0a362ed845277021e4465db1cebb691c1d41cb6a70505"
            },
            {
              "path": "src/mattermost/slash-http.ts",
              "size": 15234,
              "sha256": "23e66fa663708bfd201e711b25ae97e1a6b6e87d9ba09b883426bb4e08b275f8"
            },
            {
              "path": "src/mattermost/slash-state.ts",
              "size": 10327,
              "sha256": "827c0e28dc363c278dd8505df8542a65057fab6ef568b512058755faa63b483b"
            },
            {
              "path": "src/mattermost/target-resolution.ts",
              "size": 3014,
              "sha256": "f13b3daca8d48bdf0880b96a54a22becc91de4db8ba4c771d174d00cc8557655"
            },
            {
              "path": "src/media.ts",
              "size": 904,
              "sha256": "a1e25c4837e5a52c8cdbcbc91566d22adc02bc940fca4bb57e1a8b5697119f89"
            },
            {
              "path": "src/normalize.ts",
              "size": 1716,
              "sha256": "71a39a6f75030bb0f44ecd2454a54e21d87de50424611ba1dc3bde2cd573b7b0"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 869,
              "sha256": "1b2dab1031cfc7e9276ea3a5fc6bc2ae2044d3d6c5c99b5545ae26cd3702cfa0"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 835,
              "sha256": "0e9e24ffa50f3da6ac49be9c7d383f89a30dea41225bca330ab6cb9c1d7bf4bf"
            },
            {
              "path": "src/runtime-api.ts",
              "size": 35,
              "sha256": "bbda79c18eeca06fc193a6fe2276b3a04f5f9f085b799e3a70f1e082dbbc20a4"
            },
            {
              "path": "src/runtime.ts",
              "size": 1382,
              "sha256": "d2eae2bdb2faab6aa36a28ac71354f219c130156d11544749b1a32bec40c775c"
            },
            {
              "path": "src/secret-contract.ts",
              "size": 1474,
              "sha256": "dabab076f712422950b0fb06e773b63fe885b54189bb4ae3ce6a468b65e7a913"
            },
            {
              "path": "src/secret-input.ts",
              "size": 243,
              "sha256": "9203050150a5dfe764c6a4a2752178b6f562679aaec498a42a897fca91767a60"
            },
            {
              "path": "src/session-route.ts",
              "size": 1667,
              "sha256": "55fc7d0515b7e0733cd2308276da82f39e2d80ef5dadbd6b8cb460d1964c62d0"
            },
            {
              "path": "src/setup-core.ts",
              "size": 3084,
              "sha256": "dc9fac9d165e1740fc9aa9e0721c699bc138e0a44136526442380efbde768707"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 4567,
              "sha256": "185b8267627c9367bb17af3413bf76b1efc9c7ae30f69147a84dc643a7ad53cf"
            },
            {
              "path": "src/setup.accounts.runtime.ts",
              "size": 95,
              "sha256": "610f43af3b4b943aceafd7a4eef2bcc7fb2ccf0a4aa88e7556bc56865c064f69"
            },
            {
              "path": "src/setup.client.runtime.ts",
              "size": 69,
              "sha256": "3067ea713effb00e89bd9851e299fad74d6dc9f85f94f264429b3392c21c4a46"
            },
            {
              "path": "src/setup.secret-input.runtime.ts",
              "size": 159,
              "sha256": "72fb5117b928e5dd1e2ee44157b3307286c8555c8fbc6d2e2250ac95544df7b7"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1066,
              "sha256": "ecc3f059ebd78d61053d41f3973dedd168dab14788348256488f38048704c946"
            },
            {
              "path": "src/types.ts",
              "size": 4767,
              "sha256": "ca06b83612246878c4369275d495d9e2c512b47c8970a40af18dfb88ecf6401c"
            },
            {
              "path": "src/webhook.ts",
              "size": 1166,
              "sha256": "5994992cca6c3baccb45b8f37ae731e7a6e18a7988075d6b88d190c9a4abf35e"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/nextcloud-talk",
    "kind": "channel",
    "name": "@coreblow/nextcloud-talk",
    "summary": "Official CoreBlow nextcloud-talk community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "nextcloud-talk",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for nextcloud-talk."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "nextcloud-talk-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 31280,
          "sha256": "56bf3faa9d7584622d1e36141fab916572afd070304fb897d7aa92e92dd7d7a5",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "56bf3faa9d7584622d1e36141fab916572afd070304fb897d7aa92e92dd7d7a5",
          "format": "tgz",
          "packageName": "@coreblow/nextcloud-talk",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/nextcloud-talk-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/nextcloud-talk-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 56,
              "sha256": "d049657024292e29c19359b6db430ddba497bacde72566350cce40d5a1a84411"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 56,
              "sha256": "d049657024292e29c19359b6db430ddba497bacde72566350cce40d5a1a84411"
            },
            {
              "path": "contract-api.ts",
              "size": 110,
              "sha256": "3b94b2c1322f3d3ca7ab4c5a5530a05ea9153225e1a0f954f0b4adff6f1ecd94"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 174,
              "sha256": "f584c037a6453a0459d217b612871b00255e837a079c8aad3d45eb918b591f41"
            },
            {
              "path": "corehub.artifact.json",
              "size": 593,
              "sha256": "5fbebc39792ccbd7e36c5c0cba8c0757fb728cf15f29bf8d197edcc1922a0e4d"
            },
            {
              "path": "doctor-contract-api.ts",
              "size": 92,
              "sha256": "ed08fea6a1d291a636d63a141e4b87d50b40a1a151747d7518820d5d9b946d83"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 532,
              "sha256": "af134a8575ba950a7ff8f7aac7421087a55c070b03af574bf268a23e3816c843"
            },
            {
              "path": "package.json",
              "size": 1084,
              "sha256": "f1a72665dffbec994cf25ae192898d2cea020fcd1ac2c70fd12a1dd0ff5c2c7b"
            },
            {
              "path": "README.md",
              "size": 219,
              "sha256": "3dd26779c5e26ea724327d7eac94cc2005114b240ef935fff49a59343d2a0f3e"
            },
            {
              "path": "runtime-api.ts",
              "size": 192,
              "sha256": "e5207d7c054c1714af06007f9d25d7b0e567a3b18fead4941af0869b9944a03d"
            },
            {
              "path": "secret-contract-api.ts",
              "size": 128,
              "sha256": "c381e9461fc33c8b3f797fc2541fc4e91960ae02623fcfaf834ed0d56d6b9f02"
            },
            {
              "path": "setup-entry.ts",
              "size": 184,
              "sha256": "7dd11a4406e33a008c0db8e4a7b409c54ea7426479e608976358dc96bc8d08ac"
            },
            {
              "path": "src/accounts.ts",
              "size": 4665,
              "sha256": "c754355179c0c3f440c1b3e8a8eaefcbae079a39a3a51f7fb979f190de7a52f4"
            },
            {
              "path": "src/adapter.ts",
              "size": 511,
              "sha256": "c950c4bffb66443b073aa62e624d1a06edf186bb7a326e14fd0a2436063f20d3"
            },
            {
              "path": "src/api-credentials.ts",
              "size": 844,
              "sha256": "01b968d415614ea150f187698e9ef9e96594bea365fde6bcf93ca292daa916ee"
            },
            {
              "path": "src/approval-auth.ts",
              "size": 929,
              "sha256": "42c403bbe13d7816c3fc561f3eeae3d14502bf121babb120ecd438cd6f29c97e"
            },
            {
              "path": "src/bot-preflight.ts",
              "size": 4203,
              "sha256": "f0965cab2b7afb3bfc274a0504acda8e71e3e75c6a33c94110b40d4efe9761b0"
            },
            {
              "path": "src/channel-api.ts",
              "size": 234,
              "sha256": "f087ae9aa42ebd5265a33c2473bd616df8e5917874e89d0e5098ad72ab0c7d60"
            },
            {
              "path": "src/channel.adapters.ts",
              "size": 1844,
              "sha256": "767f7a00a4a6c1ae28fa6b988a4eea4be6271cf0d846dff5b406049ecc839641"
            },
            {
              "path": "src/channel.ts",
              "size": 14594,
              "sha256": "f11be44b79db656ac467b7b9e426cc03a6dbc0696cf478df204cee398647b814"
            },
            {
              "path": "src/config-schema.ts",
              "size": 2606,
              "sha256": "9894b417b76863d4161076b768a4e181278ac883e35e5484ede798df2d1505e3"
            },
            {
              "path": "src/config.ts",
              "size": 722,
              "sha256": "0f47d8b6d8a6379070a635cab4d596e2bf06ca9614523bf07d7060c00d7d540c"
            },
            {
              "path": "src/doctor-contract.ts",
              "size": 1238,
              "sha256": "39b0a11de23061e7003e72f6ec7b679c9fd12189fa64df734b2058351e5ff901"
            },
            {
              "path": "src/doctor.ts",
              "size": 1067,
              "sha256": "4ba03a33f3771a4ee004ddefd28e5eadd2acd96531584c694deaafd095d3e6e5"
            },
            {
              "path": "src/extension.ts",
              "size": 456,
              "sha256": "cf4adf7fd2a5ece6174c2f2b1e6e232e371e0413dcc2259edb8ae05c6120098d"
            },
            {
              "path": "src/format.ts",
              "size": 2242,
              "sha256": "4ee1a63ac8333b8ad2c9e3447067038409993cae8d5e92532ef0f8c14eb273df"
            },
            {
              "path": "src/formatter.ts",
              "size": 848,
              "sha256": "e507535e1736fd4f58a7d47296fc8c9829c3acabcb175dd79a8e54093de346cf"
            },
            {
              "path": "src/gateway.ts",
              "size": 125,
              "sha256": "bb03d2305e6370742b023cf625b39de1af1341fe4f47fc8e846a77f55af4e32e"
            },
            {
              "path": "src/handler.ts",
              "size": 449,
              "sha256": "dfe8a3c2767f467c49c72a9856eac15426bb2a9d6adc7302d52b9cde56e05a9b"
            },
            {
              "path": "src/inbound.ts",
              "size": 10405,
              "sha256": "d4b0baa208d626eb0d31913bfc253719017c2a10177cbbe1e1f97f853dac04b5"
            },
            {
              "path": "src/index.ts",
              "size": 212,
              "sha256": "5f85781a0aee3e14bd7b884c96d2b449bfc59ecf4389ce716addd0bda00e2434"
            },
            {
              "path": "src/media.ts",
              "size": 910,
              "sha256": "920fe8378bc8a6c7ab0f0b7ee26bf4ae7abfaedad5c35ac57868a524cf986598"
            },
            {
              "path": "src/message-adapter.ts",
              "size": 1149,
              "sha256": "135fe4dbeb0bda62adbebd77e05a847a208f86f06e1b0831026b7509a38a190f"
            },
            {
              "path": "src/monitor-runtime.ts",
              "size": 100,
              "sha256": "6459efa4be72803a6746f02bfbdb2a40c2d908a7a29da6429657a2043d91ea99"
            },
            {
              "path": "src/monitor.test-fixtures.ts",
              "size": 897,
              "sha256": "b976359d28d5420e304837c2dfaa26a443b63f5c21d6dd4475deae8706a1adb5"
            },
            {
              "path": "src/monitor.test-harness.ts",
              "size": 1466,
              "sha256": "92cf1df84d1bf7f151d66699afae388df51f41ebe22439135f92c9910e184ff8"
            },
            {
              "path": "src/monitor.ts",
              "size": 14021,
              "sha256": "b9b4da99e8d76a3e31ebaaa745c53b81f4534c7ade9a5a6118dee20b393700d8"
            },
            {
              "path": "src/normalize.ts",
              "size": 1190,
              "sha256": "9cb24cb442e15ce3fb861fc92545d6e7598ead9c40ee073543e7927aae49360a"
            },
            {
              "path": "src/policy.ts",
              "size": 5847,
              "sha256": "b60a2017cc4a4e86b8882da355d510d16bc6f265ea6778b926f9a4c40d9b4683"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 875,
              "sha256": "88442aeb3f9a9c221d0ad1c76dbb7574e6c50050662da81d743e96f9791346fe"
            },
            {
              "path": "src/replay-guard.ts",
              "size": 1957,
              "sha256": "32492fa4412c22f341f76d7ce746f39fee98336ff102256b2a8b43c10bdefd3f"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 838,
              "sha256": "5cda503063168014247b475b80f4fcd31913fb87e18ef596a21ced2b2580f3f3"
            },
            {
              "path": "src/room-info.ts",
              "size": 4160,
              "sha256": "7387925e5df65941a3b2e0f692f11e0d591554a22dd6fccf670b787ca588ff10"
            },
            {
              "path": "src/runtime.ts",
              "size": 1424,
              "sha256": "c981f7e027ec9df2e5269d4bac1cbab5d5a3b7a712dfa948f45b0c085a5ea164"
            },
            {
              "path": "src/secret-contract.ts",
              "size": 1629,
              "sha256": "55d620392b004237625819106dd6ea817a463ccdbddc22a69e17525a518d68ba"
            },
            {
              "path": "src/secret-input.ts",
              "size": 174,
              "sha256": "7eae9009c9862e4df8a0403ebd0ca7a9ba65bed857ed9657c058ed3a76424f89"
            },
            {
              "path": "src/send.runtime.ts",
              "size": 653,
              "sha256": "4793bc27e54ce8d65a749a5e32fddb537273032caeca1b1b79df77a39eda8ba5"
            },
            {
              "path": "src/send.ts",
              "size": 7221,
              "sha256": "624d8d122f3947853a4a389014009b7b0716d4706ee108d4644c83184cf1d5b6"
            },
            {
              "path": "src/session-route.ts",
              "size": 723,
              "sha256": "f7e48376540e15c2e0e4d8cdd1e7a05000f0ce60d48c631d20ba550aa61a9f4c"
            },
            {
              "path": "src/setup-core.ts",
              "size": 6899,
              "sha256": "741ba0aaae09b5a83475b04588753bdcdfcea5b75156c2547a6992bdfac34d92"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 7651,
              "sha256": "478cbf56cebff0c36237511b17c44375b4d2c053e6000764949f047ddcb332ba"
            },
            {
              "path": "src/signature.ts",
              "size": 2065,
              "sha256": "c348be377e82eb1f2135bb12a53fd921369c957d91d943c914c2cde457696719"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1087,
              "sha256": "2392f87af236d16ce838c933b282b5150449ca64b2af4078a74443fbc47be9ac"
            },
            {
              "path": "src/types.ts",
              "size": 6204,
              "sha256": "634ba1a64e956018e50337abd573d6d835632d6b0341fa92e677af7ae1137f23"
            },
            {
              "path": "src/webhook.ts",
              "size": 1172,
              "sha256": "a02b046025bd03adb8ebcf3317913e4824bd4059b35f56631e85cd48a4cd110e"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/synology-chat",
    "kind": "channel",
    "name": "@coreblow/synology-chat",
    "summary": "Official CoreBlow synology-chat community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "synology-chat",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for synology-chat."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "synology-chat-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 26131,
          "sha256": "9ba896d6b266c7f44892ea97031759ce70f8f9a224016b7db34bf1e6cebcd478",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "9ba896d6b266c7f44892ea97031759ce70f8f9a224016b7db34bf1e6cebcd478",
          "format": "tgz",
          "packageName": "@coreblow/synology-chat",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/synology-chat-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/synology-chat-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 194,
              "sha256": "82ea6917b1e82ebd045c16ef0ecf4b6f7a8453ab78eda98c68e59e9f40f322f4"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 55,
              "sha256": "ba931c0f9bfce5795c3f62a3c09a6920c2865a27c0663398740fd9ed001ed695"
            },
            {
              "path": "contract-api.ts",
              "size": 84,
              "sha256": "8bb355c8c8354cf022fdc40fc6689ac0f0f1c59af5e6b75aea9058d8ac87319d"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 172,
              "sha256": "148827e3fc0776e2d08c6ea1967d7c21e5f29c1bc9e721c1c418681290b0d72a"
            },
            {
              "path": "corehub.artifact.json",
              "size": 591,
              "sha256": "f2c882c78a20c8102117b4c5c534b3e8d387b8a50d6e5c9cbfe07d7308f78a27"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 531,
              "sha256": "13c67b267525cd8f8da4f0c9cb2e356e5fb83b51945b30afbb8227a11537576d"
            },
            {
              "path": "package.json",
              "size": 1003,
              "sha256": "997996dbc9294a5be36a03edf0181cbde953f669357691a09da57a77f03e21d3"
            },
            {
              "path": "README.md",
              "size": 214,
              "sha256": "d21a39934260133e0cb2b7c3c3addaec5e5171e4aa2920010f51aa137f572a7e"
            },
            {
              "path": "setup-api.ts",
              "size": 92,
              "sha256": "f5fb6189118eabc5ffc5a52641d1c1a0236e25ec47f8b878338ec2a8f51f3371"
            },
            {
              "path": "setup-entry.ts",
              "size": 182,
              "sha256": "2d4e172b2e3b0f467f0218d0eaec7eab81579e4aae35e7250776525cb0b5a14b"
            },
            {
              "path": "src/accounts.ts",
              "size": 5205,
              "sha256": "6d5bef84b113d1f778ff015410bcabd1a9f0b51eb61ef5ad2ef32e4742cd59a2"
            },
            {
              "path": "src/adapter.ts",
              "size": 509,
              "sha256": "b18fec10f38a852eddb5afcc1a7c317201a2e2784a5ed7d47f42c6e46b9e8fce"
            },
            {
              "path": "src/approval-auth.ts",
              "size": 775,
              "sha256": "fb92262507aa9e67ef626a2fb5137868bfed9019c4bdd9376b6540f776a5546b"
            },
            {
              "path": "src/channel.test-mocks.ts",
              "size": 3738,
              "sha256": "0bffc4229ae860d63a3dd2835f706c0e14cf660610a8bea2c1903f62264ae36f"
            },
            {
              "path": "src/channel.ts",
              "size": 13636,
              "sha256": "ef0a19b25ab922a2e9a52cd001a06867e548e9667cddca2289024bced0316d4d"
            },
            {
              "path": "src/client.ts",
              "size": 8633,
              "sha256": "ea9694835d87066486a5c103da24c65a52e06d6b8b829740c7ddb244b9d6ea49"
            },
            {
              "path": "src/config-schema.ts",
              "size": 381,
              "sha256": "efb9edca950674905cb0d6528ab8895e31b04e798b60a36a1e753c1bc511f6a1"
            },
            {
              "path": "src/config.ts",
              "size": 716,
              "sha256": "e1dfac45a6c1c2138b4e75d310547ca7e9a206be751c4f549a0a469cd6dbb970"
            },
            {
              "path": "src/extension.ts",
              "size": 453,
              "sha256": "0b271e7b67c3111971ad723250f28f2e08c46dd49da07c6d55e0203c3d7acb24"
            },
            {
              "path": "src/formatter.ts",
              "size": 846,
              "sha256": "81afd8f3108b3f3415f6e1e3d69da579780791a8b9d88b60539e3cd81e0767df"
            },
            {
              "path": "src/gateway-runtime.ts",
              "size": 6200,
              "sha256": "edae508b7950dd9ade9c8bd93b1bbff2e73ca808066d0abb515624f2fac5a488"
            },
            {
              "path": "src/handler.ts",
              "size": 445,
              "sha256": "cfbc64c4093aa8bcfc5c6ddeccba11f71b6b4195b77de1639cf42cf3b7e031a9"
            },
            {
              "path": "src/inbound-context.ts",
              "size": 1205,
              "sha256": "9a110327db8fe9d684eb4c170daef3df19ae5abcf75479c964b66e867f6ac97d"
            },
            {
              "path": "src/inbound-event.ts",
              "size": 5725,
              "sha256": "6f17775285d514b8f3ee82b85ae15582c1f991be0cc1aeae8ca1179e3ad7858b"
            },
            {
              "path": "src/inbound-turn.ts",
              "size": 2867,
              "sha256": "d3e9705a3c09eb50ac4ea5244b93d43401b2fa01ccffc1b842125943e7388358"
            },
            {
              "path": "src/index.ts",
              "size": 208,
              "sha256": "5f79ba4919a139a353634259fc89afb8dcda824bdb9a5f14e55d2a83a1ebd403"
            },
            {
              "path": "src/media.ts",
              "size": 908,
              "sha256": "ed2edb53c4fbc644705f983b6c837180077a0be078c2458894fbeee9370fc389"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 873,
              "sha256": "b60d7532ea903b9ae68a35413c395d3f5c9e8d0b4bf16937ae743c795a8ab7aa"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 837,
              "sha256": "580fe3aa4f058b875c5e78f424ac4bde9c3e9cce156e7747737408bb0251feea"
            },
            {
              "path": "src/runtime.ts",
              "size": 1400,
              "sha256": "a87a6439c7c96f7e0c5263b4775f66a5d724d444a54389c324df0e0709ae5886"
            },
            {
              "path": "src/security-audit.ts",
              "size": 1124,
              "sha256": "c110f1fea094bc2871100a52ddd106dce6cf24d1e856763e7d4153be8d75ede0"
            },
            {
              "path": "src/security.ts",
              "size": 3623,
              "sha256": "d559a199b0eeacf69b09702c1156af87cfbca2a9a59e07e221f50ba1b9fa3e5a"
            },
            {
              "path": "src/session-key.ts",
              "size": 680,
              "sha256": "b75461c8b9d8e2bb02da8cd7a88d3fe9f61656d58e1e99e14a62a76ac9111acb"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 10919,
              "sha256": "603ffcc67b9f4e7843f670fadee72f56c0974cca1c1c3851b3d3af6de02e1861"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1080,
              "sha256": "8a723efa705c9276b2536563c77664136eb8857c899d8b77b7e06653894bf894"
            },
            {
              "path": "src/test-http-utils.ts",
              "size": 1852,
              "sha256": "f1df469174dbb3f6279292d658986e20bb27bb71030ddfd45b6dc17426733cb1"
            },
            {
              "path": "src/types.ts",
              "size": 1720,
              "sha256": "295f93255bc17f0bc491bf4d542a07a4af3780364564f841a99572b6f64cd6d0"
            },
            {
              "path": "src/webhook-handler.ts",
              "size": 19001,
              "sha256": "bac0c6facd0fc4169cffc2c2533550ca51c6d51a936e26f74cedb014a02a43c3"
            },
            {
              "path": "src/webhook.ts",
              "size": 1170,
              "sha256": "2a23671a96c6530971d577493b9379bd432736459fa2969129a38b086e8c31d4"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/tlon",
    "kind": "channel",
    "name": "@coreblow/tlon",
    "summary": "Official CoreBlow tlon community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "tlon",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for tlon."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "tlon-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 55306,
          "sha256": "02140ff953e1e8fd43b6173a18ce49fac53ca569b9669d1849909e5cde9f186a",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "02140ff953e1e8fd43b6173a18ce49fac53ca569b9669d1849909e5cde9f186a",
          "format": "tgz",
          "packageName": "@coreblow/tlon",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/tlon-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/tlon-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 34,
              "sha256": "301dccbe59e1a79720c8c52b6a96ebd0267b860494a3f617511e93065d462c50"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 47,
              "sha256": "eabc31c46fc891f7f5e309195dd4b057e922f2246aacef7d22fee78dcc8cbc8d"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 213,
              "sha256": "e4176cb58ccdb83ad73fa31e8a1fa0e245b3528500aa18f94037c29836440749"
            },
            {
              "path": "corehub.artifact.json",
              "size": 574,
              "sha256": "3049386a6ae9d8577eeebdf8c9f95aa44e8f8d82ab1fe1e38e14a91a6c663c47"
            },
            {
              "path": "doctor-contract-api.ts",
              "size": 92,
              "sha256": "ed08fea6a1d291a636d63a141e4b87d50b40a1a151747d7518820d5d9b946d83"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 4608,
              "sha256": "b56d30a086a3fc64c0a1ca30b79bb31ae923fe0b7724b1de278b174203000da8"
            },
            {
              "path": "package.json",
              "size": 979,
              "sha256": "900cbc7f522351aec0027c9e46c1eb871756f156c3f24103043c60268883c1d6"
            },
            {
              "path": "README.md",
              "size": 176,
              "sha256": "1af5412cb6468cb6090dd919bc928bc9cb7a4805d201ad4436d0aa7822fed1d5"
            },
            {
              "path": "runtime-api.ts",
              "size": 172,
              "sha256": "860a0d4eb08f916cca6cfc4ad7a812ca1431e1c5710e1a9874e0d8315117f6d4"
            },
            {
              "path": "setup-api.ts",
              "size": 114,
              "sha256": "f23c18d691ab625874f39e79b3218965c0fbbc93dbfc218aa9847fa7ec3c1477"
            },
            {
              "path": "setup-entry.ts",
              "size": 166,
              "sha256": "d3b3fc24c12377a45162c13c5dc66c59fa6824377d3b3b85e08ef2442af4e754"
            },
            {
              "path": "src/account-fields.ts",
              "size": 937,
              "sha256": "8cc326c0ec33e4b443c1f932299989547d2a737806134e32ff9687066f5b8429"
            },
            {
              "path": "src/adapter.ts",
              "size": 493,
              "sha256": "fc67d13d539d9c320f6004db8f2961db04a3905183f7df53d7395af0ed239505"
            },
            {
              "path": "src/channel.runtime.ts",
              "size": 7336,
              "sha256": "e609e5dbc7336fb5e2c28dfb452c3048843f6b8690764b4e612de98f469e90aa"
            },
            {
              "path": "src/channel.ts",
              "size": 6248,
              "sha256": "50d1d12ab3a320a1694ac5514a71ce19087de3962633d51234235063e99ea726"
            },
            {
              "path": "src/config-schema.ts",
              "size": 1729,
              "sha256": "59c0200432dfd3018d7e09f5b0c000c9a6c28ba335642094a47ad1254b338d25"
            },
            {
              "path": "src/config.ts",
              "size": 667,
              "sha256": "89800ee12e088da32ba041745722a41154519f2ce9781324f87181a1316e656c"
            },
            {
              "path": "src/doctor-contract.ts",
              "size": 1723,
              "sha256": "1ca8a71483562ea873bad668a82a9507568b48d81a8dc89db595b6e8e0734dbf"
            },
            {
              "path": "src/doctor.ts",
              "size": 302,
              "sha256": "06d63892c4591bff09307766c61eaa467a3a8ad413dfaf79fba59b85ef92410f"
            },
            {
              "path": "src/extension.ts",
              "size": 428,
              "sha256": "92177393cb09f9a693201f18cd93fcd048188a9dad57785747c7326a7caee2ce"
            },
            {
              "path": "src/formatter.ts",
              "size": 830,
              "sha256": "53c9718b5b9acffa8d153828a5ef08cd141958d6adb986619f0d3d9476e4cee4"
            },
            {
              "path": "src/handler.ts",
              "size": 413,
              "sha256": "2480a8353ba0bedc36410679a0c11b7a31aa40a9bb3541961fd894f0bc487cfc"
            },
            {
              "path": "src/index.ts",
              "size": 180,
              "sha256": "b49dc6c97c06964ddc966fa15d983ea1ee6d1c54ce8d6f1f17967682090b7fd8"
            },
            {
              "path": "src/logger-runtime.ts",
              "size": 73,
              "sha256": "c1a4ed44f2c83e0c7fddf81b9b4b828f15f825a769cd36cd17672f7458f4a250"
            },
            {
              "path": "src/media.ts",
              "size": 892,
              "sha256": "ae6fc6bc87dab0b2ca58c7f444af6a3972e274b2b0946d0440dc240cda0d874d"
            },
            {
              "path": "src/monitor/approval-runtime.ts",
              "size": 12045,
              "sha256": "4b5e2a086083419032db8ee7d14345c287230eab2320ae2cd44bfa062d6d59a6"
            },
            {
              "path": "src/monitor/approval.ts",
              "size": 8137,
              "sha256": "94db620e77f794bf5600b82c294f0cde14402f75d082dfeda2026a6229949daf"
            },
            {
              "path": "src/monitor/authorization.ts",
              "size": 990,
              "sha256": "9f5e36b5916ef00ec2dd69fead25511c4e33859da97bee6e74f959852a59ff27"
            },
            {
              "path": "src/monitor/cites.ts",
              "size": 1486,
              "sha256": "6af5c440ae54a66d12dd1b1ec52a00a3864cdbf32174cb4aa10605cdd86bb801"
            },
            {
              "path": "src/monitor/discovery.ts",
              "size": 2744,
              "sha256": "38f255219dc4b8d9caf008e59ef2b075d7fb6da767febb0fab719f360e2be55d"
            },
            {
              "path": "src/monitor/history.ts",
              "size": 6286,
              "sha256": "404746911c4cb3ff8dbabc7dc81f7feb3db87604a89909c85307b088d72b15e1"
            },
            {
              "path": "src/monitor/index.ts",
              "size": 51488,
              "sha256": "dae62881d109d4d832bf27d00c3741a46abcd2e5ffca871d87dfd6d39f94644b"
            },
            {
              "path": "src/monitor/media.ts",
              "size": 4625,
              "sha256": "5a1243cf89d7b34e0a807e31935198bdeef0a17872f2c1e6d523041d7c0d4e46"
            },
            {
              "path": "src/monitor/processed-messages.ts",
              "size": 2177,
              "sha256": "e148ece90458d333157e6fcf4025b3788cd10b0d99c8d8ae36c00478360910af"
            },
            {
              "path": "src/monitor/settings-helpers.ts",
              "size": 5757,
              "sha256": "302e526c4af6496b0bd054fc0f2db962ab8ddcaf839c3574b43ffe5786491d84"
            },
            {
              "path": "src/monitor/utils.ts",
              "size": 11615,
              "sha256": "2ba70a23b0655ad6d5e86a3a7f92669ac3a7a9b592a6d62b6cbcc59d05294626"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 857,
              "sha256": "ac0e66e14e032adeaf0e42f4ed1e03d1d0bfe4379d23391cf751615861322aa8"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 829,
              "sha256": "fa2c7246a0db1490dd7b83c31e5e9ea44218e038afcb57e5c23481b742f00469"
            },
            {
              "path": "src/runtime.ts",
              "size": 1296,
              "sha256": "079beb25591f56c9218abd985e12d514069041fd54acd912fe1586b041e98b33"
            },
            {
              "path": "src/session-route.ts",
              "size": 1032,
              "sha256": "97cef74c5d0e2ac2a6aeeb7a572516b3d71a472387b4fc080013da96d91f03b8"
            },
            {
              "path": "src/settings.ts",
              "size": 11435,
              "sha256": "461aae57d5b497f714bf64b889033859d3d6f942682bb0d357620f5a75f0ca36"
            },
            {
              "path": "src/setup-core.ts",
              "size": 6658,
              "sha256": "6bf7bbaee3dd0a0eb170900574cf3b3d726b919ff9864d693513cdb83c718c9a"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 3593,
              "sha256": "9c1fa07ba02d9b1ffbc8926b80ce1c542c8958e1d44645e67b5b0ed504a3cb3b"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1024,
              "sha256": "89dce49fcb6e3edf9f0349f6d1793a293d1591918e9fe7e68200393c5a7ea1eb"
            },
            {
              "path": "src/targets.ts",
              "size": 2803,
              "sha256": "014e191f1e5d87f87e85c35d57069cbfab4d186d848189708d9ea07a66602e65"
            },
            {
              "path": "src/tlon-api.ts",
              "size": 8537,
              "sha256": "a4b47a3fe9d5022c3873ee612a33b2c276b067e94fa43d33b1bcfda12f1cbaf2"
            },
            {
              "path": "src/types.ts",
              "size": 4802,
              "sha256": "eaad2344a482071a4f1ae925fe2b1d210c69166876a2101b2f86884d0b072e82"
            },
            {
              "path": "src/urbit/auth.ts",
              "size": 1453,
              "sha256": "b35448caa579649a83325ce59b1249eb699bfcf5975768510518ac5d4350f72a"
            },
            {
              "path": "src/urbit/base-url.ts",
              "size": 1853,
              "sha256": "67670407aa6dcdc3670cbed1b08263e382afd7c6813c9bdc6c011f1585a20937"
            },
            {
              "path": "src/urbit/channel-ops.ts",
              "size": 3785,
              "sha256": "86a1db83602c050ba95c45792f4594d76bb702551b21c9fa6f513af48574ae49"
            },
            {
              "path": "src/urbit/context.ts",
              "size": 1515,
              "sha256": "9f44f304d09efee6311cdda00994016ca20abfbd034980c34a751914c970db0b"
            },
            {
              "path": "src/urbit/errors.ts",
              "size": 1388,
              "sha256": "4743bffb4af5ceac7f037d27df38c6538235b33218983a83654fca9d27fbf1e3"
            },
            {
              "path": "src/urbit/fetch.ts",
              "size": 1131,
              "sha256": "431adfc4c73f8fbef84031acc03f961be58566849c21d2e93771959db2cabad6"
            },
            {
              "path": "src/urbit/foreigns.ts",
              "size": 1144,
              "sha256": "00e5508881a63eddb1c871be304d9ebc58e5a54a5f18e8b3e6e2ab2761f04f00"
            },
            {
              "path": "src/urbit/send.ts",
              "size": 4503,
              "sha256": "aab625570aa3b62c8950d8db47f5c723dcef68de4ff025461cc73632d7f7db4c"
            },
            {
              "path": "src/urbit/sse-client.ts",
              "size": 14012,
              "sha256": "a04eb46f6e148a8c41062385dcde5ed16e93ee4f7709b4ad91983c5627af3583"
            },
            {
              "path": "src/urbit/story.ts",
              "size": 9787,
              "sha256": "bc6be9c94a9049a8a7f7dc1fdffb7a515e2123aa0b11f9c270f9e85b6098f7a5"
            },
            {
              "path": "src/urbit/upload.ts",
              "size": 1885,
              "sha256": "b684d7cbf2e94ebed874ae23e81326b5d00df7e217d215b3c2d8231e2857888a"
            },
            {
              "path": "src/webhook.ts",
              "size": 1154,
              "sha256": "8ae01ce61adb01722d10ee5b920348fcdbfec331b0fb62fe8083fdf3e21a949d"
            },
            {
              "path": "test-api.ts",
              "size": 47,
              "sha256": "eabc31c46fc891f7f5e309195dd4b057e922f2246aacef7d22fee78dcc8cbc8d"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/nostr",
    "kind": "channel",
    "name": "@coreblow/nostr",
    "summary": "Official CoreBlow nostr community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "nostr",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for nostr."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "nostr-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 34527,
          "sha256": "ad1254f3a1eec21b7bc1b251d345d05d719a62e7e5222d04708d2bd085f51a20",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "ad1254f3a1eec21b7bc1b251d345d05d719a62e7e5222d04708d2bd085f51a20",
          "format": "tgz",
          "packageName": "@coreblow/nostr",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/nostr-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/nostr-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 342,
              "sha256": "ca2d24f72f558e9067b1b744ea03c7bdf6cbeb15995a44717593ad8871036414"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 48,
              "sha256": "e7f0d67209bf0bcc06da0dee85dcb1ea8b44ee2e2a07f51f2286a18ddca4458f"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 156,
              "sha256": "6d52df3d1bf8cb6ba4b60c471760809d092bf0e09dec507a9a90c325e5651cfa"
            },
            {
              "path": "corehub.artifact.json",
              "size": 576,
              "sha256": "f003e0bbb1ba4ebb126d91d2d2db3ec537b16feeae6f463cdf12e2a06e9c1eb0"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 2151,
              "sha256": "e93bbb2ef57b48d5b8c5eaa85762ae00631f3fd6f50daf0de24166250e875fd2"
            },
            {
              "path": "package.json",
              "size": 999,
              "sha256": "0ccee1a9d1aeb5360034d68afa44b5db1e9250caea6df62e0fe4cefc0d312144"
            },
            {
              "path": "README.md",
              "size": 209,
              "sha256": "ce9b57004afc6ee516baeda7dd95cc0bdcd9036562690bb08c0bb63260131f23"
            },
            {
              "path": "runtime-api.ts",
              "size": 174,
              "sha256": "210843533a5db9c6b401a84611b7c8061106dc3f963aa5aaa0cf8d99e603e939"
            },
            {
              "path": "setup-api.ts",
              "size": 78,
              "sha256": "1b959ae26155738f17fe6da132077cd04db0819511d483aa0e6c04b26f6dd01a"
            },
            {
              "path": "setup-entry.ts",
              "size": 183,
              "sha256": "d2f0411aba608918ab9b4a6f5ce8c8fcebfb1a60741fe183402629a9a6bea8b0"
            },
            {
              "path": "setup-plugin-api.ts",
              "size": 59,
              "sha256": "a49a112965be0d947b2b5f9df828dc764d3157c5578876966b57135103951b35"
            },
            {
              "path": "src/adapter.ts",
              "size": 495,
              "sha256": "1a51b9e85fc66ea0c961366d9c350409d20d374628473be58bd8ab5953b11f26"
            },
            {
              "path": "src/channel-api.ts",
              "size": 296,
              "sha256": "97631db8368cad65df424fb67a939f64ddd62b922ca763cbc2af731fe06cb2d2"
            },
            {
              "path": "src/channel.setup.ts",
              "size": 1672,
              "sha256": "1f68083b0ba223293fcc0e1b1d0b6cd3186b65c38c2fa9ad68abc98b80dd3bcb"
            },
            {
              "path": "src/channel.ts",
              "size": 17666,
              "sha256": "5bc09260556fd3550b7ae749ecc7e337cbf4994ca4083a6d498219ccb2caf6c7"
            },
            {
              "path": "src/config-schema.ts",
              "size": 2585,
              "sha256": "8cd0c36eedb6d5646c51d27dbe09f550e5b309307daceb3645a1a12265790f10"
            },
            {
              "path": "src/config.ts",
              "size": 673,
              "sha256": "91134fb74a340f2db4868a4c0affd524d496ce657c8786223d2d66dd02374126"
            },
            {
              "path": "src/default-relays.ts",
              "size": 73,
              "sha256": "68261e435304c91b45d767e36ed4794e4d24de966afb480d033b9b6a292991c2"
            },
            {
              "path": "src/extension.ts",
              "size": 431,
              "sha256": "d6ffc92efde937eab40820af9b07bf6a07c4eec1fbbd5a75e28c2fef091ef21b"
            },
            {
              "path": "src/formatter.ts",
              "size": 832,
              "sha256": "23e73c895f788de1f11a5c1569dd7973ab70fd2c1eb7b6cb8165c6059ac9a895"
            },
            {
              "path": "src/gateway.ts",
              "size": 241,
              "sha256": "233cb20a1bd8661e98292c0230226d022412e8868f3784de396a7fe4868b5b94"
            },
            {
              "path": "src/handler.ts",
              "size": 417,
              "sha256": "53337eea62e3164dc12107b313760d874be708130dd16333f1dcd6d9dabe268f"
            },
            {
              "path": "src/inbound-direct-dm-runtime.ts",
              "size": 72,
              "sha256": "01d04d76231bcaec64bd20f15578c43357c56d7761580849feefeb173be0786d"
            },
            {
              "path": "src/index.ts",
              "size": 212,
              "sha256": "c2fd1f6bd9ea84fc4a9b4e1cfbca752cd102965c706229283345c0f2aeec5f2c"
            },
            {
              "path": "src/media.ts",
              "size": 894,
              "sha256": "6e9c189442c2f63bedbe8b3c9e3dbf3ecfacda0127a7e33f72fc2cf2ef894f6f"
            },
            {
              "path": "src/metrics.ts",
              "size": 12024,
              "sha256": "1d63670fd977ec33e24590f27f5dfda5cec81375ccfd479184ce289225233dbc"
            },
            {
              "path": "src/nostr-bus.ts",
              "size": 25763,
              "sha256": "7d8cb2d2334cfbca64cbeaec91e19cbc6ac7d8e9ade32ce8120c93db584361a1"
            },
            {
              "path": "src/nostr-key-utils.ts",
              "size": 135,
              "sha256": "a494c03eb8782d15b1641196612786c74c47bf4a1f6834b64e5abf3216ce146e"
            },
            {
              "path": "src/nostr-profile-core.ts",
              "size": 149,
              "sha256": "80a09f75490e3d8f383cbd8c459e51fbe174832ffa9712f13b4c3867b5885e6b"
            },
            {
              "path": "src/nostr-profile-http-runtime.ts",
              "size": 151,
              "sha256": "2154911e71448ba9a4b21518c4c6f10fb5a5abdbbef7ce7d00b9f928b01192f8"
            },
            {
              "path": "src/nostr-profile-http.ts",
              "size": 17907,
              "sha256": "d9aafa434f2481e658b622932d311eeb97fa510fdd03c376d55ff4993ee2bbe2"
            },
            {
              "path": "src/nostr-profile-import.ts",
              "size": 7044,
              "sha256": "b1104cc6ada165bbb7f267d5beb49e5aedceacee9987fd42a1640136d43d0f45"
            },
            {
              "path": "src/nostr-profile-url-safety.ts",
              "size": 561,
              "sha256": "4716013ef6979724f1c4f6fc354c0532fe10c3ea0695b72ee00cd9e690103983"
            },
            {
              "path": "src/nostr-profile.ts",
              "size": 8003,
              "sha256": "9cd62e5d2dd86cf6f6a56d96e13597a992a6155297501ae2ad7dcb27da1418dd"
            },
            {
              "path": "src/nostr-state-store.ts",
              "size": 7147,
              "sha256": "9b14da2f38f0a85c25f21cb551b244fe9844fda5bcc240554c37d363d1047612"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 859,
              "sha256": "3a3e97c4758888498ea6e8405a20e42270abf9db53b4c85263feaf95f4c5728d"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 830,
              "sha256": "80c8699c0724d2829108db1c3ff0a460dcaccc85eb88ff43de7adf7169e05d62"
            },
            {
              "path": "src/runtime.ts",
              "size": 1310,
              "sha256": "e8cd00f6f78dacccc46769b2924cf0caa9548c5c0163f9b023133381572e8b53"
            },
            {
              "path": "src/seen-tracker.ts",
              "size": 6214,
              "sha256": "e00bbe04d6e4ab676ae133d0f514e882b52337a404b759d96c6b70c58135b1c6"
            },
            {
              "path": "src/session-route.ts",
              "size": 646,
              "sha256": "db600bb9ec658a5f961f0ae22963ec8dddfd8630d2bea5ba545396baf9ac8739"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 8649,
              "sha256": "d069b97961f98242eda6ec072b61bf727bff1da1b6f6808e13c125179d313204"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1031,
              "sha256": "937ff1c454b6239a3e72dc30be6b564709ada1eab345c88a1d17da92140ac83f"
            },
            {
              "path": "src/test-fixtures.ts",
              "size": 1374,
              "sha256": "1d0a8a13fd13b9cba96c77fc82e47f0c88746dd700cdd530e7bda14d3603a0e6"
            },
            {
              "path": "src/types.ts",
              "size": 3251,
              "sha256": "fe66ab6c93c1c7934eb0fda7c828cb8b24a30247749c560b594d0b338340dc00"
            },
            {
              "path": "src/webhook.ts",
              "size": 1156,
              "sha256": "0d9621708cd3a94db196b2fb5dc2fd9f588e5a7f8f5154451eff54f9359fcd90"
            },
            {
              "path": "test-api.ts",
              "size": 48,
              "sha256": "e7f0d67209bf0bcc06da0dee85dcb1ea8b44ee2e2a07f51f2286a18ddca4458f"
            },
            {
              "path": "test/setup.ts",
              "size": 175,
              "sha256": "5cc6d9626fd90a07152f84b7e16b579bc9902401e7f23a4c0a5b8b4d928a6028"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/irc",
    "kind": "channel",
    "name": "@coreblow/irc",
    "summary": "Official CoreBlow irc community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "irc",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for irc."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "irc-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 28183,
          "sha256": "e44a7aecfa6879b5672439bfeea62b5069a5745e135beac70a6e8ce33a708c79",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "e44a7aecfa6879b5672439bfeea62b5069a5745e135beac70a6e8ce33a708c79",
          "format": "tgz",
          "packageName": "@coreblow/irc",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/irc-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/irc-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 75,
              "sha256": "58b5e0d662428315945db579966b4607ec376a0fec4805ac8ae640bb34f50ec4"
            },
            {
              "path": "channel-config-api.ts",
              "size": 65,
              "sha256": "4f265299b9bade138a9398f0461fbe5850ecf6fc1be568113505bf07f752818b"
            },
            {
              "path": "channel-plugin-api.ts",
              "size": 200,
              "sha256": "76616b7439d71339fbccbeeb2115a17aba12baae88972d2466502456a0c44738"
            },
            {
              "path": "configured-state.ts",
              "size": 287,
              "sha256": "1653cc2ff849107b9c985f58edd72d099f6fe58c69f7d35e40f7735ddee9726c"
            },
            {
              "path": "contract-api.ts",
              "size": 110,
              "sha256": "3b94b2c1322f3d3ca7ab4c5a5530a05ea9153225e1a0f954f0b4adff6f1ecd94"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 152,
              "sha256": "994b140a77344f9e027671722b84fa4d33e8e8a2ff2fe74ad82fc43f8c9640a8"
            },
            {
              "path": "corehub.artifact.json",
              "size": 572,
              "sha256": "dc1d44336f446fe3915a9cc14cdcba4f72b794a4a15b99903a7d775df1ba71f7"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 519,
              "sha256": "7f28d8085057b86bc003ee44f771e42edcb40f3512f136484eb907fb9044f352"
            },
            {
              "path": "package.json",
              "size": 849,
              "sha256": "b40ecbe9237a267c4337c1eaae1c3f266a24fe2ff2ac824a41e8aa09d99e599e"
            },
            {
              "path": "README.md",
              "size": 198,
              "sha256": "9a7d900cbd705666c2226934a1f15ba0efd752c2d5ee03651117c0a1ed45158f"
            },
            {
              "path": "runtime-api.ts",
              "size": 196,
              "sha256": "40eba0a11a7799f87c93de7f43ded20fde97dfdf6bde22541cd9fd2ebe6d25b8"
            },
            {
              "path": "secret-contract-api.ts",
              "size": 128,
              "sha256": "c381e9461fc33c8b3f797fc2541fc4e91960ae02623fcfaf834ed0d56d6b9f02"
            },
            {
              "path": "setup-entry.ts",
              "size": 164,
              "sha256": "06f67e570c09c74829f576ceb56a8164fd6e28ab24f22b934fdc4cdafe40289e"
            },
            {
              "path": "src/accounts.ts",
              "size": 7003,
              "sha256": "43766c3fa3ce123d5b7d44912889432de50ede0d7a49a0186bc662aab9316a26"
            },
            {
              "path": "src/adapter.ts",
              "size": 491,
              "sha256": "1d38546c7348dddcd8181248063c4a743b35864c6d173d3f760e13132ffc8d7c"
            },
            {
              "path": "src/channel-api.ts",
              "size": 458,
              "sha256": "1add75dd31d5c52daf7753d090fe10ec78a4bb8436dea5aff9f754f766211022"
            },
            {
              "path": "src/channel-runtime.ts",
              "size": 229,
              "sha256": "bb4ca7ad071f94239f4ba72b4209b07c8572c1c0792929b56844671660a417c8"
            },
            {
              "path": "src/channel.ts",
              "size": 12270,
              "sha256": "07dfdf76bf72bd677a3f5bb5731d1e04927b1bb4216a6392e536668f743751f5"
            },
            {
              "path": "src/client.ts",
              "size": 12022,
              "sha256": "10d8dfe0e47bff0716132d0b33a4b5e71667def9944f7e23b72f30653941d552"
            },
            {
              "path": "src/config-schema.ts",
              "size": 3299,
              "sha256": "622f132971b73f3a57ab23ed69c52ee750d022d42e06c32be5bf8ec0c83cda37"
            },
            {
              "path": "src/config-ui-hints.ts",
              "size": 1590,
              "sha256": "debaa422f1c0a58a5356215bd00bd9b633a10cdb5206b9e10e31699867061513"
            },
            {
              "path": "src/config.ts",
              "size": 661,
              "sha256": "2ee7e6638df0683375b7e4e11986f06172df91cc90a4bdd017ad0e6c09d2d074"
            },
            {
              "path": "src/connect-options.ts",
              "size": 906,
              "sha256": "27b4e72d3cc31c250f4ce67b2c4dc72df52fe0ccb99dac636daddcd0384630b1"
            },
            {
              "path": "src/control-chars.ts",
              "size": 502,
              "sha256": "80e654aab41ecc022d6be9087db61b6b23d8ae2ad74a4002095fa780e3dc93d8"
            },
            {
              "path": "src/doctor.ts",
              "size": 81,
              "sha256": "74f57e92d35d701fb545120e7409adf43db4bb5feb2820c941a61128c51e4c42"
            },
            {
              "path": "src/extension.ts",
              "size": 425,
              "sha256": "db0406d7c3b025559457c4cece403a4bd5f89e821087dca1a8d112c016905526"
            },
            {
              "path": "src/formatter.ts",
              "size": 828,
              "sha256": "60accbffcf9d9eb322843ab9c10a002c60081cbf0b4e5459aed438b4a3754ac9"
            },
            {
              "path": "src/gateway.ts",
              "size": 1721,
              "sha256": "4eca9601b6649697d5559312cb4fca1c6f8003cead309906e176938bafae7ba2"
            },
            {
              "path": "src/handler.ts",
              "size": 409,
              "sha256": "eead832a7a8ac7e36ef22500e43dcbb8bb8eb9d225db16195b708d6812cd2147"
            },
            {
              "path": "src/inbound.ts",
              "size": 11960,
              "sha256": "414b7297f5ea4e7acc343ac4c83993bfd8500ce0119835d81691850b53963c4c"
            },
            {
              "path": "src/index.ts",
              "size": 203,
              "sha256": "d18c913bde45c450cd5a754b67e1477333e7a5a4e6c4ef20f532af262f7094bd"
            },
            {
              "path": "src/media.ts",
              "size": 890,
              "sha256": "0d1bbdc3eaf830b2a4a390e434c95304e54ef1cc2b5a7e5729c8d03445a530fe"
            },
            {
              "path": "src/message-adapter.ts",
              "size": 900,
              "sha256": "ef254b9d2103495ad14f3026ca98a5fd17c2f0c66119c1624130e2e223ff1b00"
            },
            {
              "path": "src/monitor.ts",
              "size": 4479,
              "sha256": "65b9e81ba80bd2b26dee768cabbf0a60384a2891f27200bb6d4391f60335dd6a"
            },
            {
              "path": "src/normalize.ts",
              "size": 3436,
              "sha256": "5df2dbcf3d0cbdfc34edef4c0518fc266c5a688a3444da9a1e091f89350ca52a"
            },
            {
              "path": "src/outbound-base.ts",
              "size": 401,
              "sha256": "1422f687e3b0edda11b985e09421019bfbced73afe836ad6b716314d0b049045"
            },
            {
              "path": "src/policy.ts",
              "size": 5025,
              "sha256": "882eefac7811774f646ab8996aab7aece339b940eb61cc7d1a1275f4d38c4f1c"
            },
            {
              "path": "src/probe.ts",
              "size": 1260,
              "sha256": "0d46b46ef73316868f4072ceb2547c8bdf65662ca3a79faf50f5d88a2f3e07fe"
            },
            {
              "path": "src/protocol.ts",
              "size": 4224,
              "sha256": "6ff60935c4d1b770a3ab0d92dd32f89b977113f5efaec9a959fde083c06b5ea7"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 855,
              "sha256": "e5182f0cc3c392ef7d3654231ed319956e02affd111d8464647539ee9cc09921"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 828,
              "sha256": "e40f4a6090c3bfe30628ba892730f8a3f8e57d184bfe99037988ec6431b5b910"
            },
            {
              "path": "src/runtime-api.ts",
              "size": 1036,
              "sha256": "f355714b56e1bb864ee31fd7454e4749edaa5a75524a9bbeff3453d18836ea83"
            },
            {
              "path": "src/runtime.ts",
              "size": 1339,
              "sha256": "957bd0d8f2732bbbdb3b9cabcbacb27c5b3e7285bbdd6cf3f34c0c8f4f7d4138"
            },
            {
              "path": "src/secret-contract.ts",
              "size": 220,
              "sha256": "2e37f1138a284c53ce87605af8740f67efa24dcd8a5740b42ed75f7333f4ad0a"
            },
            {
              "path": "src/send.ts",
              "size": 2744,
              "sha256": "d956f8fbdd1b1dd44a8788048e06e4282e948d7de37d36724b22aff12da2f3ac"
            },
            {
              "path": "src/setup-core.ts",
              "size": 4178,
              "sha256": "9cd525c90a4136049a7996a9d37195c7fa1dfb479be0c45d796d04572bbb2dcb"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 16214,
              "sha256": "9c62872169bd5eb44671975267c06e36cdac2e2d1734b5e44ae93c8193c1aa5e"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1017,
              "sha256": "1deb35d531232bba5c286a64ec560905a3a70eac116f27873bae9c613cbcc197"
            },
            {
              "path": "src/types.ts",
              "size": 2414,
              "sha256": "e9b298c717c30756e110d33ce9a5c5103a1371b50c4441abd5c9dd6518ed1249"
            },
            {
              "path": "src/webhook.ts",
              "size": 1152,
              "sha256": "56a3d3c1fd0af5a1e6a370614e7ff622a20cef9dfd5a59e2be259f085d2b94de"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "@coreblow/msteams",
    "kind": "channel",
    "name": "@coreblow/msteams",
    "summary": "Official CoreBlow msteams community channel plugin.",
    "source": "https://github.com/coreblow/coreblow",
    "homepage": "https://coreblow.com/corehub",
    "version": "1.0.0",
    "tags": [
      "channel",
      "msteams",
      "community"
    ],
    "capabilities": [
      "network",
      "credentials",
      "webhook"
    ],
    "publisher": {
      "handle": "coreblow",
      "displayName": "CoreBlow",
      "url": "https://coreblow.com/corehub",
      "verified": true,
      "contact": "https://github.com/coreblow/coreblow/security/policy"
    },
    "review": {
      "state": "verified",
      "checkedAt": "2026-11-02",
      "notes": "Official verified CoreHub community channel for msteams."
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
        "publishedAt": "2026-11-02",
        "publisher": {
          "handle": "coreblow"
        },
        "status": "available",
        "artifact": {
          "name": "msteams-1.0.0.coreblow-plugin.tgz",
          "mediaType": "application/vnd.coreblow.plugin-archive+gzip",
          "size": 93219,
          "sha256": "bb5cd264e2100334967e5f9284c96d5839d83713a1e42017498ba34ce7961841",
          "kind": "npm-pack",
          "artifactKind": "npm-pack",
          "artifactSha256": "bb5cd264e2100334967e5f9284c96d5839d83713a1e42017498ba34ce7961841",
          "format": "tgz",
          "packageName": "@coreblow/msteams",
          "version": "1.0.0",
          "downloadEnabled": true,
          "storage": {
            "provider": "github-raw",
            "key": "artifacts/msteams-1.0.0.coreblow-plugin.tgz",
            "url": "https://raw.githubusercontent.com/coreblow/corehub/main/artifacts/msteams-1.0.0.coreblow-plugin.tgz"
          },
          "provenance": {
            "source": "https://github.com/coreblow/coreblow",
            "reviewState": "verified"
          },
          "capabilities": {
            "executesCode": true,
            "runtimeId": "coreblow",
            "pluginKind": "channel",
            "hostTargets": [
              "linux",
              "macos",
              "windows"
            ],
            "capabilityTags": [
              "channel",
              "published",
              "executes-code",
              "host:linux",
              "host:macos",
              "host:windows",
              "artifact-manifest"
            ]
          },
          "files": [
            {
              "path": "api.ts",
              "size": 77,
              "sha256": "de6812b5f57de0e61c6b10fac9a446da1e6679cced09eb88348b89d77204b4ce"
            },
            {
              "path": "channel-config-api.ts",
              "size": 69,
              "sha256": "e5024110d1eeff01545607a1f4c7b72354607314fba41e149f33ff400bb44d3b"
            },
            {
              "path": "coreblow.plugin.json",
              "size": 160,
              "sha256": "99c03c39191afabeb5ad671b492b99ef1371749e9b7125b99cc20fdcb2ebb05a"
            },
            {
              "path": "corehub.artifact.json",
              "size": 579,
              "sha256": "3fa13786a49b527984f9144b97846ad0df533231d7808042a91373cdaccee5f8"
            },
            {
              "path": "extension.ts",
              "size": 102,
              "sha256": "685431c55775a2e99e66ba36e5dab624a3863b2d8b98270fa714a4c95a945875"
            },
            {
              "path": "index.ts",
              "size": 507,
              "sha256": "3b81a2094255dd5610d6a36988e6b04b88b29684056a899288e5d8c30b82efba"
            },
            {
              "path": "package.json",
              "size": 1076,
              "sha256": "1b8c83160dd71eaa14a3cdcba2166d1b72ea6a8a3523f2d7542019f604fd0d1d"
            },
            {
              "path": "README.md",
              "size": 205,
              "sha256": "bb95f3bbf733277f87d7f2659b8e5e9d6bc615295cce3e571bbd88e2399a4d39"
            },
            {
              "path": "runtime-api.ts",
              "size": 186,
              "sha256": "527a99f8a2164860815f110295caf63fcedbddd4c12f97d3589e4b57f8099c4a"
            },
            {
              "path": "setup-entry.ts",
              "size": 172,
              "sha256": "2b6a9fcf406a636ecceef27a88fdba7cf0771fa871778395cb122342ee221f99"
            },
            {
              "path": "src/adapter.ts",
              "size": 499,
              "sha256": "ec3930809c7259673f2ae9ed9652ec329c6213821809a4d76dfb925c989de663"
            },
            {
              "path": "src/ai-entity.ts",
              "size": 226,
              "sha256": "e30946a5f71bb6ea4e6db3a64ff47ed2a1b5dc593918c02e1a0a01456c96d11d"
            },
            {
              "path": "src/attachments.ts",
              "size": 637,
              "sha256": "6ed2a18ce604feded72e3eb05ff54ff0a43ce1407f37f0522b3340e7ca0a761a"
            },
            {
              "path": "src/attachments/download.ts",
              "size": 8123,
              "sha256": "185bc8d7ead216dec93f5fc13223e20345d4adeafb8d876c626f205892434740"
            },
            {
              "path": "src/attachments/graph.ts",
              "size": 12582,
              "sha256": "441de13be21a6b7ec469ad76f1ff06ca9fde440884d60e4371d6fa81e045381d"
            },
            {
              "path": "src/attachments/html.ts",
              "size": 2524,
              "sha256": "6ea18e56bd29a57a12e602c8acbf0fcb506afcdf0437e43d9a039dbb4f010fa1"
            },
            {
              "path": "src/attachments/payload.ts",
              "size": 390,
              "sha256": "201085a4ff95e41df8d5d7c904e1cda887054d1cd54c1155c1f542b903c752fc"
            },
            {
              "path": "src/attachments/remote-media.ts",
              "size": 1519,
              "sha256": "6e0444cad8bc28c47f546c7de5aa0535a08e8e93b1b4cf9cd5164b80be89ab99"
            },
            {
              "path": "src/attachments/shared.ts",
              "size": 13411,
              "sha256": "7e0a31a8bee91f7c328153a4f35407c0254d4b57c27b65d69c80ac02c32d5c3b"
            },
            {
              "path": "src/attachments/types.ts",
              "size": 825,
              "sha256": "51a419dd4843c9f29bcd50006f44fb04c3b86b5ae96f0806a4b29a4cf239cc73"
            },
            {
              "path": "src/channel.runtime.ts",
              "size": 1821,
              "sha256": "91e5313e822916126b5fed4e40e583ac2af52756ebded41fb72b4a0a5df47f1f"
            },
            {
              "path": "src/channel.ts",
              "size": 35582,
              "sha256": "9c88cd2bea18090400fd0ec15e076b54caa3d5e9ebe9a51a9aae7b4f6bb1c0a5"
            },
            {
              "path": "src/config-schema.ts",
              "size": 315,
              "sha256": "860f2c85cff9da8db05514b35e89404f6f36f233540af8d8544692cf3588621f"
            },
            {
              "path": "src/config-ui-hints.ts",
              "size": 546,
              "sha256": "c1ba1c2c8ba9ea3bb2e5e34d7d49beec6399720a09b138a0e571a8f2a697857c"
            },
            {
              "path": "src/config.ts",
              "size": 685,
              "sha256": "5297cb358c20c33e845386aa47af06a9e6987e6bb9afe872bd1cecebe851e1fb"
            },
            {
              "path": "src/conversation-store-fs.ts",
              "size": 4829,
              "sha256": "e4e11ff3d30dd04aed628609f06b178cbd69cbc3b64ae2e9ac5278b619cbe144"
            },
            {
              "path": "src/conversation-store-helpers.ts",
              "size": 2290,
              "sha256": "155f191f41db3d6327871dbb08f6e32226c81eaad31a29bbc2adbeed47b0e73c"
            },
            {
              "path": "src/conversation-store-memory.ts",
              "size": 1611,
              "sha256": "9bf545297e77f061a64b9412a29daf72bdc233f1ec9df5ec5979765821dff289"
            },
            {
              "path": "src/conversation-store.ts",
              "size": 2428,
              "sha256": "73596baf48d0a9eaab097fb8b5fb59fbf11b3874fc5baa620779270f6e58244e"
            },
            {
              "path": "src/directory-live.ts",
              "size": 2957,
              "sha256": "e913c1f1d08cfe6db90e4befbd47e586b379ae1da134bdeaf956474e188f4f35"
            },
            {
              "path": "src/errors.ts",
              "size": 5584,
              "sha256": "8335c554ccbd66ef6b3520d46b73018196a19beb32cec3d8257c51242ccd4f94"
            },
            {
              "path": "src/extension.ts",
              "size": 437,
              "sha256": "e5b8b78055bef4e662995bc23f8898b7f8057f33d476646c512ce2e7a4e16021"
            },
            {
              "path": "src/feedback-reflection-prompt.ts",
              "size": 3336,
              "sha256": "b9ff8aab37a6c1f92e6f08c4c3dbb508f25aace027c949131989fcf7de38c0ff"
            },
            {
              "path": "src/feedback-reflection-store.ts",
              "size": 3131,
              "sha256": "71a56bc2868c8d6093a3be08b5a92bae06065687a47de0fd6ed360a7d34b8588"
            },
            {
              "path": "src/feedback-reflection.ts",
              "size": 7971,
              "sha256": "3e72db6d5f75dc3b559fe9fc074ef1e46fe89e4708ab9e6665162b7c779e0ca3"
            },
            {
              "path": "src/file-consent-helpers.ts",
              "size": 2137,
              "sha256": "0f4d33fee3c76c6d3fe50afee4cfc398b74b7268ef06a10a70d5163d2e040fb5"
            },
            {
              "path": "src/file-consent.ts",
              "size": 3572,
              "sha256": "abec02cc1d421b93c353d2841ff444cdab6384ba3fa7030e220aa34fd7b2c3eb"
            },
            {
              "path": "src/file-lock.ts",
              "size": 50,
              "sha256": "32d75b6a15cd1baf279a173381e42d8ad6e6a71b8d50224c2faef38d86a3ebb2"
            },
            {
              "path": "src/formatter.ts",
              "size": 836,
              "sha256": "302b7bc651feb31b88b971cca99adc6797a96eb1545d13ecb729685bde0d29a6"
            },
            {
              "path": "src/graph-chat.ts",
              "size": 1733,
              "sha256": "6ea2ed30b1687444b0c85a9ac82c27a32cba5ad0cc9e9416fe424a2b6c3b82e4"
            },
            {
              "path": "src/graph-messages.ts",
              "size": 13445,
              "sha256": "22582f6bbf1d341480e822334044ac972e5016c0b0764b780fa3fcb0a6b4977c"
            },
            {
              "path": "src/graph-thread.ts",
              "size": 5427,
              "sha256": "d18fc9fe252a9121c09871aa1aa943d738b22d4dd4a7e4595e1aa28422c700a3"
            },
            {
              "path": "src/graph-upload.ts",
              "size": 16085,
              "sha256": "70e6e9ba40562ff0bcdee14db06ad882468a6c146c19b8b470ea0cbd1e3fc0bc"
            },
            {
              "path": "src/graph-users.ts",
              "size": 1084,
              "sha256": "26805a1a427e1e4e68a6696ab180be520bc2821fb329d857cd8e2b407073877a"
            },
            {
              "path": "src/graph.ts",
              "size": 4573,
              "sha256": "d387c53ff0f6c2bae22fc7b62c18e0a87a1e9bcfa5813c5e9f53aafd383caad3"
            },
            {
              "path": "src/handler.ts",
              "size": 410,
              "sha256": "8c1bf95da1abf5a460a64925179987e18261fe9f9939622c3a119c03ba46f2c8"
            },
            {
              "path": "src/inbound.ts",
              "size": 3502,
              "sha256": "d288ea99e7b0de800a99464d6a20f0792b8de16cff2bca34935b99de697509fc"
            },
            {
              "path": "src/index.ts",
              "size": 206,
              "sha256": "2028aa1d309938b16374ec50b97b7b950dcf3089c3bb132f675a547ba4935ebe"
            },
            {
              "path": "src/media-helpers.ts",
              "size": 2996,
              "sha256": "4f69a21031654681eb152c88b60da0460071931f5fcea1b2764960ecf149da61"
            },
            {
              "path": "src/media.ts",
              "size": 898,
              "sha256": "c8b627114f15c16b7078e4331fb54f384b8715f3620b87ee8ef12cd642146618"
            },
            {
              "path": "src/mentions.ts",
              "size": 3311,
              "sha256": "0585062b8bc6d4698838e378595f50288eb211d3c4e28fff85708aa4e4b48915"
            },
            {
              "path": "src/messenger.ts",
              "size": 17083,
              "sha256": "0c01a944bb91cf58724dfd4c3531e71b5617de67d2c4eee8a3ededde0e623341"
            },
            {
              "path": "src/monitor-handler.test-helpers.ts",
              "size": 1969,
              "sha256": "d3d71a7976b269827b189b0bf18bc441c958a075160bf03de302513188d0f8d9"
            },
            {
              "path": "src/monitor-handler.ts",
              "size": 15891,
              "sha256": "811c018f627451728d6c2622e3aefd2761c11609e87474b1b3d1f928f1238ffb"
            },
            {
              "path": "src/monitor-handler/access.ts",
              "size": 4457,
              "sha256": "8c9c640de7a58789b9d838e7527d870f6c349d953b4f5313823d4b09c2f85807"
            },
            {
              "path": "src/monitor-handler/inbound-media.ts",
              "size": 3851,
              "sha256": "80052ca288f3e4e64d7ff72865159aa5c463354b3371c23df6adf2a614a4d54c"
            },
            {
              "path": "src/monitor-handler/message-handler.ts",
              "size": 23406,
              "sha256": "ee7179e9cc312f705ab858546965d2c6917dc6fafe790e6d75ad402410db5c8c"
            },
            {
              "path": "src/monitor-types.ts",
              "size": 312,
              "sha256": "a9316481530fd14048c48aca7f217dd5aa50448f2e55cb8233afb2aa2bea0229"
            },
            {
              "path": "src/monitor.ts",
              "size": 14022,
              "sha256": "684cdeee57a0768c1a75ee3b660c5e20e1085a07f5e1b1b7d689ab7782c55c33"
            },
            {
              "path": "src/outbound.ts",
              "size": 2350,
              "sha256": "900fda87fbf30b6a68b715ca6fa3a9076bcd9c935761c74059c47c42af110ab0"
            },
            {
              "path": "src/pending-uploads.ts",
              "size": 2084,
              "sha256": "44ccc803d1cc5ff466cee9d9af86f9f8ad6388722a2f88aed8debde54822d2cb"
            },
            {
              "path": "src/policy.ts",
              "size": 7940,
              "sha256": "b0e44fa7dc64459196c4578e6451f727a8c52c4a820e6a60fdbefe43236bfd98"
            },
            {
              "path": "src/polls-store-memory.ts",
              "size": 951,
              "sha256": "d27bbd76cddf7aff085fda41c9ade1f07e66c4e1c8a70268747338edcde7aadd"
            },
            {
              "path": "src/polls.ts",
              "size": 8981,
              "sha256": "12cc46a940e51a89ad79da542e2c92df3074993481f37f10e0bcba71a0819b20"
            },
            {
              "path": "src/probe.ts",
              "size": 2985,
              "sha256": "b8bc075012a9b5f9034745d67d67d88cb2a55d90c9279b1b62b0f1cf092eb5f5"
            },
            {
              "path": "src/rate-limiter.ts",
              "size": 863,
              "sha256": "47eb004b789907a38e0a27a88f75daddf84f26977e60bb38788f0cf0f5f23a6e"
            },
            {
              "path": "src/reply-dispatcher.ts",
              "size": 8081,
              "sha256": "e9c0e9c8916734f0c26bc13d20b129f003abcd5f2c11d591fcff4e6dd011c0cc"
            },
            {
              "path": "src/reply-stream-controller.ts",
              "size": 2686,
              "sha256": "15a15cdce72c878374e645aab24b910b297500c8c7975fe95e51ee7d0575543e"
            },
            {
              "path": "src/resolve-allowlist.ts",
              "size": 6616,
              "sha256": "28bc747041a25898a14e58df9fd2e979417a4b00cfb923c53bf2be95b27450e6"
            },
            {
              "path": "src/resolve-target.ts",
              "size": 832,
              "sha256": "fae782693dca16d01e4a8f001b6a00ae66207728ec14e790ddafb3e72b02381a"
            },
            {
              "path": "src/revoked-context.ts",
              "size": 403,
              "sha256": "fc3c42f4e69ee1dd5f7e4d11c7dcb00198c19d994e6879944a241fcadaceb91b"
            },
            {
              "path": "src/runtime.ts",
              "size": 1340,
              "sha256": "108846bc9bad83883fe0526939f97cb23d26a43ce2da6c1ea820fc3638bfabae"
            },
            {
              "path": "src/sdk-types.ts",
              "size": 1807,
              "sha256": "02117a0a3f041b0e5a409fe8e51f9fea7bec48787649917e881d8400e3404c3b"
            },
            {
              "path": "src/sdk.ts",
              "size": 13773,
              "sha256": "b87133f2345c111c0ac7dad1ecc056105a9e98120c3f47f120b2a417c0012f4e"
            },
            {
              "path": "src/secret-input.ts",
              "size": 235,
              "sha256": "cafc607c3919cc8660428c1f3531ba1c002cad5a8143dcd2afa3f89d13ff4b08"
            },
            {
              "path": "src/send-context.ts",
              "size": 7526,
              "sha256": "f36ec4123ee4a1a756b6958eee09489e73d36b49528657344aa1f11276074a94"
            },
            {
              "path": "src/send.ts",
              "size": 18778,
              "sha256": "59266255f1d279f162f50922a3f3382f89f601da39ad4b3079f15d01d05dd95c"
            },
            {
              "path": "src/sent-message-cache.ts",
              "size": 1727,
              "sha256": "3b2fa995f4042960906e3d87627eecafcdf41caf97eaef0eb41e321405cb133f"
            },
            {
              "path": "src/session-route.ts",
              "size": 1259,
              "sha256": "7a056ba93ad5824dd5f3eaa3af2c314362b46cff8d5302676663a50c83df02e8"
            },
            {
              "path": "src/setup-core.ts",
              "size": 383,
              "sha256": "dcacf24dc09b766a8b7d953cad0fd0da662f23be25ad877f9b26f935dd884853"
            },
            {
              "path": "src/setup-surface.ts",
              "size": 11917,
              "sha256": "ec5f5e772e8cd9933d41ea58f6f940e454c92cec6f4b1a575a6301c5dfaf6de0"
            },
            {
              "path": "src/storage.ts",
              "size": 716,
              "sha256": "b4ff82c7545043dbba4d82972bb475fbff6fcf0a9a4f145073846d5f66c438eb"
            },
            {
              "path": "src/store-fs.ts",
              "size": 1122,
              "sha256": "7415575158abeae0735997a580f8c952d5e5993bfac8aec90fd2d936958db64a"
            },
            {
              "path": "src/streaming-message.ts",
              "size": 8756,
              "sha256": "51b66523948314e1a273f8e1675557afb7fa3c6789ed842aa8ef7a671f2e0a57"
            },
            {
              "path": "src/subagent-hooks.ts",
              "size": 1045,
              "sha256": "4c640dfd61a92f2c6640d8d4f67fc2fa5988e16dfb4e173b848f722baf7fbc35"
            },
            {
              "path": "src/test-runtime.ts",
              "size": 550,
              "sha256": "83c76899c6c2941227bf8692996d17a7d7c0c45ac2a13c6daaa6a22e4975681d"
            },
            {
              "path": "src/token-response.ts",
              "size": 354,
              "sha256": "1ccfe54e1b1bbaeb73ab90aeda40a71ab5a68b18f8d4013b5573c2d818a4e56f"
            },
            {
              "path": "src/token.ts",
              "size": 1216,
              "sha256": "287de3e3ee7acd092912a0ee4f3dea79fca900e6741e40417d23a735f8cd2516"
            },
            {
              "path": "src/types.ts",
              "size": 374,
              "sha256": "1d323c031db55f1afa340c6c689709dc7219f4754be7fa337202c1e05206b392"
            },
            {
              "path": "src/user-agent.ts",
              "size": 1262,
              "sha256": "9d0bd275d61860547d65773e6a6b6a031adc73ecf9fff05afe1274dc6396e011"
            },
            {
              "path": "src/webhook-timeouts.ts",
              "size": 922,
              "sha256": "3815bc49a5315e54f0b765aec82af8e738f84cc55b92ea2ca66f21ca2062e136"
            },
            {
              "path": "src/webhook.ts",
              "size": 1160,
              "sha256": "2247fa200c9babc9f3e1e04b1403175687d374474cfa00735981990c06209fd8"
            },
            {
              "path": "src/welcome-card.ts",
              "size": 1524,
              "sha256": "f46711eae3c2ee67b1a0b38b8fed6a09b26e0b22f67167f738abb10b1ce5fa97"
            },
            {
              "path": "test-api.ts",
              "size": 50,
              "sha256": "80ad6ec59fd2069cb093b66799f7d59983d0e1a08d5a2492b20473d5e4a832bd"
            },
            {
              "path": "tsconfig.json",
              "size": 145,
              "sha256": "aef5fb743c40ef6047af77fcf1a185640f84704d1382d6a62a0d3d0e4960f60b"
            }
          ]
        }
      }
    ]
  }
];

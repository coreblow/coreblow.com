#!/usr/bin/env sh
# CoreBlow Sovereign Agent-OS Universal Installer
# https://coreblow.com
set -eu

printf "\033[1;36m"
cat << 'EOF'
   ______               ____  __               
  / ____/___  ________ / __ )/ /___ _      __ 
 / /   / __ \/ ___/ _ \ __  / / __ \ | /| / / 
/ /___/ /_/ / /  /  __/ /_/ / / /_/ / |/ |/ /  
\____/\____/_/   \___/_____/_/\____/|__/|__/   
   Sovereign Autonomous Agent-OS · v2.4.0 GA
EOF
printf "\033[0m\n"

COREBLOW_VERSION="${COREBLOW_VERSION:-2.4.0}"

echo "==> Verifying system prerequisites..."
if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js is required but not installed." >&2
  echo "Please install Node.js 22.12.0 or higher from https://nodejs.org" >&2
  exit 1
fi

NODE_VERSION=$(node -v | sed 's/^v//')
NODE_MAJOR=$(echo "$NODE_VERSION" | cut -d. -f1)
NODE_MINOR=$(echo "$NODE_VERSION" | cut -d. -f2)

if [ "$NODE_MAJOR" -lt 22 ] || { [ "$NODE_MAJOR" -eq 22 ] && [ "$NODE_MINOR" -lt 12 ]; }; then
  echo "Error: Node.js version $NODE_VERSION detected." >&2
  echo "CoreBlow v${COREBLOW_VERSION} requires Node.js >= 22.12.0." >&2
  exit 1
fi

echo "==> Detected Node.js v$NODE_VERSION (Compatible)"

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is required but not found in PATH." >&2
  exit 1
fi

echo "==> Installing CoreBlow Sovereign CLI (v${COREBLOW_VERSION}) globally via npm..."
if ! npm install -g "coreblow@${COREBLOW_VERSION}" 2>/dev/null; then
  echo "  Notice: Global npm install failed with permission issues; falling back to \$HOME/.local prefix..."
  mkdir -p "$HOME/.local/bin"
  npm install -g --prefix "$HOME/.local" "coreblow@${COREBLOW_VERSION}"
  case ":$PATH:" in
    *":$HOME/.local/bin:"*) ;;
    *)
      echo "  Note: Add $HOME/.local/bin to your PATH:"
      echo "    export PATH=\"\$HOME/.local/bin:\$PATH\""
      export PATH="$HOME/.local/bin:$PATH"
      ;;
  esac
fi

echo ""
printf "\033[1;32m==> CoreBlow v${COREBLOW_VERSION} successfully installed!\033[0m\n"
echo "To initialize your sovereign agent workspace, run:"
printf "  \033[1;36mcoreblow onboard\033[0m\n\n"

if [ "$(uname -s)" = "Darwin" ]; then
  echo "==> macOS Companion Options:"
  echo "  - Install CoreBlow Studio via Homebrew Cask:"
  printf "    \033[1;36mbrew install --cask coreblow/tap/coreblow\033[0m\n"
  echo "  - Download standalone .dmg disk image:"
  printf "    \033[1;36mhttps://github.com/coreblow/coreblow/releases/download/v${COREBLOW_VERSION}/CoreBlow-${COREBLOW_VERSION}-arm64.dmg\033[0m\n\n"
fi

echo "To launch the native macOS Studio companion, use Option + Space."
echo "Documentation: https://docs.coreblow.com"
echo "CoreHub Store: https://coreblow.com/corehub"

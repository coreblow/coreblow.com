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

node_is_compatible() {
  if ! command -v node >/dev/null 2>&1; then
    return 1
  fi
  NODE_VERSION=$(node -v 2>/dev/null | sed 's/^v//')
  NODE_MAJOR=$(echo "$NODE_VERSION" | cut -d. -f1)
  NODE_MINOR=$(echo "$NODE_VERSION" | cut -d. -f2)
  if [ -z "$NODE_MAJOR" ] || [ -z "$NODE_MINOR" ]; then
    return 1
  fi
  if [ "$NODE_MAJOR" -gt 22 ]; then
    return 0
  fi
  if [ "$NODE_MAJOR" -eq 22 ] && [ "$NODE_MINOR" -ge 12 ]; then
    return 0
  fi
  return 1
}

fetch_text() {
  if command -v curl >/dev/null 2>&1; then
    curl -fsSL "$1"
  elif command -v wget >/dev/null 2>&1; then
    wget -qO- "$1"
  else
    echo "Error: curl or wget is required to download Node.js 22 LTS." >&2
    return 1
  fi
}

download_file() {
  if command -v curl >/dev/null 2>&1; then
    curl -fsSL "$1" -o "$2"
  elif command -v wget >/dev/null 2>&1; then
    wget -qO "$2" "$1"
  else
    echo "Error: curl or wget is required to download Node.js 22 LTS." >&2
    return 1
  fi
}

bootstrap_node_tarball() {
  OS_RAW=$(uname -s)
  ARCH_RAW=$(uname -m)

  case "$OS_RAW" in
    Darwin) NODE_OS="darwin" ;;
    Linux) NODE_OS="linux" ;;
    *)
      echo "Error: Unsupported OS '$OS_RAW' for automatic Node.js tarball bootstrap." >&2
      return 1
      ;;
  esac

  case "$ARCH_RAW" in
    x86_64|amd64) NODE_ARCH="x64" ;;
    arm64|aarch64) NODE_ARCH="arm64" ;;
    *)
      echo "Error: Unsupported architecture '$ARCH_RAW' for automatic Node.js tarball bootstrap." >&2
      return 1
      ;;
  esac

  RUNTIME_ROOT="$HOME/.coreblow/runtime"
  NODE_TARGET="$RUNTIME_ROOT/node"
  mkdir -p "$RUNTIME_ROOT"

  echo "==> Resolving latest Node.js 22 LTS archive (${NODE_OS}-${NODE_ARCH})..."
  NODE_TARBALL=$(fetch_text "https://nodejs.org/dist/latest-v22.x/SHASUMS256.txt" | awk -v pat="node-v22\\.[0-9]+\\.[0-9]+-${NODE_OS}-${NODE_ARCH}\\.tar\\.gz$" '$2 ~ pat {print $2; exit}')
  if [ -z "$NODE_TARBALL" ]; then
    echo "Error: Could not find Node.js v22 LTS tarball for ${NODE_OS}-${NODE_ARCH}." >&2
    return 1
  fi

  TMP_TGZ="$RUNTIME_ROOT/$NODE_TARBALL"
  EXTRACT_DIR="$RUNTIME_ROOT/$(printf '%s' "$NODE_TARBALL" | sed 's/\.tar\.gz$//')"

  echo "==> Downloading $NODE_TARBALL into $RUNTIME_ROOT..."
  download_file "https://nodejs.org/dist/latest-v22.x/$NODE_TARBALL" "$TMP_TGZ"
  rm -rf "$EXTRACT_DIR"
  tar -xzf "$TMP_TGZ" -C "$RUNTIME_ROOT"
  rm -f "$TMP_TGZ"
  rm -rf "$NODE_TARGET"
  mv "$EXTRACT_DIR" "$NODE_TARGET"

  export PATH="$NODE_TARGET/bin:$PATH"
  echo "  Note: Add $NODE_TARGET/bin to your shell profile:"
  echo "    export PATH=\"\$HOME/.coreblow/runtime/node/bin:\$PATH\""
}

echo "==> Verifying system prerequisites..."
if ! node_is_compatible; then
  if [ "${COREBLOW_SKIP_NODE_BOOTSTRAP:-0}" = "1" ]; then
    echo "Error: Node.js >= 22.12.0 is required and COREBLOW_SKIP_NODE_BOOTSTRAP=1 is set." >&2
    exit 1
  fi

  echo "==> Node.js >= 22.12.0 not found; provisioning Node.js 22 LTS..."
  if [ "$(uname -s)" = "Darwin" ] && command -v brew >/dev/null 2>&1; then
    echo "==> Installing node@22 via Homebrew..."
    if brew install node@22; then
      BREW_NODE_PREFIX=$(brew --prefix node@22 2>/dev/null || true)
      if [ -n "$BREW_NODE_PREFIX" ] && [ -d "$BREW_NODE_PREFIX/bin" ]; then
        export PATH="$BREW_NODE_PREFIX/bin:$PATH"
      fi
    fi
  fi

  if ! node_is_compatible; then
    bootstrap_node_tarball
  fi

  if ! node_is_compatible; then
    echo "Error: Failed to provision Node.js >= 22.12.0." >&2
    echo "Please install Node.js 22.12.0 or higher from https://nodejs.org" >&2
    exit 1
  fi
fi

NODE_VERSION=$(node -v | sed 's/^v//')
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
echo "To initialize your sovereign agent workspace and background daemon, run:"
printf "  \033[1;36mcoreblow onboard --install-daemon\033[0m\n\n"

if [ "$(uname -s)" = "Darwin" ]; then
  echo "==> macOS Companion Options:"
  echo "  - Install CoreBlow Studio via Homebrew Cask:"
  printf "    \033[1;36mbrew install --cask coreblow/tap/coreblow\033[0m\n"
  echo "  - Download standalone .dmg disk image:"
  printf "    \033[1;36mhttps://github.com/coreblow/coreblow/releases/download/v${COREBLOW_VERSION}/CoreBlow-${COREBLOW_VERSION}-darwin-arm64.dmg\033[0m\n\n"
fi

echo "To launch the native macOS Studio companion, use Option + Space."
echo "Documentation: https://docs.coreblow.com"
echo "CoreHub Store: https://coreblow.com/corehub"

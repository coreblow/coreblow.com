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
   Sovereign Autonomous Agent-OS · v2.0.0 GA
EOF
printf "\033[0m\n"

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
  echo "CoreBlow v2.0.0 requires Node.js >= 22.12.0." >&2
  exit 1
fi

echo "==> Detected Node.js v$NODE_VERSION (Compatible)"

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is required but not found in PATH." >&2
  exit 1
fi

echo "==> Installing CoreBlow Sovereign CLI globally via npm..."
npm install -g coreblow@latest

echo ""
printf "\033[1;32m==> CoreBlow v2.0.0 successfully installed!\033[0m\n"
echo "To initialize your sovereign agent workspace, run:"
printf "  \033[1;36mcoreblow onboard\033[0m\n\n"
echo "To launch the native macOS Studio companion, use Option + Space."
echo "Documentation: https://docs.coreblow.com"
echo "CoreHub Store: https://coreblow.com/corehub"

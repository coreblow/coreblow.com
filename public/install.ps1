# CoreBlow Sovereign Agent-OS Windows PowerShell Installer
# https://coreblow.com
$ErrorActionPreference = "Stop"

$CoreBlowVersion = if ($env:COREBLOW_VERSION) { $env:COREBLOW_VERSION } else { "2.5.0" }

Write-Host @"
   ______               ____  __               
  / ____/___  ________ / __ )/ /___ _      __ 
 / /   / __ \/ ___/ _ \ __  / / __ \ | /| / / 
/ /___/ /_/ / /  /  __/ /_/ / / /_/ / |/ |/ /  
\____/\____/_/   \___/_____/_/\____/|__/|__/   
   Sovereign Autonomous Agent-OS · v2.5.0 GA
"@ -ForegroundColor Cyan
Write-Host ""

function Get-NodeSemver {
  $nodeCmd = Get-Command node -ErrorAction SilentlyContinue
  if (-not $nodeCmd) { return $null }
  try {
    $raw = (& node -v 2>$null).Trim().TrimStart("v")
    $parts = $raw.Split(".")
    if ($parts.Length -ge 2) {
      return @{
        Raw   = $raw
        Major = [int]$parts[0]
        Minor = [int]$parts[1]
      }
    }
  } catch {
    return $null
  }
  return $null
}

function Test-NodeCompatible($ver) {
  if (-not $ver) { return $false }
  if ($ver.Major -gt 22) { return $true }
  if ($ver.Major -eq 22 -and $ver.Minor -ge 12) { return $true }
  return $false
}

function Refresh-ProcessPath {
  $machinePath = [Environment]::GetEnvironmentVariable("Path", "Machine")
  $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
  $defaultNode = Join-Path $env:ProgramFiles "nodejs"
  $combined = @($machinePath, $userPath, $defaultNode) | Where-Object { $_ }
  $env:Path = ($combined -join ";")
}

function Install-PortableNode22 {
  $arch = if ($env:PROCESSOR_ARCHITECTURE -eq "ARM64") { "arm64" } else { "x64" }
  $runtimeRoot = Join-Path $env:USERPROFILE ".coreblow\runtime"
  $nodeTarget = Join-Path $runtimeRoot "node"
  New-Item -ItemType Directory -Force -Path $runtimeRoot | Out-Null

  Write-Host "==> Fetching Node.js 22 LTS archive metadata from nodejs.org..."
  $shasums = (Invoke-WebRequest -Uri "https://nodejs.org/dist/latest-v22.x/SHASUMS256.txt" -UseBasicParsing).Content
  $pattern = "node-v22\.\d+\.\d+-win-$arch\.zip"
  $match = [regex]::Match($shasums, $pattern)
  if (-not $match.Success) {
    throw "Could not resolve a Node.js v22 LTS Windows ($arch) archive."
  }

  $zipName = $match.Value
  $zipUrl = "https://nodejs.org/dist/latest-v22.x/$zipName"
  $zipPath = Join-Path $runtimeRoot $zipName
  $extractDir = Join-Path $runtimeRoot ([System.IO.Path]::GetFileNameWithoutExtension($zipName))

  Write-Host "==> Downloading $zipName..."
  Invoke-WebRequest -Uri $zipUrl -OutFile $zipPath -UseBasicParsing

  if (Test-Path $extractDir) { Remove-Item -Recurse -Force $extractDir }
  Expand-Archive -Path $zipPath -DestinationPath $runtimeRoot -Force
  Remove-Item -Force $zipPath -ErrorAction SilentlyContinue

  if (Test-Path $nodeTarget) { Remove-Item -Recurse -Force $nodeTarget }
  Move-Item -Path $extractDir -Destination $nodeTarget
  $env:Path = "$nodeTarget;$env:Path"

  $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
  if ($userPath -notlike "*$nodeTarget*") {
    $newUserPath = if ($userPath) { "$nodeTarget;$userPath" } else { $nodeTarget }
    [Environment]::SetEnvironmentVariable("Path", $newUserPath, "User")
  }
}

Write-Host "==> Verifying system prerequisites..."
$nodeVer = Get-NodeSemver

if (-not (Test-NodeCompatible $nodeVer)) {
  if ($env:COREBLOW_SKIP_NODE_BOOTSTRAP -eq "1") {
    Write-Error "Node.js >= 22.12.0 is required and COREBLOW_SKIP_NODE_BOOTSTRAP=1 is set."
    exit 1
  }

  $detectedMsg = if ($nodeVer) { "v$($nodeVer.Raw)" } else { "not installed" }
  Write-Host "==> Node.js >= 22.12.0 required (detected: $detectedMsg). Provisioning Node.js 22 LTS..." -ForegroundColor Yellow

  $bootstrapped = $false
  $wingetCmd = Get-Command winget -ErrorAction SilentlyContinue
  if ($wingetCmd) {
    Write-Host "==> Installing OpenJS.NodeJS.LTS via winget..."
    & winget install --id OpenJS.NodeJS.LTS -e --accept-source-agreements --accept-package-agreements
    if ($LASTEXITCODE -eq 0) {
      Refresh-ProcessPath
      $nodeVer = Get-NodeSemver
      if (Test-NodeCompatible $nodeVer) {
        $bootstrapped = $true
      }
    }
  }

  if (-not $bootstrapped) {
    try {
      Install-PortableNode22
      $nodeVer = Get-NodeSemver
      if (Test-NodeCompatible $nodeVer) {
        $bootstrapped = $true
      }
    } catch {
      Write-Warning "Automatic Node.js 22 LTS provisioning failed: $_"
    }
  }

  if (-not $bootstrapped) {
    Write-Error "Failed to provision Node.js >= 22.12.0 automatically. Please install Node.js 22 LTS from https://nodejs.org/en/download and re-run this installer."
    exit 1
  }
}

Write-Host "==> Detected Node.js v$($nodeVer.Raw) (Compatible)"

$npmCmd = Get-Command npm -ErrorAction SilentlyContinue
if (-not $npmCmd) {
  Write-Error "npm is required but was not found in PATH."
  exit 1
}

Write-Host "==> Installing CoreBlow Sovereign CLI (v$CoreBlowVersion) globally via npm..."
& npm install -g "coreblow@$CoreBlowVersion"
if ($LASTEXITCODE -ne 0) {
  Write-Error "npm install -g coreblow@$CoreBlowVersion failed with exit code $LASTEXITCODE."
  exit $LASTEXITCODE
}

Write-Host ""
Write-Host "==> CoreBlow v$CoreBlowVersion successfully installed!" -ForegroundColor Green
Write-Host "To initialize your sovereign agent workspace and background daemon, run:"
Write-Host "  coreblow onboard --install-daemon" -ForegroundColor Cyan
Write-Host ""
Write-Host "==> Windows Desktop Installer:"
Write-Host "  https://github.com/coreblow/coreblow/releases/download/v$CoreBlowVersion/CoreBlow-$CoreBlowVersion-win-x64.exe" -ForegroundColor Cyan
Write-Host ""
Write-Host "Documentation: https://docs.coreblow.com"
Write-Host "CoreHub Store: https://coreblow.com/corehub"

# Command reference only. Copy and run individual commands as needed.
# Run commands from the project root unless stated otherwise.
# Use a POSIX shell and an installed pnpm 8; keep pnpm-lock.yaml unchanged.
# These examples do not perform a deployment or synchronize the upstream cache.

# Check the runtime and package-manager versions.
node --version
pnpm --version

# Inspect the working tree and branch before changing files.
git status --short --branch

# Fetch the user's fork refs without modifying local branches or the upstream cache.
git fetch origin

# Start an isolated feature from the current remote development branch.
# Replace feature/your-change with a meaningful unused branch name.
git switch -c feature/your-change origin/develop

# Install the exact versions resolved by the existing lockfile.
pnpm install --frozen-lockfile

# Run Vite on localhost for development.
pnpm run dev --host 127.0.0.1

# Run the TypeScript check without emitting files.
pnpm exec tsc --noEmit

# Build the static site in dist with TypeScript and Vite.
pnpm run build

# Generate dist/sw.js explicitly, independent of package-manager lifecycle defaults.
pnpm run postbuild

# Preview the existing production output on localhost.
pnpm run serve --host 127.0.0.1

# Inspect the complete custom diff against the preserved upstream cache.
git diff main...develop

# Check the exact remote default branch and custom branch commit without changing them.
git ls-remote --symref origin HEAD refs/heads/develop refs/heads/main

# Push committed feature work and open a draft PR targeting develop.
git push -u origin HEAD
gh pr create --base develop --draft

# The upstream had no tests; this fork adds welcome, geometry and theme storage regressions.
# No separate lint script exists.

# Verify window placement and viewport boundary regressions (Node.js 18+).
pnpm test

# Build the Pages project path and generate its scoped service worker.
pnpm run build:pages
pnpm run postbuild

# Verify emitted root-path assets and worker after the default build.
node scripts/verify-build.cjs / https://sean-windows-11-web.vercel.app/

# Verify emitted Pages assets and worker after the Pages build.
node scripts/verify-build.cjs /Windows-11-Web/ https://yuxiaoli.github.io/Windows-11-Web/

# Preview Pages under its actual project path on localhost.
pnpm run serve --mode github-pages --host 127.0.0.1

# Inspect Pages deployment workflow runs (requires existing GitHub CLI authentication).
gh run list --repo yuxiaoli/Windows-11-Web --workflow pages.yml --branch develop

# Inspect the configured Pages source without changing it.
gh api repos/yuxiaoli/Windows-11-Web/pages

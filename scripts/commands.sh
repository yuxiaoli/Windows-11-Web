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

# Switch to the custom development branch.
git switch develop

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

# Push reviewed and committed custom work only to develop; this changes the remote branch.
git push origin develop

# No separate test or lint script exists in the upstream package manifest.
# Deployment commands are intentionally omitted until the actual authorized target is verified.

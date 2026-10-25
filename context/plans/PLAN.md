# Sean's Windows 11 Web fork

Date: 2026-10-25 (UTC)

## Scope and constraints

Personalize the actual source of `https://win11.vercel.app`, deploy the fork to a usable public URL, and verify the exact delivered `develop` commit. The verified upstream is `PiyushSuthar/Windows-11-Web`; the fork is `yuxiaoli/Windows-11-Web`. Follow the user-owned [DOT Development Protocol](https://github.com/yuxiaoli/DOT_NOTES/blob/main/.dot/protocols/dot-development-protocol.md).

Keep `main` as an unmodified upstream cache synchronized manually by the user only. Make all custom changes on `develop`, retain upstream and third-party credits and the Apache 2.0 license, preserve existing work, and use existing authorized free resources. Do not modify the separate Boot Loader repository or change security settings, credentials, or paid resources.

## Implementation and acceptance

1. **Completed:** Verify the upstream from repository metadata, README, and live-site evidence; check for an existing corresponding fork and deployment.
2. **Completed:** Fork into `yuxiaoli`, create `develop` from the fork's `main` baseline, push it, and verify the remote default is `develop`.
3. **Completed:** Replace the demo profile with Sean / yuxiaoli; point GitHub and source-view destinations at the fork and relevant personal destinations at `https://vectorindex.cloud`. Preserve authorship and add modification notices where appropriate.
4. **Completed:** Install from the existing pnpm lockfile, run the applicable TypeScript check and production build, generate the service worker, and resolve failures within scope.
5. **Pending:** Review the complete diff, verify `main` remains at its original baseline, check for concurrent remote work, commit and push only `develop`, and reread the exact remote commit.
6. **Pending:** Reuse or create one suitable free deployment with production source `develop`; record the exact build/deployment commit and its actual public URL.
7. **Pending:** Open the public site outside an authenticated management session and test desktop launch, Start menu/profile, relevant destination links, key static assets, and iframe compatibility for the later Boot Loader update. Report untested upstream features explicitly.
8. **Pending:** Update the delivery record with evidence, actual URLs, checks, final commit, and remaining limitations; return the verified app URL to the parent for the independently owned Boot Loader change.

## Delivery evidence required

Fork URL; remote default branch; unchanged `main` baseline; final pushed `develop` SHA; build and deployment results; actual public app URL; key UI flow and iframe verification; remaining limitations. A successful HTTP response or build alone does not establish usability.

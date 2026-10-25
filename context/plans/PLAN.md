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

## User steering recorded before further work (2026-10-25 UTC)

- Record requested tasks and constraints here before continuing complex implementation; retain this single canonical AI plan and preserve human-maintained files.
- Inspect every included app for tasteful personal touches. Use meaningful short starter copy where the actual app supports it; preserve edited/saved notes and localStorage. Do not claim a Notepad exists.
- Public identity: Sean / yuxiaoli / Vector Index; exact homepage https://vectorindex.cloud. User confirmed yuxiaoli/cv as an optional professional-information source and delegated copy choices; do not publish private CV contents wholesale. Current copy needs no private facts.
- No macOS-specific URL configuration work is in Win11 scope. Do not edit Boot Loader. Return the verified app URL and iframe findings to the parent for the later destination update.
- Initial deployment f7d2fbbd8dd920c654d4564bc4efc5f9fe8a1c2f is READY on Vercel; public origin is https://sean-windows-11-web.vercel.app. Anonymous HTTP and static assets passed. Cross-origin iframe rendered the desktop.
- Remaining: complete actual public Edge/widgets/link flow; address github1s blank iframe with visible fallback links; rebuild and push the final source commit; verify its exact production deployment and save evidence. External editor content depends on github1s.
- Latest acceptance protocol requires real verbose progress for applicable long-running CLI changes; this frontend has no such CLI feature, so do not invent unrelated CLI work.

## Deployment refresh repair (2026-10-25 UTC)

A first-visit Edge client loads current source, while a returning Chrome client retained the inherited cached HTML and briefly became blank after deployment. Before further changes, record the repair scope: preserve offline caching and localStorage, activate current service workers promptly, bypass worker script HTTP caching, and reload once on controller replacement. Verify both a returning client and the final public launch. Do not change platform security or saved documents.

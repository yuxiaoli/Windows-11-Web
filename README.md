# Windows 11 Web

<!-- Modified by Sean / yuxiaoli on 2026-10-25: fork documentation and development instructions. -->

## Sean's fork

This is [Sean / yuxiaoli's personalized fork](https://github.com/yuxiaoli/Windows-11-Web/tree/develop) of [Windows 11 Web by Piyush Suthar](https://github.com/PiyushSuthar/Windows-11-Web). Sean's homepage is [vectorindex.cloud](https://vectorindex.cloud).

The original project, Apache 2.0 [LICENSE](./LICENSE), attribution, and third-party acknowledgements are retained below. Fork changes personalize profile and destination links; they do not claim authorship of the upstream project.

### Development and delivery

- `develop` is the remote default and production source. Normal changes use a feature branch from current `develop`, then a reviewed PR back to `develop`.
- `main` is an unmodified upstream cache. Only the user manually synchronizes it; agents must not push, synchronize, reset, merge into, or delete it.
- Keep the existing pnpm lockfile. Use pnpm 8 with a compatible Node.js runtime. From the repository root:

```sh
pnpm install --frozen-lockfile
pnpm run dev --host 127.0.0.1
```

For validation and the production output:

```sh
pnpm exec tsc --noEmit
pnpm run build
pnpm run postbuild
pnpm run serve --host 127.0.0.1
```

`build` runs TypeScript and Vite; the explicit `postbuild` command generates the service worker with Workbox. The static output is `dist/`. Run pnpm test for exact welcome rendering, window geometry and shared-origin theme storage regressions; the project has no separate lint script. See [scripts/commands.sh](./scripts/commands.sh) for individual command examples.

Primary live site: [yuxiaoli.github.io/Windows-11-Web](https://yuxiaoli.github.io/Windows-11-Web/). The existing [Vercel compatibility address](https://sean-windows-11-web.vercel.app/) remains active. Both deployments use develop; the original upstream demo remains separately credited below.

### Hosting targets

The default build keeps Vercel's root base. The Pages build uses /Windows-11-Web/ and scopes its service worker to that project path:

~~~sh
pnpm run build
pnpm run postbuild
node scripts/verify-build.cjs / https://sean-windows-11-web.vercel.app/
pnpm run build:pages
pnpm run postbuild
node scripts/verify-build.cjs /Windows-11-Web/ https://yuxiaoli.github.io/Windows-11-Web/
pnpm run serve --mode github-pages --host 127.0.0.1
~~~

The Pages workflow tests and builds both targets, then uploads the Pages dist and deploys only from develop. It uses pinned actions, a read-only build token and Pages/OIDC permissions only in the deployment job. Each Pages artifact contains commit-<full-sha>.txt for anonymous exact-version verification. Theme preferences use windows-11-web:theme; valid legacy theme preferences are copied without changing the shared legacy key.

### Personalization and app coverage

- Start menu and Widgets show Sean's avatar; Start menu links lead to this fork and Vector Index.
- Edge has a personal start page with Sean's [exact approved welcome](./src/Apps/Edge/welcome.txt), homepage, public GitHub profile and source shortcuts, plus separate upstream credit. The welcome matches [DOT_NOTES at bb681b8](https://github.com/yuxiaoli/DOT_NOTES/blob/bb681b8fd0085af3cc15ef02e6da1b955404e5ce/projects/repos/boot-loader/welcome.md), blob `fe7e9edba1d4cbbe07d44e43dea42bd5e3f234b7`. It is bundled static content and does not access or migrate saved browser data.
- VSCode browses this fork's develop source. Always-visible GitHub/editor links remain usable when the external github1s iframe is unavailable; the GitHub1s interface loaded during Pages verification, while external availability remains dependent on that service.
- Bundled weather is labelled sample data. Other included app icons remain upstream Coming Soon placeholders. This upstream has no Notepad or saved-document model, so no saved notes were changed.
- Inherited original-owner analytics were removed; original license, attribution and third-party credits are preserved.

The desktop and Edge home were verified both directly and inside a cross-origin iframe. No frame-blocking CSP or X-Frame-Options was returned on the public origin. Boot Loader is maintained separately and was not edited here. Early cached clients may need one full refresh (Ctrl+Shift+R) after migration from the inherited worker. Worker replacement now activates promptly and refreshes controlled pages; saved localStorage is preserved. Original delivery evidence is in [the preparation log](./context/logs/LOG_20261025_141042.md), and Pages migration evidence is in [the migration log](./context/logs/LOG_20261025_164453.md).

## Original upstream README

Awe-amazing Windows 11 clone. Oh wait, Not for your Computer, but for the web! ⚡

Try Windows 11 Web:- [win11.vercel.app](https://win11.vercel.app/)

> This isn't ready yet, and who knows when it will XD

### Why?

Microsoft launched their newest version of Windows and I was very excited to test it out. So I made this!

BTW, This project was inspired by [Macos Web](https://github.com/PuruVJ/macos-web)

### Stack

- [Preact](https://preactjs.com/) (Now [Million Js](https://million.dev/))
- [ViteJS](http://vitejs.dev/)

### Acknowledgement

Thanks to [Sunrit Jana](https://twitter.com/JanaSunrise) for writing an awesome description for this project! and to [Manivannan](https://twitter.com/BeingMani97) for sharing icons with me!

And to all the Super-Awesome contributors!

_`(tbh, finding suitable icons is the most difficult part of making this project)`_

#### More

Some similar, but super awesome projects!

- [Windows XP Web](https://winxp.vercel.app/) by [sh1zuku](https://github.com/ShizukuIchi/winXP)
- [MacOS Web](https://macos.now.sh/) by [Puru Vijay](https://github.com/PuruVJ/macos-web)
- [Ubuntu Web](https://vivek9patel.github.io/) by [Vivek Patel](https://github.com/vivek9patel/vivek9patel.github.io)
- [Windows 11 web, but with no-code](https://windows11.webflow.io/) by [Manivannan](https://twitter.com/BeingMani97)

#### Solution:-

1. Open `about:config` in your firefox browser.
2. Search for `layout.css.backdrop-filter.enabled` and set it to `true`.
   <img src="https://i.ibb.co/RbmX1NN/image.png" alt="image" border="0">

That's it. Now you can enjoy this awesome web os with its full glory!

# Windows 11 Web

<!-- Modified by Sean / yuxiaoli on 2026-10-25: fork documentation and development instructions. -->

## Sean's fork

This is [Sean / yuxiaoli's personalized fork](https://github.com/yuxiaoli/Windows-11-Web/tree/develop) of [Windows 11 Web by Piyush Suthar](https://github.com/PiyushSuthar/Windows-11-Web). Sean's homepage is [vectorindex.cloud](https://vectorindex.cloud).

The original project, Apache 2.0 [LICENSE](./LICENSE), attribution, and third-party acknowledgements are retained below. Fork changes personalize profile and destination links; they do not claim authorship of the upstream project.

### Development and delivery

- `develop` is the remote default and the branch for all custom changes and production source.
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

`build` runs TypeScript and Vite; the explicit `postbuild` command generates the service worker with Workbox. The static output is `dist/`. This upstream project has no separate test or lint script. See [scripts/commands.sh](./scripts/commands.sh) for individual command examples.

Fork deployment and public UI verification are pending. The link below is the original upstream demo, not a claimed deployment of this fork.

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

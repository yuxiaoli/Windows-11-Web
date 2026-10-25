// Modified for Sean: retain the Vercel root build and support the Pages project path (2026-10-25).
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import viteCompression from 'vite-plugin-compression';
import million from 'million/compiler'

export default defineConfig(({ mode }) => {
  const isPages = mode === 'github-pages';
  const siteUrl = isPages
    ? 'https://yuxiaoli.github.io/Windows-11-Web/'
    : 'https://sean-windows-11-web.vercel.app/';
  return {
    base: isPages ? '/Windows-11-Web/' : '/',
    plugins: [
      { name: 'deployment-metadata', transformIndexHtml: (html: string) => html.split('__SITE_URL__').join(siteUrl) },
      million.vite({ auto: true, mode: 'preact' }),
      viteCompression({ algorithm: 'brotliCompress' }),
      preact(),
    ],
  };
});

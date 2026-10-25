// Modified for Sean: activate fresh deployments without retaining a stale shell (2026-10-25).
module.exports = {
    globDirectory: 'dist/',
    globPatterns: ['**/*.{js,css,ico,html,svg,mp3,webp,png,jpg}'],
    swDest: 'dist/sw.js',
    skipWaiting: true,
    clientsClaim: true,
    cleanupOutdatedCaches: true,
};
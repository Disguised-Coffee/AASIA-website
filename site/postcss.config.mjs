/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    // use the new PostCSS plugin package for Tailwind v4
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#613059',
          light: '#7a3d70',
          dark: '#4a2544'
        },
        secondary: {
          DEFAULT: '#e8cecc',
          light: '#f2e0de',
          dark: '#d4b3b1'
        }
      }
    },
  },
  plugins: [],
}
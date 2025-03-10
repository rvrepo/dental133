/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1FA198',
          light: '#1FA198',
          dark: '#4a2544'
        },
        secondary: {
          DEFAULT: '#1FA198',
          light: '#f2e0de',
          dark: '#d4b3b1'
        }
      }
    },
  },
  plugins: [],
}
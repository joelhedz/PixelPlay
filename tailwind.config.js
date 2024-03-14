/** @type {import('tailwindcss').Config} */
export default {

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Courier: ['Courier Prime', 'monospace'],
        Embed: ['Noto Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}

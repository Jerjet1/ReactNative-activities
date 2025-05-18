/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"], // can add another path for components ("./components/**/*.{js,jsx,ts,tsx}")
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      backgroundColor: {
        gray1000: '#121212',
      }
    },
  },
  plugins: [],
}
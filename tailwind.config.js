/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "c-primary": "#ef2a39",
        "c-secondary": "#3c2f2f",
        "c-gray": "#6a6a6a",
        "c-light-gray": "#f3f4f6",
      },
    },
  },
  plugins: [],
}
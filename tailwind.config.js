// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add the paths to all of your component files
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          xDark: "#B2400A",
          dark: "#D44D0C",
          base: "#F26522",
          light: "#FAC9B2",
          xLight: "#FEF2EC"
        },
        secondary: {
          xDark: "#00304D",
          dark: "#004066",
          base: "#004E7D",
          light: "#ADE0FF",
          xLight: "#EBF6FF"
        },
        text: {
          primary: "#212121",
          secondary: "#545454",
          tertiary: "#757575",
          disable: "#A1A1A1",
          white: "#FFFFFF",
          link: "#004E7D"
        },
        error: {
          xDark: "#410002",
          dark: "#BA1A1A",
          base: "#FF5449",
          light: "#FFDAD6",
          xLight: "#FFFBFF"
        },
        caution: {
          xDark: "#402D00",
          dark: "#795900",
          base: "#FFC000",
          light: "#FFEFBF",
          xLight: "#FFFBEE"
        },
        success: {
          xDark: "#002114",
          dark: "#006C4C",
          base: "#00A576",
          light: "#BDFFDE",
          xLight: "#F4FFF6"
        },
        information: {
          xDark: "#001D36",
          dark: "#0061A5",
          base: "#2196F5",
          light: "#B4DDFF",
          xLight: "#F0F8FF"
        },
        background: {
          dark: "#EAEAEA",
          base: "#F1F1F1",
          light: "#FAFAFA",
          white: "#FFFFFF"
        },
        border: {
          base: "#DCDFE8"
        },
        grey: {
          xDark: "#212121",
          dark: "#757575",
          base: "#E0E0E0",
          light: "#F5F5F5",
          xLight: "#FAFAFA"
        }
      }
    }
  },
  plugins: []
}

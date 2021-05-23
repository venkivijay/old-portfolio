module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: {
        light: "#909096",
        DEFAULT: "#1d1d1d",
        dark: "#181818",
      },
      teal: {
        DEFAULT: "#08fdd8",
      },
    },
    fontFamily: {
      logo: ["Megrim", "cursive"],
      heading: ["Syne", "sans-serif"],
      content: ["Nunito Sans", "sans-serif"],
      key: ["Anonymous Pro", "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

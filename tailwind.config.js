module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        portfolio: {
          primary: "#00ACBF"
        }
      },
      fontSize: {
        portfolio: "16px"
      },
      height: {
        "200": "180px"
      },
      margin: {
        portfolio: "20px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

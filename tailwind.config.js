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
      },
      objectPosition: {
        "center-top": "center top"
      },
      boxShadow: {
        myShadow: "0 3px 15px rgba(0, 0, 0, 0.3)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

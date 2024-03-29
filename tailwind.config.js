/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: { card: "2rem" },
      borderWidth: {
        1: "1px",
      },
      colors: {
        primary: "#E85F6B",
        secondary: "#FE934A",
        tertiary: "#FB5E75",
        "special-primary": "#584F00",
        "special-secondary": "#DDC048",
        footer: "#16181d",
        "primary-bg": "#0f1114",
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
        "grey-10": "#08090B",
        "grey-15": "#16181d",
        "grey-20": "#1D1F22",
        "grey-30": "#333437",
        "grey-40": "#4D4F51",
      },
      height: {
        offer: "36rem",
        stain: "32rem",
      },
      inset: {
        100: "34rem",
      },
      width: {
        stain: "32rem",
      },
    },
  },
  plugins: [],
};

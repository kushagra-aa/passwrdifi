module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: "#1C002D",
      "primary-2": "#3C1642",
      secondary: "#E5CBFF",
      accent: "#AFFC41",
    },
    extend: {
      animation: {
        "bounce-slow": "bounce 1s linear infinite",
      },
    },
  },
  plugins: [],
};

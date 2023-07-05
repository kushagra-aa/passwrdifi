module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: "#12001D",
      "primary-2": "#2a102e",
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

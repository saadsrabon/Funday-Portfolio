/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 5s infinite alternate",
        shimmer: "shimmer 4s infinite",
      },
      keyframes: {
        glow: {
          "0%": { transform: "scale(1)", opacity: 0.8 },
          "100%": { transform: "scale(1.1)", opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200%" },
          "100%": { backgroundPosition: "200%" },
        },
      },
      boxShadow: {
        neon: "0px 0px 10px rgba(127, 90, 240, 0.8)",
      },
    },
  },
  
  plugins: [],
}
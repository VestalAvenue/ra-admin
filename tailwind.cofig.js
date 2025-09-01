import { keyframes } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 make sure Tailwind scans your src folder
  ],
  theme: {
    extend: {
      screens: {
        md1: "980px", // 👈 your custom breakpoint
      },
      fontFamily: {
        golos: ["Golos Text", "sans-serif"],
      },
      keyframes: {
        blink : {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        } 
      },
      animation: {
        blink : 'blink 1s infinite'
      }
    },
  },
  plugins: [],
}

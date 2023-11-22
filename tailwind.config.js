/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "480px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1440px",
        "3xl": "1560px"
      },
      fontFamily: {
        nunito: "Nunito Sans, sans-serif"
      },
      boxShadow: {
        headerShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)"
      },

      colors: {
        black: {
          dark: "#111517"
        }
        
      },

      backgroundColor: {
        darkBg: "#2B3844"
      },

    },
  },
  plugins: [],
}


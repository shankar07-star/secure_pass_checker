import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a1120",
          900: "#0e1628",
          800: "#16203a",
          700: "#1f2c4d",
        },
      },
      boxShadow: {
        card: "0 8px 30px rgba(2,8,23,.35)",
      },
    },
  },
  plugins: [],
};

export default config;

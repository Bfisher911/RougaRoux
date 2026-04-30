import type { Config } from "tailwindcss";
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { purple: "#5e2a84", gold: "#c8a63d", night: "#1b1a24", river: "#145374" } }
    }
  },
  plugins: []
} satisfies Config;

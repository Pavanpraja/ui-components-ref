import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          darklight: "#0037ff",
          dark: "#002fd8",
          extradark: "#180f5e"
        },
        black: {
          black_transparent: "#00000066"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;

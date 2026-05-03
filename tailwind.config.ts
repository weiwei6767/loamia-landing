import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        ink: {
          50: "#F8F8F4",
          100: "#EFEEE6",
          200: "#D9D6C5",
          900: "#0A0A08",
          950: "#050504",
        },
        accent: {
          lime: "#D4FF00",
          glow: "#A4F800",
        },
      },
      animation: {
        "blob-1": "blob 18s ease-in-out infinite",
        "blob-2": "blob 22s ease-in-out infinite reverse",
        "blob-3": "blob 26s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

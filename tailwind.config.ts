import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#16161A",
        headline: "#FBFBFA",
        paragraph: "#94A1B2",
        highlight: "#2F70C6",
        stroke: "#010101",
        "main-text": "#D2D7E0",
        "gray-medium": "#9A9CA1"
      },
      fontSize: {
        categoryTitle: '2rem',
      },
      lineHeight: {
        categoryTitle: '1.75'
      }
    },
  },
  plugins: [],
};
export default config;

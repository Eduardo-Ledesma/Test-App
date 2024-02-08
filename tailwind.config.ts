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
        bgBody: "#11141C",
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
      },
      backgroundImage: {
        "greengrad": "linear-gradient(82deg, rgba(17, 20, 28, 0.60) -2.85%, rgba(14, 42, 33, 0.31) 17.15%, rgba(11, 66, 38, 0.00) 61.63%);",
        "redgrad": "linear-gradient(260deg, rgba(87, 30, 43, 0.60) 12.95%, rgba(48, 26, 31, 0.60) 41.43%, rgba(11, 66, 38, 0.00) 68.92%);",
        "bluegrad": "linear-gradient(260deg, rgba(48, 101, 184, 0.60) 12.95%, rgba(29, 83, 109, 0.29) 41.43%, rgba(11, 66, 38, 0.00) 68.92%);",
        "purplegrad": "linear-gradient(81deg, rgba(93, 55, 123, 0.60) 0%, rgba(52, 61, 81, 0.30) 42.51%, rgba(11, 66, 38, 0.00) 65.1%);"
      },
    },
  },
  plugins: [],
};
export default config;

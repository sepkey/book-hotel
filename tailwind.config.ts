import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ffffff",
          100: "#e9e9e9",
          200: "#d2d2d2",
          300: "#bcbcbc",
          400: "#a5a5a5",
          500: "#8f8f8f",
          600: "#787878",
          700: "#626262",
          800: "#4b4b4b",
          900: "#353535",
          950: "#1e1e1e",
        },
        accent: {
          50: "#fffce8",
          100: "#c3f1cb",
          200: "#a5e9b0",
          300: "#87e296",
          400: "#69db7c",
          500: "#5fc570",
          600: "#54af63",
          700: "#3f834a",
          800: "#2a5832",
          900: "#1f4225",
          950: "#0a160c",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "canvas-bg": "url('/images/canvas2.jpg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(180deg, #043060 0%, #ffff 100%)",
        "gradient-btn":
          "linear-gradient(100deg, rgba(36,0,0,1) 0%, rgba(121,9,45,1) 44%, rgba(0,212,255,1) 100%)",
      },
      colors: {
        primary: "#0650A0",
        "primary-200": "#59A6F9",
        "primary-700": "#043060",
        "primary-800": "#022040",
        "primary-900": "#011020",
      },
    },
  },
  plugins: [],
};
export default config;

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
        "green-100": "#2E4845",
        "green-200": "#253F3C",
        "white-100": "#F7FAF6",
        "white-200": "#F1F3F0",
        "white-300": "#CAD1CE",
        error: "#E83644",
        warning: "#FF8C21",
        success: "#00B453",
      },
    },
  },
  plugins: [],
};
export default config;

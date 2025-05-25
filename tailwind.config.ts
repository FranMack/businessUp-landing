import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#693f91",
        lightGray:"#f2f2f2",
        secondary:"#ff61d8",
        tertiary:"#5fcefb"
 
      },
    },
  },
  plugins: [],
};
export default config;

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
      screens:{
      xs:"320px",
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
       // Nuevas combinadas
  tabletPortrait: { raw: "(min-width: 768px) and (orientation: portrait)" },
  phoneLandscape: { raw: '(min-width: 768px) and (max-width: 1023px) and (orientation: landscape)' }
    },
  },
  plugins: [],
};
export default config;

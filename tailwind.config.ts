import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enables dark mode using the 'dark' class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
        background: '#e0f7fa',
        foreground: '#004d40', 
        darkBackground: '#263238', 
        darkForeground: '#ffffff', 
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 14))' },
        },
      },
      // backgroundImage: {
      //   sejarahImg: "url('/assets/bg/electrical-pillar.jpg')",
      //   bannerImg2: "url('/assets/bg/electrical-pillar2.jpg')",
      //   bannerImg3: "url('/assets/bg/electrical-pillar3.jpg')",
      //   blackOverLay:
      //     "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,8) 100%)",
      // },
    },
  },
  plugins: [],
};
export default config;

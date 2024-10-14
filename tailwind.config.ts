import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'tableSand': '#f8e8a0',
        'borderTableSand': '#ffcc33',
        'tableGreen': '#c6d671',
        'borderTableGreen': '#649025',

        
      },
      height: {
        '128': '32rem',
        '144': '36rem',
      },
      screens: {
        's': '321px',
        // => @media (min-width: 320px) { ... }

        'sm': '641px',
        // => @media (min-width: 640px) { ... }
  
        'md': '769px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1281px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1537px',
        // => @media (min-width: 1536px) { ... }
      }

      // gridTemplateColumns: {
      //   '14': 'repeat(14, minmax(0, 1fr))',
      // },
      // gridTemplateRows: {
      //   '14': 'repeat(14, minmax(0, 1fr))',
      // },
    },
  },
  plugins: [
    // flowbite.plugin(),
  ],
};
export default config;

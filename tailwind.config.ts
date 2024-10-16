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
        'wheatBeer': '#f8e8a0',
        'wheatBeerBorder': '#ffcc33',
        'lambicSour': '#c6d671',
        'lambicSourBorder': '#649025',
        'belgianAle': '#d4d4d4',
        'belgianAleBorder': '#9a9a9a',
        'paleAle': '#fd9f57',
        'paleAleBorder': '#d56418',
        'englishBitter': '#e0adcf',
        'englishBitterBorder': '#85268e',
        'scotishAle': '#f7bcd8',
        'scotishAleBorder': '#f261b2',
        'brownAle': '#dec38b',
        'brownAleBorder': '#ba830a',
        'porter': '#a48a5e',
        'porterBorder': '#523b0d',
        'lightStout': '#8a8a8a',
        'lightStoutBorder': '#414141',
        'heavyStout': '#707070',
        'heavyStoutBorder': '#464646',
        'pilsner': '#eef3da',
        'pilsnerBorder': '#7e7e54',
        'americanLager': '#82bcc7',
        'americanLagerBorder': '#537986',
        'europeanLager': '#e8dbe0',
        'europeanLagerBorder': '#caa6b2',
        'bockLager': '#baa799',
        'bockLagerBorder': '#5f4d48',
        
        
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
      },


      // zIndex: {
      //   '9999999999': '9999999999',
      // }

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

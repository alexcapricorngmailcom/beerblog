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
        'tableSand-b': '#ffcc33',
        'tableGreen': '#c6d671',
        'tableGreen-b': '#649025',

        
      },
      height: {
        '128': '32rem',
        '144': '36rem',
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    // flowbite.plugin(),
  ],
};
export default config;

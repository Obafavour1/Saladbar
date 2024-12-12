import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greens:{
          100:'#5CBC1E',
          400: '#414536',
          500:'#2C2F24'
        },
        wine:{
          100:'#820032'
        },
        animation: {
          slide: 'slide 50s linear infinite',
        },
        keyframes: {
          slide: {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
          },
        },
        

      },
      backgroundImage:{
        banner:"url('/saladHeader.svg')",
        mobile: "url('/mobileSaladHeader.svg')",
        explore: "url('/explore.svg')"
      }
    },
  },
  plugins: [],
} satisfies Config;

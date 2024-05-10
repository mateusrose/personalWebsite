/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
        accentdark: "rgb(var(--accentdark))",
      },
      backgroundImage: {
       "light-radial": "radial-gradient(rgba(147, 112, 219, 0.5) 0%, rgba(75, 0, 130, 1) 50%)",
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(var(--purple-light), 0.05)",
        "glass-sm": "5px 5px 20px 0 rgba(var(--purple-dark), 0.3)",
      },
      keyframes: {
        "spin-slow-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-slow-reverse": "spin 30s linear infinite reverse",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

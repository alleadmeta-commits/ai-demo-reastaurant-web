import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        background: "#0f0f0f",
        primary: "#ff3c2f",
        secondary: "#ffb703",
        textLight: "#ffffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        'neon': '0 0 10px rgba(255, 60, 47, 0.5), 0 0 20px rgba(255, 60, 47, 0.3)',
        'neon-hover': '0 0 15px rgba(255, 60, 47, 0.8), 0 0 30px rgba(255, 60, 47, 0.5)',
      },
      animation: {
        'text-reveal': 'textReveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        textReveal: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

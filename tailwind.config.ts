import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #232367, #5873DD)",
        hero: "url('/assets/hero.jpg')",
        servicesHero: "url('/assets/services-hero.jpg')",
        arrow: "url('/assets/arrow.png')",
        hiw: "url('/assets/hiw.jpg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        clockHand: {
          from: { transform: "rotateZ(0deg)" },
          to: { transform: "rotateZ(-360deg)" },
        },
        manBody: {
          from: { transform: "rotateX(0deg)" },
          to: { transform: "rotateX(10deg)" },
        },
        tree: {
          from: { transform: "rotateZ(10deg)" },
          to: { transform: "rotateZ(-20deg)" },
        },
        changeLight: {
          "0%": { stroke: "#cd61f8" },
          "25%": { stroke: "#6ace66" },
          "75%": { stroke: "#2995c0" },
          "100%": { stroke: "#e92949" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",

        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;

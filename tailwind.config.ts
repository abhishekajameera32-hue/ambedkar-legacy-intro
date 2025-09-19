import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        /* Constitutional Theme Colors */
        constitutional: {
          DEFAULT: "hsl(var(--constitutional-blue))",
          light: "hsl(var(--constitutional-blue-light))",
          dark: "hsl(var(--constitutional-blue-dark))",
        },
        justice: {
          DEFAULT: "hsl(var(--justice-gold))",
          light: "hsl(var(--justice-gold-light))", 
          dark: "hsl(var(--justice-gold-dark))",
        },
        dignity: {
          DEFAULT: "hsl(var(--dignity-maroon))",
          light: "hsl(var(--dignity-maroon-light))",
          dark: "hsl(var(--dignity-maroon-dark))",
        },
        wisdom: {
          DEFAULT: "hsl(var(--wisdom-ivory))",
          light: "hsl(var(--wisdom-ivory-light))",
          dark: "hsl(var(--wisdom-ivory-dark))",
        },
        transformation: {
          DEFAULT: "hsl(var(--transformation-purple))",
          light: "hsl(var(--transformation-purple-light))",
          dark: "hsl(var(--transformation-purple-dark))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: "hsl(var(--secondary-hover))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
        },
        hero: {
          DEFAULT: "hsl(var(--hero))",
          foreground: "hsl(var(--hero-foreground))",
          hover: "hsl(var(--hero-hover))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'constitutional': 'var(--bg-constitutional)',
        'hero': 'var(--bg-hero)',
        'gradient-constitutional': 'var(--gradient-constitutional)',
        'gradient-justice': 'var(--gradient-justice)',
        'gradient-wisdom': 'var(--gradient-wisdom)',
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        'constitutional': 'var(--shadow-constitutional)',
        'justice': 'var(--shadow-justice)',
        'wisdom': 'var(--shadow-wisdom)',
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
        "ambedkar-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        "coin-shine": {
          "0%": { transform: "rotateY(0deg) scale(1)" },
          "50%": { transform: "rotateY(180deg) scale(1.05)" },
          "100%": { transform: "rotateY(360deg) scale(1)" },
        },
        "constitution-glow": {
          "0%, 100%": { boxShadow: "0 0 30px hsl(var(--constitutional-blue) / 0.4)" },
          "50%": { boxShadow: "0 0 50px hsl(var(--constitutional-blue) / 0.7)" },
        },
        "justice-pulse": {
          "0%, 100%": { transform: "scale(1)", filter: "brightness(1)" },
          "50%": { transform: "scale(1.02)", filter: "brightness(1.1)" },
        },
        "scroll-reveal": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "voice-wave": {
          "0%, 100%": { height: "20px" },
          "25%": { height: "40px" },
          "50%": { height: "60px" },
          "75%": { height: "30px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ambedkar-float": "ambedkar-float 6s ease-in-out infinite",
        "coin-shine": "coin-shine 4s linear infinite",
        "constitution-glow": "constitution-glow 3s ease-in-out infinite",
        "justice-pulse": "justice-pulse 2s ease-in-out infinite",
        "scroll-reveal": "scroll-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "voice-wave": "voice-wave 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

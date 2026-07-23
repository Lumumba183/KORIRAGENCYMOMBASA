/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: {
          50:  "#f0f5fb",
          100: "#dce7f4",
          200: "#b9cde6",
          300: "#8cabce",
          400: "#5b83b0",
          500: "#3a6391",
          600: "#2a4d75",
          700: "#1f3b5d",
          800: "#142a46",
          900: "#0a1b33",
          950: "#060f1f",
        },
        gold: {
          100: "#faf3dd",
          200: "#f2e3b3",
          300: "#e9ce7a",
          400: "#ddb84c",
          500: "#c9a227",
          600: "#a98720",
          700: "#856a1c",
          800: "#66511b",
          900: "#4d3d17",
        },
        sand: {
          50:  "#fbf8f1",
          100: "#f7f2e7",
          200: "#efe5cf",
          300: "#e3d3b0",
        },
        wa: "#25d366",
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        lux: "0 20px 50px -12px rgb(6 15 31 / 0.25)",
        card: "0 10px 30px -10px rgb(6 15 31 / 0.15)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "caret-blink": { "0%,70%,100%": { opacity: "1" }, "20%,50%": { opacity: "0" } },
        "kenburns": { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.12)" } },
        "float": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        "pulse-ring": { "0%": { boxShadow: "0 0 0 0 rgba(37,211,102,.55)" }, "100%": { boxShadow: "0 0 0 22px rgba(37,211,102,0)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "kenburns": "kenburns 22s ease-in-out infinite alternate",
        "float": "float 5s ease-in-out infinite",
        "pulse-ring": "pulse-ring 1.8s cubic-bezier(.4,0,.6,1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

import type {Config} from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "sq-violet": "#7B61FF",
        "dim-gray": "#828282",
        "button-color" : "#5237D8"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-us": "url('/assets/contact-bg.png')",
      },
      keyframes: {
        'dotted-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0%)' },
        },
        'slideIn': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'dotted-bounce': 'bounce 20s infinite alternate',
        'slideIn': 'slideIn 0.5s forwards',
      },
      boxShadow: {
        "custom1": '0 20px 100px -15px rgb(123 97 255 / 0.5)',
        "valuesContainerShadow": '0px 0px 5px 5px rgba(123 97 255 / 0.3)',
        "ContainerShadow": '0px 0px 5px 5px rgb(211,177,255)',
      }
    },
  },
  plugins: [addVariablesForColors,
    require('tailwind-scrollbar-hide')],
};

function addVariablesForColors({addBase, theme}: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;

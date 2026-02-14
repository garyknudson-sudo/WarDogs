import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        coal: "#0a0a0a",
        steel: "#171717",
        ember: "#ff3c00",
        ash: "#f6f6f6"
      },
      fontFamily: {
        display: ["Impact", "Haettenschweiler", "Arial Narrow Bold", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        harsh: "12px 12px 0px #ff3c00"
      }
    }
  },
  plugins: []
};

export default config;

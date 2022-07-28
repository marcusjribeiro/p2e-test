/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "almost-black": "#000916",
        menu: "#011431",
        "mobile-menu": "#00040A",
        "menu-selected": "#0048B0",
        filters: "#001A41",
        "chart-initial": "#001431",
        "chart-end": "#000D1F",
        button: "#1370F6",
        dropdown: "#01132F",
        "hold-gray": "#A4A4A4",
        bfilters: "#6EA9FF",
        bbutton: "#002F75",
        "mobile-gray": "#8A8A8A",
        separator: "#26252A",
        surge: "#40380F",
        sunken: "#401913",
        prime: "#14400F",
        bulk: "#40090B",
        craboid: "#002F75",
        ruined: "#1D1640",
        gem: "#400C2B",
        organic: "#074040",
      },
    },
  },
  plugins: [],
};

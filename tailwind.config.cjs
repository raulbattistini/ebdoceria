/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'pocket': {'min': '280px', 'max': '479px'},
      'phone': {'min': '480px', 'max': '639px'},
      'tablet': {'min': '640px', 'max': '767px'},
      'laptop': {'min': '768px', 'max': '1023px'},
      'desktop': {'min': '1024px', 'max': '1279px'},
      'ultrawide': { 'min': '1280px', 'max': '9999px'}
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      monospace: ['"Inconsolata"', "monospace"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      "clear-sans-thin": ['"Clear Sans Thin", "sans-serif"'],
      "advent-pro": ['"Advent Pro"', "sans-serif"],
      inter: ['"Inter", sans-serif'],
      "share-tech-mono": [
        '"Share Tech Mono", "Helvetica", "Verdana", "Tahoma", "sans-serif"',
      ],
      marck: ['"Marck Script", cursive'],
      brush: ['"Water Brush", cursive'],
      montserrat: ['montserrat, "sans-serif"'],
    },
    extend: {
      colors: {
        "dark-purple": "#1A142A",
        "dark-red": "#271415",
        "dark-mid-section": "#1B152B",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        14: "3.5rem"
      },
      height: {
        '128': '32rem',
      },
    },
    plugins: [],
  },
};

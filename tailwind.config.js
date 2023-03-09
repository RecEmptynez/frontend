module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
				'poppins': ['Poppins', 'Roboto'],
			},
      colors: {
        beige: {
          200: "#FDFBF0",
          400: "#FEFAE7",
          600: "#F0EFDC",
          800: "#EBE4C6",
          1000: "#BBB59B",
          1100: "#615C48",
          1200: "#434036",
          1400: "#242422",
        },
        "primary-orange": {
          200: "#DF965E",
          400: "#FFA968",
          600: "#F5954C",
        },
        "primary-green": {
          200: "#11331D",
          400: "#174828",
          600: "#167136",
        },
        "primary-red": "#F3371D",
      },
    },
  },
  plugins: [],
};

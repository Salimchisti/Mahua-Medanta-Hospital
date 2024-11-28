module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a02ee',
        secondary: '#714CFE',
      },
      screens: {
        xs: '475px', // Custom small screen breakpoint
      },
    },
  },
  plugins: [],
};

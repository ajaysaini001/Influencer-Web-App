module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    {
      darkMode: 'selector',
    }
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue': '#00aba5', 
      },
    },
  },
  plugins: [],
};

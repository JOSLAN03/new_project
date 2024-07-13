// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js}',  // Update this to include the paths to all your template files
    './index.html',          // Include your main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'media', // or 'class'
};

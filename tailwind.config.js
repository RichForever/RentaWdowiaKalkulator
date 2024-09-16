/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

function generateSafelist() {
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const percentages = [25, 33, 50, 75, 100];

  return breakpoints.flatMap(bp =>
    percentages.map(pct => `${bp}:w-[${pct}%]`)
  );
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    require('@tailwindcss/typography'),
  ],
  safelist: generateSafelist(),
};
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'rosy-haze': '#f9b9bf',
        'blue-dream': '#a9cffd',
        'aloe-dew': '#9fe9e1',
        'grape-juice': '#cabaf7',
        'peach-cream': '#fbcab3',
        'cloud-puff': '#d3e6fd',
      },
    },
  },
  plugins: [],
};

export default config;

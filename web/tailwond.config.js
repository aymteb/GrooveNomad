/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: [
          'SoraBold',
          'SoraRegular',
          'SoraMedium',
          'SoraLight',
          'SoraSemiBold',
          'SoraExtraBold',
          'SoraBlack',
          'SoraThin',
          'SoraExtraLight',
        ],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ライトモードとダークモードで使用するカラーパレットを定義
        primary: {
          light: '#3b82f6', // blue-500
          dark: '#60a5fa', // blue-400
        },
        background: {
          light: '#f9fafb', // gray-50
          dark: '#1f2937', // gray-800
        },
        card: {
          light: '#ffffff', // white
          dark: '#374151', // gray-700
        },
        text: {
          light: '#1f2937', // gray-800
          dark: '#f9fafb', // gray-50
        },
      },
    },
  },
  plugins: [],
};

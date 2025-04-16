/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2D5A9D',    // Professional blue
          secondary: '#F5A623',  // Warm accent
          tertiary: '#4ECDC4',   // Fresh teal
          dark: '#1A1A2E',       // Deep navy
          light: '#F8F9FA',      // Light background
          charcoal: '#333333',   // Text color
          slate: '#64748B',      // Muted text
          success: '#10B981',    // Success green
          warning: '#F59E0B',    // Warning amber
          error: '#EF4444',      // Error red
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
} 
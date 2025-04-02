// // tailwind.config.js
// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//     './public/index.html'
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         medical: {
//           primary: '#2563eb',
//           secondary: '#1d4ed8',
//           accent: '#93c5fd',
//           light: '#f8fafc',
//           dark: '#0f172a'
//         }
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//         heading: ['Poppins', 'sans-serif']
//       }
//     }
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/typography')
//   ]
// }



















module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        medical: {
          primary: '#2563eb',
          secondary: '#1d4ed8',
          accent: '#93c5fd',
          light: '#f8fafc',
          dark: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': 'var(--a1)',
        'accent-2': 'var(--a2)',
        'accent-3': 'var(--a3)',
      },
      maxWidth: {
        'half': '50%'
      },
      screens: {
        'smMax': {'max': '600px'},
        'mdMax': {'max': '1100px'},
      }
    },
  },
  plugins: [],
}


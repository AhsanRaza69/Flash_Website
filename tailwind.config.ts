import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2022/11/counterbackground.jpg')",
        
      },
      // fontFamily:{
      //   bodyFont: ["Urbanist", ...defaultTheme.fontFamily.sans],
      //  },
       colors: {
        bodyColor: "#fbfaf7",
        webBlue: "#30afb8",
        darkText: "#777",
        darkcolor: "#353D4A",
      },
    },
  },
  plugins: [],
}
export default config

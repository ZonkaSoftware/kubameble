/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		colors: {
		  main: "#BBC274",
		  second: "#2B2A28",
		  dark: "#aab251",
		},
		fontFamily: {
		  mid: ["poppins-mid"],
		  bold: ["poppins-bold"],
		  semibold: ["poppins-semibold"],
		  black: ["poppins-black"],
		},
		container: {
		  center: true,
		  padding: {
			DEFAULT: "1rem", // 4 units
			// sm: "2rem",      // 8 units
			// lg: "4rem",      // 16 units
			// xl: "5rem",      // 20 units
		  },
		},
	  },
	},
	plugins: [],
  };
  
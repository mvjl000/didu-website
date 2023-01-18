/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"yellow-primary": '#FFD121',
				"black-primary": '#201E1E'
			}
		},
		fontFamily: {
			Odibee: ["'Odibee Sans', cursive"]
		},
		screens: {
			tablet: '768px',
			desktop: '1024px',
			bigDesktop: '1280px',
			huge: '1440px'
		}
	},
	plugins: [],
}

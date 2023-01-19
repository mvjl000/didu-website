/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"yellow-primary": '#FFD121',
				"black-primary": '#201E1E'
			},
			keyframes: {
				wiggle: {
					'0%': {
						transform: 'translate(0, 0)',
					},
					'7%': {
						transform: 'translate(1px, 0px)',
					},
					'14%': {
						transform: 'translate(1px, 1px)',
					},
					'21%': {
						transform: 'translate(2px, 1px)',
					},
					'28%': {
						transform: 'translate(2px, 2px)',
					},
					'35%': {
						transform: 'translate(2px, 1px)',
					},
					'42%': {
						transform: 'translate(1px, 1px)',
					},
					'48%': {
						transform: 'translate(0, 0)',
					},
					'55%': {
						transform: 'translate(-1px, 0px)',
					},
					'62%': {
						transform: 'translate(-1px, -1px)',
					},
					'68%': {
						transform: 'translate(-2px, -1px)',
					},
					'75%': {
						transform: 'translate(-2px, -2px)',
					},
					'83%': {
						transform: 'translate(-2px, -1px)',
					},
					'90%': {
						transform: 'translate(-1px, -1px)',
					},
					'100%': {
						transform: 'translate(0px, 0px)',
					},
				}
			}
		},
		fontFamily: {
			Odibee: ["'Odibee Sans', cursive"],
			Roboto: ["'Roboto Condensed', sans-serif"]
		},
		screens: {
			tablet: '768px',
			desktop: '1024px',
			bigDesktop: '1280px',
			huge: '1440px'
		},
		animation: {
			'wiggling': 'wiggle 6s linear infinite',
			'wiggling-delayed': 'wiggle 6s 2s linear infinite',
		}
	},
	plugins: [],
}

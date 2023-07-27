/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			custom: ['Inter:wght', 'sans-serif'],
		  },
		  colors:{
			'azul' : {
			  100: '#0F172A',
			  200: '#192b51',
			  300: '#233f7a',
			  400: '#2850a2',
			},
		  },
		},
	  },
	  plugins: [
		require('tailwindcss-animated')
	  ],
}

const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
	theme: {
		colors: {
			grey: {
				lighter: '#f5f6f7',
				darker: '#929292',
			},
			red: colors.red,
			orange: '#cf4141',
			white: '#fff',
			black: '#1a1a1a',
			primary: '#cf6241',
			secondary: '#0e0604',
			tertiary: '#F8F0ED',
		},
		fontFamily: {
			nunito: ['Nunito', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
		},
		extend: {},
	},
	variants: {},
	plugins: [],
}

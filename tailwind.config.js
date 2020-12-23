const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
	theme: {
		colors: {
			black: {
				lighter: '#888888',
				darker: '#1f1f1f',
			},
			red: colors.red,
			orange: '#cf4141',
			white: '#f0eeee',
			primary: '#cf6241',
			secondary: '#242424',
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

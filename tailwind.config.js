const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.html', './src/**/*.css', './src/**/*.tsx'],
	theme: {
		colors: {
			grey: {
				lighter: '#f9fafb',
				darker: '#757575',
			},
			red: colors.red,
			orange: colors.orange,
			white: '#fff',
			black: '#222',
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

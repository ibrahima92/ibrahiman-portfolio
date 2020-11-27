const colors = require('tailwindcss/colors')

module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		colors: {
			gray: {
				light: '#F8F0ED',
				dark: '#757575',
			},
			red: colors.red,
			orange: colors.orange,
			white: '#fff',
			primary: '#cf6241',
			secondary: '#f0eeee',
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

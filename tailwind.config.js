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
				light: '#F5f6f7',
				dark: '#757575',
			},
			red: colors.red,
			orange: colors.orange,
			white: '#fff',
			black: '#222',
			primary: '#cf6241',
			secondary: '#200F0A',
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

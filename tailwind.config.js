// const colors = require('tailwindcss/colors')

module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		colors: {
			gray: {
				light: '#f9fafb',
				dark: '#757575',
			},
			// red: colors.rose,
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

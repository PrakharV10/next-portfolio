module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				white: '#F9F9F9',
				gray: {
					900: '#171B1E',
					700: '#202529',
				},
				blue: {
					700: '#015AA8',
				},
			},
			fontFamily: {
				kanit: ['Kanit', 'sans-serif'],
				satisfy: ['Satisfy', 'cursive'],
				poppins: ['Poppins', 'sans-serif'],
				karla: ['Karla', 'sans-serif'],
			},
			height: {
				content: 'max-content',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

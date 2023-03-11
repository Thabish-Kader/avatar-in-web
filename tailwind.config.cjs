/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				theme: "#32f6f7",
				"theme-secondary": "#fa02fc",
			},
		},
	},
	plugins: [],
};

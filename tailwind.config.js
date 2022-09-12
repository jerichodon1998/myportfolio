/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"old-Mauve": "#6d213c",
				"liver-Chestnut": "#946846",
				"misty-Moss": "#baab68",
				"maize-Crayola": "#e3c16f",
				"laser-lemon": "#faff70",
				"darker-white": "#EBEDEF",
			},
		},
	},
	plugins: [],
};

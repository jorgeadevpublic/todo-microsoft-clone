import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			body: "Roboto, sans-serif",
		},
		fontWeight: {
			regular: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "900",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			container: {
				center: true,
				padding: {
					// DEFAULT: "1rem",
					// sm: "2rem",
					// lg: "3rem",
					// xl: "4rem",
					// "2xl": "4rem",
					// "3xl": "5rem",
				},
			},
			"screens": {
				// "4k": "1920px",
			},
			colors: {
				brand: "#1ed760",
				"accent-1": "#ae2997",
				"accent-2": "#519af4",
			},
		},
	},
	plugins: [],
};
export default config;

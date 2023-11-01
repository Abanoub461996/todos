/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			primary: 'rgba(var(--color-primary), 1)',
			secondary: 'rgba(var(--color-secondary), 1)',
			metal: '#565584',
			tahiti: '#3ab7bf',
			...colors,
		},
		extend: {
			height: {
				85: '22.5rem',
				165: '45rem',
			},
		},
		fontFamily: {
			manrope: ['Manrope', 'sans-serif'],
			libreBaskerville: ['LibreBaskerville', 'sans-serif'],
		},
		screens: {
			sm: { min: '640px', max: '767px' },
			md: { min: '768px', max: '1023px' },
			lg: { min: '1024px', max: '1279px' },
			xl: { min: '1280px', max: '1535px' },
			'2xl': { min: '1536px' },
		},
	},
	plugins: [],
};

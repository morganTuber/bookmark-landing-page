const colors = require('tailwindcss/colors');
module.exports = {
    mode: 'jit',
    purge: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: true, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                lg: '1124px',
                xl: '1124px',
                '2xl': '1124px',
            },
        },
        extend: {
            colors: {
                'bookmark-blue': 'hsl(231,69%,60%)',
                'bookmark-red': 'hsl(0,94%,66%)',
                'bookmark-gray-blue': 'hsl(229,8%,60%)',
                'bookmark-dark-blue': 'hsl(229,31%,21%)',
                gray: colors.trueGray,
            },
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

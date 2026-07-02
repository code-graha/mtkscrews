/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html', './js/**/*.js'],
    theme: {
        extend: {
            colors: {
                // Dark accent scale — brand dark = #1f2429
                navy: {
                    50: '#f3f4f5',
                    100: '#dfe1e3',
                    200: '#b9bcc0',
                    300: '#8c9097',
                    400: '#5f656e',
                    500: '#3d434c',
                    600: '#2d333b',
                    700: '#262b32',
                    800: '#21262d',
                    900: '#1f2429',
                    950: '#14171a',
                },
                // Red primary scale — brand red = #ed1a25
                orange: {
                    50: '#fef2f3',
                    100: '#fde2e4',
                    200: '#fbc9cc',
                    300: '#f7989e',
                    400: '#f25962',
                    500: '#ed1a25',
                    600: '#cf0e18',
                    700: '#aa0c14',
                    800: '#870a10',
                    900: '#6b080d',
                },
                light: '#F6F8FB',
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Open Sans', 'sans-serif'],
            },
            borderRadius: {
                card: '24px',
                pill: '9999px',
            },
            boxShadow: {
                soft: '0 10px 40px -10px rgba(31, 36, 41, 0.10)',
                float: '0 20px 40px -10px rgba(237, 26, 37, 0.25)',
            },
        },
    },
    plugins: [],
};

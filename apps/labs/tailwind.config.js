/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';
import plugin from 'tailwindcss/plugin';

export default {
    darkMode: ['selector', '[class~="p-dark"]'],
    content: ['./components/**/*.{js,vue,ts}', './doc/**/*.{js,vue,ts}', './plex/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue', './error.vue'],
    plugins: [
        PrimeUI,
        plugin(function ({ addVariant }) {
            addVariant('p-invalid', '&[data-p~="invalid"]');
            addVariant('p-small', '&[data-p~="small"]');
            addVariant('p-large', '&[data-p~="large"]');
            addVariant('p-fluid', '&[data-p~="fluid"]');
            addVariant('p-filled', '&[data-p~="filled"]');
            addVariant('p-horizontal', '&[data-p~="horizontal"]');
            addVariant('p-vertical', '&[data-p~="vertical"]');
        })
    ],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        }
    }
};

/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ['selector', '[class="p-dark"]'],
    content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.{js,vue,ts}', './doc/**/*.{js,vue,ts}', './error.vue'],
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

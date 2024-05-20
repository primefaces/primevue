/** @type {import('tailwindcss').Config} */
const primeui = require('./tailwindcss-primeui');

module.exports = {
    darkMode: 'class',
    content: ['./pages/**/*.vue', './components/doc/**/*.{js,vue,ts}', './components/landing/**/*.{js,vue,ts}', './components/template/**/*.{js,vue,ts}', './doc/**/*.{js,vue,ts}', './error.vue'],
    plugins: [primeui]
};

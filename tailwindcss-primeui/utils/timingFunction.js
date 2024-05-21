module.exports = ({ addUtilities }) =>
    addUtilities({
        '.animate-ease-linear': {
            'animation-timing-function': 'linear'
        },
        '.animate-ease-in': {
            'animation-timing-function': 'cubic-bezier(0.4, 0, 1, 1)'
        },
        '.animate-ease-out': {
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        },
        '.animate-ease-in-out': {
            'animation-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
    });

module.exports = ({ addUtilities }) =>
    addUtilities({
        '.backface-visible': {
            'backface-visibility': 'visible'
        },
        '.backface-hidden': {
            'backface-visibility': 'hidden'
        }
    });

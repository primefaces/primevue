module.exports = ({ addUtilities }) =>
    addUtilities({
        '.animate-infinite': {
            'animation-iteration-count': 'infinite'
        },
        '.animate-once': {
            'animation-iteration-count': '1'
        },
        '.animate-twice': {
            'animation-iteration-count': '2'
        }
    });

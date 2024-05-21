module.exports = ({ addUtilities }) =>
    addUtilities({
        '.animate-running': {
            'animation-play-state': 'running'
        },
        '.animate-paused': {
            'animation-play-state': 'paused'
        }
    });

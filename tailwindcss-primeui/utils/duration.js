module.exports = ({ matchUtilities, theme }) =>
    matchUtilities(
        {
            'animate-duration': (value) => ({
                'animation-duration': value
            })
        },
        {
            values: theme('animationDuration')
        }
    );

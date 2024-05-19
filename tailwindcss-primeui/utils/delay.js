module.exports = ({ matchUtilities, theme }) =>
    matchUtilities(
        {
            'animate-delay': (value) => ({
                'animation-delay': value
            })
        },
        {
            values: theme('animationDelay')
        }
    );

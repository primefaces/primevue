const plugin = require('tailwindcss/plugin');

module.exports = plugin(
    (api) => {
        require('./utils/backface')(api);
        require('./utils/delay')(api);
        require('./utils/direction')(api);
        require('./utils/duration')(api);
        require('./utils/fillMode')(api);
        require('./utils/iterationCount')(api);
        require('./utils/playState')(api);
        require('./utils/timingFunction')(api);
    },
    {
        theme: require('./theme')
    }
);

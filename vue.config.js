module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/primevue' : '/',
    productionSourceMap: false,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    css: {
        extract: false
    }
}
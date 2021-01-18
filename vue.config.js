const path = require('path'); 

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/primevue/showcase/' : '/',
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                'primevue/ripple': path.resolve(__dirname, 'src/components/ripple/Ripple.js'),
                'primevue/useconfirm': path.resolve(__dirname, 'src/components/useconfirm/UseConfirm.js'),
                'primevue/usetoast': path.resolve(__dirname, 'src/components/usetoast/UseToast.js'),
                'primevue/utils': path.resolve(__dirname, 'src/components/utils/Utils.js'),
                'primevue/button': path.resolve(__dirname, 'src/components/button/Button.vue'),
                'primevue/inputtext': path.resolve(__dirname, 'src/components/inputtext/InputText.vue'),
                'primevue/dialog': path.resolve(__dirname, 'src/components/dialog/Dialog.vue'),
                'primevue/menu': path.resolve(__dirname, 'src/components/menu/Menu.vue'),
                'primevue/dropdown': path.resolve(__dirname, 'src/components/dropdown/Dropdown.vue'),
                'primevue/paginator': path.resolve(__dirname, 'src/components/paginator/Paginator.vue'),
                'primevue/progressbar': path.resolve(__dirname, 'src/components/progressbar/ProgressBar.vue'),
                'primevue/message': path.resolve(__dirname, 'src/components/message/Message.vue'),
                'primevue/confirmationeventbus': path.resolve(__dirname, 'src/components/confirmationeventbus/ConfirmationEventBus.js'),
                'primevue/toasteventbus': path.resolve(__dirname, 'src/components/toasteventbus/ToastEventBus.js'),
                'primevue/terminalservice': path.resolve(__dirname, 'src/components/terminalservice/TerminalService.js')
            },
        },
        output: {
            libraryExport: 'default'
        }
    },
    css: {
        extract: false
    }
}
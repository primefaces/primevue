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
                'primevue/api': path.resolve(__dirname, 'src/components/api/Api.js'),
                'primevue/button': path.resolve(__dirname, 'src/components/button/Button.vue'),
                'primevue/inputtext': path.resolve(__dirname, 'src/components/inputtext/InputText.vue'),
                'primevue/dialog': path.resolve(__dirname, 'src/components/dialog/Dialog.vue'),
                'primevue/menu': path.resolve(__dirname, 'src/components/menu/Menu.vue'),
                'primevue/tieredmenu': path.resolve(__dirname, 'src/components/tieredmenu/TieredMenu.vue'),
                'primevue/dropdown': path.resolve(__dirname, 'src/components/dropdown/Dropdown.vue'),
                'primevue/inputnumber': path.resolve(__dirname, 'src/components/inputnumber/InputNumber.vue'),
                'primevue/paginator': path.resolve(__dirname, 'src/components/paginator/Paginator.vue'),
                'primevue/progressbar': path.resolve(__dirname, 'src/components/progressbar/ProgressBar.vue'),
                'primevue/message': path.resolve(__dirname, 'src/components/message/Message.vue'),
                'primevue/tree': path.resolve(__dirname, 'src/components/tree/Tree.vue'),
                'primevue/confirmationeventbus': path.resolve(__dirname, 'src/components/confirmationeventbus/ConfirmationEventBus.js'),
                'primevue/toasteventbus': path.resolve(__dirname, 'src/components/toasteventbus/ToastEventBus.js'),
                'primevue/overlayeventbus': path.resolve(__dirname, 'src/components/overlayeventbus/OverlayEventBus.js'),
                'primevue/terminalservice': path.resolve(__dirname, 'src/components/terminalservice/TerminalService.js'),
                'primevue/virtualscroller': path.resolve(__dirname, 'src/components/virtualscroller/VirtualScroller.vue')
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

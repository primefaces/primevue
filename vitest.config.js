import vue from '@vitejs/plugin-vue';
import path from 'path';

export default {
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'json', 'html']
        }
    },
    resolve: {
        alias: {
            'primevue/config': path.resolve(__dirname, './components/config/PrimeVue.js'),
            'primevue/ripple': path.resolve(__dirname, './components/ripple/Ripple.js'),
            'primevue/tooltip': path.resolve(__dirname, './components/tooltip/Tooltip.js'),
            'primevue/focustrap': path.resolve(__dirname, './components/focustrap/FocusTrap.js'),
            'primevue/useconfirm': path.resolve(__dirname, './components/useconfirm/UseConfirm.js'),
            'primevue/usetoast': path.resolve(__dirname, './components/usetoast/UseToast.js'),
            'primevue/usedialog': path.resolve(__dirname, './components/usedialog/UseDialog.js'),
            'primevue/utils': path.resolve(__dirname, './components/utils/Utils.js'),
            'primevue/api': path.resolve(__dirname, './components/api/Api.js'),
            'primevue/portal': path.resolve(__dirname, './components/portal/Portal.vue'),
            'primevue/button': path.resolve(__dirname, './components/button/Button.vue'),
            'primevue/inputtext': path.resolve(__dirname, './components/inputtext/InputText.vue'),
            'primevue/dialog': path.resolve(__dirname, './components/dialog/Dialog.vue'),
            'primevue/menu': path.resolve(__dirname, './components/menu/Menu.vue'),
            'primevue/tieredmenu': path.resolve(__dirname, './components/tieredmenu/TieredMenu.vue'),
            'primevue/dropdown': path.resolve(__dirname, './components/dropdown/Dropdown.vue'),
            'primevue/inputnumber': path.resolve(__dirname, './components/inputnumber/InputNumber.vue'),
            'primevue/paginator': path.resolve(__dirname, './components/paginator/Paginator.vue'),
            'primevue/progressbar': path.resolve(__dirname, './components/progressbar/ProgressBar.vue'),
            'primevue/message': path.resolve(__dirname, './components/message/Message.vue'),
            'primevue/tree': path.resolve(__dirname, './components/tree/Tree.vue'),
            'primevue/confirmationeventbus': path.resolve(__dirname, './components/confirmationeventbus/ConfirmationEventBus.js'),
            'primevue/toasteventbus': path.resolve(__dirname, './components/toasteventbus/ToastEventBus.js'),
            'primevue/overlayeventbus': path.resolve(__dirname, './components/overlayeventbus/OverlayEventBus.js'),
            'primevue/terminalservice': path.resolve(__dirname, './components/terminalservice/TerminalService.js'),
            'primevue/dynamicdialogeventbus': path.resolve(__dirname, './components/dynamicdialogeventbus/DynamicDialogEventBus.js'),
            'primevue/virtualscroller': path.resolve(__dirname, './components/virtualscroller/VirtualScroller.vue')
        }
    }
};

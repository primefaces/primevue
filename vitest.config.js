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
            'primevue/config': path.resolve(__dirname, './components/lib/config/PrimeVue.js'),
            'primevue/ripple': path.resolve(__dirname, './components/lib/ripple/Ripple.js'),
            'primevue/tooltip': path.resolve(__dirname, './components/lib/tooltip/Tooltip.js'),
            'primevue/focustrap': path.resolve(__dirname, './components/lib/focustrap/FocusTrap.js'),
            'primevue/useconfirm': path.resolve(__dirname, './components/lib/useconfirm/UseConfirm.js'),
            'primevue/usetoast': path.resolve(__dirname, './components/lib/usetoast/UseToast.js'),
            'primevue/usedialog': path.resolve(__dirname, './components/lib/usedialog/UseDialog.js'),
            'primevue/utils': path.resolve(__dirname, './components/lib/utils/Utils.js'),
            'primevue/api': path.resolve(__dirname, './components/lib/api/Api.js'),
            'primevue/portal': path.resolve(__dirname, './components/lib/portal/Portal.vue'),
            'primevue/button': path.resolve(__dirname, './components/lib/button/Button.vue'),
            'primevue/inputtext': path.resolve(__dirname, './components/lib/inputtext/InputText.vue'),
            'primevue/dialog': path.resolve(__dirname, './components/lib/dialog/Dialog.vue'),
            'primevue/menu': path.resolve(__dirname, './components/lib/menu/Menu.vue'),
            'primevue/tieredmenu': path.resolve(__dirname, './components/lib/tieredmenu/TieredMenu.vue'),
            'primevue/dropdown': path.resolve(__dirname, './components/lib/dropdown/Dropdown.vue'),
            'primevue/inputnumber': path.resolve(__dirname, './components/lib/inputnumber/InputNumber.vue'),
            'primevue/paginator': path.resolve(__dirname, './components/lib/paginator/Paginator.vue'),
            'primevue/progressbar': path.resolve(__dirname, './components/lib/progressbar/ProgressBar.vue'),
            'primevue/message': path.resolve(__dirname, './components/lib/message/Message.vue'),
            'primevue/tree': path.resolve(__dirname, './components/lib/tree/Tree.vue'),
            'primevue/confirmationeventbus': path.resolve(__dirname, './components/lib/confirmationeventbus/ConfirmationEventBus.js'),
            'primevue/toasteventbus': path.resolve(__dirname, './components/lib/toasteventbus/ToastEventBus.js'),
            'primevue/overlayeventbus': path.resolve(__dirname, './components/lib/overlayeventbus/OverlayEventBus.js'),
            'primevue/terminalservice': path.resolve(__dirname, './components/lib/terminalservice/TerminalService.js'),
            'primevue/dynamicdialogeventbus': path.resolve(__dirname, './components/lib/dynamicdialogeventbus/DynamicDialogEventBus.js'),
            'primevue/virtualscroller': path.resolve(__dirname, './components/lib/virtualscroller/VirtualScroller.vue')
        }
    }
};

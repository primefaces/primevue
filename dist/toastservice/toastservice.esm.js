import ToastEventBus from 'primevue/toasteventbus';
import { PrimeVueToastSymbol } from 'primevue/usetoast';

var ToastService = {
    install: (app) => {
        const ToastService = {
            add: (message) => {
                ToastEventBus.emit('add', message);
            },
            removeGroup: (group) => {
                ToastEventBus.emit('remove-group', group);
            },
            removeAllGroups: () => {
                ToastEventBus.emit('remove-all-groups');
            }
        };
        app.config.globalProperties.$toast = ToastService;
        app.provide(PrimeVueToastSymbol, ToastService);
    }
};

export { ToastService as default };

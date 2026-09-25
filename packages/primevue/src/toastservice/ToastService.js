import ToastEventBus from 'primevue/toasteventbus';
import { PrimeVueToastSymbol } from 'primevue/usetoast';

export default {
    install: (app, options = {}) => {
        let defaults = options || {};

        const ToastService = {
            add: (message) => {
                const merged = Object.assign({}, defaults, message);
                ToastEventBus.emit('add', merged);
            },
            remove: (message) => {
                ToastEventBus.emit('remove', message);
            },
            removeGroup: (group) => {
                ToastEventBus.emit('remove-group', group);
            },
            removeAllGroups: () => {
                ToastEventBus.emit('remove-all-groups');
            },
            setOptions: (opts) => {
                defaults = Object.assign({}, defaults, opts);
            },
            getOptions: () => ({ ...defaults })
        };

        app.config.globalProperties.$toast = ToastService;
        app.provide(PrimeVueToastSymbol, ToastService);
    }
};

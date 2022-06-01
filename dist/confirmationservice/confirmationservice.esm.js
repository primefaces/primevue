import ConfirmationEventBus from 'primevue/confirmationeventbus';
import { PrimeVueConfirmSymbol } from 'primevue/useconfirm';

var ConfirmationService = {
    install: (app) => {
        const ConfirmationService = {
            require: (options) => {
                ConfirmationEventBus.emit('confirm', options);
            },
            close: () => {
                ConfirmationEventBus.emit('close');
            }
        };
        app.config.globalProperties.$confirm = ConfirmationService;
        app.provide(PrimeVueConfirmSymbol, ConfirmationService);
    }
};

export { ConfirmationService as default };

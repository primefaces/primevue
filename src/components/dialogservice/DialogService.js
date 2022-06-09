import DynamicDialogEventBus from 'primevue/dynamicdialogeventbus';
import {PrimeVueDialogSymbol} from 'primevue/usedialog';

export default {
    install: (app) => {
        const DialogService = {
            open: (dialog) => {
                DynamicDialogEventBus.emit('open', dialog);
            },
            close: (group) => {
                DynamicDialogEventBus.emit('close', group);
            }
        };
        app.config.globalProperties.$dialog = DialogService;
        app.provide(PrimeVueDialogSymbol, DialogService);
    }
}
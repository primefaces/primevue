import DynamicDialogEventBus from 'primevue/dynamicdialogeventbus';
import { PrimeVueDialogSymbol } from 'primevue/usedialog';
import { markRaw } from 'vue';

export default {
    install: (app) => {
        const DialogService = {
            open: (content, options) => {
                const instance = {
                    content: content && markRaw(content),
                    options: options || {},
                    data: options && options.data,
                    close: (params) => {
                        DynamicDialogEventBus.emit('close', { instance, params });
                    }
                };

                DynamicDialogEventBus.emit('open', { instance });

                return instance;
            }
        };

        // app.config.unwrapInjectedRef = true; // Remove it after Vue 3.3. Details: https://vuejs.org/guide/components/provide-inject.html#working-with-reactivity
        app.config.globalProperties.$dialog = DialogService;
        app.provide(PrimeVueDialogSymbol, DialogService);
    }
};

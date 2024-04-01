import * as PrimeVueConfig from 'primevue/config';

export const { defaultOptions, usePrimeVue } = PrimeVueConfig;

export default {
    install: (app, options) => {
        const configOptions = { ...defaultOptions, ...options, unstyled: true };

        PrimeVueConfig.setup(app, configOptions);
    }
};

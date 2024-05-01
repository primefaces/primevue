import * as PrimeVueConfig from 'primevue/config';
import Aura from 'primevue/themes/aura';

export const defaultOptions = {
    ...PrimeVueConfig.defaultOptions,
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
};

export const { usePrimeVue } = PrimeVueConfig;

export default {
    install: (app, options) => {
        const configOptions = { ...defaultOptions, ...options, unstyled: false };

        PrimeVueConfig.setup(app, configOptions);
    }
};

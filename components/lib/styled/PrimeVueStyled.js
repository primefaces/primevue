import * as PrimeVueConfig from 'primevue/config';
import PrimeOne from 'primevue/themes/primeone';
import Aura from 'primevue/themes/primeone/aura';

export const defaultOptions = {
    ...PrimeVueConfig.defaultOptions,
    theme: {
        base: PrimeOne,
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

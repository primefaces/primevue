import * as PrimeVueConfig from 'primevue/config';
import Theme, { ThemeService } from 'primevue/themes';
import PrimeOne from 'primevue/themes/primeone';
import Aura from 'primevue/themes/primeone/aura';
import { ref, watch } from 'vue';

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

function setupTheme(app, PrimeVue) {
    const isChanged = ref(false);

    watch(
        PrimeVue.config.theme,
        (newValue) => {
            if (!isChanged.value) {
                Theme.setTheme(newValue);
            }

            isChanged.value = false;
        },
        { immediate: true, deep: true }
    );

    ThemeService.on('theme:change', function (newTheme) {
        isChanged.value = true;
        app.config.globalProperties.$primevue.config.theme = newTheme;
    });
}

export default {
    install: (app, options) => {
        const configOptions = { ...defaultOptions, ...options, unstyled: false };
        const PrimeVue = PrimeVueConfig.setup(app, configOptions);

        setupTheme(app, PrimeVue);
    }
};

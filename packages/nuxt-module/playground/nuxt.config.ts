import Aura from '@primeuix/themes/aura';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    compatibilityDate: '2025-02-27',
    devtools: { enabled: true },
    modules: ['../src/module'],
    primevue: {
        usePrimeVue: true,
        options: {
            // ripple, inputStyle etc.
            ripple: true,
            theme: {
                preset: Aura
            },
            pt: {
                panel: {
                    header: 'my-panel-header'
                }
            }
        },
        components: {
            prefix: '',
            include: '*',
            exclude: undefined
        },
        directives: {
            prefix: '',
            include: undefined,
            exclude: '*'
        },
        composables: {
            //prefix: '',
            include: undefined,
            exclude: undefined
        }
    }
});

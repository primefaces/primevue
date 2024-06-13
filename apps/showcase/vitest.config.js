import vue from '@vitejs/plugin-vue';
import path from 'path';
import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import aliasConfig from './nuxt-vite.config.js';

export default mergeConfig(
    aliasConfig,
    defineConfig({
        plugins: [vue()],
        test: {
            globals: true,
            environment: 'jsdom',
            onConsoleLog: (log, type) => {
                if (type === 'stderr' && log.includes('Could not parse CSS stylesheet')) return false;
            },
            coverage: {
                provider: 'istanbul',
                reporter: ['text', 'json', 'html']
            },
            setupFiles: [path.resolve(__dirname, './components/lib/config/PrimeVue.spec.js')]
        },
        resolve: {
            alias: {
                //'primevue/config': path.resolve(__dirname, './components/lib/config/PrimeVue.js')
            }
        }
    })
);

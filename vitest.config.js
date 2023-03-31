import vue from '@vitejs/plugin-vue';
import path from 'path';
import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        plugins: [vue()],
        test: {
            globals: true,
            environment: 'jsdom',
            coverage: {
                provider: 'istanbul',
                reporter: ['text', 'json', 'html']
            }
        },
        resolve: {
            alias: {
                'primevue/config': path.resolve(__dirname, './components/lib/config/PrimeVue.js')
            }
        }
    })
);

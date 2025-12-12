import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['./src/index.ts'],
    format: ['esm'],
    dts: true,
    external: [/^@primeuix\/(.*)$/, /^@primevue\/(.*)$/],
    splitting: false,
    clean: true,
    shims: true,
    banner: {
        js: '#!/usr/bin/env node'
    }
});

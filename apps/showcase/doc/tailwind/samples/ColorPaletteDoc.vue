<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue color palette as utility classes.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-col gap-12">
            <ul class="p-0 m-0 list-none flex sm:flex-col gap-4 flex-wrap sm:flex-nowrap">
                <li v-for="(color, i) of colors" :key="i" class="flex-auto" style="min-width: 6rem">
                    <span class="font-medium capitalize block mb-2 text-center sm:text-left">{{ color }}</span>
                    <div class="flex gap-4 flex-auto flex-col sm:flex-row">
                        <div v-for="(shade, j) of shades" :key="shade" :class="['flex flex-col items-center gap-1 flex-1', { invisible: color === 'primary' && shade === 0 }]">
                            <div class="rounded h-8 w-full" :style="`background-color: var(--p-${color}-${shades[j]})`"></div>
                            <span class="text-sm text-surface-500 dark:text-surface-400 font-medium">{{ shades[j] }}</span>
                        </div>
                    </div>
                </li>
            </ul>

            <div class="flex gap-6 flex-wrap">
                <div class="rounded-border p-4 border border-transparent flex items-center justify-center bg-primary hover:bg-primary-emphasis text-primary-contrast font-medium flex-auto transition-colors">primary</div>
                <div class="rounded-border p-4 border border-transparent flex items-center justify-center bg-highlight hover:bg-highlight-emphasis font-medium flex-auto transition-colors">highlight</div>
                <div class="rounded-border p-4 border border-surface flex items-center justify-center text-muted-color hover:text-color hover:bg-emphasis font-medium flex-auto transition-colors">box</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shades: [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
            colors: ['primary', 'surface'],
            code1: {
                basic: `
npm i tailwindcss-primeui
`
            },
            code2: {
                basic: `
// tailwind.config.js
module.exports = {
    // ...
    plugins: [require('tailwindcss-primeui')]
};
`
            }
        };
    }
};
</script>

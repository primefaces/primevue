<template>
    <DocSectionText v-bind="$attrs">
        <p>The plugin extends the default configuration with a new set of utilities. All variants and breakpoints are supported e.g. <i>dark:sm:hover:bg-primary</i>.</p>
        <h3>Color Palette</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>primary-[50-950]</td>
                        <td>Primary color palette.</td>
                    </tr>
                    <tr>
                        <td>surface-[0-950]</td>
                        <td>Surface color palette.</td>
                    </tr>
                    <tr>
                        <td>primary</td>
                        <td>Default primary color.</td>
                    </tr>
                    <tr>
                        <td>primary-contrast</td>
                        <td>Default primary contrast color.</td>
                    </tr>
                    <tr>
                        <td>primary-emphasis</td>
                        <td>Default primary emphasis color.</td>
                    </tr>
                    <tr>
                        <td>border-surface</td>
                        <td>Default primary emphasis color.</td>
                    </tr>
                    <tr>
                        <td>bg-emphasis</td>
                        <td>Emphasis background e.g. hovered element.</td>
                    </tr>
                    <tr>
                        <td>bg-highlight</td>
                        <td>Highlight background.</td>
                    </tr>
                    <tr>
                        <td>bg-highlight-emphasis</td>
                        <td>Highlight background with emphasis.</td>
                    </tr>
                    <tr>
                        <td>rounded-border</td>
                        <td>Border radius.</td>
                    </tr>
                    <tr>
                        <td>text-color</td>
                        <td>Text color with emphasis.</td>
                    </tr>
                    <tr>
                        <td>text-color-emphasis</td>
                        <td>Default primary emphasis color.</td>
                    </tr>
                    <tr>
                        <td>text-muted-color</td>
                        <td>Secondary text color.</td>
                    </tr>
                    <tr>
                        <td>text-muted-color-emphasis</td>
                        <td>Secondary text color with emphasis.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="card">
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
        </div>
    </DocSectionText>
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

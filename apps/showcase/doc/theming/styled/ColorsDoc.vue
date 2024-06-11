<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Color palette of a preset is defined by the <i>primitive</i> design token group. The default colors are derived from the Tailwind colors with some extensions to make it consistent with the Tailwind Presets projects of the unstyled mode.
        </p>
    </DocSectionText>
    <p>Colors can be accessed at CSS as a variable and programmatically using the <i>$dt</i> utility.</p>
    <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
    <div class="card">
        <ul class="p-0 m-0 list-none flex sm:flex-col gap-4 flex-wrap sm:flex-nowrap">
            <li v-for="(color, i) of colors" :key="i" class="flex-auto" style="min-width: 6rem">
                <span class="font-medium capitalize block mb-2 text-center sm:text-left">{{ color }}</span>
                <div class="flex gap-4 flex-auto flex-col sm:flex-row">
                    <div v-for="(shade, j) of shades" :key="shade" class="flex flex-col items-center gap-1 flex-1">
                        <div class="rounded h-8 w-full" :style="`background-color: var(--p-${color}-${shades[j]})`"></div>
                        <span class="text-sm text-surface-500 dark:text-surface-400 font-medium">{{ shades[j] }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
            colors: ['emerald', 'green', 'lime', 'red', 'orange', 'amber', 'yellow', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone'],
            code1: {
                basic: `
// With CSS
var(--p-blue-500)

// With JS
$dt('blue.500').value
`
            }
        };
    }
};
</script>

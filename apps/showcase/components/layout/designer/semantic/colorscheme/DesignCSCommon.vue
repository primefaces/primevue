<template>
    <Fieldset legend="Common" :toggleable="true" class="mb-3">
        <section class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center">
                <span class="text-sm">Surface</span>
                <input :value="$colorScheme.surface['500']" @input="onSurfaceColorChange($event)" type="color" />
            </div>
            <DesignColorPalette :value="$colorScheme.surface" />
        </section>
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Typography</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Text Color</span>
                <input v-model="$colorScheme.text.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Text Hover Color</span>
                <input v-model="$colorScheme.text.hoverColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Text Muted Color</span>
                <input v-model="$colorScheme.text.mutedColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Text Hover Muted Color</span>
                <input v-model="$colorScheme.text.hoverMutedColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
        </section>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Content Background</span>
                <input v-model="$colorScheme.content.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Content Hover Background</span>
                <input v-model="$colorScheme.content.hoverBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Content Border Color</span>
                <input v-model="$colorScheme.content.borderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Content Color</span>
                <input v-model="$colorScheme.content.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Content Hover Color</span>
                <input v-model="$colorScheme.content.hoverColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Mask Background</span>
                <input v-model="$colorScheme.mask.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Mask Color</span>
                <input v-model="$colorScheme.mask.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Accent</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Primary</span>
                <input v-model="$colorScheme.primary.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Primary Contrast</span>
                <input v-model="$colorScheme.primary.contrastColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Primary Hover</span>
                <input v-model="$colorScheme.primary.hoverColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Primary Active</span>
                <input v-model="$colorScheme.primary.activeColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
        </section>
        <section class="grid grid-cols-4 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Highlight Background</span>
                <input v-model="$colorScheme.highlight.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Highlight Color</span>
                <input v-model="$colorScheme.highlight.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Highlight Focus Background</span>
                <input v-model="$colorScheme.highlight.focusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Highlight Focus Color</span>
                <input v-model="$colorScheme.highlight.focusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
        </section>
    </Fieldset>
</template>

<script>
import { palette } from '@primevue/themes';

export default {
    inject: ['$colorScheme'],
    methods: {
        onSurfaceColorChange(event) {
            this.$colorScheme.surface = { ...{ 0: 'ffffff' }, ...palette(event.target.value) };
        }
    }
};
</script>

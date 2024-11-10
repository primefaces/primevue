<template>
    <Fieldset legend="General" :toggleable="true">
        <section class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center">
                <span class="text-sm">Primary</span>
                <input :value="$preset.semantic.primary['500']" @input="onPrimaryColorChange($event)" type="color" />
            </div>
            <div class="flex border border-surface">
                <div v-for="color of $preset.semantic.primary" :key="color" class="w-4 h-4 sm:w-8 sm:h-8" :style="{ backgroundColor: color }" :title="color"></div>
            </div>
        </section>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Transition Duration</span>
                <input v-model="$preset.semantic.transitionDuration" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Disabled Opacity</span>
                <input v-model="$preset.semantic.disabledOpacity" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Icon Size</span>
                <input v-model="$preset.semantic.iconSize" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Anchor Gutter</span>
                <input v-model="$preset.semantic.anchorGutter" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Border Radius</span>
                <input v-model="$preset.semantic.content.borderRadius" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Mask Transition Duration</span>
                <input v-model="$preset.semantic.mask.transitionDuration" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Focus Ring</div>
        <section class="grid grid-cols-4 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Width</span>
                <input v-model="$preset.semantic.focusRing.width" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Style</span>
                <input v-model="$preset.semantic.focusRing.style" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Color</span>
                <input v-model="$preset.semantic.focusRing.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Offset</span>
                <input v-model="$preset.semantic.focusRing.offset" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
        </section>
    </Fieldset>
</template>

<script>
import { palette } from '@primevue/themes';

export default {
    inject: ['$preset'],
    methods: {
        onPrimaryColorChange(event) {
            this.$preset.semantic.primary = palette(event.target.value);
        }
    }
};
</script>

<template>
    <Fieldset legend="General" :toggleable="true">
        <section class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center">
                <span class="text-sm">Primary</span>
                <input :value="$preset.semantic.primary['500']" @input="onPrimaryColorChange($event)" type="color" />
            </div>
            <DesignColorPalette :value="$preset.semantic.primary" />
        </section>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.transitionDuration" label="Transition Duration" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.disabledOpacity" label="Disabled Opacity" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.iconSize" label="Icon Size" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.anchorGutter" label="Anchor Gutter" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.content.borderRadius" label="Border Radius" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.mask.transitionDuration" label="Mask Transition Dur." />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Focus Ring</div>
        <section class="grid grid-cols-4 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.focusRing.width" label="Width" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.focusRing.style" label="Style" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.focusRing.color" label="Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.focusRing.offset" label="Offset" />
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

<template>
    <Fieldset legend="Common" :toggleable="true">
        <section class="flex justify-between items-center mb-5 gap-8">
            <div class="flex gap-2 items-center">
                <span class="text-sm">Surface</span>
                <input :value="designerService.resolveColor($colorScheme.surface['500'])" @input="onSurfaceColorChange($event)" type="color" />
            </div>
            <DesignColorPalette :value="$colorScheme.surface" />
        </section>
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Typography</div>
        <section class="grid grid-cols-4 mb-3 gap-x-2 gap-y-3">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.text.color" label="Text" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.text.hoverColor" label="Text Hover" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.text.mutedColor" label="Text Muted" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.text.hoverMutedColor" label="Text Hover Muted" type="color" />
            </div>
        </section>
        <section class="grid grid-cols-4 mb-3 gap-x-2 gap-y-3">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.content.background" label="Content BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.content.hoverBackground" label="Content Hover BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.content.borderColor" label="Content Border Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.content.color" label="Content Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.content.hoverColor" label="Content Hover Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.mask.background" label="Mask BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.mask.color" label="Mask Color" type="color" />
            </div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Accent</div>
        <section class="grid grid-cols-4 mb-3 gap-x-2 gap-y-3">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.primary.color" label="Primary" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.primary.contrastColor" label="Primary Contrast" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.primary.hoverColor" label="Primary Hover" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.primary.activeColor" label="Primary Active" type="color" />
            </div>
        </section>
        <section class="grid grid-cols-4 gap-x-2 gap-y-3">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.highlight.background" label="Highlight BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.highlight.color" label="Highlight Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.highlight.focusBackground" label="Highlight Focus BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.highlight.focusColor" label="Highlight Focus Color" type="color" />
            </div>
        </section>
    </Fieldset>
</template>

<script>
import { palette } from '@primeuix/themes';

export default {
    inject: ['$colorScheme', 'designerService'],
    methods: {
        onSurfaceColorChange(event) {
            this.$colorScheme.surface = { ...{ 0: '#ffffff' }, ...palette(event.target.value) };
        }
    }
};
</script>

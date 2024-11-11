<template>
    <Fieldset legend="Colors" :toggleable="true">
        <template v-for="(value, key) of $preset.primitive" :key="key">
            <section v-if="key !== 'borderRadius'" class="flex justify-between items-center mb-4">
                <div class="flex gap-2 items-center">
                    <span class="text-sm capitalize block w-20">{{ key }}</span>
                    <input :value="$preset.primitive[key]['500']" @input="onColorChange($event, key)" type="color" />
                </div>
                <DesignColorPalette :value="$preset.primitive[key]" />
            </section>
        </template>
    </Fieldset>
</template>

<script>
import { palette } from '@primevue/themes';

export default {
    inject: ['$preset'],
    methods: {
        onColorChange(event, color) {
            this.$preset.primitive[color] = palette(event.target.value);
        }
    }
};
</script>

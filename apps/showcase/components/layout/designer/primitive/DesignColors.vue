<template>
    <Fieldset legend="Colors" :toggleable="true">
        <template v-for="(value, key) of $preset.primitive" :key="key">
            <section v-if="key !== 'borderRadius'" class="flex justify-between items-center mb-4">
                <div class="flex gap-2 items-center">
                    <span class="text-sm capitalize block w-20">{{ key }}</span>
                    <input :value="$preset.primitive[key]['500']" @input="onColorChange($event, key)" type="color" />
                </div>
                <div class="flex border border-surface">
                    <div v-for="color of $preset.primitive[key]" :key="color" class="w-4 h-4 sm:w-8 sm:h-8" :style="{ backgroundColor: color }" :title="color"></div>
                </div>
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

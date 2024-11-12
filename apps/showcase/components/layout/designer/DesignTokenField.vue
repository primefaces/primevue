<template>
    <span class="text-sm">{{ label }}</span>
    <div class="relative">
        <input :value="modelValue" @input="onInput" type="text" :class="['border border-surface-300 dark:border-surface-600 rounded-lg py-2 px-2 w-full', { 'pr-8': type === 'color' }]" />
        <div v-if="type === 'color'" class="absolute right-[4px] top-1/2 -mt-3 w-6 h-6 rounded-md border border-surface-300 dark:border-surface-600" :style="{ backgroundColor: previewColor }"></div>
    </div>
</template>

<script>
import { $dt } from '@primevue/themes';

export default {
    emits: ['update:modelValue'],
    props: {
        label: {
            type: String,
            default: undefined
        },
        type: {
            type: String,
            default: undefined
        },
        modelValue: {
            type: null,
            default: undefined
        }
    },
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
    computed: {
        previewColor() {
            return this.modelValue && this.modelValue.startsWith('{') && this.modelValue.endsWith('}') ? $dt(this.modelValue).variable : 'transparent';
        }
    }
};
</script>

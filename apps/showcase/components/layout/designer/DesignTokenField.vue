<template>
    <span class="text-sm">{{ label }}</span>
    <div class="relative">
        <input v-if="false" type="text" :value="modelValue" @input="onInput" :class="['border border-surface-300 dark:border-surface-600 rounded-lg py-2 px-2 w-full', { 'pr-8': type === 'color' }]" />
        <AutoComplete
            :modelValue="modelValue"
            @input="onInput"
            :suggestions="items"
            @complete="search"
            unstyled
            :pt="{
                pcInputText: {
                    root: ['border border-surface-300 dark:border-surface-600 rounded-lg py-2 px-2 w-full', { 'pr-8': type === 'color' }]
                },
                overlay: 'border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 shadow-2 rounded-md',
                listContainer: 'max-h-40 overflow-auto',
                list: 'm-0 py-2 px-0 list-none',
                option: 'cursor-pointer py-1 px-2 text-sm text-surface-700 dark:text-white/80 data-[p-focus=true]:bg-surface-100 data-[p-focus=true]:dark:bg-surface-800'
            }"
            @option-select="onOptionSelect"
        />
        <div v-if="type === 'color'" class="absolute right-[4px] top-1/2 -mt-3 w-6 h-6 rounded-md border border-surface-300 dark:border-surface-600" :style="{ backgroundColor: previewColor }"></div>
    </div>
</template>

<script>
import { $dt } from '@primevue/themes';

const tokens = [
    '{primary.color}',
    '{primary.contrast.color}',
    '{primary.hover.color}',
    '{primary.active.color}',
    '{highlight.background}',
    '{highlight.focus.background}',
    '{highlight.color}',
    '{highlight.focus.color}',
    '{primary.50}',
    '{primary.100}',
    '{primary.200}',
    '{primary.300}',
    '{primary.400}',
    '{primary.500}',
    '{primary.600}',
    '{primary.700}',
    '{primary.800}',
    '{primary.900}',
    '{primary.950}',
    '{surface.0}',
    '{surface.50}',
    '{surface.100}',
    '{surface.200}',
    '{surface.300}',
    '{surface.400}',
    '{surface.500}',
    '{surface.600}',
    '{surface.700}',
    '{surface.800}',
    '{surface.900}',
    '{surface.950}',
    '{border.radius.none}',
    '{border.radius.xs}',
    '{border.radius.sm}',
    '{border.radius.md}',
    '{border.radius.lg}',
    '{border.radius.xl}'
];

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
    data() {
        return {
            items: []
        };
    },
    methods: {
        onOptionSelect(event) {
            this.$emit('update:modelValue', event.value);
        },
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
        },
        search(event) {
            const query = event.query;

            if (query.startsWith('{')) {
                this.items = tokens.filter((t) => t.startsWith(query));
            } else {
                this.items = [];
            }
        }
    },
    computed: {
        previewColor() {
            return this.modelValue && this.modelValue.startsWith('{') && this.modelValue.endsWith('}') ? $dt(this.modelValue).variable : this.modelValue;
        }
    }
};
</script>

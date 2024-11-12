<template>
    <span class="text-sm">{{ label }}</span>
    <div class="relative">
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
                overlay: 'bg-surface-0 dark:bg-surface-950 shadow-2 rounded-md',
                listContainer: 'max-h-40 overflow-auto',
                list: 'm-0 py-2 px-0 list-none',
                option: 'p-2'
            }"
        />
        <div v-if="type === 'color'" class="absolute right-[4px] top-1/2 -mt-3 w-6 h-6 rounded-md border border-surface-300 dark:border-surface-600" :style="{ backgroundColor: previewColor }"></div>
    </div>
</template>

<script>
import { $dt } from '@primevue/themes';

const tokens = [
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
    '{surface.950}'
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
        onInput(event) {
            console.log(event.target.value);
            this.$emit('update:modelValue', event.target.value);
        },
        search(event) {
            const query = event.query;

            if (query.startsWith('{')) {
                const tokenQuery = query.substring(1);

                this.items = tokens.filter((t) => t.startsWith(tokenQuery));
            } else {
                this.items = [];
            }
        }
    },
    computed: {
        previewColor() {
            return this.modelValue && this.modelValue.startsWith('{') && this.modelValue.endsWith('}') ? $dt(this.modelValue).variable : 'transparent';
        }
    }
};
</script>

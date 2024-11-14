<template>
    <div>
        <label :for="inputId" class="text-sm text-zinc-700 dark:text-white">{{ label }}</label>
        <div :id="id" class="relative">
            <AutoComplete
                :modelValue="modelValue"
                @input="onInput"
                :inputId="inputId"
                :suggestions="items"
                @complete="search"
                unstyled
                optionLabel="label"
                :showEmptyMessage="false"
                :pt="{
                    pcInputText: {
                        root: ['border border-surface-300 dark:border-surface-600 rounded-lg py-2 px-2 w-full', { 'pr-8': type === 'color' }]
                    },
                    overlay: 'border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 shadow-2 rounded-md',
                    listContainer: 'max-h-40 overflow-auto',
                    list: 'm-0 py-2 px-2 list-none',
                    loader: 'hidden',
                    option: 'cursor-pointer py-1 text-sm text-surface-700 dark:text-white/80 data-[p-focus=true]:bg-surface-100 data-[p-focus=true]:dark:bg-surface-800 rounded-md'
                }"
                @option-select="onOptionSelect"
            >
                <template #option="slotProps">
                    <div v-tooltip.left="slotProps.option.value" class="flex items-center justify-between gap-4 px-2">
                        <span>{{ slotProps.option.token }}</span>
                        <div v-if="slotProps.option.isColor" class="border border-surface-200 dark:border-surface-700 w-4 h-4 rounded-full" :style="{ backgroundColor: slotProps.option.variable }"></div>
                        <div v-else class="text-xs max-w-16 text-ellipsis whitespace-nowrap overflow-hidden">
                            {{ slotProps.option.value }}
                        </div>
                    </div>
                </template>
            </AutoComplete>
            <div v-if="type === 'color'" class="absolute right-[4px] top-1/2 -mt-3 w-6 h-6 rounded-md border border-surface-300 dark:border-surface-600" :style="{ backgroundColor: previewColor }"></div>
        </div>
    </div>
</template>

<script>
import { UniqueComponentId } from '@primevue/core/utils';
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
    inject: ['$acTokens'],
    data() {
        return {
            id: null,
            items: null
        };
    },
    created() {
        this.id = 'dt_field_' + UniqueComponentId();
    },
    methods: {
        onOptionSelect(event) {
            this.$emit('update:modelValue', event.value.label);
            event.originalEvent.stopPropagation();
        },
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
        },
        search(event) {
            const query = event.query;

            if (query.startsWith('{')) {
                this.items = this.$acTokens.filter((t) => t.label.startsWith(query));
            } else {
                this.items = [];
            }
        }
    },
    computed: {
        previewColor() {
            const tokenValue = typeof this.modelValue === 'object' ? this.modelValue.label : this.modelValue;

            return tokenValue && tokenValue.trim().length && tokenValue.startsWith('{') && tokenValue.endsWith('}') ? $dt(tokenValue).variable : tokenValue;
        },
        inputId() {
            return this.id + '_input';
        }
    }
};
</script>

<template>
    <div>
        <label :for="inputId" class="text-sm">{{ label }}</label>
        <div :id="id" class="relative">
            <AutoComplete
                :modelValue="modelValue"
                @input="onInput"
                :inputId="inputId"
                :suggestions="items"
                @complete="search"
                unstyled
                :showEmptyMessage="false"
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
    mounted() {
        this.id = 'dt_field_' + UniqueComponentId();
    },
    methods: {
        onOptionSelect(event) {
            this.$emit('update:modelValue', event.value);
            event.originalEvent.stopPropagation();
        },
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
        },
        search(event) {
            const query = event.query;

            if (query.startsWith('{')) {
                this.items = this.$acTokens.filter((t) => t.startsWith(query));
            } else {
                this.items = null;
            }
        }
    },
    computed: {
        previewColor() {
            return this.modelValue && this.modelValue.startsWith('{') && this.modelValue.endsWith('}') ? $dt(this.modelValue).variable : this.modelValue;
        },
        inputId() {
            return this.id + '_input';
        }
    }
};
</script>

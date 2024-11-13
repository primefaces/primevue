<template>
    <div>
        <label :for="inputId" class="text-sm">{{ label }}</label>
        <div :id="id" class="relative">
            <input :id="inputId" :list="listId" type="text" :value="modelValue" @input="onInput" @change="onChange" :class="['relative border border-surface-300 dark:border-surface-600 rounded-lg py-2 px-2 w-full', { 'pr-8': type === 'color' }]" />
            <datalist :id="listId" class="max-h-40 overflow-auto">
                <option v-for="item of items" :key="item">{{ item }}</option>
            </datalist>
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
        onInput(event) {
            const value = event.target.value;

            this.$emit('update:modelValue', value);

            if (value.startsWith('{')) {
                this.search(value);
            } else {
                this.items = null;
            }
        },
        onChange() {
            this.items = null;
        },
        search(query) {
            this.items = this.$acTokens.filter((t) => t.startsWith(query));
        }
    },
    computed: {
        previewColor() {
            return this.modelValue && this.modelValue.startsWith('{') && this.modelValue.endsWith('}') ? $dt(this.modelValue).variable : this.modelValue;
        },
        inputId() {
            return this.id + '_input';
        },
        listId() {
            return this.id + '_list';
        }
    }
};
</script>

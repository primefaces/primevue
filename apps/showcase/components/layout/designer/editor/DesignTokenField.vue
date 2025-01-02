<template>
    <div class="group">
        <div class="flex justify-between justify-items-center">
            <label :for="inputId" class="text-sm text-zinc-700 dark:text-white block capitalize text-ellipsis overflow-hidden w-full whitespace-nowrap" :title="label">{{ label }}</label>
            <button type="button" @click="transfer"><i class="pi pi-sort-alt !text-xs text-zinc-400 hidden group-hover:block animate-fadein"></i></button>
        </div>
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
                        root: ['border border-surface-300 dark:border-surface-600 rounded-lg py-2 px-2 w-full text-sm', { 'pr-8': type === 'color' }]
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
import set from 'lodash.set';
import unset from 'lodash.unset';

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
        },
        componentKey: {
            type: null,
            default: null
        },
        path: {
            type: String,
            default: undefined
        }
    },
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
                this.items = this.$appState.designer.acTokens.filter((t) => t.label.startsWith(query));
            } else {
                this.items = [];
            }
        },
        getPathFromColorScheme(colorScheme) {
            const lightPrefix = 'light.';
            const darkPrefix = 'dark.';

            if (colorScheme.startsWith(lightPrefix)) {
                return colorScheme.slice(lightPrefix.length);
            } else if (colorScheme.startsWith(darkPrefix)) {
                return colorScheme.slice(darkPrefix.length);
            }

            return colorScheme;
        },
        transfer(event) {
            let tokens = this.$appState.designer.theme.preset.components[this.componentKey] || this.$appState.designer.theme.preset.directives[this.componentKey];
            const colorSchemePrefix = 'colorScheme.';

            if (this.path.startsWith(colorSchemePrefix)) {
                let tokenPath = this.getPathFromColorScheme(this.path.slice(colorSchemePrefix.length));

                set(tokens, tokenPath, this.modelValue);
                unset(tokens, 'colorScheme.light.' + tokenPath);
                unset(tokens, 'colorScheme.dark.' + tokenPath);
            } else {
                set(tokens, 'colorScheme.light.' + this.path, this.modelValue);
                set(tokens, 'colorScheme.dark.' + this.path, this.modelValue);
                unset(tokens, this.path);
            }

            this.removeEmptyProps(tokens);

            event.preventDefault();
        },
        removeEmptyProps(obj) {
            if (typeof obj !== 'object' || obj === null) {
                return obj;
            }

            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const value = obj[key];

                    if (typeof value === 'object' && value !== null) {
                        this.removeEmptyProps(value);
                    }

                    if (typeof value === 'object' && value !== null && Object.keys(value).length === 0) {
                        delete obj[key];
                    }
                }
            }

            return obj;
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

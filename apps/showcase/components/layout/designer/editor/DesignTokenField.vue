<template>
    <div class="group">
        <div class="flex justify-between justify-items-center">
            <label :for="inputId" class="text-xs text-zinc-700 dark:text-white/70 block capitalize text-ellipsis overflow-hidden w-full whitespace-nowrap mb-px" :title="label">{{ label }}</label>
            <button v-if="switchable" type="button" @click="transfer" tabindex="-1">
                <i class="pi pi-sort-alt !text-xs text-zinc-500 dark:text-white/50 hidden group-hover:block animate-fadein" title="Transfer between color scheme and common"></i>
            </button>
        </div>
        <div :id="id" class="relative">
            <AutoComplete
                :modelValue="modelValue"
                @input="onInput"
                @blur="onBlur"
                :inputId="inputId"
                :suggestions="items"
                @complete="search"
                unstyled
                optionLabel="label"
                :showEmptyMessage="false"
                appendTo="self"
                :disabled="$appState.designer.theme.origin !== 'web'"
                :pt="{
                    pcInputText: {
                        root: {
                            maxlength: 100,
                            class: [
                                'border text-zinc-950 dark:text-white rounded-lg py-2 px-2 w-full text-xs',
                                { 'pr-6': type === 'color', 'border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-500/30': invalid, 'border-surface-300 dark:border-surface-600': !invalid }
                            ]
                        }
                    },
                    overlay: 'border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 shadow-2 rounded-md',
                    listContainer: 'max-h-40 overflow-auto',
                    list: 'm-0 py-2 px-2 list-none',
                    loader: 'hidden',
                    option: 'cursor-pointer py-1 text-sm text-surface-700 dark:text-white/80 data-[p-focused=true]:bg-surface-100 data-[p-focused=true]:dark:bg-surface-800 rounded-md'
                }"
                @option-select="onOptionSelect"
            >
                <template #option="slotProps">
                    <div v-tooltip.left="slotProps.option.value" class="flex items-center justify-between gap-4 px-2">
                        <span>{{ slotProps.option.token }}</span>
                        <div v-if="slotProps.option.isColor" class="border border-surface-200 dark:border-surface-700 w-4 h-4 rounded-full" :style="{ backgroundColor: designerService.resolveColorPlain(slotProps.option.value) }"></div>
                        <div v-else class="text-xs max-w-16 text-ellipsis whitespace-nowrap overflow-hidden">
                            {{ slotProps.option.value }}
                        </div>
                    </div>
                </template>
            </AutoComplete>
            <div v-if="type === 'color'" class="absolute right-[4px] top-1/2 -mt-2 w-4 h-4 rounded-md border border-surface-300 dark:border-surface-600" :style="{ backgroundColor: previewColor }"></div>
        </div>
    </div>
</template>

<script>
import { $dt } from '@primeuix/themes';
import { uuid } from '@primeuix/utils';

export default {
    emits: ['update:modelValue'],
    inject: ['designerService'],
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
        },
        switchable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            id: null,
            items: null
        };
    },
    created() {
        this.id = uuid('dt_field_');
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
            let tokens = this.$appState.designer.theme.preset.components[this.componentKey];
            const colorSchemePrefix = 'colorScheme.';

            if (this.path.startsWith(colorSchemePrefix)) {
                let tokenPath = this.getPathFromColorScheme(this.path.slice(colorSchemePrefix.length));

                this.set(tokens, tokenPath, this.modelValue);
                this.unset(tokens, 'colorScheme.light.' + tokenPath);
                this.unset(tokens, 'colorScheme.dark.' + tokenPath);
            } else {
                this.set(tokens, 'colorScheme.light.' + this.path, this.modelValue);
                this.set(tokens, 'colorScheme.dark.' + this.path, this.modelValue);
                this.unset(tokens, this.path);
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
        },
        set(obj, path, value) {
            if (Object(obj) !== obj) return obj;
            const pathArray = Array.isArray(path) ? path : path.toString().match(/[^.[\]]+/g) || [];

            pathArray.reduce((acc, key, i) => {
                if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
                    return acc;
                }

                if (i === pathArray.length - 1) {
                    acc[key] = value;

                    return value;
                }

                acc[key] = Object(acc[key]) === acc[key] ? acc[key] : {};

                return acc[key];
            }, obj);

            return obj;
        },
        unset(obj, path) {
            if (Object(obj) !== obj) return false;

            const pathArray = Array.isArray(path) ? path : path.toString().match(/[^.[\]]+/g) || [];

            if (pathArray.length === 0) return false;

            if (pathArray.includes('__proto__') || pathArray.includes('constructor') || pathArray.includes('prototype')) {
                return false;
            }

            let current = obj;
            const length = pathArray.length;

            for (let i = 0; i < length - 1; i++) {
                const key = pathArray[i];

                if (current[key] == null) {
                    return false;
                }

                current = current[key];
            }

            const lastKey = pathArray[length - 1];

            if (!(lastKey in current)) {
                return false;
            }

            delete current[lastKey];

            return true;
        },
        onBlur() {
            this.designerService.refreshACTokens();
        }
    },
    computed: {
        previewColor() {
            const tokenValue = typeof this.modelValue === 'object' ? this.modelValue.label : this.modelValue;

            return tokenValue && tokenValue.trim().length && tokenValue.startsWith('{') && tokenValue.endsWith('}') ? $dt(tokenValue).variable : tokenValue;
        },
        inputId() {
            return this.id + '_input';
        },
        invalid() {
            return this.modelValue == null || this.modelValue.trim().length === 0 || this.modelValue.startsWith(this.componentKey);
        }
    }
};
</script>

<template>
    <div :class="cx('root')" role="group" :aria-labelledby="ariaLabelledby" v-bind="ptmi('root')" :data-p="dataP">
        <template v-for="(option, index) of options" :key="getOptionRenderKey(option)">
            <ToggleButton
                :modelValue="isSelected(option)"
                :onLabel="getOptionLabel(option)"
                :offLabel="getOptionLabel(option)"
                :disabled="disabled || isOptionDisabled(option)"
                :unstyled="unstyled"
                :size="size"
                :readonly="isOptionReadonly(option)"
                @change="onOptionSelect($event, option, index)"
                :pt="ptm('pcToggleButton')"
            >
                <template v-if="$slots.option" #default>
                    <slot name="option" :option="option" :index="index">
                        <span v-bind="ptm('pcToggleButton')['label']">{{ getOptionLabel(option) }}</span>
                    </slot>
                </template>
            </ToggleButton>
        </template>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
import { equals, resolveFieldData } from '@primeuix/utils/object';
import Ripple from 'primevue/ripple';
import ToggleButton from 'primevue/togglebutton';
import BaseSelectButton from './BaseSelectButton.vue';

export default {
    name: 'SelectButton',
    extends: BaseSelectButton,
    inheritAttrs: false,
    emits: ['change'],
    methods: {
        getOptionLabel(option) {
            return this.optionLabel ? resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return this.optionValue ? resolveFieldData(option, this.optionValue) : option;
        },
        getOptionRenderKey(option) {
            return this.dataKey ? resolveFieldData(option, this.dataKey) : this.getOptionLabel(option);
        },
        isOptionDisabled(option) {
            return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : false;
        },
        isOptionReadonly(option) {
            if (this.allowEmpty) return false;

            let selected = this.isSelected(option);

            if (this.multiple) {
                return selected && this.d_value.length === 1;
            } else {
                return selected;
            }
        },
        onOptionSelect(event, option, index) {
            if (this.disabled || this.isOptionDisabled(option) || this.isOptionReadonly(option)) {
                return;
            }

            let selected = this.isSelected(option);
            let optionValue = this.getOptionValue(option);
            let newValue;

            if (this.multiple) {
                if (selected) {
                    newValue = this.d_value.filter((val) => !equals(val, optionValue, this.equalityKey));
                    if (!this.allowEmpty && newValue.length === 0) return;
                } else {
                    newValue = this.d_value ? [...this.d_value, optionValue] : [optionValue];
                }
            } else {
                if (selected && !this.allowEmpty) return;
                newValue = selected ? null : optionValue;
            }

            this.writeValue(newValue, event);
            this.$emit('change', { originalEvent: event, value: newValue });
        },
        isSelected(option) {
            let selected = false;
            let optionValue = this.getOptionValue(option);

            if (this.multiple) {
                if (this.d_value) {
                    for (let val of this.d_value) {
                        if (equals(val, optionValue, this.equalityKey)) {
                            selected = true;
                            break;
                        }
                    }
                }
            } else {
                selected = equals(this.d_value, optionValue, this.equalityKey);
            }

            return selected;
        }
    },
    computed: {
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        },
        dataP() {
            return cn({
                invalid: this.$invalid
            });
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        ToggleButton
    }
};
</script>

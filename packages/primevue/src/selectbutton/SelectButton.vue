<template>
    <div :class="cx('root')" role="group" :aria-labelledby="ariaLabelledby" v-bind="ptmi('root')">
        <template v-for="(option, index) of options" :key="getOptionRenderKey(option)">
            <ToggleButton
                :modelValue="isSelected(option)"
                :onLabel="getOptionLabel(option)"
                :offLabel="getOptionLabel(option)"
                :disabled="disabled || isOptionDisabled(option)"
                :unstyled="unstyled"
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
import { resolveFieldData, equals } from '@primeuix/utils/object';
import Ripple from 'primevue/ripple';
import ToggleButton from 'primevue/togglebutton';
import BaseSelectButton from './BaseSelectButton.vue';

export default {
    name: 'SelectButton',
    extends: BaseSelectButton,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change'],
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
        onOptionSelect(event, option, index) {
            if (this.disabled || this.isOptionDisabled(option)) {
                return;
            }

            let selected = this.isSelected(option);

            if (selected && !this.allowEmpty) {
                return;
            }

            let optionValue = this.getOptionValue(option);
            let newValue;

            if (this.multiple) {
                if (selected) newValue = this.modelValue.filter((val) => !equals(val, optionValue, this.equalityKey));
                else newValue = this.modelValue ? [...this.modelValue, optionValue] : [optionValue];
            } else {
                newValue = selected ? null : optionValue;
            }

            this.$emit('update:modelValue', newValue);
            this.$emit('change', { event: event, value: newValue });
        },
        isSelected(option) {
            let selected = false;
            let optionValue = this.getOptionValue(option);

            if (this.multiple) {
                if (this.modelValue) {
                    for (let val of this.modelValue) {
                        if (equals(val, optionValue, this.equalityKey)) {
                            selected = true;
                            break;
                        }
                    }
                }
            } else {
                selected = equals(this.modelValue, optionValue, this.equalityKey);
            }

            return selected;
        }
    },
    computed: {
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
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

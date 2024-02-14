<template>
    <div ref="container" :class="cx('root')" role="group" :aria-labelledby="ariaLabelledby" v-bind="ptmi('root')">
        <div
            v-for="(option, i) of options"
            :key="getOptionRenderKey(option)"
            v-ripple
            :tabindex="findTabindex(option, i)"
            :aria-label="getOptionLabel(option)"
            :role="multiple ? 'checkbox' : 'radio'"
            :aria-checked="isSelected(option)"
            :aria-disabled="isOptionDisabled(option)"
            :class="cx('button', { option })"
            @click="onOptionSelect($event, option, i)"
            @keydown="onKeydown($event, option, i)"
            @focus="onFocus($event)"
            @blur="onBlur($event, option)"
            v-bind="getPTOptions(option, 'button')"
            :data-p-highlight="isSelected(option)"
            :data-p-disabled="isOptionDisabled(option)"
        >
            <slot name="option" :option="option" :index="i" :class="cx('label')">
                <span :class="cx('label')" v-bind="getPTOptions(option, 'label')">{{ getOptionLabel(option) }}</span>
            </slot>
        </div>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';
import { DomHandler, ObjectUtils } from 'primevue/utils';
import BaseSelectButton from './BaseSelectButton.vue';

export default {
    name: 'SelectButton',
    extends: BaseSelectButton,
    inheritAttrs: false,
    emits: ['update:modelValue', 'focus', 'blur', 'change'],
    data() {
        return {
            focusedIndex: 0
        };
    },
    mounted() {
        this.defaultTabIndexes();
    },
    methods: {
        defaultTabIndexes() {
            let opts = DomHandler.find(this.$refs.container, '[data-pc-section="button"]');
            let firstHighlight = DomHandler.findSingle(this.$refs.container, '[data-p-highlight="true"]');

            for (let i = 0; i < opts.length; i++) {
                if ((DomHandler.getAttribute(opts[i], 'data-p-highlight') === true && ObjectUtils.equals(opts[i], firstHighlight)) || (firstHighlight === null && i == 0)) {
                    this.focusedIndex = i;
                }
            }
        },
        getOptionLabel(option) {
            return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        getOptionRenderKey(option) {
            return this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option);
        },
        getPTOptions(option, key) {
            return this.ptm(key, {
                context: {
                    active: this.isSelected(option),
                    disabled: this.isOptionDisabled(option),
                    option
                }
            });
        },
        isOptionDisabled(option) {
            return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
        },
        onOptionSelect(event, option, index) {
            if (this.disabled || this.isOptionDisabled(option)) {
                return;
            }

            let selected = this.isSelected(option);

            if (selected && !(this.unselectable && this.allowEmpty)) {
                return;
            }

            let optionValue = this.getOptionValue(option);
            let newValue;

            if (this.multiple) {
                if (selected) newValue = this.modelValue.filter((val) => !ObjectUtils.equals(val, optionValue, this.equalityKey));
                else newValue = this.modelValue ? [...this.modelValue, optionValue] : [optionValue];
            } else {
                newValue = selected ? null : optionValue;
            }

            this.focusedIndex = index;
            this.$emit('update:modelValue', newValue);
            this.$emit('change', { event: event, value: newValue });
        },
        isSelected(option) {
            let selected = false;
            let optionValue = this.getOptionValue(option);

            if (this.multiple) {
                if (this.modelValue) {
                    for (let val of this.modelValue) {
                        if (ObjectUtils.equals(val, optionValue, this.equalityKey)) {
                            selected = true;
                            break;
                        }
                    }
                }
            } else {
                selected = ObjectUtils.equals(this.modelValue, optionValue, this.equalityKey);
            }

            return selected;
        },
        onKeydown(event, option, index) {
            switch (event.code) {
                case 'Space': {
                    this.onOptionSelect(event, option, index);
                    event.preventDefault();
                    break;
                }

                case 'ArrowDown':

                case 'ArrowRight': {
                    this.onArrowRightKey(event.target);
                    event.preventDefault();
                    break;
                }

                case 'ArrowUp':

                case 'ArrowLeft': {
                    this.onArrowLeftKey(event.target);
                    event.preventDefault();
                    break;
                }

                default:
                    //no op
                    break;
            }
        },
        onArrowRightKey(target) {
            const nextEl = this.findNextElement(target);

            if (nextEl) {
                this.focusedIndex = ObjectUtils.findIndexInList(nextEl, this.findAllElements());
                DomHandler.focus(nextEl);
            }
        },
        onArrowLeftKey(target) {
            const prevEl = this.findPrevElement(target);

            if (prevEl) {
                this.focusedIndex = ObjectUtils.findIndexInList(prevEl, this.findAllElements());
                DomHandler.focus(prevEl);
            }
        },
        findAllElements() {
            return DomHandler.find(this.$refs.container, '[data-pc-section="button"]');
        },
        findNextElement(target) {
            if (target.nextElementSibling) {
                if (DomHandler.getAttribute(target.nextElementSibling, 'data-p-disabled')) {
                    return this.findNextElement(target.nextElementSibling);
                }

                return target.nextElementSibling;
            }

            return null;
        },
        findPrevElement(target) {
            if (target.previousElementSibling) {
                if (DomHandler.getAttribute(target.previousElementSibling, 'data-p-disabled')) {
                    return this.findPrevElement(target.previousElementSibling);
                }

                return target.previousElementSibling;
            }

            return null;
        },
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event, option) {
            if (event.target && event.relatedTarget && event.target.parentElement !== event.relatedTarget.parentElement) {
                this.defaultTabIndexes();
            }

            this.$emit('blur', event, option);
        },
        findTabindex(option, index) {
            return this.disabled || this.isOptionDisabled(option) || index !== this.focusedIndex ? '-1' : '0';
        }
    },
    computed: {
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>

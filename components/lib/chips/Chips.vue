<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <ul
            ref="container"
            :class="cx('container')"
            tabindex="-1"
            role="listbox"
            aria-orientation="horizontal"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-activedescendant="focused ? focusedOptionId : undefined"
            @click="onWrapperClick()"
            @focus="onContainerFocus"
            @blur="onContainerBlur"
            @keydown="onContainerKeyDown"
            v-bind="ptm('container')"
        >
            <li
                v-for="(val, i) of modelValue"
                :key="`${i}_${val}`"
                :id="id + '_chips_item_' + i"
                role="option"
                :class="cx('token', { index: i })"
                :aria-label="val"
                :aria-selected="true"
                :aria-setsize="modelValue.length"
                :aria-posinset="i + 1"
                v-bind="ptm('token')"
                :data-p-focused="focusedIndex === i"
            >
                <slot name="chip" :class="cx('label')" :value="val">
                    <span :class="cx('label')" v-bind="ptm('label')">{{ val }}</span>
                </slot>
                <slot name="removetokenicon" :class="cx('removeTokenIcon')" :index="i" :onClick="(event) => removeItem(event, i)" :removeCallback="(event) => removeItem(event, i)">
                    <component :is="removeTokenIcon ? 'span' : 'TimesCircleIcon'" :class="[cx('removeTokenIcon'), removeTokenIcon]" @click="removeItem($event, i)" aria-hidden="true" v-bind="ptm('removeTokenIcon')" />
                </slot>
            </li>
            <li :class="cx('inputToken')" role="option" v-bind="ptm('inputToken')">
                <input
                    ref="input"
                    :id="inputId"
                    type="text"
                    :class="inputClass"
                    :style="inputStyle"
                    :disabled="disabled || maxedOut"
                    :placeholder="placeholder"
                    :aria-invalid="invalid || undefined"
                    @focus="onFocus($event)"
                    @blur="onBlur($event)"
                    @input="onInput"
                    @keydown="onKeyDown($event)"
                    @paste="onPaste($event)"
                    v-bind="{ ...inputProps, ...ptm('input') }"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import TimesCircleIcon from 'primevue/icons/timescircle';
import { UniqueComponentId } from 'primevue/utils';
import BaseChips from './BaseChips.vue';

export default {
    name: 'Chips',
    extends: BaseChips,
    inheritAttrs: false,
    emits: ['update:modelValue', 'add', 'remove', 'focus', 'blur'],
    data() {
        return {
            id: this.$attrs.id,
            inputValue: null,
            focused: false,
            focusedIndex: null
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();
    },
    methods: {
        onWrapperClick() {
            this.$refs.input.focus();
        },
        onInput(event) {
            this.inputValue = event.target.value;
            this.focusedIndex = null;
        },
        onFocus(event) {
            this.focused = true;
            this.focusedIndex = null;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.focusedIndex = null;

            if (this.addOnBlur) {
                this.addItem(event, event.target.value, false);
            }

            this.$emit('blur', event);
        },
        onKeyDown(event) {
            const inputValue = event.target.value;

            switch (event.code) {
                case 'Backspace':
                    if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
                        if (this.focusedIndex !== null) {
                            this.removeItem(event, this.focusedIndex);
                        } else this.removeItem(event, this.modelValue.length - 1);
                    }

                    break;

                case 'Enter':
                case 'NumpadEnter':
                    if (inputValue && inputValue.trim().length && !this.maxedOut) {
                        this.addItem(event, inputValue, true);
                    }

                    break;

                case 'ArrowLeft':
                    if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
                        this.$refs.container.focus();
                    }

                    break;

                case 'ArrowRight':
                    event.stopPropagation();
                    break;

                default:
                    if (this.separator) {
                        if (this.separator === event.key || event.key.match(this.separator)) {
                            this.addItem(event, inputValue, true);
                        }
                    }

                    break;
            }
        },
        onPaste(event) {
            if (this.separator) {
                let separator = this.separator.replace('\\n', '\n').replace('\\r', '\r').replace('\\t', '\t');
                let pastedData = (event.clipboardData || window['clipboardData']).getData('Text');

                if (pastedData) {
                    let value = this.modelValue || [];
                    let pastedValues = pastedData.split(separator);

                    pastedValues = pastedValues.filter((val) => this.allowDuplicate || value.indexOf(val) === -1);
                    value = [...value, ...pastedValues];
                    this.updateModel(event, value, true);
                }
            }
        },
        onContainerFocus() {
            this.focused = true;
        },
        onContainerBlur() {
            this.focusedIndex = -1;
            this.focused = false;
        },
        onContainerKeyDown(event) {
            switch (event.code) {
                case 'ArrowLeft':
                    this.onArrowLeftKeyOn(event);
                    break;

                case 'ArrowRight':
                    this.onArrowRightKeyOn(event);
                    break;

                case 'Backspace':
                    this.onBackspaceKeyOn(event);
                    break;

                default:
                    break;
            }
        },
        onArrowLeftKeyOn() {
            if (this.inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
                this.focusedIndex = this.focusedIndex === null ? this.modelValue.length - 1 : this.focusedIndex - 1;
                if (this.focusedIndex < 0) this.focusedIndex = 0;
            }
        },
        onArrowRightKeyOn() {
            if (this.inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
                if (this.focusedIndex === this.modelValue.length - 1) {
                    this.focusedIndex = null;
                    this.$refs.input.focus();
                } else {
                    this.focusedIndex++;
                }
            }
        },
        onBackspaceKeyOn(event) {
            if (this.focusedIndex !== null) {
                this.removeItem(event, this.focusedIndex);
            }
        },
        updateModel(event, value, preventDefault) {
            this.$emit('update:modelValue', value);
            this.$emit('add', {
                originalEvent: event,
                value: value
            });
            this.$refs.input.value = '';
            this.inputValue = '';

            setTimeout(() => {
                this.maxedOut && (this.focused = false);
            }, 0);

            if (preventDefault) {
                event.preventDefault();
            }
        },
        addItem(event, item, preventDefault) {
            if (item && item.trim().length) {
                let value = this.modelValue ? [...this.modelValue] : [];

                if (this.allowDuplicate || value.indexOf(item) === -1) {
                    value.push(item);
                    this.updateModel(event, value, preventDefault);
                }
            }
        },
        removeItem(event, index) {
            if (this.disabled) {
                return;
            }

            let values = [...this.modelValue];
            const removedItem = values.splice(index, 1);

            this.focusedIndex = null;
            this.$refs.input.focus();
            this.$emit('update:modelValue', values);
            this.$emit('remove', {
                originalEvent: event,
                value: removedItem
            });
        }
    },
    computed: {
        maxedOut() {
            return this.max && this.modelValue && this.max === this.modelValue.length;
        },
        focusedOptionId() {
            return this.focusedIndex !== null ? `${this.id}_chips_item_${this.focusedIndex}` : null;
        }
    },
    components: {
        TimesCircleIcon: TimesCircleIcon
    }
};
</script>

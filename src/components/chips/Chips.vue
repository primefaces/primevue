<template>
    <div :class="containerClass">
        <ul ref="container" class="p-inputtext p-chips-multiple-container" tabindex="-1" role="listbox" aria-orientation="horizontal" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" :aria-activedescendant="focused ? focusedOptionId : undefined"
            @click="onWrapperClick()" @focus="onContainerFocus" @blur="onContainerBlur" @keydown="onContainerKeyDown">
            <li v-for="(val,i) of modelValue" :key="`${i}_${val}`" :id="id + '_chips_item_' + i" role="option" :class="['p-chips-token', {'p-focus': focusedIndex === i}]"
                :aria-label="val" :aria-selected="true" :aria-setsize="modelValue.length" :aria-posinset="i + 1">
                <slot name="chip" :value="val">
                    <span class="p-chips-token-label">{{val}}</span>
                </slot>
                <span class="p-chips-token-icon pi pi-times-circle" @click="removeItem($event, i)" aria-hidden="true"></span>
            </li>
            <li class="p-chips-input-token" role="option">
                <input ref="input" type="text" :id="inputId" :class="inputClass" :style="inputStyle" :disabled="disabled || maxedOut" :placeholder="placeholder"
                    @focus="onFocus($event)" @blur="onBlur($event)" @input="onInput" @keydown="onKeyDown($event)" @paste="onPaste($event)" v-bind="inputProps">
            </li>
        </ul>
    </div>
</template>

<script>
import {UniqueComponentId} from 'primevue/utils';

export default {
    name: 'Chips',
    emits: ['update:modelValue', 'add', 'remove', 'focus', 'blur'],
    props: {
        modelValue: {
            type: Array,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        separator: {
            type: String,
            default: null
        },
        addOnBlur: {
            type: Boolean,
            default: null
        },
        allowDuplicate: {
            type: Boolean,
            default: true
        },
        placeholder: {
            type: String,
            default: null
        },
        inputId: null,
        inputClass: null,
        inputStyle: null,
        inputProps: null,
        disabled: {
            type: Boolean,
            default: false
        },
        'aria-labelledby': {
            type: String,
			default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    data() {
        return {
            id: UniqueComponentId(),
            inputValue: null,
            focused: false,
            focusedIndex: null
        };
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

            switch(event.code) {
                case 'Backspace':
                    if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
                        if (this.focusedIndex !== null) {
                            this.removeItem(event, this.focusedIndex);
                        }
                        else this.removeItem(event, this.modelValue.length - 1);
                    }
                break;

                case 'Enter':
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
                        if (this.separator === ',' && event.key === ',') {
                            this.addItem(event, inputValue, true);
                        }
                    }
                break;
            }
        },
        onPaste(event) {
            if (this.separator) {
                let pastedData = (event.clipboardData || window['clipboardData']).getData('Text');
                if (pastedData) {
                    let value = this.modelValue || [];
                    let pastedValues = pastedData.split(this.separator);
                    pastedValues = pastedValues.filter(val => (this.allowDuplicate || value.indexOf(val) === -1));
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
                }
                else {
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

            if (preventDefault) {
                event.preventDefault();
            }
        },
        addItem(event, item, preventDefault) {
            if (item && item.trim().length) {
                let value = this.modelValue ? [...this.modelValue]: [];
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
        containerClass() {
            return ['p-chips p-component p-inputwrapper', {
                'p-disabled': this.disabled,
                'p-focus': this.focused,
                'p-inputwrapper-filled': ((this.modelValue && this.modelValue.length) || (this.inputValue && this.inputValue.length)),
                'p-inputwrapper-focus': this.focused
            }];
        },
        focusedOptionId() {
            return this.focusedIndex !== null ? `${this.id}_chips_item_${this.focusedIndex}` : null;
        }
    }
}
</script>

<style>
.p-chips {
    display: inline-flex;
}

.p-chips-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-chips-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}

.p-chips-input-token {
    flex: 1 1 auto;
    display: inline-flex;
}

.p-chips-token-icon {
    cursor: pointer;
}

.p-chips-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
}

.p-fluid .p-chips {
    display: flex;
}
</style>

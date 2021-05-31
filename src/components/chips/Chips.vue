<template>
    <div :class="containerClass" :style="style">
        <ul :class="['p-inputtext p-chips-multiple-container', {'p-disabled': $attrs.disabled, 'p-focus': focused}]" @click="onWrapperClick()">
            <li v-for="(val,i) of modelValue" :key="`${i}_${val}`" class="p-chips-token">
                <slot name="chip" :value="val">
                    <span class="p-chips-token-label">{{val}}</span>
                </slot>
                <span class="p-chips-token-icon pi pi-times-circle" @click="removeItem($event, i)"></span>
            </li>
            <li class="p-chips-input-token">
                <input ref="input" type="text" v-bind="$attrs" @focus="onFocus" @blur="onBlur($event)" @input="onInput" @keydown="onKeyDown($event)" @paste="onPaste($event)"
                     :disabled="$attrs.disabled || maxedOut">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Chips',
    inheritAttrs: false,
    emits: ['update:modelValue', 'add', 'remove'],
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
        class: null,
        style: null
    },
    data() {
        return {
            inputValue: null,
            focused: false
        };
    },
    methods: {
        onWrapperClick() {
            this.$refs.input.focus();
        },
        onInput(event) {
            this.inputValue = event.target.value;
        },
        onFocus() {
            this.focused = true;
        },
        onBlur(event) {
            this.focused = false;
            if (this.addOnBlur) {
                this.addItem(event, event.target.value, false);
            }
        },
        onKeyDown(event) {
            const inputValue = event.target.value;

            switch(event.which) {
                //backspace
                case 8:
                    if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
                        this.removeItem(event, this.modelValue.length - 1);
                    }
                break;

                //enter
                case 13:
                    if (inputValue && inputValue.trim().length && !this.maxedOut) {
                        this.addItem(event, inputValue, true);
                    }
                break;

                default:
                    if (this.separator) {
                        if (this.separator === ',' && event.which === 188) {
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
            if (this.$attrs.disabled) {
                return;
            }

            let values = [...this.modelValue];
            const removedItem = values.splice(index, 1);
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
            return ['p-chips p-component p-inputwrapper', this.class, {
                'p-inputwrapper-filled': ((this.modelValue && this.modelValue.length) || (this.inputValue && this.inputValue.length)),
                'p-inputwrapper-focus': this.focused
            }];
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

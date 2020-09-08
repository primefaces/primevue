<template>
    <div :class="containerClass">
        <ul :class="['p-inputtext p-chips-multiple-container', {'p-disabled': $attrs.disabled, 'p-focus': focused}]" @click="onWrapperClick()">
            <li v-for="(val,i) of value" :key="`${i}_${val}`" class="p-chips-token">
                <slot name="chip" :value="val">
                    <span class="p-chips-token-label">{{val}}</span>
                    <span class="p-chips-token-icon pi pi-times-circle" @click="removeItem($event, i)"></span>
                </slot>
            </li>
            <li class="p-chips-input-token">
                <input ref="input" type="text" @focus="onFocus($event)" @blur="onBlur($event)" :placeholder="placeholder" @input="inputValue = $event.target.value"
                    @keydown="onKeyDown($event)" @paste="onPaste($event)" :disabled="$attrs.disabled || maxedOut" :aria-labelledby="ariaLabelledBy">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        value: {
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
        ariaLabelledBy: {
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
        }
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
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            if (this.addOnBlur) {
                this.addItem(event, event.target.value, false);
            }
            this.$emit('blur', event);
        },
        onKeyDown(event) {
            const inputValue = event.target.value;

            switch(event.which) {
                //backspace
                case 8:
                    if (inputValue.length === 0 && this.value && this.value.length > 0) {
                        this.removeItem(event, this.value.length - 1);
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
                    let value = this.value || [];
                    let pastedValues = pastedData.split(this.separator);
                    pastedValues = pastedValues.filter(val => (this.allowDuplicate || value.indexOf(val) === -1));
                    value = [...value, ...pastedValues];
                    this.updateModel(event, value, true);
                }
            }
        },
        updateModel(event, value, preventDefault) {
            this.$emit('input', value);
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
                let value = this.value ? [...this.value]: [];
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

            let values = [...this.value];
            const removedItem = values.splice(index, 1);
            this.$emit('input', values);
            this.$emit('remove', {
                originalEvent: event,
                value: removedItem
            });
        }
    },
    computed: {
        maxedOut() {
            return this.max && this.value && this.max === this.value.length;
        },
        containerClass() {
            return ['p-chips p-component p-inputwrapper', {
                'p-inputwrapper-filled': ((this.value && this.value.length) || (this.inputValue && this.inputValue.length)),
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

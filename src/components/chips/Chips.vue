<template>
    <div :class="['p-chips p-component', {'p-inputwrapper-filled': value, 'p-inputwrapper-focus': focused}]">
        <ul :class="['p-inputtext', {'p-disabled': $attrs.disabled, 'p-focus': focused}]" @click="onWrapperClick()">
            <li v-for="(val,i) of value" :key="`${i}_${val}`" class="p-chips-token p-highlight">
                <slot name="chip" :value="val">
                    <span class="p-chips-token-icon pi pi-fw pi-times" @click="removeItem($event, i)"></span>
                    <span class="p-chips-token-label">{{val}}</span>
                </slot>
            </li>
            <li class="p-chips-input-token">
                <input ref="input" type="text" class="p-inputtext p-component" @focus="onFocus($event)" @blur="onBlur($event)" :placeholder="placeholder"
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
        }
    }
}
</script>

<style>
.p-chips {
    display: inline-block;
}

.p-chips > ul.p-inputtext {
    clear: left;
    cursor: text;
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    padding: 0 .25em;
}

.p-chips-token {
    cursor: default;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    padding: .125em .5em;
    white-space: nowrap;
    position: relative;
    margin-right: .125em;
    border: 0 none;
    font-size: .9em;
}

.p-chips-token .p-chips-token-label {
    display: block;
    margin-right: 2em;
}

.p-chips > .p-disabled .p-chips-token-label {
    margin-right: 0;
}

.p-chips-token .p-chips-token-icon {
    margin-top: -.5em;
    position: absolute;
    right: 0.2em;
    top: 50%;
    cursor: pointer;
}

.p-chips-input-token {
    display: inline-block;
    vertical-align: middle;
    list-style-type: none;
    margin: 0 0 0 .125em;
    padding: .25em .25em .25em 0;
}

.p-chips-input-token .p-inputtext {
    border: 0 none;
    width: 10em;
    outline: medium none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
}

.p-fluid .p-chips {
    display: block;
}
</style>

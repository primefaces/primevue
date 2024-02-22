<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <template v-for="i in length" :key="i">
            <slot :events="getTemplateEvents(i - 1)" :attrs="getTemplateAttrs(i - 1)">
                <OtpInputText
                    :value="tokens[i - 1]"
                    :type="inputType"
                    :class="cx('input')"
                    :inputmode="inputMode"
                    @input="onInput($event, i - 1)"
                    @focus="onFocus($event)"
                    @blur="onBlur($event)"
                    @paste="onPaste($event)"
                    @keydown="onKeyDown($event)"
                    :pt="ptm('input')"
                />
            </slot>
        </template>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import BaseInputOtp from './BaseInputOtp.vue';

export default {
    name: 'InputOtp',
    extends: BaseInputOtp,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change', 'focus', 'blur'],
    data() {
        return {
            tokens: []
        };
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(newValue) {
                this.tokens = newValue ? newValue.split('') : new Array(this.length);
            }
        }
    },
    methods: {
        getTemplateAttrs(index) {
            return {
                value: this.tokens[index]
            };
        },
        getTemplateEvents(index) {
            return {
                input: (event) => this.onInput(event, index),
                keydown: (event) => this.onKeyDown(event),
                focus: (event) => this.onFocus(event),
                blur: (event) => this.onBlur(event),
                paste: (event) => this.onPaste(event)
            };
        },
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    checked: this.checked,
                    disabled: this.disabled
                }
            });
        },
        onInput(event, index) {
            this.tokens[index] = event.target.value;
            this.updateModel(event);

            if (event.inputType === 'deleteContentBackward') {
                this.moveToPrev(event);
            } else if (event.inputType === 'insertText' || event.inputType === 'deleteContentForward') {
                this.moveToNext(event);
            }
        },
        updateModel(event) {
            const newValue = this.tokens.join('');

            this.$emit('update:modelValue', newValue);
            this.$emit('change', {
                originalEvent: event,
                value: newValue
            });
        },
        moveToPrev(event) {
            var prevElement = event.target.previousElementSibling;

            if (prevElement) {
                prevElement.focus();
                prevElement.select();
            }
        },
        moveToNext(event) {
            var nextElement = event.target.nextElementSibling;

            if (nextElement) {
                nextElement.focus();
                nextElement.select();
            }
        },
        onFocus(event) {
            event.target.select();
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('blur', event);
        },
        onKeyDown(event) {
            const keyCode = event.keyCode;

            switch (keyCode) {
                case 37:
                    this.moveToPrev(event);
                    event.preventDefault();

                    break;

                case 38:
                case 40:
                    event.preventDefault();

                    break;

                case 8:
                    if (event.target.value.length === 0) {
                        this.moveToPrev(event);
                        event.preventDefault();
                    }

                    break;

                case 40:
                    event.preventDefault();

                    break;

                case 39:
                    this.moveToNext(event);
                    event.preventDefault();

                    break;

                default:
                    if (this.integerOnly && !(event.keyCode >= 48 && event.keyCode <= 57)) {
                        event.preventDefault();
                    }

                    break;
            }
        },
        onPaste(event) {
            let paste = event.clipboardData.getData('text');

            if (paste.length) {
                let pastedCode = paste.substring(0, this.length + 1);

                if (!this.isIntegerOnly || !isNaN(pastedCode)) {
                    this.tokens = pastedCode.split('');
                    this.updateModel(event);
                }
            }

            event.preventDefault();
        }
    },
    computed: {
        inputMode() {
            return this.integerOnly ? 'number' : 'text';
        },
        inputType() {
            return this.mask ? 'password' : 'text';
        }
    },
    components: {
        OtpInputText: InputText
    }
};
</script>
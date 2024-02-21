<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <OtpInputText
            v-for="i in length"
            :key="i"
            v-model="tokens[i - 1]"
            :type="inputType"
            :class="cx('input')"
            maxlength="1"
            :inputmode="inputMode"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
            @paste="onPaste"
            @keydown="onKeyDown($event, i - 1)"
            :pt="ptm('input')"
        />
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
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    checked: this.checked,
                    disabled: this.disabled
                }
            });
        },
        onInput(event) {
            this.moveToNext(event);
            this.updateModel(event);
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
        onKeyDown(event, index) {
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

                case 39:
                    this.moveToNext(event);
                    event.preventDefault();

                    break;

                case 8:
                    event.preventDefault();
                    this.tokens[index] = '';
                    this.moveToPrev(event);
                    this.updateModel(event);

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

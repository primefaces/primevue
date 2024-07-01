<template>
    <input type="text" :class="cx('root')" :value="modelValue" :aria-invalid="invalid" :data-pc-disabled="isDisabled" :data-pc-filled="filled" :data-pc-invalid="invalid" @input="onInput" v-bind="getPTOptions('root')" />
</template>

<script>
import BaseInputText from './BaseInputText.vue';

export default {
    name: 'InputText',
    extends: BaseInputText,
    inheritAttrs: false,
    emits: ['update:modelValue'],
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    filled: this.filled,
                    disabled: this.isDisabled
                }
            });
        },
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
    computed: {
        filled() {
            return this.modelValue != null && this.modelValue.toString().length > 0;
        },
        isDisabled() {
            return this.$attrs.disabled || this.$attrs.disabled === '';
        }
    }
};
</script>

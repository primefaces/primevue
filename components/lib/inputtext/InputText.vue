<template>
    <input :class="cx('root')" :value="modelValue" @input="onInput" v-bind="getPTOptions('root')" />
</template>

<script>
import BaseInputText from './BaseInputText.vue';

export default {
    name: 'InputText',
    extends: BaseInputText,
    emits: ['update:modelValue'],
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    filled: this.filled,
                    disabled: this.$attrs.disabled || this.$attrs.disabled === ''
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
        }
    }
};
</script>

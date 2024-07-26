<template>
    <input type="text" :class="cx('root')" :value="modelValue" :aria-invalid="invalid || undefined" @input="onInput" v-bind="getPTOptions('root')" />
</template>

<script>
import { isEmpty } from '@primeuix/utils/object';
import BaseInputText from './BaseInputText.vue';

export default {
    name: 'InputText',
    extends: BaseInputText,
    inheritAttrs: false,
    emits: ['update:modelValue'],
    inject: {
        $pcFluid: { default: null }
    },
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
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
        },
        hasFluid() {
            return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
        }
    }
};
</script>

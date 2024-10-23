<template>
    <input type="text" :class="cx('root')" :value="d_value" :disabled="disabled" :aria-invalid="$invalid || undefined" @input="onInput" v-bind="attrs" />
</template>

<script>
import { mergeProps } from 'vue';
import BaseInputText from './BaseInputText.vue';

export default {
    name: 'InputText',
    extends: BaseInputText,
    inheritAttrs: false,
    methods: {
        onInput(event) {
            this.writeValue(event.target.value, event);
        }
    },
    computed: {
        attrs() {
            return mergeProps(
                this.ptmi('root', {
                    context: {
                        filled: this.$filled,
                        disabled: this.disabled
                    }
                }),
                this.formField
            );
        }
    }
};
</script>

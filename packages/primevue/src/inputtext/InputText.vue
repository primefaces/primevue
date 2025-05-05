<template>
    <input type="text" :class="cx('root')" :value="d_value" :name="name" :disabled="disabled" :aria-invalid="$invalid || undefined" :data-p="dataP" @input="onInput" v-bind="attrs" />
</template>

<script>
import { cn } from '@primeuix/utils';
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
        },
        dataP() {
            return cn({
                invalid: this.$invalid,
                fluid: this.$fluid,
                filled: this.$variant === 'filled',
                [this.size]: this.size
            });
        }
    }
};
</script>

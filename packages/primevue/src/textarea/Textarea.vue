<template>
    <textarea :class="cx('root')" :value="modelValue" :aria-invalid="invalid || undefined" @input="onInput" v-bind="ptmi('root', ptmParams)"></textarea>
</template>

<script>
import { isEmpty } from '@primeuix/utils/object';
import BaseTextarea from './BaseTextarea.vue';

export default {
    name: 'Textarea',
    extends: BaseTextarea,
    inheritAttrs: false,
    emits: ['update:modelValue'],
    inject: {
        $pcFluid: { default: null }
    },
    mounted() {
        if (this.$el.offsetParent && this.autoResize) {
            this.resize();
        }
    },
    updated() {
        if (this.$el.offsetParent && this.autoResize) {
            this.resize();
        }
    },
    methods: {
        resize() {
            this.$el.style.height = 'auto';
            this.$el.style.height = this.$el.scrollHeight + 'px';

            if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
                this.$el.style.overflowY = 'scroll';
                this.$el.style.height = this.$el.style.maxHeight;
            } else {
                this.$el.style.overflow = 'hidden';
            }
        },
        onInput(event) {
            if (this.autoResize) {
                this.resize();
            }

            this.$emit('update:modelValue', event.target.value);
        }
    },
    computed: {
        filled() {
            return this.modelValue != null && this.modelValue.toString().length > 0;
        },
        ptmParams() {
            return {
                context: {
                    disabled: this.$attrs.disabled || this.$attrs.disabled === ''
                }
            };
        },
        hasFluid() {
            return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
        }
    }
};
</script>

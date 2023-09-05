<template>
    <textarea :class="cx('root')" :value="modelValue" @input="onInput" v-bind="ptm('root', ptmParams)" data-pc-name="textarea"></textarea>
</template>

<script>
import BaseTextarea from './BaseTextarea.vue';

export default {
    name: 'Textarea',
    extends: BaseTextarea,
    emits: ['update:modelValue'],
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
            const style = window.getComputedStyle(this.$el);

            this.$el.style.height = 'auto';
            this.$el.style.height = `calc(${style.borderTopWidth} + ${style.borderBottomWidth} + ${this.$el.scrollHeight}px)`;

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
        }
    }
};
</script>

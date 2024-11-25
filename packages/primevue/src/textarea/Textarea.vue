<template>
    <textarea :class="cx('root')" :value="d_value" :disabled="disabled" :aria-invalid="invalid || undefined" @input="onInput" v-bind="attrs"></textarea>
</template>

<script>
import { mergeProps } from 'vue';
import BaseTextarea from './BaseTextarea.vue';

export default {
    name: 'Textarea',
    extends: BaseTextarea,
    inheritAttrs: false,
    observer: null,
    mounted() {
        if (this.autoResize) {
            this.observer = new ResizeObserver(() => {
                this.resize();
            });
            this.observer.observe(this.$el);
        }
    },
    updated() {
        if (this.autoResize) {
            this.resize();
        }
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        resize() {
            if (!this.$el.offsetParent) return;

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

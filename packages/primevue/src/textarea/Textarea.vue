<template>
    <textarea :class="cx('root')" :value="d_value" :name="name" :disabled="disabled" :aria-invalid="invalid || undefined" :data-p="dataP" @input="onInput" v-bind="attrs"></textarea>
</template>

<script>
import { cn } from '@primeuix/utils';
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
                // Firefox has issues without the requestAnimationFrame - ResizeObserver loop completed with undelivered notifications.
                requestAnimationFrame(() => {
                    this.resize();
                });
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

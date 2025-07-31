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

            const currentHeight = this.$el.style.height;
            const currentHeightValue = parseInt(currentHeight) || 0;
            const initialScrollHeight = this.$el.scrollHeight;

            const needsExpanding = !currentHeightValue || initialScrollHeight > currentHeightValue;
            const needsShrinking = currentHeightValue && initialScrollHeight < currentHeightValue;

            if (needsShrinking) {
                this.$el.style.height = 'auto';
                this.$el.style.height = `${this.$el.scrollHeight}px`;
            } else if (needsExpanding) {
                this.$el.style.height = `${initialScrollHeight}px`;
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

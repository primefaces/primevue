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
    fieldSizingSupported: null,
    mounted() {
        this.checkFieldSizingSupport();
        if (this.autoResize) {
            // If field-sizing is supported, we can apply it directly
            if (this.fieldSizingSupported && this.$el) {
                this.$el.style.setProperty('field-sizing', 'content');
            }
            // Otherwise use the ResizeObserver approach
            else {
                this.observer = new ResizeObserver(() => {
                    // Firefox has issues without the requestAnimationFrame - ResizeObserver loop completed with undelivered notifications.
                    requestAnimationFrame(() => {
                        this.resize();
                    });
                });
                this.observer.observe(this.$el);
            }
        }
    },
    updated() {
        if (this.autoResize && !this.fieldSizingSupported) {
            this.resize();
        }
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        checkFieldSizingSupport() {
            if (typeof window === 'undefined') {
                this.fieldSizingSupported = false;
                return;
            }
            const testEl = document.createElement('textarea');
            testEl.style.setProperty('field-sizing', 'content');
            this.fieldSizingSupported = testEl.style.getPropertyValue('field-sizing') === 'content';
        },
        resize() {
            if (!this.$el.offsetParent) return;

            // Current height before resize
            const currentHeight = this.$el.style.height;
            const currentHeightValue = parseInt(currentHeight) || 0;
            const initialScrollHeight = this.$el.scrollHeight;

            const needsExpanding = !currentHeightValue || initialScrollHeight > currentHeightValue;
            const needsShrinking = currentHeightValue && initialScrollHeight < currentHeightValue;

            if (needsShrinking) {
                this.$el.style.height = 'auto'; // reset
                this.$el.style.height = `${this.$el.scrollHeight}px`;
            } else if (needsExpanding) {
                this.$el.style.height = `${initialScrollHeight}px`;
            }
        },
        onInput(event) {
            if (this.autoResize && !this.fieldSizingSupported) {
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

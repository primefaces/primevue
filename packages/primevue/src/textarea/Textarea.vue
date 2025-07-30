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

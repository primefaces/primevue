<template>
    <textarea :class="['p-inputtextarea p-inputtext p-component', {'p-filled': filled, 'p-inputtextarea-resizable ': autoResize}]" v-on="listeners" :value="value"></textarea>
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        value: null,
        autoResize: Boolean
    },
    resizeListener: null,
    mounted() {
        if (this.$el.offsetParent && this.autoResize) {
            this.resize();
            this.bindResizeListener();
        }
    },
    updated() {
        if (DomHandler.isVisible(this.$el) && this.$el.offsetParent.tagName !== 'BODY' && this.autoResize) {
            this.resize();
            this.bindResizeListener();
        }
    },
    beforeDestroy() {
        this.unbindResizeListener();
    },
    methods: {
        resize() {
            const style = window.getComputedStyle(this.$el);
            this.$el.style.height = 'auto';
            this.$el.style.height = `calc(${style.borderTopWidth} + ${style.borderBottomWidth} + ${this.$el.scrollHeight}px)`;

            if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
                this.$el.style.overflow = "scroll";
                this.$el.style.height = this.$el.style.maxHeight;
            }

            else {
                this.$el.style.overflow = "hidden";
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    this.resize();
                };

                window.addEventListener('resize', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                this.resizeListener = null;
            }
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => {
                    if (this.autoResize) {
                        this.resize();
                    }

                    this.$emit('input', event.target.value);
                }
            };
        },
        filled() {
            return (this.value != null && this.value.toString().length > 0)
        }
    }
}
</script>

<style>
.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-fluid .p-inputtextarea {
    width: 100%;
}
</style>
<template>
    <textarea :class="['p-inputtextarea p-inputtext p-component', {'p-filled': filled, 'p-inputtextarea-resizable ': autoResize}]" v-bind="$attrs" :value="modelValue" @input="onInput"></textarea>
</template>

<script>
export default {
    name: 'Textarea',
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
        autoResize: Boolean
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
            const style = window.getComputedStyle(this.$el);
            this.$el.style.height = 'auto';
            this.$el.style.height = `calc(${style.borderTopWidth} + ${style.borderBottomWidth} + ${this.$el.scrollHeight}px)`;

            if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
                this.$el.style.overflowY = "scroll";
                this.$el.style.height = this.$el.style.maxHeight;
            }
            else {
                this.$el.style.overflow = "hidden";
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
            return (this.modelValue != null && this.modelValue.toString().length > 0)
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

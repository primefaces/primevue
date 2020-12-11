<template>
    <textarea :class="['p-inputtextarea p-inputtext p-component', {'p-filled': filled, 'p-inputtextarea-resizable ': autoResize}]" v-on="listeners" :value="value"></textarea>
</template>

<script>
export default {
    props: {
        value: null,
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

            this.$el.style.height = 'auto';
            this.$el.style.height = this.$el.scrollHeight + 'px';

            if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
                this.$el.style.overflow = "scroll";
                this.$el.style.height = this.$el.style.maxHeight;
            }

            else {
                this.$el.style.overflow = "hidden";
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
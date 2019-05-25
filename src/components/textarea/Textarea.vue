<template>
    <textarea ref="element" :class="['p-inputtextarea p-inputtext p-component', {'p-filled': filled, 'p-inputtextarea-resizable ': autoResize}]" v-on="listeners" :value="value"></textarea>
</template>

<script>
export default {
    props: {
        value: null,
        autoResize: Boolean
    },
    cachedScrollHeight: null,
    mounted() {
        if (this.autoResize) {
            this.resize();
        }
    },
    updated() {
        if (this.autoResize) {
            this.resize();
        }
    },
    methods: {
        resize() {
            this.$refs.element.style.height = '';
            this.$refs.element.style.height = this.$refs.element.scrollHeight + 'px';

            if (parseFloat(this.$refs.element.style.height) >= parseFloat(this.$refs.element.style.maxHeight)) {
                this.$refs.element.style.overflowY = "scroll";
                this.$refs.element.style.height = this.$refs.element.style.maxHeight;
            }
            else {
                this.$refs.element.style.overflow = "hidden";
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
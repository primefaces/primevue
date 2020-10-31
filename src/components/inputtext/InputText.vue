<template>
    <input :class="['p-inputtext p-component', {'p-filled': filled}]" :value="modelValue" @input="onInput" ref="input"/>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: null
    },
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
        },
        focus() {
          this.$refs.input.focus();
        }
    },
    computed: {
        filled() {
            return (this.modelValue != null && this.modelValue.toString().length > 0)
        }
    }
}
</script>
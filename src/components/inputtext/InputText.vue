<template>
    <input :class="['p-inputtext p-component', {'p-filled': filled}]" :value="modelValue" @input="onInput" v-bind="$attrs" />
</template>

<script>
export default {
    name: 'InputText',
    inheritAttrs: false,
    emits: ['update:modelValue'],
    props: {
        modelValue: null
    },
    methods: {
        onInput(event) {
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

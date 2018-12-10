<template>
    <input :class="['p-inputtext p-component', {'p-filled': filled}]" v-on="listeners" :value="value" />
</template>

<script>
export default {
    props: {
        value: null
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value)
            };
        },
        filled() {
            return (this.value != null && this.value.toString().length > 0)
        }
    }
}
</script>
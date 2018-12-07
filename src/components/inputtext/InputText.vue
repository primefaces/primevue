<template>
    <input class="p-inputtext p-component" v-on="listeners" :value="value" />
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
        }
    }
}
</script>
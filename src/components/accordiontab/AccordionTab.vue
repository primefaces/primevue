<template>
    <slot></slot>
</template>

<script>
export default {
    name: 'accordiontab',
    props: {
        header: null,
        disabled: Boolean
    }
}
</script>
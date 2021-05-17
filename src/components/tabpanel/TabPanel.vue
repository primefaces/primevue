<template>
    <slot></slot>
</template>

<script>
export default {
    name: 'TabPanel',
    props: {
        header: null,
        disabled: Boolean
    }
}
</script>

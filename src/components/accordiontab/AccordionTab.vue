<template>
    <slot></slot>
</template>

<script>
export default {
    name: 'AccordionTab',
    props: {
        header: null,
        disabled: Boolean
    }
}
</script>

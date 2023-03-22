<template>
    <slot></slot>
</template>

<script>
import ComponentBase from 'primevue/base';

export default {
    name: 'AccordionTab',
    extends: ComponentBase,
    props: {
        header: null,
        headerStyle: null,
        headerClass: null,
        headerProps: null,
        headerActionProps: null,
        contentStyle: null,
        contentClass: null,
        contentProps: null,
        disabled: Boolean
    }
};
</script>

<template>
    <slot></slot>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
export default {
    name: 'TabPanel',
    extends: BaseComponent,
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

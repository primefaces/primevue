<template>
    <slot></slot>
</template>

<script>
import BaseTabPanel from './BaseTabPanel.vue';

export default {
    name: 'TabPanel',
    extends: BaseTabPanel,
    inject: ['$tabPanels'],
    mounted() {
        this.$tabPanels?.add(this.$);
    },
    unmounted() {
        this.$tabPanels?.delete(this.$);
    }
};
</script>

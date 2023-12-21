<template>
    <slot></slot>
</template>

<script>
import BaseAccordionTab from './BaseAccordionTab.vue';

export default {
    name: 'AccordionTab',
    extends: BaseAccordionTab,
    inject: ['$accordionTabs'],
    mounted() {
        this.$accordionTabs?.add(this.$);
    },
    unmounted() {
        this.$accordionTabs?.delete(this.$);
    }
};
</script>

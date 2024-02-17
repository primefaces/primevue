<template>
    <slot></slot>
</template>

<script>
import BaseAccordionTab from './BaseAccordionTab.vue';

export default {
    name: 'AccordionTab',
    extends: BaseAccordionTab,
    inheritAttrs: false
};
</script>

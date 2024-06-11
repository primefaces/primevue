<template>
    <slot></slot>
</template>

<script>
import BaseAccordionTab from './BaseAccordionTab.vue';

export default {
    name: 'AccordionTab',
    extends: BaseAccordionTab,
    inheritAttrs: false,
    mounted() {
        console.warn('Deprecated since v4. Use the new structure of Accordion instead.');
    }
};
</script>

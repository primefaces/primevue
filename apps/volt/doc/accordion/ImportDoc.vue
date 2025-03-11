<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`import Accordion from '@/volt/accordion';
import AccordionPanel from '@/volt/accordion/accordionpanel';
import AccordionHeader from '@/volt/accordion/accordionheader';
import AccordionContent from '@/volt/accordion/accordioncontent';
`);
</script>

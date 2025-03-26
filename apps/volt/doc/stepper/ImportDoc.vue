<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`import Stepper from '@/volt/Stepper.vue';
import StepList from '@/volt/tabs/steplist';
import Step from '@/volt/tabs/step';
import StepPanels from '@/volt/tabs/steppanels';
import StepPanel from '@/volt/tabs/steppanel';
import StepItem from '@/volt/tabs/stepitem';
`);
</script>

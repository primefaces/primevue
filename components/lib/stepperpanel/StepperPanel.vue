<template>
    <slot />
</template>

<script>
import BaseStepperPanel from './BaseStepperPanel.vue';

export default {
    name: 'StepperPanel',
    extends: BaseStepperPanel
};
</script>

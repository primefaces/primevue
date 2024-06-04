<template>
    <slot />
</template>

<script>
import BaseStepperPanel from './BaseStepperPanel.vue';

export default {
    name: 'StepperPanel',
    extends: BaseStepperPanel,
    mounted() {
        console.warn('Deprecated since v4. Use the new structure of Stepper instead.');
    }
};
</script>

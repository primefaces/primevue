<template>
    <component v-if="template" :is="template" :class="separatorClass" :index="index" :active="active" :highlighted="highlighted" />
    <span v-else :class="separatorClass" aria-hidden="true" v-bind="getStepPT" />
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'StepperSeparator',
    hostName: 'Stepper',
    extends: BaseComponent,
    props: {
        template: null,
        separatorClass: null,
        stepperpanel: null,
        index: null,
        active: null,
        highlighted: null,
        getStepPT: null
    }
};
</script>

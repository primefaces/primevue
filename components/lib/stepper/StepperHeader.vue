<template>
    <component
        v-if="template"
        :is="template"
        :index="index"
        :active="active"
        :highlighted="highlighted"
        :class="cx('stepper.action')"
        :headerClass="cx('stepper.action')"
        :numberClass="cx('stepper.number')"
        :titleClass="cx('stepper.title')"
        :clickCallback="(event) => clickCallback(event, index)"
    />
    <button v-else :id="id" :class="cx('stepper.action')" role="tab" :tabindex="disabled ? -1 : undefined" :aria-controls="ariaControls" @click="clickCallback($event, index)" v-bind="getStepPT(stepperpanel, 'action', index)">
        <span :class="cx('stepper.number')" v-bind="getStepPT(stepperpanel, 'number', index)">{{ index + 1 }}</span>
        <span :class="cx('stepper.title')" v-bind="getStepPT(stepperpanel, 'title', index)">{{ getStepProp(stepperpanel, 'header') }}</span>
    </button>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'StepperHeader',
    hostName: 'Stepper',
    extends: BaseComponent,
    props: {
        id: null,
        template: null,
        stepperpanel: null,
        index: null,
        disabled: null,
        active: null,
        highlighted: null,
        ariaControls: null,
        clickCallback: null,
        getStepPT: null,
        getStepProp: null
    }
};
</script>

<template>
    <component
        v-if="template"
        :is="template"
        :index="index"
        :active="active"
        :highlighted="highlighted"
        :class="cx('stepper.itemHeader')"
        :headerClass="cx('stepper.itemHeader')"
        :numberClass="cx('stepper.itemNumber')"
        :titleClass="cx('stepper.itemTitle')"
        :clickCallback="(event) => clickCallback(event, index)"
    />
    <button v-else :id="id" :class="cx('stepper.itemHeader')" role="tab" :tabindex="disabled ? -1 : undefined" :aria-controls="ariaControls" @click="clickCallback($event, index)" v-bind="getStepPT(stepperpanel, 'itemHeader', index)">
        <span :class="cx('stepper.itemNumber')" v-bind="getStepPT(stepperpanel, 'itemNumber', index)">{{ index + 1 }}</span>
        <span :class="cx('stepper.itemTitle')" v-bind="getStepPT(stepperpanel, 'itemTitle', index)">{{ getStepProp(stepperpanel, 'header') }}</span>
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

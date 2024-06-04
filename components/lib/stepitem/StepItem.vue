<template>
    <div :class="cx('root')" :data-p-active="isActive" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import BaseStepItem from './BaseStepItem.vue';

export default {
    name: 'StepItem',
    extends: BaseStepItem,
    inheritAttrs: false,
    inject: ['$pcStepper'],
    computed: {
        isActive() {
            return this.$pcStepper?.d_value === this.value;
        }
    }
};
</script>

<template>
    <div :class="cx('root')" role="tablist" v-bind="ptmi('root')">
        <slot v-if="$slots.start" name="start" />
        <slot />
        <slot v-if="$slots.end" name="end" />
    </div>
</template>

<script>
import BaseStepper from './BaseStepper.vue';

export default {
    name: 'Stepper',
    extends: BaseStepper,
    inheritAttrs: false,
    emits: ['update:value'],
    data() {
        return {
            d_value: this.value
        };
    },
    watch: {
        value(newValue) {
            this.d_value = newValue;
        }
    },
    methods: {
        updateValue(newValue) {
            if (this.d_value !== newValue) {
                this.d_value = newValue;
                this.$emit('update:value', newValue);
            }
        },
        isStepActive(value) {
            return this.d_value === value;
        },
        isStepDisabled() {
            return this.linear;
        }
    }
};
</script>

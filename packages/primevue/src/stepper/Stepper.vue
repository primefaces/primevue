<template>
    <div :class="cx('root')" role="tablist" v-bind="ptmi('root')">
        <slot v-if="$slots.start" name="start" />
        <slot />
        <slot v-if="$slots.end" name="end" />
    </div>
</template>

<script>
import { UniqueComponentId } from '@primevue/core/utils';
import BaseStepper from './BaseStepper.vue';

export default {
    name: 'Stepper',
    extends: BaseStepper,
    inheritAttrs: false,
    emits: ['update:value'],
    data() {
        return {
            id: this.$attrs.id,
            d_value: this.value
        };
    },
    watch: {
        '$attrs.id'(newValue) {
            this.id = newValue || UniqueComponentId();
        },
        value(newValue) {
            this.d_value = newValue;
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();
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

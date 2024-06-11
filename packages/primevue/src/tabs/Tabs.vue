<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>

<script>
import { UniqueComponentId } from '@primevue/core/utils';
import BaseTabs from './BaseTabs.vue';

export default {
    name: 'Tabs',
    extends: BaseTabs,
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
        isVertical() {
            return this.orientation === 'vertical';
        }
    }
};
</script>

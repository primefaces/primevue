<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>

<script>
import BaseTabs from './BaseTabs.vue';

export default {
    name: 'Tabs',
    extends: BaseTabs,
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
        isVertical() {
            return this.orientation === 'vertical';
        }
    }
};
</script>

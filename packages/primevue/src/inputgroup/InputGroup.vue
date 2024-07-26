<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import { isEmpty } from '@primeuix/utils/object';
import BaseInputGroup from './BaseInputGroup.vue';

export default {
    name: 'InputGroup',
    extends: BaseInputGroup,
    inheritAttrs: false,
    inject: {
        $pcFluid: { default: null }
    },
    computed: {
        hasFluid() {
            return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
        }
    }
};
</script>

<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import BaseFluid from './BaseFluid.vue';

export default {
    name: 'Fluid',
    extends: BaseFluid,
    inheritAttrs: false
};
</script>

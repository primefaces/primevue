<template>
    <span :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </span>
</template>

<script>
import BaseFloatLabel from './BaseFloatLabel.vue';

export default {
    name: 'FloatLabel',
    extends: BaseFloatLabel,
    inheritAttrs: false
};
</script>

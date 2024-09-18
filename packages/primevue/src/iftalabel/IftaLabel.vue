<template>
    <span :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </span>
</template>

<script>
import BaseIftaLabel from './BaseIftaLabel.vue';

export default {
    name: 'IftaLabel',
    extends: BaseIftaLabel,
    inheritAttrs: false
};
</script>

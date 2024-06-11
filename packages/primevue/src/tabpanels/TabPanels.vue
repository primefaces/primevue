<template>
    <div :class="cx('root')" role="presentation" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>

<script>
import BaseTabPanels from './BaseTabPanels.vue';

export default {
    name: 'TabPanels',
    extends: BaseTabPanels,
    inheritAttrs: false
};
</script>

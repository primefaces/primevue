<template>
    <span :class="cx('root')" role="group" v-bind="ptmi('root')">
        <slot />
    </span>
</template>

<script>
import BaseButtonGroup from './BaseButtonGroup.vue';

export default {
    name: 'ButtonGroup',
    extends: BaseButtonGroup,
    inheritAttrs: false
};
</script>

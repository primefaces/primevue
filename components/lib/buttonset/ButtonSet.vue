<template>
    <span :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </span>
</template>

<script>
import BaseButtonSet from './BaseButtonSet.vue';

export default {
    name: 'ButtonSet',
    extends: BaseButtonSet,
    inheritAttrs: false
};
</script>

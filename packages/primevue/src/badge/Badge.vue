<template>
    <span :class="cx('root')" v-bind="ptmi('root')">
        <slot>{{ value }}</slot>
    </span>
</template>

<script>
import BaseBadge from './BaseBadge.vue';

export default {
    name: 'Badge',
    extends: BaseBadge,
    inheritAttrs: false
};
</script>

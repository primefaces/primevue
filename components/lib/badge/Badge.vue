<template>
    <span :class="cx('root')" v-bind="ptm('root')">
        <slot>{{ value }}</slot>
    </span>
</template>

<script>
import BaseBadge from './BaseBadge.vue';

export default {
    name: 'Badge',
    extends: BaseBadge
};
</script>

<template>
    <span :class="cx('root')" v-bind="ptm('root')" data-pc-name="badge">
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

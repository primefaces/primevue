<template>
    <span :class="cx('root')" v-bind="ptmi('root')">
        <component v-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" v-bind="ptm('icon')" />
        <span v-else-if="icon" :class="[cx('icon'), icon]" v-bind="ptm('icon')"></span>
        <slot v-if="value != null || $slots.default">
            <span :class="cx('label')" v-bind="ptm('label')">{{ value }}</span>
        </slot>
    </span>
</template>

<script>
import BaseTag from './BaseTag.vue';

export default {
    name: 'Tag',
    extends: BaseTag,
    inheritAttrs: false
};
</script>

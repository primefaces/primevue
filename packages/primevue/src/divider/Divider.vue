<template>
    <div :class="cx('root')" :style="sx('root')" role="separator" :aria-orientation="layout" v-bind="ptmi('root')">
        <div v-if="$slots.default" :class="cx('content')" v-bind="ptm('content')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BaseDivider from './BaseDivider.vue';

export default {
    name: 'Divider',
    extends: BaseDivider,
    inheritAttrs: false
};
</script>

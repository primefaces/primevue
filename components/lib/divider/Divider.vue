<template>
    <div :class="cx('root')" role="separator" :aria-orientation="layout" v-bind="ptm('root')" data-pc-name="divider">
        <div v-if="$slots.default" :class="cx('content')" v-bind="ptm('content')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BaseDivider from './BaseDivider.vue';

export default {
    name: 'Divider',
    extends: BaseDivider
};
</script>

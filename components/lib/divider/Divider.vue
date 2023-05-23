<template>
    <div :class="cx('root')" role="separator" :aria-orientation="layout" v-bind="ptm('root')" data-pc-name="divider" data-pc-section="root">
        <div v-if="$slots.default" :class="cx('content')" v-bind="ptm('content')" data-pc-name="content">
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

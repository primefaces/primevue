<template>
    <div :class="cx('root')" role="toolbar" :aria-labelledby="ariaLabelledby" v-bind="ptmi('root')">
        <div :class="cx('start')" v-bind="ptm('start')">
            <slot name="start"></slot>
        </div>
        <div :class="cx('center')" v-bind="ptm('center')">
            <slot name="center"></slot>
        </div>
        <div :class="cx('end')" v-bind="ptm('end')">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
import BaseToolbar from './BaseToolbar.vue';

export default {
    name: 'Toolbar',
    extends: BaseToolbar,
    inheritAttrs: false
};
</script>

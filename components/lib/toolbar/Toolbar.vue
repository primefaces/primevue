<template>
    <div :class="cx('root')" role="toolbar" :aria-labelledby="ariaLabelledby" v-bind="ptm('root')" data-pc-name="toolbar">
        <div :class="cx('start')" data-pc-section="start" v-bind="ptm('start')">
            <slot name="start"></slot>
        </div>
        <div :class="cx('center')" data-pc-section="center" v-bind="ptm('center')">
            <slot name="center"></slot>
        </div>
        <div :class="cx('end')" data-pc-section="end" v-bind="ptm('end')">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
import BaseToolbar from './BaseToolbar.vue';

export default {
    name: 'Toolbar',
    extends: BaseToolbar
};
</script>

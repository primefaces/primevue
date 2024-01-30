<template>
    <span :class="cx('root')" v-bind="ptm('root')" data-pc-name="floatlabel">
        <slot />
    </span>
</template>

<script>
import BaseFloatLabel from './BaseFloatLabel.vue';

export default {
    name: 'FloatLabel',
    extends: BaseFloatLabel
};
</script>

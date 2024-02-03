<template>
    <span :class="cx('root')" v-bind="ptm('root')">
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

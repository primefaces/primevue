<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>

<script>
import BaseAvatarGroup from './BaseAvatarGroup.vue';

export default {
    name: 'AvatarGroup',
    extends: BaseAvatarGroup,
    inheritAttrs: false
};
</script>

<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="avatargroup">
        <slot></slot>
    </div>
</template>

<script>
import BaseAvatarGroup from './BaseAvatarGroup.vue';

export default {
    name: 'AvatarGroup',
    extends: BaseAvatarGroup
};
</script>

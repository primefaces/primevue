<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="inputgroupaddon">
        <slot />
    </div>
</template>

<script>
import BaseInputGroupAddon from './BaseInputGroupAddon.vue';

export default {
    name: 'InputGroupAddon',
    extends: BaseInputGroupAddon
};
</script>

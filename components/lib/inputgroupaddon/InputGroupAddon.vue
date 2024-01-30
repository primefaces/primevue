<template>
    <div :class="cx('root')" v-bind="ptm('root')">
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

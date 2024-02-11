<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import BaseIconField from './BaseIconField.vue';

export default {
    name: 'IconField',
    extends: BaseIconField,
    inheritAttrs: false
};
</script>

<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="iconfield">
        <slot />
    </div>
</template>

<script>
import BaseIconFeild from './BaseIconField.vue';

export default {
    name: 'IconField',
    extends: BaseIconFeild
};
</script>

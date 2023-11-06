<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="inputgroup">
        <slot />
    </div>
</template>

<script>
import BaseInputGroup from './BaseInputGroup.vue';

export default {
    name: 'InputGroup',
    extends: BaseInputGroup
};
</script>

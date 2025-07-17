<template>
    <span :class="containerClass" v-bind="ptmi('root')" aria-hidden="true">
        <slot />
    </span>
</template>

<script>
import BaseInputIcon from './BaseInputIcon.vue';

export default {
    name: 'InputIcon',
    extends: BaseInputIcon,
    inheritAttrs: false,
    computed: {
        containerClass() {
            return [this.cx('root'), this.class];
        }
    }
};
</script>

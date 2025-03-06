<template>
    <span :class="cx('root')" :data-p="dataP" v-bind="ptmi('root')">
        <slot>{{ value }}</slot>
    </span>
</template>

<script>
import { cn } from '@primeuix/utils';
import BaseBadge from './BaseBadge.vue';

export default {
    name: 'Badge',
    extends: BaseBadge,
    inheritAttrs: false,
    computed: {
        dataP() {
            return cn({
                circle: this.value != null && String(this.value).length === 1,
                empty: this.value == null && !this.$slots.default,
                [this.severity]: this.severity,
                [this.size]: this.size
            });
        }
    }
};
</script>

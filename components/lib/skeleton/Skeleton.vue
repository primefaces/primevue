<template>
    <div :class="cx('root')" :style="[sx('root'), containerStyle]" aria-hidden="true" v-bind="ptmi('root')"></div>
</template>

<script>
import BaseSkeleton from './BaseSkeleton.vue';

export default {
    name: 'Skeleton',
    extends: BaseSkeleton,
    inheritAttrs: false,
    computed: {
        containerStyle() {
            if (this.size) return { width: this.size, height: this.size, borderRadius: this.borderRadius };
            else return { width: this.width, height: this.height, borderRadius: this.borderRadius };
        }
    }
};
</script>

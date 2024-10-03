<template>
    <div :class="cx('root')" :pt="ptmi('root')">
        <p :pt="ptm('container')">This feature is planned for the next phase.</p>
    </div>
</template>

<script>
import BaseImageDiff from './BaseImageDiff.vue';

export default {
    name: 'ImageDiff',
    extends: BaseImageDiff
};
</script>

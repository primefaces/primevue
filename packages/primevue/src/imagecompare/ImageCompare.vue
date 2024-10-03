<template>
    <div :class="cx('root')" :pt="ptmi('root')">
        <slot name="left"></slot>
        <slot name="right"></slot>
        <input type="range" min="0" max="100" value="50" @input="onSlide" :class="cx('slider')" :pt="ptm('slider')" />
    </div>
</template>

<script>
import BaseImageCompare from './BaseImageCompare.vue';

export default {
    name: 'ImageCompare',
    extends: BaseImageCompare,
    methods: {
        onSlide(event) {
            const value = event.target.value;
            const image = event.target.previousElementSibling;

            console.log(image);

            image.style.clipPath = 'polygon(0 0,' + value + '% 0,' + value + '% 100%, 0 100%)';
        }
    }
};
</script>

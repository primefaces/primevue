<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot name="left"></slot>
        <slot name="right"></slot>
        <input type="range" min="0" max="100" value="50" @input="onSlide" :class="cx('slider')" v-bind="ptm('slider')" />
    </div>
</template>

<script>
import { $dt } from '@primeuix/styled';
import { setCSSProperty } from '@primeuix/utils/dom';
import BaseImageCompare from './BaseImageCompare.vue';

export default {
    name: 'ImageCompare',
    extends: BaseImageCompare,
    methods: {
        onSlide(event) {
            const value = event.target.value;
            const image = event.target.previousElementSibling;

            setCSSProperty(image, $dt('imagecompare.scope.x').name, `${value}%`);
        }
    }
};
</script>

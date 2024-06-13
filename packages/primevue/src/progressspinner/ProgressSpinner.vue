<template>
    <div :class="cx('root')" role="progressbar" v-bind="ptmi('root')">
        <svg :class="cx('spin')" viewBox="25 25 50 50" :style="svgStyle" v-bind="ptm('spin')">
            <circle :class="cx('circle')" cx="50" cy="50" r="20" :fill="fill" :stroke-width="strokeWidth" strokeMiterlimit="10" v-bind="ptm('circle')" />
        </svg>
    </div>
</template>

<script>
import BaseProgressSpinner from './BaseProgressSpinner.vue';

export default {
    name: 'ProgressSpinner',
    extends: BaseProgressSpinner,
    inheritAttrs: false,
    computed: {
        svgStyle() {
            return {
                'animation-duration': this.animationDuration
            };
        }
    }
};
</script>

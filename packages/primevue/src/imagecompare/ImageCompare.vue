<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot name="left"></slot>
        <slot name="right"></slot>
        <input type="range" min="0" max="100" value="50" @input="onSlide" :class="cx('slider')" v-bind="ptm('slider')" />
    </div>
</template>

<script>
import BaseImageCompare from './BaseImageCompare.vue';

export default {
    name: 'ImageCompare',
    extends: BaseImageCompare,
    mutationObserver: null,
    data() {
        return {
            isRTL: false
        };
    },
    beforeUnmount() {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
    },
    mounted() {
        this.updateDirection();
        this.observeDirectionChanges();
    },
    methods: {
        onSlide(event) {
            const value = event.target.value;
            const image = event.target.previousElementSibling;

            if (this.isRTL) {
                image.style.clipPath = `polygon(${100 - value}% 0, 100% 0, 100% 100%, ${100 - value}% 100%)`;
            } else {
                image.style.clipPath = `polygon(0 0, ${value}% 0, ${value}% 100%, 0 100%)`;
            }
        },
        updateDirection() {
            this.isRTL = !!this.$el.closest('[dir="rtl"]');
        },
        observeDirectionChanges() {
            const targetNode = document.documentElement;
            const config = { attributes: true, attributeFilter: ['dir'] };

            this.mutationObserver = new MutationObserver(() => {
                this.updateDirection();
            });

            this.mutationObserver.observe(targetNode, config);
        }
    }
};
</script>

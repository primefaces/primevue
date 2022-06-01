<template>
    <div :id="id" v-if="$attrs.value && $attrs.value.length > 0" :class="galleriaClass" :style="$attrs.containerStyle">
        <button v-if="$attrs.fullScreen" type="button" class="p-galleria-close p-link" @click="$emit('mask-hide')" v-ripple>
            <span class="p-galleria-close-icon pi pi-times"></span>
        </button>
        <div v-if="$attrs.templates && $attrs.templates['header']" class="p-galleria-header">
            <component :is="$attrs.templates['header']" />
        </div>
        <div class="p-galleria-content">
            <GalleriaItem :value="$attrs.value" v-model:activeIndex="activeIndex" :circular="$attrs.circular" :templates="$attrs.templates"
                :showIndicators="$attrs.showIndicators" :changeItemOnIndicatorHover="$attrs.changeItemOnIndicatorHover"
                :showItemNavigators="$attrs.showItemNavigators" :autoPlay="$attrs.autoPlay" v-model:slideShowActive="slideShowActive"
                @start-slideshow="startSlideShow" @stop-slideshow="stopSlideShow" />

            <GalleriaThumbnails v-if="$attrs.showThumbnails" :containerId="id" :value="$attrs.value" v-model:activeIndex="activeIndex" :templates="$attrs.templates"
                :numVisible="numVisible" :responsiveOptions="$attrs.responsiveOptions" :circular="$attrs.circular"
                :isVertical="isVertical()" :contentHeight="$attrs.verticalThumbnailViewPortHeight" :showThumbnailNavigators="$attrs.showThumbnailNavigators"
                v-model:slideShowActive="slideShowActive" @stop-slideshow="stopSlideShow" />
        </div>
        <div v-if="$attrs.templates && $attrs.templates['footer']" class="p-galleria-footer">
            <component :is="$attrs.templates['footer']" />
        </div>
    </div>
</template>

<script>
import {UniqueComponentId} from 'primevue/utils';
import GalleriaItem from './GalleriaItem.vue';
import GalleriaThumbnails from './GalleriaThumbnails.vue';
import GalleriaItemSlot from './GalleriaItemSlot.vue';
import Ripple from 'primevue/ripple';

export default {
    name: 'GalleriaContent',
    inheritAttrs: false,
    interval: null,
    emits: ['activeitem-change', 'mask-hide'],
    data() {
        return {
            id: this.$attrs.id || UniqueComponentId(),
            activeIndex: this.$attrs.activeIndex,
            numVisible: this.$attrs.numVisible,
            slideShowActive: false
        }
    },
    watch: {
        '$attrs.value': function(newVal) {
            if (newVal && newVal.length < this.numVisible) {
                this.numVisible = newVal.length;
            }
        },
        '$attrs.activeIndex': function(newVal) {
            this.activeIndex = newVal;
        },
        '$attrs.numVisible': function(newVal) {
            this.numVisible = newVal;
        }
    },
    updated() {
        this.$emit('activeitem-change', this.activeIndex);
    },
    beforeUnmount() {
		if (this.slideShowActive) {
			this.stopSlideShow();
		}
	},
    methods: {
        isAutoPlayActive() {
            return this.slideShowActive;
        },
        startSlideShow() {
            this.interval = setInterval(() => {
                let activeIndex = (this.$attrs.circular && (this.$attrs.value.length - 1) === this.activeIndex) ? 0 : (this.activeIndex + 1);
                this.activeIndex = activeIndex;
            }, this.$attrs.transitionInterval);

            this.slideShowActive = true;
        },
        stopSlideShow() {
            if (this.interval) {
                clearInterval(this.interval);
            }

            this.slideShowActive = false;
        },
        getPositionClass(preClassName, position) {
            const positions = ['top', 'left', 'bottom', 'right'];
            const pos = positions.find(item => item === position);

            return pos ? `${preClassName}-${pos}` : '';
        },
        isVertical() {
            return this.$attrs.thumbnailsPosition === 'left' || this.$attrs.thumbnailsPosition === 'right';
        }
    },
    computed: {
        galleriaClass() {
            const thumbnailsPosClass = this.$attrs.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.$attrs.thumbnailsPosition);
            const indicatorPosClass = this.$attrs.showIndicators && this.getPositionClass('p-galleria-indicators', this.$attrs.indicatorsPosition);

            return ['p-galleria p-component', {
                'p-galleria-fullscreen': this.$attrs.fullScreen,
                'p-galleria-indicator-onitem': this.$attrs.showIndicatorsOnItem,
                'p-galleria-item-nav-onhover': this.$attrs.showItemNavigatorsOnHover && !this.$attrs.fullScreen
            }, thumbnailsPosClass, indicatorPosClass, this.$attrs.containerClass]
        }
    },
    components: {
        'GalleriaItem': GalleriaItem,
        'GalleriaThumbnails': GalleriaThumbnails,
        'GalleriaItemSlot': GalleriaItemSlot
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

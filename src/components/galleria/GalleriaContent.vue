<template>
    <div :id="id" v-if="$attrs.value && $attrs.value.length > 0" :class="galleriaClass" :style="$attrs.containerStyle">
        <button v-if="$attrs.fullScreen" type="button" class="p-galleria-close p-link" @click="$emit('maskHide')">
            <span class="p-galleria-close-icon pi pi-times"></span>
        </button>
        <div v-if="$attrs.templates && $attrs.templates['header']" class="p-galleria-header">
            <GalleriaItemSlot type="header" :templates="$attrs.templates"/>
        </div>
        <div class="p-galleria-content">
            <GalleriaPreview :value="$attrs.value" :activeItemIndex.sync="activeItemIndex" :circular="$attrs.circular" :templates="$attrs.templates"
                :showIndicators="$attrs.showIndicators" :changePreviewOnIndicatorHover="$attrs.changePreviewOnIndicatorHover"
                :showPreviewNavButtons="$attrs.showPreviewNavButtons" :autoPlay="$attrs.autoPlay" :slideShowActive.sync="slideShowActive"
                @startSlideShow="startSlideShow" @stopSlideShow="stopSlideShow" />

            <GalleriaThumbnails v-if="$attrs.showThumbnails" :containerId="id" :value="$attrs.value" :activeItemIndex.sync="activeItemIndex" :templates="$attrs.templates"
                :numVisible="$attrs.numVisible" :responsiveOptions="$attrs.responsiveOptions" :circular="$attrs.circular"
                :isVertical="isVertical()" :contentHeight="$attrs.verticalThumbnailViewPortHeight" :showThumbnailNavButtons="$attrs.showThumbnailNavButtons"
                :slideShowActive.sync="slideShowActive" @stopSlideShow="stopSlideShow" />
        </div>
        <div v-if="$attrs.templates && $attrs.templates['footer']" class="p-galleria-footer">
            <GalleriaItemSlot type="footer" :templates="$attrs.templates"/>
        </div>
    </div>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';
import GalleriaPreview from './GalleriaPreview';
import GalleriaThumbnails from './GalleriaThumbnails';
import GalleriaItemSlot from './GalleriaItemSlot';

export default {
    inheritAttrs: false,
    interval: null,
    data() {
        return {
            id: this.$attrs.id || UniqueComponentId(),
            activeItemIndex: this.$attrs.activeItemIndex,
            slideShowActive: false
        }
    },
    watch: {
        '$attrs.activeItemIndex': function(newVal) {
            this.activeItemIndex = newVal;
        }
    },
    updated() {
        this.$emit('activeItemChange', this.activeItemIndex);
    },
    beforeDestroy() {
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
                let activeIndex = (this.$attrs.circular && (this.$attrs.value.length - 1) === this.activeItemIndex) ? 0 : (this.activeItemIndex + 1);
                this.activeItemIndex = activeIndex;
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
                'p-galleria-indicator-onpreview': this.$attrs.showIndicatorsOnPreview,
                'p-galleria-preview-nav-onhover': this.$attrs.showNavButtonsOnPreviewHover && !this.$attrs.fullScreen
            }, thumbnailsPosClass, indicatorPosClass, this.$attrs.containerClass]
        }
    },
    components: {
        'GalleriaPreview': GalleriaPreview,
        'GalleriaThumbnails': GalleriaThumbnails,
        'GalleriaItemSlot': GalleriaItemSlot
    }
}
</script>

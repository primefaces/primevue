<template>
    <div :id="id" v-if="$attrs.value && $attrs.value.length > 0" :class="galleriaClass" :style="$attrs.containerStyle">
        <button v-if="$attrs.fullScreen" type="button" class="p-galleria-close p-link" @click="$emit('maskHide')" v-ripple>
            <span class="p-galleria-close-icon pi pi-times"></span>
        </button>
        <div v-if="$attrs.templates && $attrs.templates['header']" class="p-galleria-header">
            <GalleriaItemSlot type="header" :templates="$attrs.templates"/>
        </div>
        <div class="p-galleria-content">
            <GalleriaItem :value="$attrs.value" :activeIndex.sync="activeIndex" :circular="$attrs.circular" :templates="$attrs.templates"
                :showIndicators="$attrs.showIndicators" :changeItemOnIndicatorHover="$attrs.changeItemOnIndicatorHover"
                :showItemNavigators="$attrs.showItemNavigators" :autoPlay="$attrs.autoPlay" :slideShowActive.sync="slideShowActive"
                @startSlideShow="startSlideShow" @stopSlideShow="stopSlideShow" />

            <GalleriaThumbnails v-if="$attrs.showThumbnails" :containerId="id" :value="$attrs.value" :activeIndex.sync="activeIndex" :templates="$attrs.templates"
                :numVisible="$attrs.numVisible" :responsiveOptions="$attrs.responsiveOptions" :circular="$attrs.circular"
                :isVertical="isVertical()" :contentHeight="$attrs.verticalThumbnailViewPortHeight" :showThumbnailNavigators="$attrs.showThumbnailNavigators"
                :slideShowActive.sync="slideShowActive" @stopSlideShow="stopSlideShow" />
        </div>
        <div v-if="$attrs.templates && $attrs.templates['footer']" class="p-galleria-footer">
            <GalleriaItemSlot type="footer" :templates="$attrs.templates"/>
        </div>
    </div>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';
import GalleriaItem from './GalleriaItem';
import GalleriaThumbnails from './GalleriaThumbnails';
import GalleriaItemSlot from './GalleriaItemSlot';
import Ripple from '../ripple/Ripple';

export default {
    inheritAttrs: false,
    interval: null,
    data() {
        return {
            id: this.$attrs.id || UniqueComponentId(),
            activeIndex: this.$attrs.activeIndex,
            slideShowActive: false
        }
    },
    watch: {
        '$attrs.activeIndex': function(newVal) {
            this.activeIndex = newVal;
        }
    },
    updated() {
        this.$emit('activeItemChange', this.activeIndex);
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

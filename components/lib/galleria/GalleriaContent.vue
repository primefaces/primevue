<template>
    <div v-if="$attrs.value && $attrs.value.length > 0" :id="id" :class="galleriaClass" :style="$attrs.containerStyle" v-bind="{ ...$attrs.containerProps, ...ptm('root') }">
        <button v-if="$attrs.fullScreen" v-ripple autofocus type="button" class="p-galleria-close p-link" :aria-label="closeAriaLabel" @click="$emit('mask-hide')" v-bind="ptm('closeButton')">
            <component :is="$attrs.templates['closeicon'] || 'TimesIcon'" class="p-galleria-close-icon" v-bind="ptm('closeIcon')" />
        </button>
        <div v-if="$attrs.templates && $attrs.templates['header']" class="p-galleria-header" v-bind="ptm('header')">
            <component :is="$attrs.templates['header']" />
        </div>
        <div class="p-galleria-content" :aria-live="$attrs.autoPlay ? 'polite' : 'off'" v-bind="ptm('content')">
            <GalleriaItem
                :id="id"
                v-model:activeIndex="activeIndex"
                v-model:slideShowActive="slideShowActive"
                :value="$attrs.value"
                :circular="$attrs.circular"
                :templates="$attrs.templates"
                :showIndicators="$attrs.showIndicators"
                :changeItemOnIndicatorHover="$attrs.changeItemOnIndicatorHover"
                :showItemNavigators="$attrs.showItemNavigators"
                :autoPlay="$attrs.autoPlay"
                @start-slideshow="startSlideShow"
                @stop-slideshow="stopSlideShow"
                :pt="pt"
            />

            <GalleriaThumbnails
                v-if="$attrs.showThumbnails"
                v-model:activeIndex="activeIndex"
                v-model:slideShowActive="slideShowActive"
                :containerId="id"
                :value="$attrs.value"
                :templates="$attrs.templates"
                :numVisible="numVisible"
                :responsiveOptions="$attrs.responsiveOptions"
                :circular="$attrs.circular"
                :isVertical="isVertical()"
                :contentHeight="$attrs.verticalThumbnailViewPortHeight"
                :showThumbnailNavigators="$attrs.showThumbnailNavigators"
                :prevButtonProps="$attrs.prevButtonProps"
                :nextButtonProps="$attrs.nextButtonProps"
                @stop-slideshow="stopSlideShow"
                :pt="pt"
            />
        </div>
        <div v-if="$attrs.templates && $attrs.templates['footer']" class="p-galleria-footer" v-bind="ptm('footer')">
            <component :is="$attrs.templates['footer']" />
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import TimesIcon from 'primevue/icons/times';
import Ripple from 'primevue/ripple';
import { UniqueComponentId } from 'primevue/utils';
import GalleriaItem from './GalleriaItem.vue';
import GalleriaThumbnails from './GalleriaThumbnails.vue';

export default {
    name: 'GalleriaContent',
    extends: BaseComponent,
    inheritAttrs: false,
    interval: null,
    emits: ['activeitem-change', 'mask-hide'],
    data() {
        return {
            id: this.$attrs.id || UniqueComponentId(),
            activeIndex: this.$attrs.activeIndex,
            numVisible: this.$attrs.numVisible,
            slideShowActive: false
        };
    },
    watch: {
        '$attrs.value': function (newVal) {
            if (newVal && newVal.length < this.numVisible) {
                this.numVisible = newVal.length;
            }
        },
        '$attrs.activeIndex': function (newVal) {
            this.activeIndex = newVal;
        },
        '$attrs.numVisible': function (newVal) {
            this.numVisible = newVal;
        },
        '$attrs.autoPlay': function (newVal) {
            newVal ? this.startSlideShow() : this.stopSlideShow();
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
                let activeIndex = this.$attrs.circular && this.$attrs.value.length - 1 === this.activeIndex ? 0 : this.activeIndex + 1;

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
            const pos = positions.find((item) => item === position);

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

            return [
                'p-galleria p-component',
                {
                    'p-galleria-fullscreen': this.$attrs.fullScreen,
                    'p-galleria-indicator-onitem': this.$attrs.showIndicatorsOnItem,
                    'p-galleria-item-nav-onhover': this.$attrs.showItemNavigatorsOnHover && !this.$attrs.fullScreen
                },
                thumbnailsPosClass,
                indicatorPosClass,
                this.$attrs.containerClass
            ];
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    components: {
        GalleriaItem: GalleriaItem,
        GalleriaThumbnails: GalleriaThumbnails,
        TimesIcon: TimesIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>

<template>
    <div
        v-if="$attrs.value && $attrs.value.length > 0"
        :id="$id"
        role="region"
        :class="[cx('root'), $attrs.containerClass]"
        :style="$attrs.containerStyle"
        :aria-label="$attrs.ariaLabel"
        :aria-roledescription="$attrs.ariaRoledescription"
        v-bind="{ ...$attrs.containerProps, ...getPTOptions('root') }"
    >
        <button v-if="$attrs.fullScreen" v-ripple autofocus type="button" :class="cx('closeButton')" :aria-label="closeAriaLabel" @click="$emit('mask-hide')" v-bind="getPTOptions('closeButton')">
            <component :is="$attrs.templates['closeicon'] || 'TimesIcon'" :class="cx('closeIcon')" v-bind="getPTOptions('closeIcon')" />
        </button>
        <div v-if="$attrs.templates && $attrs.templates['header']" :class="cx('header')" v-bind="getPTOptions('header')">
            <component :is="$attrs.templates['header']" />
        </div>
        <div :class="cx('content')" :aria-live="$attrs.autoPlay ? 'polite' : 'off'" v-bind="getPTOptions('content')">
            <GalleriaItem
                :id="$id"
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
                :unstyled="unstyled"
            />

            <GalleriaThumbnails
                v-if="$attrs.showThumbnails"
                v-model:activeIndex="activeIndex"
                v-model:slideShowActive="slideShowActive"
                :containerId="$id"
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
                :unstyled="unstyled"
            />
        </div>
        <div v-if="$attrs.templates && $attrs.templates['footer']" :class="cx('footer')" v-bind="getPTOptions('footer')">
            <component :is="$attrs.templates['footer']" />
        </div>
    </div>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import TimesIcon from '@primevue/icons/times';
import Ripple from 'primevue/ripple';
import GalleriaItem from './GalleriaItem.vue';
import GalleriaThumbnails from './GalleriaThumbnails.vue';

export default {
    name: 'GalleriaContent',
    hostName: 'Galleria',
    extends: BaseComponent,
    inheritAttrs: false,
    interval: null,
    emits: ['activeitem-change', 'mask-hide'],
    data() {
        return {
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
        getPTOptions(key) {
            return this.ptm(key, {
                props: {
                    ...this.$attrs,
                    pt: this.pt,
                    unstyled: this.unstyled
                }
            });
        },
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

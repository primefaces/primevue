<template>
  <div class="p-galleria-preview-content">
    <div class="p-galleria-preview-container">
        <button v-if="showPreviewNavButtons" type="button" :class="navBackwardClass" @click="navBackward($event)" :disabled="isNavBackwardDisabled()">
            <span class="p-galleria-preview-prev-icon pi pi-chevron-left"></span>
        </button>
        <div class="p-galleria-preview-items-content">
            <GalleriaItemSlot type="item" :item="activeItem" :templates="templates" />
        </div>
        <button v-if="showPreviewNavButtons" type="button" :class="navForwardClass" @click="navForward($event)" :disabled="isNavForwardDisabled()">
            <span class="p-galleria-preview-next-icon pi pi-chevron-right"></span>
        </button>
        <div class="p-galleria-preview-caption">
            <GalleriaItemSlot type="previewCaption" :item="activeItem" :templates="templates" />
        </div>
    </div>
    <ul v-if="showIndicators" class="p-galleria-indicator-container p-reset">
        <li v-for="(item, index) of value" :key="`p-galleria-indicator-${index}`" tabindex="0"
            @click="onIndicatorClick(index)" @mouseenter="onIndicatorMouseEnter(index)" @keydown.enter="onIndicatorKeyDown(index)"
            :class="['p-galleria-indicator-item', {'p-highlight': isIndicatorItemActive(index)}]">
            <button type="button" tabIndex="-1" class="p-link" v-if="!templates['indicator']">
                <span :class="['p-galleria-indicator-icon pi', {
                    'pi-circle-on': isIndicatorItemActive(index),
                    'pi-circle-off': !isIndicatorItemActive(index)}]" />
            </button>
            <GalleriaItemSlot type="indicator" :index="index" :templates="templates" />
        </li>
    </ul>
  </div>
</template>

<script>
import GalleriaItemSlot from './GalleriaItemSlot';

export default {
    props: {
        circular: {
            type: Boolean,
            default: false
        },
        activeItemIndex: {
            type: Number,
            default: 0
        },
        value: {
            type: Array,
            default: null
        },
        showPreviewNavButtons: {
            type: Boolean,
            default: true
        },
        showIndicators: {
            type: Boolean,
            default: true
        },
        slideShowActive: {
            type: Boolean,
            default: true
        },
        changePreviewOnIndicatorHover: {
            type: Boolean,
            default: true
        },
        autoPlay: {
            type: Boolean,
            default: false
        },
        templates: {
            type: null,
            default: null
        }
    },
    mounted() {
        if (this.autoPlay) {
            this.$emit('startSlideShow');
        }
    },
    methods: {
        next() {
            let nextItemIndex = this.activeItemIndex + 1;
            let activeIndex = this.circular && this.value.length - 1 === this.activeItemIndex
                        ? 0
                        : nextItemIndex;

            this.$emit('update:activeItemIndex', activeIndex);
        },
        prev() {
            let prevItemIndex = this.activeItemIndex !== 0 ? this.activeItemIndex - 1 : 0;
            let activeIndex = this.circular && this.activeItemIndex === 0
                    ? this.value.length - 1
                    : prevItemIndex

            this.$emit('update:activeItemIndex', activeIndex);
        },
        stopSlideShow() {
            if (this.slideShowActive && this.stopSlideShow) {
                this.$emit('stopSlideShow');
            }
        },
        navBackward(e) {
            this.stopSlideShow();
            this.prev();

            if (e && e.cancelable) {
                e.preventDefault();
            }
        },
        navForward(e) {
            this.stopSlideShow();
            this.next();

            if (e && e.cancelable) {
                e.preventDefault();
            }
        },
        onIndicatorClick(index) {
            this.stopSlideShow();
            this.$emit('update:activeItemIndex', index);
        },
        onIndicatorMouseEnter(index) {
            if (this.changePreviewOnIndicatorHover) {
                this.stopSlideShow();

                this.$emit('update:activeItemIndex', index);
            }
        },
        onIndicatorKeyDown(index) {
            this.stopSlideShow();

            this.$emit('update:activeItemIndex', index);
        },
        isIndicatorItemActive(index) {
            return this.activeItemIndex === index;
        },
        isNavBackwardDisabled() {
            return !this.circular && this.activeItemIndex === 0;
        },
        isNavForwardDisabled() {
            return !this.circular && this.activeItemIndex === (this.value.length - 1);
        }
    },
    computed: {
        activeItem() {
            return this.value[this.activeItemIndex];
        },
        navBackwardClass() {
            return ['p-galleria-preview-prev p-galleria-preview-nav-button p-button', {
                'p-disabled': this.isNavBackwardDisabled()
            }];
        },
        navForwardClass() {
            return ['p-galleria-preview-next p-galleria-preview-nav-button p-button', {
                'p-disabled': this.isNavForwardDisabled()
            }];
        }
    },
    components: {
        'GalleriaItemSlot': GalleriaItemSlot
    }
};
</script>

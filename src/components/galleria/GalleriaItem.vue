<template>
  <div class="p-galleria-item-wrapper">
    <div class="p-galleria-item-container">
        <button v-if="showItemNavigators" type="button" :class="navBackwardClass" @click="navBackward($event)" :disabled="isNavBackwardDisabled()" v-ripple>
            <span class="p-galleria-item-prev-icon pi pi-chevron-left"></span>
        </button>
        <div class="p-galleria-item">
            <component :is="templates.item" :item="activeItem" v-if="templates.item" />
        </div>
        <button v-if="showItemNavigators" type="button" :class="navForwardClass" @click="navForward($event)" :disabled="isNavForwardDisabled()" v-ripple>
            <span class="p-galleria-item-next-icon pi pi-chevron-right"></span>
        </button>
        <div class="p-galleria-caption" v-if="templates['caption']">
            <component :is="templates.caption" :item="activeItem" v-if="templates.caption" />
        </div>
    </div>
    <ul v-if="showIndicators" class="p-galleria-indicators p-reset">
        <li v-for="(item, index) of value" :key="`p-galleria-indicator-${index}`" tabindex="0"
            @click="onIndicatorClick(index)" @mouseenter="onIndicatorMouseEnter(index)" @keydown.enter="onIndicatorKeyDown(index)"
            :class="['p-galleria-indicator', {'p-highlight': isIndicatorItemActive(index)}]">
            <button type="button" tabindex="-1" class="p-link" v-if="!templates['indicator']"></button>
            <component :is="templates.indicator" :index="index" v-if="templates.indicator" />
        </li>
    </ul>
  </div>
</template>

<script>
import Ripple from 'primevue/ripple';

export default {
    name: 'GalleriaItem',
    emits: ['start-slideshow', 'stop-slideshow', 'update:activeIndex'],
    props: {
        circular: {
            type: Boolean,
            default: false
        },
        activeIndex: {
            type: Number,
            default: 0
        },
        value: {
            type: Array,
            default: null
        },
        showItemNavigators: {
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
        changeItemOnIndicatorHover: {
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
            this.$emit('start-slideshow');
        }
    },
    methods: {
        next() {
            let nextItemIndex = this.activeIndex + 1;
            let activeIndex = this.circular && this.value.length - 1 === this.activeIndex
                        ? 0
                        : nextItemIndex;

            this.$emit('update:activeIndex', activeIndex);
        },
        prev() {
            let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
            let activeIndex = this.circular && this.activeIndex === 0
                    ? this.value.length - 1
                    : prevItemIndex

            this.$emit('update:activeIndex', activeIndex);
        },
        stopSlideShow() {
            if (this.slideShowActive && this.stopSlideShow) {
                this.$emit('stop-slideshow');
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
            this.$emit('update:activeIndex', index);
        },
        onIndicatorMouseEnter(index) {
            if (this.changeItemOnIndicatorHover) {
                this.stopSlideShow();

                this.$emit('update:activeIndex', index);
            }
        },
        onIndicatorKeyDown(index) {
            this.stopSlideShow();

            this.$emit('update:activeIndex', index);
        },
        isIndicatorItemActive(index) {
            return this.activeIndex === index;
        },
        isNavBackwardDisabled() {
            return !this.circular && this.activeIndex === 0;
        },
        isNavForwardDisabled() {
            return !this.circular && this.activeIndex === (this.value.length - 1);
        }
    },
    computed: {
        activeItem() {
            return this.value[this.activeIndex];
        },
        navBackwardClass() {
            return ['p-galleria-item-prev p-galleria-item-nav p-link', {
                'p-disabled': this.isNavBackwardDisabled()
            }];
        },
        navForwardClass() {
            return ['p-galleria-item-next p-galleria-item-nav p-link', {
                'p-disabled': this.isNavForwardDisabled()
            }];
        }
    },
    directives: {
        'ripple': Ripple
    }
};
</script>

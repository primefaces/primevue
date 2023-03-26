<template>
    <div class="p-galleria-item-wrapper">
        <div class="p-galleria-item-container">
            <button v-if="showItemNavigators" v-ripple type="button" :class="navBackwardClass" @click="navBackward($event)" :disabled="isNavBackwardDisabled()">
                <span class="p-galleria-item-prev-icon pi pi-chevron-left"></span>
            </button>
            <div :id="id + '_item_' + activeIndex" class="p-galleria-item" role="group" :aria-label="ariaSlideNumber(activeIndex + 1)" :aria-roledescription="ariaSlideLabel">
                <component v-if="templates.item" :is="templates.item" :item="activeItem" />
            </div>
            <button v-if="showItemNavigators" v-ripple type="button" :class="navForwardClass" @click="navForward($event)" :disabled="isNavForwardDisabled()">
                <span class="p-galleria-item-next-icon pi pi-chevron-right"></span>
            </button>
            <div v-if="templates['caption']" class="p-galleria-caption">
                <component v-if="templates.caption" :is="templates.caption" :item="activeItem" />
            </div>
        </div>
        <ul v-if="showIndicators" class="p-galleria-indicators p-reset">
            <li
                v-for="(item, index) of value"
                :key="`p-galleria-indicator-${index}`"
                :class="['p-galleria-indicator', { 'p-highlight': isIndicatorItemActive(index) }]"
                tabindex="0"
                :aria-label="ariaPageLabel(index + 1)"
                :aria-selected="activeIndex === index"
                :aria-controls="id + '_item_' + index"
                @click="onIndicatorClick(index)"
                @mouseenter="onIndicatorMouseEnter(index)"
                @keydown="onIndicatorKeyDown($event, index)"
            >
                <button v-if="!templates['indicator']" type="button" tabindex="-1" class="p-link"></button>
                <component v-if="templates.indicator" :is="templates.indicator" :index="index" />
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
        },
        id: {
            type: String,
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
            let activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;

            this.$emit('update:activeIndex', activeIndex);
        },
        prev() {
            let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
            let activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;

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
        onIndicatorKeyDown(event, index) {
            switch (event.code) {
                case 'Enter':
                case 'Space':
                    this.stopSlideShow();

                    this.$emit('update:activeIndex', index);
                    event.preventDefault();
                    break;

                case 'ArrowDown':
                case 'ArrowUp':
                    event.preventDefault();
                    break;

                default:
                    break;
            }
        },
        isIndicatorItemActive(index) {
            return this.activeIndex === index;
        },
        isNavBackwardDisabled() {
            return !this.circular && this.activeIndex === 0;
        },
        isNavForwardDisabled() {
            return !this.circular && this.activeIndex === this.value.length - 1;
        },
        ariaSlideNumber(value) {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, value) : undefined;
        },
        ariaPageLabel(value) {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : undefined;
        }
    },
    computed: {
        activeItem() {
            return this.value[this.activeIndex];
        },
        navBackwardClass() {
            return [
                'p-galleria-item-prev p-galleria-item-nav p-link',
                {
                    'p-disabled': this.isNavBackwardDisabled()
                }
            ];
        },
        navForwardClass() {
            return [
                'p-galleria-item-next p-galleria-item-nav p-link',
                {
                    'p-disabled': this.isNavForwardDisabled()
                }
            ];
        },
        ariaSlideLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : undefined;
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>

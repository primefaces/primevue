<template>
    <div :class="cx('itemWrapper')" v-bind="ptm('itemWrapper')">
        <div :class="cx('itemContainer')" v-bind="ptm('itemContainer')">
            <button v-if="showItemNavigators" v-ripple type="button" :class="cx('previousItemButton')" @click="navBackward($event)" :disabled="isNavBackwardDisabled()" v-bind="ptm('previousItemButton')">
                <component :is="templates.previousitemicon || 'ChevronLeftIcon'" :class="cx('previousItemIcon')" v-bind="ptm('previousItemIcon')" />
            </button>
            <div :id="id + '_item_' + activeIndex" :class="cx('item')" role="group" :aria-label="ariaSlideNumber(activeIndex + 1)" :aria-roledescription="ariaSlideLabel" v-bind="ptm('item')">
                <component v-if="templates.item" :is="templates.item" :item="activeItem" />
            </div>
            <button v-if="showItemNavigators" v-ripple type="button" :class="cx('nextItemButton')" @click="navForward($event)" :disabled="isNavForwardDisabled()" v-bind="ptm('nextItemButton')">
                <component :is="templates.nextitemicon || 'ChevronRightIcon'" :class="cx('nextItemIcon')" v-bind="ptm('nextItemIcon')" />
            </button>
            <div v-if="templates['caption']" :class="cx('caption')" v-bind="ptm('caption')">
                <component v-if="templates.caption" :is="templates.caption" :item="activeItem" />
            </div>
        </div>
        <ul v-if="showIndicators" :class="cx('indicators')" v-bind="ptm('indicators')">
            <li
                v-for="(item, index) of value"
                :key="`p-galleria-indicator-${index}`"
                :class="cx('indicator', { index })"
                tabindex="0"
                :aria-label="ariaPageLabel(index + 1)"
                :aria-selected="activeIndex === index"
                :aria-controls="id + '_item_' + index"
                @click="onIndicatorClick(index)"
                @mouseenter="onIndicatorMouseEnter(index)"
                @keydown="onIndicatorKeyDown($event, index)"
                v-bind="ptm('indicator')"
                :data-p-highlight="isIndicatorItemActive(index)"
            >
                <button v-if="!templates['indicator']" type="button" tabindex="-1" :class="cx('indicatorButton')" v-bind="ptm('indicatorButton')"></button>
                <component v-if="templates.indicator" :is="templates.indicator" :index="index" />
            </li>
        </ul>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import ChevronLeftIcon from 'primevue/icons/chevronleft';
import ChevronRightIcon from 'primevue/icons/chevronright';
import Ripple from 'primevue/ripple';

export default {
    name: 'GalleriaItem',
    hostName: 'Galleria',
    extends: BaseComponent,
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

        ariaSlideLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : undefined;
        }
    },
    components: {
        ChevronLeftIcon: ChevronLeftIcon,
        ChevronRightIcon: ChevronRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>

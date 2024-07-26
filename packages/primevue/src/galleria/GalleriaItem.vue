<template>
    <div :class="cx('itemsContainer')" v-bind="ptm('itemsContainer')">
        <div :class="cx('items')" v-bind="ptm('items')">
            <button v-if="showItemNavigators" v-ripple type="button" :class="cx('prevButton')" @click="navBackward($event)" :disabled="isNavBackwardDisabled()" v-bind="ptm('prevButton')" data-pc-group-section="itemnavigator">
                <component :is="templates.previousitemicon || 'ChevronLeftIcon'" :class="cx('prevIcon')" v-bind="ptm('prevIcon')" />
            </button>
            <div :id="id + '_item_' + activeIndex" :class="cx('item')" role="group" :aria-label="ariaSlideNumber(activeIndex + 1)" :aria-roledescription="ariaSlideLabel" v-bind="ptm('item')">
                <component v-if="templates.item" :is="templates.item" :item="activeItem" />
            </div>
            <button v-if="showItemNavigators" v-ripple type="button" :class="cx('nextButton')" @click="navForward($event)" :disabled="isNavForwardDisabled()" v-bind="ptm('nextButton')" data-pc-group-section="itemnavigator">
                <component :is="templates.nextitemicon || 'ChevronRightIcon'" :class="cx('nextIcon')" v-bind="ptm('nextIcon')" />
            </button>
            <div v-if="templates['caption']" :class="cx('caption')" v-bind="ptm('caption')">
                <component v-if="templates.caption" :is="templates.caption" :item="activeItem" />
            </div>
        </div>
        <ul v-if="showIndicators" ref="indicatorContent" :class="cx('indicatorList')" v-bind="ptm('indicatorList')">
            <li
                v-for="(item, index) of value"
                :key="`p-galleria-indicator-${index}`"
                :class="cx('indicator', { index })"
                :aria-label="ariaPageLabel(index + 1)"
                :aria-selected="activeIndex === index"
                :aria-controls="id + '_item_' + index"
                @click="onIndicatorClick(index)"
                @mouseenter="onIndicatorMouseEnter(index)"
                @keydown="onIndicatorKeyDown($event, index)"
                v-bind="ptm('indicator', getIndicatorPTOptions(index))"
                :data-p-active="isIndicatorItemActive(index)"
            >
                <button v-if="!templates['indicator']" type="button" :tabindex="activeIndex === index ? '0' : '-1'" :class="cx('indicatorButton')" v-bind="ptm('indicatorButton', getIndicatorPTOptions(index))"></button>
                <component v-if="templates.indicator" :is="templates.indicator" :index="index" />
            </li>
        </ul>
    </div>
</template>

<script>
import { find, findSingle, getAttribute } from '@primeuix/utils/dom';
import BaseComponent from '@primevue/core/basecomponent';
import ChevronLeftIcon from '@primevue/icons/chevronleft';
import ChevronRightIcon from '@primevue/icons/chevronright';
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
        getIndicatorPTOptions(index) {
            return {
                context: {
                    highlighted: this.activeIndex === index
                }
            };
        },
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
                case 'NumpadEnter':
                case 'Space':
                    this.stopSlideShow();

                    this.$emit('update:activeIndex', index);
                    event.preventDefault();
                    break;

                case 'ArrowRight':
                    this.onRightKey();
                    break;

                case 'ArrowLeft':
                    this.onLeftKey();
                    break;

                case 'Home':
                    this.onHomeKey();
                    event.preventDefault();
                    break;

                case 'End':
                    this.onEndKey();
                    event.preventDefault();
                    break;

                case 'Tab':
                    this.onTabKey();
                    break;

                case 'ArrowDown':
                case 'ArrowUp':
                case 'PageUp':
                case 'PageDown':
                    event.preventDefault();
                    break;

                default:
                    break;
            }
        },
        onRightKey() {
            const indicators = [...find(this.$refs.indicatorContent, '[data-pc-section="indicator"]')];
            const activeIndex = this.findFocusedIndicatorIndex();

            this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
        },
        onLeftKey() {
            const activeIndex = this.findFocusedIndicatorIndex();

            this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
        },
        onHomeKey() {
            const activeIndex = this.findFocusedIndicatorIndex();

            this.changedFocusedIndicator(activeIndex, 0);
        },
        onEndKey() {
            const indicators = [...find(this.$refs.indicatorContent, '[data-pc-section="indicator"]')];
            const activeIndex = this.findFocusedIndicatorIndex();

            this.changedFocusedIndicator(activeIndex, indicators.length - 1);
        },
        onTabKey() {
            const indicators = [...find(this.$refs.indicatorContent, '[data-pc-section="indicator"]')];
            const highlightedIndex = indicators.findIndex((ind) => getAttribute(ind, 'data-p-active') === true);

            const activeIndicator = findSingle(this.$refs.indicatorContent, '[data-pc-section="indicator"] > button[tabindex="0"]');
            const activeIndex = indicators.findIndex((ind) => ind === activeIndicator.parentElement);

            indicators[activeIndex].children[0].tabIndex = '-1';
            indicators[highlightedIndex].children[0].tabIndex = '0';
        },
        findFocusedIndicatorIndex() {
            const indicators = [...find(this.$refs.indicatorContent, '[data-pc-section="indicator"]')];
            const activeIndicator = findSingle(this.$refs.indicatorContent, '[data-pc-section="indicator"] > button[tabindex="0"]');

            return indicators.findIndex((ind) => ind === activeIndicator.parentElement);
        },
        changedFocusedIndicator(prevInd, nextInd) {
            const indicators = [...find(this.$refs.indicatorContent, '[data-pc-section="indicator"]')];

            indicators[prevInd].children[0].tabIndex = '-1';
            indicators[nextInd].children[0].tabIndex = '0';
            indicators[nextInd].children[0].focus();
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

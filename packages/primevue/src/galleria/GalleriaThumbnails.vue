<template>
    <div :class="cx('thumbnails')" v-bind="ptm('thumbnails')">
        <div :class="cx('thumbnailContent')" v-bind="ptm('thumbnailContent')">
            <button
                v-if="showThumbnailNavigators"
                v-ripple
                :class="cx('thumbnailPrevButton')"
                :disabled="isNavBackwardDisabled()"
                type="button"
                :aria-label="ariaPrevButtonLabel"
                @click="navBackward($event)"
                v-bind="{ ...prevButtonProps, ...ptm('thumbnailPrevButton') }"
                data-pc-group-section="thumbnailnavigator"
            >
                <component :is="templates.previousthumbnailicon || (isVertical ? 'ChevronUpIcon' : 'ChevronLeftIcon')" :class="cx('thumbnailPrevIcon')" v-bind="ptm('thumbnailPrevIcon')" />
            </button>
            <div :class="cx('thumbnailsViewport')" :style="{ height: isVertical ? contentHeight : '' }" v-bind="ptm('thumbnailsViewport')">
                <div
                    ref="itemsContainer"
                    :class="cx('thumbnailItems')"
                    role="tablist"
                    @transitionend="onTransitionEnd($event)"
                    @touchstart="onTouchStart($event)"
                    @touchmove="onTouchMove($event)"
                    @touchend="onTouchEnd($event)"
                    v-bind="ptm('thumbnailItems')"
                >
                    <div
                        v-for="(item, index) of value"
                        :key="`p-galleria-thumbnail-item-${index}`"
                        :class="cx('thumbnailItem', { index, activeIndex })"
                        role="tab"
                        :data-p-active="activeIndex === index"
                        :aria-selected="activeIndex === index"
                        :aria-controls="containerId + '_item_' + index"
                        @keydown="onThumbnailKeydown($event, index)"
                        v-bind="ptm('thumbnailItem')"
                        :data-p-galleria-thumbnail-item-current="activeIndex === index"
                        :data-p-galleria-thumbnail-item-active="isItemActive(index)"
                        :data-p-galleria-thumbnail-item-start="firstItemAciveIndex() === index"
                        :data-p-galleria-thumbnail-item-end="lastItemActiveIndex() === index"
                    >
                        <div
                            :class="cx('thumbnail')"
                            :tabindex="activeIndex === index ? '0' : '-1'"
                            :aria-label="ariaPageLabel(index + 1)"
                            :aria-current="activeIndex === index ? 'page' : undefined"
                            @click="onItemClick(index)"
                            v-bind="ptm('thumbnail')"
                        >
                            <component v-if="templates.thumbnail" :is="templates.thumbnail" :item="item" />
                        </div>
                    </div>
                </div>
            </div>
            <button
                v-if="showThumbnailNavigators"
                v-ripple
                :class="cx('thumbnailNextButton')"
                :disabled="isNavForwardDisabled()"
                type="button"
                :aria-label="ariaNextButtonLabel"
                @click="navForward($event)"
                v-bind="{ ...nextButtonProps, ...ptm('thumbnailNextButton') }"
                data-pc-group-section="thumbnailnavigator"
            >
                <component :is="templates.nextthumbnailicon || (isVertical ? 'ChevronDownIcon' : 'ChevronRightIcon')" :class="cx('thumbnailNextIcon')" v-bind="ptm('thumbnailNextIcon')" />
            </button>
        </div>
    </div>
</template>

<script>
import { addClass, find, findSingle, getAttribute, removeClass, setAttribute } from '@primeuix/utils/dom';
import { localeComparator, sort } from '@primeuix/utils/object';
import BaseComponent from '@primevue/core/basecomponent';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronLeftIcon from '@primevue/icons/chevronleft';
import ChevronRightIcon from '@primevue/icons/chevronright';
import ChevronUpIcon from '@primevue/icons/chevronup';
import Ripple from 'primevue/ripple';

export default {
    name: 'GalleriaThumbnails',
    hostName: 'Galleria',
    extends: BaseComponent,
    emits: ['stop-slideshow', 'update:activeIndex'],
    props: {
        containerId: {
            type: String,
            default: null
        },
        value: {
            type: Array,
            default: null
        },
        numVisible: {
            type: Number,
            default: 3
        },
        activeIndex: {
            type: Number,
            default: 0
        },
        isVertical: {
            type: Boolean,
            default: false
        },
        slideShowActive: {
            type: Boolean,
            default: false
        },
        circular: {
            type: Boolean,
            default: false
        },
        responsiveOptions: {
            type: Array,
            default: null
        },
        contentHeight: {
            type: String,
            default: '300px'
        },
        showThumbnailNavigators: {
            type: Boolean,
            default: true
        },
        templates: {
            type: null,
            default: null
        },
        prevButtonProps: {
            type: null,
            default: null
        },
        nextButtonProps: {
            type: null,
            default: null
        }
    },
    startPos: null,
    thumbnailsStyle: null,
    sortedResponsiveOptions: null,
    data() {
        return {
            d_numVisible: this.numVisible,
            d_oldNumVisible: this.numVisible,
            d_activeIndex: this.activeIndex,
            d_oldActiveItemIndex: this.activeIndex,
            totalShiftedItems: 0,
            page: 0
        };
    },
    watch: {
        numVisible(newValue, oldValue) {
            this.d_numVisible = newValue;
            this.d_oldNumVisible = oldValue;
        },
        activeIndex(newValue, oldValue) {
            this.d_activeIndex = newValue;
            this.d_oldActiveItemIndex = oldValue;
        }
    },
    mounted() {
        this.createStyle();
        this.calculatePosition();

        if (this.responsiveOptions) {
            this.bindDocumentListeners();
        }
    },
    updated() {
        let totalShiftedItems = this.totalShiftedItems;

        if (this.d_oldNumVisible !== this.d_numVisible || this.d_oldActiveItemIndex !== this.d_activeIndex) {
            if (this.d_activeIndex <= this.getMedianItemIndex()) {
                totalShiftedItems = 0;
            } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this.d_activeIndex) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            } else if (this.value.length - this.d_numVisible < this.d_activeIndex && this.d_numVisible % 2 === 0) {
                totalShiftedItems = this.d_activeIndex * -1 + this.getMedianItemIndex() + 1;
            } else {
                totalShiftedItems = this.d_activeIndex * -1 + this.getMedianItemIndex();
            }

            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }

            this.$refs.itemsContainer.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;

            if (this.d_oldActiveItemIndex !== this.d_activeIndex) {
                document.body.setAttribute('data-p-items-hidden', 'false');
                !this.isUnstyled && removeClass(this.$refs.itemsContainer, 'p-items-hidden');
                this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s';
            }

            this.d_oldActiveItemIndex = this.d_activeIndex;
            this.d_oldNumVisible = this.d_numVisible;
        }
    },
    beforeUnmount() {
        if (this.responsiveOptions) {
            this.unbindDocumentListeners();
        }

        if (this.thumbnailsStyle) {
            this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
        }
    },
    methods: {
        step(dir) {
            let totalShiftedItems = this.totalShiftedItems + dir;

            if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            } else if (dir > 0 && totalShiftedItems > 0) {
                totalShiftedItems = 0;
            }

            if (this.circular) {
                if (dir < 0 && this.value.length - 1 === this.d_activeIndex) {
                    totalShiftedItems = 0;
                } else if (dir > 0 && this.d_activeIndex === 0) {
                    totalShiftedItems = this.d_numVisible - this.value.length;
                }
            }

            if (this.$refs.itemsContainer) {
                document.body.setAttribute('data-p-items-hidden', 'false');
                !this.isUnstyled && removeClass(this.$refs.itemsContainer, 'p-items-hidden');
                this.$refs.itemsContainer.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
                this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s';
            }

            this.totalShiftedItems = totalShiftedItems;
        },
        stopSlideShow() {
            if (this.slideShowActive && this.stopSlideShow) {
                this.$emit('stop-slideshow');
            }
        },
        getMedianItemIndex() {
            let index = Math.floor(this.d_numVisible / 2);

            return this.d_numVisible % 2 ? index : index - 1;
        },
        navBackward(e) {
            this.stopSlideShow();

            let prevItemIndex = this.d_activeIndex !== 0 ? this.d_activeIndex - 1 : 0;
            let diff = prevItemIndex + this.totalShiftedItems;

            if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
                this.step(1);
            }

            let activeIndex = this.circular && this.d_activeIndex === 0 ? this.value.length - 1 : prevItemIndex;

            this.$emit('update:activeIndex', activeIndex);

            if (e.cancelable) {
                e.preventDefault();
            }
        },
        navForward(e) {
            this.stopSlideShow();

            let nextItemIndex = this.d_activeIndex === this.value.length - 1 ? this.value.length - 1 : this.d_activeIndex + 1;

            if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
                this.step(-1);
            }

            let activeIndex = this.circular && this.value.length - 1 === this.d_activeIndex ? 0 : nextItemIndex;

            this.$emit('update:activeIndex', activeIndex);

            if (e.cancelable) {
                e.preventDefault();
            }
        },
        onItemClick(index) {
            this.stopSlideShow();

            let selectedItemIndex = index;

            if (selectedItemIndex !== this.d_activeIndex) {
                const diff = selectedItemIndex + this.totalShiftedItems;
                let dir = 0;

                if (selectedItemIndex < this.d_activeIndex) {
                    dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();

                    if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
                        this.step(dir);
                    }
                } else {
                    dir = this.getMedianItemIndex() - diff;

                    if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
                        this.step(dir);
                    }
                }

                this.$emit('update:activeIndex', selectedItemIndex);
            }
        },
        onThumbnailKeydown(event, index) {
            if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') {
                this.onItemClick(index);
                event.preventDefault();
            }

            switch (event.code) {
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

                case 'ArrowUp':
                case 'ArrowDown':
                    event.preventDefault();
                    break;

                case 'Tab':
                    this.onTabKey();
                    break;

                default:
                    break;
            }
        },
        onRightKey() {
            const indicators = find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
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
            const indicators = find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
            const activeIndex = this.findFocusedIndicatorIndex();

            this.changedFocusedIndicator(activeIndex, indicators.length - 1);
        },
        onTabKey() {
            const indicators = [...find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]')];
            const highlightedIndex = indicators.findIndex((ind) => getAttribute(ind, 'data-p-active') === true);

            const activeIndicator = findSingle(this.$refs.itemsContainer, '[tabindex="0"]');

            const activeIndex = indicators.findIndex((ind) => ind === activeIndicator.parentElement);

            indicators[activeIndex].children[0].tabIndex = '-1';
            indicators[highlightedIndex].children[0].tabIndex = '0';
        },
        findFocusedIndicatorIndex() {
            const indicators = [...find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]')];
            const activeIndicator = findSingle(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');

            return indicators.findIndex((ind) => ind === activeIndicator.parentElement);
        },
        changedFocusedIndicator(prevInd, nextInd) {
            const indicators = find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');

            indicators[prevInd].children[0].tabIndex = '-1';
            indicators[nextInd].children[0].tabIndex = '0';
            indicators[nextInd].children[0].focus();
        },
        onTransitionEnd(e) {
            if (this.$refs.itemsContainer && e.propertyName === 'transform') {
                document.body.setAttribute('data-p-items-hidden', 'true');
                !this.isUnstyled && addClass(this.$refs.itemsContainer, 'p-items-hidden');
                this.$refs.itemsContainer.style.transition = '';
            }
        },
        onTouchStart(e) {
            let touchobj = e.changedTouches[0];

            this.startPos = {
                x: touchobj.pageX,
                y: touchobj.pageY
            };
        },
        onTouchMove(e) {
            if (e.cancelable) {
                e.preventDefault();
            }
        },
        onTouchEnd(e) {
            let touchobj = e.changedTouches[0];

            if (this.isVertical) {
                this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
            } else {
                this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
            }
        },
        changePageOnTouch(e, diff) {
            if (diff < 0) {
                // left
                this.navForward(e);
            } else {
                // right
                this.navBackward(e);
            }
        },
        getTotalPageNumber() {
            return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
        },
        createStyle() {
            if (!this.thumbnailsStyle) {
                this.thumbnailsStyle = document.createElement('style');
                this.thumbnailsStyle.type = 'text/css';
                setAttribute(this.thumbnailsStyle, 'nonce', this.$primevue?.config?.csp?.nonce);
                document.body.appendChild(this.thumbnailsStyle);
            }

            let innerHTML = `
                #${this.containerId} [data-pc-section="thumbnailitem"] {
                    flex: 1 0 ${100 / this.d_numVisible}%
                }
            `;

            if (this.responsiveOptions && !this.isUnstyled) {
                this.sortedResponsiveOptions = [...this.responsiveOptions];
                const comparer = localeComparator();

                this.sortedResponsiveOptions.sort((data1, data2) => {
                    const value1 = data1.breakpoint;
                    const value2 = data2.breakpoint;

                    return sort(value1, value2, -1, comparer);
                });

                for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                    let res = this.sortedResponsiveOptions[i];

                    innerHTML += `
                        @media screen and (max-width: ${res.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${100 / res.numVisible}%
                            }
                        }
                    `;
                }
            }

            this.thumbnailsStyle.innerHTML = innerHTML;
        },
        calculatePosition() {
            if (this.$refs.itemsContainer && this.sortedResponsiveOptions) {
                let windowWidth = window.innerWidth;
                let matchedResponsiveData = {
                    numVisible: this.numVisible
                };

                for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                    let res = this.sortedResponsiveOptions[i];

                    if (parseInt(res.breakpoint, 10) >= windowWidth) {
                        matchedResponsiveData = res;
                    }
                }

                if (this.d_numVisible !== matchedResponsiveData.numVisible) {
                    this.d_numVisible = matchedResponsiveData.numVisible;
                }
            }
        },
        bindDocumentListeners() {
            if (!this.documentResizeListener) {
                this.documentResizeListener = () => {
                    this.calculatePosition();
                };

                window.addEventListener('resize', this.documentResizeListener);
            }
        },
        unbindDocumentListeners() {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        },
        isNavBackwardDisabled() {
            return (!this.circular && this.d_activeIndex === 0) || this.value.length <= this.d_numVisible;
        },
        isNavForwardDisabled() {
            return (!this.circular && this.d_activeIndex === this.value.length - 1) || this.value.length <= this.d_numVisible;
        },
        firstItemAciveIndex() {
            return this.totalShiftedItems * -1;
        },
        lastItemActiveIndex() {
            return this.firstItemAciveIndex() + this.d_numVisible - 1;
        },
        isItemActive(index) {
            return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
        },
        ariaPageLabel(value) {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : undefined;
        }
    },
    computed: {
        ariaPrevButtonLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : undefined;
        },
        ariaNextButtonLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : undefined;
        }
    },
    components: {
        ChevronLeftIcon: ChevronLeftIcon,
        ChevronRightIcon: ChevronRightIcon,
        ChevronUpIcon: ChevronUpIcon,
        ChevronDownIcon: ChevronDownIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>

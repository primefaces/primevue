<template>
    <div :class="cx('root')" role="region" v-bind="ptmi('root')">
        <div v-if="$slots.header" :class="cx('header')" v-bind="ptm('header')">
            <slot name="header"></slot>
        </div>
        <div v-if="!empty" :class="[cx('contentContainer'), containerClass]" v-bind="ptm('contentContainer')">
            <div :class="[cx('content'), contentClass]" :aria-live="allowAutoplay ? 'polite' : 'off'" v-bind="ptm('content')">
                <Button
                    v-if="showNavigators"
                    :class="cx('pcPrevButton')"
                    :disabled="backwardIsDisabled"
                    :aria-label="ariaPrevButtonLabel"
                    :unstyled="unstyled"
                    @click="navBackward"
                    v-bind="prevButtonProps"
                    :pt="ptm('pcPrevButton')"
                    data-pc-group-section="navigator"
                >
                    <template #icon="slotProps">
                        <slot name="previcon">
                            <component :is="isVertical() ? 'ChevronUpIcon' : 'ChevronLeftIcon'" :class="slotProps.icon" v-bind="ptm('pcPrevButton')['icon']" />
                        </slot>
                    </template>
                </Button>
                <div :class="cx('viewport')" :style="[{ height: isVertical() ? verticalViewPortHeight : 'auto' }]" @touchend="onTouchEnd" @touchstart="onTouchStart" @touchmove="onTouchMove" v-bind="ptm('viewport')">
                    <div ref="itemsContainer" :class="cx('itemList')" @transitionend="onTransitionEnd" v-bind="ptm('itemList')">
                        <template v-if="isCircular()">
                            <div
                                v-for="(item, index) of value.slice(-1 * d_numVisible)"
                                :key="index + '_scloned'"
                                :class="cx('itemClone', { index, value, totalShiftedItems, d_numVisible })"
                                v-bind="ptm('itemClone')"
                                :data-p-carousel-item-active="totalShiftedItems * -1 === value.length + d_numVisible"
                                :data-p-carousel-item-start="index === 0"
                                :data-p-carousel-item-end="value.slice(-1 * d_numVisible).length - 1 === index"
                            >
                                <slot name="item" :data="item" :index="index"></slot>
                            </div>
                        </template>
                        <div
                            v-for="(item, index) of value"
                            :key="index"
                            :class="cx('item', { index })"
                            role="group"
                            :aria-hidden="firstIndex() > index || lastIndex() < index ? true : undefined"
                            :aria-label="ariaSlideNumber(index)"
                            :aria-roledescription="ariaSlideLabel"
                            v-bind="ptm('item')"
                            :data-p-carousel-item-active="firstIndex() <= index && lastIndex() >= index"
                            :data-p-carousel-item-start="firstIndex() === index"
                            :data-p-carousel-item-end="lastIndex() === index"
                        >
                            <slot name="item" :data="item" :index="index"></slot>
                        </div>
                        <template v-if="isCircular()">
                            <div v-for="(item, index) of value.slice(0, d_numVisible)" :key="index + '_fcloned'" :class="cx('itemClone', { index, value, totalShiftedItems, d_numVisible })" v-bind="ptm('itemClone')">
                                <slot name="item" :data="item" :index="index"></slot>
                            </div>
                        </template>
                    </div>
                </div>
                <Button
                    v-if="showNavigators"
                    :class="cx('pcNextButton')"
                    :disabled="forwardIsDisabled"
                    :aria-label="ariaNextButtonLabel"
                    :unstyled="unstyled"
                    @click="navForward"
                    v-bind="nextButtonProps"
                    :pt="ptm('pcNextButton')"
                    data-pc-group-section="navigator"
                >
                    <template #icon="slotProps">
                        <slot name="nexticon">
                            <component :is="isVertical() ? 'ChevronDownIcon' : 'ChevronRightIcon'" :class="slotProps.class" v-bind="ptm('pcNextButton')['icon']" />
                        </slot>
                    </template>
                </Button>
            </div>
            <ul v-if="totalIndicators >= 0 && showIndicators" ref="indicatorContent" :class="[cx('indicatorList'), indicatorsContentClass]" @keydown="onIndicatorKeydown" v-bind="ptm('indicatorList')">
                <li v-for="(indicator, i) of totalIndicators" :key="'p-carousel-indicator-' + i.toString()" :class="cx('indicator', { index: i })" v-bind="ptm('indicator', getIndicatorPTOptions(i))" :data-p-active="d_page === i">
                    <button
                        :class="cx('indicatorButton')"
                        type="button"
                        :tabindex="d_page === i ? '0' : '-1'"
                        :aria-label="ariaPageLabel(i + 1)"
                        :aria-current="d_page === i ? 'page' : undefined"
                        @click="onIndicatorClick($event, i)"
                        v-bind="ptm('indicatorButton', getIndicatorPTOptions(i))"
                    />
                </li>
            </ul>
        </div>
        <slot v-else name="empty">
            {{ emptyMessageText }}
        </slot>
        <div v-if="$slots.footer" :class="cx('footer')" v-bind="ptm('footer')">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import { UniqueComponentId } from '@primevue/core/utils';
import { removeClass, addClass, find, findSingle, getAttribute, setAttribute } from '@primeuix/utils/dom';
import { localeComparator, sort } from '@primeuix/utils/object';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronLeftIcon from '@primevue/icons/chevronleft';
import ChevronRightIcon from '@primevue/icons/chevronright';
import ChevronUpIcon from '@primevue/icons/chevronup';
import Button from 'primevue/button';
import Ripple from 'primevue/ripple';
import BaseCarousel from './BaseCarousel.vue';

export default {
    name: 'Carousel',
    extends: BaseCarousel,
    inheritAttrs: false,
    emits: ['update:page'],
    isRemainingItemsAdded: false,
    data() {
        return {
            remainingItems: 0,
            d_numVisible: this.numVisible,
            d_numScroll: this.numScroll,
            d_oldNumScroll: 0,
            d_oldNumVisible: 0,
            d_oldValue: null,
            d_page: this.page,
            totalShiftedItems: this.page * this.numScroll * -1,
            allowAutoplay: !!this.autoplayInterval,
            d_circular: this.circular || this.allowAutoplay,
            swipeThreshold: 20
        };
    },
    watch: {
        page(newValue) {
            if (newValue > this.d_page) {
                this.navForward({}, newValue);
            } else if (newValue < this.d_page) {
                this.navBackward({}, newValue);
            }

            this.d_page = newValue;
        },
        circular(newValue) {
            this.d_circular = newValue;
        },
        numVisible(newValue, oldValue) {
            this.d_numVisible = newValue;
            this.d_oldNumVisible = oldValue;
        },
        numScroll(newValue, oldValue) {
            this.d_oldNumScroll = oldValue;
            this.d_numScroll = newValue;
        },
        value(oldValue) {
            this.d_oldValue = oldValue;
        }
    },
    mounted() {
        let stateChanged = false;

        this.$el.setAttribute(this.attributeSelector, '');
        this.createStyle();
        this.calculatePosition();

        if (this.responsiveOptions) {
            this.bindDocumentListeners();
        }

        if (this.isCircular()) {
            let totalShiftedItems = this.totalShiftedItems;

            if (this.d_page === 0) {
                totalShiftedItems = -1 * this.d_numVisible;
            } else if (totalShiftedItems === 0) {
                totalShiftedItems = -1 * this.value.length;

                if (this.remainingItems > 0) {
                    this.isRemainingItemsAdded = true;
                }
            }

            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;

                stateChanged = true;
            }
        }

        if (!stateChanged && this.isAutoplay()) {
            this.startAutoplay();
        }
    },
    updated() {
        if (!this.empty) {
            const isCircular = this.isCircular();
            let stateChanged = false;
            let totalShiftedItems = this.totalShiftedItems;

            if (this.autoplayInterval) {
                this.stopAutoplay();
            }

            if (this.d_oldNumScroll !== this.d_numScroll || this.d_oldNumVisible !== this.d_numVisible || this.d_oldValue.length !== this.value.length) {
                this.remainingItems = (this.value.length - this.d_numVisible) % this.d_numScroll;

                let page = this.d_page;

                if (this.totalIndicators !== 0 && page >= this.totalIndicators) {
                    page = this.totalIndicators - 1;
                    this.$emit('update:page', page);
                    this.d_page = page;
                    stateChanged = true;
                }

                totalShiftedItems = page * this.d_numScroll * -1;

                if (isCircular) {
                    totalShiftedItems -= this.d_numVisible;
                }

                if (page === this.totalIndicators - 1 && this.remainingItems > 0) {
                    totalShiftedItems += -1 * this.remainingItems + this.d_numScroll;
                    this.isRemainingItemsAdded = true;
                } else {
                    this.isRemainingItemsAdded = false;
                }

                if (totalShiftedItems !== this.totalShiftedItems) {
                    this.totalShiftedItems = totalShiftedItems;
                    stateChanged = true;
                }

                this.d_oldNumScroll = this.d_numScroll;
                this.d_oldNumVisible = this.d_numVisible;
                this.d_oldValue = this.value;
                this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
            }

            if (isCircular) {
                if (this.d_page === 0) {
                    totalShiftedItems = -1 * this.d_numVisible;
                } else if (totalShiftedItems === 0) {
                    totalShiftedItems = -1 * this.value.length;

                    if (this.remainingItems > 0) {
                        this.isRemainingItemsAdded = true;
                    }
                }

                if (totalShiftedItems !== this.totalShiftedItems) {
                    this.totalShiftedItems = totalShiftedItems;

                    stateChanged = true;
                }
            }

            if (!stateChanged && this.isAutoplay()) {
                this.startAutoplay();
            }
        }
    },
    beforeUnmount() {
        if (this.responsiveOptions) {
            this.unbindDocumentListeners();
        }

        if (this.autoplayInterval) {
            this.stopAutoplay();
        }
    },
    methods: {
        getIndicatorPTOptions(index) {
            return {
                context: {
                    highlighted: index === this.d_page
                }
            };
        },
        step(dir, page) {
            let totalShiftedItems = this.totalShiftedItems;
            const isCircular = this.isCircular();

            if (page != null) {
                totalShiftedItems = this.d_numScroll * page * -1;

                if (isCircular) {
                    totalShiftedItems -= this.d_numVisible;
                }

                this.isRemainingItemsAdded = false;
            } else {
                totalShiftedItems += this.d_numScroll * dir;

                if (this.isRemainingItemsAdded) {
                    totalShiftedItems += this.remainingItems - this.d_numScroll * dir;
                    this.isRemainingItemsAdded = false;
                }

                let originalShiftedItems = isCircular ? totalShiftedItems + this.d_numVisible : totalShiftedItems;

                page = Math.abs(Math.floor(originalShiftedItems / this.d_numScroll));
            }

            if (isCircular && this.d_page === this.totalIndicators - 1 && dir === -1) {
                totalShiftedItems = -1 * (this.value.length + this.d_numVisible);
                page = 0;
            } else if (isCircular && this.d_page === 0 && dir === 1) {
                totalShiftedItems = 0;
                page = this.totalIndicators - 1;
            } else if (page === this.totalIndicators - 1 && this.remainingItems > 0) {
                totalShiftedItems += this.remainingItems * -1 - this.d_numScroll * dir;
                this.isRemainingItemsAdded = true;
            }

            if (this.$refs.itemsContainer) {
                !this.isUnstyled && removeClass(this.$refs.itemsContainer, 'p-items-hidden');
                this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
                this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s';
            }

            this.totalShiftedItems = totalShiftedItems;

            this.$emit('update:page', page);
            this.d_page = page;
        },
        calculatePosition() {
            if (this.$refs.itemsContainer && this.responsiveOptions) {
                let windowWidth = window.innerWidth;
                let matchedResponsiveOptionsData = {
                    numVisible: this.numVisible,
                    numScroll: this.numScroll
                };

                for (let i = 0; i < this.responsiveOptions.length; i++) {
                    let res = this.responsiveOptions[i];

                    if (parseInt(res.breakpoint, 10) >= windowWidth) {
                        matchedResponsiveOptionsData = res;
                    }
                }

                if (this.d_numScroll !== matchedResponsiveOptionsData.numScroll) {
                    let page = this.d_page;

                    page = parseInt((page * this.d_numScroll) / matchedResponsiveOptionsData.numScroll);

                    this.totalShiftedItems = matchedResponsiveOptionsData.numScroll * page * -1;

                    if (this.isCircular()) {
                        this.totalShiftedItems -= matchedResponsiveOptionsData.numVisible;
                    }

                    this.d_numScroll = matchedResponsiveOptionsData.numScroll;

                    this.$emit('update:page', page);
                    this.d_page = page;
                }

                if (this.d_numVisible !== matchedResponsiveOptionsData.numVisible) {
                    this.d_numVisible = matchedResponsiveOptionsData.numVisible;
                }
            }
        },
        navBackward(e, index) {
            if (this.d_circular || this.d_page !== 0) {
                this.step(1, index);
            }

            this.allowAutoplay = false;

            if (e.cancelable) {
                e.preventDefault();
            }
        },
        navForward(e, index) {
            if (this.d_circular || this.d_page < this.totalIndicators - 1) {
                this.step(-1, index);
            }

            this.allowAutoplay = false;

            if (e.cancelable) {
                e.preventDefault();
            }
        },
        onIndicatorClick(e, index) {
            let page = this.d_page;

            if (index > page) {
                this.navForward(e, index);
            } else if (index < page) {
                this.navBackward(e, index);
            }
        },
        onTransitionEnd() {
            if (this.$refs.itemsContainer) {
                !this.isUnstyled && addClass(this.$refs.itemsContainer, 'p-items-hidden');
                this.$refs.itemsContainer.style.transition = '';

                if ((this.d_page === 0 || this.d_page === this.totalIndicators - 1) && this.isCircular()) {
                    this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
                }
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
            const touchobj = e.changedTouches[0];
            const diff = this.isVertical() ? touchobj.pageY - this.startPos.y : touchobj.pageX - this.startPos.x;

            if (Math.abs(diff) > this.swipeThreshold && e.cancelable) {
                e.preventDefault();
            }
        },
        onTouchEnd(e) {
            let touchobj = e.changedTouches[0];

            if (this.isVertical()) {
                this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
            } else {
                this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
            }
        },
        changePageOnTouch(e, diff) {
            if (Math.abs(diff) > this.swipeThreshold) {
                if (diff < 0) {
                    // left
                    this.navForward(e);
                } else {
                    // right
                    this.navBackward(e);
                }
            }
        },
        onIndicatorKeydown(event) {
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
                case 'PageUp':
                case 'PageDown':
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
        bindDocumentListeners() {
            if (!this.documentResizeListener) {
                this.documentResizeListener = (e) => {
                    this.calculatePosition(e);
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
        startAutoplay() {
            this.interval = setInterval(() => {
                if (this.d_page === this.totalIndicators - 1) {
                    this.step(-1, 0);
                } else {
                    this.step(-1, this.d_page + 1);
                }
            }, this.autoplayInterval);
        },
        stopAutoplay() {
            if (this.interval) {
                clearInterval(this.interval);
            }
        },
        createStyle() {
            if (!this.carouselStyle) {
                this.carouselStyle = document.createElement('style');
                this.carouselStyle.type = 'text/css';
                setAttribute(this.carouselStyle, 'nonce', this.$primevue?.config?.csp?.nonce);
                document.body.appendChild(this.carouselStyle);
            }

            let innerHTML = `
                .p-carousel[${this.attributeSelector}] .p-carousel-item {
                    flex: 1 0 ${100 / this.d_numVisible}%
                }
            `;

            if (this.responsiveOptions && !this.isUnstyled) {
                let _responsiveOptions = [...this.responsiveOptions];
                const comparer = localeComparator();

                _responsiveOptions.sort((data1, data2) => {
                    const value1 = data1.breakpoint;
                    const value2 = data2.breakpoint;

                    return sort(value1, value2, -1, comparer);
                });

                for (let i = 0; i < _responsiveOptions.length; i++) {
                    let res = _responsiveOptions[i];

                    innerHTML += `
                        @media screen and (max-width: ${res.breakpoint}) {
                            .p-carousel[${this.attributeSelector}] .p-carousel-item {
                                flex: 1 0 ${100 / res.numVisible}%
                            }
                        }
                    `;
                }
            }

            this.carouselStyle.innerHTML = innerHTML;
        },
        isVertical() {
            return this.orientation === 'vertical';
        },
        isCircular() {
            return this.value && this.d_circular && this.value.length >= this.d_numVisible;
        },
        isAutoplay() {
            return this.autoplayInterval && this.allowAutoplay;
        },
        firstIndex() {
            return this.isCircular() ? -1 * (this.totalShiftedItems + this.d_numVisible) : this.totalShiftedItems * -1;
        },
        lastIndex() {
            return this.firstIndex() + this.d_numVisible - 1;
        },
        ariaSlideNumber(value) {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, value) : undefined;
        },
        ariaPageLabel(value) {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : undefined;
        }
    },
    computed: {
        totalIndicators() {
            return this.value ? Math.max(Math.ceil((this.value.length - this.d_numVisible) / this.d_numScroll) + 1, 0) : 0;
        },
        backwardIsDisabled() {
            return this.value && (!this.circular || this.value.length < this.d_numVisible) && this.d_page === 0;
        },
        forwardIsDisabled() {
            return this.value && (!this.circular || this.value.length < this.d_numVisible) && (this.d_page === this.totalIndicators - 1 || this.totalIndicators === 0);
        },
        ariaSlideLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : undefined;
        },
        ariaPrevButtonLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : undefined;
        },
        ariaNextButtonLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : undefined;
        },
        attributeSelector() {
            return UniqueComponentId();
        },
        empty() {
            return !this.value || this.value.length === 0;
        },
        emptyMessageText() {
            return this.$primevue.config?.locale?.emptyMessage || '';
        }
    },
    components: {
        Button,
        ChevronRightIcon,
        ChevronDownIcon,
        ChevronLeftIcon,
        ChevronUpIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>

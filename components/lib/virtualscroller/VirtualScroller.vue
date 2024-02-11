<template>
    <template v-if="!disabled">
        <div :ref="elementRef" :class="containerClass" :tabindex="tabindex" :style="style" @scroll="onScroll" v-bind="ptmi('root')">
            <slot
                name="content"
                :styleClass="contentClass"
                :items="loadedItems"
                :getItemOptions="getOptions"
                :loading="d_loading"
                :getLoaderOptions="getLoaderOptions"
                :itemSize="itemSize"
                :rows="loadedRows"
                :columns="loadedColumns"
                :contentRef="contentRef"
                :spacerStyle="spacerStyle"
                :contentStyle="contentStyle"
                :vertical="isVertical()"
                :horizontal="isHorizontal()"
                :both="isBoth()"
            >
                <div :ref="contentRef" :class="contentClass" :style="contentStyle" v-bind="ptm('content')">
                    <template v-for="(item, index) of loadedItems" :key="index">
                        <slot name="item" :item="item" :options="getOptions(index)"></slot>
                    </template>
                </div>
            </slot>
            <div v-if="showSpacer" class="p-virtualscroller-spacer" :style="spacerStyle" v-bind="ptm('spacer')"></div>
            <div v-if="!loaderDisabled && showLoader && d_loading" :class="loaderClass" v-bind="ptm('loader')">
                <template v-if="$slots && $slots.loader">
                    <template v-for="(_, index) of loaderArr" :key="index">
                        <slot name="loader" :options="getLoaderOptions(index, isBoth() && { numCols: d_numItemsInViewport.cols })"></slot>
                    </template>
                </template>
                <slot name="loadingicon">
                    <SpinnerIcon spin class="p-virtualscroller-loading-icon" v-bind="ptm('loadingIcon')" />
                </slot>
            </div>
        </div>
    </template>
    <template v-else>
        <slot></slot>
        <slot name="content" :items="items" :rows="items" :columns="loadedColumns"></slot>
    </template>
</template>

<script>
import SpinnerIcon from 'primevue/icons/spinner';
import { DomHandler } from 'primevue/utils';
import BaseVirtualScroller from './BaseVirtualScroller.vue';

export default {
    name: 'VirtualScroller',
    extends: BaseVirtualScroller,
    inheritAttrs: false,
    emits: ['update:numToleratedItems', 'scroll', 'scroll-index-change', 'lazy-load'],
    data() {
        const both = this.isBoth();

        return {
            first: both ? { rows: 0, cols: 0 } : 0,
            last: both ? { rows: 0, cols: 0 } : 0,
            page: both ? { rows: 0, cols: 0 } : 0,
            numItemsInViewport: both ? { rows: 0, cols: 0 } : 0,
            lastScrollPos: both ? { top: 0, left: 0 } : 0,
            d_numToleratedItems: this.numToleratedItems,
            d_loading: this.loading,
            loaderArr: [],
            spacerStyle: {},
            contentStyle: {}
        };
    },
    element: null,
    content: null,
    lastScrollPos: null,
    scrollTimeout: null,
    resizeTimeout: null,
    defaultWidth: 0,
    defaultHeight: 0,
    defaultContentWidth: 0,
    defaultContentHeight: 0,
    isRangeChanged: false,
    lazyLoadState: {},
    resizeListener: null,
    initialized: false,
    watch: {
        numToleratedItems(newValue) {
            this.d_numToleratedItems = newValue;
        },
        loading(newValue, oldValue) {
            if (this.lazy && newValue !== oldValue && newValue !== this.d_loading) {
                this.d_loading = newValue;
            }
        },
        items(newValue, oldValue) {
            if (!oldValue || oldValue.length !== (newValue || []).length) {
                this.init();
                this.calculateAutoSize();
            }
        },
        itemSize() {
            this.init();
            this.calculateAutoSize();
        },
        orientation() {
            this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
        },
        scrollHeight() {
            this.init();
            this.calculateAutoSize();
        },
        scrollWidth() {
            this.init();
            this.calculateAutoSize();
        }
    },
    mounted() {
        this.viewInit();

        this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
        this.lazyLoadState = this.lazyLoadState || {};
    },
    updated() {
        !this.initialized && this.viewInit();
    },
    unmounted() {
        this.unbindResizeListener();

        this.initialized = false;
    },
    methods: {
        viewInit() {
            if (DomHandler.isVisible(this.element)) {
                this.setContentEl(this.content);
                this.init();
                this.calculateAutoSize();
                this.bindResizeListener();

                this.defaultWidth = DomHandler.getWidth(this.element);
                this.defaultHeight = DomHandler.getHeight(this.element);
                this.defaultContentWidth = DomHandler.getWidth(this.content);
                this.defaultContentHeight = DomHandler.getHeight(this.content);
                this.initialized = true;
            }
        },
        init() {
            if (!this.disabled) {
                this.setSize();
                this.calculateOptions();
                this.setSpacerSize();
            }
        },
        isVertical() {
            return this.orientation === 'vertical';
        },
        isHorizontal() {
            return this.orientation === 'horizontal';
        },
        isBoth() {
            return this.orientation === 'both';
        },
        scrollTo(options) {
            //this.lastScrollPos = this.both ? { top: 0, left: 0 } : 0;
            this.element && this.element.scrollTo(options);
        },
        scrollToIndex(index, behavior = 'auto') {
            const both = this.isBoth();
            const horizontal = this.isHorizontal();
            const valid = both ? index.every((i) => i > -1) : index > -1;

            if (valid) {
                const first = this.first;
                const { scrollTop = 0, scrollLeft = 0 } = this.element;
                const { numToleratedItems } = this.calculateNumItems();
                const contentPos = this.getContentPosition();
                const itemSize = this.itemSize;
                const calculateFirst = (_index = 0, _numT) => (_index <= _numT ? 0 : _index);
                const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
                const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });
                let newFirst = both ? { rows: 0, cols: 0 } : 0;
                let isRangeChanged = false,
                    isScrollChanged = false;

                if (both) {
                    newFirst = { rows: calculateFirst(index[0], numToleratedItems[0]), cols: calculateFirst(index[1], numToleratedItems[1]) };
                    scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
                    isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
                    isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
                } else {
                    newFirst = calculateFirst(index, numToleratedItems);
                    horizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), scrollTop) : scrollTo(scrollLeft, calculateCoord(newFirst, itemSize, contentPos.top));
                    isScrollChanged = this.lastScrollPos !== (horizontal ? scrollLeft : scrollTop);
                    isRangeChanged = newFirst !== first;
                }

                this.isRangeChanged = isRangeChanged;
                isScrollChanged && (this.first = newFirst);
            }
        },
        scrollInView(index, to, behavior = 'auto') {
            if (to) {
                const both = this.isBoth();
                const horizontal = this.isHorizontal();
                const valid = both ? index.every((i) => i > -1) : index > -1;

                if (valid) {
                    const { first, viewport } = this.getRenderedRange();
                    const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });
                    const isToStart = to === 'to-start';
                    const isToEnd = to === 'to-end';

                    if (isToStart) {
                        if (both) {
                            if (viewport.first.rows - first.rows > index[0]) {
                                scrollTo(viewport.first.cols * this.itemSize[1], (viewport.first.rows - 1) * this.itemSize[0]);
                            } else if (viewport.first.cols - first.cols > index[1]) {
                                scrollTo((viewport.first.cols - 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
                            }
                        } else {
                            if (viewport.first - first > index) {
                                const pos = (viewport.first - 1) * this.itemSize;

                                horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
                            }
                        }
                    } else if (isToEnd) {
                        if (both) {
                            if (viewport.last.rows - first.rows <= index[0] + 1) {
                                scrollTo(viewport.first.cols * this.itemSize[1], (viewport.first.rows + 1) * this.itemSize[0]);
                            } else if (viewport.last.cols - first.cols <= index[1] + 1) {
                                scrollTo((viewport.first.cols + 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
                            }
                        } else {
                            if (viewport.last - first <= index + 1) {
                                const pos = (viewport.first + 1) * this.itemSize;

                                horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
                            }
                        }
                    }
                }
            } else {
                this.scrollToIndex(index, behavior);
            }
        },
        getRenderedRange() {
            const calculateFirstInViewport = (_pos, _size) => Math.floor(_pos / (_size || _pos));

            let firstInViewport = this.first;
            let lastInViewport = 0;

            if (this.element) {
                const both = this.isBoth();
                const horizontal = this.isHorizontal();
                const { scrollTop, scrollLeft } = this.element;

                if (both) {
                    firstInViewport = { rows: calculateFirstInViewport(scrollTop, this.itemSize[0]), cols: calculateFirstInViewport(scrollLeft, this.itemSize[1]) };
                    lastInViewport = { rows: firstInViewport.rows + this.numItemsInViewport.rows, cols: firstInViewport.cols + this.numItemsInViewport.cols };
                } else {
                    const scrollPos = horizontal ? scrollLeft : scrollTop;

                    firstInViewport = calculateFirstInViewport(scrollPos, this.itemSize);
                    lastInViewport = firstInViewport + this.numItemsInViewport;
                }
            }

            return {
                first: this.first,
                last: this.last,
                viewport: {
                    first: firstInViewport,
                    last: lastInViewport
                }
            };
        },
        calculateNumItems() {
            const both = this.isBoth();
            const horizontal = this.isHorizontal();
            const itemSize = this.itemSize;
            const contentPos = this.getContentPosition();
            const contentWidth = this.element ? this.element.offsetWidth - contentPos.left : 0;
            const contentHeight = this.element ? this.element.offsetHeight - contentPos.top : 0;
            const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
            const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
            const numItemsInViewport = both
                ? { rows: calculateNumItemsInViewport(contentHeight, itemSize[0]), cols: calculateNumItemsInViewport(contentWidth, itemSize[1]) }
                : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, itemSize);

            const numToleratedItems = this.d_numToleratedItems || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));

            return { numItemsInViewport, numToleratedItems };
        },
        calculateOptions() {
            const both = this.isBoth();
            const first = this.first;
            const { numItemsInViewport, numToleratedItems } = this.calculateNumItems();
            const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
            const last = both
                ? { rows: calculateLast(first.rows, numItemsInViewport.rows, numToleratedItems[0]), cols: calculateLast(first.cols, numItemsInViewport.cols, numToleratedItems[1], true) }
                : calculateLast(first, numItemsInViewport, numToleratedItems);

            this.last = last;
            this.numItemsInViewport = numItemsInViewport;
            this.d_numToleratedItems = numToleratedItems;
            this.$emit('update:numToleratedItems', this.d_numToleratedItems);

            if (this.showLoader) {
                this.loaderArr = both ? Array.from({ length: numItemsInViewport.rows }).map(() => Array.from({ length: numItemsInViewport.cols })) : Array.from({ length: numItemsInViewport });
            }

            if (this.lazy) {
                Promise.resolve().then(() => {
                    this.lazyLoadState = {
                        first: this.step ? (both ? { rows: 0, cols: first.cols } : 0) : first,
                        last: Math.min(this.step ? this.step : last, this.items?.length || 0)
                    };

                    this.$emit('lazy-load', this.lazyLoadState);
                });
            }
        },
        calculateAutoSize() {
            if (this.autoSize && !this.d_loading) {
                Promise.resolve().then(() => {
                    if (this.content) {
                        const both = this.isBoth();
                        const horizontal = this.isHorizontal();
                        const vertical = this.isVertical();

                        this.content.style.minHeight = this.content.style.minWidth = 'auto';
                        this.content.style.position = 'relative';
                        this.element.style.contain = 'none';

                        /*const [contentWidth, contentHeight] = [DomHandler.getWidth(this.content), DomHandler.getHeight(this.content)];

                        contentWidth !== this.defaultContentWidth && (this.element.style.width = '');
                        contentHeight !== this.defaultContentHeight && (this.element.style.height = '');*/

                        const [width, height] = [DomHandler.getWidth(this.element), DomHandler.getHeight(this.element)];

                        (both || horizontal) && (this.element.style.width = width < this.defaultWidth ? width + 'px' : this.scrollWidth || this.defaultWidth + 'px');
                        (both || vertical) && (this.element.style.height = height < this.defaultHeight ? height + 'px' : this.scrollHeight || this.defaultHeight + 'px');

                        this.content.style.minHeight = this.content.style.minWidth = '';
                        this.content.style.position = '';
                        this.element.style.contain = '';
                    }
                });
            }
        },
        getLast(last = 0, isCols) {
            return this.items ? Math.min(isCols ? (this.columns || this.items[0])?.length || 0 : this.items?.length || 0, last) : 0;
        },
        getContentPosition() {
            if (this.content) {
                const style = getComputedStyle(this.content);
                const left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
                const right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
                const top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
                const bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);

                return { left, right, top, bottom, x: left + right, y: top + bottom };
            }

            return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
        },
        setSize() {
            if (this.element) {
                const both = this.isBoth();
                const horizontal = this.isHorizontal();
                const parentElement = this.element.parentElement;
                const width = this.scrollWidth || `${this.element.offsetWidth || parentElement.offsetWidth}px`;
                const height = this.scrollHeight || `${this.element.offsetHeight || parentElement.offsetHeight}px`;
                const setProp = (_name, _value) => (this.element.style[_name] = _value);

                if (both || horizontal) {
                    setProp('height', height);
                    setProp('width', width);
                } else {
                    setProp('height', height);
                }
            }
        },
        setSpacerSize() {
            const items = this.items;

            if (items) {
                const both = this.isBoth();
                const horizontal = this.isHorizontal();
                const contentPos = this.getContentPosition();
                const setProp = (_name, _value, _size, _cpos = 0) => (this.spacerStyle = { ...this.spacerStyle, ...{ [`${_name}`]: (_value || []).length * _size + _cpos + 'px' } });

                if (both) {
                    setProp('height', items, this.itemSize[0], contentPos.y);
                    setProp('width', this.columns || items[1], this.itemSize[1], contentPos.x);
                } else {
                    horizontal ? setProp('width', this.columns || items, this.itemSize, contentPos.x) : setProp('height', items, this.itemSize, contentPos.y);
                }
            }
        },
        setContentPosition(pos) {
            if (this.content && !this.appendOnly) {
                const both = this.isBoth();
                const horizontal = this.isHorizontal();
                const first = pos ? pos.first : this.first;
                const calculateTranslateVal = (_first, _size) => _first * _size;
                const setTransform = (_x = 0, _y = 0) => (this.contentStyle = { ...this.contentStyle, ...{ transform: `translate3d(${_x}px, ${_y}px, 0)` } });

                if (both) {
                    setTransform(calculateTranslateVal(first.cols, this.itemSize[1]), calculateTranslateVal(first.rows, this.itemSize[0]));
                } else {
                    const translateVal = calculateTranslateVal(first, this.itemSize);

                    horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
                }
            }
        },
        onScrollPositionChange(event) {
            const target = event.target;
            const both = this.isBoth();
            const horizontal = this.isHorizontal();
            const contentPos = this.getContentPosition();
            const calculateScrollPos = (_pos, _cpos) => (_pos ? (_pos > _cpos ? _pos - _cpos : _pos) : 0);
            const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));

            const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
                return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
            };

            const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
                if (_currentIndex <= _numT) return 0;
                else return Math.max(0, _isScrollDownOrRight ? (_currentIndex < _triggerIndex ? _first : _currentIndex - _numT) : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
            };

            const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols) => {
                let lastValue = _first + _num + 2 * _numT;

                if (_currentIndex >= _numT) {
                    lastValue += _numT + 1;
                }

                return this.getLast(lastValue, _isCols);
            };

            const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
            const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);

            let newFirst = both ? { rows: 0, cols: 0 } : 0;
            let newLast = this.last;
            let isRangeChanged = false;
            let newScrollPos = this.lastScrollPos;

            if (both) {
                const isScrollDown = this.lastScrollPos.top <= scrollTop;
                const isScrollRight = this.lastScrollPos.left <= scrollLeft;

                if (!this.appendOnly || (this.appendOnly && (isScrollDown || isScrollRight))) {
                    const currentIndex = { rows: calculateCurrentIndex(scrollTop, this.itemSize[0]), cols: calculateCurrentIndex(scrollLeft, this.itemSize[1]) };
                    const triggerIndex = {
                        rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
                        cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
                    };

                    newFirst = {
                        rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
                        cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
                    };
                    newLast = {
                        rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
                        cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
                    };

                    isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
                    newScrollPos = { top: scrollTop, left: scrollLeft };
                }
            } else {
                const scrollPos = horizontal ? scrollLeft : scrollTop;
                const isScrollDownOrRight = this.lastScrollPos <= scrollPos;

                if (!this.appendOnly || (this.appendOnly && isScrollDownOrRight)) {
                    const currentIndex = calculateCurrentIndex(scrollPos, this.itemSize);
                    const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);

                    newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
                    newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
                    isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
                    newScrollPos = scrollPos;
                }
            }

            return {
                first: newFirst,
                last: newLast,
                isRangeChanged,
                scrollPos: newScrollPos
            };
        },
        onScrollChange(event) {
            const { first, last, isRangeChanged, scrollPos } = this.onScrollPositionChange(event);

            if (isRangeChanged) {
                const newState = { first, last };

                this.setContentPosition(newState);

                this.first = first;
                this.last = last;
                this.lastScrollPos = scrollPos;

                this.$emit('scroll-index-change', newState);

                if (this.lazy && this.isPageChanged(first)) {
                    const lazyLoadState = {
                        first: this.step ? Math.min(this.getPageByFirst(first) * this.step, (this.items?.length || 0) - this.step) : first,
                        last: Math.min(this.step ? (this.getPageByFirst(first) + 1) * this.step : last, this.items?.length || 0)
                    };
                    const isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;

                    isLazyStateChanged && this.$emit('lazy-load', lazyLoadState);
                    this.lazyLoadState = lazyLoadState;
                }
            }
        },
        onScroll(event) {
            this.$emit('scroll', event);

            if (this.delay) {
                if (this.scrollTimeout) {
                    clearTimeout(this.scrollTimeout);
                }

                if (this.isPageChanged()) {
                    if (!this.d_loading && this.showLoader) {
                        const { isRangeChanged } = this.onScrollPositionChange(event);
                        const changed = isRangeChanged || (this.step ? this.isPageChanged() : false);

                        changed && (this.d_loading = true);
                    }

                    this.scrollTimeout = setTimeout(() => {
                        this.onScrollChange(event);

                        if (this.d_loading && this.showLoader && (!this.lazy || this.loading === undefined)) {
                            this.d_loading = false;
                            this.page = this.getPageByFirst();
                        }
                    }, this.delay);
                }
            } else {
                this.onScrollChange(event);
            }
        },
        onResize() {
            if (this.resizeTimeout) {
                clearTimeout(this.resizeTimeout);
            }

            this.resizeTimeout = setTimeout(() => {
                if (DomHandler.isVisible(this.element)) {
                    const both = this.isBoth();
                    const vertical = this.isVertical();
                    const horizontal = this.isHorizontal();
                    const [width, height] = [DomHandler.getWidth(this.element), DomHandler.getHeight(this.element)];
                    const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
                    const reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;

                    if (reinit) {
                        this.d_numToleratedItems = this.numToleratedItems;
                        this.defaultWidth = width;
                        this.defaultHeight = height;
                        this.defaultContentWidth = DomHandler.getWidth(this.content);
                        this.defaultContentHeight = DomHandler.getHeight(this.content);

                        this.init();
                    }
                }
            }, this.resizeDelay);
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = this.onResize.bind(this);

                window.addEventListener('resize', this.resizeListener);
                window.addEventListener('orientationchange', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                window.removeEventListener('orientationchange', this.resizeListener);
                this.resizeListener = null;
            }
        },
        getOptions(renderedIndex) {
            const count = (this.items || []).length;
            const index = this.isBoth() ? this.first.rows + renderedIndex : this.first + renderedIndex;

            return {
                index,
                count,
                first: index === 0,
                last: index === count - 1,
                even: index % 2 === 0,
                odd: index % 2 !== 0
            };
        },
        getLoaderOptions(index, extOptions) {
            let count = this.loaderArr.length;

            return {
                index,
                count,
                first: index === 0,
                last: index === count - 1,
                even: index % 2 === 0,
                odd: index % 2 !== 0,
                ...extOptions
            };
        },
        getPageByFirst(first) {
            return Math.floor(((first ?? this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
        },
        isPageChanged(first) {
            return this.step ? this.page !== this.getPageByFirst(first ?? this.first) : true;
        },
        setContentEl(el) {
            this.content = el || this.content || DomHandler.findSingle(this.element, '[data-pc-section="content"]');
        },
        elementRef(el) {
            this.element = el;
        },
        contentRef(el) {
            this.content = el;
        }
    },
    computed: {
        containerClass() {
            return [
                'p-virtualscroller',
                this.class,
                {
                    'p-virtualscroller-inline': this.inline,
                    'p-virtualscroller-both p-both-scroll': this.isBoth(),
                    'p-virtualscroller-horizontal p-horizontal-scroll': this.isHorizontal()
                }
            ];
        },
        contentClass() {
            return [
                'p-virtualscroller-content',
                {
                    'p-virtualscroller-loading': this.d_loading
                }
            ];
        },
        loaderClass() {
            return [
                'p-virtualscroller-loader',
                {
                    'p-component-overlay': !this.$slots.loader
                }
            ];
        },
        loadedItems() {
            if (this.items && !this.d_loading) {
                if (this.isBoth()) return this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map((item) => (this.columns ? item : item.slice(this.appendOnly ? 0 : this.first.cols, this.last.cols)));
                else if (this.isHorizontal() && this.columns) return this.items;
                else return this.items.slice(this.appendOnly ? 0 : this.first, this.last);
            }

            return [];
        },
        loadedRows() {
            return this.d_loading ? (this.loaderDisabled ? this.loaderArr : []) : this.loadedItems;
        },
        loadedColumns() {
            if (this.columns) {
                const both = this.isBoth();
                const horizontal = this.isHorizontal();

                if (both || horizontal) {
                    return this.d_loading && this.loaderDisabled ? (both ? this.loaderArr[0] : this.loaderArr) : this.columns.slice(both ? this.first.cols : this.first, both ? this.last.cols : this.last);
                }
            }

            return this.columns;
        }
    },
    components: {
        SpinnerIcon: SpinnerIcon
    }
};
</script>

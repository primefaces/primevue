<template>
    <template v-if="!disabled">
        <div :ref="elementRef" :class="containerClass" :style="style" @scroll="onScroll">
            <slot name="content" styleClass="p-virtualscroller-content" :contentRef="contentRef" :items="loadedItems" :getItemOptions="getOptions">
                <div :ref="contentRef" class="p-virtualscroller-content">
                    <template v-for="(item, index) of loadedItems" :key="index">
                        <slot name="item" :item="item" :options="getOptions(index)"></slot>
                    </template>
                </div>
            </slot>
            <div :ref="spacerRef" class="p-virtualscroller-spacer"></div>
            <div :class="loaderClass" v-if="d_loading">
                <template v-for="(loadItem, index) of loaderArr" :key="index">
                    <slot name="loader" :options="getLoaderOptions(index)">
                        <i class="p-virtualscroller-loading-icon pi pi-spinner pi-spin"></i>
                    </slot>
                </template>
            </div>
        </div>
    </template>
    <template v-else>
        <slot></slot>
        <slot name="content" :items="items"></slot>
    </template>
</template>

<script>
export default {
    name: 'VirtualScroller',
    emits: ['update:numToleratedItems', 'scroll-index-change', 'lazy-load'],
    props: {
        items: {
            type: Array,
            default: null
        },
        itemSize: {
            type: [Number,Array],
            default: null
        },
        scrollHeight: null,
        scrollWidth: null,
        orientation: {
            type: String,
            default: 'vertical'
        },
        numToleratedItems: {
            type: Number,
            default: null
        },
        delay: {
            type: Number,
            default: 0
        },
        lazy: {
            type: Boolean,
            default: false
        },
        showLoader: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        style: null,
        class: null,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            first: this.isBoth() ? { rows: 0, cols: 0 } : 0,
            last: this.isBoth() ? { rows: 0, cols: 0 } : 0,
            numItemsInViewport: this.isBoth() ? { rows: 0, cols: 0 } : 0,
            lastScrollPos: this.isBoth() ? { top: 0, left: 0 } : 0,
            d_numToleratedItems: this.numToleratedItems,
            d_loading: this.loading,
            loaderArr: null
        }
    },
    element: null,
    content: null,
    spacer: null,
    scrollTimeout: null,
    mounted() {
        this.init();
    },
    watch: {
        numToleratedItems(newValue) {
            this.d_numToleratedItems = newValue;
        },
        loading(newValue) {
            this.d_loading = newValue;
        },
        items(newValue, oldVal) {
            if (!oldVal || oldVal.length !== (newValue || []).length) {
                this.init();
            }
        }
    },
    methods: {
        init() {
            if (!this.disabled) {
                this.setSize();
                this.calculateOptions();
                this.setSpacerSize();
            }
        },
        getLast(last, isCols) {
            return this.items ? Math.min((isCols ? this.items[0].length : this.items.length), last) : 0;
        },
        calculateOptions() {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const first = this.first;
            const itemSize = this.itemSize;
            const contentPadding = this.getContentPadding();
            const contentWidth = this.element ? this.element.offsetWidth - contentPadding.left : 0;
            const contentHeight = this.element ? this.element.offsetHeight - contentPadding.top : 0;
            const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
            const numItemsInViewport = isBoth ?
                { rows: calculateNumItemsInViewport(contentHeight, itemSize[0]), cols: calculateNumItemsInViewport(contentWidth, itemSize[1]) } :
                calculateNumItemsInViewport((isHorizontal ? contentWidth : contentHeight), itemSize);

            let numToleratedItems = this.d_numToleratedItems || Math.ceil((isBoth ? numItemsInViewport.rows : numItemsInViewport) / 2);
            const calculateLast = (_first, _num, _isCols) => this.getLast(_first + _num + ((_first < numToleratedItems ? 2 : 3) * numToleratedItems), _isCols);
            const last = isBoth ?
                { rows: calculateLast(first.rows, numItemsInViewport.rows), cols: calculateLast(first.cols, numItemsInViewport.cols, true) } :
                calculateLast(first, numItemsInViewport);

            this.d_numToleratedItems = numToleratedItems;
            this.$emit('update:numToleratedItems', this.d_numToleratedItems);
            this.last = last;
            this.numItemsInViewport = numItemsInViewport;

            if (this.showLoader) {
                if (this.$slots && this.$slots.loader) {
                    this.loaderArr = Array.from({ length: (isBoth ? numItemsInViewport.rows : numItemsInViewport) });
                }
                else {
                    this.loaderArr = Array.from({ length: 1});
                }
            }

            if (this.lazy) {
                this.$emit('lazy-load', { first, last });
            }
        },
        getContentPadding() {
            if (this.content) {
                const style = getComputedStyle(this.content);
                const left = parseInt(parseFloat(style.paddingLeft.slice(0, -2)), 10);
                const right = parseInt(parseFloat(style.paddingRight.slice(0, -2)), 10);
                const top = parseInt(parseFloat(style.paddingTop.slice(0, -2)), 10);
                const bottom = parseInt(parseFloat(style.paddingBottom.slice(0, -2)), 10);

                return { left, right, top, bottom, x: left + right, y: top + bottom };
            }

            return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
        },
        setSize() {
            if (this.element) {
                const isBoth = this.isBoth();
                const isHorizontal = this.isHorizontal();
                const parentElement = this.element.parentElement;
                const width = this.scrollWidth || `${(this.element.offsetWidth || parentElement.offsetWidth)}px`;
                const height = this.scrollHeight || `${(this.element.offsetHeight || parentElement.offsetHeight)}px`;
                const setProp = (_name, _value) => this.element.style[_name] = _value;

                if (isBoth) {
                    setProp('height', height);
                    setProp('width', width);
                }
                else {
                    isHorizontal ? setProp('width', width) : setProp('height', height);
                }
            }
        },
        setSpacerSize() {
            const items = this.items;

            if (this.spacer && items) {
                const isBoth = this.isBoth();
                const isHorizontal = this.isHorizontal();
                const itemSize = this.itemSize;
                const contentPadding = this.getContentPadding();
                const setProp = (_name, _value, _size, _padding = 0) => this.spacer.style[_name] = (((_value || []).length * _size) + _padding) + 'px';

                if (isBoth) {
                    setProp('height', items[0], itemSize[0], contentPadding.y);
                    setProp('width', items[1], itemSize[1], contentPadding.x);
                }
                else {
                    isHorizontal ? setProp('width', items, itemSize, contentPadding.x) : setProp('height', items, itemSize, contentPadding.y);
                }
            }
        },
        setContentPosition(pos) {
            if (this.content) {
                const isBoth = this.isBoth();
                const isHorizontal = this.isHorizontal();
                const content = this.content;
                const first = pos ? pos.first : this.first;
                const itemSize = this.itemSize;
                const calculateTranslateVal = (_first, _size) => (_first * _size);
                const setTransform = (_x = 0, _y = 0) => content.style.transform = `translate3d(${_x}px, ${_y}px, 0)`;

                if (isBoth) {
                    setTransform(calculateTranslateVal(first.cols, itemSize[1]), calculateTranslateVal(first.rows, itemSize[0]));
                }
                else {
                    const translateVal = calculateTranslateVal(first, itemSize);
                    isHorizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
                }
            }
        },
        onScrollPositionChange(event) {
            const target = event.target;
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const itemSize = this.itemSize;
            const contentPadding = this.getContentPadding();
            const calculateScrollPos = (_pos, _padding) => _pos ? (_pos > _padding ? _pos - _padding : _pos) : 0;
            const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));
            const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _isScrollDownOrRight) => {
                return (_currentIndex <= this.d_numToleratedItems ? this.d_numToleratedItems : (_isScrollDownOrRight ? (_last - _num - this.d_numToleratedItems) : (_first + this.d_numToleratedItems - 1)))
            };
            const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _isScrollDownOrRight) => {
                if (_currentIndex <= this.d_numToleratedItems)
                    return 0;
                else
                    return _isScrollDownOrRight ?
                        (_currentIndex < _triggerIndex ? _first : _currentIndex - this.d_numToleratedItems) :
                        (_currentIndex > _triggerIndex ? _first : _currentIndex - (2 * this.d_numToleratedItems));
            };
            const calculateLast = (_currentIndex, _first, _last, _num, _isCols) => {
                let lastValue = _first + _num + (2 * this.d_numToleratedItems);

                if (_currentIndex >= this.d_numToleratedItems) {
                    lastValue += (this.d_numToleratedItems + 1);
                }

                return this.getLast(lastValue, _isCols);
            };

            const scrollTop = calculateScrollPos(target.scrollTop, contentPadding.top);
            const scrollLeft = calculateScrollPos(target.scrollLeft, contentPadding.left);

            let newFirst = 0;
            let newLast = this.last;
            let isRangeChanged = false;

            if (isBoth) {
                const isScrollDown = this.lastScrollPos.top <= scrollTop;
                const isScrollRight = this.lastScrollPos.left <= scrollLeft;
                const currentIndex = { rows: calculateCurrentIndex(scrollTop, itemSize[0]), cols: calculateCurrentIndex(scrollLeft, itemSize[1]) };
                const triggerIndex = {
                    rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, isScrollDown),
                    cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, isScrollRight)
                };

                newFirst = {
                    rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, isScrollDown),
                    cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, isScrollRight)
                };
                newLast = {
                    rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows),
                    cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, true)
                };
                isRangeChanged = (newFirst.rows !== this.first.rows || newFirst.cols !== this.first.cols) || (newLast.rows !== this.last.rows || newLast.cols !== this.last.cols);

                this.lastScrollPos = { top: scrollTop, left: scrollLeft };
            }
            else {
                const scrollPos = isHorizontal ? scrollLeft : scrollTop;
                const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
                const currentIndex = calculateCurrentIndex(scrollPos, itemSize);
                const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, isScrollDownOrRight);

                newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, isScrollDownOrRight);
                newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport);
                isRangeChanged = newFirst !== this.first || newLast !== this.last;

                this.lastScrollPos = scrollPos;
            }

            return {
                first: newFirst,
                last: newLast,
                isRangeChanged
            }
        },
        onScrollChange(event) {
            const { first, last, isRangeChanged } = this.onScrollPositionChange(event);

            if (isRangeChanged) {
                const newState = { first, last };

                this.setContentPosition(newState);

                if (this.lazy) {
                    this.$emit('lazy-load', { first, last });
                }
                this.first = first;
                this.last = last;

                this.$emit('scroll-index-change', { first, last });
            }
        },
        onScroll(event) {
            if (this.delay && !this.lazy) {
                if (this.scrollTimeout) {
                    clearTimeout(this.scrollTimeout);
                }

                if (!this.d_loading && this.showLoader) {
                    const { isRangeChanged: changed } = this.onScrollPositionChange(event);

                    if (changed) {
                        this.d_loading = true;
                    }
                }

                this.scrollTimeout = setTimeout(() => {
                    this.onScrollChange(event);

                    if (this.d_loading && this.showLoader && !this.lazy) {
                        this.d_loading = false;
                    }
                }, this.delay);
            }
            else {
                this.onScrollChange(event);
            }
        },
        getOptions(renderedIndex) {
            let count = this.items.length;
            let index = this.isBoth() ? this.first.rows + renderedIndex : this.first + renderedIndex;
            return {
                index,
                count,
                first: index === 0,
                last: index === (count - 1),
                even: index % 2 === 0,
                odd: index % 2 !== 0
            };
        },
        getLoaderOptions(index) {
            let count = this.loaderArr.length;
            return {
                loading: this.d_loading,
                first: index === 0,
                last: index === (count - 1),
                even: index % 2 === 0,
                odd: index % 2 !== 0
            }
        },
        isHorizontal() {
            return this.orientation === 'horizontal';
        },
        isBoth() {
            return this.orientation === 'both';
        },
        scrollTo(options) {
            if (this.element) {
                this.element.scrollTo(options);
            }
        },
        scrollToIndex(index, behavior = 'auto') {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const itemSize = this.itemSize;
            const contentPadding = this.getContentPadding();
            const calculateFirst = (_index = 0) => (_index <= this.d_numToleratedItems ? 0 : _index);
            const calculateCoord = (_first, _size, _padding) => (_first * _size) + _padding;
            const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });

            if (isBoth) {
                const newFirst = { rows: calculateFirst(index[0]), cols: calculateFirst(index[1]) };
                if (newFirst.rows !== this.first.rows || newFirst.cols !== this.first.cols)
                    scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPadding.left),calculateCoord(newFirst.rows, itemSize[0], contentPadding.top));
            }
            else {
                const newFirst = calculateFirst(index);

                if (newFirst !== this.first) {
                    isHorizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPadding.left), 0) : scrollTo(0, calculateCoord(newFirst, itemSize, contentPadding.top));
                }

                this.first = newFirst;
            }
        },
        scrollInView(index, to, behavior = 'auto') {
            if (to) {
                const isBoth = this.isBoth();
                const isHorizontal = this.isHorizontal();
                const { first, viewport } = this.getRenderedRange();
                const itemSize = this.itemSize;
                const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });
                const isToStart = to === 'to-start';
                const isToEnd = to === 'to-end';

                if (isToStart) {
                    if (isBoth) {
                        if (viewport.first.rows - first.rows > index[0]) {
                            scrollTo(viewport.first.cols * itemSize[1], (viewport.first.rows - 1) * itemSize[0]);
                        }
                        else if (viewport.first.cols - first.cols > index[1]) {
                            scrollTo((viewport.first.cols - 1) * itemSize[1], viewport.first.rows * itemSize[0]);
                        }
                    }
                    else {
                        if (viewport.first - first > index) {
                            const pos = (viewport.first - 1) * itemSize;
                            isHorizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
                        }
                    }
                }
                else if (isToEnd) {
                    if (isBoth) {
                        if (viewport.last.rows - first.rows <= index[0] + 1) {
                            scrollTo(viewport.first.cols * itemSize[1], (viewport.first.rows + 1) * itemSize[0]);
                        }
                        else if (viewport.last.cols - first.cols <= index[1] + 1) {
                            scrollTo((viewport.first.cols + 1) * itemSize[1], viewport.first.rows * itemSize[0]);
                        }
                    }
                    else {
                        if (viewport.last - first <= index + 1) {
                            const pos = (viewport.first + 1) * itemSize;
                            isHorizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
                        }
                    }
                }
            }
            else {
                this.scrollToIndex(index, behavior);
            }
        },
        getRenderedRange() {
            const isBoth = this.isBoth();
            const isHorizontal = this.isHorizontal();
            const itemSize = this.itemSize;
            const calculateFirstInViewport = (_pos, _size) => Math.floor(_pos / (_size || _pos));

            let firstInViewport = this.first;
            let lastInViewport = 0;

            if (this.element) {
                const scrollTop = this.element.scrollTop;
                const scrollLeft = this.element.scrollLeft;

                if (isBoth) {
                    firstInViewport = { rows: calculateFirstInViewport(scrollTop, itemSize[0]), cols: calculateFirstInViewport(scrollLeft, itemSize[1]) };
                    lastInViewport = { rows: firstInViewport.rows + this.numItemsInViewport.rows, cols: firstInViewport.cols + this.numItemsInViewport.cols };
                }
                else {
                    const scrollPos = isHorizontal ? scrollLeft : scrollTop;
                    firstInViewport = calculateFirstInViewport(scrollPos, itemSize);
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
        elementRef(el) {
            this.element = el;
        },
        contentRef(el) {
            this.content = el;
        },
        spacerRef(el) {
            this.spacer = el;
        }
    },
    computed: {
        containerClass() {
            return ['p-virtualscroller', {
                'p-both-scroll': this.isBoth(),
                'p-horizontal-scroll': this.isHorizontal()
            }, this.class];
        },
        loaderClass() {
            return ['p-virtualscroller-loader', {
                'p-component-overlay': !this.$slots.loader
            }];
        },
        loadedItems() {
            const items = this.items;
            if (items && !this.d_loading) {
                const isBoth = this.isBoth();

                if (isBoth) {
                    return items.slice(this.first.rows, this.last.rows).map((item) => {
                        const items = item.slice(this.first.cols, this.last.cols);
                        return items;
                    });
                }
                else {
                    return items.slice(this.first, this.last).map((item) => {
                        return item;
                    });
                }
            }

            return [];
        }
    }
}
</script>

<style>
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    contain: content;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

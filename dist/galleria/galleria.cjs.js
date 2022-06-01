'use strict';

var utils = require('primevue/utils');
var Ripple = require('primevue/ripple');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

var script$4 = {
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
                    : prevItemIndex;

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
        'ripple': Ripple__default["default"]
    }
};

const _hoisted_1$2 = { class: "p-galleria-item-wrapper" };
const _hoisted_2$2 = { class: "p-galleria-item-container" };
const _hoisted_3$2 = ["disabled"];
const _hoisted_4$2 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-galleria-item-prev-icon pi pi-chevron-left" }, null, -1);
const _hoisted_5$2 = [
  _hoisted_4$2
];
const _hoisted_6$1 = { class: "p-galleria-item" };
const _hoisted_7 = ["disabled"];
const _hoisted_8 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-galleria-item-next-icon pi pi-chevron-right" }, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = {
  key: 2,
  class: "p-galleria-caption"
};
const _hoisted_11 = {
  key: 0,
  class: "p-galleria-indicators p-reset"
};
const _hoisted_12 = ["onClick", "onMouseenter", "onKeydown"];
const _hoisted_13 = {
  key: 0,
  type: "button",
  tabindex: "-1",
  class: "p-link"
};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = vue.resolveDirective("ripple");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
    vue.createElementVNode("div", _hoisted_2$2, [
      ($props.showItemNavigators)
        ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            type: "button",
            class: vue.normalizeClass($options.navBackwardClass),
            onClick: _cache[0] || (_cache[0] = $event => ($options.navBackward($event))),
            disabled: $options.isNavBackwardDisabled()
          }, _hoisted_5$2, 10, _hoisted_3$2)), [
            [_directive_ripple]
          ])
        : vue.createCommentVNode("", true),
      vue.createElementVNode("div", _hoisted_6$1, [
        ($props.templates.item)
          ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates.item), {
              key: 0,
              item: $options.activeItem
            }, null, 8, ["item"]))
          : vue.createCommentVNode("", true)
      ]),
      ($props.showItemNavigators)
        ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
            key: 1,
            type: "button",
            class: vue.normalizeClass($options.navForwardClass),
            onClick: _cache[1] || (_cache[1] = $event => ($options.navForward($event))),
            disabled: $options.isNavForwardDisabled()
          }, _hoisted_9, 10, _hoisted_7)), [
            [_directive_ripple]
          ])
        : vue.createCommentVNode("", true),
      ($props.templates['caption'])
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [
            ($props.templates.caption)
              ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates.caption), {
                  key: 0,
                  item: $options.activeItem
                }, null, 8, ["item"]))
              : vue.createCommentVNode("", true)
          ]))
        : vue.createCommentVNode("", true)
    ]),
    ($props.showIndicators)
      ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_11, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.value, (item, index) => {
            return (vue.openBlock(), vue.createElementBlock("li", {
              key: `p-galleria-indicator-${index}`,
              tabindex: "0",
              onClick: $event => ($options.onIndicatorClick(index)),
              onMouseenter: $event => ($options.onIndicatorMouseEnter(index)),
              onKeydown: vue.withKeys($event => ($options.onIndicatorKeyDown(index)), ["enter"]),
              class: vue.normalizeClass(['p-galleria-indicator', {'p-highlight': $options.isIndicatorItemActive(index)}])
            }, [
              (!$props.templates['indicator'])
                ? (vue.openBlock(), vue.createElementBlock("button", _hoisted_13))
                : vue.createCommentVNode("", true),
              ($props.templates.indicator)
                ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates.indicator), {
                    key: 1,
                    index: index
                  }, null, 8, ["index"]))
                : vue.createCommentVNode("", true)
            ], 42, _hoisted_12))
          }), 128))
        ]))
      : vue.createCommentVNode("", true)
  ]))
}

script$4.render = render$3;

var script$3 = {
    name: 'GalleriaThumbnails',
    emits: ['stop-slideshow', 'update:activeIndex'],
    props: {
        containerId: {
            type: String,
            default: null,
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
            default: "300px"
        },
        showThumbnailNavigators: {
            type: Boolean,
            default: true
        },
        templates: {
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
        }
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
            }
            else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this.d_activeIndex) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
            else if (this.value.length - this.d_numVisible < this.d_activeIndex && this.d_numVisible % 2 === 0) {
                totalShiftedItems = (this.d_activeIndex * -1) + this.getMedianItemIndex() + 1;
            }
            else {
                totalShiftedItems = (this.d_activeIndex * -1) + this.getMedianItemIndex();
            }

            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }

            this.$refs.itemsContainer.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100/ this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.d_numVisible)}%, 0, 0)`;

            if (this.d_oldActiveItemIndex !== this.d_activeIndex) {
                utils.DomHandler.removeClass(this.$refs.itemsContainer, 'p-items-hidden');
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

            if (dir < 0 && (-1 * totalShiftedItems) + this.d_numVisible > (this.value.length - 1)) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
            else if (dir > 0 && totalShiftedItems > 0) {
                totalShiftedItems = 0;
            }

            if (this.circular) {
                if (dir < 0 && this.value.length - 1 === this.d_activeIndex) {
                    totalShiftedItems = 0;
                }
                else if (dir > 0 && this.d_activeIndex === 0) {
                    totalShiftedItems = this.d_numVisible - this.value.length;
                }
            }

            if (this.$refs.itemsContainer) {
                utils.DomHandler.removeClass(this.$refs.itemsContainer, 'p-items-hidden');
                this.$refs.itemsContainer.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100/ this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.d_numVisible)}%, 0, 0)`;
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

            return (this.d_numVisible % 2) ? index : index - 1;
        },
        navBackward(e) {
            this.stopSlideShow();

            let prevItemIndex = this.d_activeIndex !== 0 ? this.d_activeIndex - 1 : 0;
            let diff = prevItemIndex + this.totalShiftedItems;
            if ((this.d_numVisible - diff - 1) > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) !== 0 || this.circular)) {
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

            let nextItemIndex = this.d_activeIndex + 1;
            if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1 || this.circular)) {
                this.step(-1);
            }

            let activeIndex = this.circular && (this.value.length - 1) === this.d_activeIndex ? 0 : nextItemIndex;
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
                    dir = (this.d_numVisible - diff - 1) - this.getMedianItemIndex();
                    if (dir > 0 && (-1 * this.totalShiftedItems) !== 0) {
                        this.step(dir);
                    }
                }
                else {
                    dir = this.getMedianItemIndex() - diff;
                    if (dir < 0 && (-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1) {
                        this.step(dir);
                    }
                }

                this.$emit('update:activeIndex', selectedItemIndex);
            }
        },
        onTransitionEnd() {
            if (this.$refs.itemsContainer) {
                utils.DomHandler.addClass(this.$refs.itemsContainer, 'p-items-hidden');
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
                this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
            }
            else {
                this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
            }
        },
        changePageOnTouch(e, diff) {
            if (diff < 0) {           // left
                this.navForward(e);
            }
            else {                    // right
                this.navBackward(e);
            }
        },
        getTotalPageNumber() {
            return this.value.length > this.d_numVisible ? (this.value.length - this.d_numVisible) + 1 : 0;
        },
        createStyle() {
            if (!this.thumbnailsStyle) {
                this.thumbnailsStyle = document.createElement('style');
                this.thumbnailsStyle.type = 'text/css';
                document.body.appendChild(this.thumbnailsStyle);
            }

            let innerHTML = `
                #${this.containerId} .p-galleria-thumbnail-item {
                    flex: 1 0 ${ (100/ this.d_numVisible) }%
                }
            `;

            if (this.responsiveOptions) {
                this.sortedResponsiveOptions = [...this.responsiveOptions];
                this.sortedResponsiveOptions.sort((data1, data2) => {
                    const value1 = data1.breakpoint;
                    const value2 = data2.breakpoint;
                    let result = null;

                    if (value1 == null && value2 != null)
                        result = -1;
                    else if (value1 != null && value2 == null)
                        result = 1;
                    else if (value1 == null && value2 == null)
                        result = 0;
                    else if (typeof value1 === 'string' && typeof value2 === 'string')
                        result = value1.localeCompare(value2, undefined, { numeric: true });
                    else
                        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                    return -1 * result;
                });

                for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                    let res = this.sortedResponsiveOptions[i];

                    innerHTML += `
                        @media screen and (max-width: ${res.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${ (100/ res.numVisible) }%
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
            if(this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        },
        isNavBackwardDisabled() {
            return (!this.circular && this.d_activeIndex === 0) || (this.value.length <= this.d_numVisible);
        },
        isNavForwardDisabled() {
            return (!this.circular && this.d_activeIndex === (this.value.length - 1)) || (this.value.length <= this.d_numVisible);
        },
        firstItemAciveIndex() {
            return this.totalShiftedItems * -1;
        },
        lastItemActiveIndex() {
            return this.firstItemAciveIndex() + this.d_numVisible - 1;
        },
        isItemActive(index) {
            return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
        }
    },
    computed: {
        navBackwardClass() {
            return ['p-galleria-thumbnail-prev p-link', {
                'p-disabled': this.isNavBackwardDisabled()
            }];
        },
        navForwardClass() {
            return ['p-galleria-thumbnail-next p-link', {
                'p-disabled': this.isNavForwardDisabled()
            }];
        },
        navBackwardIconClass() {
            return ['p-galleria-thumbnail-prev-icon pi', {
                'pi-chevron-left': !this.isVertical,
                'pi-chevron-up': this.isVertical
            }];
        },
        navForwardIconClass() {
            return ['p-galleria-thumbnail-next-icon pi', {
                'pi-chevron-right': !this.isVertical,
                'pi-chevron-down': this.isVertical
            }];
        }
    },
    directives: {
        'ripple': Ripple__default["default"]
    }
};

const _hoisted_1$1 = { class: "p-galleria-thumbnail-wrapper" };
const _hoisted_2$1 = { class: "p-galleria-thumbnail-container" };
const _hoisted_3$1 = ["disabled"];
const _hoisted_4$1 = ["tabindex", "onClick", "onKeydown"];
const _hoisted_5$1 = ["disabled"];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = vue.resolveDirective("ripple");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
    vue.createElementVNode("div", _hoisted_2$1, [
      ($props.showThumbnailNavigators)
        ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            class: vue.normalizeClass($options.navBackwardClass),
            onClick: _cache[0] || (_cache[0] = $event => ($options.navBackward($event))),
            disabled: $options.isNavBackwardDisabled(),
            type: "button"
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass($options.navBackwardIconClass)
            }, null, 2)
          ], 10, _hoisted_3$1)), [
            [_directive_ripple]
          ])
        : vue.createCommentVNode("", true),
      vue.createElementVNode("div", {
        class: "p-galleria-thumbnail-items-container",
        style: vue.normalizeStyle({'height': $props.isVertical ? $props.contentHeight : ''})
      }, [
        vue.createElementVNode("div", {
          ref: "itemsContainer",
          class: "p-galleria-thumbnail-items",
          onTransitionend: _cache[1] || (_cache[1] = (...args) => ($options.onTransitionEnd && $options.onTransitionEnd(...args))),
          onTouchstart: _cache[2] || (_cache[2] = $event => ($options.onTouchStart($event))),
          onTouchmove: _cache[3] || (_cache[3] = $event => ($options.onTouchMove($event))),
          onTouchend: _cache[4] || (_cache[4] = $event => ($options.onTouchEnd($event)))
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.value, (item, index) => {
            return (vue.openBlock(), vue.createElementBlock("div", {
              key: `p-galleria-thumbnail-item-${index}`,
              class: vue.normalizeClass(['p-galleria-thumbnail-item', {
                        'p-galleria-thumbnail-item-current': $props.activeIndex === index,
                        'p-galleria-thumbnail-item-active': $options.isItemActive(index),
                        'p-galleria-thumbnail-item-start': $options.firstItemAciveIndex() === index,
                        'p-galleria-thumbnail-item-end': $options.lastItemActiveIndex() === index }])
            }, [
              vue.createElementVNode("div", {
                class: "p-galleria-thumbnail-item-content",
                tabindex: $options.isItemActive(index) ? 0 : null,
                onClick: $event => ($options.onItemClick(index)),
                onKeydown: vue.withKeys($event => ($options.onItemClick(index)), ["enter"])
              }, [
                ($props.templates.thumbnail)
                  ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates.thumbnail), {
                      key: 0,
                      item: item
                    }, null, 8, ["item"]))
                  : vue.createCommentVNode("", true)
              ], 40, _hoisted_4$1)
            ], 2))
          }), 128))
        ], 544)
      ], 4),
      ($props.showThumbnailNavigators)
        ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
            key: 1,
            class: vue.normalizeClass($options.navForwardClass),
            onClick: _cache[5] || (_cache[5] = $event => ($options.navForward($event))),
            disabled: $options.isNavForwardDisabled(),
            type: "button"
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass($options.navForwardIconClass)
            }, null, 2)
          ], 10, _hoisted_5$1)), [
            [_directive_ripple]
          ])
        : vue.createCommentVNode("", true)
    ])
  ]))
}

script$3.render = render$2;

var script$2 = {
    functional: true,
    props: {
        item: {
            type: null,
            default: null
        },
        index: {
            type: Number,
            default: 0
        },
        templates: {
            type: null,
            default: null
        },
        type: {
            type: String,
            default: null
        }
    },
    render(createElement, context) {
        const { item, index, templates, type } = context.props;
        const template = templates && templates[type];

        if (template) {
            let content;
            switch (type) {
                case 'item':
                case 'caption':
                case 'thumbnail':
                    content = template({
                        item
                    });
                    break;
                case 'indicator':
                    content = template({
                        index
                    });
                    break;
                default:
                    content = template({});
                    break;
            }

            return content ? [content] : null;
        }

        return null;
    }
};

var script$1 = {
    name: 'GalleriaContent',
    inheritAttrs: false,
    interval: null,
    emits: ['activeitem-change', 'mask-hide'],
    data() {
        return {
            id: this.$attrs.id || utils.UniqueComponentId(),
            activeIndex: this.$attrs.activeIndex,
            numVisible: this.$attrs.numVisible,
            slideShowActive: false
        }
    },
    watch: {
        '$attrs.value': function(newVal) {
            if (newVal && newVal.length < this.numVisible) {
                this.numVisible = newVal.length;
            }
        },
        '$attrs.activeIndex': function(newVal) {
            this.activeIndex = newVal;
        },
        '$attrs.numVisible': function(newVal) {
            this.numVisible = newVal;
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
        isAutoPlayActive() {
            return this.slideShowActive;
        },
        startSlideShow() {
            this.interval = setInterval(() => {
                let activeIndex = (this.$attrs.circular && (this.$attrs.value.length - 1) === this.activeIndex) ? 0 : (this.activeIndex + 1);
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
            const pos = positions.find(item => item === position);

            return pos ? `${preClassName}-${pos}` : '';
        },
        isVertical() {
            return this.$attrs.thumbnailsPosition === 'left' || this.$attrs.thumbnailsPosition === 'right';
        }
    },
    computed: {
        galleriaClass() {
            const thumbnailsPosClass = this.$attrs.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.$attrs.thumbnailsPosition);
            const indicatorPosClass = this.$attrs.showIndicators && this.getPositionClass('p-galleria-indicators', this.$attrs.indicatorsPosition);

            return ['p-galleria p-component', {
                'p-galleria-fullscreen': this.$attrs.fullScreen,
                'p-galleria-indicator-onitem': this.$attrs.showIndicatorsOnItem,
                'p-galleria-item-nav-onhover': this.$attrs.showItemNavigatorsOnHover && !this.$attrs.fullScreen
            }, thumbnailsPosClass, indicatorPosClass, this.$attrs.containerClass]
        }
    },
    components: {
        'GalleriaItem': script$4,
        'GalleriaThumbnails': script$3,
        'GalleriaItemSlot': script$2
    },
    directives: {
        'ripple': Ripple__default["default"]
    }
};

const _hoisted_1 = ["id"];
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-galleria-close-icon pi pi-times" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 1,
  class: "p-galleria-header"
};
const _hoisted_5 = { class: "p-galleria-content" };
const _hoisted_6 = {
  key: 2,
  class: "p-galleria-footer"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GalleriaItem = vue.resolveComponent("GalleriaItem");
  const _component_GalleriaThumbnails = vue.resolveComponent("GalleriaThumbnails");
  const _directive_ripple = vue.resolveDirective("ripple");

  return (_ctx.$attrs.value && _ctx.$attrs.value.length > 0)
    ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        id: $data.id,
        class: vue.normalizeClass($options.galleriaClass),
        style: vue.normalizeStyle(_ctx.$attrs.containerStyle)
      }, [
        (_ctx.$attrs.fullScreen)
          ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
              key: 0,
              type: "button",
              class: "p-galleria-close p-link",
              onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('mask-hide')))
            }, _hoisted_3)), [
              [_directive_ripple]
            ])
          : vue.createCommentVNode("", true),
        (_ctx.$attrs.templates && _ctx.$attrs.templates['header'])
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.$attrs.templates['header'])))
            ]))
          : vue.createCommentVNode("", true),
        vue.createElementVNode("div", _hoisted_5, [
          vue.createVNode(_component_GalleriaItem, {
            value: _ctx.$attrs.value,
            activeIndex: $data.activeIndex,
            "onUpdate:activeIndex": _cache[1] || (_cache[1] = $event => (($data.activeIndex) = $event)),
            circular: _ctx.$attrs.circular,
            templates: _ctx.$attrs.templates,
            showIndicators: _ctx.$attrs.showIndicators,
            changeItemOnIndicatorHover: _ctx.$attrs.changeItemOnIndicatorHover,
            showItemNavigators: _ctx.$attrs.showItemNavigators,
            autoPlay: _ctx.$attrs.autoPlay,
            slideShowActive: $data.slideShowActive,
            "onUpdate:slideShowActive": _cache[2] || (_cache[2] = $event => (($data.slideShowActive) = $event)),
            onStartSlideshow: $options.startSlideShow,
            onStopSlideshow: $options.stopSlideShow
          }, null, 8, ["value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "showItemNavigators", "autoPlay", "slideShowActive", "onStartSlideshow", "onStopSlideshow"]),
          (_ctx.$attrs.showThumbnails)
            ? (vue.openBlock(), vue.createBlock(_component_GalleriaThumbnails, {
                key: 0,
                containerId: $data.id,
                value: _ctx.$attrs.value,
                activeIndex: $data.activeIndex,
                "onUpdate:activeIndex": _cache[3] || (_cache[3] = $event => (($data.activeIndex) = $event)),
                templates: _ctx.$attrs.templates,
                numVisible: $data.numVisible,
                responsiveOptions: _ctx.$attrs.responsiveOptions,
                circular: _ctx.$attrs.circular,
                isVertical: $options.isVertical(),
                contentHeight: _ctx.$attrs.verticalThumbnailViewPortHeight,
                showThumbnailNavigators: _ctx.$attrs.showThumbnailNavigators,
                slideShowActive: $data.slideShowActive,
                "onUpdate:slideShowActive": _cache[4] || (_cache[4] = $event => (($data.slideShowActive) = $event)),
                onStopSlideshow: $options.stopSlideShow
              }, null, 8, ["containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onStopSlideshow"]))
            : vue.createCommentVNode("", true)
        ]),
        (_ctx.$attrs.templates && _ctx.$attrs.templates['footer'])
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.$attrs.templates['footer'])))
            ]))
          : vue.createCommentVNode("", true)
      ], 14, _hoisted_1))
    : vue.createCommentVNode("", true)
}

script$1.render = render$1;

var script = {
    name: 'Galleria',
    inheritAttrs: false,
    emits: ['update:activeIndex', 'update:visible'],
    props: {
        id: {
            type: String,
            default: null
        },
		value: {
            type: Array,
            default: null
        },
        activeIndex: {
            type: Number,
            default: 0
        },
        fullScreen: {
            type: Boolean,
            default: false
        },
        visible: {
            type: Boolean,
            default: false
        },
        numVisible: {
			type: Number,
			default: 3
		},
        responsiveOptions: {
            type: Array,
            default: null
        },
        showItemNavigators: {
            type: Boolean,
            default: false
        },
        showThumbnailNavigators: {
            type: Boolean,
            default: true
        },
        showItemNavigatorsOnHover: {
            type: Boolean,
            default: false
        },
        changeItemOnIndicatorHover: {
            type: Boolean,
            default: false
        },
        circular: {
            type: Boolean,
            default: false
        },
        autoPlay: {
            type: Boolean,
            default: false
        },
        transitionInterval: {
			type: Number,
			default: 4000
		},
        showThumbnails: {
            type: Boolean,
            default: true
        },
        thumbnailsPosition: {
			type: String,
			default: "bottom"
		},
        verticalThumbnailViewPortHeight: {
			type: String,
			default: "300px"
		},
        showIndicators: {
            type: Boolean,
            default: false
        },
        showIndicatorsOnItem: {
            type: Boolean,
            default: false
        },
        indicatorsPosition: {
			type: String,
			default: "bottom"
		},
        baseZIndex: {
			type: Number,
			default: 0
        },
        maskClass: {
            type: String,
            default: null
        },
        containerStyle: null,
        containerClass: null
    },
    container: null,
    mask: null,
    data() {
        return {
            containerVisible: this.visible
        }
    },
    updated() {
        if (this.fullScreen && this.visible) {
            this.containerVisible = this.visible;
        }
    },
    beforeUnmount() {
        if (this.fullScreen) {
            utils.DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }

        this.mask = null;
        if (this.container) {
            utils.ZIndexUtils.clear(this.container);
            this.container = null;
        }
    },
    methods: {
        onBeforeEnter(el) {
            utils.ZIndexUtils.set('modal', el, this.baseZIndex || this.$primevue.config.zIndex.modal);
        },
        onEnter(el) {
            this.mask.style.zIndex = String(parseInt(el.style.zIndex, 10) - 1);
            utils.DomHandler.addClass(document.body, 'p-overflow-hidden');
        },
        onBeforeLeave() {
            utils.DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        },
        onAfterLeave(el) {
            utils.ZIndexUtils.clear(el);
            this.containerVisible = false;
            utils.DomHandler.removeClass(document.body, 'p-overflow-hidden');
        },
        onActiveItemChange(index) {
            if (this.activeIndex !== index) {
                this.$emit('update:activeIndex', index);
            }
        },
        maskHide() {
            this.$emit('update:visible', false);
        },
        containerRef(el) {
            this.container = el;
        },
        maskRef(el) {
            this.mask = el;
        }
    },
    computed: {
        maskContentClass() {
            return ['p-galleria-mask p-component-overlay p-component-overlay-enter', this.maskClass, {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        }
    },
    components: {
        'GalleriaContent': script$1
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GalleriaContent = vue.resolveComponent("GalleriaContent");

  return ($props.fullScreen)
    ? (vue.openBlock(), vue.createBlock(vue.Teleport, {
        key: 0,
        to: "body"
      }, [
        ($data.containerVisible)
          ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              ref: $options.maskRef,
              class: vue.normalizeClass($options.maskContentClass)
            }, [
              vue.createVNode(vue.Transition, {
                name: "p-galleria",
                onBeforeEnter: $options.onBeforeEnter,
                onEnter: $options.onEnter,
                onBeforeLeave: $options.onBeforeLeave,
                onAfterLeave: $options.onAfterLeave,
                appear: ""
              }, {
                default: vue.withCtx(() => [
                  ($props.visible)
                    ? (vue.openBlock(), vue.createBlock(_component_GalleriaContent, vue.mergeProps({
                        key: 0,
                        ref: $options.containerRef
                      }, _ctx.$props, {
                        onMaskHide: $options.maskHide,
                        templates: _ctx.$slots,
                        onActiveitemChange: $options.onActiveItemChange
                      }), null, 16, ["onMaskHide", "templates", "onActiveitemChange"]))
                    : vue.createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onBeforeEnter", "onEnter", "onBeforeLeave", "onAfterLeave"])
            ], 2))
          : vue.createCommentVNode("", true)
      ]))
    : (vue.openBlock(), vue.createBlock(_component_GalleriaContent, vue.mergeProps({ key: 1 }, _ctx.$props, {
        templates: _ctx.$slots,
        onActiveitemChange: $options.onActiveItemChange
      }), null, 16, ["templates", "onActiveitemChange"]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-galleria-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.p-galleria-item-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n}\n.p-galleria-item-container {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n}\n.p-galleria-item-nav {\n    position: absolute;\n    top: 50%;\n    margin-top: -.5rem;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n}\n.p-galleria-item-prev {\n    left: 0;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.p-galleria-item-next {\n    right: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.p-galleria-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    width: 100%;\n}\n.p-galleria-item-nav-onhover .p-galleria-item-nav {\n    pointer-events: none;\n    opacity: 0;\n    -webkit-transition: opacity .2s ease-in-out;\n    transition: opacity .2s ease-in-out;\n}\n.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {\n    pointer-events: all;\n    opacity: 1;\n}\n.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {\n    pointer-events: none;\n}\n.p-galleria-caption {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n}\n\n/* Thumbnails */\n.p-galleria-thumbnail-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: auto;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n.p-galleria-thumbnail-prev,\n.p-galleria-thumbnail-next {\n    -ms-flex-item-align: center;\n        align-self: center;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n    position: relative;\n}\n.p-galleria-thumbnail-prev span,\n.p-galleria-thumbnail-next span {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-galleria-thumbnail-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.p-galleria-thumbnail-items-container {\n    overflow: hidden;\n    width: 100%;\n}\n.p-galleria-thumbnail-items {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-galleria-thumbnail-item {\n    overflow: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    opacity: .5;\n}\n.p-galleria-thumbnail-item:hover {\n    opacity: 1;\n    -webkit-transition: opacity .3s;\n    transition: opacity .3s;\n}\n.p-galleria-thumbnail-item-current {\n    opacity: 1;\n}\n\n/* Positions */\n/* Thumbnails */\n.p-galleria-thumbnails-left .p-galleria-content,\n.p-galleria-thumbnails-right .p-galleria-content {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.p-galleria-thumbnails-left .p-galleria-item-wrapper,\n.p-galleria-thumbnails-right .p-galleria-item-wrapper {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.p-galleria-thumbnails-left .p-galleria-item-wrapper,\n.p-galleria-thumbnails-top .p-galleria-item-wrapper {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n}\n.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,\n.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n}\n.p-galleria-thumbnails-left .p-galleria-thumbnail-container,\n.p-galleria-thumbnails-right .p-galleria-thumbnail-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.p-galleria-thumbnails-left .p-galleria-thumbnail-items,\n.p-galleria-thumbnails-right .p-galleria-thumbnail-items {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n}\n\n/* Indicators */\n.p-galleria-indicators {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-galleria-indicator > button {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-galleria-indicators-left .p-galleria-item-wrapper,\n.p-galleria-indicators-right .p-galleria-item-wrapper {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-galleria-indicators-left .p-galleria-item-container,\n.p-galleria-indicators-top .p-galleria-item-container {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n}\n.p-galleria-indicators-left .p-galleria-indicators,\n.p-galleria-indicators-top .p-galleria-indicators {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n}\n.p-galleria-indicators-left .p-galleria-indicators,\n.p-galleria-indicators-right .p-galleria-indicators {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.p-galleria-indicator-onitem .p-galleria-indicators {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {\n    top: 0;\n    left: 0;\n    width: 100%;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {\n    right: 0;\n    top: 0;\n    height: 100%;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {\n    left: 0;\n    top: 0;\n    height: 100%;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n\n/* FullScreen */\n.p-galleria-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-galleria-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n}\n.p-galleria-mask .p-galleria-item-nav {\n    position: fixed;\n    top: 50%;\n    margin-top: -.5rem;\n}\n\n/* Animation */\n.p-galleria-enter-active {\n    -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-galleria-leave-active {\n    -webkit-transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);\n    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);\n}\n.p-galleria-enter-from,\n.p-galleria-leave-to {\n    opacity: 0;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n}\n.p-galleria-enter-active .p-galleria-item-nav {\n    opacity: 0;\n}\n\n/* Keyboard Support */\n.p-items-hidden .p-galleria-thumbnail-item {\n    visibility: hidden;\n}\n.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {\n    visibility: visible;\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;

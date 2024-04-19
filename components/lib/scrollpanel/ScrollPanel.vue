<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <div :class="cx('wrapper')" v-bind="ptm('wrapper')">
            <div ref="content" :id="contentId" :class="cx('content')" @scroll="onScroll" @mouseenter="moveBar" v-bind="ptm('content')">
                <slot></slot>
            </div>
        </div>
        <div
            ref="xBar"
            :class="cx('barx')"
            tabindex="0"
            role="scrollbar"
            aria-orientation="horizontal"
            :aria-controls="contentId"
            :aria-valuenow="lastScrollLeft"
            @mousedown="onXBarMouseDown"
            @keydown="onKeyDown($event)"
            @keyup="onKeyUp"
            @focus="onFocus"
            @blur="onBlur"
            v-bind="ptm('barx')"
            data-pc-group-section="bar"
        ></div>
        <div
            ref="yBar"
            :class="cx('bary')"
            tabindex="0"
            role="scrollbar"
            aria-orientation="vertical"
            :aria-controls="contentId"
            :aria-valuenow="lastScrollTop"
            @mousedown="onYBarMouseDown"
            @keydown="onKeyDown($event)"
            @keyup="onKeyUp"
            @focus="onFocus"
            v-bind="ptm('bary')"
            data-pc-group-section="bar"
        ></div>
    </div>
</template>

<script>
import { DomHandler, UniqueComponentId } from 'primevue/utils';
import BaseScrollPanel from './BaseScrollPanel.vue';

export default {
    name: 'ScrollPanel',
    extends: BaseScrollPanel,
    inheritAttrs: false,
    initialized: false,
    documentResizeListener: null,
    documentMouseMoveListener: null,
    documentMouseUpListener: null,
    frame: null,
    scrollXRatio: null,
    scrollYRatio: null,
    isXBarClicked: false,
    isYBarClicked: false,
    lastPageX: null,
    lastPageY: null,
    timer: null,
    outsideClickListener: null,
    data() {
        return {
            id: this.$attrs.id,
            orientation: 'vertical',
            lastScrollTop: 0,
            lastScrollLeft: 0
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();

        if (this.$el.offsetParent) {
            this.initialize();
        }
    },
    updated() {
        if (!this.initialized && this.$el.offsetParent) {
            this.initialize();
        }
    },
    beforeUnmount() {
        this.unbindDocumentResizeListener();

        if (this.frame) {
            window.cancelAnimationFrame(this.frame);
        }
    },
    methods: {
        initialize() {
            this.moveBar();
            this.bindDocumentResizeListener();
            this.calculateContainerHeight();
        },
        calculateContainerHeight() {
            let containerStyles = getComputedStyle(this.$el),
                xBarStyles = getComputedStyle(this.$refs.xBar),
                pureContainerHeight = DomHandler.getHeight(this.$el) - parseInt(xBarStyles['height'], 10);

            if (containerStyles['max-height'] !== 'none' && pureContainerHeight === 0) {
                if (this.$refs.content.offsetHeight + parseInt(xBarStyles['height'], 10) > parseInt(containerStyles['max-height'], 10)) {
                    this.$el.style.height = containerStyles['max-height'];
                } else {
                    this.$el.style.height =
                        this.$refs.content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + 'px';
                }
            }
        },
        moveBar() {
            if (this.$refs.content) {
                /* horizontal scroll */
                let totalWidth = this.$refs.content.scrollWidth;
                let ownWidth = this.$refs.content.clientWidth;
                let bottom = (this.$el.clientHeight - this.$refs.xBar.clientHeight) * -1;

                this.scrollXRatio = ownWidth / totalWidth;

                /* vertical scroll */
                let totalHeight = this.$refs.content.scrollHeight;
                let ownHeight = this.$refs.content.clientHeight;
                let right = (this.$el.clientWidth - this.$refs.yBar.clientWidth) * -1;

                this.scrollYRatio = ownHeight / totalHeight;

                this.frame = this.requestAnimationFrame(() => {
                    if (this.$refs.xBar) {
                        if (this.scrollXRatio >= 1) {
                            this.$refs.xBar.setAttribute('data-p-scrollpanel-hidden', 'true');
                            !this.isUnstyled && DomHandler.addClass(this.$refs.xBar, 'p-scrollpanel-hidden');
                        } else {
                            this.$refs.xBar.setAttribute('data-p-scrollpanel-hidden', 'false');
                            !this.isUnstyled && DomHandler.removeClass(this.$refs.xBar, 'p-scrollpanel-hidden');
                            this.$refs.xBar.style.cssText = 'width:' + Math.max(this.scrollXRatio * 100, 10) + '%; left:' + (this.$refs.content.scrollLeft / totalWidth) * 100 + '%;bottom:' + bottom + 'px;';
                        }
                    }

                    if (this.$refs.yBar) {
                        if (this.scrollYRatio >= 1) {
                            this.$refs.yBar.setAttribute('data-p-scrollpanel-hidden', 'true');
                            !this.isUnstyled && DomHandler.addClass(this.$refs.yBar, 'p-scrollpanel-hidden');
                        } else {
                            this.$refs.yBar.setAttribute('data-p-scrollpanel-hidden', 'false');
                            !this.isUnstyled && DomHandler.removeClass(this.$refs.yBar, 'p-scrollpanel-hidden');
                            this.$refs.yBar.style.cssText =
                                'height:' + Math.max(this.scrollYRatio * 100, 10) + '%; top: calc(' + (this.$refs.content.scrollTop / totalHeight) * 100 + '% - ' + this.$refs.xBar.clientHeight + 'px);right:' + right + 'px;';
                        }
                    }
                });
            }
        },
        onYBarMouseDown(e) {
            this.isYBarClicked = true;
            this.$refs.yBar.focus();
            this.lastPageY = e.pageY;
            this.$refs.yBar.setAttribute('data-p-scrollpanel-grabbed', 'true');
            !this.isUnstyled && DomHandler.addClass(this.$refs.yBar, 'p-scrollpanel-grabbed');
            document.body.setAttribute('data-p-scrollpanel-grabbed', 'true');
            !this.isUnstyled && DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');

            this.bindDocumentMouseListeners();
            e.preventDefault();
        },
        onXBarMouseDown(e) {
            this.isXBarClicked = true;
            this.$refs.xBar.focus();
            this.lastPageX = e.pageX;
            this.$refs.yBar.setAttribute('data-p-scrollpanel-grabbed', 'false');
            !this.isUnstyled && DomHandler.addClass(this.$refs.xBar, 'p-scrollpanel-grabbed');
            document.body.setAttribute('data-p-scrollpanel-grabbed', 'false');
            !this.isUnstyled && DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');

            this.bindDocumentMouseListeners();
            e.preventDefault();
        },
        onScroll(event) {
            if (this.lastScrollLeft !== event.target.scrollLeft) {
                this.lastScrollLeft = event.target.scrollLeft;
                this.orientation = 'horizontal';
            } else if (this.lastScrollTop !== event.target.scrollTop) {
                this.lastScrollTop = event.target.scrollTop;
                this.orientation = 'vertical';
            }

            this.moveBar();
        },
        onKeyDown(event) {
            if (this.orientation === 'vertical') {
                switch (event.code) {
                    case 'ArrowDown': {
                        this.setTimer('scrollTop', this.step);
                        event.preventDefault();
                        break;
                    }

                    case 'ArrowUp': {
                        this.setTimer('scrollTop', this.step * -1);
                        event.preventDefault();
                        break;
                    }

                    case 'ArrowLeft':

                    case 'ArrowRight': {
                        event.preventDefault();
                        break;
                    }

                    default:
                        //no op
                        break;
                }
            } else if (this.orientation === 'horizontal') {
                switch (event.code) {
                    case 'ArrowRight': {
                        this.setTimer('scrollLeft', this.step);
                        event.preventDefault();
                        break;
                    }

                    case 'ArrowLeft': {
                        this.setTimer('scrollLeft', this.step * -1);
                        event.preventDefault();
                        break;
                    }

                    case 'ArrowDown':

                    case 'ArrowUp': {
                        event.preventDefault();
                        break;
                    }

                    default:
                        //no op
                        break;
                }
            }
        },
        onKeyUp() {
            this.clearTimer();
        },
        repeat(bar, step) {
            this.$refs.content[bar] += step;
            this.moveBar();
        },
        setTimer(bar, step) {
            this.clearTimer();
            this.timer = setTimeout(() => {
                this.repeat(bar, step);
            }, 40);
        },
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },
        onDocumentMouseMove(e) {
            if (this.isXBarClicked) {
                this.onMouseMoveForXBar(e);
            } else if (this.isYBarClicked) {
                this.onMouseMoveForYBar(e);
            } else {
                this.onMouseMoveForXBar(e);
                this.onMouseMoveForYBar(e);
            }
        },
        onMouseMoveForXBar(e) {
            let deltaX = e.pageX - this.lastPageX;

            this.lastPageX = e.pageX;

            this.frame = this.requestAnimationFrame(() => {
                this.$refs.content.scrollLeft += deltaX / this.scrollXRatio;
            });
        },
        onMouseMoveForYBar(e) {
            let deltaY = e.pageY - this.lastPageY;

            this.lastPageY = e.pageY;

            this.frame = this.requestAnimationFrame(() => {
                this.$refs.content.scrollTop += deltaY / this.scrollYRatio;
            });
        },
        onFocus(event) {
            if (this.$refs.xBar.isSameNode(event.target)) {
                this.orientation = 'horizontal';
            } else if (this.$refs.yBar.isSameNode(event.target)) {
                this.orientation = 'vertical';
            }
        },
        onBlur() {
            if (this.orientation === 'horizontal') {
                this.orientation = 'vertical';
            }
        },
        onDocumentMouseUp() {
            this.$refs.yBar.setAttribute('data-p-scrollpanel-grabbed', 'false');
            !this.isUnstyled && DomHandler.removeClass(this.$refs.yBar, 'p-scrollpanel-grabbed');
            this.$refs.xBar.setAttribute('data-p-scrollpanel-grabbed', 'false');
            !this.isUnstyled && DomHandler.removeClass(this.$refs.xBar, 'p-scrollpanel-grabbed');
            document.body.setAttribute('data-p-scrollpanel-grabbed', 'false');
            !this.isUnstyled && DomHandler.removeClass(document.body, 'p-scrollpanel-grabbed');

            this.unbindDocumentMouseListeners();
            this.isXBarClicked = false;
            this.isYBarClicked = false;
        },
        requestAnimationFrame(f) {
            let frame = window.requestAnimationFrame || this.timeoutFrame;

            return frame(f);
        },
        refresh() {
            this.moveBar();
        },
        scrollTop(scrollTop) {
            let scrollableHeight = this.$refs.content.scrollHeight - this.$refs.content.clientHeight;

            scrollTop = scrollTop > scrollableHeight ? scrollableHeight : scrollTop > 0 ? scrollTop : 0;
            this.$refs.content.scrollTop = scrollTop;
        },
        timeoutFrame(fn) {
            setTimeout(fn, 0);
        },
        bindDocumentMouseListeners() {
            if (!this.documentMouseMoveListener) {
                this.documentMouseMoveListener = (e) => {
                    this.onDocumentMouseMove(e);
                };

                document.addEventListener('mousemove', this.documentMouseMoveListener);
            }

            if (!this.documentMouseUpListener) {
                this.documentMouseUpListener = (e) => {
                    this.onDocumentMouseUp(e);
                };

                document.addEventListener('mouseup', this.documentMouseUpListener);
            }
        },
        unbindDocumentMouseListeners() {
            if (this.documentMouseMoveListener) {
                document.removeEventListener('mousemove', this.documentMouseMoveListener);
                this.documentMouseMoveListener = null;
            }

            if (this.documentMouseUpListener) {
                document.removeEventListener('mouseup', this.documentMouseUpListener);
                this.documentMouseUpListener = null;
            }
        },
        bindDocumentResizeListener() {
            if (!this.documentResizeListener) {
                this.documentResizeListener = () => {
                    this.moveBar();
                };

                window.addEventListener('resize', this.documentResizeListener);
            }
        },
        unbindDocumentResizeListener() {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        }
    },
    computed: {
        contentId() {
            return this.id + '_content';
        }
    }
};
</script>

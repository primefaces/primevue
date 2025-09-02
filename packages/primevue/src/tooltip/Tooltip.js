import { addClass, createElement, fadeIn, findSingle, getAttribute, getOuterHeight, getOuterWidth, getViewport, getWindowScrollLeft, getWindowScrollTop, hasClass, isExist, isTouchDevice, removeClass } from '@primeuix/utils/dom';
import { isEmpty } from '@primeuix/utils/object';
import { uuid } from '@primeuix/utils/uuid';
import { ZIndex } from '@primeuix/utils/zindex';
import { ConnectedOverlayScrollHandler } from '@primevue/core/utils';
import BaseTooltip from './BaseTooltip';

const Tooltip = BaseTooltip.extend('tooltip', {
    beforeMount(el, options) {
        let target = this.getTarget(el);

        target.$_ptooltipModifiers = this.getModifiers(options);

        if (!options.value) return;
        else if (typeof options.value === 'string') {
            target.$_ptooltipValue = options.value;
            target.$_ptooltipDisabled = false;
            target.$_ptooltipEscape = true;
            target.$_ptooltipClass = null;
            target.$_ptooltipFitContent = true;
            target.$_ptooltipIdAttr = uuid('pv_id') + '_tooltip';
            target.$_ptooltipShowDelay = 0;
            target.$_ptooltipHideDelay = 0;
            target.$_ptooltipAutoHide = true;
        } else if (typeof options.value === 'object' && options.value) {
            if (isEmpty(options.value.value) || options.value.value.trim() === '') return;
            else {
                target.$_ptooltipValue = options.value.value;
                target.$_ptooltipDisabled = !!options.value.disabled === options.value.disabled ? options.value.disabled : false;
                target.$_ptooltipEscape = !!options.value.escape === options.value.escape ? options.value.escape : true;
                target.$_ptooltipClass = options.value.class || '';
                target.$_ptooltipFitContent = !!options.value.fitContent === options.value.fitContent ? options.value.fitContent : true;
                target.$_ptooltipIdAttr = options.value.id || uuid('pv_id') + '_tooltip';
                target.$_ptooltipShowDelay = options.value.showDelay || 0;
                target.$_ptooltipHideDelay = options.value.hideDelay || 0;
                target.$_ptooltipAutoHide = !!options.value.autoHide === options.value.autoHide ? options.value.autoHide : true;
            }
        }

        target.$_ptooltipZIndex = options.instance.$primevue?.config?.zIndex?.tooltip;

        this.bindEvents(target, options);

        el.setAttribute('data-pd-tooltip', true);
    },
    updated(el, options) {
        let target = this.getTarget(el);

        target.$_ptooltipModifiers = this.getModifiers(options);
        this.unbindEvents(target);

        if (!options.value) {
            return;
        }

        if (typeof options.value === 'string') {
            target.$_ptooltipValue = options.value;
            target.$_ptooltipDisabled = false;
            target.$_ptooltipEscape = true;
            target.$_ptooltipClass = null;
            target.$_ptooltipIdAttr = target.$_ptooltipIdAttr || uuid('pv_id') + '_tooltip';
            target.$_ptooltipShowDelay = 0;
            target.$_ptooltipHideDelay = 0;
            target.$_ptooltipAutoHide = true;

            this.bindEvents(target, options);
        } else if (typeof options.value === 'object' && options.value) {
            if (isEmpty(options.value.value) || options.value.value.trim() === '') {
                this.unbindEvents(target, options);

                return;
            } else {
                target.$_ptooltipValue = options.value.value;
                target.$_ptooltipDisabled = !!options.value.disabled === options.value.disabled ? options.value.disabled : false;
                target.$_ptooltipEscape = !!options.value.escape === options.value.escape ? options.value.escape : true;
                target.$_ptooltipClass = options.value.class || '';
                target.$_ptooltipFitContent = !!options.value.fitContent === options.value.fitContent ? options.value.fitContent : true;
                target.$_ptooltipIdAttr = options.value.id || target.$_ptooltipIdAttr || uuid('pv_id') + '_tooltip';
                target.$_ptooltipShowDelay = options.value.showDelay || 0;
                target.$_ptooltipHideDelay = options.value.hideDelay || 0;
                target.$_ptooltipAutoHide = !!options.value.autoHide === options.value.autoHide ? options.value.autoHide : true;

                this.bindEvents(target, options);
            }
        }
    },
    unmounted(el, options) {
        let target = this.getTarget(el);

        this.hide(el, 0);
        this.remove(target);
        this.unbindEvents(target, options);

        if (target.$_ptooltipScrollHandler) {
            target.$_ptooltipScrollHandler.destroy();
            target.$_ptooltipScrollHandler = null;
        }
    },
    timer: undefined,
    methods: {
        bindEvents(el, options) {
            const modifiers = el.$_ptooltipModifiers;

            if (modifiers.focus) {
                el.$_ptooltipFocusEvent = (event) => this.onFocus(event, options);
                el.$_ptooltipBlurEvent = this.onBlur.bind(this);

                el.addEventListener('focus', el.$_ptooltipFocusEvent);
                el.addEventListener('blur', el.$_ptooltipBlurEvent);
            } else {
                el.$_ptooltipMouseEnterEvent = (event) => this.onMouseEnter(event, options);
                el.$_ptooltipMouseLeaveEvent = this.onMouseLeave.bind(this);
                el.$_ptooltipClickEvent = this.onClick.bind(this);

                el.addEventListener('mouseenter', el.$_ptooltipMouseEnterEvent);
                el.addEventListener('mouseleave', el.$_ptooltipMouseLeaveEvent);
                el.addEventListener('click', el.$_ptooltipClickEvent);
            }

            el.$_ptooltipKeydownEvent = this.onKeydown.bind(this);
            el.addEventListener('keydown', el.$_ptooltipKeydownEvent);

            el.$_pWindowResizeEvent = this.onWindowResize.bind(this, el);
        },
        unbindEvents(el) {
            const modifiers = el.$_ptooltipModifiers;

            if (modifiers.focus) {
                el.removeEventListener('focus', el.$_ptooltipFocusEvent);
                el.$_ptooltipFocusEvent = null;

                el.removeEventListener('blur', el.$_ptooltipBlurEvent);
                el.$_ptooltipBlurEvent = null;
            } else {
                el.removeEventListener('mouseenter', el.$_ptooltipMouseEnterEvent);
                el.$_ptooltipMouseEnterEvent = null;

                el.removeEventListener('mouseleave', el.$_ptooltipMouseLeaveEvent);
                el.$_ptooltipMouseLeaveEvent = null;

                el.removeEventListener('click', el.$_ptooltipClickEvent);
                el.$_ptooltipClickEvent = null;
            }

            el.removeEventListener('keydown', el.$_ptooltipKeydownEvent);
            window.removeEventListener('resize', el.$_pWindowResizeEvent);

            if (el.$_ptooltipId) {
                this.remove(el);
            }
        },
        bindScrollListener(el) {
            if (!el.$_ptooltipScrollHandler) {
                el.$_ptooltipScrollHandler = new ConnectedOverlayScrollHandler(el, () => {
                    this.hide(el);
                });
            }

            el.$_ptooltipScrollHandler.bindScrollListener();
        },
        unbindScrollListener(el) {
            if (el.$_ptooltipScrollHandler) {
                el.$_ptooltipScrollHandler.unbindScrollListener();
            }
        },
        onMouseEnter(event, options) {
            const el = event.currentTarget;
            const showDelay = el.$_ptooltipShowDelay;

            this.show(el, options, showDelay);
        },
        onMouseLeave(event) {
            const el = event.currentTarget;
            const hideDelay = el.$_ptooltipHideDelay;
            const autoHide = el.$_ptooltipAutoHide;

            if (!autoHide) {
                const valid =
                    getAttribute(event.target, 'data-pc-name') === 'tooltip' ||
                    getAttribute(event.target, 'data-pc-section') === 'arrow' ||
                    getAttribute(event.target, 'data-pc-section') === 'text' ||
                    getAttribute(event.relatedTarget, 'data-pc-name') === 'tooltip' ||
                    getAttribute(event.relatedTarget, 'data-pc-section') === 'arrow' ||
                    getAttribute(event.relatedTarget, 'data-pc-section') === 'text';

                !valid && this.hide(el, hideDelay);
            } else {
                this.hide(el, hideDelay);
            }
        },
        onFocus(event, options) {
            const el = event.currentTarget;
            const showDelay = el.$_ptooltipShowDelay;

            this.show(el, options, showDelay);
        },
        onBlur(event) {
            const el = event.currentTarget;
            const hideDelay = el.$_ptooltipHideDelay;

            this.hide(el, hideDelay);
        },
        onClick(event) {
            const el = event.currentTarget;
            const hideDelay = el.$_ptooltipHideDelay;

            this.hide(el, hideDelay);
        },
        onKeydown(event) {
            const el = event.currentTarget;
            const hideDelay = el.$_ptooltipHideDelay;

            event.code === 'Escape' && this.hide(event.currentTarget, hideDelay);
        },
        onWindowResize(el) {
            if (!isTouchDevice()) {
                this.hide(el);
            }

            window.removeEventListener('resize', el.$_pWindowResizeEvent);
        },
        tooltipActions(el, options) {
            if (el.$_ptooltipDisabled || !isExist(el) || !el.$_ptooltipPendingShow) {
                return;
            }

            el.$_ptooltipPendingShow = false;
            let tooltipElement = this.create(el, options);

            this.align(el);
            !this.isUnstyled() && fadeIn(tooltipElement, 250);

            const $this = this;

            window.addEventListener('resize', el.$_pWindowResizeEvent);

            tooltipElement.addEventListener('mouseleave', function onTooltipLeave() {
                $this.hide(el);

                tooltipElement.removeEventListener('mouseleave', onTooltipLeave);
                el.removeEventListener('mouseenter', el.$_ptooltipMouseEnterEvent);
                setTimeout(() => el.addEventListener('mouseenter', el.$_ptooltipMouseEnterEvent), 50);
            });

            this.bindScrollListener(el);
            ZIndex.set('tooltip', tooltipElement, el.$_ptooltipZIndex);
        },
        show(el, options, showDelay) {
            if (showDelay !== undefined) {
                this.timer = setTimeout(() => this.tooltipActions(el, options), showDelay);
                el.$_ptooltipPendingShow = true;
            } else {
                this.tooltipActions(el, options);
                el.$_ptooltipPendingShow = false;
            }
        },
        tooltipRemoval(el) {
            this.remove(el);
            this.unbindScrollListener(el);
            window.removeEventListener('resize', el.$_pWindowResizeEvent);
        },
        hide(el, hideDelay) {
            clearTimeout(this.timer);
            el.$_ptooltipPendingShow = false;

            if (hideDelay !== undefined) {
                setTimeout(() => this.tooltipRemoval(el), hideDelay);
            } else {
                this.tooltipRemoval(el);
            }
        },
        getTooltipElement(el) {
            return document.getElementById(el.$_ptooltipId);
        },
        getArrowElement(el) {
            let tooltipElement = this.getTooltipElement(el);

            return findSingle(tooltipElement, '[data-pc-section="arrow"]');
        },
        create(el) {
            const modifiers = el.$_ptooltipModifiers;

            const tooltipArrow = createElement('div', {
                class: !this.isUnstyled() && this.cx('arrow'),
                'p-bind': this.ptm('arrow', {
                    context: modifiers
                })
            });

            const tooltipText = createElement('div', {
                class: !this.isUnstyled() && this.cx('text'),
                'p-bind': this.ptm('text', {
                    context: modifiers
                })
            });

            if (!el.$_ptooltipEscape) {
                tooltipText.innerHTML = el.$_ptooltipValue;
            } else {
                tooltipText.innerHTML = '';
                tooltipText.appendChild(document.createTextNode(el.$_ptooltipValue));
            }

            const container = createElement(
                'div',
                {
                    id: el.$_ptooltipIdAttr,
                    role: 'tooltip',
                    style: {
                        display: 'inline-block',
                        width: el.$_ptooltipFitContent ? 'fit-content' : undefined,
                        pointerEvents: !this.isUnstyled() && el.$_ptooltipAutoHide && 'none'
                    },
                    class: [!this.isUnstyled() && this.cx('root'), el.$_ptooltipClass],
                    [this.$attrSelector]: '',
                    'p-bind': this.ptm('root', {
                        context: modifiers
                    })
                },
                tooltipArrow,
                tooltipText
            );

            document.body.appendChild(container);

            el.$_ptooltipId = container.id;
            this.$el = container;

            return container;
        },
        remove(el) {
            if (el) {
                let tooltipElement = this.getTooltipElement(el);

                if (tooltipElement && tooltipElement.parentElement) {
                    ZIndex.clear(tooltipElement);
                    document.body.removeChild(tooltipElement);
                }

                el.$_ptooltipId = null;
            }
        },
        align(el) {
            const modifiers = el.$_ptooltipModifiers;

            if (modifiers.top) {
                this.alignTop(el);

                if (this.isOutOfBounds(el)) {
                    this.alignBottom(el);

                    if (this.isOutOfBounds(el)) {
                        this.alignTop(el);
                    }
                }
            } else if (modifiers.left) {
                this.alignLeft(el);

                if (this.isOutOfBounds(el)) {
                    this.alignRight(el);

                    if (this.isOutOfBounds(el)) {
                        this.alignTop(el);

                        if (this.isOutOfBounds(el)) {
                            this.alignBottom(el);

                            if (this.isOutOfBounds(el)) {
                                this.alignLeft(el);
                            }
                        }
                    }
                }
            } else if (modifiers.bottom) {
                this.alignBottom(el);

                if (this.isOutOfBounds(el)) {
                    this.alignTop(el);

                    if (this.isOutOfBounds(el)) {
                        this.alignBottom(el);
                    }
                }
            } else {
                this.alignRight(el);

                if (this.isOutOfBounds(el)) {
                    this.alignLeft(el);

                    if (this.isOutOfBounds(el)) {
                        this.alignTop(el);

                        if (this.isOutOfBounds(el)) {
                            this.alignBottom(el);

                            if (this.isOutOfBounds(el)) {
                                this.alignRight(el);
                            }
                        }
                    }
                }
            }
        },
        getHostOffset(el) {
            let offset = el.getBoundingClientRect();
            let targetLeft = offset.left + getWindowScrollLeft();
            let targetTop = offset.top + getWindowScrollTop();

            return { left: targetLeft, top: targetTop };
        },
        alignRight(el) {
            this.preAlign(el, 'right');
            let tooltipElement = this.getTooltipElement(el);
            let arrowElement = this.getArrowElement(el);
            let hostOffset = this.getHostOffset(el);
            let left = hostOffset.left + getOuterWidth(el);
            let top = hostOffset.top + (getOuterHeight(el) - getOuterHeight(tooltipElement)) / 2;

            tooltipElement.style.left = left + 'px';
            tooltipElement.style.top = top + 'px';

            arrowElement.style.top = '50%';
            arrowElement.style.right = null;
            arrowElement.style.bottom = null;
            arrowElement.style.left = '0';
        },
        alignLeft(el) {
            this.preAlign(el, 'left');
            let tooltipElement = this.getTooltipElement(el);
            let arrowElement = this.getArrowElement(el);
            let hostOffset = this.getHostOffset(el);
            let left = hostOffset.left - getOuterWidth(tooltipElement);
            let top = hostOffset.top + (getOuterHeight(el) - getOuterHeight(tooltipElement)) / 2;

            tooltipElement.style.left = left + 'px';
            tooltipElement.style.top = top + 'px';

            arrowElement.style.top = '50%';
            arrowElement.style.right = '0';
            arrowElement.style.bottom = null;
            arrowElement.style.left = null;
        },
        alignTop(el) {
            this.preAlign(el, 'top');
            let tooltipElement = this.getTooltipElement(el);
            let arrowElement = this.getArrowElement(el);
            let tooltipWidth = getOuterWidth(tooltipElement);
            let elementWidth = getOuterWidth(el);
            let { width: viewportWidth } = getViewport();
            let hostOffset = this.getHostOffset(el);
            let left = hostOffset.left + (elementWidth - tooltipWidth) / 2;
            let top = hostOffset.top - getOuterHeight(tooltipElement);

            if (left < 0) {
                left = 0;
            } else if (left + tooltipWidth > viewportWidth) {
                left = Math.floor(hostOffset.left + elementWidth - tooltipWidth);
            }

            tooltipElement.style.left = left + 'px';
            tooltipElement.style.top = top + 'px';

            // The center of the target relative to the tooltip
            let elementRelativeCenter = hostOffset.left - this.getHostOffset(tooltipElement).left + elementWidth / 2;

            arrowElement.style.top = null;
            arrowElement.style.right = null;
            arrowElement.style.bottom = '0';
            arrowElement.style.left = elementRelativeCenter + 'px';
        },
        alignBottom(el) {
            this.preAlign(el, 'bottom');
            let tooltipElement = this.getTooltipElement(el);
            let arrowElement = this.getArrowElement(el);
            let tooltipWidth = getOuterWidth(tooltipElement);
            let elementWidth = getOuterWidth(el);
            let { width: viewportWidth } = getViewport();
            let hostOffset = this.getHostOffset(el);

            let left = hostOffset.left + (elementWidth - tooltipWidth) / 2;
            let top = hostOffset.top + getOuterHeight(el);

            if (left < 0) {
                left = 0;
            } else if (left + tooltipWidth > viewportWidth) {
                left = Math.floor(hostOffset.left + elementWidth - tooltipWidth);
            }

            tooltipElement.style.left = left + 'px';
            tooltipElement.style.top = top + 'px';

            // The center of the target relative to the tooltip
            let elementRelativeCenter = hostOffset.left - this.getHostOffset(tooltipElement).left + elementWidth / 2;

            arrowElement.style.top = '0';
            arrowElement.style.right = null;
            arrowElement.style.bottom = null;
            arrowElement.style.left = elementRelativeCenter + 'px';
        },
        preAlign(el, position) {
            let tooltipElement = this.getTooltipElement(el);

            tooltipElement.style.left = -999 + 'px';
            tooltipElement.style.top = -999 + 'px';
            removeClass(tooltipElement, `p-tooltip-${tooltipElement.$_ptooltipPosition}`);
            !this.isUnstyled() && addClass(tooltipElement, `p-tooltip-${position}`);
            tooltipElement.$_ptooltipPosition = position;
            tooltipElement.setAttribute('data-p-position', position);
        },
        isOutOfBounds(el) {
            let tooltipElement = this.getTooltipElement(el);
            let offset = tooltipElement.getBoundingClientRect();
            let targetTop = offset.top;
            let targetLeft = offset.left;
            let width = getOuterWidth(tooltipElement);
            let height = getOuterHeight(tooltipElement);
            let viewport = getViewport();

            return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
        },
        getTarget(el) {
            return hasClass(el, 'p-inputwrapper') ? (findSingle(el, 'input') ?? el) : el;
        },
        getModifiers(options) {
            // modifiers
            if (options.modifiers && Object.keys(options.modifiers).length) {
                return options.modifiers;
            }

            // arg
            if (options.arg && typeof options.arg === 'object') {
                return Object.entries(options.arg).reduce((acc, [key, val]) => {
                    if (key === 'event' || key === 'position') acc[val] = true;

                    return acc;
                }, {});
            }

            return {};
        }
    }
});

export default Tooltip;

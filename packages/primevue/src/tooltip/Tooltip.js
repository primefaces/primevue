import { addClass, createElement, fadeIn, findSingle, getAttribute, getOuterHeight, getOuterWidth, getViewport, getWindowScrollLeft, getWindowScrollTop, hasClass, isExist, isTouchDevice, removeClass } from '@primeuix/utils/dom';
import { isEmpty } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { ConnectedOverlayScrollHandler, UniqueComponentId } from '@primevue/core/utils';
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
            target.$_ptooltipIdAttr = UniqueComponentId() + '_tooltip';
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
                target.$_ptooltipIdAttr = options.value.id || UniqueComponentId() + '_tooltip';
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
            target.$_ptooltipIdAttr = target.$_ptooltipIdAttr || UniqueComponentId() + '_tooltip';
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
                target.$_ptooltipIdAttr = options.value.id || target.$_ptooltipIdAttr || UniqueComponentId() + '_tooltip';
                target.$_ptooltipShowDelay = options.value.showDelay || 0;
                target.$_ptooltipHideDelay = options.value.hideDelay || 0;
                target.$_ptooltipAutoHide = !!options.value.autoHide === options.value.autoHide ? options.value.autoHide : true;

                this.bindEvents(target, options);
            }
        }
    },
    unmounted(el, options) {
        let target = this.getTarget(el);

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
                el.$_focusevent = (event) => this.onFocus(event, options);

                el.addEventListener('focus', el.$_focusevent);
                el.addEventListener('blur', this.onBlur.bind(this));
            } else {
                el.$_mouseenterevent = (event) => this.onMouseEnter(event, options);

                el.addEventListener('mouseenter', el.$_mouseenterevent);
                el.addEventListener('mouseleave', this.onMouseLeave.bind(this));
                el.addEventListener('click', this.onClick.bind(this));
            }

            el.addEventListener('keydown', this.onKeydown.bind(this));
        },
        unbindEvents(el) {
            const modifiers = el.$_ptooltipModifiers;

            if (modifiers.focus) {
                el.removeEventListener('focus', el.$_focusevent);
                el.$_focusevent = null;

                el.removeEventListener('blur', this.onBlur.bind(this));
            } else {
                el.removeEventListener('mouseenter', el.$_mouseenterevent);
                el.$_mouseenterevent = null;

                el.removeEventListener('mouseleave', this.onMouseLeave.bind(this));
                el.removeEventListener('click', this.onClick.bind(this));
            }

            el.removeEventListener('keydown', this.onKeydown.bind(this));
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
        tooltipActions(el, options) {
            if (el.$_ptooltipDisabled || !isExist(el)) {
                return;
            }

            let tooltipElement = this.create(el, options);

            this.align(el);
            !this.isUnstyled() && fadeIn(tooltipElement, 250);

            const $this = this;

            window.addEventListener('resize', function onWindowResize() {
                if (!isTouchDevice()) {
                    $this.hide(el);
                }

                window.removeEventListener('resize', onWindowResize);
            });

            tooltipElement.addEventListener('mouseleave', function onTooltipLeave() {
                $this.hide(el);

                tooltipElement.removeEventListener('mouseleave', onTooltipLeave);
            });

            this.bindScrollListener(el);
            ZIndex.set('tooltip', tooltipElement, el.$_ptooltipZIndex);
        },
        show(el, options, showDelay) {
            if (showDelay !== undefined) {
                this.timer = setTimeout(() => this.tooltipActions(el, options), showDelay);
            } else {
                this.tooltipActions(el, options);
            }
        },
        tooltipRemoval(el) {
            this.remove(el);
            this.unbindScrollListener(el);
        },
        hide(el, hideDelay) {
            clearTimeout(this.timer);

            if (hideDelay !== undefined) {
                setTimeout(() => this.tooltipRemoval(el), hideDelay);
            } else {
                this.tooltipRemoval(el);
            }
        },
        getTooltipElement(el) {
            return document.getElementById(el.$_ptooltipId);
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
            let hostOffset = this.getHostOffset(el);
            let left = hostOffset.left + getOuterWidth(el);
            let top = hostOffset.top + (getOuterHeight(el) - getOuterHeight(tooltipElement)) / 2;

            tooltipElement.style.left = left + 'px';
            tooltipElement.style.top = top + 'px';
        },
        alignLeft(el) {
            this.preAlign(el, 'left');
            let tooltipElement = this.getTooltipElement(el);
            let hostOffset = this.getHostOffset(el);
            let left = hostOffset.left - getOuterWidth(tooltipElement);
            let top = hostOffset.top + (getOuterHeight(el) - getOuterHeight(tooltipElement)) / 2;

            tooltipElement.style.left = left + 'px';
            tooltipElement.style.top = top + 'px';
        },
        alignTop(el) {
            this.preAlign(el, 'top');
            let tooltipElement = this.getTooltipElement(el);
            let hostOffset = this.getHostOffset(el);
            let left = hostOffset.left + (getOuterWidth(el) - getOuterWidth(tooltipElement)) / 2;
            let top = hostOffset.top - getOuterHeight(tooltipElement);

            tooltipElement.style.left = left + 'px';
            tooltipElement.style.top = top + 'px';
        },
        alignBottom(el) {
            this.preAlign(el, 'bottom');
            let tooltipElement = this.getTooltipElement(el);
            let hostOffset = this.getHostOffset(el);
            let left = hostOffset.left + (getOuterWidth(el) - getOuterWidth(tooltipElement)) / 2;
            let top = hostOffset.top + getOuterHeight(el);

            tooltipElement.style.left = left + 'px';
            tooltipElement.style.top = top + 'px';
        },
        preAlign(el, position) {
            let tooltipElement = this.getTooltipElement(el);

            tooltipElement.style.left = -999 + 'px';
            tooltipElement.style.top = -999 + 'px';
            removeClass(tooltipElement, `p-tooltip-${tooltipElement.$_ptooltipPosition}`);
            !this.isUnstyled() && addClass(tooltipElement, `p-tooltip-${position}`);
            tooltipElement.$_ptooltipPosition = position;
            tooltipElement.setAttribute('data-p-position', position);

            let arrowElement = findSingle(tooltipElement, '[data-pc-section="arrow"]');

            arrowElement.style.top = position === 'bottom' ? '0' : position === 'right' || position === 'left' || (position !== 'right' && position !== 'left' && position !== 'top' && position !== 'bottom') ? '50%' : null;
            arrowElement.style.bottom = position === 'top' ? '0' : null;
            arrowElement.style.left = position === 'right' || (position !== 'right' && position !== 'left' && position !== 'top' && position !== 'bottom') ? '0' : position === 'top' || position === 'bottom' ? '50%' : null;
            arrowElement.style.right = position === 'left' ? '0' : null;
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
            return hasClass(el, 'p-inputwrapper') ? findSingle(el, 'input') : el;
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

import { BaseDirective } from 'primevue/basedirective';
import { ConnectedOverlayScrollHandler, DomHandler, ObjectUtils, UniqueComponentId, ZIndexUtils } from 'primevue/utils';

let timer;

function bindEvents(el, options) {
    const modifiers = el.$_ptooltipModifiers;

    if (modifiers.focus) {
        el.$_focusevent = (event) => onFocus(event, options);

        el.addEventListener('focus', el.$_focusevent);
        el.addEventListener('blur', onBlur);
    } else {
        el.$_mouseenterevent = (event) => onMouseEnter(event, options);

        el.addEventListener('mouseenter', el.$_mouseenterevent);
        el.addEventListener('mouseleave', onMouseLeave);
        el.addEventListener('click', onClick);
    }

    el.addEventListener('keydown', onKeydown);
}

function unbindEvents(el) {
    const modifiers = el.$_ptooltipModifiers;

    if (modifiers.focus) {
        el.removeEventListener('focus', el.$_focusevent);
        el.$_focusevent = null;

        el.removeEventListener('blur', onBlur);
    } else {
        el.removeEventListener('mouseenter', el.$_mouseenterevent);
        el.$_mouseenterevent = null;

        el.removeEventListener('mouseleave', onMouseLeave);
        el.removeEventListener('click', onClick);
    }

    el.removeEventListener('keydown', onKeydown);
}

function bindScrollListener(el) {
    if (!el.$_ptooltipScrollHandler) {
        el.$_ptooltipScrollHandler = new ConnectedOverlayScrollHandler(el, function () {
            hide(el);
        });
    }

    el.$_ptooltipScrollHandler.bindScrollListener();
}

function unbindScrollListener(el) {
    if (el.$_ptooltipScrollHandler) {
        el.$_ptooltipScrollHandler.unbindScrollListener();
    }
}

function onMouseEnter(event, options) {
    const el = event.currentTarget;
    const showDelay = el.$_ptooltipShowDelay;

    show(el, options, showDelay);
}

function onMouseLeave(event) {
    const el = event.currentTarget;
    const hideDelay = el.$_ptooltipHideDelay;

    hide(el, hideDelay);
}

function onFocus(event, options) {
    const el = event.currentTarget;
    const showDelay = el.$_ptooltipShowDelay;

    show(el, options, showDelay);
}

function onBlur(event) {
    const el = event.currentTarget;
    const hideDelay = el.$_ptooltipHideDelay;

    hide(el, hideDelay);
}

function onClick(event) {
    const el = event.currentTarget;
    const hideDelay = el.$_ptooltipHideDelay;

    hide(el, hideDelay);
}

function onKeydown(event) {
    const el = event.currentTarget;
    const hideDelay = el.$_ptooltipHideDelay;

    event.code === 'Escape' && hide(event.currentTarget, hideDelay);
}

function tooltipActions(el, options) {
    if (el.$_ptooltipDisabled || !DomHandler.isExist(el)) {
        return;
    }

    let tooltipElement = create(el, options);

    align(el);
    !el.$_ptooltipUnstyled && DomHandler.fadeIn(tooltipElement, 250);

    window.addEventListener('resize', function onWindowResize() {
        if (!DomHandler.isTouchDevice()) {
            hide(el);
        }

        this.removeEventListener('resize', onWindowResize);
    });

    bindScrollListener(el);
    ZIndexUtils.set('tooltip', tooltipElement, el.$_ptooltipZIndex);
}

function show(el, options, showDelay) {
    if (showDelay !== undefined) {
        timer = setTimeout(() => tooltipActions(el, options), showDelay);
    } else {
        tooltipActions(el, options);
    }
}

function tooltipRemoval(el) {
    remove(el);
    unbindScrollListener(el);
}

function hide(el, hideDelay) {
    clearTimeout(timer);

    if (hideDelay !== undefined) {
        setTimeout(() => tooltipRemoval(el), hideDelay);
    } else {
        tooltipRemoval(el);
    }
}

function getTooltipElement(el) {
    return document.getElementById(el.$_ptooltipId);
}

function create(el, options) {
    const id = el.$_ptooltipIdAttr !== '' ? el.$_ptooltipIdAttr : UniqueComponentId() + '_tooltip';

    el.$_ptooltipId = id;

    let container = document.createElement('div');

    container.id = id;
    container.setAttribute('data-pc-section', 'root');
    container.setAttribute('data-pc-name', 'tooltip');

    let tooltipArrow = document.createElement('div');

    tooltipArrow.setAttribute('data-pc-section', 'arrow');
    container.appendChild(tooltipArrow);

    let tooltipText = document.createElement('div');

    tooltipText.setAttribute('data-pc-section', 'text');

    if (!el.$_ptooltipUnstyled) {
        tooltipArrow.className = 'p-tooltip-arrow';
        tooltipText.className = 'p-tooltip-text';
    }

    if (el.$_ptooltipEscape) {
        tooltipText.innerHTML = el.$_ptooltipValue;
    } else {
        tooltipText.innerHTML = '';
        tooltipText.appendChild(document.createTextNode(el.$_ptooltipValue));
    }

    container.setAttribute('role', 'tooltip');
    container.appendChild(tooltipText);
    document.body.appendChild(container);

    container.style.display = 'inline-block';

    if (el.$_ptooltipFitContent) {
        container.style.width = 'fit-content';
    }

    el.$_pDirectiveElement = container;
    BaseDirective.directiveElement = container;
    BaseDirective.handleCSS('tooltip', container, options);

    return container;
}

function remove(el) {
    if (el) {
        let tooltipElement = getTooltipElement(el);

        if (tooltipElement && tooltipElement.parentElement) {
            ZIndexUtils.clear(tooltipElement);
            document.body.removeChild(tooltipElement);
        }

        el.$_ptooltipId = null;
    }
}

function align(el) {
    const modifiers = el.$_ptooltipModifiers;

    if (modifiers.top) {
        alignTop(el);

        if (isOutOfBounds(el)) {
            alignBottom(el);

            if (isOutOfBounds(el)) {
                alignTop(el);
            }
        }
    } else if (modifiers.left) {
        alignLeft(el);

        if (isOutOfBounds(el)) {
            alignRight(el);

            if (isOutOfBounds(el)) {
                alignTop(el);

                if (isOutOfBounds(el)) {
                    alignBottom(el);

                    if (isOutOfBounds(el)) {
                        alignLeft(el);
                    }
                }
            }
        }
    } else if (modifiers.bottom) {
        alignBottom(el);

        if (isOutOfBounds(el)) {
            alignTop(el);

            if (isOutOfBounds(el)) {
                alignBottom(el);
            }
        }
    } else {
        alignRight(el);

        if (isOutOfBounds(el)) {
            alignLeft(el);

            if (isOutOfBounds(el)) {
                alignTop(el);

                if (isOutOfBounds(el)) {
                    alignBottom(el);

                    if (isOutOfBounds(el)) {
                        alignRight(el);
                    }
                }
            }
        }
    }
}

function getHostOffset(el) {
    let offset = el.getBoundingClientRect();
    let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
    let targetTop = offset.top + DomHandler.getWindowScrollTop();

    return { left: targetLeft, top: targetTop };
}

function alignRight(el) {
    preAlign(el, 'right');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left + DomHandler.getOuterWidth(el);
    let top = hostOffset.top + (DomHandler.getOuterHeight(el) - DomHandler.getOuterHeight(tooltipElement)) / 2;

    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function alignLeft(el) {
    preAlign(el, 'left');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left - DomHandler.getOuterWidth(tooltipElement);
    let top = hostOffset.top + (DomHandler.getOuterHeight(el) - DomHandler.getOuterHeight(tooltipElement)) / 2;

    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function alignTop(el) {
    preAlign(el, 'top');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left + (DomHandler.getOuterWidth(el) - DomHandler.getOuterWidth(tooltipElement)) / 2;
    let top = hostOffset.top - DomHandler.getOuterHeight(tooltipElement);

    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function alignBottom(el) {
    preAlign(el, 'bottom');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left + (DomHandler.getOuterWidth(el) - DomHandler.getOuterWidth(tooltipElement)) / 2;
    let top = hostOffset.top + DomHandler.getOuterHeight(el);

    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function preAlign(el, position) {
    let tooltipElement = getTooltipElement(el);

    tooltipElement.style.left = -999 + 'px';
    tooltipElement.style.top = -999 + 'px';
    tooltipElement.className += el.$_ptooltipUnstyled ? el.$_ptooltipClass : ` p-tooltip p-component p-tooltip-${position} ${el.$_ptooltipClass || ''}`;
}

function isOutOfBounds(el) {
    let tooltipElement = getTooltipElement(el);
    let offset = tooltipElement.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = DomHandler.getOuterWidth(tooltipElement);
    let height = DomHandler.getOuterHeight(tooltipElement);
    let viewport = DomHandler.getViewport();

    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
}

function getTarget(el) {
    return DomHandler.hasClass(el, 'p-inputwrapper') ? DomHandler.findSingle(el, 'input') : el;
}

function getModifiers(options) {
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

const Tooltip = BaseDirective.extend('tooltip', {
    beforeMount(el, options) {
        let target = getTarget(el);

        target.$_ptooltipModifiers = getModifiers(options);

        if (!options.value) return;
        else if (typeof options.value === 'string') {
            target.$_ptooltipValue = options.value;
            target.$_ptooltipDisabled = false;
            target.$_ptooltipEscape = false;
            target.$_ptooltipClass = null;
            target.$_ptooltipFitContent = true;
            target.$_ptooltipIdAttr = '';
            target.$_ptooltipShowDelay = 0;
            target.$_ptooltipHideDelay = 0;
        } else if (typeof options.value === 'object' && options.value) {
            if (ObjectUtils.isEmpty(options.value.value) || options.value.value.trim() === '') return;
            else {
                target.$_ptooltipValue = options.value.value;
                target.$_ptooltipDisabled = !!options.value.disabled === options.value.disabled ? options.value.disabled : false;
                target.$_ptooltipEscape = !!options.value.escape === options.value.escape ? options.value.escape : false;
                target.$_ptooltipClass = options.value.class || '';
                target.$_ptooltipFitContent = !!options.value.fitContent === options.value.fitContent ? options.value.fitContent : true;
                target.$_ptooltipIdAttr = options.value.id || '';
                target.$_ptooltipShowDelay = options.value.showDelay || 0;
                target.$_ptooltipHideDelay = options.value.hideDelay || 0;
            }
        }

        if (options.instance.$primevue && options.instance.$primevue.config) {
            let _config = options.instance.$primevue && options.instance.$primevue.config;

            target.$_ptooltipZIndex = _config.zIndex.tooltip;
            target.$_ptooltipUnstyled = _config.unstyled || false;
        }

        bindEvents(target, options);
    },
    updated(el, options) {
        let target = getTarget(el);

        target.$_ptooltipModifiers = getModifiers(options);
        unbindEvents(target);

        if (!options.value) {
            return;
        }

        if (typeof options.value === 'string') {
            target.$_ptooltipValue = options.value;
            target.$_ptooltipDisabled = false;
            target.$_ptooltipEscape = false;
            target.$_ptooltipClass = null;
            target.$_ptooltipIdAttr = '';
            target.$_ptooltipShowDelay = 0;
            target.$_ptooltipHideDelay = 0;

            bindEvents(target, options);
        } else if (typeof options.value === 'object' && options.value) {
            if (ObjectUtils.isEmpty(options.value.value) || options.value.value.trim() === '') {
                unbindEvents(target, options);

                return;
            } else {
                target.$_ptooltipValue = options.value.value;
                target.$_ptooltipDisabled = !!options.value.disabled === options.value.disabled ? options.value.disabled : false;
                target.$_ptooltipEscape = !!options.value.escape === options.value.escape ? options.value.escape : false;
                target.$_ptooltipClass = options.value.class || '';
                target.$_ptooltipFitContent = !!options.value.fitContent === options.value.fitContent ? options.value.fitContent : true;
                target.$_ptooltipIdAttr = options.value.id || '';
                target.$_ptooltipShowDelay = options.value.showDelay || 0;
                target.$_ptooltipHideDelay = options.value.hideDelay || 0;

                bindEvents(target, options);
            }
        }
    },
    unmounted(el, options) {
        let target = getTarget(el);

        remove(target);
        unbindEvents(target, options);

        if (target.$_ptooltipScrollHandler) {
            target.$_ptooltipScrollHandler.destroy();
            target.$_ptooltipScrollHandler = null;
        }
    }
});

export default Tooltip;

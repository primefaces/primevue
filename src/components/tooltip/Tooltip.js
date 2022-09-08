import { UniqueComponentId, DomHandler, ObjectUtils, ConnectedOverlayScrollHandler, ZIndexUtils } from 'primevue/utils';

function bindEvents(el) {
    const modifiers = el.$_ptooltipModifiers;

    if (modifiers.focus) {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    } else {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
        el.addEventListener('click', onClick);
    }
}

function unbindEvents(el) {
    const modifiers = el.$_ptooltipModifiers;

    if (modifiers.focus) {
        el.removeEventListener('focus', onFocus);
        el.removeEventListener('blur', onBlur);
    } else {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
        el.removeEventListener('click', onClick);
    }
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

function onMouseEnter(event) {
    show(event.currentTarget);
}

function onMouseLeave(event) {
    hide(event.currentTarget);
}

function onFocus(event) {
    show(event.currentTarget);
}

function onBlur(event) {
    hide(event.currentTarget);
}

function onClick(event) {
    hide(event.currentTarget);
}

function show(el) {
    if (el.$_ptooltipDisabled) {
        return;
    }

    let tooltipElement = create(el);

    align(el);
    DomHandler.fadeIn(tooltipElement, 250);

    window.addEventListener('resize', function onWindowResize() {
        if (!DomHandler.isTouchDevice()) {
            hide(el);
        }

        this.removeEventListener('resize', onWindowResize);
    });

    bindScrollListener(el);
    ZIndexUtils.set('tooltip', tooltipElement, el.$_ptooltipZIndex);
}

function hide(el) {
    remove(el);
    unbindScrollListener(el);
}

function getTooltipElement(el) {
    return document.getElementById(el.$_ptooltipId);
}

function create(el) {
    const id = UniqueComponentId() + '_tooltip';

    el.$_ptooltipId = id;

    let container = document.createElement('div');

    container.id = id;

    let tooltipArrow = document.createElement('div');

    tooltipArrow.className = 'p-tooltip-arrow';
    container.appendChild(tooltipArrow);

    let tooltipText = document.createElement('div');

    tooltipText.className = 'p-tooltip-text';

    if (el.$_ptooltipEscape) {
        tooltipText.innerHTML = el.$_ptooltipValue;
    } else {
        tooltipText.innerHTML = '';
        tooltipText.appendChild(document.createTextNode(el.$_ptooltipValue));
    }

    container.appendChild(tooltipText);
    document.body.appendChild(container);

    container.style.display = 'inline-block';

    if (el.$_ptooltipFitContent) {
        container.style.width = 'fit-content';
    }

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
    tooltipElement.className = `p-tooltip p-component p-tooltip-${position} ${el.$_ptooltipClass || ''}`;
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

const Tooltip = {
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
        } else if (typeof options.value === 'object' && options.value) {
            if (ObjectUtils.isEmpty(options.value.value)) return;
            else {
                /* eslint-disable */
                target.$_ptooltipValue = options.value.value;
                target.$_ptooltipDisabled = !!options.value.disabled === options.value.disabled ? options.value.disabled : false;
                target.$_ptooltipEscape = !!options.value.escape === options.value.escape ? options.value.escape : false;
                target.$_ptooltipClass = options.value.class;
                target.$_ptooltipFitContent = !!options.value.fitContent === options.value.fitContent ? options.value.fitContent : true;
            }
        }

        target.$_ptooltipZIndex = options.instance.$primevue && options.instance.$primevue.config && options.instance.$primevue.config.zIndex.tooltip;
        bindEvents(target);
    },
    unmounted(el) {
        let target = getTarget(el);
        remove(target);
        unbindEvents(target);

        if (target.$_ptooltipScrollHandler) {
            target.$_ptooltipScrollHandler.destroy();
            target.$_ptooltipScrollHandler = null;
        }

        ZIndexUtils.clear(el);
    },
    updated(el, options) {
        let target = getTarget(el);
        target.$_ptooltipModifiers = getModifiers(options);

        if (!options.value) return;
        if (typeof options.value === 'string') {
            target.$_ptooltipValue = options.value;
            target.$_ptooltipDisabled = false;
            target.$_ptooltipEscape = false;
            target.$_ptooltipClass = null;
        } else if (typeof options.value === 'object' && options.value) {
            if (ObjectUtils.isEmpty(options.value.value)) return;
            else {
                /* eslint-disable */
                target.$_ptooltipValue = options.value.value;
                target.$_ptooltipDisabled = !!options.value.disabled === options.value.disabled ? options.value.disabled : false;
                target.$_ptooltipEscape = !!options.value.escape === options.value.escape ? options.value.escape : false;
                target.$_ptooltipClass = options.value.class;
                target.$_ptooltipFitContent = !!options.value.fitContent === options.value.fitContent ? options.value.fitContent : true;
            }
        }
    }
};

export default Tooltip;

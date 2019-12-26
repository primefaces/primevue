import UniqueComponentId from '../utils/UniqueComponentId';
import DomHandler from '../utils/DomHandler';

function bindEvents(el) {
    const modifiers = el.$_ptooltipModifiers;
    if (modifiers.focus) {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    }
    else {
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
    }
    else {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
        el.removeEventListener('click', onClick);
    }

    //this.unbindDocumentResizeListener();
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
    if (!el.$_ptooltipValue) {
        return;
    }

    let tooltipElement = create(el);
    align(el);
    DomHandler.fadeIn(tooltipElement, 250);
    tooltipElement.style.zIndex = ++DomHandler.zindex;
}

function hide(el) {
    remove(el);
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
    tooltipText.innerHTML = el.$_ptooltipValue;

    container.appendChild(tooltipText);
    document.body.appendChild(container);

    container.style.display = 'inline-block';

    return container;
}

function remove(el) {
    let tooltipElement = getTooltipElement(el);
    if (tooltipElement && tooltipElement.parentElement) {
        document.body.removeChild(tooltipElement);
    }
    el.$_ptooltipId = null;
}

function align(el) {
    const modifiers = el.$_ptooltipModifiers;

    if (modifiers.top) {
        alignTop(el);
        if (isOutOfBounds(el)) {
            alignBottom(el);
        }
    }
    else if (modifiers.left) {
        alignLeft(el);
        if (isOutOfBounds(el)) {
            alignRight(el);

            if (isOutOfBounds(el)) {
                alignTop(el);

                if (isOutOfBounds(el)) {
                    alignBottom(el);
                }
            }
        }
    }
    else if (modifiers.bottom) {
        alignBottom(el);
        if (isOutOfBounds(el)) {
            alignTop(el);
        }
    }
    else {
        alignRight(el);
        if (isOutOfBounds(el)) {
            alignLeft(el);

            if (isOutOfBounds(el)) {
                alignTop(el);

                if (isOutOfBounds(el)) {
                    alignBottom(el);
                }
            }
        }
    }
}

function getHostOffset(el) {
    let offset = el.getBoundingClientRect();
    let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
    let targetTop = offset.top + DomHandler.getWindowScrollTop();

    return {left: targetLeft, top: targetTop};
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
    tooltipElement.className = 'p-tooltip p-component p-tooltip-' + position;
}

function isOutOfBounds(el) {
    let tooltipElement = getTooltipElement(el);
    let offset = tooltipElement.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = DomHandler.getOuterWidth(tooltipElement);
    let height = DomHandler.getOuterHeight(tooltipElement);
    let viewport = DomHandler.getViewport();

    return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);
}

const Tooltip = {
    bind(el, options) {
        el.$_ptooltipModifiers = options.modifiers;
        el.$_ptooltipValue = options.value;
        bindEvents(el);
    },
    unbind(el) {
        remove(el);
        unbindEvents(el);
    }
};

export default Tooltip;
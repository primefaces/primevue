'use strict';

var utils = require('primevue/utils');

function bindEvents(el) {
    el.addEventListener('mousedown', onMouseDown);
}

function unbindEvents(el) {
    el.removeEventListener('mousedown', onMouseDown);
}

function create(el) {
    let ink = document.createElement('span');
    ink.className = 'p-ink';
    el.appendChild(ink);

    ink.addEventListener('animationend', onAnimationEnd);
}

function remove(el) {
    let ink = getInk(el);
    if (ink) {
        unbindEvents(el);
        ink.removeEventListener('animationend', onAnimationEnd);
        ink.remove();
    }
}

function onMouseDown(event) {
    let target = event.currentTarget;
    let ink = getInk(target);
    if (!ink || getComputedStyle(ink, null).display === 'none') {
        return;
    }

    utils.DomHandler.removeClass(ink, 'p-ink-active');
    if (!utils.DomHandler.getHeight(ink) && !utils.DomHandler.getWidth(ink)) {
        let d = Math.max(utils.DomHandler.getOuterWidth(target), utils.DomHandler.getOuterHeight(target));
        ink.style.height = d + 'px';
        ink.style.width = d + 'px';
    }

    let offset = utils.DomHandler.getOffset(target);
    let x = event.pageX - offset.left + document.body.scrollTop - utils.DomHandler.getWidth(ink) / 2;
    let y = event.pageY - offset.top + document.body.scrollLeft - utils.DomHandler.getHeight(ink) / 2;

    ink.style.top = y + 'px';
    ink.style.left = x + 'px';
    utils.DomHandler.addClass(ink, 'p-ink-active');
}

function onAnimationEnd(event) {
    utils.DomHandler.removeClass(event.currentTarget, 'p-ink-active');
}

function getInk(el) {
    for (let i = 0; i < el.children.length; i++) {
        if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
            return el.children[i];
        }
    }
    return null;
}

const Ripple = {
    mounted(el, binding) {
        if (binding.instance.$primevue && binding.instance.$primevue.config && binding.instance.$primevue.config.ripple) {
            create(el);
            bindEvents(el);
        }
    },
    unmounted(el) {
        remove(el);
    }
};

module.exports = Ripple;

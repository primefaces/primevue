import { BaseDirective } from 'primevue/basedirective';
import { DomHandler } from 'primevue/utils';

let timeout;

function bindEvents(el) {
    el.addEventListener('mousedown', onMouseDown);
}

function unbindEvents(el) {
    el.removeEventListener('mousedown', onMouseDown);
}

function create(el, binding) {
    let ink = document.createElement('span');

    !el.$_prippleUnstyled && (ink.className = 'p-ink');
    ink.setAttribute('data-pc-name', 'ripple');
    ink.setAttribute('data-pc-section', 'root');
    ink.setAttribute('role', 'presentation');
    ink.setAttribute('aria-hidden', 'true');
    ink.setAttribute('data-p-ink', 'true');
    ink.setAttribute('data-p-ink-active', 'false');
    el.appendChild(ink);
    el.$pEl = ink;

    ink.addEventListener('animationend', onAnimationEnd);

    BaseDirective.handleCSS('ripple', ink, binding);
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

    !target.$_prippleUnstyled && DomHandler.removeClass(ink, 'p-ink-active');
    ink.setAttribute('data-p-ink-active', 'false');

    if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
        let d = Math.max(DomHandler.getOuterWidth(target), DomHandler.getOuterHeight(target));

        ink.style.height = d + 'px';
        ink.style.width = d + 'px';
    }

    let offset = DomHandler.getOffset(target);
    let x = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
    let y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;

    ink.style.top = y + 'px';
    ink.style.left = x + 'px';

    !target.$_prippleUnstyled && DomHandler.addClass(ink, 'p-ink-active');
    ink.setAttribute('data-p-ink-active', 'true');

    timeout = setTimeout(() => {
        if (ink) {
            !target.$_prippleUnstyled && DomHandler.removeClass(ink, 'p-ink-active');
            ink.setAttribute('data-p-ink-active', 'false');
        }
    }, 401);
}

function onAnimationEnd(event) {
    if (timeout) {
        clearTimeout(timeout);
    }

    !event.currentTarget.$_prippleUnstyled && DomHandler.removeClass(event.currentTarget, 'p-ink-active');
    event.currentTarget.setAttribute('data-p-ink-active', 'false');
}

function getInk(el) {
    for (let i = 0; i < el.children.length; i++) {
        if (el.children[i].getAttribute('data-pc-name') === 'ripple') {
            return el.children[i];
        }
    }

    return null;
}

const Ripple = BaseDirective.extend('ripple', {
    mounted(el, binding) {
        const primevue = binding.instance.$primevue;

        if (primevue && primevue.config && primevue.config.ripple) {
            el.$_prippleUnstyled = primevue.config.unstyled || false;

            create(el, binding);
            bindEvents(el);
        }
    },

    unmounted(el) {
        remove(el);
    }
});

export default Ripple;

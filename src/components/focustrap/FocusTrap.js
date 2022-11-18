import { DomHandler } from 'primevue/utils';

let element,
    firstVNode,
    lastVNode,
    shiftKey = false;

function firstHiddenFocus() {
    if (shiftKey) {
        lastVNode.focus();
    } else {
        const firstFocusableEl = DomHandler.getFirstFocusableElement(element, ':not(.p-hidden-focusable)');

        DomHandler.focus(firstFocusableEl);
    }
}

function lastHiddenFocus() {
    if (shiftKey) {
        const lastFocusableEl = DomHandler.getLastFocusableElement(element, ':not(.p-hidden-focusable)');

        DomHandler.focus(lastFocusableEl);
    } else {
        firstVNode.focus();
    }
}

function createHiddenElement(callback) {
    const el = document.createElement('span');

    el.classList = 'p-hidden-accessible p-hidden-focusable';
    el.tabIndex = '0';
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('role', 'presentation');
    el.addEventListener('focus', callback);

    return el;
}

function createHiddenElements(el) {
    firstVNode = createHiddenElement(firstHiddenFocus);
    lastVNode = createHiddenElement(lastHiddenFocus);

    el.prepend(firstVNode);
    el.append(lastVNode);
}

function bind(el) {
    el.$_pfocustrap_keydownlistener = (e) => {
        if (e.code === 'Tab') {
            shiftKey = e.shiftKey;
        }
    };

    el.addEventListener('keydown', el.$_pfocustrap_keydownlistener);
}

function unbind(el) {
    if (el.$_pfocustrap_keydownlistener) {
        el.removeEventListener('keydown', el.$_pfocustrap_keydownlistener);
        el.$_pfocustrap_keydownlistener = null;
    }
}

const FocusTrap = {
    mounted(el, binding, vnode) {
        const firstFocusableEl = DomHandler.getFirstFocusableElement(el, ':not(.p-hidden-focusable)');

        if (firstFocusableEl) {
            el.$_pfocustrapFocusTrapDisabled = false;

            if (binding.value && typeof binding.value === 'object') {
                el.$_pfocustrapFocusTrapDisabled = binding.value.focusTrapDisabled;
            }

            if (!el.$_pfocustrapFocusTrapDisabled) {
                element = el;
                createHiddenElements(el);
                bind(el, vnode);
            }
        }
    },
    unmounted(el) {
        element = null;
        firstVNode = null;
        lastVNode = null;
        shiftKey = false;
        unbind(el);
    }
};

export default FocusTrap;

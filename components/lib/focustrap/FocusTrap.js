import { DomHandler, ObjectUtils } from 'primevue/utils';

function bind(el, binding) {
    const { onFocusIn, onFocusOut } = binding.value || {};

    el.$_pfocustrap_mutationobserver = new MutationObserver((mutationList) => {
        mutationList.forEach((mutation) => {
            if (mutation.type === 'childList' && !el.contains(document.activeElement)) {
                const findNextFocusableElement = (el) => {
                    const focusableElement = DomHandler.isFocusableElement(el) ? el : DomHandler.getFirstFocusableElement(el);

                    return ObjectUtils.isNotEmpty(focusableElement) ? focusableElement : findNextFocusableElement(el.nextSibling);
                };

                DomHandler.focus(findNextFocusableElement(mutation.nextSibling));
            }
        });
    });

    el.$_pfocustrap_mutationobserver.disconnect();
    el.$_pfocustrap_mutationobserver.observe(el, {
        childList: true
    });

    el.$_pfocustrap_focusinlistener = (event) => onFocusIn && onFocusIn(event);
    el.$_pfocustrap_focusoutlistener = (event) => onFocusOut && onFocusOut(event);

    el.addEventListener('focusin', el.$_pfocustrap_focusinlistener);
    el.addEventListener('focusout', el.$_pfocustrap_focusoutlistener);
}

function unbind(el) {
    el.$_pfocustrap_mutationobserver && el.$_pfocustrap_mutationobserver.disconnect();
    el.$_pfocustrap_focusinlistener && el.removeEventListener('focusin', el.$_pfocustrap_focusinlistener) && (el.$_pfocustrap_focusinlistener = null);
    el.$_pfocustrap_focusoutlistener && el.removeEventListener('focusout', el.$_pfocustrap_focusoutlistener) && (el.$_pfocustrap_focusoutlistener = null);
}

function autoFocus(el, binding) {
    const { autoFocusSelector = '', firstFocusableSelector = '', autoFocus = false } = binding.value || {};
    let focusableElement = DomHandler.getFirstFocusableElement(el, `[autofocus]:not(.p-hidden-focusable)${autoFocusSelector}`);

    autoFocus && !focusableElement && (focusableElement = DomHandler.getFirstFocusableElement(el, `:not(.p-hidden-focusable)${firstFocusableSelector}`));
    DomHandler.focus(focusableElement);
}

function onFirstHiddenElementFocus(event) {
    const { currentTarget, relatedTarget } = event;
    const focusableElement =
        relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement
            ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, `:not(.p-hidden-focusable)${currentTarget.$_pfocustrap_focusableselector}`)
            : currentTarget.$_pfocustrap_lasthiddenfocusableelement;

    DomHandler.focus(focusableElement);
}

function onLastHiddenElementFocus(event) {
    const { currentTarget, relatedTarget } = event;
    const focusableElement =
        relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement
            ? DomHandler.getLastFocusableElement(currentTarget.parentElement, `:not(.p-hidden-focusable)${currentTarget.$_pfocustrap_focusableselector}`)
            : currentTarget.$_pfocustrap_firsthiddenfocusableelement;

    DomHandler.focus(focusableElement);
}

function createHiddenFocusableElements(el, binding) {
    const { tabIndex = 0, firstFocusableSelector = '', lastFocusableSelector = '' } = binding.value || {};

    const createFocusableElement = (onFocus) => {
        const element = document.createElement('span');

        element.classList.value = 'p-hidden-accessible p-hidden-focusable';
        element.tabIndex = tabIndex;
        element.setAttribute('aria-hidden', 'true');
        element.setAttribute('role', 'presentation');
        element.addEventListener('focus', onFocus);

        return element;
    };

    const firstFocusableElement = createFocusableElement(onFirstHiddenElementFocus);
    const lastFocusableElement = createFocusableElement(onLastHiddenElementFocus);

    firstFocusableElement.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement;
    firstFocusableElement.$_pfocustrap_focusableselector = firstFocusableSelector;

    lastFocusableElement.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement;
    lastFocusableElement.$_pfocustrap_focusableselector = lastFocusableSelector;

    el.prepend(firstFocusableElement);
    el.append(lastFocusableElement);
}

const FocusTrap = {
    mounted(el, binding) {
        const { disabled } = binding.value || {};

        if (!disabled) {
            createHiddenFocusableElements(el, binding);
            bind(el, binding);
            autoFocus(el, binding);
        }
    },
    updated(el, binding) {
        const { disabled } = binding.value || {};

        disabled && unbind(el);
    },
    unmounted(el) {
        unbind(el);
    }
};

export default FocusTrap;

import { BaseDirective } from 'primevue/basedirective';
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
    let focusableElement = DomHandler.getFirstFocusableElement(el, `[autofocus]:not([data-p-hidden-focusable="true"])${autoFocusSelector}`);

    autoFocus && !focusableElement && (focusableElement = DomHandler.getFirstFocusableElement(el, `:not([data-p-hidden-focusable="true"])${firstFocusableSelector}`));
    DomHandler.focus(focusableElement);
}

function onFirstHiddenElementFocus(event) {
    const { currentTarget, relatedTarget } = event;
    const focusableElement =
        relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement
            ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, `:not([data-p-hidden-focusable="true"])${currentTarget.$_pfocustrap_focusableselector}`)
            : currentTarget.$_pfocustrap_lasthiddenfocusableelement;

    DomHandler.focus(focusableElement);
}

function onLastHiddenElementFocus(event) {
    const { currentTarget, relatedTarget } = event;
    const focusableElement =
        relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement
            ? DomHandler.getLastFocusableElement(currentTarget.parentElement, `:not([data-p-hidden-focusable="true"])${currentTarget.$_pfocustrap_focusableselector}`)
            : currentTarget.$_pfocustrap_firsthiddenfocusableelement;

    DomHandler.focus(focusableElement);
}

function createHiddenFocusableElements(el, binding) {
    const { tabIndex = 0, firstFocusableSelector = '', lastFocusableSelector = '' } = binding.value || {};

    const createFocusableElement = (onFocus) => {
        const element = document.createElement('span');

        if (binding.instance.$primevue && binding.instance.$primevue.config && binding.instance.$primevue.config.unstyled) {
            element.style.border = '0';
            element.style.clip = 'rect(0 0 0 0)';
            element.style.height = '1px';
            element.style.margin = '-1px';
            element.style.overflow = 'hidden';
            element.style.padding = '0';
            element.style.position = 'absolute';
            element.style.width = '1px';
        } else {
            element.classList = 'p-hidden-accessible p-hidden-focusable';
        }

        element.tabIndex = tabIndex;
        element.setAttribute('aria-hidden', 'true');
        element.setAttribute('role', 'presentation');
        element.setAttribute('data-p-hidden-accessible', true);
        element.setAttribute('data-p-hidden-focusable', true);
        element.addEventListener('focus', onFocus);

        return element;
    };

    const firstFocusableElement = createFocusableElement(onFirstHiddenElementFocus);
    const lastFocusableElement = createFocusableElement(onLastHiddenElementFocus);

    firstFocusableElement.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement;
    firstFocusableElement.$_pfocustrap_focusableselector = firstFocusableSelector;
    firstFocusableElement.setAttribute('data-pc-section', 'firstfocusableelement');

    lastFocusableElement.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement;
    lastFocusableElement.$_pfocustrap_focusableselector = lastFocusableSelector;
    lastFocusableElement.setAttribute('data-pc-section', 'lastfocusableelement');

    el.prepend(firstFocusableElement);
    el.append(lastFocusableElement);
}

const FocusTrap = BaseDirective.extend('focustrap', {
    mounted(el, binding) {
        const { disabled } = binding.value || {};

        if (!disabled) {
            createHiddenFocusableElements(el, binding);
            bind(el, binding);
            autoFocus(el, binding);
        }

        el.setAttribute('data-pc-section', 'root');
        el.setAttribute('data-pc-name', 'focustrap');

        BaseDirective.directiveElement = el;
        BaseDirective.handleCSS('focustrap', el, binding);
    },

    updated(el, binding) {
        const { disabled } = binding.value || {};

        disabled && unbind(el);
    },
    unmounted(el) {
        unbind(el);
    }
});

export default FocusTrap;

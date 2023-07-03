import { DomHandler, ObjectUtils } from 'primevue/utils';
import BaseFocusTrap from './BaseFocusTrap';

const FocusTrap = BaseFocusTrap.extend('focustrap', {
    mounted(el, binding) {
        const { disabled } = binding.value || {};

        if (!disabled) {
            this.createHiddenFocusableElements(el, binding);
            this.bind(el, binding);
            this.autoFocus(el, binding);
        }

        DomHandler.setAttributes(el, {
            'p-bind': this.ptm('root')
        });

        this.$el = el;
    },
    updated(el, binding) {
        const { disabled } = binding.value || {};

        disabled && this.unbind(el);
    },
    unmounted(el) {
        this.unbind(el);
    },
    methods: {
        getComputedSelector(selector) {
            return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector}`;
        },
        bind(el, binding) {
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
        },
        unbind(el) {
            el.$_pfocustrap_mutationobserver && el.$_pfocustrap_mutationobserver.disconnect();
            el.$_pfocustrap_focusinlistener && el.removeEventListener('focusin', el.$_pfocustrap_focusinlistener) && (el.$_pfocustrap_focusinlistener = null);
            el.$_pfocustrap_focusoutlistener && el.removeEventListener('focusout', el.$_pfocustrap_focusoutlistener) && (el.$_pfocustrap_focusoutlistener = null);
        },
        autoFocus(el, binding) {
            const { autoFocusSelector = '', firstFocusableSelector = '', autoFocus = false } = binding.value || {};
            let focusableElement = DomHandler.getFirstFocusableElement(el, `[autofocus]${this.getComputedSelector(autoFocusSelector)}`);

            autoFocus && !focusableElement && (focusableElement = DomHandler.getFirstFocusableElement(el, this.getComputedSelector(firstFocusableSelector)));
            DomHandler.focus(focusableElement);
        },
        onFirstHiddenElementFocus(event) {
            const { currentTarget, relatedTarget } = event;
            const focusableElement =
                relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement
                    ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector))
                    : currentTarget.$_pfocustrap_lasthiddenfocusableelement;

            DomHandler.focus(focusableElement);
        },
        onLastHiddenElementFocus(event) {
            const { currentTarget, relatedTarget } = event;
            const focusableElement =
                relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement
                    ? DomHandler.getLastFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector))
                    : currentTarget.$_pfocustrap_firsthiddenfocusableelement;

            DomHandler.focus(focusableElement);
        },
        createHiddenFocusableElements(el, binding) {
            const { tabIndex = 0, firstFocusableSelector = '', lastFocusableSelector = '' } = binding.value || {};

            const createFocusableElement = (onFocus) => {
                return DomHandler.createElement('span', {
                    class: 'p-hidden-accessible p-hidden-focusable',
                    tabIndex,
                    role: 'presentation',
                    'aria-hidden': true,
                    'data-p-hidden-accessible': true,
                    'data-p-hidden-focusable': true,
                    onFocus: onFocus?.bind(this)
                });
            };

            const firstFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
            const lastFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);

            firstFocusableElement.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement;
            firstFocusableElement.$_pfocustrap_focusableselector = firstFocusableSelector;
            firstFocusableElement.setAttribute('data-pc-section', 'firstfocusableelement');

            lastFocusableElement.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement;
            lastFocusableElement.$_pfocustrap_focusableselector = lastFocusableSelector;
            lastFocusableElement.setAttribute('data-pc-section', 'lastfocusableelement');

            el.prepend(firstFocusableElement);
            el.append(lastFocusableElement);
        }
    }
});

export default FocusTrap;

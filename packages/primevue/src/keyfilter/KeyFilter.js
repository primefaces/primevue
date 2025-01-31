import { isAttributeEquals } from '@primeuix/utils/dom';
import BaseKeyFilter from './BaseKeyFilter';

const KeyFilter = BaseKeyFilter.extend('keyfilter', {
    beforeMount(el, options) {
        let target = this.getTarget(el);

        if (!target) return;

        target.$_pkeyfilterModifier = this.getModifiers(options);

        if (options.value !== undefined) {
            target.$_pkeyfilterPattern = options.value?.pattern || options.value;
            target.$_pkeyfilterValidateOnly = options.value?.validateOnly || false;
        }

        this.bindEvents(target);

        target.setAttribute('data-pd-keyfilter', true);
    },
    updated(el, options) {
        let target = this.getTarget(el);

        if (!target) return;

        target.$_pkeyfilterModifier = this.getModifiers(options);
        this.unbindEvents(el, options);

        if (options.value !== undefined) {
            target.$_pkeyfilterPattern = options.value?.pattern || options.value;
            target.$_pkeyfilterValidateOnly = options.value?.validateOnly || false;
        }

        this.bindEvents(target);
    },
    unmounted(el, options) {
        this.unbindEvents(el, options);
    },
    DEFAULT_PATTERNS: {
        pint: /[\d]/,
        int: /[\d-]/,
        pnum: /[\d.]/,
        money: /[\d.\s,]/,
        num: /[\d-.]/,
        hex: /[0-9a-f]/i,
        email: /[a-z0-9_.-@]/i,
        alpha: /[a-z_]/i,
        alphanum: /[a-z0-9_]/
    },
    methods: {
        getTarget(el) {
            return isAttributeEquals(el, 'data-pc-name', 'inputtext') || isAttributeEquals(el, 'data-pc-name', 'textarea') ? el : null;
        },
        getModifiers(options) {
            if (options.modifiers && Object.keys(options.modifiers).length) {
                return Object.keys(options.modifiers)[Object.keys.length - 1];
            }

            return '';
        },
        getRegex(target) {
            return target.$_pkeyfilterPattern ? target.$_pkeyfilterPattern : target.$_pkeyfilterModifier ? this.DEFAULT_PATTERNS[target.$_pkeyfilterModifier] : /./;
        },
        bindEvents(el) {
            el.$_keyfilterKeydownEvent = (event) => this.onKeydown(event, el);
            el.$_keyfilterPasteEvent = (event) => this.onPaste(event, el);

            el.addEventListener('keypress', el.$_keyfilterKeydownEvent);
            el.addEventListener('paste', el.$_keyfilterPasteEvent);
        },
        unbindEvents(el) {
            el.removeEventListener('keypress', el.$_keyfilterKeydownEvent);
            el.removeEventListener('paste', el.$_keyfilterPasteEvent);

            el.$_keyfilterKeydownEvent = null;
            el.$_keyfilterPasteEvent = null;
        },
        onKeydown(event, target) {
            if (event.ctrlKey || event.altKey || event.metaKey || event.key === 'Tab') {
                return;
            }

            let regex = this.getRegex(target);

            if (regex === '') {
                return;
            }

            let testKey = `${event.key}`;

            if (target.$_pkeyfilterValidateOnly) {
                testKey = `${event.target.value}${event.key}`;
            }

            if (!regex.test(testKey)) {
                // runs before @update:modelValue emit
                event.preventDefault();
            }
        },
        onPaste(event, target) {
            let regex = this.getRegex(target);

            if (regex === '') {
                return;
            }

            const clipboard = event.clipboardData.getData('text');
            let testKey = '';

            // loop over each letter pasted and if any fail prevent the paste
            [...clipboard].forEach((c) => {
                if (target.$_pkeyfilterValidateOnly) {
                    testKey += c;
                } else {
                    testKey = c;
                }

                if (!regex.test(testKey)) {
                    event.preventDefault();

                    return false;
                }
            });
        }
    }
});

export default KeyFilter;

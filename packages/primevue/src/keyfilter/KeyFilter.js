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

        target.$_pkeyfilterLastValidValue = target.value || '';
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

        target.$_pkeyfilterLastValidValue = target.value || '';
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
                return Object.keys(options.modifiers)[Object.keys(options.modifiers).length - 1];
            }

            return '';
        },
        getRegex(target) {
            return target.$_pkeyfilterPattern ? target.$_pkeyfilterPattern : target.$_pkeyfilterModifier ? this.DEFAULT_PATTERNS[target.$_pkeyfilterModifier] : /./;
        },
        bindEvents(el) {
            el.$_keyfilterKeydownEvent = (event) => this.onKeydown(event, el);
            el.$_keyfilterBeforeInputEvent = (event) => this.onBeforeInput(event, el);
            el.$_keyfilterPasteEvent = (event) => this.onPaste(event, el);
            // Keep Vue's model in sync by restoring invalid IME text before bubble-phase listeners run.
            el.$_keyfilterInputEvent = () => this.syncValue(el);
            // IME composition can bypass beforeinput cancellation, so validate again when composition finishes.
            el.$_keyfilterCompositionEndEvent = () => this.syncValue(el);

            el.addEventListener('keypress', el.$_keyfilterKeydownEvent);
            el.addEventListener('beforeinput', el.$_keyfilterBeforeInputEvent);
            el.addEventListener('paste', el.$_keyfilterPasteEvent);
            el.addEventListener('input', el.$_keyfilterInputEvent, true);
            el.addEventListener('compositionend', el.$_keyfilterCompositionEndEvent);
        },
        unbindEvents(el) {
            el.removeEventListener('keypress', el.$_keyfilterKeydownEvent);
            el.removeEventListener('beforeinput', el.$_keyfilterBeforeInputEvent);
            el.removeEventListener('paste', el.$_keyfilterPasteEvent);
            el.removeEventListener('input', el.$_keyfilterInputEvent, true);
            el.removeEventListener('compositionend', el.$_keyfilterCompositionEndEvent);

            el.$_keyfilterKeydownEvent = null;
            el.$_keyfilterBeforeInputEvent = null;
            el.$_keyfilterPasteEvent = null;
            el.$_keyfilterInputEvent = null;
            el.$_keyfilterCompositionEndEvent = null;
        },
        syncValue(target) {
            if (this.isInputValueValid(target.value, target)) {
                target.$_pkeyfilterLastValidValue = target.value;
            } else {
                target.value = target.$_pkeyfilterLastValidValue || '';
            }
        },
        onBeforeInput(event, target) {
            if (!this.shouldValidateBeforeInput(event)) {
                return;
            }

            // Block cancelable direct insertions early; non-cancelable IME paths are handled by syncValue.
            const regex = this.getRegex(target);

            if (regex === '') {
                return;
            }

            const nextValue = this.getUpdatedValue(target, event.data || '');

            if (!this.isInputValueValid(nextValue, target)) {
                event.preventDefault();
            }
        },
        shouldValidateBeforeInput(event) {
            const inputType = event.inputType || '';

            return event.cancelable && (inputType === 'insertText' || inputType === 'insertCompositionText' || inputType === 'insertFromComposition');
        },
        getUpdatedValue(target, value) {
            const selectionStart = target.selectionStart ?? target.value.length;
            const selectionEnd = target.selectionEnd ?? selectionStart;

            return `${target.value.substring(0, selectionStart)}${value}${target.value.substring(selectionEnd)}`;
        },
        isInputValueValid(value, target) {
            const regex = this.getRegex(target);

            if (!regex) {
                return true;
            }

            if (target.$_pkeyfilterValidateOnly) {
                return regex.test(value);
            }

            return [...value].every((char) => regex.test(char));
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
                testKey = `${target.value.substring(0, target.selectionStart)}${event.key}${target.value.substring(target.selectionEnd)}`;
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

            if (target.$_pkeyfilterValidateOnly) {
                const newValue = `${target.value.substring(0, target.selectionStart)}${clipboard}${target.value.substring(target.selectionEnd)}`;

                if (!regex.test(newValue)) {
                    event.preventDefault();
                }
            } else {
                for (let i = 0; i < clipboard.length; i++) {
                    if (!regex.test(clipboard[i])) {
                        event.preventDefault();

                        return;
                    }
                }
            }
        }
    }
});

export default KeyFilter;

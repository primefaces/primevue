import { DomHandler } from '@primevue/core/utils';

const CodeHighlight = {
    mounted(el, binding) {
        const modifiers = binding.modifiers;
        const value = binding.value;

        if (modifiers.script || value === 'script') el.className = 'language-javascript';
        else if (modifiers.css || value === 'css') el.className = 'language-css';
        else el.className = 'language-markup';

        if (DomHandler.isClient()) {
            window.Prism.highlightElement(el.children[0]);
            el.children[0].parentElement.setAttribute('tabindex', '-1');
        }
    }
};

export default CodeHighlight;

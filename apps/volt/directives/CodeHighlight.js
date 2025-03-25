import { isClient } from '@primeuix/utils/dom';

const highlightElement = (codeElement) => {
    if (isClient()) {
        window.Prism.highlightElement(codeElement);
        codeElement.parentElement.setAttribute('tabindex', '-1');
    }
};

const CodeHighlight = {
    mounted(el, binding) {
        const modifiers = binding.modifiers;
        const value = binding.value;

        if (modifiers.script || value === 'script') el.className = 'language-javascript';
        else if (modifiers.css || value === 'css') el.className = 'language-css';
        else el.className = 'language-markup';

        highlightElement(el.children[0]);
    },
    updated(el) {
        highlightElement(el.children[0]);
    }
};

export default CodeHighlight;

import Prism from 'prismjs';

const CodeHighlight = {
    beforeMount(el, binding) {
        if (binding.modifiers.script)
            el.className = 'language-javascript';
        else if (binding.modifiers.css)
            el.className = 'language-css';
        else
            el.className = 'language-markup';

        Prism.highlightElement(el.children[0]);
    }
};

export default CodeHighlight;
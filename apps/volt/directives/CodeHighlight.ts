import { isClient } from '@primeuix/utils/dom';

const highlightElement = (codeElement: HTMLElement) => {
    if (isClient()) {
        codeElement.parentElement?.setAttribute('tabindex', '-1');

        /*window.Prism.languages.bash = Prism.languages.extend('bash', {
            command: /\b(npx|volt-vue|add|npm)\b/,
            component: /\b(.*)\b/
        });

        window.Prism.hooks.add('wrap', function (env) {
            if (env.type === 'command') {
                env.attributes['style'] = 'color: red !important; font-weight: bold !important;';
            }
            if (env.type === 'component') {
                env.attributes['style'] = 'color: #bbf7d0;';
            }
        });*/

        (window as any).Prism.highlightElement(codeElement);
    }
};

const CodeHighlight = {
    mounted(el: HTMLElement, binding: { modifiers: Record<string, boolean>; value: string }) {
        const modifiers = binding.modifiers;
        const value = binding.value;

        if (modifiers.script || value === 'script') el.className = 'language-javascript';
        else if (modifiers.css || value === 'css') el.className = 'language-css';
        else if (modifiers.bash || value === 'bash') el.className = 'language-bash';
        else el.className = 'language-markup';

        highlightElement(el.children[0] as HTMLElement);
    },
    updated(el: HTMLElement) {
        highlightElement(el.children[0] as HTMLElement);
    }
};

export default CodeHighlight;

import { useStyle } from 'primevue/usestyle';
import { ObjectUtils } from 'primevue/utils';

const css = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`;

const classes = {};

const inlineStyles = {};

export default {
    name: 'base',
    css,
    classes,
    inlineStyles,
    loadStyle(options = {}) {
        return this.css ? useStyle(ObjectUtils.minifyCSS(this.css), { name: this.name, ...options }) : {};
    },
    loadTheme(theme, options = {}) {
        return theme ? useStyle(ObjectUtils.minifyCSS(theme), { name: `${this.name}-style`, ...options }) : {};
    },
    getStyleSheet(extendedCSS = '', props = {}) {
        if (this.css) {
            const _css = ObjectUtils.minifyCSS(`${this.css}${extendedCSS}`);
            const _props = Object.entries(props)
                .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                .join(' ');

            return `<style type="text/css" data-primevue-style-id="${this.name}" ${_props}>${_css}</style>`;
        }

        return '';
    },
    extend(style) {
        return { ...this, css: undefined, ...style };
    }
};

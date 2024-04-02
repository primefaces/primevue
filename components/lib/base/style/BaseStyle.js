import Theme from 'primevue/themes';
import { useStyle } from 'primevue/usestyle';
import { ObjectUtils } from 'primevue/utils';

/**
 * @todo padding-right: ${$dt('scrollbar.width')};
 */
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
    padding-right: var(--p-scrollbar-width);
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
        return theme ? useStyle(ObjectUtils.minifyCSS(theme), { name: this.name, ...options }) : {};
    },
    getCommonThemeCSS(params) {
        return Theme.getCommonCSS(this.name, params);
    },
    getComponentThemeCSS(params) {
        return Theme.getComponentCSS(this.name, params);
    },
    getDirectiveThemeCSS(params) {
        return Theme.getDirectiveCSS(this.name, params);
    },
    getPresetThemeCSS(preset, selector, params) {
        return Theme.getPresetCSS(this.name, preset, selector, params);
    },
    getLayerOrderThemeCSS() {
        return Theme.getLayerOrderCSS(this.name);
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
    getCommonThemeStyleSheet(params, props = {}) {
        return Theme.getCommonStyleSheet(this.name, params, props);
    },
    getThemeStyleSheet(params, props = {}) {
        return Theme.getStyleSheet(this.name, params, props);
    },
    extend(style) {
        return { ...this, css: undefined, ...style };
    }
};

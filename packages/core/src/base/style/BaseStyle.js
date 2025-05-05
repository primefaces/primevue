import { Theme, dt } from '@primeuix/styled';
import { style } from '@primeuix/styles/base';
import { isNotEmpty, minifyCSS, resolve } from '@primeuix/utils/object';
import { useStyle } from '@primevue/core/usestyle';

const css = ({ dt }) => `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${dt('scrollbar.width')};
}
`;

const classes = {};

const inlineStyles = {};

export default {
    name: 'base',
    css,
    style,
    classes,
    inlineStyles,
    load(style, options = {}, transform = (cs) => cs) {
        const computedStyle = transform(resolve(style, { dt }));

        return isNotEmpty(computedStyle) ? useStyle(minifyCSS(computedStyle), { name: this.name, ...options }) : {};
    },
    loadCSS(options = {}) {
        return this.load(this.css, options);
    },
    loadStyle(options = {}, style = '') {
        return this.load(this.style, options, (computedStyle = '') => Theme.transformCSS(options.name || this.name, `${computedStyle}${style}`));
    },
    getCommonTheme(params) {
        return Theme.getCommon(this.name, params);
    },
    getComponentTheme(params) {
        return Theme.getComponent(this.name, params);
    },
    getDirectiveTheme(params) {
        return Theme.getDirective(this.name, params);
    },
    getPresetTheme(preset, selector, params) {
        return Theme.getCustomPreset(this.name, preset, selector, params);
    },
    getLayerOrderThemeCSS() {
        return Theme.getLayerOrderCSS(this.name);
    },
    getStyleSheet(extendedCSS = '', props = {}) {
        if (this.css) {
            const _css = resolve(this.css, { dt }) || '';
            const _style = minifyCSS(`${_css}${extendedCSS}`);
            const _props = Object.entries(props)
                .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                .join(' ');

            return isNotEmpty(_style) ? `<style type="text/css" data-primevue-style-id="${this.name}" ${_props}>${_style}</style>` : '';
        }

        return '';
    },
    getCommonThemeStyleSheet(params, props = {}) {
        return Theme.getCommonStyleSheet(this.name, params, props);
    },
    getThemeStyleSheet(params, props = {}) {
        let css = [Theme.getStyleSheet(this.name, params, props)];

        if (this.style) {
            const name = this.name === 'base' ? 'global-style' : `${this.name}-style`;
            const _css = resolve(this.style, { dt });
            const _style = minifyCSS(Theme.transformCSS(name, _css));
            const _props = Object.entries(props)
                .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                .join(' ');

            isNotEmpty(_style) && css.push(`<style type="text/css" data-primevue-style-id="${name}" ${_props}>${_style}</style>`);
        }

        return css.join('');
    },
    extend(inStyle) {
        return { ...this, css: undefined, style: undefined, ...inStyle };
    }
};

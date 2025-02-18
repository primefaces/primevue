import { css as Css, Theme, dt } from '@primeuix/styled';
import { style } from '@primeuix/styles/base';
import { isNotEmpty, transformCSS, resolve } from '@primeuix/utils/object';
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

export const getBaseStyleInstance = (Theme, dt, Css) => ({
    name: 'base',
    Theme,
    dt,
    Css,
    css,
    style,
    classes,
    inlineStyles,
    load(style, options = {}, transform = (cs) => cs) {
        const computedStyle = transform(this.Css`${style}`);

        return isNotEmpty(computedStyle) ? useStyle(transformCSS(computedStyle, options), { name: this.name, ...options }) : {};
    },
    loadCSS(options = {}) {
        return this.load(this.css, options);
    },
    loadStyle(options = {}, style = '') {
        return this.load(this.style, options, (computedStyle = '') => this.Theme.transformCSS(options.name || this.name, `${computedStyle}${this.Css`${style}`}`));
    },
    getCommonTheme(params) {
        return this.Theme.getCommon(this.name, params);
    },
    getComponentTheme(params) {
        return this.Theme.getComponent(this.name, params);
    },
    getDirectiveTheme(params) {
        return this.Theme.getDirective(this.name, params);
    },
    getPresetTheme(preset, selector, params) {
        return this.Theme.getCustomPreset(this.name, preset, selector, params);
    },
    getLayerOrderThemeCSS() {
        return this.Theme.getLayerOrderCSS(this.name);
    },
    getStyleSheet(extendedCSS = '', params = {}, props = {}) {
        if (this.css) {
            const _css = resolve(this.css, { dt: this.dt }) || '';
            const _style = transformCSS(this.Css`${_css}${extendedCSS}`, params);
            const _props = Object.entries(props)
                .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                .join(' ');
            let id = this.name;

            if (params?.prefix) {
                id = id ? `${params.prefix}_${id}` : id;
            }

            return isNotEmpty(_style) ? `<style type="text/css" data-primevue-style-id="${id}" ${_props}>${_style}</style>` : '';
        }

        return '';
    },
    getCommonThemeStyleSheet(params, props = {}) {
        return this.Theme.getCommonStyleSheet(this.name, params, props);
    },
    getThemeStyleSheet(params, props = {}) {
        let css = [this.Theme.getStyleSheet(this.name, params, props)];

        if (this.style) {
            const name = this.name === 'base' ? 'global-style' : `${this.name}-style`;
            const _css = this.Css`${resolve(this.style, { dt: this.dt })}`;
            const _style = transformCSS(this.Theme.transformCSS(name, _css), params);
            const _props = Object.entries(props)
                .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                .join(' ');
            let id = name;

            if (params?.prefix) {
                id = id ? `${params.prefix}_${id}` : id;
            }

            isNotEmpty(_style) && css.push(`<style type="text/css" data-primevue-style-id="${id}" ${_props}>${_style}</style>`);
        }

        return css.join('');
    },
    extend(inStyle) {
        return { ...this, css: undefined, style: undefined, ...inStyle };
    },
    bindInstance(BaseStyle) {
        return { ...this, Theme: BaseStyle.Theme, dt: BaseStyle.dt, Css: BaseStyle.Css };
    }
});

export default getBaseStyleInstance(Theme, dt, Css);

import { SharedUtils, dt, toVariables } from 'primevue/themes';
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
    getGlobalThemeCSS(presetTheme, baseTheme, params, globalTheme) {
        return BaseThemeStyle.getGlobalThemeCSS(this.name, presetTheme, baseTheme, params, globalTheme);
    },
    getPresetThemeCSS(presetCTheme, globalTheme) {
        return BaseThemeStyle.getPresetCThemeCSS(this.name, presetCTheme, globalTheme);
    },
    getBaseThemeCSS(baseCTheme, params, globalTheme) {
        return BaseThemeStyle.getBaseCThemeCSS(this.name, baseCTheme, params, globalTheme);
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
    getThemeStyleSheet(globalTheme = {}, params, props = {}) {
        const { preset, base } = globalTheme;
        const presetCTheme = preset?.components?.[this.name];
        const baseCTheme = base?.components?.[this.name];
        const presetCThemeCSS = this.getPresetThemeCSS(presetCTheme, globalTheme);
        const baseCThemeCSS = this.getBaseThemeCSS(baseCTheme, params, globalTheme);
        const _props = Object.entries(props)
            .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        let css = [];

        presetCThemeCSS && css.push(`<style type="text/css" data-primevue-style-id="${this.name}-variables" ${_props}>${ObjectUtils.minifyCSS(presetCThemeCSS)}</style>`);
        baseCThemeCSS && css.push(`<style type="text/css" data-primevue-style-id="${this.name}-style" ${_props}>${ObjectUtils.minifyCSS(baseCThemeCSS)}</style>`);

        return css.join('');
    },
    getGlobalThemeStyleSheet(globalTheme = {}, params, props = {}) {
        const { preset, base } = globalTheme;
        const globalThemeCSS = this.getGlobalThemeCSS(preset, base, params, globalTheme);
        const _props = Object.entries(props)
            .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        return Object.entries(globalThemeCSS || {})
            .reduce((acc, [key, value]) => {
                if (value) {
                    const _css = ObjectUtils.minifyCSS(value);

                    acc.push(`<style type="text/css" data-primevue-style-id="${key}" ${_props}>${_css}</style>`);
                }

                return acc;
            }, [])
            .join('');
    },
    extend(style) {
        return { ...this, css: undefined, ...style };
    }
};

// @todo - Create new file for it.
const BaseThemeStyle = {
    getGlobalThemeCSS(name, presetTheme, baseTheme, params, globalTheme) {
        let primitive_css, semantic_css, global_css;

        if (ObjectUtils.isNotEmpty(presetTheme)) {
            const { options } = globalTheme;
            const { primitive, semantic } = presetTheme;
            const { colorScheme, ...sRest } = semantic || {};
            const { dark, ...csRest } = colorScheme || {};
            const prim_css = ObjectUtils.isNotEmpty(primitive) ? this._toVariables({ primitive }, options).declarations : '';
            const sRest_css = ObjectUtils.isNotEmpty(sRest) ? this._toVariables({ semantic: sRest }, options).declarations : '';
            const csRest_css = ObjectUtils.isNotEmpty(csRest) ? this._toVariables({ light: csRest }, options).declarations : '';
            const dark_css = ObjectUtils.isNotEmpty(dark) ? this._toVariables({ dark }, options).declarations : '';

            primitive_css = this._transformCSS(name, prim_css, 'light', 'variable', options);
            semantic_css = `${this._transformCSS(name, `${sRest_css}${csRest_css}color-scheme:light`, 'light', 'variable', options)}${this._transformCSS(name, `${dark_css}color-scheme:dark`, 'dark', 'variable', options)}`;
        }

        global_css = ObjectUtils.getItemValue(baseTheme?.components?.global?.css, { ...params, dt: (tokenPath) => dt(globalTheme, tokenPath) });

        return {
            primitive: primitive_css,
            semantic: semantic_css,
            global: global_css
        };
    },
    getPresetCThemeCSS(name, presetCTheme = {}, globalTheme) {
        const { options } = globalTheme;
        const { colorScheme, ...vRest } = presetCTheme;
        const { dark, ...csRest } = colorScheme || {};
        const vRest_css = ObjectUtils.isNotEmpty(vRest) ? this._toVariables({ [name]: vRest }, options).declarations : '';
        const csRest_css = ObjectUtils.isNotEmpty(csRest) ? this._toVariables({ [name]: csRest }, options).declarations : '';
        const dark_css = ObjectUtils.isNotEmpty(dark) ? this._toVariables({ [name]: dark }, options).declarations : '';

        return `${this._transformCSS(name, `${vRest_css}${csRest_css}`, 'light', 'variable', options)}${this._transformCSS(name, dark_css, 'dark', 'variable', options)}`;
    },
    getBaseCThemeCSS(name, baseCTheme = {}, params, globalTheme) {
        const { options } = globalTheme;
        const { css } = baseCTheme;
        const computed_css = ObjectUtils.getItemValue(css, { ...params, dt: (tokenPath) => dt(globalTheme, tokenPath) });

        return this._transformCSS(name, computed_css, undefined, 'style', options);
    },
    _toVariables(theme, options) {
        return toVariables(theme, { prefix: options?.prefix });
    },
    _transformCSS(name, css, mode, type, options = {}) {
        const { layer, colorScheme } = options;

        if (type !== 'style') {
            let colorSchemeOption = {
                light: {
                    class: '',
                    rule: `:root{[CSS]}`,
                    default: false
                },
                dark: {
                    class: 'p-dark',
                    rule: `.p-dark{[CSS]}`,
                    default: false
                }
            };

            if (colorScheme) {
                if (ObjectUtils.isObject(colorScheme)) {
                    colorSchemeOption.light = { ...colorSchemeOption.light, ...colorScheme.light };
                    colorSchemeOption.dark = { ...colorSchemeOption.dark, ...colorScheme.dark };
                } else {
                    colorSchemeOption.light = { ...colorSchemeOption.light, default: colorScheme !== 'auto' && colorScheme !== 'dark' };
                    colorSchemeOption.dark = { ...colorSchemeOption.dark, default: colorScheme === 'dark' };
                }
            }

            mode = mode === 'dark' ? 'dark' : 'light';
            css = colorSchemeOption[mode]?.rule?.replace('[CSS]', css);
        }

        if (layer) {
            let layerOptions = {
                name: 'primevue'
                //order: '@layer'
            };

            const _layer = ObjectUtils.isObject(layer) ? layer.name : layer;

            layerOptions.name = ObjectUtils.getItemValue(_layer, { name, type });
            css = ObjectUtils.isNotEmpty(layerOptions.name) ? SharedUtils.object.getRule(`@layer ${layerOptions.name}`, css) : css;
        }

        return css;
    }
};

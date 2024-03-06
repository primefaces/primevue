import { SharedUtils, dt, toVariables } from 'primevue/themes';
import { ObjectUtils } from 'primevue/utils';

export default {
    getCommon(name, preset, base, params, theme) {
        let primitive_css, semantic_css, global_css;

        if (ObjectUtils.isNotEmpty(preset)) {
            const { options, extend } = theme;
            const { primitive, semantic } = preset;
            const { colorScheme, ...sRest } = semantic || {};
            const { dark, ...csRest } = colorScheme || {};
            const { primitive: primitiveExt, semantic: semanticExt } = extend || {};
            const { colorScheme: colorSchemeExt, ...sRestExt } = semanticExt || {};
            const { dark: darkExt, ...csRestExt } = colorSchemeExt || {};
            const prim_css = ObjectUtils.isNotEmpty(primitive) ? this._toVariables({ primitive: { ...primitive, ...primitiveExt } }, options).declarations : '';
            const sRest_css = ObjectUtils.isNotEmpty(sRest) ? this._toVariables({ semantic: { ...sRest, ...sRestExt } }, options).declarations : '';
            const csRest_css = ObjectUtils.isNotEmpty(csRest) ? this._toVariables({ light: { ...csRest, ...csRestExt } }, options).declarations : '';
            const dark_css = ObjectUtils.isNotEmpty(dark) ? this._toVariables({ dark: { ...dark, ...darkExt } }, options).declarations : '';

            primitive_css = this._transformCSS(name, prim_css, 'light', 'variable', options);
            semantic_css = `${this._transformCSS(name, `${sRest_css}${csRest_css}color-scheme:light`, 'light', 'variable', options)}${this._transformCSS(name, `${dark_css}color-scheme:dark`, 'dark', 'variable', options)}`;
        }

        global_css = ObjectUtils.getItemValue(base?.components?.global?.css, { ...params, dt: (tokenPath) => dt(theme, tokenPath) });

        return {
            primitive: primitive_css,
            semantic: semantic_css,
            global: global_css
        };
    },
    getPresetC(name, presetCTheme = {}, theme) {
        const { options, extend } = theme;
        const { colorScheme, ...vRest } = presetCTheme;
        const { dark, ...csRest } = colorScheme || {};
        const { colorScheme: colorSchemeExt, ...vRestExt } = extend?.components?.[name] || {};
        const { dark: darkExt, ...csRestExt } = colorSchemeExt || {};
        const vRest_css = ObjectUtils.isNotEmpty(vRest) ? this._toVariables({ [name]: { ...vRest, ...vRestExt } }, options).declarations : '';
        const csRest_css = ObjectUtils.isNotEmpty(csRest) ? this._toVariables({ [name]: { ...csRest, ...csRestExt } }, options).declarations : '';
        const dark_css = ObjectUtils.isNotEmpty(dark) ? this._toVariables({ [name]: { ...dark, ...darkExt } }, options).declarations : '';

        return `${this._transformCSS(name, `${vRest_css}${csRest_css}`, 'light', 'variable', options)}${this._transformCSS(name, dark_css, 'dark', 'variable', options)}`;
    },
    getBaseC(name, baseCTheme = {}, params, theme) {
        const { options } = theme;
        const { css } = baseCTheme;
        const computed_css = ObjectUtils.getItemValue(css, { ...params, dt: (tokenPath) => dt(theme, tokenPath) });

        return this._transformCSS(name, computed_css, undefined, 'style', options);
    },
    getCommonStyleSheet(name, theme = {}, params, props = {}) {
        const { preset, base } = theme;
        const common_css = this.getCommon(preset, base, params, theme);
        const _props = Object.entries(props)
            .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        return Object.entries(common_css || {})
            .reduce((acc, [key, value]) => {
                if (value) {
                    const _css = ObjectUtils.minifyCSS(value);

                    acc.push(`<style type="text/css" data-primevue-style-id="${key}" ${_props}>${_css}</style>`);
                }

                return acc;
            }, [])
            .join('');
    },
    getStyleSheet(name, theme = {}, params, props = {}) {
        const { preset, base } = theme;
        const presetCTheme = preset?.components?.[name];
        const baseCTheme = base?.components?.[name];
        const presetC_css = this.getPresetC(name, presetCTheme, theme);
        const baseC_css = this.getBaseC(name, baseCTheme, params, theme);
        const _props = Object.entries(props)
            .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        let css = [];

        presetC_css && css.push(`<style type="text/css" data-primevue-style-id="${name}-variables" ${_props}>${ObjectUtils.minifyCSS(presetC_css)}</style>`);
        baseC_css && css.push(`<style type="text/css" data-primevue-style-id="${name}-style" ${_props}>${ObjectUtils.minifyCSS(baseC_css)}</style>`);

        return css.join('');
    },
    getColorSchemeOption(colorScheme) {
        let options = {
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
                options.light = { ...options.light, ...colorScheme.light };
                options.dark = { ...options.dark, ...colorScheme.dark };
            } else {
                options.light = { ...options.light, default: colorScheme !== 'auto' && colorScheme !== 'dark' };
                options.dark = { ...options.dark, default: colorScheme === 'dark' };
            }
        }

        return options;
    },
    _toVariables(theme, options) {
        return toVariables(theme, { prefix: options?.prefix });
    },
    _transformCSS(name, css, mode, type, options = {}) {
        const { layer, colorScheme } = options;

        if (type !== 'style') {
            const colorSchemeOption = this.getColorSchemeOption(colorScheme);

            mode = mode === 'dark' ? 'dark' : 'light';
            css = colorSchemeOption[mode]?.rule?.replace('[CSS]', css);
        }

        if (layer) {
            let layerOptions = {
                name: 'primevue'
                //order: 'primevue' // @todo
            };

            ObjectUtils.isObject(layer) && (layerOptions.name = ObjectUtils.getItemValue(layer.name, { name, type }));
            css = ObjectUtils.isNotEmpty(layerOptions.name) ? SharedUtils.object.getRule(`@layer ${layerOptions.name}`, css) : css;
        }

        return css;
    }
};

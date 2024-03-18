import { SharedUtils, dt, toVariables } from 'primevue/themes';

export default {
    getCommon({ name = '', theme = {}, params, set, defaults }) {
        const { base, preset } = theme;
        let primitive_css, semantic_css, global_css;

        if (SharedUtils.object.isNotEmpty(preset)) {
            const { options, extend } = theme;
            const { primitive, semantic } = preset;
            const { colorScheme, ...sRest } = semantic || {};
            const { dark, ...csRest } = colorScheme || {};
            const { primitive: primitiveExt, semantic: semanticExt } = extend || {};
            const { colorScheme: colorSchemeExt, ...sRestExt } = semanticExt || {};
            const { dark: darkExt, ...csRestExt } = colorSchemeExt || {};
            const prim_css = SharedUtils.object.isNotEmpty(primitive) ? this._toVariables({ primitive: { ...primitive, ...primitiveExt } }, options).declarations : '';
            const sRest_css = SharedUtils.object.isNotEmpty(sRest) ? this._toVariables({ semantic: { ...sRest, ...sRestExt } }, options).declarations : '';
            const csRest_css = SharedUtils.object.isNotEmpty(csRest) ? this._toVariables({ light: { ...csRest, ...csRestExt } }, options).declarations : '';
            const dark_css = SharedUtils.object.isNotEmpty(dark) ? this._toVariables({ dark: { ...dark, ...darkExt } }, options).declarations : '';

            primitive_css = this._transformCSS(name, prim_css, 'light', 'variable', options, set, defaults);
            semantic_css = `${this._transformCSS(name, `${sRest_css}${csRest_css}color-scheme:light`, 'light', 'variable', options, set, defaults)}${this._transformCSS(
                name,
                `${dark_css}color-scheme:dark`,
                'dark',
                'variable',
                options,
                set,
                defaults
            )}`;
        }

        global_css = SharedUtils.object.getItemValue(base?.components?.global?.css, { ...params, dt: (tokenPath) => dt(theme, tokenPath) });

        return {
            primitive: primitive_css,
            semantic: semantic_css,
            global: global_css
        };
    },
    getPresetC({ name = '', theme = {}, params, set, defaults }) {
        const { preset, options, extend } = theme;
        const { colorScheme, ...vRest } = preset?.components?.[name] || {};
        const { dark, ...csRest } = colorScheme || {};
        const { colorScheme: colorSchemeExt, ...vRestExt } = extend?.components?.[name] || {};
        const { dark: darkExt, ...csRestExt } = colorSchemeExt || {};
        const vRest_css = SharedUtils.object.isNotEmpty(vRest) ? this._toVariables({ [name]: { ...vRest, ...vRestExt } }, options).declarations : '';
        const csRest_css = SharedUtils.object.isNotEmpty(csRest) ? this._toVariables({ [name]: { ...csRest, ...csRestExt } }, options).declarations : '';
        const dark_css = SharedUtils.object.isNotEmpty(dark) ? this._toVariables({ [name]: { ...dark, ...darkExt } }, options).declarations : '';

        return `${this._transformCSS(name, `${vRest_css}${csRest_css}`, 'light', 'variable', options, set, defaults)}${this._transformCSS(name, dark_css, 'dark', 'variable', options, set, defaults)}`;
    },
    getBaseC({ name = '', theme = {}, params, set, defaults }) {
        const { base, options } = theme;
        const { css } = base?.components?.[name] || {};
        const computed_css = SharedUtils.object.getItemValue(css, { ...params, dt: (tokenPath) => dt(theme, tokenPath) });

        return this._transformCSS(name, computed_css, undefined, 'style', options, set, defaults);
    },
    getPresetD({ name = '', theme = {}, params, set, defaults }) {
        const { preset, options, extend } = theme;
        const { colorScheme, ...vRest } = preset?.directives?.[name] || {};
        const { dark, ...csRest } = colorScheme || {};
        const { colorScheme: colorSchemeExt, ...vRestExt } = extend?.directives?.[name] || {};
        const { dark: darkExt, ...csRestExt } = colorSchemeExt || {};
        const vRest_css = SharedUtils.object.isNotEmpty(vRest) ? this._toVariables({ [name]: { ...vRest, ...vRestExt } }, options).declarations : '';
        const csRest_css = SharedUtils.object.isNotEmpty(csRest) ? this._toVariables({ [name]: { ...csRest, ...csRestExt } }, options).declarations : '';
        const dark_css = SharedUtils.object.isNotEmpty(dark) ? this._toVariables({ [name]: { ...dark, ...darkExt } }, options).declarations : '';

        return `${this._transformCSS(name, `${vRest_css}${csRest_css}`, 'light', 'variable', options, set, defaults)}${this._transformCSS(name, dark_css, 'dark', 'variable', options, set, defaults)}`;
    },
    getBaseD({ name = '', theme = {}, params, set, defaults }) {
        const { base, options } = theme;
        const { css } = base?.directives?.[name] || {};
        const computed_css = SharedUtils.object.getItemValue(css, { ...params, dt: (tokenPath) => dt(theme, tokenPath) });

        return this._transformCSS(name, computed_css, undefined, 'style', options, set, defaults);
    },
    getColorSchemeOption(colorScheme, defaults) {
        let options = { ...defaults.colorScheme };

        if (colorScheme) {
            if (SharedUtils.object.isObject(colorScheme)) {
                options.light = { ...options.light, ...colorScheme.light };
                options.dark = { ...options.dark, ...colorScheme.dark };
            } else {
                options.light = { ...options.light, default: colorScheme !== 'auto' && colorScheme !== 'dark' };
                options.dark = { ...options.dark, default: colorScheme === 'dark' };
            }
        }

        return options;
    },
    applyColorScheme(options = {}, currentColorScheme, defaults) {
        const colorSchemeOption = this.getColorSchemeOption(options.colorScheme, defaults);
        const isClient = SharedUtils.dom.isClient();
        const isAuto = !colorSchemeOption.light?.default && !colorSchemeOption.dark?.default;
        const isDark = isAuto && isClient ? window.matchMedia('(prefers-color-scheme: dark)').matches : colorSchemeOption.dark?.default;
        const defaultDocument = isClient ? window.document : undefined;

        if (isDark && defaultDocument) {
            SharedUtils.dom.addClass(defaultDocument.documentElement, colorSchemeOption.dark?.class);
        }

        return isDark ? 'dark' : 'light';
    },
    toggleColorScheme(options = {}, currentColorScheme, defaults) {
        const newColorScheme = currentColorScheme === 'dark' ? 'light' : 'dark';
        const defaultDocument = SharedUtils.dom.isClient() ? window.document : undefined;

        if (defaultDocument) {
            const colorSchemeOption = this.getColorSchemeOption(options.colorScheme, defaults);
            const [lightClass, darkClass] = [colorSchemeOption.light.class, colorSchemeOption.dark.class];

            SharedUtils.dom.removeMultipleClasses(defaultDocument.documentElement, [lightClass, darkClass]);
            SharedUtils.dom.addClass(defaultDocument.documentElement, newColorScheme === 'dark' ? darkClass : lightClass);
        }

        return newColorScheme;
    },
    getLayerOrder(name, options = {}, params, defaults) {
        const { layer } = options;

        if (layer) {
            const order = SharedUtils.object.getItemValue(layer.order || defaults.layer.order, params);

            return `@layer ${order}`;
        }

        return '';
    },
    getCommonStyleSheet({ name = '', theme = {}, params, props = {}, set, defaults }) {
        const common_css = this.getCommon({ name, theme, params, set, defaults });
        const _props = Object.entries(props)
            .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        return Object.entries(common_css || {})
            .reduce((acc, [key, value]) => {
                if (value) {
                    const _css = SharedUtils.object.minifyCSS(value);

                    acc.push(`<style type="text/css" data-primevue-style-id="${key}" ${_props}>${_css}</style>`);
                }

                return acc;
            }, [])
            .join('');
    },
    getStyleSheet({ name = '', theme = {}, params, props = {}, set, defaults }) {
        const presetC_css = this.getPresetC({ name, theme, params, set, defaults });
        const baseC_css = this.getBaseC({ name, theme, params, set, defaults });
        const _props = Object.entries(props)
            .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        let css = [];

        presetC_css && css.push(`<style type="text/css" data-primevue-style-id="${name}-variables" ${_props}>${SharedUtils.object.minifyCSS(presetC_css)}</style>`);
        baseC_css && css.push(`<style type="text/css" data-primevue-style-id="${name}-style" ${_props}>${SharedUtils.object.minifyCSS(baseC_css)}</style>`);

        return css.join('');
    },
    _toVariables(theme, options) {
        return toVariables(theme, { prefix: options?.prefix });
    },
    _transformCSS(name, css, mode, type, options = {}, set, defaults) {
        if (SharedUtils.object.isNotEmpty(css)) {
            const { layer, colorScheme } = options;

            if (type !== 'style') {
                const colorSchemeOption = this.getColorSchemeOption(colorScheme, defaults);

                mode = mode === 'dark' ? 'dark' : 'light';
                css = colorSchemeOption[mode]?.rule?.replace('[CSS]', css);
            }

            if (layer) {
                let layerOptions = { ...defaults.layer };

                SharedUtils.object.isObject(layer) && (layerOptions.name = SharedUtils.object.getItemValue(layer.name, { name, type }));

                if (SharedUtils.object.isNotEmpty(layerOptions.name)) {
                    css = SharedUtils.object.getRule(`@layer ${layerOptions.name}`, css);
                    set?.layerNames(layerOptions.name);
                }
            }

            return css;
        }

        return '';
    }
};

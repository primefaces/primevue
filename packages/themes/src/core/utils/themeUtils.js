import { toVariables } from '../helpers/index.js';
import SharedUtils from './sharedUtils';

export default {
    regex: {
        rules: {
            class: {
                pattern: /^\.([a-zA-Z][\w-]*)$/,
                resolve(value) {
                    return { type: 'class', selector: value, matched: this.pattern.test(value.trim()) };
                }
            },
            attr: {
                pattern: /^\[(.*)\]$/,
                resolve(value) {
                    return { type: 'attr', selector: `:root${value}`, matched: this.pattern.test(value.trim()) };
                }
            },
            media: {
                pattern: /^@media (.*)$/,
                resolve(value) {
                    return { type: 'media', selector: `${value}{:root{[CSS]}}`, matched: this.pattern.test(value.trim()) };
                }
            },
            system: {
                pattern: /^system$/,
                resolve(value) {
                    return { type: 'system', selector: '@media (prefers-color-scheme: dark){:root{[CSS]}}', matched: this.pattern.test(value.trim()) };
                }
            },
            custom: {
                resolve(value) {
                    return { type: 'custom', selector: value, matched: true };
                }
            }
        },
        resolve(value) {
            const rules = Object.keys(this.rules)
                .filter((k) => k !== 'custom')
                .map((r) => this.rules[r]);

            return [value].flat().map((v) => rules.map((r) => r.resolve(v)).find((rr) => rr.matched) ?? this.rules.custom.resolve(v));
        }
    },
    _toVariables(theme, options) {
        return toVariables(theme, { prefix: options?.prefix });
    },
    getCommon({ name = '', theme = {}, params, set, defaults }) {
        const { preset, options } = theme;
        let primitive_css, primitive_tokens, semantic_css, semantic_tokens;

        if (SharedUtils.object.isNotEmpty(preset)) {
            const { primitive, semantic } = preset;
            const { colorScheme, ...sRest } = semantic || {};
            const { dark, ...csRest } = colorScheme || {};
            const prim_var = SharedUtils.object.isNotEmpty(primitive) ? this._toVariables({ primitive }, options) : {};
            const sRest_var = SharedUtils.object.isNotEmpty(sRest) ? this._toVariables({ semantic: sRest }, options) : {};
            const csRest_var = SharedUtils.object.isNotEmpty(csRest) ? this._toVariables({ light: csRest }, options) : {};
            const dark_var = SharedUtils.object.isNotEmpty(dark) ? this._toVariables({ dark }, options) : {};

            const [prim_css, prim_tokens] = [prim_var.declarations ?? '', prim_var.tokens];
            const [sRest_css, sRest_tokens] = [sRest_var.declarations ?? '', sRest_var.tokens || []];
            const [csRest_css, csRest_tokens] = [csRest_var.declarations ?? '', csRest_var.tokens || []];
            const [dark_css, dark_tokens] = [dark_var.declarations ?? '', dark_var.tokens || []];

            primitive_css = this.transformCSS(name, prim_css, 'light', 'variable', options, set, defaults);
            primitive_tokens = prim_tokens;

            const semantic_light_css = this.transformCSS(name, `${sRest_css}${csRest_css}color-scheme:light`, 'light', 'variable', options, set, defaults);
            const semantic_dark_css = this.transformCSS(name, `${dark_css}color-scheme:dark`, 'dark', 'variable', options, set, defaults);

            semantic_css = `${semantic_light_css}${semantic_dark_css}`;
            semantic_tokens = [...new Set([...sRest_tokens, ...csRest_tokens, ...dark_tokens])];
        }

        return {
            primitive: {
                css: primitive_css,
                tokens: primitive_tokens
            },
            semantic: {
                css: semantic_css,
                tokens: semantic_tokens
            }
        };
    },
    getPreset({ name = '', preset = {}, options, params, set, defaults, selector }) {
        const _name = name.replace('-directive', '');
        const { colorScheme, ...vRest } = preset;
        const { dark, ...csRest } = colorScheme || {};
        const vRest_var = SharedUtils.object.isNotEmpty(vRest) ? this._toVariables({ [_name]: vRest }, options) : {};
        const csRest_var = SharedUtils.object.isNotEmpty(csRest) ? this._toVariables({ [_name]: csRest }, options) : {};
        const dark_var = SharedUtils.object.isNotEmpty(dark) ? this._toVariables({ [_name]: dark }, options) : {};

        const [vRest_css, vRest_tokens] = [vRest_var.declarations ?? '', vRest_var.tokens || []];
        const [csRest_css, csRest_tokens] = [csRest_var.declarations ?? '', csRest_var.tokens || []];
        const [dark_css, dark_tokens] = [dark_var.declarations ?? '', dark_var.tokens || []];
        const tokens = [...new Set([...vRest_tokens, ...csRest_tokens, ...dark_tokens])];

        const light_variable_css = this.transformCSS(_name, `${vRest_css}${csRest_css}`, 'light', 'variable', options, set, defaults, selector);
        const dark_variable_css = this.transformCSS(_name, dark_css, 'dark', 'variable', options, set, defaults, selector);

        return {
            css: `${light_variable_css}${dark_variable_css}`,
            tokens
        };
    },
    getPresetC({ name = '', theme = {}, params, set, defaults }) {
        const { preset, options } = theme;
        const cPreset = preset?.components?.[name];

        return this.getPreset({ name, preset: cPreset, options, params, set, defaults });
    },
    getPresetD({ name = '', theme = {}, params, set, defaults }) {
        const dName = name.replace('-directive', '');
        const { preset, options } = theme;
        const dPreset = preset?.directives?.[dName];

        return this.getPreset({ name: dName, preset: dPreset, options, params, set, defaults });
    },
    getColorSchemeOption(options, defaults) {
        return this.regex.resolve(options.darkModeSelector ?? defaults.options.darkModeSelector);
    },
    getLayerOrder(name, options = {}, params, defaults) {
        const { cssLayer } = options;

        if (cssLayer) {
            const order = SharedUtils.object.getItemValue(cssLayer.order || 'primeui', params);

            return `@layer ${order}`;
        }

        return '';
    },
    getCommonStyleSheet({ name = '', theme = {}, params, props = {}, set, defaults }) {
        const common = this.getCommon({ name, theme, params, set, defaults });
        const _props = Object.entries(props)
            .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        return Object.entries(common || {})
            .reduce((acc, [key, value]) => {
                if (value?.css) {
                    const _css = SharedUtils.object.minifyCSS(value?.css);
                    const id = `${key}-variables`;

                    acc.push(`<style type="text/css" data-primevue-style-id="${id}" ${_props}>${_css}</style>`);
                }

                return acc;
            }, [])
            .join('');
    },
    getStyleSheet({ name = '', theme = {}, params, props = {}, set, defaults }) {
        const options = { name, theme, params, set, defaults };
        const preset_css = (name.includes('-directive') ? this.getPresetD(options) : this.getPresetC(options))?.css;
        const _props = Object.entries(props)
            .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        return preset_css ? `<style type="text/css" data-primevue-style-id="${name}-variables" ${_props}>${SharedUtils.object.minifyCSS(preset_css)}</style>` : '';
    },
    createTokens(obj = {}, defaults, parentKey = '', parentPath = '', tokens = {}) {
        Object.entries(obj).forEach(([key, value]) => {
            const currentKey = SharedUtils.object.test(defaults.variable.excludedKeyRegex, key) ? parentKey : parentKey ? `${parentKey}.${SharedUtils.object.toTokenKey(key)}` : SharedUtils.object.toTokenKey(key);
            const currentPath = parentPath ? `${parentPath}.${key}` : key;

            if (SharedUtils.object.isObject(value)) {
                this.createTokens(value, defaults, currentKey, currentPath, tokens);
            } else {
                tokens[currentKey] ||= {
                    paths: [],
                    computed(colorScheme, tokenPathMap = {}) {
                        if (colorScheme) {
                            const path = this.paths.find((p) => p.scheme === colorScheme) || this.paths.find((p) => p.scheme === 'none');

                            return path?.computed(colorScheme, tokenPathMap['binding']);
                        }

                        return this.paths.map((p) => p.computed(p.scheme, tokenPathMap[p.scheme]));
                    }
                };
                tokens[currentKey].paths.push({
                    path: currentPath,
                    value,
                    scheme: currentPath.includes('colorScheme.light') ? 'light' : currentPath.includes('colorScheme.dark') ? 'dark' : 'none',
                    computed(colorScheme, tokenPathMap = {}) {
                        const regex = /{([^}]*)}/g;
                        let computedValue = value;

                        tokenPathMap['name'] = this.path;
                        tokenPathMap['binding'] ||= {};

                        if (SharedUtils.object.test(regex, value)) {
                            const val = value.trim();
                            const _val = val.replaceAll(regex, (v) => {
                                const path = v.replace(/{|}/g, '');

                                return tokens[path]?.computed(colorScheme, tokenPathMap)?.value;
                            });

                            const calculationRegex = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g;
                            const cleanedVarRegex = /var\([^)]+\)/g;

                            computedValue = SharedUtils.object.test(calculationRegex, _val.replace(cleanedVarRegex, '0')) ? `calc(${_val})` : _val;
                        }

                        SharedUtils.object.isEmpty(tokenPathMap['binding']) && delete tokenPathMap['binding'];

                        return {
                            colorScheme,
                            path: this.path,
                            paths: tokenPathMap,
                            value: computedValue.includes('undefined') ? undefined : computedValue
                        };
                    }
                });
            }
        });

        return tokens;
    },
    getTokenValue(tokens, path, defaults) {
        const normalizePath = (str) => {
            const strArr = str.split('.');

            return strArr.filter((s) => !SharedUtils.object.test(defaults.variable.excludedKeyRegex, s.toLowerCase())).join('.');
        };

        const token = normalizePath(path);
        const colorScheme = path.includes('colorScheme.light') ? 'light' : path.includes('colorScheme.dark') ? 'dark' : undefined;
        const computedValues = [tokens[token]?.computed(colorScheme)].flat().filter((computed) => computed);

        return computedValues.length === 1
            ? computedValues[0].value
            : computedValues.reduce((acc = {}, computed) => {
                  const { colorScheme: cs, ...rest } = computed;

                  acc[cs] = rest;

                  return acc;
              }, undefined);
    },
    transformCSS(name, css, mode, type, options = {}, set, defaults, selector) {
        if (SharedUtils.object.isNotEmpty(css)) {
            const { cssLayer } = options;

            if (type !== 'style') {
                const colorSchemeOption = this.getColorSchemeOption(options, defaults);
                const _css = selector ? SharedUtils.object.getRule(selector, css) : css;

                css =
                    mode === 'dark'
                        ? colorSchemeOption.reduce((acc, { selector: _selector }) => {
                              if (SharedUtils.object.isNotEmpty(_selector)) {
                                  acc += _selector.includes('[CSS]') ? _selector.replace('[CSS]', _css) : SharedUtils.object.getRule(_selector, _css);
                              }

                              return acc;
                          }, '')
                        : SharedUtils.object.getRule(selector ?? ':root', css);
            }

            if (cssLayer) {
                const layerOptions = {
                    name: 'primeui',
                    order: 'primeui'
                };

                SharedUtils.object.isObject(cssLayer) && (layerOptions.name = SharedUtils.object.getItemValue(cssLayer.name, { name, type }));

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

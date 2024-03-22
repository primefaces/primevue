import { ThemeService, ThemeUtils } from 'primevue/themes';

export default {
    defaults: {
        variable: {
            prefix: 'p',
            selector: ':root',
            excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi
        },
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: {
                name: 'primevue',
                order: 'primevue'
            }
        }
    },
    _pConfig: undefined,
    _theme: undefined,
    _initialized: false,
    _layerNames: new Set(),
    _tokens: {},
    init() {
        if (!this._initialized) {
            this._tokens = ThemeUtils.createTokens(this.preset, this.defaults);
            ThemeService.emit('theme:init', this.theme);
        }

        this._initialized = true;
    },
    get theme() {
        return this._theme || this._pConfig?.theme;
    },
    get base() {
        return this.theme?.base || {};
    },
    get preset() {
        return this.theme?.preset || {};
    },
    get options() {
        return this.theme?.options || {};
    },
    get tokens() {
        return this._tokens;
    },
    getPConfig() {
        return this._pConfig;
    },
    setPConfig(newValue) {
        this._pConfig = newValue;
    },
    getTokenValue(tokenPath) {
        return ThemeUtils.getTokenValue(this.tokens, tokenPath, this.defaults);
    },
    getTheme() {
        return this.theme;
    },
    setTheme(newValue) {
        this._theme = {
            ...newValue,
            options: {
                ...this.defaults.options,
                ...newValue.options
            }
        };
        this._tokens = ThemeUtils.createTokens(newValue?.preset, this.defaults);

        ThemeService.emit('theme:change', newValue);
    },
    getPreset() {
        return this.preset;
    },
    setPreset(newValue) {
        this._theme = { ...this.theme, preset: newValue };
        this._tokens = ThemeUtils.createTokens(newValue, this.defaults);

        ThemeService.emit('preset:change', newValue);
    },
    getLayerNames() {
        return [...this._layerNames];
    },
    setLayerNames(layerName) {
        this._layerNames?.add(layerName);
    },
    getCommonCSS(name = '', theme, params) {
        return ThemeUtils.getCommon({ name, theme: theme || this.theme, params, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    },
    getComponentCSS(name = '', theme, params) {
        const options = { name, theme: theme || this.theme, params, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };

        return {
            style: ThemeUtils.getBaseC(options),
            variables: ThemeUtils.getPresetC(options)
        };
    },
    getDirectiveCSS(name = '', theme, params) {
        const options = { name, theme: theme || this.theme, params, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };

        return {
            style: ThemeUtils.getBaseD(options),
            variables: ThemeUtils.getPresetD(options)
        };
    },
    getLayerOrderCSS(name = '') {
        return ThemeUtils.getLayerOrder(name, this.options, { names: this.getLayerNames() }, this.defaults);
    },
    getCommonStyleSheet(name = '', theme, params, props = {}) {
        return ThemeUtils.getCommonStyleSheet({ name, theme, params, props, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    },
    getStyleSheet(name, theme = {}, params, props = {}) {
        return ThemeUtils.getStyleSheet({ name, theme, params, props, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    }
};

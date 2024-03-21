import { ThemeUtils } from 'primevue/themes';

export default {
    defaults: {
        variable: {
            prefix: '',
            selector: ':root',
            excludedKeyRegex: /^(primitive|semantic|variables|colorscheme|light|dark|common|colors|root|states|components|directives)$/gi
        },
        darkModeSelector: '.p-dark',
        cssLayer: {
            name: 'primevue',
            order: 'primevue'
        }
    },
    _pConfig: undefined,
    _theme: undefined,
    _initialized: false,
    _currentColorScheme: 'light',
    _layerNames: new Set(),
    _tokens: {},
    init() {
        if (!this._initialized) {
            this._tokens = ThemeUtils.createTokens(this.preset, this.getCurrentColorScheme(), this.defaults);
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
    setTheme(newValue) {
        this._theme = newValue;
        this._tokens = ThemeUtils.createTokens(newValue, this.defaults);
    },
    getCurrentColorScheme() {
        return this._currentColorScheme;
    },
    setCurrentColorScheme(newValue) {
        this._currentColorScheme = newValue;
    },
    getLayerNames() {
        return [...this._layerNames];
    },
    setLayerNames(layerName) {
        this._layerNames?.add(layerName);
    },
    toggleColorScheme() {
        const newColorScheme = ThemeUtils.toggleColorScheme(this.options, this.getCurrentColorScheme(), this.defaults);

        this.setCurrentColorScheme(newColorScheme);

        return newColorScheme;
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

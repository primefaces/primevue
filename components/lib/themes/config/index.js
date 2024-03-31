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
            cssLayer: false
        }
    },
    _theme: undefined,
    _layerNames: new Set(),
    _loadedStyleNames: new Set(),
    _tokens: {},
    update(newValues = {}) {
        const { theme } = newValues;

        if (theme) {
            this._theme = {
                ...theme,
                options: {
                    ...this.defaults.options,
                    ...theme.options
                }
            };
            this._tokens = ThemeUtils.createTokens(theme?.preset, this.defaults);
            this.clearLoadedStyleNames();
        }
    },
    get theme() {
        return this._theme;
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
    getTheme() {
        return this.theme;
    },
    setTheme(newValue) {
        this.update({ theme: newValue });
        ThemeService.emit('theme:change', newValue);
    },
    getPreset() {
        return this.preset;
    },
    setPreset(newValue) {
        this._theme = { ...this.theme, preset: newValue };
        this._tokens = ThemeUtils.createTokens(newValue, this.defaults);

        this.clearLoadedStyleNames();
        ThemeService.emit('preset:change', newValue);
        ThemeService.emit('theme:change', this.theme);
    },
    getLayerNames() {
        return [...this._layerNames];
    },
    setLayerNames(layerName) {
        this._layerNames.add(layerName);
    },
    getLoadedStyleNames() {
        return this._loadedStyleNames;
    },
    isStyleNameLoaded(name) {
        return this._loadedStyleNames.has(name);
    },
    setLoadedStyleName(name) {
        this._loadedStyleNames.add(name);
    },
    deleteLoadedStyleName(name) {
        this._loadedStyleNames.delete(name);
    },
    clearLoadedStyleNames() {
        this._loadedStyleNames.clear();
    },
    getTokenValue(tokenPath) {
        return ThemeUtils.getTokenValue(this.tokens, tokenPath, this.defaults);
    },
    getCommonCSS(name = '', params) {
        return ThemeUtils.getCommon({ name, theme: this.theme, params, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    },
    getComponentCSS(name = '', params) {
        const options = { name, theme: this.theme, params, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };

        return {
            style: ThemeUtils.getBaseC(options),
            variables: ThemeUtils.getPresetC(options)
        };
    },
    getDirectiveCSS(name = '', params) {
        const options = { name, theme: this.theme, params, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };

        return {
            style: ThemeUtils.getBaseD(options),
            variables: ThemeUtils.getPresetD(options)
        };
    },
    getLayerOrderCSS(name = '') {
        return ThemeUtils.getLayerOrder(name, this.options, { names: this.getLayerNames() }, this.defaults);
    },
    getCommonStyleSheet(name = '', params, props = {}) {
        return ThemeUtils.getCommonStyleSheet({ name, theme: this.theme, params, props, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    },
    getStyleSheet(name, params, props = {}) {
        return ThemeUtils.getStyleSheet({ name, theme: this.theme, params, props, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    }
};

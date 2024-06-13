import ThemeService from '../service/index.js';
import { ThemeUtils } from '../utils/index.js';

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
    _loadingStyles: new Set(),
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
            this._tokens = ThemeUtils.createTokens(this.preset, this.defaults);
            this.clearLoadedStyleNames();
        }
    },
    get theme() {
        return this._theme;
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
    getOptions() {
        return this.options;
    },
    setOptions(newValue) {
        this._theme = { ...this.theme, options: newValue };

        this.clearLoadedStyleNames();
        ThemeService.emit('options:change', newValue);
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
    getCommon(name = '', params) {
        return ThemeUtils.getCommon({ name, theme: this.theme, params, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    },
    getComponent(name = '', params) {
        const options = { name, theme: this.theme, params, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };

        return ThemeUtils.getPresetC(options);
    },
    getDirective(name = '', params) {
        const options = { name, theme: this.theme, params, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };

        return ThemeUtils.getPresetD(options);
    },
    getCustomPreset(name = '', preset, selector, params) {
        const options = { name, preset, options: this.options, selector, params, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };

        return ThemeUtils.getPreset(options);
    },
    getLayerOrderCSS(name = '') {
        return ThemeUtils.getLayerOrder(name, this.options, { names: this.getLayerNames() }, this.defaults);
    },
    transformCSS(name = '', css, type = 'style', mode) {
        return ThemeUtils.transformCSS(name, css, mode, type, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
    },
    getCommonStyleSheet(name = '', params, props = {}) {
        return ThemeUtils.getCommonStyleSheet({ name, theme: this.theme, params, props, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    },
    getStyleSheet(name, params, props = {}) {
        return ThemeUtils.getStyleSheet({ name, theme: this.theme, params, props, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    },
    onStyleMounted(name) {
        this._loadingStyles.add(name);
    },
    onStyleUpdated(name) {
        this._loadingStyles.add(name);
    },
    onStyleLoaded(event, { name }) {
        if (this._loadingStyles.size) {
            this._loadingStyles.delete(name);

            ThemeService.emit(`theme:${name}:load`, event); // Exp: ThemeService.emit('theme:panel-style:load', event)
            !this._loadingStyles.size && ThemeService.emit('theme:load');
        }
    }
};

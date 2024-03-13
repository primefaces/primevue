import { ThemeUtils } from 'primevue/themes';

export default {
    defaults: {
        variable: {
            prefix: '',
            selector: ':root',
            excludedKeyRegex: /^(primitive|semantic|variables|colorscheme|light|dark|common|colors|root|states)$/gi
        },
        colorScheme: {
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
        },
        layer: {
            name: 'primevue'
            //order: 'primevue' // @todo
        }
    },
    _pConfig: undefined,
    _theme: undefined,
    _initialized: false,
    _currentColorScheme: 'light',
    init() {
        if (!this._initialized) {
            this.applyColorScheme();
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
    get extend() {
        return this.theme?.extend || {};
    },
    getPConfig() {
        return this._pConfig;
    },
    setPConfig(newValue) {
        this._pConfig = newValue;
    },
    setTheme(newValue) {
        this._theme = newValue;
    },
    getCurrentColorScheme() {
        return this._currentColorScheme;
    },
    setCurrentColorScheme(newValue) {
        this._currentColorScheme = newValue;
    },
    applyColorScheme() {
        const newColorScheme = ThemeUtils.applyColorScheme(this.options, this.getCurrentColorScheme(), this.defaults);

        this.setCurrentColorScheme(newColorScheme);

        return newColorScheme;
    },
    toggleColorScheme() {
        const newColorScheme = ThemeUtils.toggleColorScheme(this.options, this.getCurrentColorScheme(), this.defaults);

        this.setCurrentColorScheme(newColorScheme);

        return newColorScheme;
    },
    getCommonCSS(name = '', theme, params) {
        return ThemeUtils.getCommon({ name, theme: theme || this.theme, params, defaults: this.defaults });
    },
    getComponentCSS(name = '', theme, params) {
        const options = { name, theme: theme || this.theme, params, defaults: this.defaults };

        return {
            style: ThemeUtils.getBaseC(options),
            variables: ThemeUtils.getPresetC(options)
        };
    },
    getDirectiveCSS(name = '', theme, params) {
        const options = { name, theme: theme || this.theme, params, defaults: this.defaults };

        return {
            style: ThemeUtils.getBaseD(options),
            variables: ThemeUtils.getPresetD(options)
        };
    },
    getCommonStyleSheet(name = '', theme, params, props = {}) {
        return ThemeUtils.getCommonStyleSheet(name, theme, params, props);
    },
    getStyleSheet(name, theme = {}, params, props = {}) {
        return ThemeUtils.getStyleSheet(name, theme, params, props);
    }
};

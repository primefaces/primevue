import { SharedUtils, ThemeService } from 'primevue/themes';

const ServiceSymbol = Symbol();

export default {
    _pConfig: undefined,
    _colorScheme: 'dark',
    _initializeColorScheme: false,
    getPConfig() {
        return this._pConfig;
    },
    setPConfig(newValue) {
        this._pConfig = newValue;
        ThemeService.emit(ServiceSymbol, this._pConfig);
    },
    onPConfigChange(callback) {
        ThemeService.on(ServiceSymbol, callback);
    },
    getColorScheme() {
        return this._colorScheme;
    },
    setColorScheme(newValue) {
        this._colorScheme = newValue;
    },
    isColorSchemeInit() {
        return this._initializeColorScheme;
    },
    setColorSchemeInit(newValue) {
        this._initializeColorScheme = newValue;
    },
    toggleColorScheme() {
        this._colorScheme = this._colorScheme === 'dark' ? 'light' : 'dark';
        const defaultDocument = SharedUtils.dom.isClient() ? window.document : undefined;

        if (defaultDocument) {
            //@todo
            const { colorScheme } = this._pConfig?.theme?.options;
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
                if (SharedUtils.object.isObject(colorScheme)) {
                    options.light = { ...options.light, ...colorScheme.light };
                    options.dark = { ...options.dark, ...colorScheme.dark };
                } else {
                    options.light = { ...options.light, default: colorScheme !== 'auto' && colorScheme !== 'dark' };
                    options.dark = { ...options.dark, default: colorScheme === 'dark' };
                }
            }

            SharedUtils.dom.removeMultipleClasses(defaultDocument.documentElement, [options.dark.class, options.light.class]);
            SharedUtils.dom.addClass(defaultDocument.documentElement, this._colorScheme === 'dark' ? options.dark.class : options.light.class);
        }

        return this._colorMode;
    }
};

import { SharedUtils, ThemeService } from 'primevue/themes';

const ServiceSymbol = Symbol();

export default {
    _pConfig: undefined,
    _colorMode: 'dark',
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
    getColorMode() {
        return this._colorMode;
    },
    setColorMode(newValue) {
        this._colorMode = newValue;
    },
    toggleColorMode() {
        this._colorMode = this._colorMode === 'dark' ? 'light' : 'dark';
        const defaultDocument = SharedUtils.dom.isClient() ? window.document : undefined;

        if (defaultDocument) {
            const className = 'p-dark'; // @todo

            this._colorMode !== 'dark' ? SharedUtils.dom.removeClass(defaultDocument.documentElement, className) : SharedUtils.dom.addClass(defaultDocument.documentElement, className);
        }

        return this._colorMode;
    }
};

import Theme from '../config/index.js';
import { SharedUtils } from '../utils/index.js';

export const $t = (theme = {}) => {
    let { preset: _preset, options: _options } = theme;

    return {
        preset(value) {
            _preset = _preset ? SharedUtils.object.mergeKeys(_preset, value) : value;

            return this;
        },
        options(value) {
            _options = _options ? { ..._options, ...value } : value;

            return this;
        },
        // features
        primaryPalette(primary) {
            const { semantic } = _preset || {};

            _preset = { ..._preset, semantic: { ...semantic, primary } };

            return this;
        },
        surfacePalette(surface) {
            const { semantic } = _preset || {};
            const lightSurface = surface?.hasOwnProperty('light') ? surface?.light : surface;
            const darkSurface = surface?.hasOwnProperty('dark') ? surface?.dark : surface;
            const newColorScheme = {
                colorScheme: {
                    light: { ...semantic?.colorScheme?.light, ...(!!lightSurface && { surface: lightSurface }) },
                    dark: { ...semantic?.colorScheme?.dark, ...(!!darkSurface && { surface: darkSurface }) }
                }
            };

            _preset = { ..._preset, semantic: { ...semantic, ...newColorScheme } };

            return this;
        },
        // actions
        define({ useDefaultPreset = false, useDefaultOptions = false } = {}) {
            return {
                preset: useDefaultPreset ? Theme.getPreset() : _preset,
                options: useDefaultOptions ? Theme.getOptions() : _options
            };
        },
        update({ mergePresets = true, mergeOptions = true } = {}) {
            const newTheme = {
                preset: mergePresets ? SharedUtils.object.mergeKeys(Theme.getPreset(), _preset) : _preset,
                options: mergeOptions ? { ...Theme.getOptions(), ..._options } : _options
            };

            Theme.setTheme(newTheme);

            return newTheme;
        },
        use(options) {
            const newTheme = this.define(options);

            Theme.setTheme(newTheme);

            return newTheme;
        }
    };
};

import Theme, { dt } from 'primevue/themes';
import { useStyle } from 'primevue/usestyle';
import { ObjectUtils } from 'primevue/utils';

const theme = ({ dt }) => `
.p-component,
.p-component * {
    box-sizing: border-box;
}

.p-hidden-space {
    visibility: hidden;
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-unselectable-text {
    user-select: none;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal;
}

.p-link {
    text-align: left;
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
    cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

* {
    box-sizing: border-box;
}

.p-component {
    font-size: 1rem;
    font-weight: normal;
}

.p-component-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: ${dt('transition.duration')};
}

.p-disabled,
.p-component:disabled {
    opacity: 0.6;
}

.p-error {
    color: #f87171;
}

.p-text-secondary {
    color: ${dt('text.muted.color')};
}

.pi {
    font-size: ${dt('icon.size')};
}

.p-icon {
    width: ${dt('icon.size')};
    height: ${dt('icon.size')};
}

.p-link {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    border-radius: 6px;
    outline-color: transparent;
}
.p-link:focus-visible {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: 2px;
    box-shadow: none;
}

.p-component-overlay-enter {
    animation: p-component-overlay-enter-animation 150ms forwards;
}

.p-component-overlay-leave {
    animation: p-component-overlay-leave-animation 150ms forwards;
}

@keyframes p-component-overlay-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: ${dt('mask.background')};
    }
}
@keyframes p-component-overlay-leave-animation {
    from {
        background-color: ${dt('mask.background')};
    }
    to {
        background-color: transparent;
    }
}
`;

const css = ({ dt }) => `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${dt('scrollbar.width')};
}
`;

const classes = {};

const inlineStyles = {};

export default {
    name: 'base',
    css,
    theme,
    classes,
    inlineStyles,
    load(style, options = {}, transform = (cs) => cs) {
        const computedStyle = transform(ObjectUtils.getItemValue(style, { dt }));

        return computedStyle ? useStyle(ObjectUtils.minifyCSS(computedStyle), { name: this.name, ...options }) : {};
    },
    loadCSS(options = {}) {
        return this.load(this.css, options);
    },
    loadTheme(options = {}) {
        return this.load(this.theme, options, (computedStyle) => Theme.transformCSS(options.name || this.name, computedStyle));
    },
    getCommonThemeCSS(params) {
        return Theme.getCommonCSS(this.name, params);
    },
    getComponentThemeCSS(params) {
        return Theme.getComponentCSS(this.name, params);
    },
    getDirectiveThemeCSS(params) {
        return Theme.getDirectiveCSS(this.name, params);
    },
    getPresetThemeCSS(preset, selector, params) {
        return Theme.getPresetCSS(this.name, preset, selector, params);
    },
    getLayerOrderThemeCSS() {
        return Theme.getLayerOrderCSS(this.name);
    },
    getStyleSheet(extendedCSS = '', props = {}) {
        if (this.css) {
            const _css = ObjectUtils.getItemValue(this.css, { dt });
            const _style = ObjectUtils.minifyCSS(`${_css}${extendedCSS}`);
            const _props = Object.entries(props)
                .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                .join(' ');

            return `<style type="text/css" data-primevue-style-id="${this.name}" ${_props}>${_style}</style>`;
        }

        return '';
    },
    getCommonThemeStyleSheet(params, props = {}) {
        return Theme.getCommonStyleSheet(this.name, params, props);
    },
    getThemeStyleSheet(params, props = {}) {
        let css = [Theme.getStyleSheet(this.name, params, props)];

        if (this.theme) {
            const name = `${this.name}-style`;
            const _css = ObjectUtils.getItemValue(this.theme, { dt });
            const _style = ObjectUtils.minifyCSS(Theme.transformCSS(name, _css));
            const _props = Object.entries(props)
                .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                .join(' ');

            css.push(`<style type="text/css" data-primevue-style-id="${name}" ${_props}>${_style}</style>`);
        }

        return css.join('');
    },
    extend(style) {
        return { ...this, css: undefined, theme: undefined, ...style };
    }
};

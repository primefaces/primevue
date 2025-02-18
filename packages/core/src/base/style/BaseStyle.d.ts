/**
 *
 * [Live Demo](https://primevue.org/)
 *
 * @module basestyle
 *
 */
import type { Style, StyleOptions } from '@primevue/core/usestyle';
import type { Theme as ThemeSingleton, dt as dtSingleton, css as cssSingleton } from '@primeuix/styled';

export enum BaseClasses {}

export declare interface BaseStyle {
    name?: string | undefined;
    css?: string | undefined;
    classes?: object | undefined;
    inlineStyles?: object | undefined;
    load?: ((style: string | ((params?: any) => string | undefined), options?: StyleOptions) => Style | object | undefined) | undefined;
    getStyleSheet?: ((extendedCSS?: string, params?: any, props?: any) => string | undefined) | undefined;
}

export declare const getBaseStyleInstance: (Theme: typeof ThemeSingleton, dt: typeof dtSingleton, Css: typeof cssSingleton) => BaseStyle;

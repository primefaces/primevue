import { Style, StyleOptions } from '../../usestyle';

export declare interface BaseStyle {
    name?: string | undefined;
    css?: string | undefined;
    classes?: object | undefined;
    inlineStyles?: object | undefined;
    loadStyle?: ((options?: StyleOptions) => Style | object | undefined) | undefined;
    getStyleSheet?: ((extendedCSS?: string, props?: any) => string | undefined) | undefined;
}

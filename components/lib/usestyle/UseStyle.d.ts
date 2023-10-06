export interface StyleOptions {
    document?: HTMLElement;
    immediate?: boolean;
    manual?: boolean;
    name?: string;
    id?: string;
    media?: string;
    nonce?: string;
    props?: any;
}

export interface Style {
    id: string;
    name: string;
    css: any;
    unload: () => void;
    load: (css?: string, props?: any) => void;
    isLoaded: boolean;
}

export declare function useStyle(css: string, options?: StyleOptions): Style;

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

export declare function useStyle(
    css: string,
    options?: StyleOptions
): {
    id: string;
    name: string;
    css: any;
    unload: () => void;
    load: (css?: string, props?: any) => void;
    isLoaded: boolean;
};

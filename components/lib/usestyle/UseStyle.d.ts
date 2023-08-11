export interface StyleOptions {
    document?: HTMLElement;
    immediate?: boolean;
    manual?: boolean;
    name?: string;
    id?: string;
    media?: string;
    nonce?: string;
}

export declare function useStyle(
    css: string,
    options?: StyleOptions
): {
    id: string;
    name: string;
    css: any;
    unload: () => void;
    load: (css?: string, options?: any) => void;
    isLoaded: boolean;
};

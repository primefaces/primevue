export interface StyleOptions {
    document?: HTMLElement;
    immediate?: boolean;
    manual?: boolean;
    name?: string;
    id?: string;
    media?: string;
}

export declare function useStyle(
    css: string,
    options?: StyleOptions
): {
    id: string;
    name: string;
    css: any;
    unload: () => void;
    load: () => void;
    isLoaded: boolean;
};

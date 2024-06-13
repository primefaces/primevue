export interface MetaType {
    name?: string;
    as?: string;
    from?: string;
    use?: {
        as?: string;
    };
}

export function toMeta(arr?: any[]): MetaType[] | undefined {
    return arr?.map((item) => {
        const it = typeof item === 'string' ? { name: item } : item;
        it.from ??= `primevue/${it?.name?.toLowerCase()}`;

        return it;
    });
}

export * from './components/index';
export * from './composables/index';
export * from './directives/index';

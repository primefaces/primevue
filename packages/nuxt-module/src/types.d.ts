import type { PrimeVueConfiguration } from 'primevue/config';

export interface ConstructsType {
    prefix?: string | undefined;
    name?: (item: any) => string | undefined;
    include?: '*' | Array<string | { name: string; use?: { as: string } }> | ((list: any) => string[] | undefined) | undefined;
    exclude?: '*' | Array<string | { name: string; use?: { as: string } }> | ((list: any) => string[] | undefined) | undefined;
}

export interface ModuleOptions {
    usePrimeVue?: boolean;
    autoImport?: boolean;
    resolvePath?: any;
    /*cssLayerOrder?: string;*/
    importPT?: ImportOptions;
    importTheme?: ImportOptions;
    loadStyles?: boolean;
    options?: PrimeVueOptions;
    components?: ConstructsType;
    directives?: ConstructsType;
    composables?: Omit<ConstructsType, 'prefix'>;
}

export interface PrimeVueOptions extends PrimeVueConfiguration {}

export interface ImportOptions {
    as?: string;
    from: string;
}

export interface ResolvePathOptions {
    name?: string;
    as?: string;
    from: string;
    type?: 'config' | 'component' | 'directive' | 'composable' | 'service' | 'style' | undefined;
}

declare module '@nuxt/schema' {
    interface NuxtConfig {
        primevue?: ModuleOptions;
    }
    interface NuxtOptions {
        primevue?: ModuleOptions;
    }
}

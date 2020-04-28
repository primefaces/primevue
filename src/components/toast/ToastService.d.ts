import Vue, { PluginFunction } from 'vue';

export const install: PluginFunction<{}>;

interface ToastServiceMethods {
    add(message: any): any;
    removeGroup(group: any): void;
    removeAllGroups(): void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $toast: ToastServiceMethods;
    }
}
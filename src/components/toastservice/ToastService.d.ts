import Vue, { Plugin } from 'vue';

declare const plugin: Plugin;
export default plugin;

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

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $toast: ToastServiceMethods;
    }
}

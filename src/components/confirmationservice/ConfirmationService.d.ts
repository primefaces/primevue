import Vue, { PluginFunction } from 'vue';

export const install: PluginFunction<{}>;

interface ConfirmationServiceMethods {
    require(options: any): any;
    close(): void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $confirm: ConfirmationServiceMethods;
    }
}
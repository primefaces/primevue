import Vue, { PluginFunction } from 'vue';

interface PrimeVueConfiguration {
    ripple?: boolean;
    locale?: PrimeVueLocaleOptions;
}

interface PrimeVueLocaleOptions {
    accept?: string;
    reject?: string;
    choose?: string;
    upload?: string;
    cancel?: string;
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    today?: string;
    clear?: string;
    weekHeader?: string;
    firstDayOfWeek?: number;
    dateFormat?: string;
    weak?: string;
    medium?: string;
    strong?: string;
    passwordPrompt?: string;
}

export const install: PluginFunction<{}>;

declare module 'vue/types/vue' {
    interface Vue {
        $primevue: {
            config: PrimeVueConfiguration;
        }
    }
}
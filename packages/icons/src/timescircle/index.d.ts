import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class TimesCircleIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        TimesCircleIcon: DefineComponent<TimesCircleIcon>;
    }
}

export default TimesCircleIcon;

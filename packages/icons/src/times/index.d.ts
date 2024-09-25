import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class TimesIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        TimesIcon: DefineComponent<TimesIcon>;
    }
}

export default TimesIcon;

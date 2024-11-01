import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons/baseicon';

declare class ChevronLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronLeftIcon: DefineComponent<ChevronLeftIcon>;
    }
}

export default ChevronLeftIcon;

import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class ChevronRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronRightIcon: DefineComponent<ChevronRightIcon>;
    }
}

export default ChevronRightIcon;

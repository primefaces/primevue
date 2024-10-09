import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class ArrowDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ArrowDownIcon: DefineComponent<ArrowDownIcon>;
    }
}

export default ArrowDownIcon;

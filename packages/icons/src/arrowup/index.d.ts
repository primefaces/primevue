import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class ArrowUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ArrowUpIcon: GlobalComponentConstructor<ArrowUpIcon>;
    }
}

export default ArrowUpIcon;

import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class ChevronUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronUpIcon: GlobalComponentConstructor<ChevronUpIcon>;
    }
}

export default ChevronUpIcon;

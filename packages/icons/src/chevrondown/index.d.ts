import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class ChevronDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronDownIcon: GlobalComponentConstructor<ChevronDownIcon>;
    }
}

export default ChevronDownIcon;

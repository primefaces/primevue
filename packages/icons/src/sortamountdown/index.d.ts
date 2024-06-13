import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class SortAmountDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAmountDownIcon: GlobalComponentConstructor<SortAmountDownIcon>;
    }
}

export default SortAmountDownIcon;

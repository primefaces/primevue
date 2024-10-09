import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class SortAmountUpAltIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAmountUpAltIcon: DefineComponent<SortAmountUpAltIcon>;
    }
}

export default SortAmountUpAltIcon;

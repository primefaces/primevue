import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class BarsIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BarsIcon: DefineComponent<BarsIcon>;
    }
}

export default BarsIcon;

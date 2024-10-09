import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class BanIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BanIcon: DefineComponent<BanIcon>;
    }
}

export default BanIcon;

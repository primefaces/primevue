import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class BarsIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BarsIcon: GlobalComponentConstructor<BarsIcon>;
    }
}

export default BarsIcon;

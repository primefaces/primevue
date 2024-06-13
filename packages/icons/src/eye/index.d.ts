import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class EyeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        EyeIcon: GlobalComponentConstructor<EyeIcon>;
    }
}

export default EyeIcon;

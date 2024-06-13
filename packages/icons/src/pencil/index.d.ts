import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class PencilIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        PencilIcon: GlobalComponentConstructor<PencilIcon>;
    }
}

export default PencilIcon;

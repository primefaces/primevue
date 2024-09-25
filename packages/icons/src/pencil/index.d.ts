import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class PencilIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        PencilIcon: DefineComponent<PencilIcon>;
    }
}

export default PencilIcon;

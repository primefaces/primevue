import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class CheckIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        CheckIcon: DefineComponent<CheckIcon>;
    }
}

export default CheckIcon;

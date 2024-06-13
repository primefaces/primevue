import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class CheckIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        CheckIcon: GlobalComponentConstructor<CheckIcon>;
    }
}

export default CheckIcon;

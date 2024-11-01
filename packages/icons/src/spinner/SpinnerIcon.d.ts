import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons/baseicon';

declare class SpinnerIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SpinnerIcon: DefineComponent<SpinnerIcon>;
    }
}

export default SpinnerIcon;

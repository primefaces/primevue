import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons/baseicon';

declare class MinusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        MinusIcon: DefineComponent<MinusIcon>;
    }
}

export default MinusIcon;

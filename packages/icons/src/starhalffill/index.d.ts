import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class StarHalfFillIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        StarHalfFillIcon: DefineComponent<StarHalfFillIcon>;
    }
}

export default StarHalfFillIcon;

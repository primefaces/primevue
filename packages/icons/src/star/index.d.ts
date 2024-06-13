import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class StarIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        StarIcon: GlobalComponentConstructor<StarIcon>;
    }
}

export default StarIcon;

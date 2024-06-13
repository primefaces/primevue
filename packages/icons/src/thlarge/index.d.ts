import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class ThLargeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ThLargeIcon: GlobalComponentConstructor<ThLargeIcon>;
    }
}

export default ThLargeIcon;

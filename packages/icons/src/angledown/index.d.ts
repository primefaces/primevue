import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class AngleDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDownIcon: DefineComponent<AngleDownIcon>;
    }
}

export default AngleDownIcon;

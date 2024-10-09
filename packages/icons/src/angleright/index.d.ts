import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class AngleRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleRightIcon: DefineComponent<AngleRightIcon>;
    }
}

export default AngleRightIcon;

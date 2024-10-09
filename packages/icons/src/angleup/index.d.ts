import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class AngleUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleUpIcon: DefineComponent<AngleUpIcon>;
    }
}

export default AngleUpIcon;

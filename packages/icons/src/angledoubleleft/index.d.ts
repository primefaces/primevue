import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class AngleDoubleLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleLeftIcon: DefineComponent<AngleDoubleLeftIcon>;
    }
}

export default AngleDoubleLeftIcon;

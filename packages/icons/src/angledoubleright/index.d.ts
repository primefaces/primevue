import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class AngleDoubleRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleRightIcon: GlobalComponentConstructor<AngleDoubleRightIcon>;
    }
}

export default AngleDoubleRightIcon;

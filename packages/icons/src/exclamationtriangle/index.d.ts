import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class ExclamationTriangleIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ExclamationTriangleIcon: GlobalComponentConstructor<ExclamationTriangleIcon>;
    }
}

export default ExclamationTriangleIcon;

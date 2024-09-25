import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class RefreshIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        RefreshIcon: DefineComponent<RefreshIcon>;
    }
}

export default RefreshIcon;

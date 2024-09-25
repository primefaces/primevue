import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class WindowMaximizeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        WindowMaximizeIcon: DefineComponent<WindowMaximizeIcon>;
    }
}

export default WindowMaximizeIcon;

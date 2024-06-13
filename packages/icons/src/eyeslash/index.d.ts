import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class EyeSlashIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        EyeSlashIcon: GlobalComponentConstructor<EyeSlashIcon>;
    }
}

export default EyeSlashIcon;

import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class InfoCircleIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        InfoCircleIcon: DefineComponent<InfoCircleIcon>;
    }
}

export default InfoCircleIcon;

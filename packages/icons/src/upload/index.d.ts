import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class UploadIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        UploadIcon: DefineComponent<UploadIcon>;
    }
}

export default UploadIcon;

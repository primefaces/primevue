import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class FilterIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        FilterIcon: DefineComponent<FilterIcon>;
    }
}

export default FilterIcon;

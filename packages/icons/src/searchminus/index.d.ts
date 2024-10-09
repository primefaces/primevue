import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class SearchMinusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchMinusIcon: DefineComponent<SearchMinusIcon>;
    }
}

export default SearchMinusIcon;

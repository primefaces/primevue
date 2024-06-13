import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class SearchMinusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchMinusIcon: GlobalComponentConstructor<SearchMinusIcon>;
    }
}

export default SearchMinusIcon;

import type { GlobalComponentConstructor } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class SearchIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchIcon: GlobalComponentConstructor<SearchIcon>;
    }
}

export default SearchIcon;

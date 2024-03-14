import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class SearchPlusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchPlusIcon: GlobalComponentConstructor<SearchPlusIcon>;
    }
}

export default SearchPlusIcon;

import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class SearchMinusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchMinusIcon: GlobalComponentConstructor<SearchMinusIcon>;
    }
}

export default SearchMinusIcon;

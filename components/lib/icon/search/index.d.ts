import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class SearchIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SearchIcon: GlobalComponentConstructor<SearchIcon>;
    }
}

export default SearchIcon;

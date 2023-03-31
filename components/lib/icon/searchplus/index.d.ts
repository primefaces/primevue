import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class SearchPlusIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SearchPlusIcon: GlobalComponentConstructor<SearchPlusIcon>;
    }
}

export default SearchPlusIcon;

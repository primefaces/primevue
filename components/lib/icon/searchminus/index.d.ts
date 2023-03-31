import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class SearchMinusIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SearchMinusIcon: GlobalComponentConstructor<SearchMinusIcon>;
    }
}

export default SearchMinusIcon;

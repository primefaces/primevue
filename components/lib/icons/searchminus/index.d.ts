import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class SearchMinusIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SearchMinusIcon: GlobalComponentConstructor<SearchMinusIcon>;
    }
}

export default SearchMinusIcon;

import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class SearchMinusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchMinusIcon: GlobalComponentConstructor<SearchMinusIcon>;
    }
}

export default SearchMinusIcon;

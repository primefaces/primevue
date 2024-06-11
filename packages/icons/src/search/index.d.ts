import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class SearchIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchIcon: GlobalComponentConstructor<SearchIcon>;
    }
}

export default SearchIcon;

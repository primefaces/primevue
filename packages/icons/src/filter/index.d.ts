import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class FilterIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        FilterIcon: GlobalComponentConstructor<FilterIcon>;
    }
}

export default FilterIcon;

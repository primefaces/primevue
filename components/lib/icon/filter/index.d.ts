import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class FilterIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        FilterIcon: GlobalComponentConstructor<FilterIcon>;
    }
}

export default FilterIcon;

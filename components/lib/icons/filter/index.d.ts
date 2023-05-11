import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class FilterIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        FilterIcon: GlobalComponentConstructor<FilterIcon>;
    }
}

export default FilterIcon;

import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class FilterSlashIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        FilterSlashIcon: GlobalComponentConstructor<FilterSlashIcon>;
    }
}

export default FilterSlashIcon;

import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class FilterSlashIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        FilterSlashIcon: GlobalComponentConstructor<FilterSlashIcon>;
    }
}

export default FilterSlashIcon;

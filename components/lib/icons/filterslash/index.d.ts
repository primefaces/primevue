import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class FilterSlashIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        FilterSlashIcon: GlobalComponentConstructor<FilterSlashIcon>;
    }
}

export default FilterSlashIcon;

import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class FilterSlashIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        FilterSlashIcon: GlobalComponentConstructor<FilterSlashIcon>;
    }
}

export default FilterSlashIcon;

import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class SortAltIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SortAltIcon: GlobalComponentConstructor<SortAltIcon>;
    }
}

export default SortAltIcon;

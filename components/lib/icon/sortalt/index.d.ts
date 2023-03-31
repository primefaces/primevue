import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class SortAltIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SortAltIcon: GlobalComponentConstructor<SortAltIcon>;
    }
}

export default SortAltIcon;

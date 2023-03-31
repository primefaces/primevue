import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class SortAmountUpAltIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SortAmountUpAltIcon: GlobalComponentConstructor<SortAmountUpAltIcon>;
    }
}

export default SortAmountUpAltIcon;

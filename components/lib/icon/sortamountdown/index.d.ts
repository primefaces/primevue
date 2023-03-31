import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class SortAmountDownIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SortAmountDownIcon: GlobalComponentConstructor<SortAmountDownIcon>;
    }
}

export default SortAmountDownIcon;

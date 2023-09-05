import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class SortAmountDownIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SortAmountDownIcon: GlobalComponentConstructor<SortAmountDownIcon>;
    }
}

export default SortAmountDownIcon;

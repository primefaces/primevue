import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class ArrowDownIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ArrowDownIcon: GlobalComponentConstructor<ArrowDownIcon>;
    }
}

export default ArrowDownIcon;

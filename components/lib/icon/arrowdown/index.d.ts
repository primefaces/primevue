import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class ArrowDownIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ArrowDownIcon: GlobalComponentConstructor<ArrowDownIcon>;
    }
}

export default ArrowDownIcon;

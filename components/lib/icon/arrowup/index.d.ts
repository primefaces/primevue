import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class ArrowUpIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ArrowUpIcon: GlobalComponentConstructor<ArrowUpIcon>;
    }
}

export default ArrowUpIcon;

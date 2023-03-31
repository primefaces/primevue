import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class ChevronRightIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ChevronRightIcon: GlobalComponentConstructor<ChevronRightIcon>;
    }
}

export default ChevronRightIcon;

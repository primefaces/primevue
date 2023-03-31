import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class ChevronDownIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ChevronDownIcon: GlobalComponentConstructor<ChevronDownIcon>;
    }
}

export default ChevronDownIcon;

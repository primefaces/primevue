import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class ChevronUpIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ChevronUpIcon: GlobalComponentConstructor<ChevronUpIcon>;
    }
}

export default ChevronUpIcon;

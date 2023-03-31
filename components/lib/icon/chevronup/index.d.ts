import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class ChevronUpIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ChevronUpIcon: GlobalComponentConstructor<ChevronUpIcon>;
    }
}

export default ChevronUpIcon;

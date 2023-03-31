import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class ChevronLeftIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ChevronLeftIcon: GlobalComponentConstructor<ChevronLeftIcon>;
    }
}

export default ChevronLeftIcon;

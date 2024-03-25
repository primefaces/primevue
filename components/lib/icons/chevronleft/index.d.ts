import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class ChevronLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronLeftIcon: GlobalComponentConstructor<ChevronLeftIcon>;
    }
}

export default ChevronLeftIcon;

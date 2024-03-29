import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class ChevronRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronRightIcon: GlobalComponentConstructor<ChevronRightIcon>;
    }
}

export default ChevronRightIcon;

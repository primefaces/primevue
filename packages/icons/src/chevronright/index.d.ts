import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class ChevronRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronRightIcon: GlobalComponentConstructor<ChevronRightIcon>;
    }
}

export default ChevronRightIcon;

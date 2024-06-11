import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class ChevronDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronDownIcon: GlobalComponentConstructor<ChevronDownIcon>;
    }
}

export default ChevronDownIcon;

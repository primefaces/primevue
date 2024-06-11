import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class ChevronUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronUpIcon: GlobalComponentConstructor<ChevronUpIcon>;
    }
}

export default ChevronUpIcon;

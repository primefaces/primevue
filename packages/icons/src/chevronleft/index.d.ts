import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class ChevronLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronLeftIcon: GlobalComponentConstructor<ChevronLeftIcon>;
    }
}

export default ChevronLeftIcon;

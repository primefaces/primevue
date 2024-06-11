import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class SortAmountUpAltIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAmountUpAltIcon: GlobalComponentConstructor<SortAmountUpAltIcon>;
    }
}

export default SortAmountUpAltIcon;

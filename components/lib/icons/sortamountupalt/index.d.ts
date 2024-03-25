import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class SortAmountUpAltIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAmountUpAltIcon: GlobalComponentConstructor<SortAmountUpAltIcon>;
    }
}

export default SortAmountUpAltIcon;

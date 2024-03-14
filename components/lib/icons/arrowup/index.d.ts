import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class ArrowUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ArrowUpIcon: GlobalComponentConstructor<ArrowUpIcon>;
    }
}

export default ArrowUpIcon;

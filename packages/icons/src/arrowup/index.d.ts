import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class ArrowUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ArrowUpIcon: GlobalComponentConstructor<ArrowUpIcon>;
    }
}

export default ArrowUpIcon;

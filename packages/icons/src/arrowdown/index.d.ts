import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class ArrowDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ArrowDownIcon: GlobalComponentConstructor<ArrowDownIcon>;
    }
}

export default ArrowDownIcon;

import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class SortAltIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAltIcon: GlobalComponentConstructor<SortAltIcon>;
    }
}

export default SortAltIcon;

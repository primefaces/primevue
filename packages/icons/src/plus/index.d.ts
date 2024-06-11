import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class PlusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        PlusIcon: GlobalComponentConstructor<PlusIcon>;
    }
}

export default PlusIcon;

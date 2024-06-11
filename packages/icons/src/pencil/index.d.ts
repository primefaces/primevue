import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class PencilIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        PencilIcon: GlobalComponentConstructor<PencilIcon>;
    }
}

export default PencilIcon;

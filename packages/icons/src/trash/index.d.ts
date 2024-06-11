import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class TrashIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        TrashIcon: GlobalComponentConstructor<TrashIcon>;
    }
}

export default TrashIcon;

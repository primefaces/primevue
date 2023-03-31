import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class TrashIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TrashIcon: GlobalComponentConstructor<TrashIcon>;
    }
}

export default TrashIcon;

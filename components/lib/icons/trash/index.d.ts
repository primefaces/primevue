import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class TrashIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TrashIcon: GlobalComponentConstructor<TrashIcon>;
    }
}

export default TrashIcon;

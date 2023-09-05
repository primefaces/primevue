import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class PlusIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        PlusIcon: GlobalComponentConstructor<PlusIcon>;
    }
}

export default PlusIcon;

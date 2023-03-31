import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class PlusIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        PlusIcon: GlobalComponentConstructor<PlusIcon>;
    }
}

export default PlusIcon;

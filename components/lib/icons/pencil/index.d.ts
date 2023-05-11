import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class PencilIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        PencilIcon: GlobalComponentConstructor<PencilIcon>;
    }
}

export default PencilIcon;

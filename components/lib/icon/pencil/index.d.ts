import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class PencilIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        PencilIcon: GlobalComponentConstructor<PencilIcon>;
    }
}

export default PencilIcon;

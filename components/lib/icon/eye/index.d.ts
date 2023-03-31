import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class EyeIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        EyeIcon: GlobalComponentConstructor<EyeIcon>;
    }
}

export default EyeIcon;

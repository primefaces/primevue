import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class EyeIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        EyeIcon: GlobalComponentConstructor<EyeIcon>;
    }
}

export default EyeIcon;

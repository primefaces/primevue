import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class EyeSlashIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        EyeSlashIcon: GlobalComponentConstructor<EyeSlashIcon>;
    }
}

export default EyeSlashIcon;

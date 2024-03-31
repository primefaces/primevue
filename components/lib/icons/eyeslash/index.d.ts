import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class EyeSlashIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        EyeSlashIcon: GlobalComponentConstructor<EyeSlashIcon>;
    }
}

export default EyeSlashIcon;

import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class EyeSlashIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        EyeSlashIcon: GlobalComponentConstructor<EyeSlashIcon>;
    }
}

export default EyeSlashIcon;

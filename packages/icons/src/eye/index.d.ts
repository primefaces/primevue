import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class EyeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        EyeIcon: GlobalComponentConstructor<EyeIcon>;
    }
}

export default EyeIcon;

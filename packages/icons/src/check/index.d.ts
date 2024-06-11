import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class CheckIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        CheckIcon: GlobalComponentConstructor<CheckIcon>;
    }
}

export default CheckIcon;

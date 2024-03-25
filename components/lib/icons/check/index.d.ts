import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class CheckIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        CheckIcon: GlobalComponentConstructor<CheckIcon>;
    }
}

export default CheckIcon;

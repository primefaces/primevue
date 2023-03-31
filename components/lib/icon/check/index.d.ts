import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class CheckIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        CheckIcon: GlobalComponentConstructor<CheckIcon>;
    }
}

export default CheckIcon;

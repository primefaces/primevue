import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class SpinnerIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SpinnerIcon: GlobalComponentConstructor<SpinnerIcon>;
    }
}

export default SpinnerIcon;

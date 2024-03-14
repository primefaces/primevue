import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class SpinnerIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SpinnerIcon: GlobalComponentConstructor<SpinnerIcon>;
    }
}

export default SpinnerIcon;

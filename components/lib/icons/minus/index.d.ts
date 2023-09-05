import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class MinusIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        MinusIcon: GlobalComponentConstructor<MinusIcon>;
    }
}

export default MinusIcon;

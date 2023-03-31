import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class MinusIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        MinusIcon: GlobalComponentConstructor<MinusIcon>;
    }
}

export default MinusIcon;

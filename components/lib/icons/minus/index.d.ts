import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class MinusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        MinusIcon: GlobalComponentConstructor<MinusIcon>;
    }
}

export default MinusIcon;

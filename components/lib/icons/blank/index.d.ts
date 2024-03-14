import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class BlankIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BlankIcon: GlobalComponentConstructor<BlankIcon>;
    }
}

export default BlankIcon;

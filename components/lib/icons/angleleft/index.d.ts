import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class AngleLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleLeftIcon: GlobalComponentConstructor<AngleLeftIcon>;
    }
}

export default AngleLeftIcon;

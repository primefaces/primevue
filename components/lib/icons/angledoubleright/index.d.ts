import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class AngleDoubleRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleRightIcon: GlobalComponentConstructor<AngleDoubleRightIcon>;
    }
}

export default AngleDoubleRightIcon;

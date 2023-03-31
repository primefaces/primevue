import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class AngleDoubleRightIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AngleDoubleRightIcon: GlobalComponentConstructor<AngleDoubleRightIcon>;
    }
}

export default AngleDoubleRightIcon;

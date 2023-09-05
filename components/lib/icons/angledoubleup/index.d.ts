import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class AngleDoubleUpIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AngleDoubleUpIcon: GlobalComponentConstructor<AngleDoubleUpIcon>;
    }
}

export default AngleDoubleUpIcon;

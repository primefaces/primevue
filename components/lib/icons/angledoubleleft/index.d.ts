import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class AngleDoubleLeftIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AngleDoubleLeftIcon: GlobalComponentConstructor<AngleDoubleLeftIcon>;
    }
}

export default AngleDoubleLeftIcon;

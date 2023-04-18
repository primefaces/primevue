import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class AngleRightIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AngleRightIcon: GlobalComponentConstructor<AngleRightIcon>;
    }
}

export default AngleRightIcon;

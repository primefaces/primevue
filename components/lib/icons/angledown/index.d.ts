import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class AngleDownIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AngleDownIcon: GlobalComponentConstructor<AngleDownIcon>;
    }
}

export default AngleDownIcon;

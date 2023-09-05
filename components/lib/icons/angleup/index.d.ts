import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class AngleUpIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AngleUpIcon: GlobalComponentConstructor<AngleUpIcon>;
    }
}

export default AngleUpIcon;

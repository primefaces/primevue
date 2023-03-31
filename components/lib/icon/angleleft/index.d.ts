import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class AngleLeftIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AngleLeftIcon: GlobalComponentConstructor<AngleLeftIcon>;
    }
}

export default AngleLeftIcon;

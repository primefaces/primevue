import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class AngleRightIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AngleRightIcon: GlobalComponentConstructor<AngleRightIcon>;
    }
}

export default AngleRightIcon;

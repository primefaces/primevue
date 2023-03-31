import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class AngleUpIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AngleUpIcon: GlobalComponentConstructor<AngleUpIcon>;
    }
}

export default AngleUpIcon;

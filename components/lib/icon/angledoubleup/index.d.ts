import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class AngleDoubleUpIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AngleDoubleUpIcon: GlobalComponentConstructor<AngleDoubleUpIcon>;
    }
}

export default AngleDoubleUpIcon;

import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class StarIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        StarIcon: GlobalComponentConstructor<StarIcon>;
    }
}

export default StarIcon;

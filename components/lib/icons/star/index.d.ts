import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class StarIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        StarIcon: GlobalComponentConstructor<StarIcon>;
    }
}

export default StarIcon;

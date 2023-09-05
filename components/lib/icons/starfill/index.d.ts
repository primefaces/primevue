import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class StarFillIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        StarFillIcon: GlobalComponentConstructor<StarFillIcon>;
    }
}

export default StarFillIcon;

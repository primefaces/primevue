import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class StarFillIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        StarFillIcon: GlobalComponentConstructor<StarFillIcon>;
    }
}

export default StarFillIcon;

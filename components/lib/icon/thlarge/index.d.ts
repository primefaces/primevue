import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class ThLargeIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ThLargeIcon: GlobalComponentConstructor<ThLargeIcon>;
    }
}

export default ThLargeIcon;

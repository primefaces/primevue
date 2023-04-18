import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class ThLargeIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ThLargeIcon: GlobalComponentConstructor<ThLargeIcon>;
    }
}

export default ThLargeIcon;

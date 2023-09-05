import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class WindowMaximizeIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        WindowMaximizeIcon: GlobalComponentConstructor<WindowMaximizeIcon>;
    }
}

export default WindowMaximizeIcon;

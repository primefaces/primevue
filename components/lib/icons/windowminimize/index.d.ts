import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class WindowMinimizeIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        WindowMinimizeIcon: GlobalComponentConstructor<WindowMinimizeIcon>;
    }
}

export default WindowMinimizeIcon;

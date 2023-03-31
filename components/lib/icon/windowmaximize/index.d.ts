import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class WindowMaximizeIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        WindowMaximizeIcon: GlobalComponentConstructor<WindowMaximizeIcon>;
    }
}

export default WindowMaximizeIcon;

import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class WindowMinimizeIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        WindowMinimizeIcon: GlobalComponentConstructor<WindowMinimizeIcon>;
    }
}

export default WindowMinimizeIcon;

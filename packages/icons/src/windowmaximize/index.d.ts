import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class WindowMaximizeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        WindowMaximizeIcon: GlobalComponentConstructor<WindowMaximizeIcon>;
    }
}

export default WindowMaximizeIcon;

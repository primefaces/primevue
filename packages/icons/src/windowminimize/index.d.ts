import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class WindowMinimizeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        WindowMinimizeIcon: GlobalComponentConstructor<WindowMinimizeIcon>;
    }
}

export default WindowMinimizeIcon;

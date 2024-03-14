import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class RefreshIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        RefreshIcon: GlobalComponentConstructor<RefreshIcon>;
    }
}

export default RefreshIcon;

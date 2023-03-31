import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class RefreshIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        RefreshIcon: GlobalComponentConstructor<RefreshIcon>;
    }
}

export default RefreshIcon;

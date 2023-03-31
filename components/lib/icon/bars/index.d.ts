import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class BarsIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        BarsIcon: GlobalComponentConstructor<BarsIcon>;
    }
}

export default BarsIcon;

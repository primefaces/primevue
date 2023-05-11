import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class BanIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        BanIcon: GlobalComponentConstructor<BanIcon>;
    }
}

export default BanIcon;

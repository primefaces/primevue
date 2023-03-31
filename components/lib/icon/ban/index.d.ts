import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class BanIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        BanIcon: GlobalComponentConstructor<BanIcon>;
    }
}

export default BanIcon;

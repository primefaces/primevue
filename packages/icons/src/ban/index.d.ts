import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class BanIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BanIcon: GlobalComponentConstructor<BanIcon>;
    }
}

export default BanIcon;

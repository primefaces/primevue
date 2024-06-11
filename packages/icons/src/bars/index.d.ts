import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class BarsIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BarsIcon: GlobalComponentConstructor<BarsIcon>;
    }
}

export default BarsIcon;

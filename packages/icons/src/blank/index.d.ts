import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class BlankIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BlankIcon: GlobalComponentConstructor<BlankIcon>;
    }
}

export default BlankIcon;

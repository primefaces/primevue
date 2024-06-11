import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class AngleDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDownIcon: GlobalComponentConstructor<AngleDownIcon>;
    }
}

export default AngleDownIcon;

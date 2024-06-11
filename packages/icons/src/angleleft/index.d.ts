import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class AngleLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleLeftIcon: GlobalComponentConstructor<AngleLeftIcon>;
    }
}

export default AngleLeftIcon;

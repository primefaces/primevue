import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class AngleDoubleRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleRightIcon: GlobalComponentConstructor<AngleDoubleRightIcon>;
    }
}

export default AngleDoubleRightIcon;

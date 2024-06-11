import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class AngleDoubleUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleUpIcon: GlobalComponentConstructor<AngleDoubleUpIcon>;
    }
}

export default AngleDoubleUpIcon;

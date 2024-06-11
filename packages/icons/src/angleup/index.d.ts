import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class AngleUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleUpIcon: GlobalComponentConstructor<AngleUpIcon>;
    }
}

export default AngleUpIcon;

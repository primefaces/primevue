import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../index';

declare class AngleDoubleDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleDownIcon: GlobalComponentConstructor<AngleDoubleDownIcon>;
    }
}

export default AngleDoubleDownIcon;

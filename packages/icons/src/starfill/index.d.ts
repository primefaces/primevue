import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class StarFillIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        StarFillIcon: GlobalComponentConstructor<StarFillIcon>;
    }
}

export default StarFillIcon;

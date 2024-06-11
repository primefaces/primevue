import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class InfoCircleIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        InfoCircleIcon: GlobalComponentConstructor<InfoCircleIcon>;
    }
}

export default InfoCircleIcon;

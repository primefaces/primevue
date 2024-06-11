import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class TimesCircleIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        TimesCircleIcon: GlobalComponentConstructor<TimesCircleIcon>;
    }
}

export default TimesCircleIcon;

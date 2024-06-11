import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class TimesIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        TimesIcon: GlobalComponentConstructor<TimesIcon>;
    }
}

export default TimesIcon;

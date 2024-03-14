import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class TimesCircleIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        TimesCircleIcon: GlobalComponentConstructor<TimesCircleIcon>;
    }
}

export default TimesCircleIcon;

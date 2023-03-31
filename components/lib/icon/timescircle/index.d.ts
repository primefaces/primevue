import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class TimesCircleIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TimesCircleIcon: GlobalComponentConstructor<TimesCircleIcon>;
    }
}

export default TimesCircleIcon;

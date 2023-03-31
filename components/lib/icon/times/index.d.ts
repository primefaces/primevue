import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class TimesIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TimesIcon: GlobalComponentConstructor<TimesIcon>;
    }
}

export default TimesIcon;

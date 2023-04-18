import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class CalendarIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        CalendarIcon: GlobalComponentConstructor<CalendarIcon>;
    }
}

export default CalendarIcon;

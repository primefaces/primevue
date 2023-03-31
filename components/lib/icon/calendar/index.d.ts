import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class CalendarIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        CalendarIcon: GlobalComponentConstructor<CalendarIcon>;
    }
}

export default CalendarIcon;

import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class CalendarIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        CalendarIcon: GlobalComponentConstructor<CalendarIcon>;
    }
}

export default CalendarIcon;

import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface FullCalendarProps {
    events?: any[];
    options?: object;
}

export interface FullCalendarSlots {
}

export declare type FullCalendarEmits = {
}

declare class FullCalendar extends ClassComponent<FullCalendarProps, FullCalendarSlots, FullCalendarEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        FullCalendar: GlobalComponentConstructor<FullCalendar>
    }
}

/**
 *
 * PrimeVue provides theming for the FullCalendar Vue component.
 *
 * Helper API:
 *
 * - [FullCalendar](https://fullcalendar.io/docs/vue)
 *
 * Demos:
 *
 * - [FullCalendar](https://www.primefaces.org/primevue/showcase/#/fullcalendar)
 *
 * @deprecated
 */
export default FullCalendar;

/**
 *
 * Calendar also known as DatePicker, is a form component to work with dates.
 *
 * [Live Demo](https://www.primevue.org/datepicker/)
 *
 * @module calendar
 *
 */
import type { DefineComponent, EmitFn } from '@primevue/core';
import * as DatePicker from 'primevue/datepicker';
import 'vue';

/**
 * Custom passthrough(pt) option method.
 */
export interface CalendarPassThroughMethodOptions extends DatePicker.DatePickerPassThroughMethodOptions {}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface CalendarSharedPassThroughMethodOptions extends DatePicker.DatePickerSharedPassThroughMethodOptions {}

/**
 * Custom Calendar responsive options metadata.
 */
export interface CalendarResponsiveOptions extends DatePicker.DatePickerResponsiveOptions {}

/**
 * Custom Calendar month change event.
 * @see {@link CalendarEmitsOptions['month-change']]}
 */
export interface CalendarMonthChangeEvent extends DatePicker.DatePickerMonthChangeEvent {}

/**
 * Custom Calendar year change event.
 * @see {@link CalendarEmitsOptions['year-change']]}
 */
export interface CalendarYearChangeEvent extends DatePicker.DatePickerYearChangeEvent {}

/**
 * Custom Calendar blur event.
 * @see {@link CalendarEmitsOptions['blur']}
 */
export interface CalendarBlurEvent extends DatePicker.DatePickerBlurEvent {}

/**
 * Custom passthrough(pt) options.
 * @see {@link CalendarProps.pt}
 */
export interface CalendarPassThroughOptions extends DatePicker.DatePickerPassThroughOptions {}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface CalendarPassThroughAttributes extends DatePicker.DatePickerPassThroughAttributes {}

/**
 * Defines current inline state in Calendar component.
 */
export interface CalendarState extends DatePicker.DatePickerState {}

/**
 * Defines current date options in Calendar component.
 */
export interface CalendarDateContext extends DatePicker.DatePickerDateContext {}

/**
 * Defines current options in Calendar component.
 */
export interface CalendarContext extends DatePicker.DatePickerContext {}

/**
 * Defines current month options.
 */
export interface CalendarMonthOptions extends DatePicker.DatePickerMonthOptions {}

/**
 * Defines current year options.
 */
export interface CalendarYearOptions extends DatePicker.DatePickerYearOptions {}

/**
 * Defines valid properties in Calendar component.
 */
export interface CalendarProps extends DatePicker.DatePickerProps {}

/**
 * Defines valid options of the date slot in Calendar component.
 */
export interface CalendarDateSlotOptions extends DatePicker.DatePickerDateSlotOptions {}

/**
 * Defines valid slots in Calendar component.
 */
export interface CalendarSlots extends DatePicker.DatePickerSlots {}

/**
 * Defines valid emits in Calendar component.
 */
export interface CalendarEmitsOptions {}

export declare type CalendarEmits = EmitFn<CalendarEmitsOptions> & DatePicker.DatePickerEmits;

/**
 * @deprecated since v4. Use DatePicker component instead.
 *
 * **PrimeVue - Calendar**
 *
 * _Calendar also known as DatePicker, is a form component to work with dates._
 *
 * [Live Demo](https://www.primevue.org/datepicker/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Calendar: DefineComponent<CalendarProps, CalendarSlots, CalendarEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Calendar: DefineComponent<CalendarProps, CalendarSlots, CalendarEmits>;
    }
}

export default Calendar;

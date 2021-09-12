import { VNode } from 'vue';

interface CalendarProps {
    modelValue?: Date | Date[];
    selectionMode?: string;
    dateFormat?: string;
    inline?: boolean;
    showOtherMonths?: boolean;
    selectOtherMonths?: boolean;
    showIcon?: boolean;
    icon?: string;
    numberOfMonths?: number;
    view?: string;
    touchUI?: boolean;
    monthNavigator?: boolean;
    yearNavigator?: boolean;
    yearRange?: string;
    panelClass?: string;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: Date[];
    disabledDays?: number[];
    maxDateCount?: number;
    showOnFocus?: boolean;
    autoZIndex?: boolean;
    baseZIndex?: number;
    showButtonBar?: boolean;
    shortYearCutoff?: string;
    showTime?: boolean;
    timeOnly?: boolean;
    hourFormat?: string;
    stepHour?: number;
    stepMinute?: number;
    stepSecond?: number;
    showSeconds?: boolean;
    hideOnDateTimeSelect?: boolean;
    timeSeparator?: string;
    showWeek?: boolean;
    manualInput?: boolean;
    appendTo?: string;
    inputStyle?: any;
    inputClass?: string;
    style?: any;
    class?: string;
    keepInvalid?: boolean;
}

declare class Calendar {
    $props: CalendarProps;
    $emit(eventName: 'update:modelValue', value: Date | Date[]): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $emit(eventName: 'month-change', e: { month: number, year: number }): this;
    $emit(eventName: 'year-change', e: { month: number, year: number }): this;
    $emit(eventName: 'date-select', value: Date): this;
    $emit(eventName: 'today-click', value: Date): this;
    $emit(eventName: 'clear-click', event: Event): this;
    $slots: {
        header: VNode[];
        date: VNode[];
        footer: VNode[];
    };
}

export default Calendar;

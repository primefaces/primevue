import Vue, { VNode } from 'vue';

export interface LocaleSettings {
    firstDayOfWeek?: number;
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    today: string;
    clear: string;
    dateFormat: string;
    weekHeader?: string;
}

export declare class Calendar extends Vue {
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
    panelStyle?: string;
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
    locale?: LocaleSettings;
    appendTo?: string;
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
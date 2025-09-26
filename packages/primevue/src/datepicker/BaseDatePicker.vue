<script>
import BaseInput from '@primevue/core/baseinput';
import DatePickerStyle from 'primevue/datepicker/style';

export default {
    name: 'BaseDatePicker',
    extends: BaseInput,
    props: {
        selectionMode: {
            type: String,
            default: 'single'
        },
        dateFormat: {
            type: String,
            default: null
        },
        updateModelType: {
            type: String,
            default: 'date'
        },
        inline: {
            type: Boolean,
            default: false
        },
        showOtherMonths: {
            type: Boolean,
            default: true
        },
        selectOtherMonths: {
            type: Boolean,
            default: false
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        iconDisplay: {
            type: String,
            default: 'button'
        },
        icon: {
            type: String,
            default: undefined
        },
        prevIcon: {
            type: String,
            default: undefined
        },
        nextIcon: {
            type: String,
            default: undefined
        },
        incrementIcon: {
            type: String,
            default: undefined
        },
        decrementIcon: {
            type: String,
            default: undefined
        },
        numberOfMonths: {
            type: Number,
            default: 1
        },
        responsiveOptions: Array,
        breakpoint: {
            type: String,
            default: '769px'
        },
        view: {
            type: String,
            default: 'date'
        },
        minDate: {
            type: Date,
            value: null
        },
        maxDate: {
            type: Date,
            value: null
        },
        disabledDates: {
            type: Array,
            value: null
        },
        disabledDays: {
            type: Array,
            value: null
        },
        maxDateCount: {
            type: Number,
            value: null
        },
        showOnFocus: {
            type: Boolean,
            default: true
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        showButtonBar: {
            type: Boolean,
            default: false
        },
        shortYearCutoff: {
            type: String,
            default: '+10'
        },
        showTime: {
            type: Boolean,
            default: false
        },
        timeOnly: {
            type: Boolean,
            default: false
        },
        hourFormat: {
            type: String,
            default: '24'
        },
        stepHour: {
            type: Number,
            default: 1
        },
        stepMinute: {
            type: Number,
            default: 1
        },
        stepSecond: {
            type: Number,
            default: 1
        },
        showSeconds: {
            type: Boolean,
            default: false
        },
        hideOnDateTimeSelect: {
            type: Boolean,
            default: false
        },
        hideOnRangeSelection: {
            type: Boolean,
            default: false
        },
        timeSeparator: {
            type: String,
            default: ':'
        },
        showWeek: {
            type: Boolean,
            default: false
        },
        manualInput: {
            type: Boolean,
            default: true
        },
        showClear: {
            type: Boolean,
            default: false
        },
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        readonly: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        required: {
            type: Boolean,
            default: null
        },
        inputId: {
            type: String,
            default: null
        },
        inputClass: {
            type: [String, Object],
            default: null
        },
        inputStyle: {
            type: Object,
            default: null
        },
        panelClass: {
            type: [String, Object],
            default: null
        },
        panelStyle: {
            type: Object,
            default: null
        },
        todayButtonProps: {
            type: Object,
            default() {
                return { severity: 'secondary', text: true, size: 'small' };
            }
        },
        clearButtonProps: {
            type: Object,
            default() {
                return { severity: 'secondary', text: true, size: 'small' };
            }
        },
        navigatorButtonProps: {
            type: Object,
            default() {
                return { severity: 'secondary', text: true, rounded: true };
            }
        },
        timepickerButtonProps: {
            type: Object,
            default() {
                return { severity: 'secondary', text: true, rounded: true };
            }
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: DatePickerStyle,
    provide() {
        return {
            $pcDatePicker: this,
            $parentInstance: this
        };
    }
};
</script>

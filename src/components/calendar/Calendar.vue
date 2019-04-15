<template>
    <span :class="containerClass">
        <CalendarInputText v-if="!inline" type="text" v-bind="$attrs" v-on="listeners" :value="inputFieldValue"  />
        <CalendarButton v-if="showIcon" :icon="icon" tabindex="-1" class="p-datepicker-trigger p-calendar-button" :disabled="$attrs.disabled" />
        <div :class="panelStyleClass">
            <div class="p-datepicker-group" v-for="(month,i) of months" :key="month.month + month.year">
                <div class="p-datepicker-header">
                    <button class="p-datepicker-prev p-link" v-if="i === 0">
                        <span class="p-datepicker-prev-icon pi pi-chevron-left"></span>
                    </button>
                    <button class="p-datepicker-next p-link" v-if="numberOfMonths === 1 ? true : (i === numberOfMonths -1)">
                        <span class="p-datepicker-next-icon pi pi-chevron-right"></span>
                    </button>
                    <div class="p-datepicker-title">
                        <span class="p-datepicker-month" v-if="monthNavigator && (view !== 'month')">{{locale.monthNames[month.month]}}</span>
                        <span class="p-datepicker-year" v-if="!yearNavigator">{{view === 'month' ? currentYear : month.year}}</span>
                    </div>
                </div>
                <div class="p-datepicker-calendar-container" *ngIf="view ==='date'">
                    <table class="p-datepicker-calendar">
                        <thead>
                            <tr>
                                <th scope="col" *ngFor="let weekDay of weekDays;let begin = first; let end = last">
                                    <span>{{weekDay}}</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="week of month.dates" :key="week[0].day + week[0].month">
                                <td v-for="date of week" :key="date.day" :class="{'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today}">
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
import InputText from '../inputtext/InputText';
import Button from '../button/Button';

export default {
    inheritAttrs: false,
    props: {
        value: null,
        timeOnly: {
            type: Boolean,
            default: false
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        inline: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: 'pi pi-calendar'
        },
        numberOfMonths: {
            type: Number,
            default: 1
        },
        view: {
            type: String,
            default: 'date'
        },
        touchUI: {
            type: Boolean,
            default: false
        },
        monthNavigator: {
            type: Boolean,
            default: false
        },
        yearNavigator: {
            type: Boolean,
            default: false
        },
        panelClass: String,
        panelStyle: null,
        locale: {
            type: Object,
            default: {
                firstDayOfWeek: 0,
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
                monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
                monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                today: 'Today',
                clear: 'Clear',
                dateFormat: 'mm/dd/yy'
            }
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => {
                    this.$emit('input', event)
                }
            };
        },
        containerClass() {
            return [
                'p-calendar',
                {
                    'p-calendar-w-btn': this.showIcon, 
                    'p-calendar-timeonly': this.timeOnly,
                    'p-inputwrapper-filled': this.value
                }
            ];
        },
        panelStyleClass() {
            return [
                'p-datepicker p-component',
                {
                    'p-datepicker-inline': this.inline,
                    'p-input-overlay': !this.inline,
                    'p-shadow': !this.inline,
                    'p-disabled': this.$attrs.disabled,
                    'p-datepicker-timeonly': this.timeOnly,
                    'p-datepicker-multiple-month': this.numberOfMonths > 1, 
                    'p-datepicker-monthpicker': (this.view === 'month'), 
                    'p-datepicker-touch-ui': this.touchUI
                }
            ];
        },
        inputFieldValue() {
            return '';
        }
    },
    components: {
        'CalendarInputText': InputText,
        'CalendarButton': Button
    }
}
</script>

<style>
.p-calendar {
    position: relative;
    display: inline-block;
}

.p-calendar .p-calendar-button {
    position: absolute;
    height: 100%;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    width: 2em;
    border-left: 0 none;
}

.p-calendar .p-calendar-button:enabled:hover,
.p-calendar .p-calendar-button:focus {
    border-left: 0 none;
}

.p-calendar .p-datepicker {
    min-width: 100%;
}

/* Fluid */
.p-fluid .p-calendar {
    width: 100%;
}

.p-fluid .p-calendar-button {
    width: 2em;
}

.p-fluid .p-datepicker-buttonbar button {
    width: auto;
}

.p-fluid .p-calendar.p-calendar-w-btn .p-inputtext {
    width: calc(100% - 2em);
}

/* Datepicker */
.p-datepicker {
	width: auto;
	padding: .2em;
	display: none;
    position: absolute;
}

.p-datepicker.p-datepicker-inline {
    display: inline-block;
    position: static;
}

.p-datepicker .p-datepicker-group {
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 0;
}

/* Header */
.p-datepicker .p-datepicker-header {
	position: relative;
	padding: .5em 0;
}
.p-datepicker .p-datepicker-prev,
.p-datepicker .p-datepicker-next {
	position: absolute;
	top: .5em;
	width: 1.8em;
    height: 1.8em;
    cursor: pointer;
}

.p-datepicker .p-datepicker-prev {
	left: .125em;
}
.p-datepicker .p-datepicker-next {
	right: .125em;
}

.p-datepicker .p-datepicker-prev span,
.p-datepicker .p-datepicker-next span {
	display: block;
	position: absolute;
	left: 50%;
	top: 50%;
    margin-top: -.5em;
    margin-left: -.5em;
}

.p-datepicker .p-datepicker-title {
	margin: 0 2.3em;
	line-height: 1.8em;
	text-align: center;
}
.p-datepicker .p-datepicker-title select {
	font-size: 1em;
	margin: .125em 0;
    vertical-align: middle;
}
.p-datepicker select.p-datepicker-month {
    margin-right: .25em;
}
.p-datepicker span.p-datepicker-year {
	margin-left: .25em;
}

/* Multiple Month DatePicker */
.p-datepicker-multiple-month .p-datepicker-group {
    display: table-cell;
    border-left-width: 0;
    border-top-width: 0;
    border-bottom-width: 0;
    border-right-width: 1px;
}

/* DatePicker Table */
.p-datepicker table {
	width: 100%;
	font-size: .9em;
	border-collapse: collapse;
	margin: 0 0 .4em;
}
.p-datepicker th {
	padding: .5em;
	text-align: center;
	font-weight: bold;
	border: 0;
}
.p-datepicker td {
	border: 0;
	padding: 0;
}
.p-datepicker td > span,
.p-datepicker td > a {
	display: block;
	padding: .5em;
	text-align: right;
	text-decoration: none;
}

.p-datepicker td a {
    cursor: pointer;
}

.p-datepicker .p-datepicker-buttonbar,
.p-datepicker .p-datepicker-footer {
	padding: .5em;
}

.p-datepicker .p-datepicker-buttonbar:after {
    content: "";
    display: table;
    clear: both;
}

.p-datepicker .p-datepicker-buttonbar > button:last-child {
    float: right;
}

.p-calendar.p-calendar-w-btn input {
    -moz-border-radius-topright: 0px;
    -webkit-border-top-right-radius: 0px;
    -khtml-border-top-right-radius: 0px;
    border-top-right-radius: 0px;
    -moz-border-radius-bottomright: 0px;
    -webkit-border-bottom-right-radius: 0px;
    -khtml-border-bottom-right-radius: 0px;
    border-bottom-right-radius: 0px;
}

/* Month Picker */
.p-monthpicker .p-monthpicker-month {
    width: 33.3%;
    display: inline-block;
    text-align: center;
    padding: .5em;
    cursor: pointer;
}

.p-datepicker-monthpicker select.p-datepicker-year {
    width: auto;
}

/* Time Picker */
.p-timepicker {
    text-align: center;
    padding: .5em 0;
}

.p-timepicker > div {
    display: inline-block;
    margin-left: .5em;
    min-width: 1.5em;
}

.p-timepicker > .p-minute-picker,
.p-timepicker > .p-second-picker {
    margin-left: 0;
}

.p-timepicker > .p-separator {
    margin-left: 0px;
    min-width: .75em;
}

.p-timepicker > .p-separator .p-separator-spacer {
    visibility: hidden;
    display: block;
}

.p-timepicker > div button {
    display: block;
    cursor: pointer;
}

.p-timepicker > div button:last-child {
    margin-top: .3em;
}

input[type=text]::-ms-clear {
    display: none;
}

/* Touch UI */
.p-datepicker-touch-ui,
.p-calendar .p-datepicker-touch-ui {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 80vw;
    transform: translate(-50%, -50%);
}

.p-datepicker-touch-ui.p-datepicker th {
	padding: 2em 0;
}
.p-datepicker-touch-ui.p-datepicker td {
	padding: 0;
}
.p-datepicker-touch-ui.p-datepicker td span,
.p-datepicker-touch-ui.p-datepicker td a {
	padding: 2em 0;
}

.p-datepicker-touch-ui .p-timepicker {
    padding: 1em 0;
}

.p-datepicker-touch-ui .p-timepicker > div a {
    font-size: 2em;
}

.p-datepicker-mask {
    position: fixed;
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 40em) {
    .p-datepicker-multiple-month {
        width: 17em;
        overflow: auto;
    }

    .p-datepicker-touch-ui.p-datepicker th {
        padding: 1em 0;
    }

    .p-datepicker-touch-ui.p-datepicker td span,
    .p-datepicker-touch-ui.p-datepicker td a {
        padding: 1em 0;
    }
}

</style>
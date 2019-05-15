<template>
    <span :class="containerClass">
        <CalendarInputText ref="input" v-if="!inline" type="text" v-bind="$attrs" v-on="listeners" :value="inputFieldValue"  />
        <CalendarButton v-if="showIcon" :icon="icon" tabindex="-1" class="p-datepicker-trigger p-calendar-button" :disabled="$attrs.disabled" @click="onButtonClick" />
        <transition name="p-input-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div ref="overlay" :class="panelStyleClass" v-if="inline ? true : overlayVisible">
                <div class="p-datepicker-group" v-for="(month,i) of months" :key="month.month + month.year">
                    <div class="p-datepicker-header">
                        <button class="p-datepicker-prev p-link" v-if="i === 0" @click="navBackward($event)">
                            <span class="p-datepicker-prev-icon pi pi-chevron-left"></span>
                        </button>
                        <button class="p-datepicker-next p-link" v-if="numberOfMonths === 1 ? true : (i === numberOfMonths - 1)"  @click="navForward($event)">
                            <span class="p-datepicker-next-icon pi pi-chevron-right"></span>
                        </button>
                        <div class="p-datepicker-title">
                            <span class="p-datepicker-month" v-if="!monthNavigator && (view !== 'month')">{{locale.monthNames[month.month]}}</span>
                            <select class="p-datepicker-month" v-if="monthNavigator && (view !== 'month') && numberOfMonths === 1" @change="onMonthDropdownChange($event.target.value)">
                                <option :value="index" v-for="(monthName, index) of locale.monthNames" :key="monthName" :selected="index === month.month">{{monthName}}</option>
                            </select>
                            <span class="p-datepicker-year" v-if="!yearNavigator">{{view === 'month' ? currentYear : month.year}}</span>
                            <select class="p-datepicker-year" v-if="yearNavigator && numberOfMonths === 1" @change="onYearDropdownChange($event.target.value)">
                                <option :value="year" v-for="year of yearOptions" :key="year" :selected="year === currentYear">{{year}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="p-datepicker-calendar-container" v-if="view ==='date'">
                        <table class="p-datepicker-calendar">
                            <thead>
                                <tr>
                                    <th scope="col" v-for="weekDay of weekDays" :key="weekDay">
                                        <span>{{weekDay}}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="week of month.dates" :key="week[0].day + '' + week[0].month">
                                    <td v-for="date of week" :key="date.day + '' + date.month" :class="{'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today}">
                                        <span :class="{'p-highlight': isSelected(date), 'p-disabled': !date.selectable}"
                                        @click="onDateSelect(date)" draggable="false">{{date.day}}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </transition>
    </span>
</template>

<script>
import InputText from '../inputtext/InputText';
import Button from '../button/Button';
import DomHandler from '../utils/DomHandler';

export default {
    inheritAttrs: false,
    props: {
        value: null,
        defaultDate: {
            type: Date,
            default: null
        },
        selectionMode: {
            type: String,
            default: 'single'
        },
        dateFormat: {
            type: String,
            default: 'mm/dd/yy'
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
        yearRange: {
            type: String,
            default: null
        },
        panelClass: {
            type: String
        },
        panelStyle: {
            type: null
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
        appendTo: {
            type: null
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
        keepInvalid: {
            type: Boolean,
            default: false
        },
        hideOnDateTimeSelect: {
            type: Boolean,
            default: false
        },
        timeSeparator: {
            type: String,
            default: ':'
        },
        locale: {
            type: Object,
            default: () => {
                return {
                    firstDayOfWeek: 0,
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
                    monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
                    monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                    today: 'Today',
                    clear: 'Clear',
                    dateFormat: 'mm/dd/yy',
                    weekHeader: 'Sm'
                }
            }
        }
    },
    created() {
        let viewDate = null;
        if (this.defaultDate) {
            viewDate = this.defaultDate;
        }
        else {
            let propValue = this.value;
            if (propValue && Array.isArray(propValue)) {
                propValue = propValue[0];
            }

            viewDate = propValue || new Date();
        }
  
        this.currentMonth = viewDate.getMonth();
        this.currentYear = viewDate.getFullYear();
    },
    data() {
        return {
            currentMonth: null,
            currentYear: null,
            currentHour: null,
            currentMinute: null,
            currentSecond: null,
            overlayVisible: false
        }
    },
    outsideClickListener: null,
    methods: {
        isSelected(dateMeta) {
            if (this.value) {
                if (this.isSingleSelection()) {
                    return this.isDateEquals(this.value, dateMeta);
                }
                else if (this.isMultipleSelection()) {
                    let selected = false;
                    for (let date of this.value) {
                        selected = this.isDateEquals(date, dateMeta);
                        if (selected) {
                            break;
                        }
                    }
                    
                    return selected;
                }
                else if( this.isRangeSelection()) {
                    if (this.value[1])
                        return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
                    else {
                        return this.isDateEquals(this.value[0], dateMeta);
                    }
                        
                }
            }
            else {
                return false;
            }         
        },
        isDateEquals(value, dateMeta) {
            if (value)
                return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
            else
                return false;
        },
        isDateBetween(start, end, dateMeta) {
            let between = false;
            if (start && end) {
                let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
                return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
            }
            
            return between;
        },
        getFirstDayOfMonthIndex(month, year) {
            let day = new Date();
            day.setDate(1);
            day.setMonth(month);
            day.setFullYear(year);
            
            let dayIndex = day.getDay() + this.sundayIndex;
            return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
        },
        getDaysCountInMonth(month, year) {
            return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },
        getDaysCountInPrevMonth(month, year) {
            let prev = this.getPreviousMonthAndYear(month, year);
            return this.getDaysCountInMonth(prev.month, prev.year);
        },
        getPreviousMonthAndYear(month, year) {
            let m, y;
            
            if (month === 0) {
                m = 11;
                y = year - 1;
            }
            else {
                m = month - 1;
                y = year;
            }
            
            return {'month':m, 'year': y};
        },
        getNextMonthAndYear(month, year) {
            let m, y;
            
            if (month === 11) {
                m = 0;
                y = year + 1;
            }
            else {
                m = month + 1;
                y = year;
            }
            
            return {'month':m,'year':y};
        },
        daylightSavingAdjust(date) {
            if (!date) {
                return null;
            }

            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            
            return date;
        },
        isToday(today, day, month, year) {
            return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
        },
        isSelectable(day, month, year, otherMonth) {
            let validMin = true;
            let validMax = true;
            let validDate = true;
            let validDay = true;

            if (otherMonth && !this.selectOtherMonths) {
                return false;
            }
            
            if (this.minDate) {
                if (this.minDate.getFullYear() > year) {
                    validMin = false;
                }
                else if (this.minDate.getFullYear() === year) {
                    if (this.minDate.getMonth() > month) {
                        validMin = false;
                    }
                    else if (this.minDate.getMonth() === month) {
                        if (this.minDate.getDate() > day) {
                            validMin = false;
                        }
                    }
                }
            }
            
            if (this.maxDate) {
                if (this.maxDate.getFullYear() < year) {
                    validMax = false;
                }
                else if (this.maxDate.getFullYear() === year) {
                    if (this.maxDate.getMonth() < month) {
                        validMax = false;
                    }
                    else if (this.maxDate.getMonth() === month) {
                        if (this.maxDate.getDate() < day) {
                            validMax = false;
                        }
                    }
                }
            }
            
            if (this.disabledDates) {
                validDate = !this.isDateDisabled(day,month,year);
            }
        
            if (this.disabledDays) {
                validDay = !this.isDayDisabled(day,month,year)
            }
            
            return validMin && validMax && validDate && validDay;
        },
        onOverlayEnter() {
            if (this.autoZIndex) {
                this.$refs.overlay.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
            this.alignOverlay();
            this.bindOutsideClickListener();
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
        },
        navBackward(event) {
            event.preventDefault();

            if (this.$attrs.disabled) {
                return;
            }

            if (this.view === 'month') {
                this.decrementYear();
            }
            else {
                if (this.currentMonth === 0) {
                    this.currentMonth = 11;
                    this.decrementYear();
                }
                else {
                    this.currentMonth--;
                }
            
                this.$emit('month-change', {month: this.currentMonth + 1, year: this.currentYear});
            }
        },
        navForward(event) {
            event.preventDefault();

            if (this.$attrs.disabled) {
                return;
            }

            if (this.view === 'month') {
                this.incrementYear();
            }
            else {
                if (this.currentMonth === 11) {
                    this.currentMonth = 0;
                    this.incrementYear();
                }
                else {
                    this.currentMonth++;
                }
                
                this.$emit('month-change', {month: this.currentMonth + 1, year: this.currentYear});
            }
        },
        decrementYear() {
            this.currentYear--;
        },
        incrementYear() {
            this.currentYear++;
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.isOutsideClicked(event)) {
                        this.overlayVisible = false;
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isOutsideClicked(event) {
            return !(this.$el.isSameNode(event.target) || this.isNavIconClicked(event) || 
                    this.$el.contains(event.target) || (this.$refs.overlay && this.$refs.overlay.contains(event.target)));
        },
        isNavIconClicked(event) {
            return (DomHandler.hasClass(event.target, 'p-datepicker-prev') || DomHandler.hasClass(event.target, 'p-datepicker-prev-icon')
                    || DomHandler.hasClass(event.target, 'p-datepicker-next') || DomHandler.hasClass(event.target, 'p-datepicker-next-icon'));
        },
        alignOverlay() {
            if (this.$refs.overlay) {
                if (this.appendTo)
                    DomHandler.absolutePosition(this.$refs.overlay, this.$el);
                else
                    DomHandler.relativePosition(this.$refs.overlay, this.$el);
            }        
        },
        onButtonClick() {
            if (!this.overlayVisible) {
                this.$refs.input.$el.focus();
                this.overlayVisible = true;
            }
            else {
                this.overlayVisible = false;
            }
        },
        isDateDisabled(day, month, year) {
            if (this.disabledDates) {
                for (let disabledDate of this.disabledDates) {
                    if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
                        return true;
                    }
                }
            }
            
            return false;
        },
        isDayDisabled(day, month, year) {
            if (this.disabledDays) {
                let weekday = new Date(year, month, day);
                let weekdayNumber = weekday.getDay();
                return this.disabledDays.indexOf(weekdayNumber) !== -1;
            }
            return false;
        },
        onMonthDropdownChange(value) {
            this.currentMonth = parseInt(value);
            this.$emit('month-change', {month: this.currentMonth + 1, year: this.currentYear});
        },
        onYearDropdownChange(value) {
            this.currentYear = parseInt(value);
            this.$emit('year-change', {month: this.currentMonth + 1, year: this.currentYear});
        },
        onDateSelect(dateMeta) {
            if (this.$attrs.disabled || !dateMeta.selectable) {
                return;
            }
            
            if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
                let newValue = this.value.filter((date, i) => !this.isDateEquals(date, dateMeta));
                this.updateModel(newValue);
            }
            else {
                if (this.shouldSelectDate(dateMeta)) {
                    if (dateMeta.otherMonth) {
                        this.currentMonth = dateMeta.month;
                        this.currentYear = dateMeta.year;
                        this.selectDate(dateMeta);
                    }
                    else {
                        this.selectDate(dateMeta);
                    }
                }
            }
            
            if (this.isSingleSelection() && (!this.showTime || this.hideOnDateTimeSelect)) {
                setTimeout(() => {
                    this.overlayVisible = false;

                    if (this.mask) {
                        this.disableModality();
                    }
                }, 150);
            }
        },
        selectDate(dateMeta) {
            let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
            
            if (this.showTime) {
                if (this.hourFormat === '12' && this.pm && this.currentHour != 12)
                    date.setHours(this.currentHour + 12);
                else
                    date.setHours(this.currentHour);

                date.setMinutes(this.currentMinute);
                date.setSeconds(this.currentSecond);
            }
            
            if (this.minDate && this.minDate > date) {
                date = this.minDate;
                this.currentHour = date.getHours();
                this.currentMinute = date.getMinutes();
                this.currentSecond = date.getSeconds();
            }
            
            if (this.maxDate && this.maxDate < date) {
                date = this.maxDate;
                this.currentHour = date.getHours();
                this.currentMinute = date.getMinutes();
                this.currentSecond = date.getSeconds();
            }
            
            if (this.isSingleSelection()) {
                this.updateModel(date);
            }
            else if (this.isMultipleSelection()) {
                this.updateModel(this.value ? [...this.value, date] : [date]);
            }
            else if (this.isRangeSelection()) {
                if (this.value && this.value.length) {
                    let startDate = this.value[0];
                    let endDate = this.value[1];
                    
                    if (!endDate && date.getTime() >= startDate.getTime()) {
                        endDate = date;
                    }
                    else {
                        startDate = date;
                        endDate = null;
                    }
                    
                    this.updateModel([startDate, endDate]);
                }
                else {
                    this.updateModel([date, null]);
                }
            }
            
            this.$emit('select', date);
        },
        updateModel(value) {
            this.$emit('input', value);
        },
        shouldSelectDate(dateMeta) {
            if (this.isMultipleSelection())
                return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;
            else
                return true;
        },
        isSingleSelection() {
            return this.selectionMode === 'single';
        },
        isRangeSelection() {
            return this.selectionMode === 'range';
        },
        isMultipleSelection() {
            return this.selectionMode === 'multiple';
        },
        formatDateTime(date) {
            let formattedValue = null;
            if (date) {
                if(this.timeOnly) {
                    formattedValue = this.formatTime(date);
                }
                else {
                    formattedValue = this.formatDate(date, this.datePattern);
                    if(this.showTime) {
                        formattedValue += ' ' + this.formatTime(date);
                    }
                }
            }
            
            return formattedValue;
        },
        formatDate(date, format) {
            if (!date) {
                return '';
            }

            let iFormat;
            const lookAhead = (match) => {
                const matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                if (matches) {
                    iFormat++;
                }
                return matches;
            },
                formatNumber = (match, value, len) => {
                    let num = '' + value;
                    if (lookAhead(match)) {
                        while (num.length < len) {
                            num = '0' + num;
                        }
                    }
                    return num;
                },
                formatName = (match, value, shortNames, longNames) => {
                    return (lookAhead(match) ? longNames[value] : shortNames[value]);
                };
            let output = '';
            let literal = false;

            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
                            literal = false;
                        } else {
                            output += format.charAt(iFormat);
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                            case 'd':
                                output += formatNumber('d', date.getDate(), 2);
                                break;
                            case 'D':
                                output += formatName('D', date.getDay(), this.locale.dayNamesShort, this.locale.dayNames);
                                break;
                            case 'o':
                                output += formatNumber('o',
                                Math.round((
                                    new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() -
                                    new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case 'm':
                                output += formatNumber('m', date.getMonth() + 1, 2);
                                break;
                            case 'M':
                                output += formatName('M',date.getMonth(), this.locale.monthNamesShort, this.locale.monthNames);
                                break;
                            case 'y':
                                output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + (date.getFullYear() % 100);
                                break;
                            case '@':
                                output += date.getTime();
                                break;
                            case '!':
                                output += date.getTime() * 10000 + this.ticksTo1970;
                                break;
                            case '\'':
                                if (lookAhead('\'')) {
                                    output += '\'';
                                } else {
                                    literal = true;
                                }
                                break;
                            default:
                                output += format.charAt(iFormat);
                        }
                    }
                }
            }
            return output;
        },
    
        formatTime(date) {
            if (!date) {
                return '';
            }
            
            let output = '';
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            
            if (this.hourFormat === '12' && hours > 11 && hours !== 12) {
                hours -= 12;
            }
            
            if (this.hourFormat === '12') {
                output += hours === 0 ? 12 : (hours < 10) ? '0' + hours : hours;
            } 
            else {
                output += (hours < 10) ? '0' + hours : hours;
            }
            output += ':';
            output += (minutes < 10) ? '0' + minutes : minutes;
            
            if (this.showSeconds) {
                output += ':';
                output += (seconds < 10) ? '0' + seconds : seconds;
            }
            
            if (this.hourFormat === '12') {
                output += date.getHours() > 11 ? ' PM' : ' AM';
            }
            
            return output;
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => {
                    this.$emit('input', event)
                },
                focus: event => {
                    this.focus = true;
                    if (this.showOnFocus) {
                        this.overlayVisible = true;
                    }
                    this.$emit('focus', event)
                },
                blur: event => {
                    this.$emit('blur', event);
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
            let formattedValue = '';

            if (this.value) {
                try {
                    if (this.isSingleSelection()) {
                        formattedValue = this.formatDateTime(this.value);
                    }
                    else if (this.isMultipleSelection()) {
                        for(let i = 0; i < this.value.length; i++) {
                            let dateAsString = this.formatDateTime(this.value[i]);
                            formattedValue += dateAsString;
                            if(i !== (this.value.length - 1)) {
                                formattedValue += ', ';
                            }
                        }
                    }
                    else if (this.isRangeSelection()) {
                        if (this.value && this.value.length) {
                            let startDate = this.value[0];
                            let endDate = this.value[1];
                            
                            formattedValue = this.formatDateTime(startDate);
                            if (endDate) {
                                formattedValue += ' - ' + this.formatDateTime(endDate);
                            }
                        }
                    }
                } 
                catch(err) {
                    formattedValue = this.value;
                }
            }
            
            return formattedValue;
        },
        months() {
            let months = [];
            for (let i = 0 ; i < this.numberOfMonths; i++) {
                let month = this.currentMonth + i;
                let year = this.currentYear;
                if (month > 11) {
                    month = month % 11 - 1;
                    year = year + 1;
                }

                let dates = [];
                let firstDay = this.getFirstDayOfMonthIndex(month, year);
                let daysLength = this.getDaysCountInMonth(month, year);
                let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
                let dayNo = 1;
                let today = new Date();
                
                for (let i = 0; i < 6; i++) {
                    let week = [];
                    
                    if (i == 0) {
                        for (let j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {
                            let prev = this.getPreviousMonthAndYear(month, year);
                            week.push({day: j, month: prev.month, year: prev.year, otherMonth: true,
                                    today: this.isToday(today, j, prev.month, prev.year), selectable: this.isSelectable(j, prev.month, prev.year, true)});
                        }
                        
                        let remainingDaysLength = 7 - week.length;
                        for (let j = 0; j < remainingDaysLength; j++) {
                            week.push({day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                                    selectable: this.isSelectable(dayNo, month, year, false)});
                            dayNo++;
                        }
                    }
                    else {
                        for (let j = 0; j < 7; j++) {
                            if (dayNo > daysLength) {
                                let next = this.getNextMonthAndYear(month, year);
                                week.push({day: dayNo - daysLength, month: next.month, year: next.year, otherMonth: true,
                                            today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                                            selectable: this.isSelectable((dayNo - daysLength), next.month, next.year, true)});
                            }
                            else {
                                week.push({day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                                    selectable: this.isSelectable(dayNo, month, year, false)});
                            }
                            
                            dayNo++;
                        }
                    }
                    
                    dates.push(week);
                }

                months.push({
                    month: month,
                    year: year,
                    dates: dates
                });
            }

            return months;
        },
        weekDays() {
            let weekDays = [];
            let dayIndex = this.locale.firstDayOfWeek;
            for (let i = 0; i < 7; i++) {
                weekDays.push(this.locale.dayNamesMin[dayIndex]);
                dayIndex = (dayIndex == 6) ? 0 : ++dayIndex;
            }

            return weekDays;
        },
        ticksTo1970() {
            return (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000);
        },
        sundayIndex() {
            return this.locale.firstDayOfWeek > 0 ? 7 - this.locale.firstDayOfWeek : 0;
        },
        datePattern() {
            return this.dateFormat || this.locale.dateFormat;
        },
        yearOptions() {
            const years = this.yearRange.split(':');
            let yearStart = parseInt(years[0]);
            let yearEnd = parseInt(years[1]);
            let diff = yearEnd - yearStart;
            let yearOptions = [];

            if (this.currentYear < yearStart) {
                this.currentYear = yearEnd;
            }
            else if (this.currentYear > yearEnd) {
                this.currentYear = yearStart;
            }

            for (let i = yearStart; i <= yearEnd; i++) {
                yearOptions.push(i);
            }

            return yearOptions;
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
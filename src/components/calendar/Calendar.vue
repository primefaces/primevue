<template>
    <span :class="containerClass">
        <CalendarInputText ref="input" v-if="!inline" type="text" v-bind="$attrs" v-on="listeners" :value="inputFieldValue" :readonly="!manualInput" :aria-labelledby="ariaLabelledBy" inputmode="none" />
        <CalendarButton v-if="showIcon" :icon="icon" tabindex="-1" class="p-datepicker-trigger" :disabled="$attrs.disabled" @click="onButtonClick" type="button" :aria-label="inputFieldValue"/>
        <transition name="p-connected-overlay" @enter="onOverlayEnter" @after-enter="onOverlayEnterComplete" @leave="onOverlayLeave">
            <div ref="overlay" :class="panelStyleClass" v-if="inline ? true : overlayVisible" :role="inline ? null : 'dialog'" :aria-labelledby="ariaLabelledBy">
                <template v-if="!timeOnly">
                    <div class="p-datepicker-group-container">
                        <div class="p-datepicker-group" v-for="(month,groupIndex) of months" :key="month.month + month.year">
                            <div class="p-datepicker-header">
                                <slot name="header"></slot>
                                <button class="p-datepicker-prev p-link" v-if="groupIndex === 0" @click="onPrevButtonClick" type="button" @keydown="onContainerButtonKeydown" v-ripple :disabled="$attrs.disabled">
                                    <span class="p-datepicker-prev-icon pi pi-chevron-left"></span>
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
                                <button class="p-datepicker-next p-link" v-if="numberOfMonths === 1 ? true : (groupIndex === numberOfMonths - 1)"
                                    @click="onNextButtonClick" type="button" @keydown="onContainerButtonKeydown" v-ripple :disabled="$attrs.disabled">
                                    <span class="p-datepicker-next-icon pi pi-chevron-right"></span>
                                </button>
                            </div>
                            <div class="p-datepicker-calendar-container" v-if="view ==='date'">
                                <table class="p-datepicker-calendar">
                                    <thead>
                                        <tr>
                                            <th scope="col" v-if="showWeek" class="p-datepicker-weekheader p-disabled">
                                                <span>{{locale['weekHeader']}}</span>
                                            </th>
                                            <th scope="col" v-for="weekDay of weekDays" :key="weekDay">
                                                <span>{{weekDay}}</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(week,i) of month.dates" :key="week[0].day + '' + week[0].month">
                                            <td v-if="showWeek" class="p-datepicker-weeknumber">
                                                <span class="p-disabled">
                                                    <span style="visibility:hidden" v-if="month.weekNumbers[i] < 10">0</span>
                                                    {{month.weekNumbers[i]}}
                                                </span>
                                            </td>
                                            <td v-for="date of week" :key="date.day + '' + date.month" :class="{'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today}">
                                                <span :class="{'p-highlight': isSelected(date), 'p-disabled': !date.selectable}" @click="onDateSelect($event, date)"
                                                    draggable="false" @keydown="onDateCellKeydown($event,date,groupIndex)" v-ripple>
                                                    <slot name="date" :date="date">{{date.day}}</slot>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="p-monthpicker" v-if="view === 'month'">
                        <span v-for="(m,i) of monthPickerValues" :key="m" @click="onMonthSelect($event, i)" @keydown="onMonthCellKeydown($event,i)"
                                class="p-monthpicker-month" :class="{'p-highlight': isMonthSelected(i)}" v-ripple>
                            {{m}}
                        </span>
                    </div>
                </template>
                <div class="p-timepicker" v-if="showTime||timeOnly">
                    <div class="p-hour-picker">
                        <button class="p-link" @mousedown="onTimePickerElementMouseDown($event, 0, 1)" @mouseup="onTimePickerElementMouseUp($event)" @keydown="onContainerButtonKeydown" v-ripple
                            @mouseleave="onTimePickerElementMouseLeave()" @keydown.enter="onTimePickerElementMouseDown($event, 0, 1)" @keyup.enter="onTimePickerElementMouseUp($event)" type="button">
                            <span class="pi pi-chevron-up"></span>
                        </button>
                        <span>{{formattedCurrentHour}}</span>
                        <button class="p-link" @mousedown="onTimePickerElementMouseDown($event, 0, -1)" @mouseup="onTimePickerElementMouseUp($event)" @keydown="onContainerButtonKeydown" v-ripple
                            @mouseleave="onTimePickerElementMouseLeave()" @keydown.enter="onTimePickerElementMouseDown($event, 0, -1)" @keyup.enter="onTimePickerElementMouseUp($event)" type="button">
                            <span class="pi pi-chevron-down"></span>
                        </button>
                    </div>
                    <div class="p-separator">
                        <span>{{timeSeparator}}</span>
                    </div>
                    <div class="p-minute-picker">
                        <button class="p-link" @mousedown="onTimePickerElementMouseDown($event, 1, 1)" @mouseup="onTimePickerElementMouseUp($event)" @keydown="onContainerButtonKeydown" v-ripple :disabled="$attrs.disabled"
                            @mouseleave="onTimePickerElementMouseLeave()" @keydown.enter="onTimePickerElementMouseDown($event, 1, 1)" @keyup.enter="onTimePickerElementMouseUp($event)" type="button">
                            <span class="pi pi-chevron-up"></span>
                        </button>
                       <span>{{formattedCurrentMinute}}</span>
                        <button class="p-link" @mousedown="onTimePickerElementMouseDown($event, 1, -1)" @mouseup="onTimePickerElementMouseUp($event)" @keydown="onContainerButtonKeydown" v-ripple :disabled="$attrs.disabled"
                            @mouseleave="onTimePickerElementMouseLeave()" @keydown.enter="onTimePickerElementMouseDown($event, 1, -1)" @keyup.enter="onTimePickerElementMouseUp($event)" type="button">
                            <span class="pi pi-chevron-down"></span>
                        </button>
                    </div>
                    <div class="p-separator" v-if="showSeconds">
                        <span>{{timeSeparator}}</span>
                    </div>
                    <div class="p-second-picker" v-if="showSeconds">
                        <button class="p-link" @mousedown="onTimePickerElementMouseDown($event, 2, 1)" @mouseup="onTimePickerElementMouseUp($event)" @keydown="onContainerButtonKeydown" v-ripple  :disabled="$attrs.disabled"
                            @mouseleave="onTimePickerElementMouseLeave()" @keydown.enter="onTimePickerElementMouseDown($event, 2, 1)" @keyup.enter="onTimePickerElementMouseUp($event)" type="button">
                            <span class="pi pi-chevron-up"></span>
                        </button>
                        <span>{{formattedCurrentSecond}}</span>
                        <button class="p-link" @mousedown="onTimePickerElementMouseDown($event, 2, -1)" @mouseup="onTimePickerElementMouseUp($event)" @keydown="onContainerButtonKeydown" v-ripple  :disabled="$attrs.disabled"
                            @mouseleave="onTimePickerElementMouseLeave()" @keydown.enter="onTimePickerElementMouseDown($event, 2, -1)" @keyup.enter="onTimePickerElementMouseUp($event)" type="button">
                            <span class="pi pi-chevron-down"></span>
                        </button>
                    </div>
                    <div class="p-separator" v-if="hourFormat=='12'">
                        <span>{{timeSeparator}}</span>
                    </div>
                    <div class="p-ampm-picker" v-if="hourFormat=='12'">
                        <button class="p-link" @click="toggleAMPM($event)" type="button" v-ripple :disabled="$attrs.disabled">
                            <span class="pi pi-chevron-up"></span>
                        </button>
                        <span>{{pm ? 'PM' : 'AM'}}</span>
                        <button class="p-link" @click="toggleAMPM($event)" type="button" v-ripple :disabled="$attrs.disabled">
                            <span class="pi pi-chevron-down"></span>
                        </button>
                    </div>
                </div>
                <div class="p-datepicker-buttonbar" v-if="showButtonBar">
                    <CalendarButton type="button" :label="locale['today']" @click="onTodayButtonClick($event)" class="p-button-text" @keydown="onContainerButtonKeydown"/>
                    <CalendarButton type="button" :label="locale['clear']" @click="onClearButtonClick($event)" class="p-button-text" @keydown="onContainerButtonKeydown"/>
                </div>
                <slot name="footer"></slot>
            </div>
        </transition>
    </span>
</template>

<script>
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import InputText from '../inputtext/InputText';
import Button from '../button/Button';
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

export default {
    inheritAttrs: false,
    props: {
        value: null,
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
            type: String,
            default: null
        },
        panelStyle: {
            type: String,
            default: null
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
                    weekHeader: 'Wk'
                }
            }
        },
        ariaLabelledBy: {
            type: String,
            default: null
        },
        appendTo: {
            type: String,
            default: null
        }
    },
    navigationState: null,
    scrollHandler: null,
    outsideClickListener: null,
    maskClickListener: null,
    resizeListener: null,
    mask: null,
    timePickerTimer: null,
    isKeydown: false,
    created() {
        this.updateCurrentMetaData();
    },
    mounted() {
        if (this.inline && !this.$attrs.disabled) {
            this.initFocusableCell();
        }
    },
    updated() {
        if (this.$refs.overlay) {
            this.updateFocus();
        }

        if (this.$refs.input && this.selectionStart != null && this.selectionEnd != null) {
            this.$refs.input.$el.selectionStart = this.selectionStart;
            this.$refs.input.$el.selectionEnd = this.selectionEnd;
            this.selectionStart = null;
            this.selectionEnd = null;
        }
    },
    beforeDestroy() {
        if (this.timePickerTimer) {
            clearTimeout(this.timePickerTimer);
        }

        if (this.mask) {
            this.destroyMask();
        }

        this.restoreAppend();
        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    },
    data() {
        return {
            currentMonth: null,
            currentYear: null,
            currentHour: null,
            currentMinute: null,
            currentSecond: null,
            pm: null,
			focused: false,
            overlayVisible: false
        }
    },
    watch: {
        value() {
            this.updateCurrentMetaData();
        }
    },
    methods: {
        isComparable() {
            return this.value != null && typeof this.value !== 'string';
        },
        isSelected(dateMeta) {
            if (!this.isComparable()) {
                return false;
            }

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

            return false;
        },
        isMonthSelected(month) {
            return this.isComparable() ? (this.value.getMonth() === month && this.value.getFullYear() === this.currentYear) : false;
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
            this.appendContainer();
            this.alignOverlay();
            this.$emit('show');
        },
        onOverlayEnterComplete() {
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.$emit('hide');

            if (this.mask) {
                this.disableModality();
            }
        },
        onPrevButtonClick(event) {
            this.navigationState = {backward: true, button: true};
            this.navBackward(event);
        },
        onNextButtonClick(event) {
            this.navigationState = {backward: false, button: true};
            this.navForward(event);
        },
        navBackward(event) {
            event.preventDefault();

            if (!this.isEnabled()) {
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

                this.$emit('month-change', {month: this.currentMonth, year: this.currentYear});
            }
        },
        navForward(event) {
            event.preventDefault();

            if (!this.isEnabled()) {
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

                this.$emit('month-change', {month: this.currentMonth , year: this.currentYear});
            }
        },
        decrementYear() {
            this.currentYear--;
        },
        incrementYear() {
            this.currentYear++;
        },
        isEnabled() {
            return !this.$attrs.disabled && !this.$attrs.readonly;
        },
        updateCurrentTimeMeta(date) {
            const hours = date.getHours();

            if (this.hourFormat === '12') {
                this.pm = hours > 11;

                if (hours >= 12)
                    this.currentHour = (hours == 12) ? 12 : hours - 12;
                else
                    this.currentHour = (hours == 0) ? 12 : hours;
            }
            else {
                this.currentHour = date.getHours();
            }

            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.isOutsideClicked(event)) {
                        this.overlayVisible = false;
                    }
                };
                document.addEventListener('mousedown', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('mousedown', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, () => {
                    if (this.overlayVisible) {
                        this.overlayVisible = false;
                    }
                });
            }

            this.scrollHandler.bindScrollListener();
        },
        unbindScrollListener() {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    if (this.overlayVisible) {
                        this.overlayVisible = false;
                    }
                };
                window.addEventListener('resize', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                this.resizeListener = null;
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
            if (this.touchUI) {
                this.enableModality();
            }
            else if (this.$refs.overlay) {
                if (this.appendTo)
                    DomHandler.absolutePosition(this.$refs.overlay, this.$el);
                else
                    DomHandler.relativePosition(this.$refs.overlay, this.$el);
            }
        },
        onButtonClick() {
            if (this.isEnabled()) {
                if (!this.overlayVisible) {
                    this.$refs.input.$el.focus();
                    this.overlayVisible = true;
                }
                else {
                    this.overlayVisible = false;
                }
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
        onDateSelect(event, dateMeta) {
            if (this.$attrs.disabled || !dateMeta.selectable) {
                return;
            }

            DomHandler.find(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled)').forEach(cell => cell.tabIndex = -1);

            if (event) {
                event.currentTarget.focus();
            }

            if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
                let newValue = this.value.filter(date => !this.isDateEquals(date, dateMeta));
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

            let modelVal = null;

            if (this.isSingleSelection()) {
                modelVal = date;
            }
            else if (this.isMultipleSelection()) {
                modelVal = this.value ? [...this.value, date] : [date];
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
                    modelVal = [startDate, endDate];
                }
                else {
                    modelVal = [date, null];
                }
            }

            if (modelVal !== null) {
                this.updateModel(modelVal);
            }
            this.$emit('date-select', date);
        },
        updateModel(value) {
            this.$emit('input', value);
        },
        shouldSelectDate() {
            if (this.isMultipleSelection())
                return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;
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
        formatValue(value) {
            if (typeof value === 'string') {
                return value;
            }

            let formattedValue = '';
            if (value) {
                try {
                    if (this.isSingleSelection()) {
                        formattedValue = this.formatDateTime(value);
                    }
                    else if (this.isMultipleSelection()) {
                        for(let i = 0; i < value.length; i++) {
                            let dateAsString = this.formatDateTime(value[i]);
                            formattedValue += dateAsString;
                            if(i !== (value.length - 1)) {
                                formattedValue += ', ';
                            }
                        }
                    }
                    else if (this.isRangeSelection()) {
                        if (value && value.length) {
                            let startDate = value[0];
                            let endDate = value[1];

                            formattedValue = this.formatDateTime(startDate);
                            if (endDate) {
                                formattedValue += ' - ' + this.formatDateTime(endDate);
                            }
                        }
                    }
                }
                catch(err) {
                    formattedValue = value;
                }
            }

            return formattedValue;
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
        },
        onTodayButtonClick(event) {
            let date = new Date();
            let dateMeta = {
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear(),
                otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
                today: true,
                selectable: true
            };

            this.onDateSelect(null, dateMeta);
            this.$emit('today-click', date);
            event.preventDefault();
        },
        onClearButtonClick(event) {
            this.updateModel(null);
            this.overlayVisible = false;
            this.$emit('clear-click', event);
            event.preventDefault();
        },
        onTimePickerElementMouseDown(event, type, direction) {
            if (this.isEnabled()) {
                this.repeat(event, null, type, direction);
                event.preventDefault();
            }
        },
        onTimePickerElementMouseUp(event) {
            if (this.isEnabled()) {
                this.clearTimePickerTimer();
                this.updateModelTime();
                event.preventDefault();
            }
        },
        onTimePickerElementMouseLeave() {
            this.clearTimePickerTimer();
        },
        repeat(event, interval, type, direction) {
            let i = interval||500;

            this.clearTimePickerTimer();
            this.timePickerTimer = setTimeout(() => {
                this.repeat(event, 100, type, direction);
            }, i);

            switch(type) {
                case 0:
                    if (direction === 1)
                        this.incrementHour(event);
                    else
                        this.decrementHour(event);
                break;

                case 1:
                    if (direction === 1)
                        this.incrementMinute(event);
                    else
                        this.decrementMinute(event);
                break;

                case 2:
                    if (direction === 1)
                        this.incrementSecond(event);
                    else
                        this.decrementSecond(event);
                break;
            }
        },
        incrementHour(event) {
            const prevHour = this.currentHour;
            const newHour = this.currentHour + this.stepHour;

            if (this.validateHour(newHour)) {
                if (this.hourFormat == '24')
                    this.currentHour = (newHour >= 24) ? (newHour - 24) : newHour;
                else if (this.hourFormat == '12') {
                    // Before the AM/PM break, now after
                    if (prevHour < 12 && newHour > 11) {
                        this.pm = !this.pm;
                    }

                    this.currentHour = (newHour >= 13) ? (newHour - 12) : newHour;
                }
            }
            event.preventDefault();
        },
        decrementHour(event) {
            const newHour = this.currentHour - this.stepHour;

            if (this.validateHour(newHour)) {
                if (this.hourFormat == '24')
                    this.currentHour = (newHour < 0) ? (24 + newHour) : newHour;
                else if (this.hourFormat == '12') {
                    // If we were at noon/midnight, then switch
                    if (this.currentHour === 12) {
                        this.pm = !this.pm;
                    }
                    this.currentHour = (newHour <= 0) ? (12 + newHour) : newHour;
                }
            }

            event.preventDefault();
        },
        validateHour(hour) {
            let valid = true;
            let value = this.value;
            if (!this.isComparable()) {
                return valid;
            }

            if (this.isRangeSelection()) {
                value = this.value[1] || this.value[0];
            }
            if (this.isMultipleSelection()) {
                value = this.value[this.value.length - 1];
            }
            let valueDateString = value ? value.toDateString() : null;

            if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
                if (this.minDate.getHours() > hour) {
                    valid = false;
                }
            }

            if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
                if (this.maxDate.getHours() < hour) {
                    valid = false;
                }
            }

            return valid;
        },
        incrementMinute(event) {
            let newMinute = this.currentMinute + this.stepMinute;
            if (this.validateMinute(newMinute)) {
                this.currentMinute = (newMinute > 59) ? newMinute - 60 : newMinute;
            }

            event.preventDefault();
        },
        decrementMinute(event) {
            let newMinute = this.currentMinute - this.stepMinute;
            newMinute = (newMinute < 0) ? 60 + newMinute : newMinute;
            if (this.validateMinute(newMinute)) {
                this.currentMinute = newMinute;
            }

            event.preventDefault();
        },
        validateMinute(minute) {
            let valid = true;
            let value = this.value;
            if (!this.isComparable()) {
                return valid;
            }

            if (this.isRangeSelection()) {
                value = this.value[1] || this.value[0];
            }
            if (this.isMultipleSelection()) {
                value = this.value[this.value.length - 1];
            }
            let valueDateString = value ? value.toDateString() : null;
            if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
                if (value.getHours() == this.minDate.getHours()){
                    if (this.minDate.getMinutes() > minute) {
                        valid = false;
                    }
                }
            }

            if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
                if (value.getHours() == this.maxDate.getHours()){
                    if (this.maxDate.getMinutes() < minute) {
                        valid = false;
                    }
                }
            }

            return valid;
        },
        incrementSecond(event) {
            let newSecond = this.currentSecond + this.stepSecond;
            if (this.validateSecond(newSecond)) {
                this.currentSecond = (newSecond > 59) ? newSecond - 60 : newSecond;
            }

            event.preventDefault();
        },
        decrementSecond(event) {
            let newSecond = this.currentSecond - this.stepSecond;
            newSecond = (newSecond < 0) ? 60 + newSecond : newSecond;
            if (this.validateSecond(newSecond)) {
                this.currentSecond = newSecond;
            }

            event.preventDefault();
        },
        validateSecond(second) {
            let valid = true;
            let value = this.value;
            if (!this.isComparable()) {
                return valid;
            }

            if (this.isRangeSelection()) {
                value = this.value[1] || this.value[0];
            }
            if (this.isMultipleSelection()) {
                value = this.value[this.value.length - 1];
            }
            let valueDateString = value ? value.toDateString() : null;

            if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
                if (this.minDate.getSeconds() > second) {
                    valid = false;
                }
            }

            if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
                if (this.maxDate.getSeconds() < second) {
                    valid = false;
                }
            }

            return valid;
        },
        updateModelTime() {
            let value = this.isComparable() ? this.value : new Date();

            if (this.isRangeSelection()) {
                value = this.value[1] || this.value[0];
            }
            if (this.isMultipleSelection()) {
                value = this.value[this.value.length - 1];
            }
            value = value ? new Date(value.getTime()) : new Date();

            if (this.hourFormat == '12') {
                if (this.currentHour === 12)
                    value.setHours(this.pm ? 12 : 0);
                else
                    value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
            }
            else {
                value.setHours(this.currentHour);
            }

            value.setMinutes(this.currentMinute);
            value.setSeconds(this.currentSecond);

            if (this.isRangeSelection()) {
                if (this.value[1])
                    value = [this.value[0], value];
                else
                    value = [value, null];
            }

            if (this.isMultipleSelection()){
                value = [...this.value.slice(0, -1), value];
            }

            this.updateModel(value);
            this.$emit('date-select', value);
        },
        toggleAMPM(event) {
            this.pm = !this.pm;
            this.updateModelTime();
            event.preventDefault();
        },
        clearTimePickerTimer() {
            if (this.timePickerTimer) {
                clearInterval(this.timePickerTimer);
            }
        },
        onMonthSelect(event, index) {
            this.onDateSelect(event, {year: this.currentYear, month: index, day: 1, selectable: true});
        },
        enableModality() {
            if (!this.mask) {
                this.mask = document.createElement('div');
                this.mask.style.zIndex = String(parseInt(this.$refs.overlay.style.zIndex, 10) - 1);
                DomHandler.addMultipleClasses(this.mask, 'p-datepicker-mask p-datepicker-mask-scrollblocker');

                this.maskClickListener = () => {
                    this.overlayVisible = false;
                };
                this.mask.addEventListener('click', this.maskClickListener);

                document.body.appendChild(this.mask);
                DomHandler.addClass(document.body, 'p-overflow-hidden');

                setTimeout(() => {
                    DomHandler.addClass(this.mask, 'p-component-overlay');
                }, 1);
            }
        },
        disableModality() {
            if (this.mask) {
                this.overlayVisible = false;

                DomHandler.addClass(this.mask, 'p-datepicker-mask-leave');
                this.mask.addEventListener('transitionend', () => {
                    this.destroyMask();
                });
            }
        },
        destroyMask() {
            this.mask.removeEventListener('click', this.maskClickListener);
            this.maskClickListener = null;
            document.body.removeChild(this.mask);
            this.mask = null;

            let bodyChildren = document.body.children;
            let hasBlockerMasks;
            for (let i = 0; i < bodyChildren.length; i++) {
                let bodyChild = bodyChildren[i];
                if(DomHandler.hasClass(bodyChild, 'p-datepicker-mask-scrollblocker')) {
                    hasBlockerMasks = true;
                    break;
                }
            }

            if (!hasBlockerMasks) {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        },
        updateCurrentMetaData() {
            const viewDate = this.viewDate;
            this.currentMonth = viewDate.getMonth();
            this.currentYear = viewDate.getFullYear();

            if (this.showTime || this.timeOnly) {
                this.updateCurrentTimeMeta(viewDate);
            }
        },
        isValidSelection(value) {
            let isValid = true;
            if (this.isSingleSelection()) {
                if (!this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {
                    isValid = false;
                }
            } else if (value.every(v => this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false))) {
                if (this.isRangeSelection()) {
                    isValid = value.length > 1 && value[1] > value[0] ? true : false;
                }
            }
            return isValid;
        },
        parseValue(text) {
            if (!text || text.trim().length === 0) {
                return null;
            }

            let value;

            if (this.isSingleSelection()) {
                value = this.parseDateTime(text);
            }
            else if (this.isMultipleSelection()) {
                let tokens = text.split(',');
                value = [];
                for (let token of tokens) {
                    value.push(this.parseDateTime(token.trim()));
                }
            }
            else if (this.isRangeSelection()) {
                let tokens = text.split(' - ');
                value = [];
                for (let i = 0; i < tokens.length; i++) {
                    value[i] = this.parseDateTime(tokens[i].trim());
                }
            }

            return value;
        },
        parseDateTime(text) {
            let date;
            let parts = text.split(' ');

            if (this.timeOnly) {
                date = new Date();
                this.populateTime(date, parts[0], parts[1]);
            }
            else {
                const dateFormat = this.datePattern;
                if (this.showTime) {
                    date = this.parseDate(parts[0], dateFormat);
                    this.populateTime(date, parts[1], parts[2]);
                }
                else {
                    date = this.parseDate(text, dateFormat);
                }
            }

            return date;
        },
        populateTime(value, timeString, ampm) {
            if (this.hourFormat == '12' && !ampm) {
                throw 'Invalid Time';
            }

            this.pm = (ampm === 'PM' || ampm === 'pm');
            let time = this.parseTime(timeString);
            value.setHours(time.hour);
            value.setMinutes(time.minute);
            value.setSeconds(time.second);
        },
        parseTime(value) {
            let tokens = value.split(':');
            let validTokenLength = this.showSeconds ? 3 : 2;
            let regex = (/^[0-9][0-9]$/);

            if (tokens.length !== validTokenLength || !tokens[0].match(regex) || !tokens[1].match(regex) || (this.showSeconds && !tokens[2].match(regex))) {
                throw "Invalid time";
            }

            let h = parseInt(tokens[0]);
            let m = parseInt(tokens[1]);
            let s = this.showSeconds ? parseInt(tokens[2]) : null;

            if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (this.hourFormat == '12' && h > 12) || (this.showSeconds && (isNaN(s) || s > 59))) {
                throw "Invalid time";
            }
            else {
                if (this.hourFormat == '12' && h !== 12 && this.pm) {
                    h+= 12;
                }

                return {hour: h, minute: m, second: s};
            }
        },
        parseDate(value, format) {
            if (format == null || value == null) {
                throw "Invalid arguments";
            }

            value = (typeof value === "object" ? value.toString() : value + "");
            if (value === "") {
                return null;
            }

            let iFormat, dim, extra,
            iValue = 0,
            shortYearCutoff = (typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10)),
            year = -1,
            month = -1,
            day = -1,
            doy = -1,
            literal = false,
            date,
            lookAhead = (match) => {
                let matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                if (matches) {
                    iFormat++;
                }
                return matches;
            },
            getNumber = (match) => {
                let isDoubled = lookAhead(match),
                    size = (match === "@" ? 14 : (match === "!" ? 20 :
                    (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
                    minSize = (match === "y" ? size : 1),
                    digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
                    num = value.substring(iValue).match(digits);
                if (!num) {
                    throw "Missing number at position " + iValue;
                }
                iValue += num[ 0 ].length;
                return parseInt(num[ 0 ], 10);
            },
            getName = (match, shortNames, longNames) => {
                let index = -1;
                let arr = lookAhead(match) ? longNames : shortNames;
                let names = [];

                for (let i = 0; i < arr.length; i++) {
                    names.push([i,arr[i]]);
                }
                names.sort((a,b) => {
                    return -(a[ 1 ].length - b[ 1 ].length);
                });

                for (let i = 0; i < names.length; i++) {
                    let name = names[i][1];
                    if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                        index = names[i][0];
                        iValue += name.length;
                        break;
                    }
                }

                if (index !== -1) {
                    return index + 1;
                } else {
                    throw "Unknown name at position " + iValue;
                }
            },
            checkLiteral = () => {
                if (value.charAt(iValue) !== format.charAt(iFormat)) {
                    throw "Unexpected literal at position " + iValue;
                }
                iValue++;
            };

            if (this.view === 'month') {
                day = 1;
            }

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d":
                            day = getNumber("d");
                            break;
                        case "D":
                            getName("D", this.locale.dayNamesShort, this.locale.dayNames);
                            break;
                        case "o":
                            doy = getNumber("o");
                            break;
                        case "m":
                            month = getNumber("m");
                            break;
                        case "M":
                            month = getName("M", this.locale.monthNamesShort, this.locale.monthNames);
                            break;
                        case "y":
                            year = getNumber("y");
                            break;
                        case "@":
                            date = new Date(getNumber("@"));
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "!":
                            date = new Date((getNumber("!") - this.ticksTo1970) / 10000);
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "'":
                            if (lookAhead("'")) {
                                checkLiteral();
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            checkLiteral();
                    }
                }
            }

            if (iValue < value.length) {
                extra = value.substr(iValue);
                if (!/^\s+/.test(extra)) {
                    throw "Extra/unparsed characters found in date: " + extra;
                }
            }

            if (year === -1) {
                year = new Date().getFullYear();
            } else if (year < 100) {
                year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                    (year <= shortYearCutoff ? 0 : -100);
            }

            if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    dim = this.getDaysCountInMonth(year, month - 1);
                    if (day <= dim) {
                        break;
                    }
                    month++;
                    day -= dim;
                // eslint-disable-next-line
                } while (true);
            }

            date = this.daylightSavingAdjust(new Date(year, month - 1, day));
                    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                        throw "Invalid date"; // E.g. 31/02/00
                    }

            return date;
        },
        getWeekNumber(date) {
            let checkDate = new Date(date.getTime());
            checkDate.setDate(checkDate.getDate() + 4 - ( checkDate.getDay() || 7 ));
            let time = checkDate.getTime();
            checkDate.setMonth( 0 );
            checkDate.setDate( 1 );
            return Math.floor( Math.round((time - checkDate.getTime()) / 86400000 ) / 7 ) + 1;
        },
        onDateCellKeydown(event, date, groupIndex) {
            const cellContent = event.currentTarget;
            const cell = cellContent.parentElement;

            switch (event.which) {
                //down arrow
                case 40: {
                    cellContent.tabIndex = '-1';
                    let cellIndex = DomHandler.index(cell);
                    let nextRow = cell.parentElement.nextElementSibling;
                    if (nextRow) {
                        let focusCell = nextRow.children[cellIndex].children[0];
                        if (DomHandler.hasClass(focusCell, 'p-disabled')) {
                            this.navigationState = {backward: false};
                            this.navForward(event);
                        }
                        else {
                            nextRow.children[cellIndex].children[0].tabIndex = '0';
                            nextRow.children[cellIndex].children[0].focus();
                        }
                    }
                    else {
                        this.navigationState = {backward: false};
                        this.navForward(event);
                    }
                    event.preventDefault();
                    break;
                }

                //up arrow
                case 38: {
                    cellContent.tabIndex = '-1';
                    let cellIndex = DomHandler.index(cell);
                    let prevRow = cell.parentElement.previousElementSibling;
                    if (prevRow) {
                        let focusCell = prevRow.children[cellIndex].children[0];
                        if (DomHandler.hasClass(focusCell, 'p-disabled')) {
                            this.navigationState = {backward: true};
                            this.navBackward(event);
                        }
                        else {
                            focusCell.tabIndex = '0';
                            focusCell.focus();
                        }
                    }
                    else {
                        this.navigationState = {backward: true};
                        this.navBackward(event);
                    }
                    event.preventDefault();
                    break;
                }

                //left arrow
                case 37: {
                    cellContent.tabIndex = '-1';
                    let prevCell = cell.previousElementSibling;
                    if (prevCell) {
                        let focusCell = prevCell.children[0];
                        if (DomHandler.hasClass(focusCell, 'p-disabled')) {
                            this.navigateToMonth(true, groupIndex);
                        }
                        else {
                            focusCell.tabIndex = '0';
                            focusCell.focus();
                        }
                    }
                    else {
                        this.navigateToMonth(true, groupIndex);
                    }
                    event.preventDefault();
                    break;
                }

                //right arrow
                case 39: {
                    cellContent.tabIndex = '-1';
                    let nextCell = cell.nextElementSibling;
                    if (nextCell) {
                        let focusCell = nextCell.children[0];
                        if (DomHandler.hasClass(focusCell, 'p-disabled')) {
                            this.navigateToMonth(false, groupIndex);
                        }
                        else {
                            focusCell.tabIndex = '0';
                            focusCell.focus();
                        }
                    }
                    else {
                        this.navigateToMonth(false, groupIndex);
                    }
                    event.preventDefault();
                    break;
                }

                //enter
                case 13: {
                    this.onDateSelect(event, date);
                    event.preventDefault();
                    break;
                }

                //escape
                case 27: {
                    this.overlayVisible = false;
                    event.preventDefault();
                    break;
                }

                //tab
                case 9: {
                    if (!this.inline) {
                        this.trapFocus(event);
                    }
                    break;
                }

                default:
                    //no op
                break;
            }
        },
        navigateToMonth(prev, groupIndex) {
            if (prev) {
                if (this.numberOfMonths === 1 || (groupIndex === 0)) {
                    this.navigationState = {backward: true};
                    this.navBackward(event);
                }
                else {
                    let prevMonthContainer = this.$refs.overlay.children[groupIndex - 1];
                    let cells = DomHandler.find(prevMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled)');
                    let focusCell = cells[cells.length - 1];
                    focusCell.tabIndex = '0';
                    focusCell.focus();
                }
            }
            else {
                if (this.numberOfMonths === 1 || (groupIndex === this.numberOfMonths - 1)) {
                    this.navigationState = {backward: false};
                    this.navForward(event);
                }
                else {
                    let nextMonthContainer = this.$refs.overlay.children[groupIndex + 1];
                    let focusCell = DomHandler.findSingle(nextMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled)');
                    focusCell.tabIndex = '0';
                    focusCell.focus();
                }
            }
        },
        onMonthCellKeydown(event, index) {
            const cell = event.currentTarget;

            switch (event.which) {
                //arrows
                case 38:
                case 40: {
                    cell.tabIndex = '-1';
                    var cells = cell.parentElement.children;
                    var cellIndex = DomHandler.index(cell);
                    let nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex -3];
                    if (nextCell) {
                        nextCell.tabIndex = '0';
                        nextCell.focus();
                    }
                    event.preventDefault();
                    break;
                }

                //left arrow
                case 37: {
                    cell.tabIndex = '-1';
                    let prevCell = cell.previousElementSibling;
                    if (prevCell) {
                        prevCell.tabIndex = '0';
                        prevCell.focus();
                    }
                    event.preventDefault();
                    break;
                }

                //right arrow
                case 39: {
                    cell.tabIndex = '-1';
                    let nextCell = cell.nextElementSibling;
                    if (nextCell) {
                        nextCell.tabIndex = '0';
                        nextCell.focus();
                    }
                    event.preventDefault();
                    break;
                }

                //enter
                case 13: {
                    this.onMonthSelect(event, index);
                    event.preventDefault();
                    break;
                }

                //escape
                case 27: {
                    this.overlayVisible = false;
                    event.preventDefault();
                    break;
                }

                //tab
                case 9: {
                    if (!this.inline) {
                         this.trapFocus(event);
                    }
                    break;
                }

                default:
                    //no op
                break;
            }
        },
        updateFocus() {
            let cell;
            if (this.navigationState) {
                if (this.navigationState.button) {
                    this.initFocusableCell();

                    if (this.navigationState.backward)
                        DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-prev').focus();
                    else
                        DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-next').focus();
                }
                else {
                    if (this.navigationState.backward) {
                        let cells = DomHandler.find(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled)');
                        cell = cells[cells.length - 1];
                    }
                    else {
                        cell = DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled)');
                    }

                    if (cell) {
                        cell.tabIndex = '0';
                        cell.focus();
                    }
                }

                this.navigationState = null;
            }
            else {
                this.initFocusableCell();
            }
        },
        initFocusableCell() {
            let cell;
            if (this.view === 'month') {
                let cells = DomHandler.find(this.$refs.overlay, '.p-monthpicker .p-monthpicker-month');
                let selectedCell= DomHandler.findSingle(this.$refs.overlay, '.p-monthpicker .p-monthpicker-month.p-highlight');
                cells.forEach(cell => cell.tabIndex = -1);
                cell = selectedCell || cells[0];
            }
            else {
                cell = DomHandler.findSingle(this.$refs.overlay, 'span.p-highlight');
                if (!cell) {
                    let todayCell = DomHandler.findSingle(this.$refs.overlay, 'td.p-datepicker-today span:not(.p-disabled)');
                    if (todayCell)
                        cell = todayCell;
                    else
                        cell = DomHandler.findSingle(this.$refs.overlay, '.p-datepicker-calendar td span:not(.p-disabled)');
                }
            }

            if (cell) {
                cell.tabIndex = '0';
            }
        },
        trapFocus(event) {
            event.preventDefault();
            let focusableElements = DomHandler.getFocusableElements(this.$refs.overlay);

            if (focusableElements && focusableElements.length > 0) {
                if (!document.activeElement) {
                    focusableElements[0].focus();
                }
                else {
                    let focusedIndex = focusableElements.indexOf(document.activeElement);

                    if (event.shiftKey) {
                        if (focusedIndex == -1 || focusedIndex === 0)
                            focusableElements[focusableElements.length - 1].focus();
                        else
                            focusableElements[focusedIndex - 1].focus();
                    }
                    else {
                        if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                            focusableElements[0].focus();
                        else
                            focusableElements[focusedIndex + 1].focus();
                    }
                }
            }
        },
        onContainerButtonKeydown(event) {
             switch (event.which) {
                //tab
                case 9:
                    if (!this.inline) {
                        this.trapFocus(event);
                    }
                break;

                //escape
                case 27:
                    this.overlayVisible = false;
                    event.preventDefault();
                break;

                default:
                    //Noop
                break;
             }
        },
        onInput(val) {
            // IE 11 Workaround for input placeholder : https://github.com/primefaces/primeng/issues/2026
            if (!this.isKeydown) {
                return;
            }
            this.isKeydown = false;

            try {
                this.selectionStart = this.$refs.input.$el.selectionStart;
                this.selectionEnd = this.$refs.input.$el.selectionEnd;

                let value = this.parseValue(val);
                if (this.isValidSelection(value)) {
                    this.updateModel(value);
                }
            }
            catch(err) {
                this.updateModel(val);
            }
        },
        appendContainer() {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.$refs.overlay);
                else
                    document.getElementById(this.appendTo).appendChild(this.$refs.overlay);
            }
        },
        restoreAppend() {
            if (this.$refs.overlay && this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.removeChild(this.$refs.overlay);
                else
                    document.getElementById(this.appendTo).removeChild(this.$refs.overlay);
            }
        }
    },
    computed: {
        listeners() {
            let $vm = this;

            return {
                ...$vm.$listeners,
                input: val => {
                     this.onInput(val);
        },
                focus: event => {
                    $vm.focus = true;
                    if ($vm.showOnFocus && $vm.isEnabled()) {
                        $vm.overlayVisible = true;
                    }
                    $vm.focused = true;
                    $vm.$emit('focus', event)
                },
                blur: event => {
                    $vm.focused = false;
                    $vm.$emit('blur', event);
                },
                keydown: event => {
                    $vm.isKeydown = true;

                    if (event.keyCode === 40 && $vm.$refs.overlay) {
                        $vm.trapFocus(event);
                    }
                    else if (event.keyCode === 27) {
                        if ($vm.overlayVisible) {
                            $vm.overlayVisible = false;
                            event.preventDefault();
                        }
                    }
                    else if (event.keyCode === 9) {
                        DomHandler.getFocusableElements($vm.$refs.overlay).forEach(el => el.tabIndex = '-1');
                        if ($vm.overlayVisible) {
                            $vm.overlayVisible = false;
                        }
                    }

                    $vm.$emit('keydown', event);
                }
            };
        },
        viewDate() {
            let propValue = this.value;
            if (typeof propValue === 'string') {
                return new Date();
            }

            if (propValue && Array.isArray(propValue)) {
                propValue = propValue[0];
            }

            return propValue || new Date();
        },
        inputFieldValue() {
            return this.formatValue(this.value);
        },
        containerClass() {
            return [
                'p-calendar p-component p-inputwrapper',
                {
                    'p-calendar-w-btn': this.showIcon,
                    'p-calendar-timeonly': this.timeOnly,
                    'p-inputwrapper-filled': this.value,
                    'p-inputwrapper-focus': this.focused
                }
            ];
        },
        panelStyleClass() {
            return [
                'p-datepicker p-component',
                {
                    'p-datepicker-inline': this.inline,
                    'p-disabled': this.$attrs.disabled,
                    'p-datepicker-timeonly': this.timeOnly,
                    'p-datepicker-multiple-month': this.numberOfMonths > 1,
                    'p-datepicker-monthpicker': (this.view === 'month'),
                    'p-datepicker-touch-ui': this.touchUI
                }
            ];
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
                let weekNumbers = [];
                let monthRows = Math.ceil((daysLength + firstDay) / 7);

                for (let i = 0; i < monthRows; i++) {
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

                    if (this.showWeek) {
                        weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
                    }

                    dates.push(week);
                }

                months.push({
                    month: month,
                    year: year,
                    dates: dates,
                    weekNumbers: weekNumbers
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
            if (this.yearRange) {
                let $vm = this;
                const years = this.yearRange.split(':');
                let yearStart = parseInt(years[0]);
                let yearEnd = parseInt(years[1]);
                let yearOptions = [];

                if (this.currentYear < yearStart) {
                    $vm.currentYear = yearEnd;
                }
                else if (this.currentYear > yearEnd) {
                    $vm.currentYear = yearStart;
                }

                for (let i = yearStart; i <= yearEnd; i++) {
                    yearOptions.push(i);
                }

                return yearOptions;
            }
            else {
                return null;
            }
        },
        monthPickerValues() {
            let monthPickerValues = [];
            for (let i = 0; i <= 11; i++) {
                monthPickerValues.push(this.locale.monthNamesShort[i]);
            }

            return monthPickerValues;
        },
        formattedCurrentHour() {
            return this.currentHour < 10 ? '0' + this.currentHour : this.currentHour;
        },
        formattedCurrentMinute() {
            return this.currentMinute < 10 ? '0' + this.currentMinute : this.currentMinute;
        },
        formattedCurrentSecond() {
            return this.currentSecond < 10 ? '0' + this.currentSecond : this.currentSecond;
        }
    },
    components: {
        'CalendarInputText': InputText,
        'CalendarButton': Button
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-calendar {
    position: relative;
    display: inline-flex;
}

.p-calendar .p-inputtext {
    flex: 1 1 auto;
    width: 1%;
}

.p-calendar-w-btn .p-inputtext {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-calendar-w-btn .p-datepicker-trigger {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

/* Fluid */
.p-fluid .p-calendar {
    display: flex;
}

.p-fluid .p-calendar .p-inputtext {
    width: 1%;
}

/* Datepicker */
.p-calendar .p-datepicker {
    min-width: 100%;
}

.p-datepicker {
	width: auto;
    position: absolute;
}

.p-datepicker-inline {
    display: inline-flex;
    position: static;
}

/* Header */
.p-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p-datepicker-header .p-datepicker-title {
    margin: 0 auto;
}

.p-datepicker-prev,
.p-datepicker-next {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

/* Multiple Month DatePicker */
.p-datepicker-multiple-month .p-datepicker-group-container {
    display: flex;
}

/* DatePicker Table */
.p-datepicker table {
	width: 100%;
	border-collapse: collapse;
}

.p-datepicker td > span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
}

/* Month Picker */
.p-monthpicker-month {
    width: 33.3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

/*  Button Bar */
.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Time Picker */
.p-timepicker {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-timepicker button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

.p-timepicker > div {
    display: flex;
    align-items: center;
    flex-direction: column;
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

.p-datepicker-mask {
    background-color: transparent;
    transition-property: background-color;
}

.p-datepicker-mask.p-datepicker-mask-leave.p-component-overlay {
    background-color: transparent;
}
</style>

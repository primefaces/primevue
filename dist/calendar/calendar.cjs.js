'use strict';

var utils = require('primevue/utils');
var OverlayEventBus = require('primevue/overlayeventbus');
var Button = require('primevue/button');
var Ripple = require('primevue/ripple');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var OverlayEventBus__default = /*#__PURE__*/_interopDefaultLegacy(OverlayEventBus);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

var script = {
    name: 'Calendar',
    inheritAttrs: false,
    emits: ['show', 'hide', 'input', 'month-change', 'year-change', 'date-select', 'update:modelValue', 'today-click', 'clear-click', 'focus', 'blur', 'keydown'],
    props: {
        modelValue: null,
        selectionMode: {
            type: String,
            default: 'single'
        },
        dateFormat: {
            type: String,
            default: null
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
        responsiveOptions: Array,
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
        appendTo: {
            type: String,
            default: 'body'
        },
        inputClass: null,
        inputStyle: null,
        class: null,
        style: null
    },
    navigationState: null,
    timePickerChange: false,
    scrollHandler: null,
    outsideClickListener: null,
    maskClickListener: null,
    resizeListener: null,
    overlay: null,
    input: null,
    mask: null,
    timePickerTimer: null,
    preventFocus: false,
    typeUpdate: false,
    created() {
        this.updateCurrentMetaData();
    },
    mounted() {
        this.createResponsiveStyle();

        if (this.inline) {
            this.overlay && this.overlay.setAttribute(this.attributeSelector, '');

            if (!this.$attrs.disabled) {
                this.preventFocus = true;
                this.initFocusableCell();

                if (this.numberOfMonths === 1) {
                    this.overlay.style.width = utils.DomHandler.getOuterWidth(this.$el) + 'px';
                }
            }
        }
        else {
            this.input.value = this.formatValue(this.modelValue);
        }
    },
    updated() {
        if (this.overlay) {
            this.preventFocus = true;
            this.updateFocus();
        }

        if (this.input && this.selectionStart != null && this.selectionEnd != null) {
            this.input.selectionStart = this.selectionStart;
            this.input.selectionEnd = this.selectionEnd;
            this.selectionStart = null;
            this.selectionEnd = null;
        }
    },
    beforeUnmount() {
        if (this.timePickerTimer) {
            clearTimeout(this.timePickerTimer);
        }

        if (this.mask) {
            this.destroyMask();
        }
        this.destroyResponsiveStyleElement();

        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.overlay && this.autoZIndex) {
            utils.ZIndexUtils.clear(this.overlay);
        }
        this.overlay = null;
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
            overlayVisible: false,
            currentView: this.view
        }
    },
    watch: {
        modelValue(newValue) {
            this.updateCurrentMetaData();
            if (!this.typeUpdate && !this.inline && this.input) {
                this.input.value = this.formatValue(newValue);
            }
            this.typeUpdate = false;
        },
        showTime() {
            this.updateCurrentMetaData();
        },
        months() {
            if (this.overlay) {
                if (!this.focused) {
                    setTimeout(this.updateFocus, 0);
                }
            }
        },
        numberOfMonths() {
            this.destroyResponsiveStyleElement();
            this.createResponsiveStyle();
        },
        responsiveOptions() {
            this.destroyResponsiveStyleElement();
            this.createResponsiveStyle();
        },
        currentView() {
            Promise.resolve(null).then(() => this.alignOverlay());
        }
    },
    methods: {
        isComparable() {
            return this.modelValue != null && typeof this.modelValue !== 'string';
        },
        isSelected(dateMeta) {
            if (!this.isComparable()) {
                return false;
            }

            if (this.modelValue) {
                if (this.isSingleSelection()) {
                    return this.isDateEquals(this.modelValue, dateMeta);
                }
                else if (this.isMultipleSelection()) {
                    let selected = false;
                    for (let date of this.modelValue) {
                        selected = this.isDateEquals(date, dateMeta);
                        if (selected) {
                            break;
                        }
                    }

                    return selected;
                }
                else if( this.isRangeSelection()) {
                    if (this.modelValue[1])
                        return this.isDateEquals(this.modelValue[0], dateMeta) || this.isDateEquals(this.modelValue[1], dateMeta) || this.isDateBetween(this.modelValue[0], this.modelValue[1], dateMeta);
                    else {
                        return this.isDateEquals(this.modelValue[0], dateMeta);
                    }

                }
            }

            return false;
        },
        isMonthSelected(month) {
            if (this.isComparable()) {
                let value = this.isRangeSelection() ? this.modelValue[0] : this.modelValue;

                return !this.isMultipleSelection() ? (value.getMonth() === month && value.getFullYear() === this.currentYear) : false;
            }

            return false;
        },
        isYearSelected(year) {
            if (this.isComparable()) {
                let value = this.isRangeSelection() ? this.modelValue[0] : this.modelValue;

                return !this.isMultipleSelection() && this.isComparable() ? (value.getFullYear() === year) : false;
            }

            return false;
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
                validDay = !this.isDayDisabled(day,month,year);
            }

            return validMin && validMax && validDate && validDay;
        },
        onOverlayEnter(el) {
            el.setAttribute(this.attributeSelector, '');

            if (this.autoZIndex) {
                if (this.touchUI)
                    utils.ZIndexUtils.set('modal', el, this.baseZIndex || this.$primevue.config.zIndex.modal);
                else
                    utils.ZIndexUtils.set('overlay', el, this.baseZIndex || this.$primevue.config.zIndex.overlay);
            }

            this.alignOverlay();
            this.$emit('show');
        },
        onOverlayEnterComplete() {
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();
        },
        onOverlayAfterLeave(el) {
            if (this.autoZIndex) {
                utils.ZIndexUtils.clear(el);
            }
        },
        onOverlayLeave() {
            this.currentView = this.view;
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.$emit('hide');

            if (this.mask) {
                this.disableModality();
            }

            this.overlay = null;
        },
        onPrevButtonClick(event) {
            if(this.showOtherMonths) {
                this.navigationState = {backward: true, button: true};
                this.navBackward(event);
            }
        },
        onNextButtonClick(event) {
            if(this.showOtherMonths) {
                this.navigationState = {backward: false, button: true};
                this.navForward(event);
            }
        },
        navBackward(event) {
            event.preventDefault();

            if (!this.isEnabled()) {
                return;
            }

            if (this.currentView === 'month') {
                this.decrementYear();
            }
            else if (this.currentView === 'year') {
                this.decrementDecade();
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

            if (this.currentView === 'month') {
                this.incrementYear();
            }
            else if (this.currentView === 'year') {
                this.incrementDecade();
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
        decrementDecade() {
            this.currentYear = this.currentYear - 10;
        },
        incrementYear() {
            this.currentYear++;
        },
        incrementDecade() {
            this.currentYear = this.currentYear + 10;
        },
        switchToMonthView(event) {
            this.currentView = 'month';
            setTimeout(this.updateFocus, 0);
            event.preventDefault();
        },
        switchToYearView(event) {
            this.currentView = 'year';
            setTimeout(this.updateFocus, 0);
            event.preventDefault();
        },
        isEnabled() {
            return !this.$attrs.disabled && !this.$attrs.readonly;
        },
        updateCurrentTimeMeta(date) {
            let currentHour = date.getHours();

            if (this.hourFormat === '12') {
                this.pm = currentHour > 11;

                if (currentHour >= 12)
                    currentHour = (currentHour == 12) ? 12 : currentHour - 12;
                else
                    currentHour = (currentHour == 0) ? 12 : currentHour;
            }

            this.currentHour = Math.floor(currentHour / this.stepHour) * this.stepHour;
            this.currentMinute = Math.floor(date.getMinutes() / this.stepMinute) * this.stepMinute;
            this.currentSecond = Math.floor(date.getSeconds() / this.stepSecond) * this.stepSecond;
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
                this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.$refs.container, () => {
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
                    this.$el.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
        },
        isNavIconClicked(event) {
            return (utils.DomHandler.hasClass(event.target, 'p-datepicker-prev') || utils.DomHandler.hasClass(event.target, 'p-datepicker-prev-icon')
                    || utils.DomHandler.hasClass(event.target, 'p-datepicker-next') || utils.DomHandler.hasClass(event.target, 'p-datepicker-next-icon'));
        },
        alignOverlay() {
            if (this.touchUI) {
                this.enableModality();
            }
            else if (this.overlay) {
                if (this.appendDisabled) {
                    utils.DomHandler.relativePosition(this.overlay, this.$el);
                }
                else {
                    if (this.view === 'date') {
                        this.overlay.style.width = utils.DomHandler.getOuterWidth(this.overlay) + 'px';
                        this.overlay.style.minWidth = utils.DomHandler.getOuterWidth(this.$el) + 'px';
                    }
                    else {
                        this.overlay.style.width = utils.DomHandler.getOuterWidth(this.$el) + 'px';
                    }

                    utils.DomHandler.absolutePosition(this.overlay, this.$el);
                }
            }
        },
        onButtonClick() {
            if (this.isEnabled()) {
                if (!this.overlayVisible) {
                    this.input.focus();
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

            utils.DomHandler.find(this.overlay, '.p-datepicker-calendar td span:not(.p-disabled)').forEach(cell => cell.tabIndex = -1);

            if (event) {
                event.currentTarget.focus();
            }

            if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
                let newValue = this.modelValue.filter(date => !this.isDateEquals(date, dateMeta));
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
                modelVal = this.modelValue ? [...this.modelValue, date] : [date];
            }
            else if (this.isRangeSelection()) {
                if (this.modelValue && this.modelValue.length) {
                    let startDate = this.modelValue[0];
                    let endDate = this.modelValue[1];

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
            this.$emit('update:modelValue', value);
        },
        shouldSelectDate() {
            if (this.isMultipleSelection())
                return this.maxDateCount != null ? this.maxDateCount > (this.modelValue ? this.modelValue.length : 0) : true;
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
                                output += formatName('D', date.getDay(), this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
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
                                output += formatName('M',date.getMonth(), this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
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
        convertTo24Hour(hours, pm) {
            if (this.hourFormat == '12') {
                if (hours === 12) {
                    return (pm ? 12 : 0);
                } else {
                    return (pm ? hours + 12 : hours);
                }
            }
            return hours;
        },
        validateTime(hour, minute, second, pm) {
            let value = this.isComparable() ? this.modelValue : this.viewDate;
            const convertedHour = this.convertTo24Hour(hour, pm);

            if (this.isRangeSelection()) {
                value = this.modelValue[1] || this.modelValue[0];
            }
            if (this.isMultipleSelection()) {
                value = this.modelValue[this.modelValue.length - 1];
            }
            const valueDateString = value ? value.toDateString() : null;
            if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
                if (this.minDate.getHours() > convertedHour) {
                    return false;
                }
                if (this.minDate.getHours() === convertedHour) {
                    if (this.minDate.getMinutes() > minute) {
                        return false;
                    }
                    if (this.minDate.getMinutes() === minute) {
                        if (this.minDate.getSeconds() > second) {
                            return false;
                        }
                    }
                }
            }

            if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
                if (this.maxDate.getHours() < convertedHour) {
                    return false;
                }
                if (this.maxDate.getHours() === convertedHour) {
                    if (this.maxDate.getMinutes() < minute) {
                        return false;
                    }
                    if (this.maxDate.getMinutes() === minute) {
                        if (this.maxDate.getSeconds() < second) {
                            return false;
                        }
                    }
                }
            }
            return true;
        },
        incrementHour(event) {
            let prevHour = this.currentHour;
            let newHour = this.currentHour + this.stepHour;
            let newPM = this.pm;

            if (this.hourFormat == '24')
                newHour = (newHour >= 24) ? (newHour - 24) : newHour;
            else if (this.hourFormat == '12') {
                // Before the AM/PM break, now after
                if (prevHour < 12 && newHour > 11) {
                    newPM= !this.pm;
                }
                newHour = (newHour >= 13) ? (newHour - 12) : newHour;
            }

            if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
                this.currentHour = newHour;
                this.pm = newPM;
            }
            event.preventDefault();
        },
        decrementHour(event) {
            let newHour = this.currentHour - this.stepHour;
            let newPM = this.pm;

            if (this.hourFormat == '24')
                newHour = (newHour < 0) ? (24 + newHour) : newHour;
            else if (this.hourFormat == '12') {
                // If we were at noon/midnight, then switch
                if (this.currentHour === 12) {
                    newPM = !this.pm;
                }
                newHour = (newHour <= 0) ? (12 + newHour) : newHour;
            }
            if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
                this.currentHour = newHour;
                this.pm = newPM;
            }
            event.preventDefault();
        },
        incrementMinute(event) {
            let newMinute = this.currentMinute + this.stepMinute;
            if (this.validateTime(this.currentHour, newMinute, this.currentSecond, true)) {
                this.currentMinute = (newMinute > 59) ? newMinute - 60 : newMinute;
            }
            event.preventDefault();
        },
        decrementMinute(event) {
            let newMinute = this.currentMinute - this.stepMinute;
            newMinute = (newMinute < 0) ? 60 + newMinute : newMinute;
            if (this.validateTime(this.currentHour, newMinute, this.currentSecond, true)) {
                this.currentMinute = newMinute;
            }

            event.preventDefault();
        },
        incrementSecond(event) {
            let newSecond = this.currentSecond + this.stepSecond;
            if (this.validateTime(this.currentHour, this.currentMinute, newSecond, true)) {
                this.currentSecond = (newSecond > 59) ? newSecond - 60 : newSecond;
            }

            event.preventDefault();
        },
        decrementSecond(event) {
            let newSecond = this.currentSecond - this.stepSecond;
            newSecond = (newSecond < 0) ? 60 + newSecond : newSecond;
            if (this.validateTime(this.currentHour, this.currentMinute, newSecond, true)) {
                this.currentSecond = newSecond;
            }

            event.preventDefault();
        },
        updateModelTime() {
            this.timePickerChange = true;
            let value = this.isComparable() ? this.modelValue : this.viewDate;

            if (this.isRangeSelection()) {
                value = this.modelValue[1] || this.modelValue[0];
            }
            if (this.isMultipleSelection()) {
                value = this.modelValue[this.modelValue.length - 1];
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
                if (this.modelValue[1])
                    value = [this.modelValue[0], value];
                else
                    value = [value, null];
            }

            if (this.isMultipleSelection()){
                value = [...this.modelValue.slice(0, -1), value];
            }

            this.updateModel(value);
            this.$emit('date-select', value);
            setTimeout(() => this.timePickerChange = false, 0);
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
            if (this.view === 'month') {
                this.onDateSelect(event, {year: this.currentYear, month: index, day: 1, selectable: true});
            }
            else {
                this.currentMonth = index;
                this.currentView = 'date';
                this.$emit('month-change', {month: this.currentMonth + 1, year: this.currentYear});
            }

            setTimeout(this.updateFocus, 0);
        },
        onYearSelect(event, year) {
            if (this.view === 'year') {
                this.onDateSelect(event, {year: year, month: 0, day: 1, selectable: true});
            }
            else {
                this.currentYear = year;
                this.currentView = 'month';
                this.$emit('year-change', {month: this.currentMonth + 1, year: this.currentYear});
            }

            setTimeout(this.updateFocus, 0);
        },
        enableModality() {
            if (!this.mask) {
                this.mask = document.createElement('div');
                this.mask.style.zIndex = String(parseInt(this.overlay.style.zIndex, 10) - 1);
                utils.DomHandler.addMultipleClasses(this.mask, 'p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay p-component-overlay-enter');

                this.maskClickListener = () => {
                    this.overlayVisible = false;
                };
                this.mask.addEventListener('click', this.maskClickListener);

                document.body.appendChild(this.mask);
                utils.DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
        },
        disableModality() {
            if (this.mask) {
                utils.DomHandler.addClass(this.mask, 'p-component-overlay-leave');
                this.mask.addEventListener('animationend', () => {
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
                if(utils.DomHandler.hasClass(bodyChild, 'p-datepicker-mask-scrollblocker')) {
                    hasBlockerMasks = true;
                    break;
                }
            }

            if (!hasBlockerMasks) {
                utils.DomHandler.removeClass(document.body, 'p-overflow-hidden');
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
            if (value == null) {
                return true;
            }

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

            if (this.currentView === 'month') {
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
                            getName("D", this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
                            break;
                        case "o":
                            doy = getNumber("o");
                            break;
                        case "m":
                            month = getNumber("m");
                            break;
                        case "M":
                            month = getName("M", this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
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
                    let cellIndex = utils.DomHandler.index(cell);
                    let nextRow = cell.parentElement.nextElementSibling;
                    if (nextRow) {
                        let focusCell = nextRow.children[cellIndex].children[0];
                        if (utils.DomHandler.hasClass(focusCell, 'p-disabled')) {
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
                    let cellIndex = utils.DomHandler.index(cell);
                    let prevRow = cell.parentElement.previousElementSibling;
                    if (prevRow) {
                        let focusCell = prevRow.children[cellIndex].children[0];
                        if (utils.DomHandler.hasClass(focusCell, 'p-disabled')) {
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
                        if (utils.DomHandler.hasClass(focusCell, 'p-disabled')) {
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
                        if (utils.DomHandler.hasClass(focusCell, 'p-disabled')) {
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
                //space
                case 13:
                case 32: {
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
            }
        },
        navigateToMonth(prev, groupIndex) {
            if (prev) {
                if (this.numberOfMonths === 1 || (groupIndex === 0)) {
                    this.navigationState = {backward: true};
                    this.navBackward(event);
                }
                else {
                    let prevMonthContainer = this.overlay.children[groupIndex - 1];
                    let cells = utils.DomHandler.find(prevMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
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
                    let nextMonthContainer = this.overlay.children[groupIndex + 1];
                    let focusCell = utils.DomHandler.findSingle(nextMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
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
                    var cellIndex = utils.DomHandler.index(cell);
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
                    else {
                        this.navigationState = {backward: true};
                        this.navBackward(event);
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
                    else {
                        this.navigationState = {backward: false};
                        this.navForward(event);
                    }
                    event.preventDefault();
                    break;
                }

                //enter
                //space
                case 13:
                case 32: {
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
                    this.trapFocus(event);
                    break;
                }
            }
        },
        onYearCellKeydown(event, index) {
            const cell = event.currentTarget;

            switch (event.which) {
                //arrows
                case 38:
                case 40: {
                    cell.tabIndex = '-1';
                    var cells = cell.parentElement.children;
                    var cellIndex = utils.DomHandler.index(cell);
                    let nextCell = cells[event.which === 40 ? cellIndex + 2 : cellIndex - 2];
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
                    else {
                        this.navigationState = {backward: true};
                        this.navBackward(event);
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
                    else {
                        this.navigationState = {backward: false};
                        this.navForward(event);
                    }
                    event.preventDefault();
                    break;
                }

                //enter
                //space
                case 13:
                case 32: {
                    this.onYearSelect(event, index);
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
                    this.trapFocus(event);
                    break;
                }
            }
        },
        updateFocus() {
            let cell;

            if (this.navigationState) {
                if (this.navigationState.button) {
                    this.initFocusableCell();

                    if (this.navigationState.backward)
                        utils.DomHandler.findSingle(this.overlay, '.p-datepicker-prev').focus();
                    else
                        utils.DomHandler.findSingle(this.overlay, '.p-datepicker-next').focus();
                }
                else {
                    if (this.navigationState.backward) {
                        let cells;

                        if (this.currentView === 'month') {
                            cells = utils.DomHandler.find(this.overlay, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
                        }
                        else if (this.currentView === 'year') {
                            cells = utils.DomHandler.find(this.overlay, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)');
                        }
                        else {
                            cells = utils.DomHandler.find(this.overlay, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
                        }

                        if (cells && cells.length > 0) {
                            cell = cells[cells.length - 1];
                        }
                    }
                    else {
                        if (this.currentView === 'month') {
                            cell = utils.DomHandler.findSingle(this.overlay, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
                        }
                        else if (this.currentView === 'year') {
                            cell = utils.DomHandler.findSingle(this.overlay, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)');
                        }
                        else {
                            cell = utils.DomHandler.findSingle(this.overlay, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
                        }
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

            if (this.currentView === 'month') {
                let cells = utils.DomHandler.find(this.overlay, '.p-monthpicker .p-monthpicker-month');
                let selectedCell= utils.DomHandler.findSingle(this.overlay, '.p-monthpicker .p-monthpicker-month.p-highlight');
                cells.forEach(cell => cell.tabIndex = -1);
                cell = selectedCell || cells[0];
            }
            else if (this.currentView === 'year') {
                let cells = utils.DomHandler.find(this.overlay, '.p-yearpicker .p-yearpicker-year');
                let selectedCell= utils.DomHandler.findSingle(this.overlay, '.p-yearpicker .p-yearpicker-year.p-highlight');
                cells.forEach(cell => cell.tabIndex = -1);
                cell = selectedCell || cells[0];
            }
            else {
                cell = utils.DomHandler.findSingle(this.overlay, 'span.p-highlight');
                if (!cell) {
                    let todayCell = utils.DomHandler.findSingle(this.overlay, 'td.p-datepicker-today span:not(.p-disabled):not(.p-ink');
                    if (todayCell)
                        cell = todayCell;
                    else
                        cell = utils.DomHandler.findSingle(this.overlay, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink');
                }
            }

            if (cell) {
                cell.tabIndex = '0';

                if (!this.preventFocus && (!this.navigationState || !this.navigationState.button) && !this.timePickerChange) {
                    cell.focus();
                }

                this.preventFocus = false;
            }
        },
        trapFocus(event) {
            event.preventDefault();
            let focusableElements = utils.DomHandler.getFocusableElements(this.overlay);

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
                    this.trapFocus(event);
                break;

                //escape
                case 27:
                    this.overlayVisible = false;
                    event.preventDefault();
                break;
            }

            this.$emit('keydown', event);
        },
        onInput(event) {
            try {
                this.selectionStart = this.input.selectionStart;
                this.selectionEnd = this.input.selectionEnd;

                let value = this.parseValue(event.target.value);
                if (this.isValidSelection(value)) {
                    this.typeUpdate = true;
                    this.updateModel(value);
                }
            }
            catch(err) {
                /* NoOp */
            }

            this.$emit('input', event);
        },
        onFocus(event) {
            if (this.showOnFocus && this.isEnabled()) {
                this.overlayVisible = true;
            }
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('blur', {originalEvent: event, value: this.input.value});

            this.focused = false;
            this.input.value = this.formatValue(this.modelValue);
        },
        onKeyDown() {
            if (event.keyCode === 40 && this.overlay) {
                this.trapFocus(event);
            }
            else if (event.keyCode === 27) {
                if (this.overlayVisible) {
                    this.overlayVisible = false;
                    event.preventDefault();
                }
            }
            else if (event.keyCode === 9) {
                if (this.overlay) {
                    utils.DomHandler.getFocusableElements(this.overlay).forEach(el => el.tabIndex = '-1');
                }

                if (this.overlayVisible) {
                    this.overlayVisible = false;
                }
            }
        },
        overlayRef(el) {
            this.overlay = el;
        },
        inputRef(el) {
            this.input = el;
        },
        getMonthName(index) {
            return this.$primevue.config.locale.monthNames[index];
        },
        getYear(month) {
            return this.currentView === 'month' ? this.currentYear : month.year;
        },
        onOverlayClick(event) {
            if (!this.inline) {
                OverlayEventBus__default["default"].emit('overlay-click', {
                    originalEvent: event,
                    target: this.$el
                });
            }
        },
        onOverlayMouseUp(event) {
            this.onOverlayClick(event);
        },
        createResponsiveStyle() {
            if (this.numberOfMonths > 1 && this.responsiveOptions) {
                if (!this.responsiveStyleElement) {
                    this.responsiveStyleElement = document.createElement('style');
                    this.responsiveStyleElement.type = 'text/css';
                    document.body.appendChild(this.responsiveStyleElement);
                }

                let innerHTML = '';
                if (this.responsiveOptions) {
                    let responsiveOptions = [...this.responsiveOptions]
                        .filter(o => !!(o.breakpoint && o.numMonths))
                        .sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, undefined, { numeric: true }));

                    for (let i = 0; i < responsiveOptions.length; i++) {
                        let { breakpoint, numMonths } = responsiveOptions[i];
                        let styles = `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                                display: inline-flex !important;
                            }
                        `;

                        for (let j = numMonths; j < this.numberOfMonths; j++) {
                            styles += `
                                .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                    display: none !important;
                                }
                            `;
                        }

                        innerHTML += `
                            @media screen and (max-width: ${breakpoint}) {
                                ${styles}
                            }
                        `;
                    }
                }

                this.responsiveStyleElement.innerHTML = innerHTML;
            }
		},
        destroyResponsiveStyleElement() {
            if (this.responsiveStyleElement) {
                this.responsiveStyleElement.remove();
                this.responsiveStyleElement = null;
            }
        }
    },
    computed: {
        viewDate() {
            let propValue = this.modelValue;
            if (propValue && Array.isArray(propValue)) {
                propValue = propValue[0];
            }

            if (propValue && typeof propValue !== 'string') {
                return propValue;
            }
            else {
                let today = new Date();
                if (this.maxDate && this.maxDate < today) {
                    return this.maxDate;
                }
                if (this.minDate && this.minDate > today) {
                    return this.minDate;
                }
                return today;
            }
        },
        inputFieldValue() {
            return this.formatValue(this.modelValue);
        },
        containerClass() {
            return [
                'p-calendar p-component p-inputwrapper', this.class,
                {
                    'p-calendar-w-btn': this.showIcon,
                    'p-calendar-timeonly': this.timeOnly,
                    'p-calendar-disabled': this.$attrs.disabled,
                    'p-inputwrapper-filled': this.modelValue,
                    'p-inputwrapper-focus': this.focused
                }
            ];
        },
        panelStyleClass() {
            return ['p-datepicker p-component', this.panelClass, {
                'p-datepicker-inline': this.inline,
                'p-disabled': this.$attrs.disabled,
                'p-datepicker-timeonly': this.timeOnly,
                'p-datepicker-multiple-month': this.numberOfMonths > 1,
                'p-datepicker-monthpicker': (this.currentView === 'month'),
                'p-datepicker-yearpicker': (this.currentView === 'year'),
                'p-datepicker-touch-ui': this.touchUI,
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
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
            let dayIndex = this.$primevue.config.locale.firstDayOfWeek;
            for (let i = 0; i < 7; i++) {
                weekDays.push(this.$primevue.config.locale.dayNamesMin[dayIndex]);
                dayIndex = (dayIndex == 6) ? 0 : ++dayIndex;
            }

            return weekDays;
        },
        ticksTo1970() {
            return (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000);
        },
        sundayIndex() {
            return this.$primevue.config.locale.firstDayOfWeek > 0 ? 7 - this.$primevue.config.locale.firstDayOfWeek : 0;
        },
        datePattern() {
            return this.dateFormat || this.$primevue.config.locale.dateFormat;
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
                monthPickerValues.push(this.$primevue.config.locale.monthNamesShort[i]);
            }

            return monthPickerValues;
        },
        yearPickerValues() {
            let yearPickerValues = [];
            let base = this.currentYear -  (this.currentYear % 10);
            for (let i = 0; i < 10; i++) {
                yearPickerValues.push(base + i);
            }

            return yearPickerValues;
        },
        formattedCurrentHour() {
            return this.currentHour < 10 ? '0' + this.currentHour : this.currentHour;
        },
        formattedCurrentMinute() {
            return this.currentMinute < 10 ? '0' + this.currentMinute : this.currentMinute;
        },
        formattedCurrentSecond() {
            return this.currentSecond < 10 ? '0' + this.currentSecond : this.currentSecond;
        },
        todayLabel() {
            return this.$primevue.config.locale.today;
        },
        clearLabel() {
            return this.$primevue.config.locale.clear;
        },
        weekHeaderLabel() {
            return this.$primevue.config.locale.weekHeader;
        },
        monthNames() {
            return this.$primevue.config.locale.monthNames;
        },
        appendDisabled() {
            return this.appendTo === 'self' || this.inline;
        },
        appendTarget() {
            return this.appendDisabled ? null : this.appendTo;
        },
        attributeSelector() {
            return utils.UniqueComponentId();
        },
        switchViewButtonDisabled() {
            return this.numberOfMonths > 1 || this.$attrs.disabled;
        }
    },
    components: {
        'CalendarButton': Button__default["default"]
    },
    directives: {
        'ripple': Ripple__default["default"]
    }
};

const _hoisted_1 = ["readonly"];
const _hoisted_2 = ["role"];
const _hoisted_3 = { class: "p-datepicker-group-container" };
const _hoisted_4 = { class: "p-datepicker-header" };
const _hoisted_5 = ["disabled"];
const _hoisted_6 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-datepicker-prev-icon pi pi-chevron-left" }, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { class: "p-datepicker-title" };
const _hoisted_9 = ["disabled"];
const _hoisted_10 = ["disabled"];
const _hoisted_11 = {
  key: 2,
  class: "p-datepicker-decade"
};
const _hoisted_12 = ["disabled"];
const _hoisted_13 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-datepicker-next-icon pi pi-chevron-right" }, null, -1);
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = {
  key: 0,
  class: "p-datepicker-calendar-container"
};
const _hoisted_16 = { class: "p-datepicker-calendar" };
const _hoisted_17 = {
  key: 0,
  scope: "col",
  class: "p-datepicker-weekheader p-disabled"
};
const _hoisted_18 = {
  key: 0,
  class: "p-datepicker-weeknumber"
};
const _hoisted_19 = { class: "p-disabled" };
const _hoisted_20 = {
  key: 0,
  style: {"visibility":"hidden"}
};
const _hoisted_21 = ["onClick", "onKeydown"];
const _hoisted_22 = {
  key: 0,
  class: "p-monthpicker"
};
const _hoisted_23 = ["onClick", "onKeydown"];
const _hoisted_24 = {
  key: 1,
  class: "p-yearpicker"
};
const _hoisted_25 = ["onClick", "onKeydown"];
const _hoisted_26 = {
  key: 1,
  class: "p-timepicker"
};
const _hoisted_27 = { class: "p-hour-picker" };
const _hoisted_28 = /*#__PURE__*/vue.createElementVNode("span", { class: "pi pi-chevron-up" }, null, -1);
const _hoisted_29 = [
  _hoisted_28
];
const _hoisted_30 = /*#__PURE__*/vue.createElementVNode("span", { class: "pi pi-chevron-down" }, null, -1);
const _hoisted_31 = [
  _hoisted_30
];
const _hoisted_32 = { class: "p-separator" };
const _hoisted_33 = { class: "p-minute-picker" };
const _hoisted_34 = ["disabled"];
const _hoisted_35 = /*#__PURE__*/vue.createElementVNode("span", { class: "pi pi-chevron-up" }, null, -1);
const _hoisted_36 = [
  _hoisted_35
];
const _hoisted_37 = ["disabled"];
const _hoisted_38 = /*#__PURE__*/vue.createElementVNode("span", { class: "pi pi-chevron-down" }, null, -1);
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = {
  key: 0,
  class: "p-separator"
};
const _hoisted_41 = {
  key: 1,
  class: "p-second-picker"
};
const _hoisted_42 = ["disabled"];
const _hoisted_43 = /*#__PURE__*/vue.createElementVNode("span", { class: "pi pi-chevron-up" }, null, -1);
const _hoisted_44 = [
  _hoisted_43
];
const _hoisted_45 = ["disabled"];
const _hoisted_46 = /*#__PURE__*/vue.createElementVNode("span", { class: "pi pi-chevron-down" }, null, -1);
const _hoisted_47 = [
  _hoisted_46
];
const _hoisted_48 = {
  key: 2,
  class: "p-separator"
};
const _hoisted_49 = {
  key: 3,
  class: "p-ampm-picker"
};
const _hoisted_50 = ["disabled"];
const _hoisted_51 = /*#__PURE__*/vue.createElementVNode("span", { class: "pi pi-chevron-up" }, null, -1);
const _hoisted_52 = [
  _hoisted_51
];
const _hoisted_53 = ["disabled"];
const _hoisted_54 = /*#__PURE__*/vue.createElementVNode("span", { class: "pi pi-chevron-down" }, null, -1);
const _hoisted_55 = [
  _hoisted_54
];
const _hoisted_56 = {
  key: 2,
  class: "p-datepicker-buttonbar"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CalendarButton = vue.resolveComponent("CalendarButton");
  const _directive_ripple = vue.resolveDirective("ripple");

  return (vue.openBlock(), vue.createElementBlock("span", {
    ref: "container",
    class: vue.normalizeClass($options.containerClass),
    style: vue.normalizeStyle($props.style)
  }, [
    (!$props.inline)
      ? (vue.openBlock(), vue.createElementBlock("input", vue.mergeProps({
          key: 0,
          ref: $options.inputRef,
          type: "text",
          class: ['p-inputtext p-component', $props.inputClass],
          style: $props.inputStyle,
          onInput: _cache[0] || (_cache[0] = (...args) => ($options.onInput && $options.onInput(...args)))
        }, _ctx.$attrs, {
          onFocus: _cache[1] || (_cache[1] = (...args) => ($options.onFocus && $options.onFocus(...args))),
          onBlur: _cache[2] || (_cache[2] = (...args) => ($options.onBlur && $options.onBlur(...args))),
          onKeydown: _cache[3] || (_cache[3] = (...args) => ($options.onKeyDown && $options.onKeyDown(...args))),
          readonly: !$props.manualInput,
          inputmode: "none"
        }), null, 16, _hoisted_1))
      : vue.createCommentVNode("", true),
    ($props.showIcon)
      ? (vue.openBlock(), vue.createBlock(_component_CalendarButton, {
          key: 1,
          icon: $props.icon,
          tabindex: "-1",
          class: "p-datepicker-trigger",
          disabled: _ctx.$attrs.disabled,
          onClick: $options.onButtonClick,
          type: "button",
          "aria-label": $options.inputFieldValue
        }, null, 8, ["icon", "disabled", "onClick", "aria-label"]))
      : vue.createCommentVNode("", true),
    (vue.openBlock(), vue.createBlock(vue.Teleport, {
      to: $options.appendTarget,
      disabled: $options.appendDisabled
    }, [
      vue.createVNode(vue.Transition, {
        name: "p-connected-overlay",
        onEnter: _cache[66] || (_cache[66] = $event => ($options.onOverlayEnter($event))),
        onAfterEnter: $options.onOverlayEnterComplete,
        onAfterLeave: $options.onOverlayAfterLeave,
        onLeave: $options.onOverlayLeave
      }, {
        default: vue.withCtx(() => [
          ($props.inline ? true : $data.overlayVisible)
            ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                ref: $options.overlayRef,
                class: vue.normalizeClass($options.panelStyleClass),
                role: $props.inline ? null : 'dialog',
                onClick: _cache[64] || (_cache[64] = (...args) => ($options.onOverlayClick && $options.onOverlayClick(...args))),
                onMouseup: _cache[65] || (_cache[65] = (...args) => ($options.onOverlayMouseUp && $options.onOverlayMouseUp(...args)))
              }, [
                (!$props.timeOnly)
                  ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                      vue.createElementVNode("div", _hoisted_3, [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.months, (month, groupIndex) => {
                          return (vue.openBlock(), vue.createElementBlock("div", {
                            class: "p-datepicker-group",
                            key: month.month + month.year
                          }, [
                            vue.createElementVNode("div", _hoisted_4, [
                              vue.renderSlot(_ctx.$slots, "header"),
                              vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                                class: "p-datepicker-prev p-link",
                                onClick: _cache[4] || (_cache[4] = (...args) => ($options.onPrevButtonClick && $options.onPrevButtonClick(...args))),
                                type: "button",
                                onKeydown: _cache[5] || (_cache[5] = (...args) => ($options.onContainerButtonKeydown && $options.onContainerButtonKeydown(...args))),
                                disabled: _ctx.$attrs.disabled
                              }, _hoisted_7, 40, _hoisted_5)), [
                                [vue.vShow, groupIndex === 0],
                                [_directive_ripple]
                              ]),
                              vue.createElementVNode("div", _hoisted_8, [
                                ($data.currentView === 'date')
                                  ? (vue.openBlock(), vue.createElementBlock("button", {
                                      key: 0,
                                      type: "button",
                                      onClick: _cache[6] || (_cache[6] = (...args) => ($options.switchToMonthView && $options.switchToMonthView(...args))),
                                      onKeydown: _cache[7] || (_cache[7] = (...args) => ($options.onContainerButtonKeydown && $options.onContainerButtonKeydown(...args))),
                                      class: "p-datepicker-month p-link",
                                      disabled: $options.switchViewButtonDisabled
                                    }, vue.toDisplayString($options.getMonthName(month.month)), 41, _hoisted_9))
                                  : vue.createCommentVNode("", true),
                                ($data.currentView !== 'year')
                                  ? (vue.openBlock(), vue.createElementBlock("button", {
                                      key: 1,
                                      type: "button",
                                      onClick: _cache[8] || (_cache[8] = (...args) => ($options.switchToYearView && $options.switchToYearView(...args))),
                                      onKeydown: _cache[9] || (_cache[9] = (...args) => ($options.onContainerButtonKeydown && $options.onContainerButtonKeydown(...args))),
                                      class: "p-datepicker-year p-link",
                                      disabled: $options.switchViewButtonDisabled
                                    }, vue.toDisplayString($options.getYear(month)), 41, _hoisted_10))
                                  : vue.createCommentVNode("", true),
                                ($data.currentView === 'year')
                                  ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_11, [
                                      vue.renderSlot(_ctx.$slots, "decade", { years: $options.yearPickerValues }, () => [
                                        vue.createTextVNode(vue.toDisplayString($options.yearPickerValues[0]) + " - " + vue.toDisplayString($options.yearPickerValues[$options.yearPickerValues.length - 1]), 1)
                                      ])
                                    ]))
                                  : vue.createCommentVNode("", true)
                              ]),
                              vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                                class: "p-datepicker-next p-link",
                                onClick: _cache[10] || (_cache[10] = (...args) => ($options.onNextButtonClick && $options.onNextButtonClick(...args))),
                                type: "button",
                                onKeydown: _cache[11] || (_cache[11] = (...args) => ($options.onContainerButtonKeydown && $options.onContainerButtonKeydown(...args))),
                                disabled: _ctx.$attrs.disabled
                              }, _hoisted_14, 40, _hoisted_12)), [
                                [vue.vShow, $props.numberOfMonths === 1 ? true : (groupIndex === $props.numberOfMonths - 1)],
                                [_directive_ripple]
                              ])
                            ]),
                            ($data.currentView ==='date')
                              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_15, [
                                  vue.createElementVNode("table", _hoisted_16, [
                                    vue.createElementVNode("thead", null, [
                                      vue.createElementVNode("tr", null, [
                                        ($props.showWeek)
                                          ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_17, [
                                              vue.createElementVNode("span", null, vue.toDisplayString($options.weekHeaderLabel), 1)
                                            ]))
                                          : vue.createCommentVNode("", true),
                                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.weekDays, (weekDay) => {
                                          return (vue.openBlock(), vue.createElementBlock("th", {
                                            scope: "col",
                                            key: weekDay
                                          }, [
                                            vue.createElementVNode("span", null, vue.toDisplayString(weekDay), 1)
                                          ]))
                                        }), 128))
                                      ])
                                    ]),
                                    vue.createElementVNode("tbody", null, [
                                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(month.dates, (week, i) => {
                                        return (vue.openBlock(), vue.createElementBlock("tr", {
                                          key: week[0].day + '' + week[0].month
                                        }, [
                                          ($props.showWeek)
                                            ? (vue.openBlock(), vue.createElementBlock("td", _hoisted_18, [
                                                vue.createElementVNode("span", _hoisted_19, [
                                                  (month.weekNumbers[i] < 10)
                                                    ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_20, "0"))
                                                    : vue.createCommentVNode("", true),
                                                  vue.createTextVNode(" " + vue.toDisplayString(month.weekNumbers[i]), 1)
                                                ])
                                              ]))
                                            : vue.createCommentVNode("", true),
                                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(week, (date) => {
                                            return (vue.openBlock(), vue.createElementBlock("td", {
                                              key: date.day + '' + date.month,
                                              class: vue.normalizeClass({'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today})
                                            }, [
                                              vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
                                                class: vue.normalizeClass({'p-highlight': $options.isSelected(date), 'p-disabled': !date.selectable}),
                                                onClick: $event => ($options.onDateSelect($event, date)),
                                                draggable: "false",
                                                onKeydown: $event => ($options.onDateCellKeydown($event,date,groupIndex))
                                              }, [
                                                vue.renderSlot(_ctx.$slots, "date", { date: date }, () => [
                                                  vue.createTextVNode(vue.toDisplayString(date.day), 1)
                                                ])
                                              ], 42, _hoisted_21)), [
                                                [_directive_ripple]
                                              ])
                                            ], 2))
                                          }), 128))
                                        ]))
                                      }), 128))
                                    ])
                                  ])
                                ]))
                              : vue.createCommentVNode("", true)
                          ]))
                        }), 128))
                      ]),
                      ($data.currentView === 'month')
                        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_22, [
                            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.monthPickerValues, (m, i) => {
                              return vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
                                key: m,
                                onClick: $event => ($options.onMonthSelect($event, i)),
                                onKeydown: $event => ($options.onMonthCellKeydown($event,i)),
                                class: vue.normalizeClass(["p-monthpicker-month", {'p-highlight': $options.isMonthSelected(i)}])
                              }, [
                                vue.createTextVNode(vue.toDisplayString(m), 1)
                              ], 42, _hoisted_23)), [
                                [_directive_ripple]
                              ])
                            }), 128))
                          ]))
                        : vue.createCommentVNode("", true),
                      ($data.currentView === 'year')
                        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_24, [
                            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.yearPickerValues, (y) => {
                              return vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
                                key: y,
                                onClick: $event => ($options.onYearSelect($event, y)),
                                onKeydown: $event => ($options.onYearCellKeydown($event,y)),
                                class: vue.normalizeClass(["p-yearpicker-year", {'p-highlight': $options.isYearSelected(y)}])
                              }, [
                                vue.createTextVNode(vue.toDisplayString(y), 1)
                              ], 42, _hoisted_25)), [
                                [_directive_ripple]
                              ])
                            }), 128))
                          ]))
                        : vue.createCommentVNode("", true)
                    ], 64))
                  : vue.createCommentVNode("", true),
                (($props.showTime||$props.timeOnly) && $data.currentView === 'date')
                  ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_26, [
                      vue.createElementVNode("div", _hoisted_27, [
                        vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                          class: "p-link",
                          onMousedown: _cache[12] || (_cache[12] = $event => ($options.onTimePickerElementMouseDown($event, 0, 1))),
                          onMouseup: _cache[13] || (_cache[13] = $event => ($options.onTimePickerElementMouseUp($event))),
                          onKeydown: [
                            _cache[14] || (_cache[14] = (...args) => ($options.onContainerButtonKeydown && $options.onContainerButtonKeydown(...args))),
                            _cache[16] || (_cache[16] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 0, 1)), ["enter"])),
                            _cache[17] || (_cache[17] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 0, 1)), ["space"]))
                          ],
                          onMouseleave: _cache[15] || (_cache[15] = $event => ($options.onTimePickerElementMouseLeave())),
                          onKeyup: [
                            _cache[18] || (_cache[18] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["enter"])),
                            _cache[19] || (_cache[19] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["space"]))
                          ],
                          type: "button"
                        }, _hoisted_29, 32)), [
                          [_directive_ripple]
                        ]),
                        vue.createElementVNode("span", null, vue.toDisplayString($options.formattedCurrentHour), 1),
                        vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                          class: "p-link",
                          onMousedown: _cache[20] || (_cache[20] = $event => ($options.onTimePickerElementMouseDown($event, 0, -1))),
                          onMouseup: _cache[21] || (_cache[21] = $event => ($options.onTimePickerElementMouseUp($event))),
                          onKeydown: [
                            _cache[22] || (_cache[22] = (...args) => ($options.onContainerButtonKeydown && $options.onContainerButtonKeydown(...args))),
                            _cache[24] || (_cache[24] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 0, -1)), ["enter"])),
                            _cache[25] || (_cache[25] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 0, -1)), ["space"]))
                          ],
                          onMouseleave: _cache[23] || (_cache[23] = $event => ($options.onTimePickerElementMouseLeave())),
                          onKeyup: [
                            _cache[26] || (_cache[26] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["enter"])),
                            _cache[27] || (_cache[27] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["space"]))
                          ],
                          type: "button"
                        }, _hoisted_31, 32)), [
                          [_directive_ripple]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_32, [
                        vue.createElementVNode("span", null, vue.toDisplayString($props.timeSeparator), 1)
                      ]),
                      vue.createElementVNode("div", _hoisted_33, [
                        vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                          class: "p-link",
                          onMousedown: _cache[28] || (_cache[28] = $event => ($options.onTimePickerElementMouseDown($event, 1, 1))),
                          onMouseup: _cache[29] || (_cache[29] = $event => ($options.onTimePickerElementMouseUp($event))),
                          onKeydown: [
                            _cache[30] || (_cache[30] = (...args) => ($options.onContainerButtonKeydown && $options.onContainerButtonKeydown(...args))),
                            _cache[32] || (_cache[32] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 1, 1)), ["enter"])),
                            _cache[33] || (_cache[33] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 1, 1)), ["space"]))
                          ],
                          disabled: _ctx.$attrs.disabled,
                          onMouseleave: _cache[31] || (_cache[31] = $event => ($options.onTimePickerElementMouseLeave())),
                          onKeyup: [
                            _cache[34] || (_cache[34] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["enter"])),
                            _cache[35] || (_cache[35] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["space"]))
                          ],
                          type: "button"
                        }, _hoisted_36, 40, _hoisted_34)), [
                          [_directive_ripple]
                        ]),
                        vue.createElementVNode("span", null, vue.toDisplayString($options.formattedCurrentMinute), 1),
                        vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                          class: "p-link",
                          onMousedown: _cache[36] || (_cache[36] = $event => ($options.onTimePickerElementMouseDown($event, 1, -1))),
                          onMouseup: _cache[37] || (_cache[37] = $event => ($options.onTimePickerElementMouseUp($event))),
                          onKeydown: [
                            _cache[38] || (_cache[38] = (...args) => ($options.onContainerButtonKeydown && $options.onContainerButtonKeydown(...args))),
                            _cache[40] || (_cache[40] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 1, -1)), ["enter"])),
                            _cache[41] || (_cache[41] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 1, -1)), ["space"]))
                          ],
                          disabled: _ctx.$attrs.disabled,
                          onMouseleave: _cache[39] || (_cache[39] = $event => ($options.onTimePickerElementMouseLeave())),
                          onKeyup: [
                            _cache[42] || (_cache[42] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["enter"])),
                            _cache[43] || (_cache[43] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["space"]))
                          ],
                          type: "button"
                        }, _hoisted_39, 40, _hoisted_37)), [
                          [_directive_ripple]
                        ])
                      ]),
                      ($props.showSeconds)
                        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_40, [
                            vue.createElementVNode("span", null, vue.toDisplayString($props.timeSeparator), 1)
                          ]))
                        : vue.createCommentVNode("", true),
                      ($props.showSeconds)
                        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_41, [
                            vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                              class: "p-link",
                              onMousedown: _cache[44] || (_cache[44] = $event => ($options.onTimePickerElementMouseDown($event, 2, 1))),
                              onMouseup: _cache[45] || (_cache[45] = $event => ($options.onTimePickerElementMouseUp($event))),
                              onKeydown: [
                                _cache[46] || (_cache[46] = (...args) => ($options.onContainerButtonKeydown && $options.onContainerButtonKeydown(...args))),
                                _cache[48] || (_cache[48] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 2, 1)), ["enter"])),
                                _cache[49] || (_cache[49] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 2, 1)), ["space"]))
                              ],
                              disabled: _ctx.$attrs.disabled,
                              onMouseleave: _cache[47] || (_cache[47] = $event => ($options.onTimePickerElementMouseLeave())),
                              onKeyup: [
                                _cache[50] || (_cache[50] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["enter"])),
                                _cache[51] || (_cache[51] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["space"]))
                              ],
                              type: "button"
                            }, _hoisted_44, 40, _hoisted_42)), [
                              [_directive_ripple]
                            ]),
                            vue.createElementVNode("span", null, vue.toDisplayString($options.formattedCurrentSecond), 1),
                            vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                              class: "p-link",
                              onMousedown: _cache[52] || (_cache[52] = $event => ($options.onTimePickerElementMouseDown($event, 2, -1))),
                              onMouseup: _cache[53] || (_cache[53] = $event => ($options.onTimePickerElementMouseUp($event))),
                              onKeydown: [
                                _cache[54] || (_cache[54] = (...args) => ($options.onContainerButtonKeydown && $options.onContainerButtonKeydown(...args))),
                                _cache[56] || (_cache[56] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 2, -1)), ["enter"])),
                                _cache[57] || (_cache[57] = vue.withKeys($event => ($options.onTimePickerElementMouseDown($event, 2, -1)), ["space"]))
                              ],
                              disabled: _ctx.$attrs.disabled,
                              onMouseleave: _cache[55] || (_cache[55] = $event => ($options.onTimePickerElementMouseLeave())),
                              onKeyup: [
                                _cache[58] || (_cache[58] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["enter"])),
                                _cache[59] || (_cache[59] = vue.withKeys($event => ($options.onTimePickerElementMouseUp($event)), ["space"]))
                              ],
                              type: "button"
                            }, _hoisted_47, 40, _hoisted_45)), [
                              [_directive_ripple]
                            ])
                          ]))
                        : vue.createCommentVNode("", true),
                      ($props.hourFormat=='12')
                        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_48, [
                            vue.createElementVNode("span", null, vue.toDisplayString($props.timeSeparator), 1)
                          ]))
                        : vue.createCommentVNode("", true),
                      ($props.hourFormat=='12')
                        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_49, [
                            vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                              class: "p-link",
                              onClick: _cache[60] || (_cache[60] = $event => ($options.toggleAMPM($event))),
                              type: "button",
                              disabled: _ctx.$attrs.disabled
                            }, _hoisted_52, 8, _hoisted_50)), [
                              [_directive_ripple]
                            ]),
                            vue.createElementVNode("span", null, vue.toDisplayString($data.pm ? 'PM' : 'AM'), 1),
                            vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                              class: "p-link",
                              onClick: _cache[61] || (_cache[61] = $event => ($options.toggleAMPM($event))),
                              type: "button",
                              disabled: _ctx.$attrs.disabled
                            }, _hoisted_55, 8, _hoisted_53)), [
                              [_directive_ripple]
                            ])
                          ]))
                        : vue.createCommentVNode("", true)
                    ]))
                  : vue.createCommentVNode("", true),
                ($props.showButtonBar)
                  ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_56, [
                      vue.createVNode(_component_CalendarButton, {
                        type: "button",
                        label: $options.todayLabel,
                        onClick: _cache[62] || (_cache[62] = $event => ($options.onTodayButtonClick($event))),
                        class: "p-button-text",
                        onKeydown: $options.onContainerButtonKeydown
                      }, null, 8, ["label", "onKeydown"]),
                      vue.createVNode(_component_CalendarButton, {
                        type: "button",
                        label: $options.clearLabel,
                        onClick: _cache[63] || (_cache[63] = $event => ($options.onClearButtonClick($event))),
                        class: "p-button-text",
                        onKeydown: $options.onContainerButtonKeydown
                      }, null, 8, ["label", "onKeydown"])
                    ]))
                  : vue.createCommentVNode("", true),
                vue.renderSlot(_ctx.$slots, "footer")
              ], 42, _hoisted_2))
            : vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onLeave"])
    ], 8, ["to", "disabled"]))
  ], 6))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-calendar {\n    position: relative;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    max-width: 100%;\n}\n.p-calendar .p-inputtext {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n}\n.p-calendar-w-btn .p-inputtext {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.p-calendar-w-btn .p-datepicker-trigger {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n/* Fluid */\n.p-fluid .p-calendar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-fluid .p-calendar .p-inputtext {\n    width: 1%;\n}\n\n/* Datepicker */\n.p-calendar .p-datepicker {\n    min-width: 100%;\n}\n.p-datepicker {\n\twidth: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-datepicker-inline {\n    display: inline-block;\n    position: static;\n    overflow-x: auto;\n}\n\n/* Header */\n.p-datepicker-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.p-datepicker-header .p-datepicker-title {\n    margin: 0 auto;\n}\n.p-datepicker-prev,\n.p-datepicker-next {\n    cursor: pointer;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Multiple Month DatePicker */\n.p-datepicker-multiple-month .p-datepicker-group-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n/* DatePicker Table */\n.p-datepicker table {\n\twidth: 100%;\n\tborder-collapse: collapse;\n}\n.p-datepicker td > span {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0 auto;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Month Picker */\n.p-monthpicker-month {\n    width: 33.3%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Year Picker */\n.p-yearpicker-year {\n    width: 50%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n}\n\n/*  Button Bar */\n.p-datepicker-buttonbar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n/* Time Picker */\n.p-timepicker {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-timepicker button {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n}\n.p-timepicker > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n/* Touch UI */\n.p-datepicker-touch-ui,\n.p-calendar .p-datepicker-touch-ui {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    min-width: 80vw;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;

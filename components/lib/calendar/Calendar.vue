<template>
    <span ref="container" :id="d_id" :class="cx('root')" :style="sx('root')" v-bind="ptmi('root')">
        <input
            v-if="!inline"
            :ref="inputRef"
            :id="inputId"
            type="text"
            role="combobox"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :placeholder="placeholder"
            autocomplete="off"
            aria-autocomplete="none"
            aria-haspopup="dialog"
            :aria-expanded="overlayVisible"
            :aria-controls="panelId"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-invalid="invalid || undefined"
            inputmode="none"
            :disabled="disabled"
            :readonly="!manualInput || readonly"
            :tabindex="0"
            @input="onInput"
            @click="onInputClick"
            @focus="onFocus"
            @blur="onBlur"
            @keydown="onKeyDown"
            v-bind="{ ...inputProps, ...ptm('input') }"
        />
        <CalendarButton
            v-if="showIcon && iconDisplay === 'button'"
            :class="cx('dropdownButton')"
            :disabled="disabled"
            @click="onButtonClick"
            type="button"
            :aria-label="$primevue.config.locale.chooseDate"
            aria-haspopup="dialog"
            :aria-expanded="overlayVisible"
            :aria-controls="panelId"
            :unstyled="unstyled"
            :pt="ptm('dropdownButton')"
        >
            <template #icon>
                <slot name="dropdownicon" :class="icon">
                    <component :is="icon ? 'span' : 'CalendarIcon'" :class="icon" v-bind="ptm('dropdownButton')['icon']" data-pc-section="dropdownicon" />
                </slot>
            </template>
        </CalendarButton>
        <template v-else-if="showIcon && iconDisplay === 'input'">
            <slot name="inputicon" :class="cx('inputIcon')" :clickCallback="onButtonClick">
                <component :is="icon ? 'i' : 'CalendarIcon'" :class="[icon, cx('inputIcon')]" @click="onButtonClick" v-bind="ptm('inputicon')" />
            </slot>
        </template>
        <Portal :appendTo="appendTo" :disabled="inline">
            <transition name="p-connected-overlay" @enter="onOverlayEnter($event)" @after-enter="onOverlayEnterComplete" @after-leave="onOverlayAfterLeave" @leave="onOverlayLeave" v-bind="ptm('transition')">
                <div
                    v-if="inline || overlayVisible"
                    :ref="overlayRef"
                    :id="panelId"
                    :class="[cx('panel'), panelClass]"
                    :style="panelStyle"
                    :role="inline ? null : 'dialog'"
                    :aria-modal="inline ? null : 'true'"
                    :aria-label="$primevue.config.locale.chooseDate"
                    @click="onOverlayClick"
                    @keydown="onOverlayKeyDown"
                    @mouseup="onOverlayMouseUp"
                    v-bind="{ ...panelProps, ...ptm('panel') }"
                >
                    <template v-if="!timeOnly">
                        <div :class="cx('groupContainer')" v-bind="ptm('groupContainer')">
                            <div v-for="(month, groupIndex) of months" :key="month.month + month.year" :class="cx('group')" v-bind="ptm('group')">
                                <div :class="cx('header')" v-bind="ptm('header')">
                                    <slot name="header"></slot>
                                    <button
                                        v-show="showOtherMonths ? groupIndex === 0 : false"
                                        :ref="previousButtonRef"
                                        v-ripple
                                        :class="cx('previousButton')"
                                        @click="onPrevButtonClick"
                                        type="button"
                                        @keydown="onContainerButtonKeydown"
                                        :disabled="disabled"
                                        :aria-label="currentView === 'year' ? $primevue.config.locale.prevDecade : currentView === 'month' ? $primevue.config.locale.prevYear : $primevue.config.locale.prevMonth"
                                        v-bind="ptm('previousButton')"
                                        data-pc-group-section="navigator"
                                    >
                                        <slot name="previousicon" :class="cx('previousIcon')">
                                            <component :is="previousIcon ? 'span' : 'ChevronLeftIcon'" :class="[cx('previousIcon'), previousIcon]" v-bind="ptm('previousIcon')" />
                                        </slot>
                                    </button>
                                    <div :class="cx('title')" v-bind="ptm('title')">
                                        <template v-if="$primevue.config.locale.showMonthAfterYear">
                                            <button
                                                v-if="currentView !== 'year'"
                                                type="button"
                                                @click="switchToYearView"
                                                @keydown="onContainerButtonKeydown"
                                                :class="cx('yearTitle')"
                                                :disabled="switchViewButtonDisabled"
                                                :aria-label="$primevue.config.locale.chooseYear"
                                                v-bind="ptm('yearTitle')"
                                                data-pc-group-section="view"
                                            >
                                                {{ getYear(month) }}
                                            </button>
                                            <button
                                                v-if="currentView === 'date'"
                                                type="button"
                                                @click="switchToMonthView"
                                                @keydown="onContainerButtonKeydown"
                                                :class="cx('monthTitle')"
                                                :disabled="switchViewButtonDisabled"
                                                :aria-label="$primevue.config.locale.chooseMonth"
                                                v-bind="ptm('monthTitle')"
                                                data-pc-group-section="view"
                                            >
                                                {{ getMonthName(month.month) }}
                                            </button>
                                        </template>
                                        <template v-else>
                                            <button
                                                v-if="currentView === 'date'"
                                                type="button"
                                                @click="switchToMonthView"
                                                @keydown="onContainerButtonKeydown"
                                                :class="cx('monthTitle')"
                                                :disabled="switchViewButtonDisabled"
                                                :aria-label="$primevue.config.locale.chooseMonth"
                                                v-bind="ptm('monthTitle')"
                                                data-pc-group-section="view"
                                            >
                                                {{ getMonthName(month.month) }}
                                            </button>
                                            <button
                                                v-if="currentView !== 'year'"
                                                type="button"
                                                @click="switchToYearView"
                                                @keydown="onContainerButtonKeydown"
                                                :class="cx('yearTitle')"
                                                :disabled="switchViewButtonDisabled"
                                                :aria-label="$primevue.config.locale.chooseYear"
                                                v-bind="ptm('yearTitle')"
                                                data-pc-group-section="view"
                                            >
                                                {{ getYear(month) }}
                                            </button>
                                        </template>
                                        <span v-if="currentView === 'year'" :class="cx('decadeTitle')" v-bind="ptm('decadeTitle')">
                                            <slot name="decade" :years="yearPickerValues"> {{ yearPickerValues[0].value }} - {{ yearPickerValues[yearPickerValues.length - 1].value }} </slot>
                                        </span>
                                    </div>
                                    <button
                                        v-show="showOtherMonths ? (numberOfMonths === 1 ? true : groupIndex === numberOfMonths - 1) : false"
                                        :ref="nextButtonRef"
                                        v-ripple
                                        :class="cx('nextButton')"
                                        @click="onNextButtonClick"
                                        type="button"
                                        @keydown="onContainerButtonKeydown"
                                        :disabled="disabled"
                                        :aria-label="currentView === 'year' ? $primevue.config.locale.nextDecade : currentView === 'month' ? $primevue.config.locale.nextYear : $primevue.config.locale.nextMonth"
                                        v-bind="ptm('nextButton')"
                                        data-pc-group-section="navigator"
                                    >
                                        <slot name="nexticon" :class="cx('nextIcon')">
                                            <component :is="nextIcon ? 'span' : 'ChevronRightIcon'" :class="[cx('nextIcon'), nextIcon]" v-bind="ptm('nextIcon')" />
                                        </slot>
                                    </button>
                                </div>
                                <div v-if="currentView === 'date'" :class="cx('container')" v-bind="ptm('container')">
                                    <table :class="cx('table')" role="grid" v-bind="ptm('table')">
                                        <thead v-bind="ptm('tableHeader')">
                                            <tr v-bind="ptm('tableHeaderRow')">
                                                <th v-if="showWeek" scope="col" :class="cx('weekHeader')" v-bind="ptm('weekHeader', { context: { disabled: showWeek } })" :data-p-disabled="showWeek" data-pc-group-section="tableheadercell">
                                                    <slot name="weekheaderlabel">
                                                        <span v-bind="ptm('weekHeaderLabel', { context: { disabled: showWeek } })" data-pc-group-section="tableheadercelllabel">
                                                            {{ weekHeaderLabel }}
                                                        </span>
                                                    </slot>
                                                </th>
                                                <th v-for="weekDay of weekDays" :key="weekDay" scope="col" :abbr="weekDay" v-bind="ptm('tableHeaderCell')" data-pc-group-section="tableheadercell">
                                                    <span v-bind="ptm('weekDay')" data-pc-group-section="tableheadercelllabel">{{ weekDay }}</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody v-bind="ptm('tableBody')">
                                            <tr v-for="(week, i) of month.dates" :key="week[0].day + '' + week[0].month" v-bind="ptm('tableBodyRow')">
                                                <td v-if="showWeek" :class="cx('weekNumber')" v-bind="ptm('weekNumber')" data-pc-group-section="tablebodycell">
                                                    <span :class="cx('weekLabelContainer')" v-bind="ptm('weekLabelContainer', { context: { disabled: showWeek } })" :data-p-disabled="showWeek" data-pc-group-section="tablebodycelllabel">
                                                        <slot name="weeklabel" :weekNumber="month.weekNumbers[i]">
                                                            <span v-if="month.weekNumbers[i] < 10" style="visibility: hidden" v-bind="ptm('weekLabel')">0</span>
                                                            {{ month.weekNumbers[i] }}
                                                        </slot>
                                                    </span>
                                                </td>
                                                <td
                                                    v-for="date of week"
                                                    :key="date.day + '' + date.month"
                                                    :aria-label="date.day"
                                                    :class="cx('day', { date })"
                                                    v-bind="
                                                        ptm('day', {
                                                            context: {
                                                                date,
                                                                today: date.today,
                                                                otherMonth: date.otherMonth,
                                                                selected: isSelected(date),
                                                                disabled: !date.selectable
                                                            }
                                                        })
                                                    "
                                                    :data-p-today="date.today"
                                                    :data-p-other-month="date.otherMonth"
                                                    data-pc-group-section="tablebodycell"
                                                >
                                                    <span
                                                        v-ripple
                                                        :class="cx('dayLabel', { date })"
                                                        @click="onDateSelect($event, date)"
                                                        draggable="false"
                                                        @keydown="onDateCellKeydown($event, date, groupIndex)"
                                                        :aria-selected="isSelected(date)"
                                                        :aria-disabled="!date.selectable"
                                                        v-bind="
                                                            ptm('dayLabel', {
                                                                context: {
                                                                    date,
                                                                    today: date.today,
                                                                    otherMonth: date.otherMonth,
                                                                    selected: isSelected(date),
                                                                    disabled: !date.selectable
                                                                }
                                                            })
                                                        "
                                                        :data-p-disabled="!date.selectable"
                                                        :data-p-highlight="isSelected(date)"
                                                        data-pc-group-section="tablebodycelllabel"
                                                    >
                                                        <slot name="date" :date="date">{{ date.day }}</slot>
                                                    </span>
                                                    <div v-if="isSelected(date)" class="p-hidden-accessible" aria-live="polite" v-bind="ptm('hiddenSelectedDay')" :data-p-hidden-accessible="true">
                                                        {{ date.day }}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div v-if="currentView === 'month'" :class="cx('monthPicker')" v-bind="ptm('monthPicker')">
                            <span
                                v-for="(m, i) of monthPickerValues"
                                :key="m"
                                v-ripple
                                @click="onMonthSelect($event, { month: m, index: i })"
                                @keydown="onMonthCellKeydown($event, { month: m, index: i })"
                                :class="cx('month', { month: m, index: i })"
                                v-bind="
                                    ptm('month', {
                                        context: {
                                            month: m,
                                            monthIndex: i,
                                            selected: isMonthSelected(i),
                                            disabled: !m.selectable
                                        }
                                    })
                                "
                                :data-p-disabled="!m.selectable"
                                :data-p-highlight="isMonthSelected(i)"
                            >
                                {{ m.value }}
                                <div v-if="isMonthSelected(i)" class="p-hidden-accessible" aria-live="polite" v-bind="ptm('hiddenMonth')" :data-p-hidden-accessible="true">
                                    {{ m.value }}
                                </div>
                            </span>
                        </div>
                        <div v-if="currentView === 'year'" :class="cx('yearPicker')" v-bind="ptm('yearPicker')">
                            <span
                                v-for="y of yearPickerValues"
                                :key="y.value"
                                v-ripple
                                @click="onYearSelect($event, y)"
                                @keydown="onYearCellKeydown($event, y)"
                                :class="cx('year', { year: y })"
                                v-bind="
                                    ptm('year', {
                                        context: {
                                            year: y,
                                            selected: isYearSelected(y.value),
                                            disabled: !y.selectable
                                        }
                                    })
                                "
                                :data-p-disabled="!y.selectable"
                                :data-p-highlight="isYearSelected(y.value)"
                            >
                                {{ y.value }}
                                <div v-if="isYearSelected(y.value)" class="p-hidden-accessible" aria-live="polite" v-bind="ptm('hiddenYear')" :data-p-hidden-accessible="true">
                                    {{ y.value }}
                                </div>
                            </span>
                        </div>
                    </template>
                    <div v-if="(showTime || timeOnly) && currentView === 'date'" :class="cx('timePicker')" v-bind="ptm('timePicker')">
                        <div :class="cx('hourPicker')" v-bind="ptm('hourPicker')" data-pc-group-section="timepickerContainer">
                            <button
                                v-ripple
                                :class="cx('incrementButton')"
                                :aria-label="$primevue.config.locale.nextHour"
                                @mousedown="onTimePickerElementMouseDown($event, 0, 1)"
                                @mouseup="onTimePickerElementMouseUp($event)"
                                @keydown="onContainerButtonKeydown"
                                @mouseleave="onTimePickerElementMouseLeave()"
                                @keydown.enter="onTimePickerElementMouseDown($event, 0, 1)"
                                @keydown.space="onTimePickerElementMouseDown($event, 0, 1)"
                                @keyup.enter="onTimePickerElementMouseUp($event)"
                                @keyup.space="onTimePickerElementMouseUp($event)"
                                type="button"
                                v-bind="ptm('incrementButton')"
                                data-pc-group-section="timepickerbutton"
                            >
                                <slot name="incrementicon">
                                    <component :is="incrementIcon ? 'span' : 'ChevronUpIcon'" :class="incrementIcon" v-bind="ptm('incrementIcon')" data-pc-group-section="timepickerlabel" />
                                </slot>
                            </button>
                            <span v-bind="ptm('hour')" data-pc-group-section="timepickerlabel">{{ formattedCurrentHour }}</span>
                            <button
                                v-ripple
                                :class="cx('decrementButton')"
                                :aria-label="$primevue.config.locale.prevHour"
                                @mousedown="onTimePickerElementMouseDown($event, 0, -1)"
                                @mouseup="onTimePickerElementMouseUp($event)"
                                @keydown="onContainerButtonKeydown"
                                @mouseleave="onTimePickerElementMouseLeave()"
                                @keydown.enter="onTimePickerElementMouseDown($event, 0, -1)"
                                @keydown.space="onTimePickerElementMouseDown($event, 0, -1)"
                                @keyup.enter="onTimePickerElementMouseUp($event)"
                                @keyup.space="onTimePickerElementMouseUp($event)"
                                type="button"
                                v-bind="ptm('decrementButton')"
                                data-pc-group-section="timepickerbutton"
                            >
                                <slot name="decrementicon">
                                    <component :is="decrementIcon ? 'span' : 'ChevronDownIcon'" :class="decrementIcon" v-bind="ptm('decrementIcon')" data-pc-group-section="timepickerlabel" />
                                </slot>
                            </button>
                        </div>
                        <div :class="cx('separatorContainer')" v-bind="ptm('separatorContainer')" data-pc-group-section="timepickerContainer">
                            <span v-bind="ptm('separator')" data-pc-group-section="timepickerlabel">{{ timeSeparator }}</span>
                        </div>
                        <div :class="cx('minutePicker')" v-bind="ptm('minutePicker')" data-pc-group-section="timepickerContainer">
                            <button
                                v-ripple
                                :class="cx('incrementButton')"
                                :aria-label="$primevue.config.locale.nextMinute"
                                @mousedown="onTimePickerElementMouseDown($event, 1, 1)"
                                @mouseup="onTimePickerElementMouseUp($event)"
                                @keydown="onContainerButtonKeydown"
                                :disabled="disabled"
                                @mouseleave="onTimePickerElementMouseLeave()"
                                @keydown.enter="onTimePickerElementMouseDown($event, 1, 1)"
                                @keydown.space="onTimePickerElementMouseDown($event, 1, 1)"
                                @keyup.enter="onTimePickerElementMouseUp($event)"
                                @keyup.space="onTimePickerElementMouseUp($event)"
                                type="button"
                                v-bind="ptm('incrementButton')"
                                data-pc-group-section="timepickerbutton"
                            >
                                <slot name="incrementicon">
                                    <component :is="incrementIcon ? 'span' : 'ChevronUpIcon'" :class="incrementIcon" v-bind="ptm('incrementIcon')" data-pc-group-section="timepickerlabel" />
                                </slot>
                            </button>
                            <span v-bind="ptm('minute')" data-pc-group-section="timepickerlabel">{{ formattedCurrentMinute }}</span>
                            <button
                                v-ripple
                                :class="cx('decrementButton')"
                                :aria-label="$primevue.config.locale.prevMinute"
                                @mousedown="onTimePickerElementMouseDown($event, 1, -1)"
                                @mouseup="onTimePickerElementMouseUp($event)"
                                @keydown="onContainerButtonKeydown"
                                :disabled="disabled"
                                @mouseleave="onTimePickerElementMouseLeave()"
                                @keydown.enter="onTimePickerElementMouseDown($event, 1, -1)"
                                @keydown.space="onTimePickerElementMouseDown($event, 1, -1)"
                                @keyup.enter="onTimePickerElementMouseUp($event)"
                                @keyup.space="onTimePickerElementMouseUp($event)"
                                type="button"
                                v-bind="ptm('decrementButton')"
                                data-pc-group-section="timepickerbutton"
                            >
                                <slot name="decrementicon">
                                    <component :is="decrementIcon ? 'span' : 'ChevronDownIcon'" :class="decrementIcon" v-bind="ptm('decrementIcon')" data-pc-group-section="timepickerlabel" />
                                </slot>
                            </button>
                        </div>
                        <div v-if="showSeconds" :class="cx('separatorContainer')" v-bind="ptm('separatorContainer')" data-pc-group-section="timepickerContainer">
                            <span v-bind="ptm('separator')" data-pc-group-section="timepickerlabel">{{ timeSeparator }}</span>
                        </div>
                        <div v-if="showSeconds" :class="cx('secondPicker')" v-bind="ptm('secondPicker')" data-pc-group-section="timepickerContainer">
                            <button
                                v-ripple
                                :class="cx('incrementButton')"
                                :aria-label="$primevue.config.locale.nextSecond"
                                @mousedown="onTimePickerElementMouseDown($event, 2, 1)"
                                @mouseup="onTimePickerElementMouseUp($event)"
                                @keydown="onContainerButtonKeydown"
                                :disabled="disabled"
                                @mouseleave="onTimePickerElementMouseLeave()"
                                @keydown.enter="onTimePickerElementMouseDown($event, 2, 1)"
                                @keydown.space="onTimePickerElementMouseDown($event, 2, 1)"
                                @keyup.enter="onTimePickerElementMouseUp($event)"
                                @keyup.space="onTimePickerElementMouseUp($event)"
                                type="button"
                                v-bind="ptm('incrementButton')"
                                data-pc-group-section="timepickerbutton"
                            >
                                <slot name="incrementicon">
                                    <component :is="incrementIcon ? 'span' : 'ChevronUpIcon'" :class="incrementIcon" v-bind="ptm('incrementIcon')" data-pc-group-section="timepickerlabel" />
                                </slot>
                            </button>
                            <span v-bind="ptm('second')" data-pc-group-section="timepickerlabel">{{ formattedCurrentSecond }}</span>
                            <button
                                v-ripple
                                :class="cx('decrementButton')"
                                :aria-label="$primevue.config.locale.prevSecond"
                                @mousedown="onTimePickerElementMouseDown($event, 2, -1)"
                                @mouseup="onTimePickerElementMouseUp($event)"
                                @keydown="onContainerButtonKeydown"
                                :disabled="disabled"
                                @mouseleave="onTimePickerElementMouseLeave()"
                                @keydown.enter="onTimePickerElementMouseDown($event, 2, -1)"
                                @keydown.space="onTimePickerElementMouseDown($event, 2, -1)"
                                @keyup.enter="onTimePickerElementMouseUp($event)"
                                @keyup.space="onTimePickerElementMouseUp($event)"
                                type="button"
                                v-bind="ptm('decrementButton')"
                                data-pc-group-section="timepickerbutton"
                            >
                                <slot name="decrementicon">
                                    <component :is="decrementIcon ? 'span' : 'ChevronDownIcon'" :class="decrementIcon" v-bind="ptm('decrementIcon')" data-pc-group-section="timepickerlabel" />
                                </slot>
                            </button>
                        </div>
                        <div v-if="hourFormat == '12'" :class="cx('separatorContainer')" v-bind="ptm('separatorContainer')" data-pc-group-section="timepickerContainer">
                            <span v-bind="ptm('separator')" data-pc-group-section="timepickerlabel">{{ timeSeparator }}</span>
                        </div>
                        <div v-if="hourFormat == '12'" :class="cx('ampmPicker')" v-bind="ptm('ampmPicker')">
                            <button
                                v-ripple
                                :class="cx('incrementButton')"
                                :aria-label="$primevue.config.locale.am"
                                @click="toggleAMPM($event)"
                                @keydown="onContainerButtonKeydown"
                                type="button"
                                :disabled="disabled"
                                v-bind="ptm('incrementButton')"
                                data-pc-group-section="timepickerbutton"
                            >
                                <slot name="incrementicon" :class="cx('incrementIcon')">
                                    <component :is="incrementIcon ? 'span' : 'ChevronUpIcon'" :class="cx('incrementIcon')" v-bind="ptm('incrementIcon')" data-pc-group-section="timepickerlabel" />
                                </slot>
                            </button>
                            <span v-bind="ptm('ampm')" data-pc-group-section="timepickerlabel">{{ pm ? $primevue.config.locale.pm : $primevue.config.locale.am }}</span>
                            <button
                                v-ripple
                                :class="cx('decrementButton')"
                                :aria-label="$primevue.config.locale.pm"
                                @click="toggleAMPM($event)"
                                @keydown="onContainerButtonKeydown"
                                type="button"
                                :disabled="disabled"
                                v-bind="ptm('decrementButton')"
                                data-pc-group-section="timepickerbutton"
                            >
                                <slot name="decrementicon" :class="cx('decrementIcon')">
                                    <component :is="decrementIcon ? 'span' : 'ChevronDownIcon'" :class="cx('decrementIcon')" v-bind="ptm('decrementIcon')" data-pc-group-section="timepickerlabel" />
                                </slot>
                            </button>
                        </div>
                    </div>
                    <div v-if="showButtonBar" :class="cx('buttonbar')" v-bind="ptm('buttonbar')">
                        <CalendarButton
                            type="button"
                            :label="todayLabel"
                            @click="onTodayButtonClick($event)"
                            :class="cx('todayButton')"
                            @keydown="onContainerButtonKeydown"
                            :unstyled="unstyled"
                            :pt="ptm('todayButton')"
                            data-pc-group-section="button"
                        />
                        <CalendarButton
                            type="button"
                            :label="clearLabel"
                            @click="onClearButtonClick($event)"
                            :class="cx('clearButton')"
                            @keydown="onContainerButtonKeydown"
                            :unstyled="unstyled"
                            :pt="ptm('clearButton')"
                            data-pc-group-section="button"
                        />
                    </div>
                    <slot name="footer"></slot>
                </div>
            </transition>
        </Portal>
    </span>
</template>

<script>
import Button from 'primevue/button';
import CalendarIcon from 'primevue/icons/calendar';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronLeftIcon from 'primevue/icons/chevronleft';
import ChevronRightIcon from 'primevue/icons/chevronright';
import ChevronUpIcon from 'primevue/icons/chevronup';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import Ripple from 'primevue/ripple';
import { ConnectedOverlayScrollHandler, DomHandler, UniqueComponentId, ZIndexUtils } from 'primevue/utils';
import BaseCalendar from './BaseCalendar.vue';

export default {
    name: 'Calendar',
    extends: BaseCalendar,
    inheritAttrs: false,
    emits: ['show', 'hide', 'input', 'month-change', 'year-change', 'date-select', 'update:modelValue', 'today-click', 'clear-click', 'focus', 'blur', 'keydown'],
    navigationState: null,
    timePickerChange: false,
    scrollHandler: null,
    outsideClickListener: null,
    maskClickListener: null,
    resizeListener: null,
    matchMediaListener: null,
    overlay: null,
    input: null,
    mask: null,
    previousButton: null,
    nextButton: null,
    timePickerTimer: null,
    preventFocus: false,
    typeUpdate: false,
    data() {
        return {
            d_id: this.id,
            currentMonth: null,
            currentYear: null,
            currentHour: null,
            currentMinute: null,
            currentSecond: null,
            pm: null,
            focused: false,
            overlayVisible: false,
            currentView: this.view,
            query: null,
            queryMatches: false
        };
    },
    watch: {
        id: function (newValue) {
            this.d_id = newValue || UniqueComponentId();
        },
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
        minDate() {
            this.updateCurrentMetaData();
        },
        maxDate() {
            this.updateCurrentMetaData();
        },
        months() {
            if (this.overlay) {
                if (!this.focused) {
                    if (this.inline) {
                        this.preventFocus = true;
                    }

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
        },
        view(newValue) {
            this.currentView = newValue;
        }
    },
    created() {
        this.updateCurrentMetaData();
    },
    mounted() {
        this.d_id = this.d_id || UniqueComponentId();
        this.createResponsiveStyle();
        this.bindMatchMediaListener();

        if (this.inline) {
            this.overlay && this.overlay.setAttribute(this.attributeSelector, '');

            if (!this.disabled) {
                this.preventFocus = true;
                this.initFocusableCell();

                if (this.numberOfMonths === 1) {
                    this.overlay.style.width = DomHandler.getOuterWidth(this.$el) + 'px';
                }
            }
        } else {
            this.input.value = this.formatValue(this.modelValue);
        }
    },
    updated() {
        if (this.overlay) {
            this.preventFocus = true;
            setTimeout(this.updateFocus, 0);
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
        this.unbindMatchMediaListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.overlay && this.autoZIndex) {
            ZIndexUtils.clear(this.overlay);
        }

        this.overlay = null;
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
                } else if (this.isMultipleSelection()) {
                    let selected = false;

                    for (let date of this.modelValue) {
                        selected = this.isDateEquals(date, dateMeta);

                        if (selected) {
                            break;
                        }
                    }

                    return selected;
                } else if (this.isRangeSelection()) {
                    if (this.modelValue[1]) return this.isDateEquals(this.modelValue[0], dateMeta) || this.isDateEquals(this.modelValue[1], dateMeta) || this.isDateBetween(this.modelValue[0], this.modelValue[1], dateMeta);
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

                if (this.isMultipleSelection()) {
                    return value.some((currentValue) => currentValue.getMonth() === month && currentValue.getFullYear() === this.currentYear);
                } else {
                    return value.getMonth() === month && value.getFullYear() === this.currentYear;
                }
            }

            return false;
        },
        isYearSelected(year) {
            if (this.isComparable()) {
                let value = this.isRangeSelection() ? this.modelValue[0] : this.modelValue;

                if (this.isMultipleSelection()) {
                    return value.some((currentValue) => currentValue.getFullYear() === year);
                } else {
                    return value.getFullYear() === year;
                }
            }

            return false;
        },
        isDateEquals(value, dateMeta) {
            if (value) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
            else return false;
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
            } else {
                m = month - 1;
                y = year;
            }

            return { month: m, year: y };
        },
        getNextMonthAndYear(month, year) {
            let m, y;

            if (month === 11) {
                m = 0;
                y = year + 1;
            } else {
                m = month + 1;
                y = year;
            }

            return { month: m, year: y };
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
                } else if (this.minDate.getFullYear() === year) {
                    if (this.minDate.getMonth() > month) {
                        validMin = false;
                    } else if (this.minDate.getMonth() === month) {
                        if (this.minDate.getDate() > day) {
                            validMin = false;
                        }
                    }
                }
            }

            if (this.maxDate) {
                if (this.maxDate.getFullYear() < year) {
                    validMax = false;
                } else if (this.maxDate.getFullYear() === year) {
                    if (this.maxDate.getMonth() < month) {
                        validMax = false;
                    } else if (this.maxDate.getMonth() === month) {
                        if (this.maxDate.getDate() < day) {
                            validMax = false;
                        }
                    }
                }
            }

            if (this.disabledDates) {
                validDate = !this.isDateDisabled(day, month, year);
            }

            if (this.disabledDays) {
                validDay = !this.isDayDisabled(day, month, year);
            }

            return validMin && validMax && validDate && validDay;
        },
        onOverlayEnter(el) {
            el.setAttribute(this.attributeSelector, '');
            const styles = this.touchUI ? { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } : !this.inline ? { position: 'absolute', top: '0', left: '0' } : undefined;

            DomHandler.addStyles(el, styles);

            if (this.autoZIndex) {
                if (this.touchUI) ZIndexUtils.set('modal', el, this.baseZIndex || this.$primevue.config.zIndex.modal);
                else ZIndexUtils.set('overlay', el, this.baseZIndex || this.$primevue.config.zIndex.overlay);
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
                ZIndexUtils.clear(el);
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
            if (this.showOtherMonths) {
                this.navigationState = { backward: true, button: true };
                this.navBackward(event);
            }
        },
        onNextButtonClick(event) {
            if (this.showOtherMonths) {
                this.navigationState = { backward: false, button: true };
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
                this.$emit('year-change', { month: this.currentMonth, year: this.currentYear });
            } else if (this.currentView === 'year') {
                this.decrementDecade();
            } else {
                if (event.shiftKey) {
                    this.decrementYear();
                } else {
                    if (this.currentMonth === 0) {
                        this.currentMonth = 11;
                        this.decrementYear();
                    } else {
                        this.currentMonth--;
                    }

                    this.$emit('month-change', { month: this.currentMonth + 1, year: this.currentYear });
                }
            }
        },
        navForward(event) {
            event.preventDefault();

            if (!this.isEnabled()) {
                return;
            }

            if (this.currentView === 'month') {
                this.incrementYear();
                this.$emit('year-change', { month: this.currentMonth, year: this.currentYear });
            } else if (this.currentView === 'year') {
                this.incrementDecade();
            } else {
                if (event.shiftKey) {
                    this.incrementYear();
                } else {
                    if (this.currentMonth === 11) {
                        this.currentMonth = 0;
                        this.incrementYear();
                    } else {
                        this.currentMonth++;
                    }

                    this.$emit('month-change', { month: this.currentMonth + 1, year: this.currentYear });
                }
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
            return !this.disabled && !this.readonly;
        },
        updateCurrentTimeMeta(date) {
            let currentHour = date.getHours();

            if (this.hourFormat === '12') {
                this.pm = currentHour > 11;

                if (currentHour >= 12) currentHour = currentHour == 12 ? 12 : currentHour - 12;
                else currentHour = currentHour == 0 ? 12 : currentHour;
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
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {
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
                    if (this.overlayVisible && !DomHandler.isTouchDevice()) {
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
        bindMatchMediaListener() {
            if (!this.matchMediaListener) {
                const query = matchMedia(`(max-width: ${this.breakpoint})`);

                this.query = query;
                this.queryMatches = query.matches;

                this.matchMediaListener = () => {
                    this.queryMatches = query.matches;
                    this.mobileActive = false;
                };

                this.query.addEventListener('change', this.matchMediaListener);
            }
        },
        unbindMatchMediaListener() {
            if (this.matchMediaListener) {
                this.query.removeEventListener('change', this.matchMediaListener);
                this.matchMediaListener = null;
            }
        },
        isOutsideClicked(event) {
            return !(this.$el.isSameNode(event.target) || this.isNavIconClicked(event) || this.$el.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
        },
        isNavIconClicked(event) {
            return (this.previousButton && (this.previousButton.isSameNode(event.target) || this.previousButton.contains(event.target))) || (this.nextButton && (this.nextButton.isSameNode(event.target) || this.nextButton.contains(event.target)));
        },
        alignOverlay() {
            if (this.touchUI) {
                this.enableModality();
            } else if (this.overlay) {
                if (this.appendTo === 'self' || this.inline) {
                    DomHandler.relativePosition(this.overlay, this.$el);
                } else {
                    if (this.view === 'date') {
                        this.overlay.style.width = DomHandler.getOuterWidth(this.overlay) + 'px';
                        this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + 'px';
                    } else {
                        this.overlay.style.width = DomHandler.getOuterWidth(this.$el) + 'px';
                    }

                    DomHandler.absolutePosition(this.overlay, this.$el);
                }
            }
        },
        onButtonClick() {
            if (this.isEnabled()) {
                if (!this.overlayVisible) {
                    this.input.focus();
                    this.overlayVisible = true;
                } else {
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
            this.$emit('month-change', { month: this.currentMonth + 1, year: this.currentYear });
        },
        onYearDropdownChange(value) {
            this.currentYear = parseInt(value);
            this.$emit('year-change', { month: this.currentMonth + 1, year: this.currentYear });
        },
        onDateSelect(event, dateMeta) {
            if (this.disabled || !dateMeta.selectable) {
                return;
            }

            DomHandler.find(this.overlay, 'table td span:not([data-p-disabled="true"])').forEach((cell) => (cell.tabIndex = -1));

            if (event) {
                event.currentTarget.focus();
            }

            if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
                let newValue = this.modelValue.filter((date) => !this.isDateEquals(date, dateMeta));

                this.updateModel(newValue);
            } else {
                if (this.shouldSelectDate(dateMeta)) {
                    if (dateMeta.otherMonth) {
                        this.currentMonth = dateMeta.month;
                        this.currentYear = dateMeta.year;
                        this.selectDate(dateMeta);
                    } else {
                        this.selectDate(dateMeta);
                    }
                }
            }

            if (this.isSingleSelection() && (!this.showTime || this.hideOnDateTimeSelect)) {
                setTimeout(() => {
                    if (this.input) {
                        this.input.focus();
                    }

                    this.overlayVisible = false;
                }, 150);
            }
        },
        selectDate(dateMeta) {
            let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

            if (this.showTime) {
                if (this.hourFormat === '12' && this.currentHour !== 12) {
                    this.pm ? date.setHours(this.currentHour + 12) : date.setHours(this.currentHour);
                }

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
            } else if (this.isMultipleSelection()) {
                modelVal = this.modelValue ? [...this.modelValue, date] : [date];
            } else if (this.isRangeSelection()) {
                if (this.modelValue && this.modelValue.length) {
                    let startDate = this.modelValue[0];
                    let endDate = this.modelValue[1];

                    if (!endDate && date.getTime() >= startDate.getTime()) {
                        endDate = date;
                    } else {
                        startDate = date;
                        endDate = null;
                    }

                    modelVal = [startDate, endDate];
                } else {
                    modelVal = [date, null];
                }
            }

            if (modelVal !== null) {
                this.updateModel(modelVal);
            }

            if (this.isRangeSelection() && this.hideOnRangeSelection && modelVal[1] !== null) {
                setTimeout(() => {
                    this.overlayVisible = false;
                }, 150);
            }

            this.$emit('date-select', date);
        },
        updateModel(value) {
            this.$emit('update:modelValue', value);
        },
        shouldSelectDate() {
            if (this.isMultipleSelection()) return this.maxDateCount != null ? this.maxDateCount > (this.modelValue ? this.modelValue.length : 0) : true;
            else return true;
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
                    } else if (this.isMultipleSelection()) {
                        for (let i = 0; i < value.length; i++) {
                            let dateAsString = this.formatDateTime(value[i]);

                            formattedValue += dateAsString;

                            if (i !== value.length - 1) {
                                formattedValue += ', ';
                            }
                        }
                    } else if (this.isRangeSelection()) {
                        if (value && value.length) {
                            let startDate = value[0];
                            let endDate = value[1];

                            formattedValue = this.formatDateTime(startDate);

                            if (endDate) {
                                formattedValue += ' - ' + this.formatDateTime(endDate);
                            }
                        }
                    }
                } catch (err) {
                    formattedValue = value;
                }
            }

            return formattedValue;
        },
        formatDateTime(date) {
            let formattedValue = null;

            if (date) {
                if (this.timeOnly) {
                    formattedValue = this.formatTime(date);
                } else {
                    formattedValue = this.formatDate(date, this.datePattern);

                    if (this.showTime) {
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
                    const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

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
                    return lookAhead(match) ? longNames[value] : shortNames[value];
                };

            let output = '';
            let literal = false;

            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
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
                                output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case 'm':
                                output += formatNumber('m', date.getMonth() + 1, 2);
                                break;
                            case 'M':
                                output += formatName('M', date.getMonth(), this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
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
                            case "'":
                                if (lookAhead("'")) {
                                    output += "'";
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
                output += hours === 0 ? 12 : hours < 10 ? '0' + hours : hours;
            } else {
                output += hours < 10 ? '0' + hours : hours;
            }

            output += ':';
            output += minutes < 10 ? '0' + minutes : minutes;

            if (this.showSeconds) {
                output += ':';
                output += seconds < 10 ? '0' + seconds : seconds;
            }

            if (this.hourFormat === '12') {
                output += date.getHours() > 11 ? ` ${this.$primevue.config.locale.pm}` : ` ${this.$primevue.config.locale.am}`;
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
            let i = interval || 500;

            this.clearTimePickerTimer();
            this.timePickerTimer = setTimeout(() => {
                this.repeat(event, 100, type, direction);
            }, i);

            switch (type) {
                case 0:
                    if (direction === 1) this.incrementHour(event);
                    else this.decrementHour(event);
                    break;

                case 1:
                    if (direction === 1) this.incrementMinute(event);
                    else this.decrementMinute(event);
                    break;

                case 2:
                    if (direction === 1) this.incrementSecond(event);
                    else this.decrementSecond(event);
                    break;
            }
        },
        convertTo24Hour(hours, pm) {
            if (this.hourFormat == '12') {
                if (hours === 12) {
                    return pm ? 12 : 0;
                } else {
                    return pm ? hours + 12 : hours;
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
            let newHour = this.currentHour + Number(this.stepHour);
            let newPM = this.pm;

            if (this.hourFormat == '24') newHour = newHour >= 24 ? newHour - 24 : newHour;
            else if (this.hourFormat == '12') {
                // Before the AM/PM break, now after
                if (prevHour < 12 && newHour > 11) {
                    newPM = !this.pm;
                }

                newHour = newHour >= 13 ? newHour - 12 : newHour;
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

            if (this.hourFormat == '24') newHour = newHour < 0 ? 24 + newHour : newHour;
            else if (this.hourFormat == '12') {
                // If we were at noon/midnight, then switch
                if (this.currentHour === 12) {
                    newPM = !this.pm;
                }

                newHour = newHour <= 0 ? 12 + newHour : newHour;
            }

            if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
                this.currentHour = newHour;
                this.pm = newPM;
            }

            event.preventDefault();
        },
        incrementMinute(event) {
            let newMinute = this.currentMinute + Number(this.stepMinute);

            if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
                this.currentMinute = newMinute > 59 ? newMinute - 60 : newMinute;
            }

            event.preventDefault();
        },
        decrementMinute(event) {
            let newMinute = this.currentMinute - this.stepMinute;

            newMinute = newMinute < 0 ? 60 + newMinute : newMinute;

            if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
                this.currentMinute = newMinute;
            }

            event.preventDefault();
        },
        incrementSecond(event) {
            let newSecond = this.currentSecond + Number(this.stepSecond);

            if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
                this.currentSecond = newSecond > 59 ? newSecond - 60 : newSecond;
            }

            event.preventDefault();
        },
        decrementSecond(event) {
            let newSecond = this.currentSecond - this.stepSecond;

            newSecond = newSecond < 0 ? 60 + newSecond : newSecond;

            if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
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
                if (this.currentHour === 12) value.setHours(this.pm ? 12 : 0);
                else value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
            } else {
                value.setHours(this.currentHour);
            }

            value.setMinutes(this.currentMinute);
            value.setSeconds(this.currentSecond);

            if (this.isRangeSelection()) {
                if (this.modelValue[1]) value = [this.modelValue[0], value];
                else value = [value, null];
            }

            if (this.isMultipleSelection()) {
                value = [...this.modelValue.slice(0, -1), value];
            }

            this.updateModel(value);
            this.$emit('date-select', value);
            setTimeout(() => (this.timePickerChange = false), 0);
        },
        toggleAMPM(event) {
            const validHour = this.validateTime(this.currentHour, this.currentMinute, this.currentSecond, !this.pm);

            if (!validHour && (this.maxDate || this.minDate)) return;

            this.pm = !this.pm;
            this.updateModelTime();
            event.preventDefault();
        },
        clearTimePickerTimer() {
            if (this.timePickerTimer) {
                clearInterval(this.timePickerTimer);
            }
        },
        onMonthSelect(event, { month, index }) {
            if (this.view === 'month') {
                this.onDateSelect(event, { year: this.currentYear, month: index, day: 1, selectable: true });
            } else {
                this.currentMonth = index;
                this.currentView = 'date';
                this.$emit('month-change', { month: this.currentMonth + 1, year: this.currentYear });
            }

            setTimeout(this.updateFocus, 0);
        },
        onYearSelect(event, year) {
            if (this.view === 'year') {
                this.onDateSelect(event, { year: year.value, month: 0, day: 1, selectable: true });
            } else {
                this.currentYear = year.value;
                this.currentView = 'month';
                this.$emit('year-change', { month: this.currentMonth + 1, year: this.currentYear });
            }

            setTimeout(this.updateFocus, 0);
        },
        enableModality() {
            if (!this.mask) {
                let styleClass = 'p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay p-component-overlay-enter';

                this.mask = DomHandler.createElement('div', {
                    class: !this.isUnstyled && styleClass,
                    'p-bind': this.ptm('datepickermask')
                });
                this.mask.style.zIndex = String(parseInt(this.overlay.style.zIndex, 10) - 1);

                this.maskClickListener = () => {
                    this.overlayVisible = false;
                };

                this.mask.addEventListener('click', this.maskClickListener);

                document.body.appendChild(this.mask);
                DomHandler.blockBodyScroll();
            }
        },
        disableModality() {
            if (this.mask) {
                if (this.isUnstyled) {
                    this.destroyMask();
                } else {
                    DomHandler.addClass(this.mask, 'p-component-overlay-leave');
                    this.mask.addEventListener('animationend', () => {
                        this.destroyMask();
                    });
                }
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

                if (DomHandler.isAttributeEquals(bodyChild, 'data-pc-section', 'datepickermask')) {
                    hasBlockerMasks = true;
                    break;
                }
            }

            if (!hasBlockerMasks) {
                DomHandler.unblockBodyScroll();
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
            } else if (value.every((v) => this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false))) {
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
            } else if (this.isMultipleSelection()) {
                let tokens = text.split(',');

                value = [];

                for (let token of tokens) {
                    value.push(this.parseDateTime(token.trim()));
                }
            } else if (this.isRangeSelection()) {
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
            } else {
                const dateFormat = this.datePattern;

                if (this.showTime) {
                    date = this.parseDate(parts[0], dateFormat);
                    this.populateTime(date, parts[1], parts[2]);
                } else {
                    date = this.parseDate(text, dateFormat);
                }
            }

            return date;
        },
        populateTime(value, timeString, ampm) {
            if (this.hourFormat == '12' && !ampm) {
                throw 'Invalid Time';
            }

            this.pm = ampm === this.$primevue.config.locale.pm || ampm === this.$primevue.config.locale.pm.toLowerCase();
            let time = this.parseTime(timeString);

            value.setHours(time.hour);
            value.setMinutes(time.minute);
            value.setSeconds(time.second);
        },
        parseTime(value) {
            let tokens = value.split(':');
            let validTokenLength = this.showSeconds ? 3 : 2;
            let regex = /^[0-9][0-9]$/;

            if (tokens.length !== validTokenLength || !tokens[0].match(regex) || !tokens[1].match(regex) || (this.showSeconds && !tokens[2].match(regex))) {
                throw 'Invalid time';
            }

            let h = parseInt(tokens[0]);
            let m = parseInt(tokens[1]);
            let s = this.showSeconds ? parseInt(tokens[2]) : null;

            if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (this.hourFormat == '12' && h > 12) || (this.showSeconds && (isNaN(s) || s > 59))) {
                throw 'Invalid time';
            } else {
                if (this.hourFormat == '12' && h !== 12 && this.pm) {
                    h += 12;
                } else if (this.hourFormat == '12' && h == 12 && !this.pm) {
                    h = 0;
                }

                return { hour: h, minute: m, second: s };
            }
        },
        parseDate(value, format) {
            if (format == null || value == null) {
                throw 'Invalid arguments';
            }

            value = typeof value === 'object' ? value.toString() : value + '';

            if (value === '') {
                return null;
            }

            let iFormat,
                dim,
                extra,
                iValue = 0,
                shortYearCutoff = typeof this.shortYearCutoff !== 'string' ? this.shortYearCutoff : (new Date().getFullYear() % 100) + parseInt(this.shortYearCutoff, 10),
                year = -1,
                month = -1,
                day = -1,
                doy = -1,
                literal = false,
                date,
                lookAhead = (match) => {
                    let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

                    if (matches) {
                        iFormat++;
                    }

                    return matches;
                },
                getNumber = (match) => {
                    let isDoubled = lookAhead(match),
                        size = match === '@' ? 14 : match === '!' ? 20 : match === 'y' && isDoubled ? 4 : match === 'o' ? 3 : 2,
                        minSize = match === 'y' ? size : 1,
                        digits = new RegExp('^\\d{' + minSize + ',' + size + '}'),
                        num = value.substring(iValue).match(digits);

                    if (!num) {
                        throw 'Missing number at position ' + iValue;
                    }

                    iValue += num[0].length;

                    return parseInt(num[0], 10);
                },
                getName = (match, shortNames, longNames) => {
                    let index = -1;
                    let arr = lookAhead(match) ? longNames : shortNames;
                    let names = [];

                    for (let i = 0; i < arr.length; i++) {
                        names.push([i, arr[i]]);
                    }

                    names.sort((a, b) => {
                        return -(a[1].length - b[1].length);
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
                        throw 'Unknown name at position ' + iValue;
                    }
                },
                checkLiteral = () => {
                    if (value.charAt(iValue) !== format.charAt(iFormat)) {
                        throw 'Unexpected literal at position ' + iValue;
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
                        case 'd':
                            day = getNumber('d');
                            break;
                        case 'D':
                            getName('D', this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
                            break;
                        case 'o':
                            doy = getNumber('o');
                            break;
                        case 'm':
                            month = getNumber('m');
                            break;
                        case 'M':
                            month = getName('M', this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
                            break;
                        case 'y':
                            year = getNumber('y');
                            break;
                        case '@':
                            date = new Date(getNumber('@'));
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case '!':
                            date = new Date((getNumber('!') - this.ticksTo1970) / 10000);
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
                    throw 'Extra/unparsed characters found in date: ' + extra;
                }
            }

            if (year === -1) {
                year = new Date().getFullYear();
            } else if (year < 100) {
                year += new Date().getFullYear() - (new Date().getFullYear() % 100) + (year <= shortYearCutoff ? 0 : -100);
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
                throw 'Invalid date'; // E.g. 31/02/00
            }

            return date;
        },
        getWeekNumber(date) {
            let checkDate = new Date(date.getTime());

            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            let time = checkDate.getTime();

            checkDate.setMonth(0);
            checkDate.setDate(1);

            return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
        },
        onDateCellKeydown(event, date, groupIndex) {
            const cellContent = event.currentTarget;
            const cell = cellContent.parentElement;

            const cellIndex = DomHandler.index(cell);

            switch (event.code) {
                case 'ArrowDown': {
                    cellContent.tabIndex = '-1';

                    let nextRow = cell.parentElement.nextElementSibling;

                    if (nextRow) {
                        let tableRowIndex = DomHandler.index(cell.parentElement);
                        const tableRows = Array.from(cell.parentElement.parentElement.children);
                        const nextTableRows = tableRows.slice(tableRowIndex + 1);

                        let hasNextFocusableDate = nextTableRows.find((el) => {
                            let focusCell = el.children[cellIndex].children[0];

                            return !DomHandler.getAttribute(focusCell, 'data-p-disabled');
                        });

                        if (hasNextFocusableDate) {
                            let focusCell = hasNextFocusableDate.children[cellIndex].children[0];

                            focusCell.tabIndex = '0';
                            focusCell.focus();
                        } else {
                            this.navigationState = { backward: false };
                            this.navForward(event);
                        }
                    } else {
                        this.navigationState = { backward: false };
                        this.navForward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowUp': {
                    cellContent.tabIndex = '-1';

                    if (event.altKey) {
                        this.overlayVisible = false;
                        this.focused = true;
                    } else {
                        let prevRow = cell.parentElement.previousElementSibling;

                        if (prevRow) {
                            let tableRowIndex = DomHandler.index(cell.parentElement);
                            const tableRows = Array.from(cell.parentElement.parentElement.children);
                            const prevTableRows = tableRows.slice(0, tableRowIndex).reverse();

                            let hasNextFocusableDate = prevTableRows.find((el) => {
                                let focusCell = el.children[cellIndex].children[0];

                                return !DomHandler.getAttribute(focusCell, 'data-p-disabled');
                            });

                            if (hasNextFocusableDate) {
                                let focusCell = hasNextFocusableDate.children[cellIndex].children[0];

                                focusCell.tabIndex = '0';
                                focusCell.focus();
                            } else {
                                this.navigationState = { backward: true };
                                this.navBackward(event);
                            }
                        } else {
                            this.navigationState = { backward: true };
                            this.navBackward(event);
                        }
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    cellContent.tabIndex = '-1';
                    let prevCell = cell.previousElementSibling;

                    if (prevCell) {
                        const cells = Array.from(cell.parentElement.children);
                        const prevCells = cells.slice(0, cellIndex).reverse();

                        let hasNextFocusableDate = prevCells.find((el) => {
                            let focusCell = el.children[0];

                            return !DomHandler.getAttribute(focusCell, 'data-p-disabled');
                        });

                        if (hasNextFocusableDate) {
                            let focusCell = hasNextFocusableDate.children[0];

                            focusCell.tabIndex = '0';
                            focusCell.focus();
                        } else {
                            this.navigateToMonth(event, true, groupIndex);
                        }
                    } else {
                        this.navigateToMonth(event, true, groupIndex);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    cellContent.tabIndex = '-1';
                    let nextCell = cell.nextElementSibling;

                    if (nextCell) {
                        const cells = Array.from(cell.parentElement.children);
                        const nextCells = cells.slice(cellIndex + 1);
                        let hasNextFocusableDate = nextCells.find((el) => {
                            let focusCell = el.children[0];

                            return !DomHandler.getAttribute(focusCell, 'data-p-disabled');
                        });

                        if (hasNextFocusableDate) {
                            let focusCell = hasNextFocusableDate.children[0];

                            focusCell.tabIndex = '0';
                            focusCell.focus();
                        } else {
                            this.navigateToMonth(event, false, groupIndex);
                        }
                    } else {
                        this.navigateToMonth(event, false, groupIndex);
                    }

                    event.preventDefault();
                    break;
                }

                case 'Enter':
                case 'NumpadEnter':

                case 'Space': {
                    this.onDateSelect(event, date);
                    event.preventDefault();
                    break;
                }

                case 'Escape': {
                    this.overlayVisible = false;
                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    if (!this.inline) {
                        this.trapFocus(event);
                    }

                    break;
                }

                case 'Home': {
                    cellContent.tabIndex = '-1';
                    let currentRow = cell.parentElement;
                    let focusCell = currentRow.children[0].children[0];

                    if (DomHandler.getAttribute(focusCell, 'data-p-disabled')) {
                        this.navigateToMonth(event, true, groupIndex);
                    } else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'End': {
                    cellContent.tabIndex = '-1';
                    let currentRow = cell.parentElement;
                    let focusCell = currentRow.children[currentRow.children.length - 1].children[0];

                    if (DomHandler.getAttribute(focusCell, 'data-p-disabled')) {
                        this.navigateToMonth(event, false, groupIndex);
                    } else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'PageUp': {
                    cellContent.tabIndex = '-1';
                    if (event.shiftKey) {
                        this.navigationState = { backward: true };
                        this.navBackward(event);
                    } else this.navigateToMonth(event, true, groupIndex);

                    event.preventDefault();
                    break;
                }

                case 'PageDown': {
                    cellContent.tabIndex = '-1';
                    if (event.shiftKey) {
                        this.navigationState = { backward: false };
                        this.navForward(event);
                    } else this.navigateToMonth(event, false, groupIndex);

                    event.preventDefault();
                    break;
                }

                default:
                    //no op
                    break;
            }
        },
        navigateToMonth(event, prev, groupIndex) {
            if (prev) {
                if (this.numberOfMonths === 1 || groupIndex === 0) {
                    this.navigationState = { backward: true };
                    this.navBackward(event);
                } else {
                    let prevMonthContainer = this.overlay.children[groupIndex - 1];
                    let cells = DomHandler.find(prevMonthContainer, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
                    let focusCell = cells[cells.length - 1];

                    focusCell.tabIndex = '0';
                    focusCell.focus();
                }
            } else {
                if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
                    this.navigationState = { backward: false };
                    this.navForward(event);
                } else {
                    let nextMonthContainer = this.overlay.children[groupIndex + 1];
                    let focusCell = DomHandler.findSingle(nextMonthContainer, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');

                    focusCell.tabIndex = '0';
                    focusCell.focus();
                }
            }
        },
        onMonthCellKeydown(event, index) {
            const cell = event.currentTarget;

            switch (event.code) {
                case 'ArrowUp':

                case 'ArrowDown': {
                    cell.tabIndex = '-1';
                    var cells = cell.parentElement.children;
                    var cellIndex = DomHandler.index(cell);
                    let nextCell = cells[event.code === 'ArrowDown' ? cellIndex + 3 : cellIndex - 3];

                    if (nextCell) {
                        nextCell.tabIndex = '0';
                        nextCell.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    cell.tabIndex = '-1';
                    let prevCell = cell.previousElementSibling;

                    if (prevCell) {
                        prevCell.tabIndex = '0';
                        prevCell.focus();
                    } else {
                        this.navigationState = { backward: true };
                        this.navBackward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    cell.tabIndex = '-1';
                    let nextCell = cell.nextElementSibling;

                    if (nextCell) {
                        nextCell.tabIndex = '0';
                        nextCell.focus();
                    } else {
                        this.navigationState = { backward: false };
                        this.navForward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'PageUp': {
                    if (event.shiftKey) return;
                    this.navigationState = { backward: true };
                    this.navBackward(event);

                    break;
                }

                case 'PageDown': {
                    if (event.shiftKey) return;
                    this.navigationState = { backward: false };
                    this.navForward(event);

                    break;
                }

                case 'Enter':
                case 'NumpadEnter':

                case 'Space': {
                    this.onMonthSelect(event, index);
                    event.preventDefault();
                    break;
                }

                case 'Escape': {
                    this.overlayVisible = false;
                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    this.trapFocus(event);
                    break;
                }

                default:
                    //no op
                    break;
            }
        },
        onYearCellKeydown(event, index) {
            const cell = event.currentTarget;

            switch (event.code) {
                case 'ArrowUp':

                case 'ArrowDown': {
                    cell.tabIndex = '-1';
                    var cells = cell.parentElement.children;
                    var cellIndex = DomHandler.index(cell);
                    let nextCell = cells[event.code === 'ArrowDown' ? cellIndex + 2 : cellIndex - 2];

                    if (nextCell) {
                        nextCell.tabIndex = '0';
                        nextCell.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    cell.tabIndex = '-1';
                    let prevCell = cell.previousElementSibling;

                    if (prevCell) {
                        prevCell.tabIndex = '0';
                        prevCell.focus();
                    } else {
                        this.navigationState = { backward: true };
                        this.navBackward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    cell.tabIndex = '-1';
                    let nextCell = cell.nextElementSibling;

                    if (nextCell) {
                        nextCell.tabIndex = '0';
                        nextCell.focus();
                    } else {
                        this.navigationState = { backward: false };
                        this.navForward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'PageUp': {
                    if (event.shiftKey) return;
                    this.navigationState = { backward: true };
                    this.navBackward(event);

                    break;
                }

                case 'PageDown': {
                    if (event.shiftKey) return;
                    this.navigationState = { backward: false };
                    this.navForward(event);

                    break;
                }

                case 'Enter':
                case 'NumpadEnter':

                case 'Space': {
                    this.onYearSelect(event, index);
                    event.preventDefault();
                    break;
                }

                case 'Escape': {
                    this.overlayVisible = false;
                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    this.trapFocus(event);
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

                    if (this.navigationState.backward) this.previousButton.focus();
                    else this.nextButton.focus();
                } else {
                    if (this.navigationState.backward) {
                        let cells;

                        if (this.currentView === 'month') {
                            cells = DomHandler.find(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"]:not([data-p-disabled="true"])');
                        } else if (this.currentView === 'year') {
                            cells = DomHandler.find(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"]:not([data-p-disabled="true"])');
                        } else {
                            cells = DomHandler.find(this.overlay, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
                        }

                        if (cells && cells.length > 0) {
                            cell = cells[cells.length - 1];
                        }
                    } else {
                        if (this.currentView === 'month') {
                            cell = DomHandler.findSingle(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"]:not([data-p-disabled="true"])');
                        } else if (this.currentView === 'year') {
                            cell = DomHandler.findSingle(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"]:not([data-p-disabled="true"])');
                        } else {
                            cell = DomHandler.findSingle(this.overlay, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
                        }
                    }

                    if (cell) {
                        cell.tabIndex = '0';
                        cell.focus();
                    }
                }

                this.navigationState = null;
            } else {
                this.initFocusableCell();
            }
        },
        initFocusableCell() {
            let cell;

            if (this.currentView === 'month') {
                let cells = DomHandler.find(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"]');
                let selectedCell = DomHandler.findSingle(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"][data-p-highlight="true"]');

                cells.forEach((cell) => (cell.tabIndex = -1));
                cell = selectedCell || cells[0];
            } else if (this.currentView === 'year') {
                let cells = DomHandler.find(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"]');
                let selectedCell = DomHandler.findSingle(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"][data-p-highlight="true"]');

                cells.forEach((cell) => (cell.tabIndex = -1));
                cell = selectedCell || cells[0];
            } else {
                cell = DomHandler.findSingle(this.overlay, 'span[data-p-highlight="true"]');

                if (!cell) {
                    let todayCell = DomHandler.findSingle(this.overlay, 'td.p-datepicker-today span:not([data-p-disabled="true"]):not([data-p-ink="true"])');

                    if (todayCell) cell = todayCell;
                    else cell = DomHandler.findSingle(this.overlay, '.p-datepicker-calendar td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
                }
            }

            if (cell) {
                cell.tabIndex = '0';

                if (!this.inline && (!this.navigationState || !this.navigationState.button) && !this.timePickerChange) {
                    if (!this.manualInput) cell.focus();
                }

                this.preventFocus = false;
            }
        },
        trapFocus(event) {
            event.preventDefault();
            let focusableElements = DomHandler.getFocusableElements(this.overlay);

            if (focusableElements && focusableElements.length > 0) {
                if (!document.activeElement) {
                    focusableElements[0].focus();
                } else {
                    let focusedIndex = focusableElements.indexOf(document.activeElement);

                    if (event.shiftKey) {
                        if (focusedIndex === -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();
                        else focusableElements[focusedIndex - 1].focus();
                    } else {
                        if (focusedIndex === -1) {
                            if (this.timeOnly) {
                                focusableElements[0].focus();
                            } else {
                                let spanIndex = null;

                                for (let i = 0; i < focusableElements.length; i++) {
                                    if (focusableElements[i].tagName === 'SPAN') spanIndex = i;
                                }

                                focusableElements[spanIndex].focus();
                            }
                        } else if (focusedIndex === focusableElements.length - 1) focusableElements[0].focus();
                        else focusableElements[focusedIndex + 1].focus();
                    }
                }
            }
        },
        onContainerButtonKeydown(event) {
            switch (event.code) {
                case 'Tab':
                    this.trapFocus(event);
                    break;

                case 'Escape':
                    this.overlayVisible = false;
                    event.preventDefault();
                    break;

                default:
                    //Noop
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
            } catch (err) {
                /* NoOp */
            }

            this.$emit('input', event);
        },
        onInputClick() {
            if (this.showOnFocus && this.isEnabled() && !this.overlayVisible) {
                this.overlayVisible = true;
            }
        },
        onFocus(event) {
            if (this.showOnFocus && this.isEnabled()) {
                this.overlayVisible = true;
            }

            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('blur', { originalEvent: event, value: event.target.value });

            this.focused = false;
            event.target.value = this.formatValue(this.modelValue);
        },
        onKeyDown(event) {
            if (event.code === 'ArrowDown' && this.overlay) {
                this.trapFocus(event);
            } else if (event.code === 'ArrowDown' && !this.overlay) {
                this.overlayVisible = true;
            } else if (event.code === 'Escape') {
                if (this.overlayVisible) {
                    this.overlayVisible = false;
                    event.preventDefault();
                }
            } else if (event.code === 'Tab') {
                if (this.overlay) {
                    DomHandler.getFocusableElements(this.overlay).forEach((el) => (el.tabIndex = '-1'));
                }

                if (this.overlayVisible) {
                    this.overlayVisible = false;
                }
            } else if (event.code === 'Enter') {
                if (this.manualInput && event.target.value !== null && event.target.value?.trim() !== '') {
                    try {
                        let value = this.parseValue(event.target.value);

                        if (this.isValidSelection(value)) {
                            this.overlayVisible = false;
                        }
                    } catch (err) {
                        /* NoOp */
                    }
                }
            }
        },
        overlayRef(el) {
            this.overlay = el;
        },
        inputRef(el) {
            this.input = el;
        },
        previousButtonRef(el) {
            this.previousButton = el;
        },
        nextButtonRef(el) {
            this.nextButton = el;
        },
        getMonthName(index) {
            return this.$primevue.config.locale.monthNames[index];
        },
        getYear(month) {
            return this.currentView === 'month' ? this.currentYear : month.year;
        },
        onOverlayClick(event) {
            if (!this.inline) {
                OverlayEventBus.emit('overlay-click', {
                    originalEvent: event,
                    target: this.$el
                });
            }
        },
        onOverlayKeyDown(event) {
            switch (event.code) {
                case 'Escape':
                    if (!this.inline) {
                        this.input.focus();
                        this.overlayVisible = false;
                    }

                    break;

                default:
                    break;
            }
        },
        onOverlayMouseUp(event) {
            this.onOverlayClick(event);
        },
        createResponsiveStyle() {
            if (this.numberOfMonths > 1 && this.responsiveOptions && !this.isUnstyled) {
                if (!this.responsiveStyleElement) {
                    this.responsiveStyleElement = document.createElement('style');
                    this.responsiveStyleElement.type = 'text/css';
                    DomHandler.setAttribute(this.responsiveStyleElement, 'nonce', this.$primevue?.config?.csp?.nonce);
                    document.body.appendChild(this.responsiveStyleElement);
                }

                let innerHTML = '';

                if (this.responsiveOptions) {
                    const comparer = ObjectUtils.localeComparator();
                    let responsiveOptions = [...this.responsiveOptions].filter((o) => !!(o.breakpoint && o.numMonths)).sort((o1, o2) => -1 * comparer(o1.breakpoint, o2.breakpoint));

                    for (let i = 0; i < responsiveOptions.length; i++) {
                        let { breakpoint, numMonths } = responsiveOptions[i];
                        let styles = `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                                display: inline-flex;
                            }
                        `;

                        for (let j = numMonths; j < this.numberOfMonths; j++) {
                            styles += `
                                .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                    display: none;
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
                if (this.isRangeSelection()) {
                    propValue = this.inline ? propValue[0] : propValue[1] || propValue[0];
                } else if (this.isMultipleSelection()) {
                    propValue = propValue[propValue.length - 1];
                }
            }

            if (propValue && typeof propValue !== 'string') {
                return propValue;
            } else {
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
        months() {
            let months = [];

            for (let i = 0; i < this.numberOfMonths; i++) {
                let month = this.currentMonth + i;
                let year = this.currentYear;

                if (month > 11) {
                    month = (month % 11) - 1;
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
                        for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
                            let prev = this.getPreviousMonthAndYear(month, year);

                            week.push({ day: j, month: prev.month, year: prev.year, otherMonth: true, today: this.isToday(today, j, prev.month, prev.year), selectable: this.isSelectable(j, prev.month, prev.year, true) });
                        }

                        let remainingDaysLength = 7 - week.length;

                        for (let j = 0; j < remainingDaysLength; j++) {
                            week.push({ day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year), selectable: this.isSelectable(dayNo, month, year, false) });
                            dayNo++;
                        }
                    } else {
                        for (let j = 0; j < 7; j++) {
                            if (dayNo > daysLength) {
                                let next = this.getNextMonthAndYear(month, year);

                                week.push({
                                    day: dayNo - daysLength,
                                    month: next.month,
                                    year: next.year,
                                    otherMonth: true,
                                    today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                                    selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
                                });
                            } else {
                                week.push({ day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year), selectable: this.isSelectable(dayNo, month, year, false) });
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
                dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
            }

            return weekDays;
        },
        ticksTo1970() {
            return ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000;
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
                } else if (this.currentYear > yearEnd) {
                    $vm.currentYear = yearStart;
                }

                for (let i = yearStart; i <= yearEnd; i++) {
                    yearOptions.push(i);
                }

                return yearOptions;
            } else {
                return null;
            }
        },
        monthPickerValues() {
            let monthPickerValues = [];

            const isSelectableMonth = (baseMonth) => {
                if (this.minDate) {
                    const minMonth = this.minDate.getMonth();
                    const minYear = this.minDate.getFullYear();

                    if (this.currentYear < minYear || (this.currentYear === minYear && baseMonth < minMonth)) {
                        return false;
                    }
                }

                if (this.maxDate) {
                    const maxMonth = this.maxDate.getMonth();
                    const maxYear = this.maxDate.getFullYear();

                    if (this.currentYear > maxYear || (this.currentYear === maxYear && baseMonth > maxMonth)) {
                        return false;
                    }
                }

                return true;
            };

            for (let i = 0; i <= 11; i++) {
                monthPickerValues.push({ value: this.$primevue.config.locale.monthNamesShort[i], selectable: isSelectableMonth(i) });
            }

            return monthPickerValues;
        },
        yearPickerValues() {
            let yearPickerValues = [];
            let base = this.currentYear - (this.currentYear % 10);

            const isSelectableYear = (baseYear) => {
                if (this.minDate) {
                    if (this.minDate.getFullYear() > baseYear) return false;
                }

                if (this.maxDate) {
                    if (this.maxDate.getFullYear() < baseYear) return false;
                }

                return true;
            };

            for (let i = 0; i < 10; i++) {
                yearPickerValues.push({ value: base + i, selectable: isSelectableYear(base + i) });
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
        attributeSelector() {
            return UniqueComponentId();
        },
        switchViewButtonDisabled() {
            return this.numberOfMonths > 1 || this.disabled;
        },
        panelId() {
            return this.d_id + '_panel';
        }
    },
    components: {
        CalendarButton: Button,
        Portal: Portal,
        CalendarIcon: CalendarIcon,
        ChevronLeftIcon: ChevronLeftIcon,
        ChevronRightIcon: ChevronRightIcon,
        ChevronUpIcon: ChevronUpIcon,
        ChevronDownIcon: ChevronDownIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>

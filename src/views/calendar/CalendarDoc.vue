<template>
	<AppDoc name="CalendarDemo" :sources="sources" github="calendar/CalendarDemo.vue">
        <h5>Import</h5>
<pre v-code.script><code>
import Calendar from 'primevue/calendar';

</code></pre>

        <h5>Getting Started</h5>
        <p>Two-way value binding is defined using the standard v-model directive referencing to a Date property.</p>

<pre v-code><code>
&lt;Calendar v-model="value" /&gt;

</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            value: null
        }
    }
}

</code></pre>

        <h5>Popup and Inline</h5>
        <p>Calendar is displayed in a popup by default and <i>inline</i> property needs to be enabled for inline mode.</p>
<pre v-code><code>
&lt;Calendar v-model="value" :inline="true" /&gt;

</code></pre>

        <h5>Selection Mode</h5>
        <p>By default calendar allows selecting one date only whereas multiple dates can be selected by setting <i>selectionMode</i> to multiple. In this
        case calendar updates the value with an array of dates where optionally number of selectable dates can be restricted with maxDateCount property.
        Third alternative is the range mode that allows selecting a range based on an array of two values where first value is the start date and second value
        is the end date.</p>

<pre v-code><code>
&lt;Calendar v-model="value" selectionMode="single || multiple || range" /&gt;

</code></pre>

        <h5>DateFormat</h5>
        <p>Default date format is mm/dd/yy, to customize this use <i>dateFormat</i> property or define it at <router-link to="/locale">PrimeVue Locale</router-link> globally. Note that standalone property overrides the value in locale settings.</p>

<pre v-code><code>
&lt;Calendar v-model="value" dateFormat="dd.mm.yy" /&gt;

</code></pre>

        <p>Following options can be a part of the format.</p>
        <ul>
            <li>d - day of month (no leading zero)</li>
            <li>dd - day of month (two digit)</li>
            <li>o - day of the year (no leading zeros)</li>
            <li>oo - day of the year (three digit)</li>
            <li>D - day name short</li>
            <li>DD - day name long</li>
            <li>m - month of year (no leading zero)</li>
            <li>mm - month of year (two digit)</li>
            <li>M - month name short</li>
            <li>MM - month name long</li>
            <li>y - year (two digit)</li>
            <li>yy - year (four digit)</li>
            <li>@ - Unix timestamp (ms since 01/01/1970)</li>
            <li> ! - Windows ticks (100ns since 01/01/0001)</li>
            <li>'...' - literal text</li>
            <li>'' - single quote</li>
            <li>anything else - literal text</li>
        </ul>

        <h5>Time</h5>
        <p>TimePicker is enabled with <i>showTime</i> property and 24 (default) or 12 hour mode is configured using <i>hourFormat</i> option. If you
            need to use the time picker as standalone, use the <i>timeOnly</i> property.
        </p>
<pre v-code><code>
&lt;Calendar v-model="value" :showTime="true" /&gt;
&lt;Calendar v-model="value" :showTime="true" hourFormat="12" /&gt;
&lt;Calendar v-model="value" :showTime="true" :timeOnly="true" /&gt;

</code></pre>

        <h5>Date Restriction</h5>
        <p>To disable entering dates manually, set <i>manualInput</i> to true and to restrict selectable dates with the <i>minDate</i>
            and <i>maxDate</i> options.</p>
<pre v-code><code>
&lt;Calendar v-model="value" :minDate="minDateValue" maxDate="maxDateValue" /&gt;

</code></pre>

        <p>To disable specific dates or days, restrict selectable dates use <i>disabledDates</i> and/or <i>disabledDays</i> options.</p>
<pre v-code><code>
&lt;Calendar v-model="value" :disabledDates="invalidDates" :disabledDays="[0,6]" /&gt;

</code></pre>

        <h5>Button Bar</h5>
        <p>Button bar displays today and clear buttons and enabled using <i>showButtonBar</i> property.</p>
<pre v-code><code>
&lt;Calendar v-model="value" :showButtonBar="true" /&gt;

</code></pre>

        <h5>Multiple Months</h5>
        <p>Displaying multiple months is enabled by setting <i>numberOfMonths</i> property to a value greater than 1.</p>
<pre v-code><code>
&lt;Calendar v-model="value" :numberOfMonths="3" /&gt;

</code></pre>

        <h5>Locale</h5>
        <p>Locale for different languages and formats is defined globally, refer to the <router-link to="/locale">PrimeVue Locale</router-link> configuration for more information.</p>

        <h5>Custom Content</h5>
        <p>Calendar UI accepts custom content using header and footer templates.</p>

<pre v-code><code>
&lt;Calendar v-model="value"&gt;
    &lt;template #header&gt;Header Content&lt;/template&gt;
    &lt;template #footer&gt;Footer Content&lt;/template&gt;
&lt;/Calendar&gt;

</code></pre>

        <p>In addition, cell contents can be templated using a template named "date". This is a handy feature to highlight specific dates. Note that the date property of the slot props
        passed to the template is not a date instance but a metadata object to represent a Date with "day", "month" and "year" properties. Example below
        changes the background color of dates between 10th and 15th of each month.</p>

<pre v-code><code><template v-pre>
&lt;Calendar v-model="value"&gt;
    &lt;template #date="slotProps"&gt;
        &lt;strong v-if="slotProps.date.day &gt; 10 && slotProps.date.day &lt; 15" class="special-day"&gt;{{slotProps.date.day}}&lt;/strong&gt;
        &lt;template v-else&gt;&#123;&#123;slotProps.date.day&#125;&#125;}&lt;/template&gt;
    &lt;/template&gt;
&lt;/Calendar&gt;
</template>
</code></pre>

<pre v-code.css><code>
.special-day {
    text-decoration: line-through;
}

</code></pre>

        <h5>Month Picker</h5>
        <p>Month picker is used to select month and year only without the date, set view mode as "month" to activate month picker.</p>
<pre v-code><code>
&lt;Calendar v-model="value" view="month" dateFormat="mm/yy" :yearNavigator="true" yearRange="2000:2030" /&gt;

</code></pre>

        <h5>Touch UI</h5>
        <p>Touch UI mode displays the calendar overlay at the center of the screen as optimized for touch devices.</p>
<pre v-code><code>
&lt;Calendar v-model="value" :touchUI="true" /&gt;

</code></pre>

        <h5>Properties</h5>
        <p>Any property such as name and placeholder are passed to the underlying input element. Following are the additional properties to configure the component.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>modelValue</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>selectionMode</td>
                        <td>string</td>
                        <td>single</td>
                        <td>Defines the quantity of the selection, valid values are "single", "multiple" and "range".</td>
                    </tr>
                    <tr>
                        <td>dateFormat</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Format of the date. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>inline</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, displays the calendar as inline instead of an overlay.</td>
                    </tr>
                    <tr>
                        <td>showOtherMonths</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.</td>
                    </tr>
                    <tr>
                        <td>selectOtherMonths</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.</td>
                    </tr>
                    <tr>
                        <td>showIcon</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, displays a button with icon next to input.</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>string</td>
                        <td>pi pi-calendar</td>
                        <td>Icon of the calendar button.</td>
                    </tr>
                    <tr>
                        <td>numberOfMonths</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Number of months to display.</td>
                    </tr>
                    <tr>
                        <td>view</td>
                        <td>string</td>
                        <td>date</td>
                        <td>Type of view to display, valid values are "date" for datepicker and "month" for month picker.</td>
                    </tr>
                    <tr>
                        <td>touchUI</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, calendar overlay is displayed as optimized for touch devices.</td>
                    </tr>
                    <tr>
                        <td>monthNavigator</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the month should be rendered as a dropdown instead of text.</td>
                    </tr>
                    <tr>
                        <td>yearNavigator</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the year should be rendered as a dropdown instead of text.</td>
                    </tr>
                    <tr>
                        <td>yearRange</td>
                        <td>string</td>
                        <td>null</td>
                        <td>The range of years displayed in the year drop-down in (nnnn:nnnn) format such as (2000:2020).</td>
                    </tr>
                    <tr>
                        <td>panelClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the datetimepicker panel.</td>
                    </tr>
                    <tr>
                        <td>minDate</td>
                        <td>Date</td>
                        <td>null</td>
                        <td>The minimum selectable date.</td>
                    </tr>
                    <tr>
                        <td>maxDate</td>
                        <td>Date</td>
                        <td>null</td>
                        <td>The maximum selectable date.</td>
                    </tr>
                    <tr>
                        <td>disabledDates</td>
                        <td>array;</td>
                        <td>null</td>
                        <td>Array with dates to disable.</td>
                    </tr>
                    <tr>
                        <td>disabledDays</td>
                        <td>array</td>
                        <td>null</td>
                        <td>Array with disabled weekday numbers.</td>
                    </tr>
                    <tr>
                        <td>maxDateCount</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Maximum number of selectable dates in multiple mode.</td>
                    </tr>
                    <tr>
                        <td>showOnFocus</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>When disabled, datepicker will not be visible with input focus.</td>
                    </tr>
                    <tr>
                        <td>autoZIndex</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to automatically manage layering.</td>
                    </tr>
                    <tr>
                        <td>baseZIndex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Base zIndex value to use in layering.</td>
                    </tr>
                    <tr>
                        <td>showButtonBar</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to display today and clear buttons at the footer</td>
                    </tr>
                    <tr>
                        <td>shortYearCutoff</td>
                        <td>string</td>
                        <td>+10</td>
                        <td>The cutoff year for determining the century for a date.</td>
                    </tr>
                    <tr>
                        <td>showTime</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to display timepicker.</td>
                    </tr>
                    <tr>
                        <td>timeOnly</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to display timepicker only.</td>
                    </tr>
                    <tr>
                        <td>hourFormat</td>
                        <td>string</td>
                        <td>24</td>
                        <td>Specifies 12 or 24 hour format.</td>
                    </tr>
                    <tr>
                        <td>stepHour</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Hours to change per step.</td>
                    </tr>
                    <tr>
                        <td>stepMinute</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Minutes to change per step.</td>
                    </tr>
                    <tr>
                        <td>stepSecond</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Seconds to change per step.</td>
                    </tr>
                    <tr>
                        <td>showSeconds</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to show the seconds in time picker.</td>
                    </tr>
                    <tr>
                        <td>hideOnDateTimeSelect</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to hide the overlay on date selection when showTime is enabled.</td>
                    </tr>
                    <tr>
                        <td>timeSeparator</td>
                        <td>string</td>
                        <td>:</td>
                        <td>Separator of time selector.</td>
                    </tr>
                    <tr>
                        <td>showWeek</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, calendar will show week numbers.</td>
                    </tr>
                    <tr>
                        <td>manualInput</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Wheter to allow prevents entering the date manually via typing.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body
                        and "self" for the element itself.</td>
                    </tr>
                    <tr>
                        <td>inputStyle</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the input field.</td>
                    </tr>
                    <tr>
                        <td>inputClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the input field.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the component.</td>
                    </tr>
                    <tr>
                        <td>keepInvalid</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Keep invalid value when input blur.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Events</h5>
        <p>Any valid event such as focus, blur and input are passed to the underlying input element. Following are the additional events to configure the component.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>date-select</td>
                        <td>value: Selected value</td>
                        <td>Callback to invoke when a date is selected.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>-</td>
                        <td>Callback to invoke when datepicker panel is shown.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Callback to invoke when datepicker panel is hidden.</td>
                    </tr>
                    <tr>
                        <td>today-click</td>
                        <td>date: Today as a date instance</td>
                        <td>Callback to invoke when today button is clicked.</td>
                    </tr>
                    <tr>
                        <td>clear-click</td>
                        <td>event: Click event</td>
                        <td>Callback to invoke when clear button is clicked.</td>
                    </tr>
                    <tr>
                        <td>month-change</td>
                        <td>event.month: New month <br />
                            event.year: New year
                        </td>
                        <td>Callback to invoke when a month is changed using the navigators.</td>
                    </tr>
                    <tr>
                        <td>year-change</td>
                        <td>event.month: New month <br />
                            event.year: New year
                        </td>
                        <td>Callback to invoke when a year is changed using the navigators.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Slots</h5>
		<div class="doc-tablewrapper">
            <table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>header</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>footer</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>date</td>
                        <td>date: Value of the component</td>
                    </tr>
				</tbody>
			</table>
        </div>

        <h5>Styling</h5>
        <p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-calendar</td>
                        <td>Main container element</td>
                    </tr>
                    <tr>
                        <td>p-calendar-w-btn</td>
                        <td>Main container element when button is enabled.</td>
                    </tr>
                    <tr>
                        <td>p-calendar-timeonly</td>
                        <td>Main container element in time picker only mode.</td>
                    </tr>
                    <tr>
                        <td>p-inputtext</td>
                        <td>Input element</td>
                    </tr>
                    <tr>
                        <td>p-datepicker</td>
                        <td>Datepicker element</td>
                    </tr>
                    <tr>
                        <td>p-datepicker-inline</td>
                        <td>Datepicker element in inline mode</td>
                    </tr>
                    <tr>
                        <td>p-monthpicker</td>
                        <td>Datepicker element in month view.</td>
                    </tr>
                    <tr>
                        <td>p-monthpicker-month</td>
                        <td>Month cell in month view mode.</td>
                    </tr>
                    <tr>
                        <td>p-datepicker-touch-ui</td>
                        <td>Datepicker element in touch ui mode.</td>
                    </tr>
                    <tr>
                        <td>p-datepicker-calendar</td>
                        <td>Table containing dates of a month.</td>
                    </tr>
                    <tr>
                        <td>p-datepicker-current-day</td>
                        <td>Cell of selected date.</td>
                    </tr>
                    <tr>
                        <td>p-datepicker-today</td>
                        <td>Cell of today's date.</td>
                    </tr>
                </tbody>
            </table>
        </div>

		<h5>Dependencies</h5>
		<p>None.</p>
    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <h5>Popup</h5>
        <div class="p-fluid p-grid p-formgrid">
            <div class="p-field p-col-12 p-md-4">
                <label for="basic">Basic</label>
                <Calendar id="basic" v-model="date1" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="dateformat">DateFormat</label>
                <Calendar id="dateformat" v-model="date2"  dateFormat="mm-dd-yy" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="icon">Icon</label>
                <Calendar id="icon" v-model="date3" :showIcon="true" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="minmax">MinMax</label>
                <Calendar id="minmax" v-model="date4" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="disableddays">Disabled Days</label>
                <Calendar id="disableddays" v-model="date5" :disabledDates="invalidDates" :disabledDays="[0,6]" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="navigators">Navigators</label>
                <Calendar id="navigators" v-model="date6" :monthNavigator="true" :yearNavigator="true" yearRange="2000:2030" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="multiple">Multiple</label>
                <Calendar id="multiple" v-model="dates1" selectionMode="multiple" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="range">Range</label>
                <Calendar id="range" v-model="dates2" selectionMode="range" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="buttonbar">Button Bar</label>
                <Calendar id="buttonbar" v-model="date7" :showButtonBar="true" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="time24">Time / 24h</label>
                <Calendar id="time24" v-model="date8" :showTime="true" :showSeconds="true" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="time12">Time / 12h</label>
                <Calendar id="time12" v-model="date9" :timeOnly="true" hourFormat="12" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="monthpicker">Month Picker</label>
                <Calendar id="monthpicker" v-model="date10" view="month" dateFormat="mm/yy" :yearNavigator="true" yearRange="2000:2030" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="multiplemonths">Multiple Months</label>
                <Calendar id="multiplemonths" v-model="date11" :numberOfMonths="3" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="datetemplate">Date Template</label>
                <Calendar id="datetemplate" v-model="date12">
                    <template #date="slotProps">
                        <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" class="special-day">{{slotProps.date.day}}</strong>
                        <template v-else>{{slotProps.date.day}}</template>
                    </template>
                </Calendar>
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="touchUI">TouchUI</label>
                <Calendar id="touchUI" v-model="date13" :touchUI="true" />
            </div>
        </div>

        <h5>Inline</h5>
        <Calendar v-model="date14" :inline="true" :showWeek="true" />
    </div>
</template>

<script>
export default {
    created() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];
    },
    data() {
        return {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            date8: null,
            date9: null,
            date10: null,
            date11: null,
            date12: null,
            date13: null,
            date14: null,
            dates1: null,
            dates2: null,
            minDate: null,
            maxDate: null,
            invalidDates: null
        }
    }
}
<\\/script>

<style scoped>
.special-day {
    text-decoration: line-through;
}
</style>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Popup</h5>
        <div class="p-fluid p-grid p-formgrid">
            <div class="p-field p-col-12 p-md-4">
                <label for="basic">Basic</label>
                <Calendar id="basic" v-model="date1" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="dateformat">DateFormat</label>
                <Calendar id="dateformat" v-model="date2"  dateFormat="mm-dd-yy" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="icon">Icon</label>
                <Calendar id="icon" v-model="date3" :showIcon="true" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="minmax">MinMax</label>
                <Calendar id="minmax" v-model="date4" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="disableddays">Disabled Days</label>
                <Calendar id="disableddays" v-model="date5" :disabledDates="invalidDates" :disabledDays="[0,6]" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="navigators">Navigators</label>
                <Calendar id="navigators" v-model="date6" :monthNavigator="true" :yearNavigator="true" yearRange="2000:2030" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="multiple">Multiple</label>
                <Calendar id="multiple" v-model="dates1" selectionMode="multiple" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="range">Range</label>
                <Calendar id="range" v-model="dates2" selectionMode="range" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="buttonbar">Button Bar</label>
                <Calendar id="buttonbar" v-model="date7" :showButtonBar="true" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="time24">Time / 24h</label>
                <Calendar id="time24" v-model="date8" :showTime="true" :showSeconds="true" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="time12">Time / 12h</label>
                <Calendar id="time12" v-model="date9" :timeOnly="true" hourFormat="12" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="monthpicker">Month Picker</label>
                <Calendar id="monthpicker" v-model="date10" view="month" dateFormat="mm/yy" :yearNavigator="true" yearRange="2000:2030" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="multiplemonths">Multiple Months</label>
                <Calendar id="multiplemonths" v-model="date11" :numberOfMonths="3" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="datetemplate">Date Template</label>
                <Calendar id="datetemplate" v-model="date12">
                    <template #date="slotProps">
                        <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" class="special-day">{{slotProps.date.day}}</strong>
                        <template v-else>{{slotProps.date.day}}</template>
                    </template>
                </Calendar>
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="touchUI">TouchUI</label>
                <Calendar id="touchUI" v-model="date13" :touchUI="true" />
            </div>
        </div>

        <h5>Inline</h5>
        <Calendar v-model="date14" :inline="true" :showWeek="true" />
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        const minDate = ref(new Date());
        const maxDate = ref(new Date());
        const invalidDates = ref();
        const date1 = ref();
        const date2 = ref();
        const date3 = ref();
        const date4 = ref();
        const date5 = ref();
        const date6 = ref();
        const date7 = ref();
        const date8 = ref();
        const date9 = ref();
        const date10 = ref();
        const date11 = ref();
        const date12 = ref();
        const date13 = ref();
        const date14 = ref();
        const dates1 = ref();
        const dates2 = ref();

        minDate.value.setMonth(prevMonth);
        minDate.value.setFullYear(prevYear);
        maxDate.value.setMonth(nextMonth);
        maxDate.value.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        invalidDates.value = [today, invalidDate];

        return { minDate, maxDate, invalidDates, date1, date2, date3, date4, date5, date6, date7,
            date8, date9, date10, date11, date12, date13, date14, dates1, dates2 }
    }
}
<\\/script>

<style scoped>
.special-day {
    text-decoration: line-through;
}
</style>
`
                }
            }
        }
    }
}
</script>

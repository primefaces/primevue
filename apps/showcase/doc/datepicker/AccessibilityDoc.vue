<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. The input element has <i>combobox</i> role in addition to
            <i>aria-autocomplete</i> as "none", <i>aria-haspopup</i> as "dialog" and <i>aria-expanded</i> attributes. The relation between the input and the popup is created with <i>aria-controls</i> attribute that refers to the id of the popup.
        </p>
        <p>
            The optional datepicker button requires includes <i>aria-haspopup</i>, <i>aria-expanded</i> for states along with <i>aria-controls</i> to define the relation between the popup and the button. The value to read is retrieved from the
            <i>chooseDate</i> key of the aria property from the <NuxtLink to="/configuration/#locale">locale</NuxtLink> API. This label is also used for the <i>aria-label</i> of the popup as well. When there is a value selected, it is formatted and
            appended to the label to be able to notify users about the current value.
        </p>

        <p>
            Popup has a <i>dialog</i> role along with <i>aria-modal</i> and <i>aria-label</i>. The navigation buttons at the header has an <i>aria-label</i> retrieved from the <i>prevYear</i>, <i>nextYear</i>, <i>prevMonth</i>, <i>nextMonth</i>,
            <i>prevDecade</i> and <i>nextDecade</i> keys of the locale aria API. Similarly month picker button uses the <i>chooseMonth</i> and year picker button uses the <i>chooseYear</i> keys.
        </p>

        <p>
            Main date table uses <i>grid</i> role that contains th elements with <i>col</i> as the scope along with <i>abbr</i> tag resolving to the full name of the month. Each date cell has an <i>aria-label</i> referring to the full date value.
            Buttons at the footer utilize their readable labels as <i>aria-label</i> as well. Selected date also receives the <i>aria-selected</i> attribute.
        </p>

        <p>
            Timepicker spinner buttons get their labels for <i>aria-label</i> from the aria locale API using the <i>prevHour</i>, <i>nextHour</i>, <i>prevMinute</i>, <i>nextMinute</i>, <i>prevSecond</i>, <i>nextSecond</i>, <i>am</i> and
            <i>pm</i> keys.
        </p>

        <p>DatePicker also includes a hidden section that is only available to screen readers with <i>aria-live</i> as "polite". This element is updated when the selected date changes to instruct the user about the current date selected.</p>

        <DocSectionCode :code="code" hideToggleCode hideStackBlitz v-bind="$attrs" />

        <h3>Choose Date Button Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>space</i></td>
                        <td>Opens popup and moves focus to the selected date, if there is none focuses on today.</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Opens popup and moves focus to the selected date, if there is none focuses on today.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Popup Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>escape</i></td>
                        <td>Closes the popup and moves focus to the input element.</td>
                    </tr>
                    <tr>
                        <td><i>tab</i></td>
                        <td>Moves focus to the next focusable element within the popup.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Moves focus to the next focusable element within the popup.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Header Buttons Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Triggers the button action.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Triggers the button action.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Date Grid Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Selects the date, closes the popup and moves focus to the input element.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Closes the popup and moves focus to the input element.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Moves focus to the same day of the previous week.</td>
                    </tr>
                    <tr>
                        <td><i>alt</i> + <i>up arrow</i></td>
                        <td>Closes the popup and moves focus to the input element.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Moves focus to the same day of the next week.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>Moves focus to the next day.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>Moves focus to the previous day.</td>
                    </tr>
                    <tr>
                        <td><i>home</i></td>
                        <td>Moves focus to the first day of the current week.</td>
                    </tr>
                    <tr>
                        <td><i>end</i></td>
                        <td>Moves focus to the last day of the current week.</td>
                    </tr>
                    <tr>
                        <td><i>page up</i></td>
                        <td>Changes the date to previous month in date picker mode. Moves to previous year in month picker mode and previous decade in year picker.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>page up</i></td>
                        <td>Changes the date to previous year in date picker mode. Has no effect in month or year picker.</td>
                    </tr>
                    <tr>
                        <td><i>page down</i></td>
                        <td>Changes the date to next month in date picker mode. Moves to next year in month picker mode and next decade in year picker.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>page down</i></td>
                        <td>Changes the date to next year in date picker mode. Has no effect in month or year picker.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Footer Buttons Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Triggers the button action.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Triggers the button action.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<label for="date1">Date</label>
<DatePicker inputId="date1" />

<span id="date2">Date</span>
<DatePicker aria-labelledby="date2" />

<DatePicker aria-label="Date" />
`
            }
        };
    }
};
</script>

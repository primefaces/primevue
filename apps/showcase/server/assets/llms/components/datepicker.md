# Vue DatePicker Component

DatePicker is a form component for date inputs.

## Import

```javascript
import DatePicker from 'primevue/datepicker';
```

## Accessibility

Screen Reader Value to describe the component can either be provided via label tag combined with inputId prop or using aria-labelledby , aria-label props. The input element has combobox role in addition to aria-autocomplete as "none", aria-haspopup as "dialog" and aria-expanded attributes. The relation between the input and the popup is created with aria-controls attribute that refers to the id of the popup. The optional datepicker button requires includes aria-haspopup , aria-expanded for states along with aria-controls to define the relation between the popup and the button. The value to read is retrieved from the chooseDate key of the aria property from the locale API. This label is also used for the aria-label of the popup as well. When there is a value selected, it is formatted and appended to the label to be able to notify users about the current value. Popup has a dialog role along with aria-modal and aria-label . The navigation buttons at the header has an aria-label retrieved from the prevYear , nextYear , prevMonth , nextMonth , prevDecade and nextDecade keys of the locale aria API. Similarly month picker button uses the chooseMonth and year picker button uses the chooseYear keys. Main date table uses grid role that contains th elements with col as the scope along with abbr tag resolving to the full name of the month. Each date cell has an aria-label referring to the full date value. Buttons at the footer utilize their readable labels as aria-label as well. Selected date also receives the aria-selected attribute. Timepicker spinner buttons get their labels for aria-label from the aria locale API using the prevHour , nextHour , prevMinute , nextMinute , prevSecond , nextSecond , am and pm keys. DatePicker also includes a hidden section that is only available to screen readers with aria-live as "polite". This element is updated when the selected date changes to instruct the user about the current date selected. Choose Date Button Keyboard Support Key Function space Opens popup and moves focus to the selected date, if there is none focuses on today. enter Opens popup and moves focus to the selected date, if there is none focuses on today. Popup Keyboard Support Key Function escape Closes the popup and moves focus to the input element. tab Moves focus to the next focusable element within the popup. shift + tab Moves focus to the next focusable element within the popup. Header Buttons Keyboard Support Key Function enter Triggers the button action. space Triggers the button action. Date Grid Keyboard Support Key Function enter Selects the date, closes the popup and moves focus to the input element. space Closes the popup and moves focus to the input element. up arrow Moves focus to the same day of the previous week. alt + up arrow Closes the popup and moves focus to the input element. down arrow Moves focus to the same day of the next week. right arrow Moves focus to the next day. left arrow Moves focus to the previous day. home Moves focus to the first day of the current week. end Moves focus to the last day of the current week. page up Changes the date to previous month in date picker mode. Moves to previous year in month picker mode and previous decade in year picker. shift + page up Changes the date to previous year in date picker mode. Has no effect in month or year picker. page down Changes the date to next month in date picker mode. Moves to next year in month picker mode and next decade in year picker. shift + page down Changes the date to next year in date picker mode. Has no effect in month or year picker. Footer Buttons Keyboard Support Key Function enter Triggers the button action. space Triggers the button action.

```vue
<label for="date1">Date</label>
<DatePicker inputId="date1" />

<span id="date2">Date</span>
<DatePicker aria-labelledby="date2" />

<DatePicker aria-label="Date" />
```

## Basic

DatePicker is used with the v-model property for two-way value binding.

```vue
<DatePicker v-model="date" />
```

## ButtonBarDoc

When showButtonBar is present, today and clear buttons are displayed at the footer. The content can be fully customized with the buttonbar slot as well.

```vue
<DatePicker v-model="date" showButtonBar placeholder="Basic" />
<DatePicker v-model="dates" showButtonBar placeholder="Customized" selectionMode="range" :manualInput="false">
    <template #buttonbar="{ todayCallback, clearCallback }">
        <div class="flex justify-between w-full">
            <div class="flex gap-2">
                <Button size="small" label="Exact" severity="secondary" />
                <Button size="small" label="Flexible" severity="secondary" />
            </div>
            <div class="flex gap-2">
                <Button size="small" label="Today" @click="todayCallback" variant="outlined" />
                <Button size="small" icon="pi pi-times" severity="danger" variant="outlined" @click="clearCallback" />
            </div>
        </div>
    </template>
</DatePicker>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center gap-4 flex-wrap">
        <DatePicker v-model="date" showButtonBar placeholder="Basic" />
        <DatePicker v-model="dates" showButtonBar placeholder="Customized" selectionMode="range" :manualInput="false">
            <template #buttonbar="{ todayCallback, clearCallback }">
                <div class="flex justify-between w-full">
                    <div class="flex gap-2">
                        <Button size="small" label="Exact" severity="secondary" />
                        <Button size="small" label="Flexible" severity="secondary" />
                    </div>
                    <div class="flex gap-2">
                        <Button size="small" label="Today" @click="todayCallback" variant="outlined" />
                        <Button size="small" icon="pi pi-times" severity="danger" variant="outlined" @click="clearCallback" />
                    </div>
                </div>
            </template>
        </DatePicker>
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
const dates = ref();
<\/script>
```

</details>

## Clear Icon

When showClear is enabled, a clear icon is added to reset the DatePicker.

```vue
<DatePicker v-model="date" showClear />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" showClear />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
```

</details>

## Date Template

Custom content can be placed inside date cells with the date slot that takes a Date as a parameter.

```vue
<DatePicker v-model="date">
    <template #date="slotProps">
        <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" style="text-decoration: line-through">{{ slotProps.date.day }}</strong>
        <template v-else>{{ slotProps.date.day }}</template>
    </template>
</DatePicker>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date">
            <template #date="slotProps">
                <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" style="text-decoration: line-through">{{ slotProps.date.day }}</strong>
                <template v-else>{{ slotProps.date.day }}</template>
            </template>
        </DatePicker>
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
```

</details>

## Disabled

DatePicker is used a controlled input component with v-model property.

```vue
<DatePicker v-model="date" disabled />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
```

</details>

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<DatePicker v-model="date" variant="filled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
```

</details>

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```vue
<FloatLabel>
    <DatePicker v-model="value1" inputId="over_label" showIcon iconDisplay="input" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <DatePicker v-model="value2" inputId="in_label" showIcon iconDisplay="input" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <DatePicker v-model="value3" inputId="on_label" showIcon iconDisplay="input" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <DatePicker v-model="value1" inputId="over_label" showIcon iconDisplay="input" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <DatePicker v-model="value2" inputId="in_label" showIcon iconDisplay="input" variant="filled" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <DatePicker v-model="value3" inputId="on_label" showIcon iconDisplay="input" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>
```

</details>

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<DatePicker v-model="date" fluid />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DatePicker v-model="date" fluid />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>
```

</details>

## Format

Default date format is mm/dd/yy which can be customized using the dateFormat property. Following options can be a part of the format. d - day of month (no leading zero) dd - day of month (two digit) o - day of the year (no leading zeros) oo - day of the year (three digit) D - day name short DD - day name long m - month of year (no leading zero) mm - month of year (two digit) M - month name short MM - month name long y - year (two digit) yy - year (four digit) @ - Unix timestamp (ms since 01/01/1970) ! - Windows ticks (100ns since 01/01/0001) '...' - literal text '' - single quote anything else - literal text

```vue
<DatePicker v-model="date" dateFormat="dd/mm/yy" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" dateFormat="dd/mm/yy" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
```

</details>

## Forms

DatePicker integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <DatePicker name="date" fluid />
        <Message v-if="$form.date?.invalid" severity="error" size="small" variant="simple">{{ $form.date.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
                <DatePicker name="date" fluid />
                <Message v-if="$form.date?.invalid" severity="error" size="small" variant="simple">{{ $form.date.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
    date: ''
});
const resolver = ref(zodResolver(
    z.object({
        date: z.preprocess((val) => {
            if (val === '' || val === null) {
                return null;
            }

            return new Date(val);
        }, z.union([z.date(), z.null().refine((val) => val !== null, { message: 'Date is required.' })]))
    })
));

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
```

</details>

## Icon

An additional icon is displayed next to the input field when showIcon is present.

```vue
<DatePicker v-model="buttondisplay" showIcon fluid :showOnFocus="false" />
<DatePicker v-model="icondisplay" showIcon fluid iconDisplay="input" />
<DatePicker v-model="templatedisplay" showIcon fluid iconDisplay="input" timeOnly>
    <template #inputicon="slotProps">
        <i class="pi pi-clock" @click="slotProps.clickCallback" />
    </template>
</DatePicker>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
            <DatePicker v-model="buttondisplay" showIcon fluid :showOnFocus="false" inputId="buttondisplay" />
        </div>
        <div class="flex-auto">
            <label for="icondisplay" class="font-bold block mb-2"> Default Icon </label>
            <DatePicker v-model="icondisplay" showIcon fluid iconDisplay="input" inputId="icondisplay" />
        </div>
        <div class="flex-auto">
            <label for="templatedisplay" class="font-bold block mb-2"> Custom Icon </label>
            <DatePicker v-model="templatedisplay" showIcon fluid iconDisplay="input" timeOnly inputId="templatedisplay">
                <template #inputicon="slotProps">
                    <i class="pi pi-clock" @click="slotProps.clickCallback" />
                </template>
            </DatePicker>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const buttondisplay = ref();
const icondisplay = ref();
const templatedisplay = ref();
<\/script>
```

</details>

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <DatePicker v-model="value" inputId="date" showIcon iconDisplay="input" variant="filled" />
    <label for="date">Date</label>
</IftaLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <DatePicker v-model="value" inputId="date" showIcon iconDisplay="input" variant="filled" />
            <label for="date">Date</label>
        </IftaLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Inline

DatePicker is displayed as a popup by default, add inline property to customize this behavior.

```vue
<DatePicker v-model="date" inline showWeek class="w-full sm:w-[30rem]" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" inline showWeek class="w-full sm:w-[30rem]" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
```

</details>

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<DatePicker v-model="date1" :invalid="!date1" placeholder="Date" />
<DatePicker v-model="date2" :invalid="!date2" variant="filled" placeholder="Date" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <DatePicker v-model="date1" :invalid="!date1" placeholder="Date" />
        <DatePicker v-model="date2" :invalid="!date2" variant="filled" placeholder="Date" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date1 = ref(null);
const date2 = ref(null);
<\/script>
```

</details>

## Locale

Locale for different languages and formats is defined globally, refer to the PrimeVue Locale configuration for more information.

## Min / Max

Boundaries for the permitted dates that can be entered are defined with minDate and maxDate properties.

```vue
<DatePicker v-model="date" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let prevMonth = (month === 0) ? 11 : month -1;
let prevYear = (prevMonth === 11) ? year - 1 : year;
let nextMonth = (month === 11) ? 0 : month + 1;
let nextYear = (nextMonth === 0) ? year + 1 : year;

const date = ref();
const minDate = ref(new Date());
const maxDate = ref(new Date());

minDate.value.setMonth(prevMonth);
minDate.value.setFullYear(prevYear);
maxDate.value.setMonth(nextMonth);
maxDate.value.setFullYear(nextYear);
<\/script>
```

</details>

## Model Type

The updateModelType property controls the data type of the value. When set to string it returns a string representation of the date, when set to date (default) it returns a Date object.

```vue
<DatePicker v-model="dateTypeModel" />
<DatePicker v-model="stringTypeModel" updateModelType="string" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="datetype" class="font-bold block mb-2"> Date Type Model </label>
            <DatePicker v-model="dateTypeModel" fluid />
        </div>
        <div class="flex-auto">
            <label for="stringtype" class="font-bold block mb-2"> String Type Model </label>
            <DatePicker v-model="stringTypeModel" updateModelType="string" fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const dateTypeModel = ref();
const stringTypeModel = ref();
<\/script>
```

</details>

## Month Picker

Month only picker is enabled by specifying view as month in addition to a suitable dateFormat .

```vue
<DatePicker v-model="date" view="month" dateFormat="mm/yy" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" view="month" dateFormat="mm/yy" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
```

</details>

## Multiple

In order to choose multiple dates, set selectionMode as multiple . In this mode, the value binding should be an array.

```vue
<DatePicker v-model="dates" selectionMode="multiple" :manualInput="false" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="dates" selectionMode="multiple" :manualInput="false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const dates = ref();
<\/script>
```

</details>

## Multiple Months

Number of months to display is configured with the numberOfMonths property.

```vue
<DatePicker v-model="date" :numberOfMonths="2" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" :numberOfMonths="2" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
```

</details>

## Range

A range of dates can be selected by defining selectionMode as range , in this case the bound value would be an array with two values where first date is the start of the range and second date is the end.

```vue
<DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const dates = ref();
<\/script>
```

</details>

## Sizes

DatePicker provides small and large sizes as alternatives to the base.

```vue
<DatePicker v-model="value1" size="small" placeholder="Small" showIcon iconDisplay="input" />
<DatePicker v-model="value2" placeholder="Normal" showIcon iconDisplay="input" />
<DatePicker v-model="value3" size="large" placeholder="Large" showIcon iconDisplay="input" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <DatePicker v-model="value1" size="small" placeholder="Small" showIcon iconDisplay="input" />
        <DatePicker v-model="value2" placeholder="Normal" showIcon iconDisplay="input" />
        <DatePicker v-model="value3" size="large" placeholder="Large" showIcon iconDisplay="input" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>
```

</details>

## Time

A time picker is displayed when showTime is enabled where 12/24 hour format is configured with hourFormat property. In case, only time needs to be selected, add timeOnly to hide the date section.

```vue
<DatePicker id="datepicker-12h" v-model="datetime12h" showTime hourFormat="12" fluid />
<DatePicker id="datepicker-24h" v-model="datetime24h" showTime hourFormat="24" fluid />
<DatePicker id="datepicker-timeonly" v-model="time" timeOnly fluid />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="datepicker-12h" class="font-bold block mb-2"> 12h Format </label>
            <DatePicker id="datepicker-12h" v-model="datetime12h" showTime hourFormat="12" fluid />
        </div>
        <div class="flex-auto">
            <label for="datepicker-24h" class="font-bold block mb-2"> 24h Format </label>
            <DatePicker id="datepicker-24h" v-model="datetime24h" showTime hourFormat="24" fluid />
        </div>
        <div class="flex-auto">
            <label for="datepicker-timeonly" class="font-bold block mb-2"> Time Only </label>
            <DatePicker id="datepicker-timeonly" v-model="time" timeOnly fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const datetime12h = ref();
const datetime24h = ref();
const time = ref();
<\/script>
```

</details>

## Year Picker

Specifying view as year in addition to a suitable dateFormat enables the year picker.

```vue
<DatePicker v-model="date" view="year" dateFormat="yy" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" view="year" dateFormat="yy" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
```

</details>

## Date Picker

### Props

| Name                  | Type                                            | Default  | Description                                                                                                                                                         |
| --------------------- | ----------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue            | null \| Date \| Date[] \| (null \| Date)[]      | null     | Value of the component.                                                                                                                                             |
| defaultValue          | null \| Date \| Date[] \| (null \| Date)[]      | -        | The default value for the input when not controlled by `modelValue` .                                                                                               |
| name                  | string                                          | -        | The name attribute for the element, typically used in form submissions.                                                                                             |
| selectionMode         | HintedString<"single" \| "multiple" \| "range"> | single   | Defines the quantity of the selection.                                                                                                                              |
| dateFormat            | string                                          | -        | Format of the date. Defaults to PrimeVue Locale configuration.                                                                                                      |
| updateModelType       | HintedString<"string" \| "date">                | date     | Type of the value to write back to modelValue.                                                                                                                      |
| inline                | boolean                                         | false    | When enabled, displays the datepicker as inline instead of an overlay.                                                                                              |
| showOtherMonths       | boolean                                         | true     | Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option. |
| selectOtherMonths     | boolean                                         | false    | Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.                |
| showIcon              | boolean                                         | false    | When enabled, displays a button with icon next to input.                                                                                                            |
| iconDisplay           | HintedString<"button" \| "input">               | 'button' | Icon position of the component. This only applies if the showIcon option is set to true.                                                                            |
| icon                  | string                                          | -        | Icon of the datepicker button.                                                                                                                                      |
| prevIcon              | string                                          | -        | Icon to show in the previous button.                                                                                                                                |
| nextIcon              | string                                          | -        | Icon to show in the next button.                                                                                                                                    |
| incrementIcon         | string                                          | -        | Icon to show in each of the increment buttons.                                                                                                                      |
| decrementIcon         | string                                          | -        | Icon to show in each of the decrement buttons.                                                                                                                      |
| numberOfMonths        | number                                          | 1        | Number of months to display.                                                                                                                                        |
| responsiveOptions     | DatePickerResponsiveOptions[]                   | -        | An array of options for responsive design.                                                                                                                          |
| breakpoint            | string                                          | 769px    | The breakpoint to define the maximum width boundary for datepicker panel.                                                                                           |
| view                  | HintedString<"date" \| "month" \| "year">       | date     | Type of view to display.                                                                                                                                            |
| minDate               | Date                                            | -        | The minimum selectable date.                                                                                                                                        |
| maxDate               | Date                                            | -        | The maximum selectable date.                                                                                                                                        |
| disabledDates         | Date[]                                          | -        | Array with dates to disable.                                                                                                                                        |
| disabledDays          | number[]                                        | -        | Array with disabled weekday numbers.                                                                                                                                |
| maxDateCount          | number                                          | -        | Maximum number of selectable dates in multiple mode.                                                                                                                |
| showOnFocus           | boolean                                         | true     | When disabled, datepicker will not be visible with input focus.                                                                                                     |
| autoZIndex            | boolean                                         | true     | Whether to automatically manage layering.                                                                                                                           |
| baseZIndex            | number                                          | 0        | Base zIndex value to use in layering.                                                                                                                               |
| showButtonBar         | boolean                                         | false    | Whether to display today and clear buttons at the footer.                                                                                                           |
| shortYearCutoff       | string                                          | +10      | The cutoff year for determining the century for a date.                                                                                                             |
| showTime              | boolean                                         | false    | Whether to display timepicker.                                                                                                                                      |
| timeOnly              | boolean                                         | false    | Whether to display timepicker only.                                                                                                                                 |
| hourFormat            | HintedString<"12" \| "24">                      | 24       | Specifies hour format.                                                                                                                                              |
| stepHour              | number                                          | 1        | Hours to change per step.                                                                                                                                           |
| stepMinute            | number                                          | 1        | Minutes to change per step.                                                                                                                                         |
| stepSecond            | number                                          | 1        | Seconds to change per step.                                                                                                                                         |
| showSeconds           | boolean                                         | false    | Whether to show the seconds in time picker.                                                                                                                         |
| hideOnDateTimeSelect  | boolean                                         | false    | Whether to hide the overlay on date selection when showTime is enabled.                                                                                             |
| hideOnRangeSelection  | boolean                                         | false    | Whether to hide the overlay on date selection is completed when selectionMode is range.                                                                             |
| timeSeparator         | string                                          | :        | Separator of time selector.                                                                                                                                         |
| showWeek              | boolean                                         | false    | When enabled, datepicker will show week numbers.                                                                                                                    |
| manualInput           | boolean                                         | true     | Whether to allow entering the date manually via typing.                                                                                                             |
| showClear             | boolean                                         | false    | When enabled, a clear icon is displayed to clear the value.                                                                                                         |
| size                  | HintedString<"small" \| "large">                | -        | Defines the size of the component.                                                                                                                                  |
| invalid               | boolean                                         | false    | When present, it specifies that the component should have invalid state style.                                                                                      |
| disabled              | boolean                                         | false    | When present, it specifies that the component should be disabled.                                                                                                   |
| variant               | null \| HintedString<"outlined" \| "filled">    | null     | Specifies the input variant of the component.                                                                                                                       |
| readonly              | boolean                                         | false    | When present, it specifies that an input field is read-only.                                                                                                        |
| placeholder           | string                                          | -        | Placeholder text for the input.                                                                                                                                     |
| required              | boolean                                         | -        |                                                                                                                                                                     |
| appendTo              | HTMLElement \| HintedString<"body" \| "self">   | body     | A valid query selector or an HTMLElement to specify where the overlay gets attached.                                                                                |
| inputId               | string                                          | -        | Identifier of the underlying input element.                                                                                                                         |
| inputStyle            | object                                          | -        | Inline style of the input field.                                                                                                                                    |
| inputClass            | string \| object                                | -        | Style class of the input field.                                                                                                                                     |
| panelStyle            | object                                          | -        | Inline style of the overlay panel.                                                                                                                                  |
| panelClass            | string \| object                                | -        | Style class of the overlay panel.                                                                                                                                   |
| todayButtonProps      | object                                          | -        | Used to pass all properties of the ButtonProps to the today button component.                                                                                       |
| clearButtonProps      | object                                          | -        | Used to pass all properties of the ButtonProps to the clear button component.                                                                                       |
| navigatorButtonProps  | object                                          | -        | Used to pass all properties of the ButtonProps to the navigator button component.                                                                                   |
| timepickerButtonProps | object                                          | -        | Used to pass all properties of the ButtonProps to the timepicker button component.                                                                                  |
| fluid                 | boolean                                         | null     | Spans 100% width of the container when enabled.                                                                                                                     |
| ariaLabelledby        | string                                          | -        | Establishes relationships between the component and label(s) where its value should be one or more element IDs.                                                     |
| ariaLabel             | string                                          | -        | Establishes a string value that labels the component.                                                                                                               |
| formControl           | Record<string, any>                             | -        | Form control object, typically used for handling validation and form state.                                                                                         |
| dt                    | any                                             | -        | It generates scoped CSS variables using design tokens for the component.                                                                                            |
| pt                    | PassThrough<DatePickerPassThroughOptions>       | -        | Used to pass attributes to DOM elements inside the component.                                                                                                       |
| ptOptions             | any                                             | -        | Used to configure passthrough(pt) options of the component.                                                                                                         |
| unstyled              | boolean                                         | false    | When enabled, it removes component related styles in the core.                                                                                                      |

## Pass Through Options

| Name               | Type                                | Description                                                        |
| ------------------ | ----------------------------------- | ------------------------------------------------------------------ |
| root               | DatePickerPassThroughOptionType     | Used to pass attributes to the root's DOM element.                 |
| pcInputText        | any                                 | Used to pass attributes to the InputText component.                |
| dropdown           | DatePickerPassThroughOptionType     | Used to pass attributes to the dropdown's DOM element.             |
| dropdownIcon       | DatePickerPassThroughOptionType     | Used to pass attributes to the dropdown icon's DOM element.        |
| inputIconContainer | DatePickerPassThroughOptionType     | Used to pass attributes to the input icon container's DOM element. |
| inputIcon          | DatePickerPassThroughOptionType     | Used to pass attributes to the input icon's DOM element.           |
| clearIcon          | DatePickerPassThroughOptionType     | Used to pass attributes to the label's DOM element.                |
| panel              | DatePickerPassThroughOptionType     | Used to pass attributes to the panel's DOM element.                |
| calendarContainer  | DatePickerPassThroughOptionType     | Used to pass attributes to the calendar container's DOM element.   |
| calendar           | DatePickerPassThroughOptionType     | Used to pass attributes to the calendar's DOM element.             |
| header             | DatePickerPassThroughOptionType     | Used to pass attributes to the header's DOM element.               |
| pcPrevButton       | any                                 | Used to pass attributes to the previous button's DOM element.      |
| title              | DatePickerPassThroughOptionType     | Used to pass attributes to the title's DOM element.                |
| selectMonth        | DatePickerPassThroughOptionType     | Used to pass attributes to the view month's DOM element.           |
| selectYear         | DatePickerPassThroughOptionType     | Used to pass attributes to the view year's DOM element.            |
| decade             | DatePickerPassThroughOptionType     | Used to pass attributes to the decade's DOM element.               |
| pcNextButton       | any                                 | Used to pass attributes to the next button's DOM element.          |
| dayView            | DatePickerPassThroughOptionType     | Used to pass attributes to the table's DOM element.                |
| tableHeader        | DatePickerPassThroughOptionType     | Used to pass attributes to the table header's DOM element.         |
| tableHeaderRow     | DatePickerPassThroughOptionType     | Used to pass attributes to the table header row's DOM element.     |
| weekHeader         | DatePickerPassThroughOptionType     | Used to pass attributes to the week header's DOM element.          |
| weekHeaderLabel    | DatePickerPassThroughOptionType     | Used to pass attributes to the week header label's DOM element.    |
| tableHeaderCell    | DatePickerPassThroughOptionType     | Used to pass attributes to the table header cell's DOM element.    |
| weekDayCell        | DatePickerPassThroughOptionType     | Used to pass attributes to the week day cell's DOM element.        |
| weekDay            | DatePickerPassThroughOptionType     | Used to pass attributes to the week day's DOM element.             |
| tableBody          | DatePickerPassThroughOptionType     | Used to pass attributes to the table body's DOM element.           |
| tableBodyRow       | DatePickerPassThroughOptionType     | Used to pass attributes to the table body row's DOM element.       |
| weekNumber         | DatePickerPassThroughOptionType     | Used to pass attributes to the week number's DOM element.          |
| weekLabelContainer | DatePickerPassThroughOptionType     | Used to pass attributes to the week label container's DOM element. |
| dayCell            | DatePickerPassThroughOptionType     | Used to pass attributes to the day cell's DOM element.             |
| day                | DatePickerPassThroughOptionType     | Used to pass attributes to the day's DOM element.                  |
| monthView          | DatePickerPassThroughOptionType     | Used to pass attributes to the month view's DOM element.           |
| month              | DatePickerPassThroughOptionType     | Used to pass attributes to the month's DOM element.                |
| yearView           | DatePickerPassThroughOptionType     | Used to pass attributes to the year view's DOM element.            |
| year               | DatePickerPassThroughOptionType     | Used to pass attributes to the year's DOM element.                 |
| timePicker         | DatePickerPassThroughOptionType     | Used to pass attributes to the time picker's DOM element.          |
| hourPicker         | DatePickerPassThroughOptionType     | Used to pass attributes to the hour picker's DOM element.          |
| hour               | DatePickerPassThroughOptionType     | Used to pass attributes to the hour's DOM element.                 |
| separatorContainer | DatePickerPassThroughOptionType     | Used to pass attributes to the separator container's DOM element.  |
| separator          | DatePickerPassThroughOptionType     | Used to pass attributes to the separator's DOM element.            |
| minutePicker       | DatePickerPassThroughOptionType     | Used to pass attributes to the minute picker's DOM element.        |
| minute             | DatePickerPassThroughOptionType     | Used to pass attributes to the minute's DOM element.               |
| secondPicker       | DatePickerPassThroughOptionType     | Used to pass attributes to the second picker's DOM element.        |
| second             | DatePickerPassThroughOptionType     | Used to pass attributes to the second's DOM element.               |
| ampmPicker         | DatePickerPassThroughOptionType     | Used to pass attributes to the ampm picker's DOM element.          |
| ampm               | DatePickerPassThroughOptionType     | Used to pass attributes to the ampm's DOM element.                 |
| buttonbar          | DatePickerPassThroughOptionType     | Used to pass attributes to the buttonbar's DOM element.            |
| pcIncrementButton  | any                                 | Used to pass attributes to the increment button's DOM element.     |
| pcDecrementButton  | any                                 | Used to pass attributes to the decrement button's DOM element.     |
| pcTodayButton      | any                                 | Used to pass attributes to the today button's DOM element.         |
| pcClearButton      | any                                 | Used to pass attributes to the clear button's DOM element.         |
| hiddenSelectedDay  | DatePickerPassThroughOptionType     | Used to pass attributes to the aria selected day's DOM element.    |
| hiddenMonth        | DatePickerPassThroughOptionType     | Used to pass attributes to the aria month's DOM element.           |
| hiddenYear         | DatePickerPassThroughOptionType     | Used to pass attributes to the aria year's DOM element.            |
| hooks              | any                                 | Used to manage all lifecycle hooks.                                |
| transition         | DatePickerPassThroughTransitionType | Used to control Vue Transition API.                                |

## Theming

### CSS Classes

| Class                             | Description                                    |
| --------------------------------- | ---------------------------------------------- |
| p-datepicker                      | Class name of the root element                 |
| p-datepicker-input                | Class name of the input element                |
| p-datepicker-dropdown             | Class name of the dropdown element             |
| p-datepicker-input-icon-container | Class name of the input icon container element |
| p-datepicker-input-icon           | Class name of the input icon element           |
| p-datepicker-clear-icon           | Class name of the clear icon element           |
| p-datepicker-panel                | Class name of the panel element                |
| p-datepicker-calendar-container   | Class name of the calendar container element   |
| p-datepicker-calendar             | Class name of the calendar element             |
| p-datepicker-header               | Class name of the header element               |
| p-datepicker-prev-button          | Class name of the previous button element      |
| p-datepicker-title                | Class name of the title element                |
| p-datepicker-select-month         | Class name of the select month element         |
| p-datepicker-select-year          | Class name of the select year element          |
| p-datepicker-decade               | Class name of the decade element               |
| p-datepicker-next-button          | Class name of the next button element          |
| p-datepicker-day-view             | Class name of the day view element             |
| p-datepicker-weekheader           | Class name of the week header element          |
| p-datepicker-weeknumber           | Class name of the week number element          |
| p-datepicker-weeklabel-container  | Class name of the week label container element |
| p-datepicker-weekday-cell         | Class name of the week day cell element        |
| p-datepicker-weekday              | Class name of the week day element             |
| p-datepicker-day-cell             | Class name of the day cell element             |
| p-datepicker-day                  | Class name of the day element                  |
| p-datepicker-month-view           | Class name of the month view element           |
| p-datepicker-month                | Class name of the month element                |
| p-datepicker-year-view            | Class name of the year view element            |
| p-datepicker-year                 | Class name of the year element                 |
| p-datepicker-time-picker          | Class name of the time picker element          |
| p-datepicker-hour-picker          | Class name of the hour picker element          |
| p-datepicker-increment-button     | Class name of the increment button element     |
| p-datepicker-decrement-button     | Class name of the decrement button element     |
| p-datepicker-separator            | Class name of the separator element            |
| p-datepicker-minute-picker        | Class name of the minute picker element        |
| p-datepicker-second-picker        | Class name of the second picker element        |
| p-datepicker-ampm-picker          | Class name of the ampm picker element          |
| p-datepicker-buttonbar            | Class name of the buttonbar element            |
| p-datepicker-today-button         | Class name of the today button element         |
| p-datepicker-clear-button         | Class name of the clear button element         |

### Design Tokens

| Token                                     | CSS Variable                                  | Description                       |
| ----------------------------------------- | --------------------------------------------- | --------------------------------- |
| datepicker.transition.duration            | --p-datepicker-transition-duration            | Transition duration of root       |
| datepicker.panel.background               | --p-datepicker-panel-background               | Background of panel               |
| datepicker.panel.border.color             | --p-datepicker-panel-border-color             | Border color of panel             |
| datepicker.panel.color                    | --p-datepicker-panel-color                    | Color of panel                    |
| datepicker.panel.border.radius            | --p-datepicker-panel-border-radius            | Border radius of panel            |
| datepicker.panel.shadow                   | --p-datepicker-panel-shadow                   | Shadow of panel                   |
| datepicker.panel.padding                  | --p-datepicker-panel-padding                  | Padding of panel                  |
| datepicker.header.background              | --p-datepicker-header-background              | Background of header              |
| datepicker.header.border.color            | --p-datepicker-header-border-color            | Border color of header            |
| datepicker.header.color                   | --p-datepicker-header-color                   | Color of header                   |
| datepicker.header.padding                 | --p-datepicker-header-padding                 | Padding of header                 |
| datepicker.title.gap                      | --p-datepicker-title-gap                      | Gap of title                      |
| datepicker.title.font.weight              | --p-datepicker-title-font-weight              | Font weight of title              |
| datepicker.dropdown.width                 | --p-datepicker-dropdown-width                 | Width of dropdown                 |
| datepicker.dropdown.sm.width              | --p-datepicker-dropdown-sm-width              | Sm width of dropdown              |
| datepicker.dropdown.lg.width              | --p-datepicker-dropdown-lg-width              | Lg width of dropdown              |
| datepicker.dropdown.border.color          | --p-datepicker-dropdown-border-color          | Border color of dropdown          |
| datepicker.dropdown.hover.border.color    | --p-datepicker-dropdown-hover-border-color    | Hover border color of dropdown    |
| datepicker.dropdown.active.border.color   | --p-datepicker-dropdown-active-border-color   | Active border color of dropdown   |
| datepicker.dropdown.border.radius         | --p-datepicker-dropdown-border-radius         | Border radius of dropdown         |
| datepicker.dropdown.focus.ring.width      | --p-datepicker-dropdown-focus-ring-width      | Focus ring width of dropdown      |
| datepicker.dropdown.focus.ring.style      | --p-datepicker-dropdown-focus-ring-style      | Focus ring style of dropdown      |
| datepicker.dropdown.focus.ring.color      | --p-datepicker-dropdown-focus-ring-color      | Focus ring color of dropdown      |
| datepicker.dropdown.focus.ring.offset     | --p-datepicker-dropdown-focus-ring-offset     | Focus ring offset of dropdown     |
| datepicker.dropdown.focus.ring.shadow     | --p-datepicker-dropdown-focus-ring-shadow     | Focus ring shadow of dropdown     |
| datepicker.dropdown.background            | --p-datepicker-dropdown-background            | Background of dropdown            |
| datepicker.dropdown.hover.background      | --p-datepicker-dropdown-hover-background      | Hover background of dropdown      |
| datepicker.dropdown.active.background     | --p-datepicker-dropdown-active-background     | Active background of dropdown     |
| datepicker.dropdown.color                 | --p-datepicker-dropdown-color                 | Color of dropdown                 |
| datepicker.dropdown.hover.color           | --p-datepicker-dropdown-hover-color           | Hover color of dropdown           |
| datepicker.dropdown.active.color          | --p-datepicker-dropdown-active-color          | Active color of dropdown          |
| datepicker.input.icon.color               | --p-datepicker-input-icon-color               | Color of input icon               |
| datepicker.select.month.hover.background  | --p-datepicker-select-month-hover-background  | Hover background of select month  |
| datepicker.select.month.color             | --p-datepicker-select-month-color             | Color of select month             |
| datepicker.select.month.hover.color       | --p-datepicker-select-month-hover-color       | Hover color of select month       |
| datepicker.select.month.padding           | --p-datepicker-select-month-padding           | Padding of select month           |
| datepicker.select.month.border.radius     | --p-datepicker-select-month-border-radius     | Border radius of select month     |
| datepicker.select.year.hover.background   | --p-datepicker-select-year-hover-background   | Hover background of select year   |
| datepicker.select.year.color              | --p-datepicker-select-year-color              | Color of select year              |
| datepicker.select.year.hover.color        | --p-datepicker-select-year-hover-color        | Hover color of select year        |
| datepicker.select.year.padding            | --p-datepicker-select-year-padding            | Padding of select year            |
| datepicker.select.year.border.radius      | --p-datepicker-select-year-border-radius      | Border radius of select year      |
| datepicker.group.border.color             | --p-datepicker-group-border-color             | Border color of group             |
| datepicker.group.gap                      | --p-datepicker-group-gap                      | Gap of group                      |
| datepicker.day.view.margin                | --p-datepicker-day-view-margin                | Margin of day view                |
| datepicker.week.day.padding               | --p-datepicker-week-day-padding               | Padding of week day               |
| datepicker.week.day.font.weight           | --p-datepicker-week-day-font-weight           | Font weight of week day           |
| datepicker.week.day.color                 | --p-datepicker-week-day-color                 | Color of week day                 |
| datepicker.date.hover.background          | --p-datepicker-date-hover-background          | Hover background of date          |
| datepicker.date.selected.background       | --p-datepicker-date-selected-background       | Selected background of date       |
| datepicker.date.range.selected.background | --p-datepicker-date-range-selected-background | Range selected background of date |
| datepicker.date.color                     | --p-datepicker-date-color                     | Color of date                     |
| datepicker.date.hover.color               | --p-datepicker-date-hover-color               | Hover color of date               |
| datepicker.date.selected.color            | --p-datepicker-date-selected-color            | Selected color of date            |
| datepicker.date.range.selected.color      | --p-datepicker-date-range-selected-color      | Range selected color of date      |
| datepicker.date.width                     | --p-datepicker-date-width                     | Width of date                     |
| datepicker.date.height                    | --p-datepicker-date-height                    | Height of date                    |
| datepicker.date.border.radius             | --p-datepicker-date-border-radius             | Border radius of date             |
| datepicker.date.padding                   | --p-datepicker-date-padding                   | Padding of date                   |
| datepicker.date.focus.ring.width          | --p-datepicker-date-focus-ring-width          | Focus ring width of date          |
| datepicker.date.focus.ring.style          | --p-datepicker-date-focus-ring-style          | Focus ring style of date          |
| datepicker.date.focus.ring.color          | --p-datepicker-date-focus-ring-color          | Focus ring color of date          |
| datepicker.date.focus.ring.offset         | --p-datepicker-date-focus-ring-offset         | Focus ring offset of date         |
| datepicker.date.focus.ring.shadow         | --p-datepicker-date-focus-ring-shadow         | Focus ring shadow of date         |
| datepicker.month.view.margin              | --p-datepicker-month-view-margin              | Margin of month view              |
| datepicker.month.padding                  | --p-datepicker-month-padding                  | Padding of month                  |
| datepicker.month.border.radius            | --p-datepicker-month-border-radius            | Border radius of month            |
| datepicker.year.view.margin               | --p-datepicker-year-view-margin               | Margin of year view               |
| datepicker.year.padding                   | --p-datepicker-year-padding                   | Padding of year                   |
| datepicker.year.border.radius             | --p-datepicker-year-border-radius             | Border radius of year             |
| datepicker.buttonbar.padding              | --p-datepicker-buttonbar-padding              | Padding of buttonbar              |
| datepicker.buttonbar.border.color         | --p-datepicker-buttonbar-border-color         | Border color of buttonbar         |
| datepicker.time.picker.padding            | --p-datepicker-time-picker-padding            | Padding of time picker            |
| datepicker.time.picker.border.color       | --p-datepicker-time-picker-border-color       | Border color of time picker       |
| datepicker.time.picker.gap                | --p-datepicker-time-picker-gap                | Gap of time picker                |
| datepicker.time.picker.button.gap         | --p-datepicker-time-picker-button-gap         | Button gap of time picker         |
| datepicker.today.background               | --p-datepicker-today-background               | Background of today               |
| datepicker.today.color                    | --p-datepicker-today-color                    | Color of today                    |

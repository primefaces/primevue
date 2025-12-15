# Vue InputNumber Component

InputNumber is an input component to provide numerical input.

## Import

```javascript
import InputNumber from 'primevue/inputnumber';
```

## Accessibility

Screen Reader Value to describe the component can either be provided via label tag combined with inputId prop or using aria-labelledby , aria-label props. The input element uses spinbutton role in addition to the aria-valuemin , aria-valuemax and aria-valuenow attributes. Keyboard Support Key Function tab Moves focus to the input. up arrow Increments the value. down arrow Decrements the value. home Set the minimum value if provided. end Set the maximum value if provided.

```vue
<label for="price">Price</label>
<InputNumber inputId="price" />

<span id="label_number">Number</span>
<InputNumber aria-labelledby="label_number" />

<InputNumber aria-label="Number" />
```

## Buttons

Spinner buttons are enabled using the showButtons property and layout is defined with the buttonLayout .

```vue
<InputNumber v-model="value1" inputId="stacked-buttons" showButtons mode="currency" currency="USD" fluid />
<InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" fluid />
<InputNumber v-model="value3" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="0.25" mode="currency" currency="EUR" fluid>
    <template #incrementbuttonicon>
        <span class="pi pi-plus" />
    </template>
    <template #decrementbuttonicon>
        <span class="pi pi-minus" />
    </template>
</InputNumber>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="stacked-buttons" class="font-bold block mb-2"> Stacked </label>
            <InputNumber v-model="value1" inputId="stacked-buttons" showButtons mode="currency" currency="USD" fluid />
        </div>

        <div class="flex-auto">
            <label for="minmax-buttons" class="font-bold block mb-2"> Min-Max Boundaries </label>
            <InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" fluid />
        </div>
        <div class="flex-auto">
            <label for="horizontal-buttons" class="font-bold block mb-2"> Horizontal with Step </label>
            <InputNumber v-model="value3" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="0.25" mode="currency" currency="EUR" fluid >
                <template #incrementbuttonicon>
                    <span class="pi pi-plus" />
                </template>
                <template #decrementbuttonicon>
                    <span class="pi pi-minus" />
                </template>
            </InputNumber>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(20);
const value2 = ref(25);
const value3 = ref(10.5);
<\/script>
```

</details>

## Clear Icon

When showClear is enabled, a clear icon is added to reset the InputNumber.

```vue
<InputNumber v-model="value" showClear />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputNumber v-model="value" showClear />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
<\/script>
```

</details>

## Currency

Monetary values are enabled by setting mode property as currency . In this setting, currency property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar.

```vue
<InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" fluid />
<InputNumber v-model="value2" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" />
<InputNumber v-model="value3" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" fluid />
<InputNumber v-model="value4" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" fluid />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="currency-us" class="font-bold block mb-2"> United States </label>
            <InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" fluid />
        </div>
        <div class="flex-auto">
            <label for="currency-germany" class="font-bold block mb-2"> Germany </label>
            <InputNumber v-model="value2" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" fluid />
        </div>
        <div class="flex-auto">
            <label for="currency-india" class="font-bold block mb-2"> India </label>
            <InputNumber v-model="value3" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" fluid />
        </div>
        <div class="flex-auto">
            <label for="currency-japan" class="font-bold block mb-2"> Japan </label>
            <InputNumber v-model="value4" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(1500);
const value2 = ref(2500);
const value3 = ref(4250);
const value4 = ref(5002);
<\/script>
```

</details>

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<InputNumber v-model="value" disabled prefix="%" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputNumber v-model="value" disabled prefix="%" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(50);
<\/script>
```

</details>

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<InputNumber v-model="value" variant="filled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputNumber v-model="value" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>
```

</details>

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```vue
<FloatLabel>
    <InputNumber v-model="value1" inputId="over_label" mode="currency" currency="USD" locale="en-US" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <InputNumber v-model="value2" inputId="in_label" mode="currency" currency="USD" locale="en-US" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputNumber v-model="value3" inputId="on_label" mode="currency" currency="USD" locale="en-US" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <InputNumber v-model="value1" inputId="over_label" mode="currency" currency="USD" locale="en-US" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputNumber v-model="value2" inputId="in_label" mode="currency" currency="USD" locale="en-US" variant="filled" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputNumber v-model="value3" inputId="on_label" mode="currency" currency="USD" locale="en-US" />
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
<InputNumber v-model="value" fluid mode="currency" currency="USD" locale="en-US" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <InputNumber v-model="value" fluid mode="currency" currency="USD" locale="en-US" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>
```

</details>

## Forms

InputNumber integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <InputNumber name="amount" fluid />
        <Message v-if="$form.amount?.invalid" severity="error" size="small" variant="simple">{{ $form.amount.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-1">
                <InputNumber name="amount" fluid />
                <Message v-if="$form.amount?.invalid" severity="error" size="small" variant="simple">{{ $form.amount.error?.message }}</Message>
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
    amount: 5
});
const resolver = ref(zodResolver(
    z.object({
        amount: z.union([z.number().gt(0, { message: 'Must be greater than 0.' }).lt(10, { message: 'Must be less than 10.' }), z.literal(null)]).refine((val) => val !== null, { message: 'Number is required.' })
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

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <InputNumber v-model="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
    <label for="price_input">Price</label>
</IftaLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputNumber v-model="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
            <label for="price_input">Price</label>
        </IftaLabel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(1);
<\/script>
```

</details>

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<InputNumber v-model="value1" :invalid="value1 === null" mode="decimal" :minFractionDigits="2" placeholder="Amount" />
<InputNumber v-model="value2" :invalid="value2 === null" mode="decimal" :minFractionDigits="2" variant="filled" placeholder="Amount" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <InputNumber v-model="value1" :invalid="value1 === null" mode="decimal" :minFractionDigits="2" placeholder="Amount" />
        <InputNumber v-model="value2" :invalid="value2 === null" mode="decimal" :minFractionDigits="2" variant="filled" placeholder="Amount" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
<\/script>
```

</details>

## Locale

Localization information such as grouping and decimal symbols are defined with the locale property which defaults to the user locale.

```vue
<InputNumber v-model="value1" inputId="locale-user" :minFractionDigits="2" fluid />
<InputNumber v-model="value2" inputId="locale-us" locale="en-US" :minFractionDigits="2" fluid />
<InputNumber v-model="value3" inputId="locale-german" locale="de-DE" :minFractionDigits="2" fluid />
<InputNumber v-model="value4" inputId="locale-indian" locale="en-IN" :minFractionDigits="2" fluid />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="locale-user" class="font-bold block mb-2"> User Locale </label>
            <InputNumber v-model="value1" inputId="locale-user" :minFractionDigits="2" fluid />
        </div>
        <div class="flex-auto">
            <label for="locale-us" class="font-bold block mb-2"> United States Locale </label>
            <InputNumber v-model="value2" inputId="locale-us" locale="en-US" :minFractionDigits="2" fluid />
        </div>
        <div class="flex-auto">
            <label for="locale-german" class="font-bold block mb-2"> German Locale </label>
            <InputNumber v-model="value3" inputId="locale-german" locale="de-DE" :minFractionDigits="2" fluid />
        </div>
        <div class="flex-auto">
            <label for="locale-indian" class="font-bold block mb-2"> Indian Locale </label>
            <InputNumber v-model="value4" inputId="locale-indian" locale="en-IN" :minFractionDigits="2" fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(151351);
const value2 = ref(115744);
const value3 = ref(635524);
const value4 = ref(732762);
<\/script>
```

</details>

## Numerals

InputNumber is used with the v-model property for two-way value binding.

```vue
<InputNumber v-model="value1" inputId="integeronly" fluid />
<InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" fluid />
<InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" fluid />
<InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" fluid />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="integeronly" class="font-bold block mb-2"> Integer Only </label>
            <InputNumber v-model="value1" inputId="integeronly" fluid />
        </div>
        <div class="flex-auto">
            <label for="withoutgrouping" class="font-bold block mb-2"> Without Grouping </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" fluid />
        </div>
        <div class="flex-auto">
            <label for="minmaxfraction" class="font-bold block mb-2"> Min-Max Fraction Digits </label>
            <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" fluid />
        </div>
        <div class="flex-auto">
            <label for="minmax" class="font-bold block mb-2"> Min-Max Boundaries </label>
            <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(42723);
const value2 = ref(58151);
const value3 = ref(2351.35);
const value4 = ref(50);
<\/script>
```

</details>

## Prefix & Suffix

Custom texts e.g. units can be placed before or after the input section with the prefix and suffix properties.

```vue
<InputNumber v-model="value1" inputId="mile" suffix=" mi" fluid />
<InputNumber v-model="value2" inputId="percent" prefix="%" fluid />
<InputNumber v-model="value3" inputId="expiry" prefix="Expires in " suffix=" days" fluid />
<InputNumber v-model="value4" inputId="temperature" prefix="&uarr; " suffix="℃" :min="0" :max="40" fluid />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="mile" class="font-bold block mb-2"> Mile </label>
            <InputNumber v-model="value1" inputId="mile" suffix=" mi" fluid />
        </div>
        <div class="flex-auto">
            <label for="percent" class="font-bold block mb-2"> Percent </label>
            <InputNumber v-model="value2" inputId="percent" prefix="%" fluid />
        </div>
        <div class="flex-auto">
            <label for="expiry" class="font-bold block mb-2"> Expiry </label>
            <InputNumber v-model="value3" inputId="expiry" prefix="Expires in " suffix=" days" fluid />
        </div>
        <div class="flex-auto">
            <label for="temperature" class="font-bold block mb-2"> Temperature </label>
            <InputNumber v-model="value4" inputId="temperature" prefix="&uarr; " suffix="℃" :min="0" :max="40" fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(20);
const value2 = ref(50);
const value3 = ref(10);
const value4 = ref(20);
<\/script>
```

</details>

## Sizes

InputNumber provides small and large sizes as alternatives to the base.

```vue
<InputNumber v-model="value1" size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
<InputNumber v-model="value2" placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
<InputNumber v-model="value3" size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <InputNumber v-model="value1" size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
        <InputNumber v-model="value2" placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
        <InputNumber v-model="value3" size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />
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

## Vertical

Buttons can also placed vertically by setting buttonLayout as vertical .

```vue
<InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 3rem" :min="0" :max="99">
    <template #incrementbuttonicon>
        <span class="pi pi-plus" />
    </template>
    <template #decrementbuttonicon>
        <span class="pi pi-minus" />
    </template>
</InputNumber>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 3rem" :min="0" :max="99">
            <template #incrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
                <span class="pi pi-minus" />
            </template>
        </InputNumber>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(50);
<\/script>
```

</details>

## Input Number

### Props

| Name                 | Type                                                  | Default  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------- | ----------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue           | Nullable<number>                                      | -        | Value of the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| defaultValue         | Nullable<number>                                      | -        | The default value for the input when not controlled by `modelValue` .                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| name                 | string                                                | -        | The name attribute for the element, typically used in form submissions.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| format               | boolean                                               | true     | Whether to format the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| showButtons          | boolean                                               | false    | Displays spinner buttons.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| buttonLayout         | HintedString<"horizontal" \| "vertical" \| "stacked"> | stacked  | Layout of the buttons.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| incrementButtonClass | string                                                | -        | Style class of the increment button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| decrementButtonClass | string                                                | -        | Style class of the decrement button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| incrementButtonIcon  | string                                                | -        | Style class of the increment icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| incrementIcon        | string                                                | -        | Style class of the increment icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| decrementButtonIcon  | string                                                | -        | Style class of the decrement icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| decrementIcon        | string                                                | -        | Style class of the decrement icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| locale               | string                                                | -        | Locale to be used in formatting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| localeMatcher        | HintedString<"lookup" \| "best fit">                  | best fit | The locale matching algorithm to use. Possible values are 'lookup' and 'best fit'; the default is 'best fit'. See [Locale Negotation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_negotiation) for details.                                                                                                                                                                                                                                               |
| mode                 | HintedString<"decimal" \| "currency">                 | decimal  | Defines the behavior of the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| prefix               | string                                                | -        | Text to display before the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| suffix               | string                                                | -        | Text to display after the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| currency             | string                                                | -        | The currency to use in currency formatting. Possible values are the [ISO 4217 currency codes](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency), such as 'USD' for the US dollar, 'EUR' for the euro, or 'CNY' for the Chinese RMB. There is no default value; if the style is 'currency', the currency property must be provided.                                                                                                     |
| currencyDisplay      | string                                                | symbol   | How to display the currency in currency formatting. Possible values are 'symbol' to use a localized currency symbol such as €, 'code' to use the ISO currency code, 'name' to use a localized currency name such as 'dollar'.                                                                                                                                                                                                                                                                              |
| useGrouping          | boolean                                               | true     | Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.                                                                                                                                                                                                                                                                                                                                                                                                        |
| minFractionDigits    | number                                                | -        | The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the [ISO 4217 currency code](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency) list (2 if the list doesn't provide that information).                                                                     |
| maxFractionDigits    | number                                                | -        | The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the [ISO 4217 currency code](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency) list (2 if the list doesn't provide that information). |
| roundingMode         | RoundingMode                                          | -        | How decimals should be rounded. The default value is `"halfExpand"` , [further information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode).                                                                                                                                                                                                                                                                                 |
| min                  | number                                                | -        | Minimum boundary value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| max                  | number                                                | -        | Maximum boundary value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| step                 | number                                                | 1        | Step factor to increment/decrement the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| allowEmpty           | boolean                                               | true     | Determines whether the input field is empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| highlightOnFocus     | boolean                                               | false    | Highlights automatically the input value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| showClear            | boolean                                               | false    | When enabled, a clear icon is displayed to clear the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| size                 | HintedString<"small" \| "large">                      | -        | Defines the size of the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| invalid              | boolean                                               | false    | When present, it specifies that the component should have invalid state style.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| disabled             | boolean                                               | false    | When present, it specifies that the component should be disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| variant              | null \| HintedString<"outlined" \| "filled">          | null     | Specifies the input variant of the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| readonly             | boolean                                               | false    | When present, it specifies that an input field is read-only.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| placeholder          | string                                                | -        | Placeholder text for the input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| fluid                | boolean                                               | null     | Spans 100% width of the container when enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| inputId              | string                                                | -        | Identifier of the focus input to match a label defined for the chips.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| inputClass           | string \| object                                      | -        | Style class of the input field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| inputStyle           | object                                                | -        | Inline style of the input field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ariaLabelledby       | string                                                | -        | Establishes relationships between the component and label(s) where its value should be one or more element IDs.                                                                                                                                                                                                                                                                                                                                                                                            |
| ariaLabel            | string                                                | -        | Establishes a string value that labels the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| formControl          | Record<string, any>                                   | -        | Form control object, typically used for handling validation and form state.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| dt                   | any                                                   | -        | It generates scoped CSS variables using design tokens for the component.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| pt                   | PassThrough<InputNumberPassThroughOptions<any>>       | -        | Used to pass attributes to DOM elements inside the component.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ptOptions            | any                                                   | -        | Used to configure passthrough(pt) options of the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| unstyled             | boolean                                               | false    | When enabled, it removes component related styles in the core.                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Pass Through Options

| Name            | Type                                | Description                                                    |
| --------------- | ----------------------------------- | -------------------------------------------------------------- |
| root            | InputNumberPassThroughOptionType<T> | Used to pass attributes to the root's DOM element.             |
| pcInputText     | any                                 | Used to pass attributes to the InputText component.            |
| clearIcon       | InputNumberPassThroughOptionType<T> | Used to pass attributes to the label's DOM element.            |
| buttonGroup     | InputNumberPassThroughOptionType<T> | Used to pass attributes to the button group's DOM element.     |
| incrementButton | InputNumberPassThroughOptionType<T> | Used to pass attributes to the increment button's DOM element. |
| incrementIcon   | InputNumberPassThroughOptionType<T> | Used to pass attributes to the increment icon's DOM element.   |
| decrementButton | InputNumberPassThroughOptionType<T> | Used to pass attributes to the decrement button's DOM element. |
| decrementIcon   | InputNumberPassThroughOptionType<T> | Used to pass attributes to the decrement icon's DOM element.   |
| hooks           | any                                 | Used to manage all lifecycle hooks.                            |

## Theming

### CSS Classes

| Class                          | Description                                |
| ------------------------------ | ------------------------------------------ |
| p-inputnumber                  | Class name of the root element             |
| p-inputnumber-input            | Class name of the input element            |
| p-inputnumber-button-group     | Class name of the button group element     |
| p-inputnumber-increment-button | Class name of the increment button element |
| p-inputnumber-decrement-button | Class name of the decrement button element |

### Design Tokens

| Token                                  | CSS Variable                               | Description                   |
| -------------------------------------- | ------------------------------------------ | ----------------------------- |
| inputnumber.transition.duration        | --p-inputnumber-transition-duration        | Transition duration of root   |
| inputnumber.button.width               | --p-inputnumber-button-width               | Width of button               |
| inputnumber.button.border.radius       | --p-inputnumber-button-border-radius       | Border radius of button       |
| inputnumber.button.vertical.padding    | --p-inputnumber-button-vertical-padding    | Vertical padding of button    |
| inputnumber.button.background          | --p-inputnumber-button-background          | Background of button          |
| inputnumber.button.hover.background    | --p-inputnumber-button-hover-background    | Hover background of button    |
| inputnumber.button.active.background   | --p-inputnumber-button-active-background   | Active background of button   |
| inputnumber.button.border.color        | --p-inputnumber-button-border-color        | Border color of button        |
| inputnumber.button.hover.border.color  | --p-inputnumber-button-hover-border-color  | Hover border color of button  |
| inputnumber.button.active.border.color | --p-inputnumber-button-active-border-color | Active border color of button |
| inputnumber.button.color               | --p-inputnumber-button-color               | Color of button               |
| inputnumber.button.hover.color         | --p-inputnumber-button-hover-color         | Hover color of button         |
| inputnumber.button.active.color        | --p-inputnumber-button-active-color        | Active color of button        |

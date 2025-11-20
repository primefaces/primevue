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

## Clear Icon

When showClear is enabled, a clear icon is added to reset the InputNumber.

```vue
<InputNumber v-model="value" showClear />
```

## Currency

Monetary values are enabled by setting mode property as currency . In this setting, currency property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar.

```vue
<InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" fluid />
<InputNumber v-model="value2" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" />
<InputNumber v-model="value3" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" fluid />
<InputNumber v-model="value4" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" fluid />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<InputNumber v-model="value" disabled prefix="%" />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<InputNumber v-model="value" variant="filled" />
```

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

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<InputNumber v-model="value" fluid mode="currency" currency="USD" locale="en-US" />
```

## Forms

InputNumber integrates seamlessly with the PrimeVue Forms library.

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <InputNumber v-model="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
    <label for="price_input">Price</label>
</IftaLabel>
```

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<InputNumber v-model="value1" :invalid="value1 === null" mode="decimal" :minFractionDigits="2" placeholder="Amount" />
<InputNumber v-model="value2" :invalid="value2 === null" mode="decimal" :minFractionDigits="2" variant="filled" placeholder="Amount" />
```

## Locale

Localization information such as grouping and decimal symbols are defined with the locale property which defaults to the user locale.

```vue
<InputNumber v-model="value1" inputId="locale-user" :minFractionDigits="2" fluid />
<InputNumber v-model="value2" inputId="locale-us" locale="en-US" :minFractionDigits="2" fluid />
<InputNumber v-model="value3" inputId="locale-german" locale="de-DE" :minFractionDigits="2" fluid />
<InputNumber v-model="value4" inputId="locale-indian" locale="en-IN" :minFractionDigits="2" fluid />
```

## Numerals

InputNumber is used with the v-model property for two-way value binding.

```vue
<InputNumber v-model="value1" inputId="integeronly" fluid />
<InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" fluid />
<InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" fluid />
<InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" fluid />
```

## Prefix & Suffix

Custom texts e.g. units can be placed before or after the input section with the prefix and suffix properties.

```vue
<InputNumber v-model="value1" inputId="mile" suffix=" mi" fluid />
<InputNumber v-model="value2" inputId="percent" prefix="%" fluid />
<InputNumber v-model="value3" inputId="expiry" prefix="Expires in " suffix=" days" fluid />
<InputNumber v-model="value4" inputId="temperature" prefix="&uarr; " suffix="℃" :min="0" :max="40" fluid />
```

## Sizes

InputNumber provides small and large sizes as alternatives to the base.

```vue
<InputNumber v-model="value1" size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
<InputNumber v-model="value2" placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
<InputNumber v-model="value3" size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />
```

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

## Inputnumber


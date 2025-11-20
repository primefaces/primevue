# Vue SelectButton Component

SelectButton is used to choose single or multiple items from a list using buttons.

## Import

```javascript
import SelectButton from 'primevue/selectbutton';
```

## Accessibility

Screen Reader SelectButton component uses ToggleButton internally and has group role. Value to describe the component can be provided via aria-labelledby property. Keyboard Support Keyboard interaction is derived from the native browser handling of checkboxs in a group. Key Function tab Moves focus to the next the focusable element in the page tab sequence. shift + tab Moves focus to the previous the focusable element in the page tab sequence. space Toggles the checked state of a button.

```vue
<span id="label_number">Number</span>
<Slider aria-labelledby="label_number" />

<Slider aria-label="Number" />
```

## Basic

SelectButton is used with the v-model property for two-way value binding along with the options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```vue
<SelectButton v-model="value" :options="options" />
```

## Disabled

When disabled is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the optionDisabled property.

```vue
<SelectButton v-model="value" :options="options" disabled />
<SelectButton v-model="value" :options="options2" optionDisabled="constant" optionLabel="name" />
```

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<SelectButton v-model="value" :options="options" fluid />
```

## Forms

SelectButton integrates seamlessly with the PrimeVue Forms library.

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<SelectButton v-model="value" :options="options" aria-labelledby="basic" allowEmpty :invalid="value === null"  />
```

## Multiple

SelectButton allows selecting only one item by default and setting multiple option enables choosing more than one item. In multiple case, model property should be an array.

```vue
<SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />
```

## Sizes

SelectButton provides small and large sizes as alternatives to the base.

```vue
<SelectButton v-model="value1" :options="options" size="small" />
<SelectButton v-model="value2" :options="options" />
<SelectButton v-model="value3" :options="options" size="large" />
```

## Template

Label of an option is used as the display text of an item by default, for custom content support define an option template that gets the option instance as a parameter.

```vue
<SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom">
    <template #option="slotProps">
        <i :class="slotProps.option.icon"></i>
    </template>
</SelectButton>
```

## Selectbutton


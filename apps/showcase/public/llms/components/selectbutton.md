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

## Select Button

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | any | - | Value of the component. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| options | any[] | - | An array of selectitems to display as the available options. |
| optionLabel | string \| Function | - | Property name or getter function to use as the label of an option. |
| optionValue | string \| Function | - | Property name or getter function to use as the value of an option, defaults to the option itself when not defined. |
| optionDisabled | string \| Function | - | Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. |
| multiple | boolean | false | When specified, allows selecting multiple values. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the element should be disabled. |
| fluid | boolean | null | Spans 100% width of the container when enabled. |
| dataKey | string | - | A property to uniquely identify an option. |
| allowEmpty | boolean | true | Whether selection can be cleared. |
| ariaLabelledby | string | - | Identifier of the underlying element. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the component. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<SelectButtonPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | SelectButtonPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| pcToggleButton | SelectButtonPassThroughOptionType | Used to pass attributes to the ToggleButton component. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-selectbutton | Class name of the root element |

### Design Tokens

| Token | CSS Variable | Description |
|-------|--------------|-------------|
| selectbutton.border.radius | --p-selectbutton-border-radius | Border radius of root |
| selectbutton.invalid.border.color | --p-selectbutton-invalid-border-color | Invalid border color of root |


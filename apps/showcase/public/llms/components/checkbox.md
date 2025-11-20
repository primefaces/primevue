# Vue Checkbox Component

Checkbox is an extension to standard checkbox element with theming.

## Import

```javascript
import Checkbox from 'primevue/checkbox';
import CheckboxGroup from 'primevue/checkboxgroup';
```

## Accessibility

Screen Reader Checkbox component uses a hidden native checkbox element internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with inputId prop or using aria-labelledby , aria-label props. Keyboard Support Key Function tab Moves focus to the checkbox. space Toggles the checked state.

```vue
<label for="chkbox1">Remember Me</label>
<Checkbox inputId="chkbox1" />

<span id="chkbox2">Remember Me</span>
<Checkbox aria-labelledby="chkbox2" />

<Checkbox aria-label="Remember Me" />
```

## Basic

Binary checkbox is used with the v-model for two-way value binding and the binary property.

```vue
<Checkbox v-model="checked" binary />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<Checkbox v-model="checked1" binary disabled />
<Checkbox v-model="checked2" binary disabled />
```

## Dynamic

Checkboxes can be generated using a list of values.

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<Checkbox v-model="checked" binary variant="filled" />
```

## Forms

Checkbox integrates seamlessly with the PrimeVue Forms library.

## Group

Multiple checkboxes can be grouped together.

```vue
<div class="card flex flex-wrap justify-center gap-4">
    <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1"> Cheese </label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2"> Mushroom </label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
        <label for="ingredient3"> Pepper </label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
        <label for="ingredient4"> Onion </label>
    </div>
</div>
```

## Indeterminate

When indeterminate is present, the checkbox masks the actual value visually.

```vue
<Checkbox v-model="checked" indeterminate binary />
```

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<Checkbox v-model="checked" :invalid="!checked"  binary />
```

## Sizes

Checkbox provides small and large sizes as alternatives to the base.

```vue
<div class="card flex flex-wrap justify-center gap-4">
    <div class="flex items-center gap-2">
        <Checkbox v-model="size" inputId="size_small" name="size" value="Small" size="small" />
        <label for="size_small" class="text-sm">Small</label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox v-model="size" inputId="size_normal" name="size" value="Normal" />
        <label for="size_normal">Normal</label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox v-model="size" inputId="size_large" name="size" value="Large" size="large" />
        <label for="size_large" class="text-lg">Large</label>
    </div>
</div>
```

## Checkbox

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | any | - | Value of the checkbox. |
| modelValue | any | - | Value binding of the checkbox. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | Name of the input element. |
| binary | boolean | - | Allows to select a boolean value instead of multiple values. |
| indeterminate | boolean | - | When present, it specifies input state as indeterminate. |
| size | "small" \| "large" | - | Defines the size of the component. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | - | When present, it specifies that the element should be disabled. |
| variant | null \| HintedString<"outlined" \| "filled"> | null | Specifies the input variant of the component. |
| readonly | boolean | - | When present, it specifies that an input field is read-only. |
| required | boolean | - | When present, it specifies that the element is required. |
| tabindex | number | - | Index of the element in tabbing order. |
| trueValue | any | - | Value in checked state. |
| falseValue | any | - | Value in unchecked state. |
| inputId | string | - | Identifier of the underlying input element. |
| inputClass | object | - | Style class of the input field. |
| inputStyle | string \| object | - | Inline style of the input field. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<CheckboxPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Checkbox

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | any | - | Value of the checkbox. |
| modelValue | any | - | Value binding of the checkbox. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | Name of the input element. |
| binary | boolean | - | Allows to select a boolean value instead of multiple values. |
| indeterminate | boolean | - | When present, it specifies input state as indeterminate. |
| size | "small" \| "large" | - | Defines the size of the component. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | - | When present, it specifies that the element should be disabled. |
| variant | null \| HintedString<"outlined" \| "filled"> | null | Specifies the input variant of the component. |
| readonly | boolean | - | When present, it specifies that an input field is read-only. |
| required | boolean | - | When present, it specifies that the element is required. |
| tabindex | number | - | Index of the element in tabbing order. |
| trueValue | any | - | Value in checked state. |
| falseValue | any | - | Value in unchecked state. |
| inputId | string | - | Identifier of the underlying input element. |
| inputClass | object | - | Style class of the input field. |
| inputStyle | string \| object | - | Inline style of the input field. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<CheckboxPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Checkboxgroup

## Checkboxgroup

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | CheckboxPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| input | CheckboxPassThroughOptionType | Used to pass attributes to the input's DOM element. |
| box | CheckboxPassThroughOptionType | Used to pass attributes to the box's DOM element. |
| icon | CheckboxPassThroughOptionType | Used to pass attributes to the icon's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-checkbox | Class name of the root element |
| p-checkbox-box | Class name of the box element |
| p-checkbox-input | Class name of the input element |
| p-checkbox-icon | Class name of the icon element |


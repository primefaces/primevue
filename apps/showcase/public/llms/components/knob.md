# Vue Knob Component

Knob is a form component to define number inputs with a dial.

## Import

```javascript
import Knob from 'primevue/knob';
```

## Accessibility

Screen Reader Knob element component uses slider role in addition to the aria-valuemin , aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using aria-labelledby and aria-label props. Keyboard Support Key Function tab Moves focus to the slider. left arrow down arrow Decrements the value. right arrow up arrow Increments the value. home Set the minimum value. end Set the maximum value. page up Increments the value by 10 steps. page down Decrements the value by 10 steps.

```vue
<span id="label_number">Number</span>
<Knob aria-labelledby="label_number" />

<Knob aria-label="Number" />
```

## Basic

Knob is used with the v-model property for two-way value binding.

```vue
<Knob v-model="value" />
```

## Color

valueColor defines the value color, rangeColor defines the range background and similarly textColor configures the color of the value text. In addition, strokeWidth is used to determine the width of the stroke of range and value sections.

```vue
<Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
```

## Disabled

When disabled is present, a visual hint is applied to indicate that the Knob cannot be interacted with.

```vue
<Knob v-model="value" disabled />
```

## Forms

Knob integrates seamlessly with the PrimeVue Forms library.

## Min/Max

Boundaries are configured with the min and max values whose defaults are 0 and 100 respectively.

```vue
<Knob v-model="value" :min="-50" :max="50" />
```

## Reactive

Knob can be controlled with custom controls as well.

```vue
<Knob v-model="value" :size="150" readonly />
<div class="flex gap-2">
    <Button icon="pi pi-plus" @click="value++" :disabled="value >= 100" />
    <Button icon="pi pi-minus" @click="value--" :disabled="value <= 0" />
</div>
```

## ReadOnly

When readonly present, value cannot be edited.

```vue
<Knob v-model="value" readonly />
```

## Size

Diameter of the knob is defined in pixels using the size property.

```vue
<Knob v-model="value" :size="200" />
```

## Step

Step factor is 1 by default and can be customized with step option.

```vue
<Knob v-model="value5" :step="10" />
```

## Stroke

The border size is specified with the stroke property as a number in pixels.

```vue
<Knob v-model="value" :strokeWidth="5" />
```

## Template

The label can be customized with the valueTemplate property using either a template string or a function.

```vue
<Knob v-model="value" valueTemplate="{value}%" />
```

## Knob

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | number | - | Value of the component. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| size | number | 100 | Size of the component in pixels. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| readonly | boolean | false | When present, it specifies that the component value cannot be edited. |
| step | number | 1 | Step factor to increment/decrement the value. |
| min | number | 0 | Mininum boundary value. |
| max | number | 100 | Maximum boundary value. |
| valueColor | string | $dt('knob.value.background') | Background of the value. |
| rangeColor | string | $dt('knob.range.background') | Background color of the range. |
| textColor | string | $dt('knob.text.color') | Color of the value text. |
| strokeWidth | number | 14 | Width of the knob stroke. |
| showValue | boolean | true | Whether the show the value inside the knob. |
| valueTemplate | string \| Function | '{value}' | Template string of the value. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Used to define a string that labels the element. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<KnobPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Knob

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | number | - | Value of the component. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| size | number | 100 | Size of the component in pixels. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| readonly | boolean | false | When present, it specifies that the component value cannot be edited. |
| step | number | 1 | Step factor to increment/decrement the value. |
| min | number | 0 | Mininum boundary value. |
| max | number | 100 | Maximum boundary value. |
| valueColor | string | $dt('knob.value.background') | Background of the value. |
| rangeColor | string | $dt('knob.range.background') | Background color of the range. |
| textColor | string | $dt('knob.text.color') | Color of the value text. |
| strokeWidth | number | 14 | Width of the knob stroke. |
| showValue | boolean | true | Whether the show the value inside the knob. |
| valueTemplate | string \| Function | '{value}' | Template string of the value. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Used to define a string that labels the element. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<KnobPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | KnobPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| svg | KnobPassThroughOptionType | Used to pass attributes to the svg's DOM element. |
| range | KnobPassThroughOptionType | Used to pass attributes to the range's DOM element. |
| value | KnobPassThroughOptionType | Used to pass attributes to the value' DOM element. |
| text | KnobPassThroughOptionType | Used to pass attributes to the text's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-knob | Class name of the root element |
| p-knob-range | Class name of the range element |
| p-knob-value | Class name of the value element |
| p-knob-text | Class name of the text element |


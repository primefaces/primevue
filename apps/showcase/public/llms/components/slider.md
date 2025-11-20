# Vue Slider Component

Slider is a component to provide input with a drag handle.

## Import

```javascript
import Slider from 'primevue/slider';
```

## Accessibility

Screen Reader Slider element component uses slider role on the handle in addition to the aria-orientation , aria-valuemin , aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using aria-labelledby and aria-label props. Keyboard Support Key Function tab Moves focus to the slider. left arrow up arrow Decrements the value. right arrow down arrow Increments the value. home Set the minimum value. end Set the maximum value. page up Increments the value by 10 steps. page down Decrements the value by 10 steps.

```vue
<span id="label_number">Number</span>
<Slider aria-labelledby="label_number" />

<Slider aria-label="Number" />
```

## Basic

Slider is used with the v-model property for two-way value binding.

```vue
<Slider v-model="value" class="w-56" />
```

## Filter

Image filter implementation using multiple sliders.

```vue
<img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" :style="filterStyle" />
<SelectButton v-model="filter" :options="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
<Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
```

## Forms

Slider integrates seamlessly with the PrimeVue Forms library.

## Input

Slider is connected to an input field using two-way binding.

```vue
<InputText v-model.number="value" />
<Slider v-model="value" />
```

## Range

When range property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value.

```vue
<Slider v-model="value" range class="w-56" />
```

## Step

Size of each movement is defined with the step property.

```vue
<Slider v-model="value" :step="20" class="w-56" />
```

## Vertical

Default layout of slider is horizontal , use orientation property for the alternative vertical mode.

```vue
<Slider v-model="value" orientation="vertical" class="h-56" />
```

## Slider

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | number \| number[] | - | Value of the component. |
| defaultValue | number \| number[] | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| min | number | 0 | Mininum boundary value. |
| max | number | 100 | Maximum boundary value. |
| orientation | HintedString<"horizontal" \| "vertical"> | horizontal | Orientation of the slider. |
| step | number | 1 | Step factor to increment/decrement the value. |
| range | boolean | false | When speficed, allows two boundary values to be picked. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| tabindex | number | - | Index of the element in tabbing order. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Used to define a string that labels the element. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<SliderPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Slider

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | number \| number[] | - | Value of the component. |
| defaultValue | number \| number[] | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| min | number | 0 | Mininum boundary value. |
| max | number | 100 | Maximum boundary value. |
| orientation | HintedString<"horizontal" \| "vertical"> | horizontal | Orientation of the slider. |
| step | number | 1 | Step factor to increment/decrement the value. |
| range | boolean | false | When speficed, allows two boundary values to be picked. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| tabindex | number | - | Index of the element in tabbing order. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Used to define a string that labels the element. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<SliderPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | SliderPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| range | SliderPassThroughOptionType | Used to pass attributes to the range's DOM element. |
| handle | SliderPassThroughOptionType | Used to pass attributes to the handle's DOM element. |
| startHandler | SliderPassThroughOptionType | Used to pass attributes to the start handler's DOM element. |
| endHandler | SliderPassThroughOptionType | Used to pass attributes to the end handler's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-slider | Class name of the root element |
| p-slider-range | Class name of the range element |
| p-slider-handle | Class name of the handle element |


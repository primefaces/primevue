# Vue Rating Component

Rating component is a star based selection input.

## Import

```javascript
import Rating from 'primevue/rating';
```

## Accessibility

Screen Reader Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the locale API via star and stars of the aria property. Keyboard Support Keyboard interaction is derived from the native browser handling of radio buttons in a group. Key Function tab Moves focus to the star representing the value, if there is none then first star receives the focus. left arrow up arrow Moves focus to the previous star, if there is none then last radio button receives the focus. right arrow down arrow Moves focus to the next star, if there is none then first star receives the focus. space If the focused star does not represent the value, changes the value to the star value.

## Basic

Rating is used with the v-model property for two-way value binding.

```vue
<Rating v-model="value" />
```

## Disabled

When disabled is present, a visual hint is applied to indicate that the Knob cannot be interacted with.

```vue
<Rating v-model="value" disabled />
```

## Forms

Rating integrates seamlessly with the PrimeVue Forms library.

## Number of Stars

Number of stars to display is defined with stars property.

```vue
<Rating v-model="value" :stars="10" />
```

## ReadOnly

When readOnly present, value cannot be edited.

```vue
<Rating v-model="value" readonly />
```

## Template

Custom icons are used to override the default icons with onicon , officon and cancelicon slots.

```vue
<Rating v-model="value">
    <template #onicon>
        <img src="/images/rating/custom-onicon.png" height="24" width="24" />
    </template>
    <template #officon>
        <img src="/images/rating/custom-officon.png" height="24" width="24" />
    </template>
</Rating>
```

## Rating

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | number | - | Value of the rating. |
| defaultValue | number | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | Name of the element. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the element should be disabled. |
| readonly | boolean | false | When present, it specifies that component is read-only. |
| stars | number | 5 | Number of stars. |
| onIcon | string | - | Icon for the on state. |
| offIcon | string | - | Icon for the off state. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<RatingPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Rating

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | number | - | Value of the rating. |
| defaultValue | number | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | Name of the element. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the element should be disabled. |
| readonly | boolean | false | When present, it specifies that component is read-only. |
| stars | number | 5 | Number of stars. |
| onIcon | string | - | Icon for the on state. |
| offIcon | string | - | Icon for the off state. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<RatingPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | RatingPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| option | RatingPassThroughOptionType | Used to pass attributes to the option's DOM element. |
| onIcon | RatingPassThroughOptionType | Used to pass attributes to the on icon's DOM element. |
| offIcon | RatingPassThroughOptionType | Used to pass attributes to the off icon's DOM element. |
| hiddenOptionInputContainer | RatingPassThroughOptionType | Used to pass attributes to the hidden option input container's DOM element. |
| hiddenOptionInput | RatingPassThroughOptionType | Used to pass attributes to the hidden option input's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-rating | Class name of the root element |
| p-rating-option | Class name of the option element |
| p-rating-on-icon | Class name of the on icon element |
| p-rating-off-icon | Class name of the off icon element |


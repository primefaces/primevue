# Vue ImageCompare Component

Compare two images side by side with a slider.

## Import

```javascript
import ImageCompare from 'primevue/imagecompare';
```

## Accessibility

Screen Reader ImageComponent component uses a native range slider internally. Value to describe the component can be defined using aria-labelledby and aria-label props. Keyboard Support Key Function tab Moves focus to the component. left arrow up arrow Decrements the value. right arrow down arrow Increments the value. home Set the minimum value. end Set the maximum value. page up Increments the value by 10 steps. page down Decrements the value by 10 steps.

```vue
<span id="image_label">Compare Images</span>
<ImageCompare class="shadow-lg rounded-2xl" aria-labelledby="image-label">
    ...
</ImageCompare>

<ImageCompare class="shadow-lg rounded-2xl" aria-label="Compare Images">
    ...
</ImageCompare>
```

## Basic

Images are defined using templating with left and right slots. Use the style or class properties to define the size of the container.

```vue
<ImageCompare class="shadow-lg rounded-2xl">
    <template #left>
        <img src="~/assets/images/island1.jpg" />
    </template>
    <template #right>
        <img src="~/assets/images/island2.jpg" />
    </template>
</ImageCompare>
```

## Responsive

Apply responsive styles to the container element to optimize display per screen size.

```vue
<ImageCompare class="sm:!w-96 shadow-lg rounded-2xl">
    <template #left>
        <img src="~/assets/images/island1.jpg" />
    </template>
    <template #right>
        <img src="~/assets/images/island2.jpg" />
    </template>
</ImageCompare>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ImageCompare class="sm:!w-96 shadow-lg">
            <template #left>
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </template>
            <template #right>
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </template>
        </ImageCompare>
    </div>
</template>
```

</details>

## Image Compare

### Props

| Name           | Type                                        | Default | Description                                                              |
| -------------- | ------------------------------------------- | ------- | ------------------------------------------------------------------------ |
| tabindex       | number                                      | 0       | Index of the element in tabbing order.                                   |
| ariaLabel      | string                                      | -       | Defines a string value that labels an interactive element.               |
| ariaLabelledby | string                                      | -       | Identifier of the underlying input element.                              |
| dt             | any                                         | -       | It generates scoped CSS variables using design tokens for the component. |
| pt             | PassThrough<ImageComparePassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions      | any                                         | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled       | boolean                                     | false   | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name   | Type                              | Description                                          |
| ------ | --------------------------------- | ---------------------------------------------------- |
| root   | ImageComparePassThroughOptionType | Used to pass attributes to the root's DOM element.   |
| slider | ImageComparePassThroughOptionType | Used to pass attributes to the slider's DOM element. |
| hooks  | any                               | Used to manage all lifecycle hooks.                  |

## Theming

### CSS Classes

| Class                 | Description                      |
| --------------------- | -------------------------------- |
| p-imagecompare        | Class name of the root element   |
| p-imagecompare-slider | Class name of the slider element |

### Design Tokens

| Token                                   | CSS Variable                                | Description                   |
| --------------------------------------- | ------------------------------------------- | ----------------------------- |
| imagecompare.handle.size                | --p-imagecompare-handle-size                | Size of handle                |
| imagecompare.handle.hover.size          | --p-imagecompare-handle-hover-size          | Hover size of handle          |
| imagecompare.handle.background          | --p-imagecompare-handle-background          | Background of handle          |
| imagecompare.handle.hover.background    | --p-imagecompare-handle-hover-background    | Hover background of handle    |
| imagecompare.handle.border.color        | --p-imagecompare-handle-border-color        | Border color of handle        |
| imagecompare.handle.hover.border.color  | --p-imagecompare-handle-hover-border-color  | Hover border color of handle  |
| imagecompare.handle.border.width        | --p-imagecompare-handle-border-width        | Border width of handle        |
| imagecompare.handle.border.radius       | --p-imagecompare-handle-border-radius       | Border radius of handle       |
| imagecompare.handle.transition.duration | --p-imagecompare-handle-transition-duration | Transition duration of handle |
| imagecompare.handle.focus.ring.width    | --p-imagecompare-handle-focus-ring-width    | Focus ring width of handle    |
| imagecompare.handle.focus.ring.style    | --p-imagecompare-handle-focus-ring-style    | Focus ring style of handle    |
| imagecompare.handle.focus.ring.color    | --p-imagecompare-handle-focus-ring-color    | Focus ring color of handle    |
| imagecompare.handle.focus.ring.offset   | --p-imagecompare-handle-focus-ring-offset   | Focus ring offset of handle   |
| imagecompare.handle.focus.ring.shadow   | --p-imagecompare-handle-focus-ring-shadow   | Focus ring shadow of handle   |

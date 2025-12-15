# Vue ProgressSpinner Component

ProgressSpinner is a process status indicator.

## Import

```javascript
import ProgressSpinner from 'primevue/progressspinner';
```

## Accessibility

Screen Reader ProgressSpinner components uses progressbar role. Value to describe the component can be defined using aria-labelledby and aria-label props. Keyboard Support Component does not include any interactive elements.

```vue
<ProgressSpinner aria-label="Loading" />
```

## Basic

An infinite spin animation is displayed by default.

```vue
<ProgressSpinner />
```

## Custom

ProgressSpinner can be customized with styling property like style , strokeWidth fill and animationDuration .

```vue
<ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Progress Spinner

### Props

| Name              | Type                                           | Default | Description                                                              |
| ----------------- | ---------------------------------------------- | ------- | ------------------------------------------------------------------------ |
| strokeWidth       | string                                         | 2       | Width of the circle stroke.                                              |
| fill              | string                                         | -       | Color for the background of the circle.                                  |
| animationDuration | string                                         | 2s      | Duration of the rotate animation.                                        |
| dt                | any                                            | -       | It generates scoped CSS variables using design tokens for the component. |
| pt                | PassThrough<ProgressSpinnerPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions         | any                                            | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled          | boolean                                        | false   | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name   | Type                                 | Description                                           |
| ------ | ------------------------------------ | ----------------------------------------------------- |
| root   | ProgressSpinnerPassThroughOptionType | Used to pass attributes to the root's DOM element.    |
| spin   | ProgressSpinnerPassThroughOptionType | Used to pass attributes to the spinner's DOM element. |
| circle | ProgressSpinnerPassThroughOptionType | Used to pass attributes to the circle's DOM element.  |
| hooks  | any                                  | Used to manage all lifecycle hooks.                   |

## Theming

### CSS Classes

| Class                    | Description                      |
| ------------------------ | -------------------------------- |
| p-progressspinner        | Class name of the root element   |
| p-progressspinner-spin   | Class name of the spin element   |
| p-progressspinner-circle | Class name of the circle element |

### Design Tokens

| Token                       | CSS Variable                    | Description         |
| --------------------------- | ------------------------------- | ------------------- |
| progressspinner.color.one   | --p-progressspinner-color-one   | Color one of root   |
| progressspinner.color.two   | --p-progressspinner-color-two   | Color two of root   |
| progressspinner.color.three | --p-progressspinner-color-three | Color three of root |
| progressspinner.color.four  | --p-progressspinner-color-four  | Color four of root  |

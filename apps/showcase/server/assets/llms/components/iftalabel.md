# Vue Ifta Label

IftaLabel is used to create infield top aligned labels

## Import

```javascript
import IftaLabel from 'primevue/iftalabel';
```

## Accessibility

Screen Reader IftaLabel does not require any roles and attributes. Keyboard Support Component does not include any interactive elements.

## Basic

IftaLabel is used by wrapping the input and its label.

```vue
<IftaLabel>
    <InputText id="username" v-model="value" />
    <label for="username">Username</label>
</IftaLabel>
```

## Invalid

When the form element is invalid, the label is also highlighted.

```vue
<IftaLabel>
    <InputText id="username" v-model="value" :invalid="!value" />
    <label for="username">Username</label>
</IftaLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputText id="username" v-model="value" :invalid="!value" />
            <label for="username">Username</label>
        </IftaLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
```

</details>

## Ifta Label

### Props

| Name      | Type                                     | Default | Description                                                              |
| --------- | ---------------------------------------- | ------- | ------------------------------------------------------------------------ |
| dt        | any                                      | -       | It generates scoped CSS variables using design tokens for the component. |
| pt        | PassThrough<IftaLabelPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions | any                                      | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled  | boolean                                  | false   | When enabled, it removes component related styles in the core.           |

### Slots

| Name    | Parameters | Description |
| ------- | ---------- | ----------- |
| default | Function   |             |

## Pass Through Options

| Name  | Type                           | Description                                        |
| ----- | ------------------------------ | -------------------------------------------------- |
| root  | IftaLabelPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| hooks | any                            | Used to manage all lifecycle hooks.                |

## Theming

### CSS Classes

| Class       | Description                    |
| ----------- | ------------------------------ |
| p-iftalabel | Class name of the root element |

### Design Tokens

| Token                          | CSS Variable                       | Description                 |
| ------------------------------ | ---------------------------------- | --------------------------- |
| iftalabel.color                | --p-iftalabel-color                | Color of root               |
| iftalabel.focus.color          | --p-iftalabel-focus-color          | Focus color of root         |
| iftalabel.invalid.color        | --p-iftalabel-invalid-color        | Invalid color of root       |
| iftalabel.transition.duration  | --p-iftalabel-transition-duration  | Transition duration of root |
| iftalabel.position.x           | --p-iftalabel-position-x           | Position x of root          |
| iftalabel.top                  | --p-iftalabel-top                  | Top of root                 |
| iftalabel.font.size            | --p-iftalabel-font-size            | Font size of root           |
| iftalabel.font.weight          | --p-iftalabel-font-weight          | Font weight of root         |
| iftalabel.input.padding.top    | --p-iftalabel-input-padding-top    | Padding top of input        |
| iftalabel.input.padding.bottom | --p-iftalabel-input-padding-bottom | Padding bottom of input     |

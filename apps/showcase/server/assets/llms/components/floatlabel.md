# Vue Float Label

FloatLabel visually integrates a label with its form element.

## Import

```javascript
import FloatLabel from 'primevue/floatlabel';
```

## Accessibility

Screen Reader FloatLabel does not require any roles and attributes. Keyboard Support Component does not include any interactive elements.

## Basic

FloatLabel is used by wrapping the input and its label.

```vue
<FloatLabel>
    <InputText id="username" v-model="value" />
    <label for="username">Username</label>
</FloatLabel>
```

## Invalid

When the form element is invalid, the label is also highlighted.

```vue
<FloatLabel>
    <InputText id="value1" v-model="value1" :invalid="!value1" />
    <label for="value1">Username</label>
</FloatLabel>

<FloatLabel variant="in">
    <InputText id="value2" v-model="value2" :invalid="!value2" />
    <label for="value2">Username</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputText id="value3" v-model="value3" :invalid="!value3" />
    <label for="value3">Username</label>
</FloatLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <InputText id="value1" v-model="value1" :invalid="!value1" />
            <label for="value1">Username</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputText id="value2" v-model="value2" :invalid="!value2" />
            <label for="value2">Username</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="value3" v-model="value3" :invalid="!value3" />
            <label for="value3">Username</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
<\/script>
```

</details>

## Variants

The variant property defines the position of the label. Default value is over , whereas in and on are the alternatives.

```vue
<FloatLabel variant="in">
    <InputText id="in_label" v-model="value1" autocomplete="off" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputText id="on_label" v-model="value2" autocomplete="off" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<div class="card flex flex-wrap justify-center items-end gap-4">
    <div class="card flex flex-wrap justify-center gap-4">
        <FloatLabel variant="in">
            <InputText id="in_label" v-model="value1" autocomplete="off" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="on_label" v-model="value2" autocomplete="off" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
<\/script>
```

</details>

## Float Label

### Props

| Name      | Type                                      | Default | Description                                                              |
| --------- | ----------------------------------------- | ------- | ------------------------------------------------------------------------ |
| dt        | any                                       | -       | It generates scoped CSS variables using design tokens for the component. |
| pt        | PassThrough<FloatLabelPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions | any                                       | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled  | boolean                                   | false   | When enabled, it removes component related styles in the core.           |
| variant   | HintedString<"on" \| "in" \| "over">      | over    | Defines the positioning of the label relative to the input.              |

### Slots

| Name    | Parameters | Description |
| ------- | ---------- | ----------- |
| default | Function   |             |

## Pass Through Options

| Name  | Type                            | Description                                        |
| ----- | ------------------------------- | -------------------------------------------------- |
| root  | FloatLabelPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| hooks | any                             | Used to manage all lifecycle hooks.                |

## Theming

### CSS Classes

| Class        | Description                    |
| ------------ | ------------------------------ |
| p-floatlabel | Class name of the root element |

### Design Tokens

| Token                              | CSS Variable                           | Description                 |
| ---------------------------------- | -------------------------------------- | --------------------------- |
| floatlabel.color                   | --p-floatlabel-color                   | Color of root               |
| floatlabel.focus.color             | --p-floatlabel-focus-color             | Focus color of root         |
| floatlabel.active.color            | --p-floatlabel-active-color            | Active color of root        |
| floatlabel.invalid.color           | --p-floatlabel-invalid-color           | Invalid color of root       |
| floatlabel.transition.duration     | --p-floatlabel-transition-duration     | Transition duration of root |
| floatlabel.position.x              | --p-floatlabel-position-x              | Position x of root          |
| floatlabel.position.y              | --p-floatlabel-position-y              | Position y of root          |
| floatlabel.font.weight             | --p-floatlabel-font-weight             | Font weight of root         |
| floatlabel.active.font.size        | --p-floatlabel-active-font-size        | Active font size of root    |
| floatlabel.active.font.weight      | --p-floatlabel-active-font-weight      | Active font weight of root  |
| floatlabel.over.active.top         | --p-floatlabel-over-active-top         | Active top of over          |
| floatlabel.in.input.padding.top    | --p-floatlabel-in-input-padding-top    | Input padding top of in     |
| floatlabel.in.input.padding.bottom | --p-floatlabel-in-input-padding-bottom | Input padding bottom of in  |
| floatlabel.in.active.top           | --p-floatlabel-in-active-top           | Active top of in            |
| floatlabel.on.border.radius        | --p-floatlabel-on-border-radius        | Border radius of on         |
| floatlabel.on.active.background    | --p-floatlabel-on-active-background    | Active background of on     |
| floatlabel.on.active.padding       | --p-floatlabel-on-active-padding       | Active padding of on        |

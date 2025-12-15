# Vue ToggleButton Component

ToggleButton is used to select a boolean value using a button.

## Import

```javascript
import ToggleButton from 'primevue/togglebutton';
```

## Accessibility

Screen Reader ToggleButton component uses a native button element as the switch element internally that is only visible to screen readers. Value to describe the component can be defined with aria-labelledby or aria-label props, it is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label that does not change related to state. Keyboard Support Keyboard interaction is derived from the native browser handling of checkboxs in a group. Key Function tab Moves focus to the button. space Toggles the checked state.

```vue
<span id="rememberme">Remember Me</span>
<ToggleButton aria-labelledby="rememberme" />

<ToggleButton aria-label="Remember Me" />
```

## Basic

ToggleButton is used with the v-model property for two-way value binding.

```vue
<ToggleButton v-model="checked" onLabel="On" offLabel="Off" />
```

## Customized

Icons and Labels can be customized using onLabel , offLabel , onIcon and offIcon properties.

```vue
<ToggleButton v-model="checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-lock" offIcon="pi pi-lock-open" class="w-36" aria-label="Do you confirm" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-lock"
            offIcon="pi pi-lock-open" class="w-36" aria-label="Do you confirm" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
```

</details>

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<ToggleButton v-model="checked" disabled onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-40" aria-label="Confirmation" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" disabled onIcon="pi pi-check" offIcon="pi pi-times"
            class="w-full sm:w-40" aria-label="Confirmation" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
```

</details>

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<ToggleButton v-model="checked" onLabel="On" offLabel="Off" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <ToggleButton v-model="checked" fluid onLabel="On" offLabel="Off" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
```

</details>

## Forms

ToggleButton integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-1">
        <ToggleButton name="consent" class="w-48" onLabel="Accept All" offLabel="Reject All" />
        <Message v-if="$form.consent?.invalid" severity="error" variant="simple">{{ $form.consent.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col items-center gap-1">
                <ToggleButton name="consent" class="w-48" onLabel="Accept All" offLabel="Reject All" />
                <Message v-if="$form.consent?.invalid" severity="error" variant="simple">{{ $form.consent.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
    consent: false
});

const resolver = ref(zodResolver(
    z.object({
        consent: z.boolean().refine((val) => val === true, { message: 'Consent is mandatory.' })
    })
));

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
```

</details>

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" :invalid="!checked" class="w-full sm:w-40" aria-label="Confirmation" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" :invalid="!checked" class="w-full sm:w-40" aria-label="Confirmation" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
```

</details>

## Sizes

ToggleButton provides small and large sizes as alternatives to the base.

```vue
<ToggleButton v-model="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
<ToggleButton v-model="value2" onLabel="On" offLabel="Off" class="min-w-20" />
<ToggleButton v-model="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <ToggleButton v-model="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
        <ToggleButton v-model="value2" onLabel="On" offLabel="Off" class="min-w-20" />
        <ToggleButton v-model="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
<\/script>
```

</details>

## Toggle Button

### Props

| Name           | Type                                             | Default | Description                                                                                                     |
| -------------- | ------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------- |
| modelValue     | boolean                                          | false   | Value of the component.                                                                                         |
| defaultValue   | boolean                                          | -       | The default value for the input when not controlled by `modelValue` .                                           |
| name           | string                                           | -       | The name attribute for the element, typically used in form submissions.                                         |
| onIcon         | string                                           | -       | Icon for the on state.                                                                                          |
| offIcon        | string                                           | -       | Icon for the off state.                                                                                         |
| onLabel        | string                                           | yes     | Label for the on state.                                                                                         |
| offLabel       | string                                           | no      | Label for the off state.                                                                                        |
| invalid        | boolean                                          | false   | When present, it specifies that the component should have invalid state style.                                  |
| disabled       | boolean                                          | false   | When present, it specifies that the element should be disabled.                                                 |
| fluid          | boolean                                          | null    | Spans 100% width of the container when enabled.                                                                 |
| readonly       | boolean                                          | -       | When present, it specifies that an input field is read-only.                                                    |
| tabindex       | string                                           | -       | Index of the element in tabbing order.                                                                          |
| ariaLabelledby | string                                           | -       | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| size           | HintedString<"small" \| "large">                 | -       | Defines the size of the component.                                                                              |
| formControl    | Record<string, any>                              | -       | Form control object, typically used for handling validation and form state.                                     |
| dt             | any                                              | -       | It generates scoped CSS variables using design tokens for the component.                                        |
| pt             | PassThrough<ToggleButtonPassThroughOptions<any>> | -       | Used to pass attributes to DOM elements inside the component.                                                   |
| ptOptions      | any                                              | -       | Used to configure passthrough(pt) options of the component.                                                     |
| unstyled       | boolean                                          | false   | When enabled, it removes component related styles in the core.                                                  |

## Pass Through Options

| Name    | Type                                 | Description                                           |
| ------- | ------------------------------------ | ----------------------------------------------------- |
| root    | ToggleButtonPassThroughOptionType<T> | Used to pass attributes to the root's DOM element.    |
| content | ToggleButtonPassThroughOptionType<T> | Used to pass attributes to the content's DOM element. |
| icon    | ToggleButtonPassThroughOptionType<T> | Used to pass attributes to the icon's DOM element.    |
| label   | ToggleButtonPassThroughOptionType<T> | Used to pass attributes to the label's DOM element.   |
| hooks   | any                                  | Used to manage all lifecycle hooks.                   |

## Theming

### CSS Classes

| Class                | Description                     |
| -------------------- | ------------------------------- |
| p-togglebutton       | Class name of the root element  |
| p-togglebutton-icon  | Class name of the icon element  |
| p-togglebutton-label | Class name of the label element |

### Design Tokens

| Token                                   | CSS Variable                                | Description                   |
| --------------------------------------- | ------------------------------------------- | ----------------------------- |
| togglebutton.padding                    | --p-togglebutton-padding                    | Padding of root               |
| togglebutton.border.radius              | --p-togglebutton-border-radius              | Border radius of root         |
| togglebutton.gap                        | --p-togglebutton-gap                        | Gap of root                   |
| togglebutton.font.weight                | --p-togglebutton-font-weight                | Font weight of root           |
| togglebutton.disabled.background        | --p-togglebutton-disabled-background        | Disabled background of root   |
| togglebutton.disabled.border.color      | --p-togglebutton-disabled-border-color      | Disabled border color of root |
| togglebutton.disabled.color             | --p-togglebutton-disabled-color             | Disabled color of root        |
| togglebutton.invalid.border.color       | --p-togglebutton-invalid-border-color       | Invalid border color of root  |
| togglebutton.focus.ring.width           | --p-togglebutton-focus-ring-width           | Focus ring width of root      |
| togglebutton.focus.ring.style           | --p-togglebutton-focus-ring-style           | Focus ring style of root      |
| togglebutton.focus.ring.color           | --p-togglebutton-focus-ring-color           | Focus ring color of root      |
| togglebutton.focus.ring.offset          | --p-togglebutton-focus-ring-offset          | Focus ring offset of root     |
| togglebutton.focus.ring.shadow          | --p-togglebutton-focus-ring-shadow          | Focus ring shadow of root     |
| togglebutton.transition.duration        | --p-togglebutton-transition-duration        | Transition duration of root   |
| togglebutton.sm.font.size               | --p-togglebutton-sm-font-size               | Sm font size of root          |
| togglebutton.sm.padding                 | --p-togglebutton-sm-padding                 | Sm padding of root            |
| togglebutton.lg.font.size               | --p-togglebutton-lg-font-size               | Lg font size of root          |
| togglebutton.lg.padding                 | --p-togglebutton-lg-padding                 | Lg padding of root            |
| togglebutton.background                 | --p-togglebutton-background                 | Background of root            |
| togglebutton.checked.background         | --p-togglebutton-checked-background         | Checked background of root    |
| togglebutton.hover.background           | --p-togglebutton-hover-background           | Hover background of root      |
| togglebutton.border.color               | --p-togglebutton-border-color               | Border color of root          |
| togglebutton.color                      | --p-togglebutton-color                      | Color of root                 |
| togglebutton.hover.color                | --p-togglebutton-hover-color                | Hover color of root           |
| togglebutton.checked.color              | --p-togglebutton-checked-color              | Checked color of root         |
| togglebutton.checked.border.color       | --p-togglebutton-checked-border-color       | Checked border color of root  |
| togglebutton.icon.disabled.color        | --p-togglebutton-icon-disabled-color        | Disabled color of icon        |
| togglebutton.icon.color                 | --p-togglebutton-icon-color                 | Color of icon                 |
| togglebutton.icon.hover.color           | --p-togglebutton-icon-hover-color           | Hover color of icon           |
| togglebutton.icon.checked.color         | --p-togglebutton-icon-checked-color         | Checked color of icon         |
| togglebutton.content.padding            | --p-togglebutton-content-padding            | Padding of content            |
| togglebutton.content.border.radius      | --p-togglebutton-content-border-radius      | Border radius of content      |
| togglebutton.content.checked.shadow     | --p-togglebutton-content-checked-shadow     | Checked shadow of content     |
| togglebutton.content.sm.padding         | --p-togglebutton-content-sm-padding         | Sm padding of content         |
| togglebutton.content.lg.padding         | --p-togglebutton-content-lg-padding         | Lg padding of content         |
| togglebutton.content.checked.background | --p-togglebutton-content-checked-background | Checked background of content |

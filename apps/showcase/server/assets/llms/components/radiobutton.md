# Vue RadioButton Component

RadioButton is an extension to standard radio button element with theming.

## Import

```javascript
import RadioButton from 'primevue/radiobutton';
import RadioButtonGroup from 'primevue/radiobuttongroup';
```

## Accessibility

Screen Reader RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby , aria-label props. Keyboard Support Key Function tab Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus. left arrow up arrow Moves focus to the previous radio button, if there is none then last radio button receives the focus. right arrow down arrow Moves focus to the next radio button, if there is none then first radio button receives the focus. space If the focused radio button is unchecked, changes the state to checked.

```vue
<label for="rb1">One</label>
<RadioButton inputId="rb1" />

<span id="rb2">Two</span>
<RadioButton aria-labelledby="rb2" />

<RadioButton aria-label="Three" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<RadioButton v-model="value" :value="1" disabled />
<RadioButton v-model="value" :value="2" disabled />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center gap-2">
        <RadioButton v-model="value" :value="1" disabled />
        <RadioButton v-model="value" :value="2" disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(2);
<\/script>
```

</details>

## Dynamic

RadioButtons can be generated using a list of values.

```vue
<div v-for="category in categories" :key="category.key" class="flex items-center gap-2">
    <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic" :value="category.name" />
    <label :for="category.key">{{ category.name }}</label>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <div v-for="category in categories" :key="category.key" class="flex items-center gap-2">
                <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic" :value="category.name" />
                <label :for="category.key">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedCategory = ref('Production');
const categories = ref([
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
]);
<\/script>
```

</details>

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<RadioButton v-model="value" value="1" variant="filled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <RadioButton v-model="value" value="1" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
<\/script>
```

</details>

## Forms

RadioButton integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
        <RadioButtonGroup name="ingredient" class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <RadioButton inputId="cheese" value="Cheese" />
                <label for="cheese">Cheese</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton inputId="mushroom" value="Mushroom" />
                <label for="mushroom">Mushroom</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton inputId="pepper" value="Pepper" />
                <label for="pepper">Pepper</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton inputId="onion" value="Onion" />
                <label for="onion">Onion</label>
            </div>
        </RadioButtonGroup>
        <Message v-if="$form.ingredient?.invalid" severity="error" size="small" variant="simple">{{ $form.ingredient.error?.message }}</Message>
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
            <div class="flex flex-col gap-2">
                <RadioButtonGroup name="ingredient" class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="cheese" value="Cheese" />
                        <label for="cheese">Cheese</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="mushroom" value="Mushroom" />
                        <label for="mushroom">Mushroom</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="pepper" value="Pepper" />
                        <label for="pepper">Pepper</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="onion" value="Onion" />
                        <label for="onion">Onion</label>
                    </div>
                </RadioButtonGroup>
                <Message v-if="$form.ingredient?.invalid" severity="error" size="small" variant="simple">{{ $form.ingredient.error?.message }}</Message>
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
    ingredient: ''
});
const resolver = ref(zodResolver(
    z.object({
        ingredient: z.string().min(1, { message: 'Ingredient is required.' })
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

## Group

RadioButton is used with the v-model property for two-way value binding.

```vue
<div class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
        <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1">Cheese</label>
    </div>
    <div class="flex items-center gap-2">
        <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2">Mushroom</label>
    </div>
    <div class="flex items-center gap-2">
        <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
        <label for="ingredient3">Pepper</label>
    </div>
    <div class="flex items-center gap-2">
        <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
        <label for="ingredient4">Onion</label>
    </div>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <div class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1">Cheese</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2">Mushroom</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
                <label for="ingredient3">Pepper</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
                <label for="ingredient4">Onion</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const ingredient = ref('');
<\/script>
```

</details>

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<RadioButton v-model="value" value="1" :invalid="value === null" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <RadioButton v-model="value" value="1" :invalid="value === null" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Sizes

RadioButton provides small and large sizes as alternatives to the base.

```vue
<div class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
        <RadioButton v-model="size" inputId="size_small" name="size" value="Small" size="small" />
        <label for="size_small" class="text-sm">Small</label>
    </div>
    <div class="flex items-center gap-2">
        <RadioButton v-model="size" inputId="size_normal" name="size" value="Normal" />
        <label for="size_normal">Normal</label>
    </div>
    <div class="flex items-center gap-2">
        <RadioButton v-model="size" inputId="size_large" name="size" value="Large" size="large" />
        <label for="size_large" class="text-lg">Large</label>
    </div>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <div class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <RadioButton v-model="size" inputId="size_small" name="size" value="Small" size="small" />
                <label for="size_small" class="text-sm">Small</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton v-model="size" inputId="size_normal" name="size" value="Normal" />
                <label for="size_normal">Normal</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton v-model="size" inputId="size_large" name="size" value="Large" size="large" />
                <label for="size_large" class="text-lg">Large</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const size = ref(null);
<\/script>
```

</details>

## Radio Button

### Props

| Name           | Type                                         | Default | Description                                                                                                     |
| -------------- | -------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| value          | any                                          | -       | Value of the checkbox.                                                                                          |
| modelValue     | any                                          | -       | Value binding of the checkbox.                                                                                  |
| defaultValue   | any                                          | -       | The default value for the input when not controlled by `modelValue` .                                           |
| name           | string                                       | -       | Name of the input element.                                                                                      |
| binary         | boolean                                      | -       | Allows to select a boolean value.                                                                               |
| size           | HintedString<"small" \| "large">             | -       | Defines the size of the component.                                                                              |
| invalid        | boolean                                      | false   | When present, it specifies that the component should have invalid state style.                                  |
| disabled       | boolean                                      | false   | When present, it specifies that the component should be disabled.                                               |
| variant        | null \| HintedString<"outlined" \| "filled"> | null    | Specifies the input variant of the component.                                                                   |
| readonly       | boolean                                      | -       | When present, it specifies that an input field is read-only.                                                    |
| tabindex       | number                                       | -       | Index of the element in tabbing order.                                                                          |
| inputId        | string                                       | -       | Identifier of the underlying input element.                                                                     |
| inputStyle     | object                                       | -       | Inline style of the input field.                                                                                |
| inputClass     | string \| object                             | -       | Style class of the input field.                                                                                 |
| ariaLabelledby | string                                       | -       | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel      | string                                       | -       | Establishes a string value that labels the component.                                                           |
| formControl    | Record<string, any>                          | -       | Form control object, typically used for handling validation and form state.                                     |
| dt             | any                                          | -       | It generates scoped CSS variables using design tokens for the component.                                        |
| pt             | PassThrough<RadioButtonPassThroughOptions>   | -       | Used to pass attributes to DOM elements inside the component.                                                   |
| ptOptions      | any                                          | -       | Used to configure passthrough(pt) options of the component.                                                     |
| unstyled       | boolean                                      | false   | When enabled, it removes component related styles in the core.                                                  |

## Pass Through Options

| Name  | Type                             | Description                                         |
| ----- | -------------------------------- | --------------------------------------------------- |
| root  | RadioButtonPassThroughOptionType | Used to pass attributes to the root's DOM element.  |
| input | RadioButtonPassThroughOptionType | Used to pass attributes to the input's DOM element. |
| box   | RadioButtonPassThroughOptionType | Used to pass attributes to the box's DOM element.   |
| icon  | RadioButtonPassThroughOptionType | Used to pass attributes to the icon's DOM element.  |
| hooks | any                              | Used to manage all lifecycle hooks.                 |

## Theming

### CSS Classes

| Class               | Description                     |
| ------------------- | ------------------------------- |
| p-radiobutton       | Class name of the root element  |
| p-radiobutton-box   | Class name of the box element   |
| p-radiobutton-input | Class name of the input element |
| p-radiobutton-icon  | Class name of the icon element  |

### Design Tokens

| Token                                     | CSS Variable                                  | Description                           |
| ----------------------------------------- | --------------------------------------------- | ------------------------------------- |
| radiobutton.width                         | --p-radiobutton-width                         | Width of root                         |
| radiobutton.height                        | --p-radiobutton-height                        | Height of root                        |
| radiobutton.background                    | --p-radiobutton-background                    | Background of root                    |
| radiobutton.checked.background            | --p-radiobutton-checked-background            | Checked background of root            |
| radiobutton.checked.hover.background      | --p-radiobutton-checked-hover-background      | Checked hover background of root      |
| radiobutton.disabled.background           | --p-radiobutton-disabled-background           | Disabled background of root           |
| radiobutton.filled.background             | --p-radiobutton-filled-background             | Filled background of root             |
| radiobutton.border.color                  | --p-radiobutton-border-color                  | Border color of root                  |
| radiobutton.hover.border.color            | --p-radiobutton-hover-border-color            | Hover border color of root            |
| radiobutton.focus.border.color            | --p-radiobutton-focus-border-color            | Focus border color of root            |
| radiobutton.checked.border.color          | --p-radiobutton-checked-border-color          | Checked border color of root          |
| radiobutton.checked.hover.border.color    | --p-radiobutton-checked-hover-border-color    | Checked hover border color of root    |
| radiobutton.checked.focus.border.color    | --p-radiobutton-checked-focus-border-color    | Checked focus border color of root    |
| radiobutton.checked.disabled.border.color | --p-radiobutton-checked-disabled-border-color | Checked disabled border color of root |
| radiobutton.invalid.border.color          | --p-radiobutton-invalid-border-color          | Invalid border color of root          |
| radiobutton.shadow                        | --p-radiobutton-shadow                        | Shadow of root                        |
| radiobutton.focus.ring.width              | --p-radiobutton-focus-ring-width              | Focus ring width of root              |
| radiobutton.focus.ring.style              | --p-radiobutton-focus-ring-style              | Focus ring style of root              |
| radiobutton.focus.ring.color              | --p-radiobutton-focus-ring-color              | Focus ring color of root              |
| radiobutton.focus.ring.offset             | --p-radiobutton-focus-ring-offset             | Focus ring offset of root             |
| radiobutton.focus.ring.shadow             | --p-radiobutton-focus-ring-shadow             | Focus ring shadow of root             |
| radiobutton.transition.duration           | --p-radiobutton-transition-duration           | Transition duration of root           |
| radiobutton.sm.width                      | --p-radiobutton-sm-width                      | Sm width of root                      |
| radiobutton.sm.height                     | --p-radiobutton-sm-height                     | Sm height of root                     |
| radiobutton.lg.width                      | --p-radiobutton-lg-width                      | Lg width of root                      |
| radiobutton.lg.height                     | --p-radiobutton-lg-height                     | Lg height of root                     |
| radiobutton.icon.size                     | --p-radiobutton-icon-size                     | Size of icon                          |
| radiobutton.icon.checked.color            | --p-radiobutton-icon-checked-color            | Checked color of icon                 |
| radiobutton.icon.checked.hover.color      | --p-radiobutton-icon-checked-hover-color      | Checked hover color of icon           |
| radiobutton.icon.disabled.color           | --p-radiobutton-icon-disabled-color           | Disabled color of icon                |
| radiobutton.icon.sm.size                  | --p-radiobutton-icon-sm-size                  | Sm size of icon                       |
| radiobutton.icon.lg.size                  | --p-radiobutton-icon-lg-size                  | Lg size of icon                       |

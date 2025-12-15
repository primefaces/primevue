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

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center gap-2">
        <Checkbox v-model="checked1" binary disabled />
        <Checkbox v-model="checked2" binary disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(true);
<\/script>
```

</details>

## Dynamic

Checkboxes can be generated using a list of values.

```vue
<div v-for="category of categories" :key="category.key" class="flex items-center gap-2">
    <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
    <label :for="category.key">{{ category.name }}</label>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <div v-for="category of categories" :key="category.key" class="flex items-center gap-2">
                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                <label :for="category.key">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
    {name: "Accounting", key: "A"},
    {name: "Marketing", key: "M"},
    {name: "Production", key: "P"},
    {name: "Research", key: "R"}
]);
const selectedCategories = ref(['Marketing']);
<\/script>
```

</details>

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<Checkbox v-model="checked" binary variant="filled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>
```

</details>

## Forms

Checkbox integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-2">
        <CheckboxGroup name="ingredient" class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <Checkbox inputId="cheese" value="Cheese" />
                <label for="cheese"> Cheese </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="mushroom" value="Mushroom" />
                <label for="mushroom"> Mushroom </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="pepper" value="Pepper" />
                <label for="pepper"> Pepper </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="onion" value="Onion" />
                <label for="onion"> Onion </label>
            </div>
        </CheckboxGroup>
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
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
            <div class="flex flex-col gap-2">
                <CheckboxGroup name="ingredient" class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="cheese" value="Cheese" />
                        <label for="cheese"> Cheese </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="mushroom" value="Mushroom" />
                        <label for="mushroom"> Mushroom </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="pepper" value="Pepper" />
                        <label for="pepper"> Pepper </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="onion" value="Onion" />
                        <label for="onion"> Onion </label>
                    </div>
                </CheckboxGroup>
                <Message v-if="$form.ingredient?.invalid" severity="error" size="small" variant="simple">{{ $form.ingredient.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <Toast />
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
    ingredient: []
});
const resolver = ref(zodResolver(
    z.object({
        ingredient: z.array(z.string()).min(1, { message: 'At least one ingredient must be selected.' })
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

<details>
<summary>Composition API Example</summary>

```vue
<template>
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
</template>

<script setup>
import { ref } from "vue";

const pizza = ref();
<\/script>
```

</details>

## Indeterminate

When indeterminate is present, the checkbox masks the actual value visually.

```vue
<Checkbox v-model="checked" indeterminate binary />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" indeterminate binary />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>
```

</details>

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<Checkbox v-model="checked" :invalid="!checked" binary />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" :invalid="!checked"  binary />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>
```

</details>

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

<details>
<summary>Composition API Example</summary>

```vue
<template>
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
</template>

<script setup>
import { ref } from "vue";

const size = ref();
<\/script>
```

</details>

## Checkbox

### Props

| Name           | Type                                         | Default | Description                                                                                                     |
| -------------- | -------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| value          | any                                          | -       | Value of the checkbox.                                                                                          |
| modelValue     | any                                          | -       | Value binding of the checkbox.                                                                                  |
| defaultValue   | any                                          | -       | The default value for the input when not controlled by `modelValue` .                                           |
| name           | string                                       | -       | Name of the input element.                                                                                      |
| binary         | boolean                                      | -       | Allows to select a boolean value instead of multiple values.                                                    |
| indeterminate  | boolean                                      | -       | When present, it specifies input state as indeterminate.                                                        |
| size           | "small" \| "large"                           | -       | Defines the size of the component.                                                                              |
| invalid        | boolean                                      | false   | When present, it specifies that the component should have invalid state style.                                  |
| disabled       | boolean                                      | -       | When present, it specifies that the element should be disabled.                                                 |
| variant        | null \| HintedString<"outlined" \| "filled"> | null    | Specifies the input variant of the component.                                                                   |
| readonly       | boolean                                      | -       | When present, it specifies that an input field is read-only.                                                    |
| required       | boolean                                      | -       | When present, it specifies that the element is required.                                                        |
| tabindex       | number                                       | -       | Index of the element in tabbing order.                                                                          |
| trueValue      | any                                          | -       | Value in checked state.                                                                                         |
| falseValue     | any                                          | -       | Value in unchecked state.                                                                                       |
| inputId        | string                                       | -       | Identifier of the underlying input element.                                                                     |
| inputClass     | object                                       | -       | Style class of the input field.                                                                                 |
| inputStyle     | string \| object                             | -       | Inline style of the input field.                                                                                |
| ariaLabelledby | string                                       | -       | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel      | string                                       | -       | Establishes a string value that labels the component.                                                           |
| formControl    | Record<string, any>                          | -       | Form control object, typically used for handling validation and form state.                                     |
| dt             | any                                          | -       | It generates scoped CSS variables using design tokens for the component.                                        |
| pt             | PassThrough<CheckboxPassThroughOptions>      | -       | Used to pass attributes to DOM elements inside the component.                                                   |
| ptOptions      | any                                          | -       | Used to configure passthrough(pt) options of the component.                                                     |
| unstyled       | boolean                                      | false   | When enabled, it removes component related styles in the core.                                                  |

## Pass Through Options

| Name  | Type                          | Description                                         |
| ----- | ----------------------------- | --------------------------------------------------- |
| root  | CheckboxPassThroughOptionType | Used to pass attributes to the root's DOM element.  |
| input | CheckboxPassThroughOptionType | Used to pass attributes to the input's DOM element. |
| box   | CheckboxPassThroughOptionType | Used to pass attributes to the box's DOM element.   |
| icon  | CheckboxPassThroughOptionType | Used to pass attributes to the icon's DOM element.  |
| hooks | any                           | Used to manage all lifecycle hooks.                 |

## Theming

### CSS Classes

| Class            | Description                     |
| ---------------- | ------------------------------- |
| p-checkbox       | Class name of the root element  |
| p-checkbox-box   | Class name of the box element   |
| p-checkbox-input | Class name of the input element |
| p-checkbox-icon  | Class name of the icon element  |

### Design Tokens

| Token                                  | CSS Variable                               | Description                           |
| -------------------------------------- | ------------------------------------------ | ------------------------------------- |
| checkbox.border.radius                 | --p-checkbox-border-radius                 | Border radius of root                 |
| checkbox.width                         | --p-checkbox-width                         | Width of root                         |
| checkbox.height                        | --p-checkbox-height                        | Height of root                        |
| checkbox.background                    | --p-checkbox-background                    | Background of root                    |
| checkbox.checked.background            | --p-checkbox-checked-background            | Checked background of root            |
| checkbox.checked.hover.background      | --p-checkbox-checked-hover-background      | Checked hover background of root      |
| checkbox.disabled.background           | --p-checkbox-disabled-background           | Disabled background of root           |
| checkbox.filled.background             | --p-checkbox-filled-background             | Filled background of root             |
| checkbox.border.color                  | --p-checkbox-border-color                  | Border color of root                  |
| checkbox.hover.border.color            | --p-checkbox-hover-border-color            | Hover border color of root            |
| checkbox.focus.border.color            | --p-checkbox-focus-border-color            | Focus border color of root            |
| checkbox.checked.border.color          | --p-checkbox-checked-border-color          | Checked border color of root          |
| checkbox.checked.hover.border.color    | --p-checkbox-checked-hover-border-color    | Checked hover border color of root    |
| checkbox.checked.focus.border.color    | --p-checkbox-checked-focus-border-color    | Checked focus border color of root    |
| checkbox.checked.disabled.border.color | --p-checkbox-checked-disabled-border-color | Checked disabled border color of root |
| checkbox.invalid.border.color          | --p-checkbox-invalid-border-color          | Invalid border color of root          |
| checkbox.shadow                        | --p-checkbox-shadow                        | Shadow of root                        |
| checkbox.focus.ring.width              | --p-checkbox-focus-ring-width              | Focus ring width of root              |
| checkbox.focus.ring.style              | --p-checkbox-focus-ring-style              | Focus ring style of root              |
| checkbox.focus.ring.color              | --p-checkbox-focus-ring-color              | Focus ring color of root              |
| checkbox.focus.ring.offset             | --p-checkbox-focus-ring-offset             | Focus ring offset of root             |
| checkbox.focus.ring.shadow             | --p-checkbox-focus-ring-shadow             | Focus ring shadow of root             |
| checkbox.transition.duration           | --p-checkbox-transition-duration           | Transition duration of root           |
| checkbox.sm.width                      | --p-checkbox-sm-width                      | Sm width of root                      |
| checkbox.sm.height                     | --p-checkbox-sm-height                     | Sm height of root                     |
| checkbox.lg.width                      | --p-checkbox-lg-width                      | Lg width of root                      |
| checkbox.lg.height                     | --p-checkbox-lg-height                     | Lg height of root                     |
| checkbox.icon.size                     | --p-checkbox-icon-size                     | Size of icon                          |
| checkbox.icon.color                    | --p-checkbox-icon-color                    | Color of icon                         |
| checkbox.icon.checked.color            | --p-checkbox-icon-checked-color            | Checked color of icon                 |
| checkbox.icon.checked.hover.color      | --p-checkbox-icon-checked-hover-color      | Checked hover color of icon           |
| checkbox.icon.disabled.color           | --p-checkbox-icon-disabled-color           | Disabled color of icon                |
| checkbox.icon.sm.size                  | --p-checkbox-icon-sm-size                  | Sm size of icon                       |
| checkbox.icon.lg.size                  | --p-checkbox-icon-lg-size                  | Lg size of icon                       |

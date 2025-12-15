# Vue SelectButton Component

SelectButton is used to choose single or multiple items from a list using buttons.

## Import

```javascript
import SelectButton from 'primevue/selectbutton';
```

## Accessibility

Screen Reader SelectButton component uses ToggleButton internally and has group role. Value to describe the component can be provided via aria-labelledby property. Keyboard Support Keyboard interaction is derived from the native browser handling of checkboxs in a group. Key Function tab Moves focus to the next the focusable element in the page tab sequence. shift + tab Moves focus to the previous the focusable element in the page tab sequence. space Toggles the checked state of a button.

```vue
<span id="label_number">Number</span>
<Slider aria-labelledby="label_number" />

<Slider aria-label="Number" />
```

## Basic

SelectButton is used with the v-model property for two-way value binding along with the options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```vue
<SelectButton v-model="value" :options="options" />
```

## Disabled

When disabled is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the optionDisabled property.

```vue
<SelectButton v-model="value" :options="options" disabled />
<SelectButton v-model="value" :options="options2" optionDisabled="constant" optionLabel="name" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center flex-wrap gap-4">
        <SelectButton v-model="value" :options="options" disabled />
        <SelectButton v-model="value" :options="options2" optionDisabled="constant" optionLabel="name" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('Off');
const value2 = ref();
const options1 = ref(['Off', 'On']);
const options2 = ref([
    { name: 'Option 1', value: 1, constant: false },
    { name: 'Option 2', value: 2, constant: true }
]);
<\/script>
```

</details>

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<SelectButton v-model="value" :options="options" fluid />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <SelectButton v-model="value" :options="options" fluid />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('One-Way');
const options = ref(['One-Way', 'Return']);
<\/script>
```

</details>

## Forms

SelectButton integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <SelectButton name="selection" :options="options" />
        <Message v-if="$form.selection?.invalid" severity="error">{{ $form.selection.error?.message }}</Message>
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
            <div class="flex flex-col gap-1">
                <SelectButton name="selection" :options="options" />
                <Message v-if="$form.selection?.invalid" severity="error">{{ $form.selection.error?.message }}</Message>
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
    selection: ''
});
const resolver = ref(zodResolver(
    z.object({
        selection: z.preprocess((val) => (val === null ? '' : val), z.string().min(1, { message: 'Selection is required' }))
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
<SelectButton v-model="value" :options="options" aria-labelledby="basic" allowEmpty :invalid="value === null" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" allowEmpty :invalid="value === null"  />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = ref(['One-Way', 'Return']);
<\/script>
```

</details>

## Multiple

SelectButton allows selecting only one item by default and setting multiple option enables choosing more than one item. In multiple case, model property should be an array.

```vue
<SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = ref([
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 }
]);
<\/script>
```

</details>

## Sizes

SelectButton provides small and large sizes as alternatives to the base.

```vue
<SelectButton v-model="value1" :options="options" size="small" />
<SelectButton v-model="value2" :options="options" />
<SelectButton v-model="value3" :options="options" size="large" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <SelectButton v-model="value1" :options="options" size="small" />
        <SelectButton v-model="value2" :options="options" />
        <SelectButton v-model="value3" :options="options" size="large" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref('Beginner');
const value3 = ref('Expert');
const options = ref(['Beginner', 'Expert']);
<\/script>
```

</details>

## Template

Label of an option is used as the display text of an item by default, for custom content support define an option template that gets the option instance as a parameter.

```vue
<SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom">
    <template #option="slotProps">
        <i :class="slotProps.option.icon"></i>
    </template>
</SelectButton>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
            </template>
        </SelectButton>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = ref([
    { icon: 'pi pi-align-left', value: 'Left' },
    { icon: 'pi pi-align-right', value: 'Right' },
    { icon: 'pi pi-align-center', value: 'Center' },
    { icon: 'pi pi-align-justify', value: 'Justify' }
]);
<\/script>
```

</details>

## Select Button

### Props

| Name           | Type                                        | Default | Description                                                                                                        |
| -------------- | ------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| modelValue     | any                                         | -       | Value of the component.                                                                                            |
| defaultValue   | any                                         | -       | The default value for the input when not controlled by `modelValue` .                                              |
| name           | string                                      | -       | The name attribute for the element, typically used in form submissions.                                            |
| options        | any[]                                       | -       | An array of selectitems to display as the available options.                                                       |
| optionLabel    | string \| Function                          | -       | Property name or getter function to use as the label of an option.                                                 |
| optionValue    | string \| Function                          | -       | Property name or getter function to use as the value of an option, defaults to the option itself when not defined. |
| optionDisabled | string \| Function                          | -       | Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.     |
| multiple       | boolean                                     | false   | When specified, allows selecting multiple values.                                                                  |
| invalid        | boolean                                     | false   | When present, it specifies that the component should have invalid state style.                                     |
| disabled       | boolean                                     | false   | When present, it specifies that the element should be disabled.                                                    |
| fluid          | boolean                                     | null    | Spans 100% width of the container when enabled.                                                                    |
| dataKey        | string                                      | -       | A property to uniquely identify an option.                                                                         |
| allowEmpty     | boolean                                     | true    | Whether selection can be cleared.                                                                                  |
| ariaLabelledby | string                                      | -       | Identifier of the underlying element.                                                                              |
| size           | HintedString<"small" \| "large">            | -       | Defines the size of the component.                                                                                 |
| formControl    | Record<string, any>                         | -       | Form control object, typically used for handling validation and form state.                                        |
| dt             | any                                         | -       | It generates scoped CSS variables using design tokens for the component.                                           |
| pt             | PassThrough<SelectButtonPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.                                                      |
| ptOptions      | any                                         | -       | Used to configure passthrough(pt) options of the component.                                                        |
| unstyled       | boolean                                     | false   | When enabled, it removes component related styles in the core.                                                     |

## Pass Through Options

| Name           | Type                              | Description                                            |
| -------------- | --------------------------------- | ------------------------------------------------------ |
| root           | SelectButtonPassThroughOptionType | Used to pass attributes to the root's DOM element.     |
| pcToggleButton | SelectButtonPassThroughOptionType | Used to pass attributes to the ToggleButton component. |
| hooks          | any                               | Used to manage all lifecycle hooks.                    |

## Theming

### CSS Classes

| Class          | Description                    |
| -------------- | ------------------------------ |
| p-selectbutton | Class name of the root element |

### Design Tokens

| Token                             | CSS Variable                          | Description                  |
| --------------------------------- | ------------------------------------- | ---------------------------- |
| selectbutton.border.radius        | --p-selectbutton-border-radius        | Border radius of root        |
| selectbutton.invalid.border.color | --p-selectbutton-invalid-border-color | Invalid border color of root |

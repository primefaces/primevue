# Vue Mask Component

InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.

## Import

```javascript
import InputMask from 'primevue/inputmask';
```

## Accessibility

Screen Reader InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby , aria-label props. Keyboard Support Key Function tab Moves focus to the input.

```vue
<label for="date">Date</label>
<InputMask id="date" />

<span id="phone">Phone</span>
<InputMask aria-labelledby="phone" />

<InputMask aria-label="Age" />
```

## Basic

InputMask is used with the v-model property for two-way value binding.

```vue
<InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<InputMask mask="99-999999" placeholder="Disabled" disabled />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputMask mask="99-999999" placeholder="Disabled" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
```

</details>

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<InputMask id="basic" v-model="value" variant="filled" mask="99-999999" placeholder="99-999999" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputMask id="basic" v-model="value" variant="filled" mask="99-999999" placeholder="99-999999" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Float Label

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```vue
<FloatLabel>
    <InputMask id="over_label" v-model="value1" mask="999-99-9999" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <InputMask id="in_label" v-model="value2" mask="999-99-9999" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputMask id="on_label" v-model="value3" mask="999-99-9999" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <InputMask id="over_label" v-model="value1" mask="999-99-9999" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputMask id="in_label" v-model="value2" mask="999-99-9999" variant="filled" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputMask id="on_label" v-model="value3" mask="999-99-9999" />
            <label for="on_label">On Label</label>
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

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<InputMask v-model="value" fluid mask="99-999999" placeholder="99-999999" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <InputMask v-model="value" fluid mask="99-999999" placeholder="99-999999" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Forms

InputMask integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <InputMask name="serialNumber" mask="99-999999" placeholder="99-999999" fluid />
        <Message v-if="$form.serialNumber?.invalid" severity="error" size="small" variant="simple">{{ $form.serialNumber.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-1">
                <InputMask name="serialNumber" mask="99-999999" placeholder="99-999999" fluid />
                <Message v-if="$form.serialNumber?.invalid" severity="error" size="small" variant="simple">{{ $form.serialNumber.error?.message }}</Message>
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
    serialNumber: ''
});

const resolver = ref(zodResolver(
    z.object({
        serialNumber: z.string().min(1, { message: 'Serial number is required.' })
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

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <InputMask id="ssn" v-model="value" mask="999-99-9999" variant="filled" />
    <label for="ssn">SSN</label>
</IftaLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputMask id="ssn" v-model="value" mask="999-99-9999" variant="filled" />
            <label for="ssn">SSN</label>
        </IftaLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<InputMask v-model="value1" mask="99-999999" placeholder="Serial Key" :invalid="!value1" />
<InputMask v-model="value2" mask="99-999999" placeholder="Serial Key" :invalid="!value2" variant="filled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <InputMask v-model="value1" mask="99-999999" placeholder="Serial Key" :invalid="!value1" />
        <InputMask v-model="value2" mask="99-999999" placeholder="Serial Key" :invalid="!value2" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
<\/script>
```

</details>

## Mask

Mask format can be a combination of the following definitions; a for alphabetic characters, 9 for numeric characters and \* for alphanumberic characters. In addition, formatting characters like ( , ) , - are also accepted.

```vue
<div class="flex-auto">
    <label for="ssn" class="font-bold block mb-2">SSN</label>
    <InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="999-99-9999" fluid />
</div>

<div class="flex-auto">
    <label for="phone" class="font-bold block mb-2">Phone</label>
    <InputMask id="phone" v-model="value2" mask="(999) 999-9999" placeholder="(999) 999-9999" fluid />
</div>

<div class="flex-auto">
    <label for="serial" class="font-bold block mb-2">Serial</label>
    <InputMask id="serial" v-model="value3" mask="a*-999-a999" placeholder="a*-999-a999" fluid />
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="ssn" class="font-bold block mb-2">SSN</label>
            <InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="999-99-9999" fluid />
        </div>

        <div class="flex-auto">
            <label for="phone" class="font-bold block mb-2">Phone</label>
            <InputMask id="phone" v-model="value2" mask="(999) 999-9999" placeholder="(999) 999-9999" fluid />
        </div>

        <div class="flex-auto">
            <label for="serial" class="font-bold block mb-2">Serial</label>
            <InputMask id="serial" v-model="value3" mask="a*-999-a999" placeholder="a*-999-a999" fluid />
        </div>
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

## Optional

When the input does not complete the mask definition, it is cleared by default. Use autoClear property to control this behavior. In addition, ? is used to mark anything after the question mark optional.

```vue
<InputMask v-model="value" mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputMask v-model="value" mask="(999) 999-9999? x99999"  placeholder="(999) 999-9999? x99999" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
```

</details>

## Sizes

InputMask provides small and large sizes as alternatives to the base.

```vue
<InputMask v-model="value1" placeholder="Small" size="small" mask="99-999999" />
<InputMask v-model="value2" placeholder="Normal" mask="99-999999" />
<InputMask v-model="value3" placeholder="Large" size="large" mask="99-999999" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <InputMask v-model="value1" placeholder="Small" size="small" mask="99-999999" />
        <InputMask v-model="value2" placeholder="Normal" mask="99-999999" />
        <InputMask v-model="value3" placeholder="Large" size="large" mask="99-999999" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>
```

</details>

## SlotChar

Default placeholder for a mask is underscore that can be customized using slotChar property.

```vue
<InputMask id="basic" v-model="value" placeholder="99/99/9999" mask="99/99/9999" slotChar="mm/dd/yyyy" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputMask id="basic" v-model="value" placeholder="99/99/9999" mask="99/99/9999" slotChar="mm/dd/yyyy" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
```

</details>

## Input Mask

### Props

| Name         | Type                                         | Default | Description                                                                              |
| ------------ | -------------------------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| modelValue   | null \| string                               | -       | Value of the component.                                                                  |
| defaultValue | null \| string                               | -       | The default value for the input when not controlled by `modelValue` .                    |
| slotChar     | string                                       | \_      | Placeholder character in mask, default is underscore.                                    |
| mask         | string                                       | -       | Mask pattern.                                                                            |
| id           | string                                       | -       | Identifier of the element.                                                               |
| class        | string \| object                             | -       | Style class of the input field.                                                          |
| placeholder  | string                                       | -       | Placeholder text for the input.                                                          |
| autoClear    | boolean                                      | true    | Clears the incomplete value on blur.                                                     |
| unmask       | boolean                                      | false   | Defines if model sets the raw unmasked value to bound value or the formatted mask value. |
| readonly     | boolean                                      | false   | Whether the items are clickable or not.                                                  |
| invalid      | boolean                                      | false   | When present, it specifies that the component should have invalid state style.           |
| name         | string                                       | -       | Name of the input element.                                                               |
| size         | HintedString<"small" \| "large">             | -       | Defines the size of the component.                                                       |
| variant      | null \| HintedString<"outlined" \| "filled"> | null    | Specifies the input variant of the component.                                            |
| fluid        | boolean                                      | null    | Spans 100% width of the container when enabled.                                          |
| disabled     | boolean                                      | false   | When present, it specifies that the component should be disabled.                        |
| dt           | any                                          | -       | It generates scoped CSS variables using design tokens for the component.                 |
| pt           | PassThrough<InputMaskPassThroughOptions>     | -       | Used to pass attributes to DOM elements inside the component.                            |
| ptOptions    | any                                          | -       | Used to configure passthrough(pt) options of the component.                              |
| unstyled     | boolean                                      | false   | When enabled, it removes component related styles in the core.                           |

### Emits

| Name     | Parameters | Description |
| -------- | ---------- | ----------- |
| keypress | Function   |             |
| paste    | Function   |             |
| complete | Function   |             |

## Pass Through Options

| Name        | Type                           | Description                                         |
| ----------- | ------------------------------ | --------------------------------------------------- |
| root        | InputMaskPassThroughOptionType | Used to pass attributes to the InputText component. |
| pcInputText | any                            | Used to pass attributes to the InputText component. |
| hooks       | any                            | Used to manage all lifecycle hooks.                 |

## Theming

### CSS Classes

| Class       | Description                    |
| ----------- | ------------------------------ |
| p-inputmask | Class name of the root element |

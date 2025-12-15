# Vue Otp Input Component

Input Otp is used to enter one time passwords.

## Import

```javascript
import InputOtp from 'primevue/inputotp';
```

## Accessibility

Screen Reader Input OTP uses a set of InputText components, refer to the InputText component for more information about the screen reader support. Keyboard Support Key Function tab Moves focus to the input otp. right arrow Moves focus to the next input element. left arrow Moves focus to the previous input element. backspace Deletes the input and moves focus to the previous input element.

## Basic

InputOtp is used with the v-model property for two-way value binding. The number of characters is defined with the length option, which is set to 4 by default.

```vue
<InputOtp v-model="value" />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<InputOtp v-model="value" variant="filled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Forms

InputOtp integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <InputOtp name="passcode" />
        <Message v-if="$form.passcode?.invalid" severity="error" size="small" variant="simple">{{ $form.passcode.error?.message }}</Message>
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
                <InputOtp name="passcode" />
                <Message v-if="$form.passcode?.invalid" severity="error" size="small" variant="simple">{{ $form.passcode.error?.message }}</Message>
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
    passcode: ''
});
const resolver = ref(zodResolver(
    z.object({
        passcode: z.string().min(1, { message: 'Passcode is required.' })
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

## Integer Only

When integerOnly is present, only integers can be accepted as input.

```vue
<InputOtp v-model="value" integerOnly />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value" integerOnly />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Mask

Enable the mask option to hide the values in the input fields.

```vue
<InputOtp v-model="value" mask />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value" mask />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
```

</details>

## Sample

A sample UI implementation with templating and additional elements.

```vue
<div class="flex flex-col items-center">
    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
    <p class="text-surface-500 dark:text-surface-400 block mb-8">Please enter the code sent to your phone.</p>
    <InputOtp v-model="value" :length="6" style="gap: 0">
        <template #default="{ attrs, events, index }">
            <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
            <div v-if="index === 3" class="px-4">
                <i class="pi pi-minus" />
            </div>
        </template>
    </InputOtp>
    <div class="flex justify-between mt-8 self-stretch">
        <Button label="Resend Code" link class="p-0"></Button>
        <Button label="Submit Code"></Button>
    </div>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col items-center">
            <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">Please enter the code sent to your phone.</p>
            <InputOtp v-model="value" :length="6" style="gap: 0">
                <template #default="{ attrs, events, index }">
                    <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                    <div v-if="index === 3" class="px-4">
                        <i class="pi pi-minus" />
                    </div>
                </template>
            </InputOtp>
            <div class="flex justify-between mt-8 self-stretch">
                <Button label="Resend Code" link class="p-0"></Button>
                <Button label="Submit Code"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>

<style scoped>
.custom-otp-input {
    width: 48px;
    height: 48px;
    font-size: 24px;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    border-radius: 0;
    border: 1px solid var(--p-inputtext-border-color);
    background: transparent;
    outline-offset: -2px;
    outline-color: transparent;
    border-right: 0 none;
    transition: outline-color 0.3s;
    color: var(--p-inputtext-color);
}

.custom-otp-input:focus {
    outline: 2px solid var(--p-focus-ring-color);
}

.custom-otp-input:first-child,
.custom-otp-input:nth-child(5) {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}

.custom-otp-input:nth-child(3),
.custom-otp-input:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-right-width: 1px;
    border-right-style: solid;
    border-color: var(--p-inputtext-border-color);
}
<\/style>
```

</details>

## Sizes

InputOtp provides small and large sizes as alternatives to the base.

```vue
<InputOtp v-model="value1" size="small" />
<InputOtp v-model="value2" />
<InputOtp v-model="value3" size="large" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <InputOtp v-model="value1" size="small" />
        <InputOtp v-model="value2" />
        <InputOtp v-model="value3" size="large" />
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

## Template

Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design.

```vue
<InputOtp v-model="value">
    <template #default="{ attrs, events }">
        <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
    </template>
</InputOtp>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <InputOtp v-model="value">
            <template #default="{ attrs, events }">
                <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
            </template>
        </InputOtp>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>

<style scoped>
.custom-otp-input {
    width: 40px;
    font-size: 36px;
    border: 0 none;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    background: transparent;
    border-bottom: 2px solid var(--p-inputtext-border-color);
}

.custom-otp-input:focus {
    outline: 0 none;
    border-bottom-color: var(--p-primary-color);
}
<\/style>
```

</details>

## Input Otp

### Props

| Name         | Type                                         | Default | Description                                                                    |
| ------------ | -------------------------------------------- | ------- | ------------------------------------------------------------------------------ |
| modelValue   | string \| boolean                            | null    | Specifies whether a inputotp should be checked or not.                         |
| defaultValue | string \| boolean                            | -       | The default value for the input when not controlled by `modelValue` .          |
| name         | string                                       | -       | The name attribute for the element, typically used in form submissions.        |
| size         | HintedString<"small" \| "large">             | -       | Defines the size of the component.                                             |
| invalid      | boolean                                      | false   | When present, it specifies that the component should have invalid state style. |
| disabled     | boolean                                      | false   | When present, it specifies that the component should be disabled.              |
| readonly     | boolean                                      | false   | When present, it specifies that an input field is read-only.                   |
| variant      | null \| HintedString<"outlined" \| "filled"> | null    | Specifies the input variant of the component.                                  |
| tabindex     | number                                       | -       | Index of the element in tabbing order.                                         |
| length       | number                                       | 4       | Number of characters to initiate.                                              |
| mask         | boolean                                      | false   | Mask pattern.                                                                  |
| integerOnly  | boolean                                      | false   | When present, it specifies that an input field is integer-only.                |
| formControl  | Record<string, any>                          | -       | Form control object, typically used for handling validation and form state.    |
| dt           | any                                          | -       | It generates scoped CSS variables using design tokens for the component.       |
| pt           | PassThrough<InputOtpPassThroughOptions>      | -       | Used to pass attributes to DOM elements inside the component.                  |
| ptOptions    | any                                          | -       | Used to configure passthrough(pt) options of the component.                    |
| unstyled     | boolean                                      | false   | When enabled, it removes component related styles in the core.                 |

## Pass Through Options

| Name        | Type                          | Description                                         |
| ----------- | ----------------------------- | --------------------------------------------------- |
| root        | InputOtpPassThroughOptionType | Used to pass attributes to the root's DOM element.  |
| pcInputText | any                           | Used to pass attributes to the InputText component. |
| hooks       | any                           | Used to manage all lifecycle hooks.                 |

## Theming

### CSS Classes

| Class            | Description                     |
| ---------------- | ------------------------------- |
| p-inputotp       | Class name of the root element  |
| p-inputotp-input | Class name of the input element |

### Design Tokens

| Token                   | CSS Variable                | Description                     |
| ----------------------- | --------------------------- | ------------------------------- |
| inputotp.gap            | --p-inputotp-gap            | Gap of root                     |
| inputotp.input.width    | --p-inputotp-input-width    | Width of input                  |
| inputotp.input.sm.width | --p-inputotp-input-sm-width | Width of input in small screens |
| inputotp.input.lg.width | --p-inputotp-input-lg-width | Width of input in large screens |

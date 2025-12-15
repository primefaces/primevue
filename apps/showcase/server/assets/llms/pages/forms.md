# Forms

The PrimeVue Forms library provides comprehensive form state management with built-in validation support.

## Accessibility

Screen Reader Form does not require any roles and attributes. Keyboard Support Component does not include any interactive elements.

## Basic

All PrimeVue form components are designed for seamless integration with the forms library. Instead of using the standard v-model , the name property is used to link a state object that tracks values, errors, and actions. The form component provides four key properties for state management.

```vue
<Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <InputText name="username" type="text" placeholder="Username" fluid />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast />

        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-1">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const initialValues = reactive({
    username: ''
});

const resolver = ({ values }) => {
    const errors = {};

    if (!values.username) {
        errors.username = [{ message: 'Username is required.' }];
    }

    return {
        values, // (Optional) Used to pass current form values to submit event.
        errors
    };
};

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({
            severity: 'success',
            summary: 'Form is submitted.',
            life: 3000
        });
    }
};
<\/script>
```

</details>

## Download

Forms add-on is available for download on npm registry.

```vue
# Using npm npm install @primevue/forms # Using yarn yarn add @primevue/forms # Using pnpm pnpm add @primevue/forms
```

## Dynamic

This section demonstrates how to create a dynamic form using a custom Form component. It showcases an example where form fields are generated dynamically based on the provided configuration, allowing for flexible form structures. The components named Dynamic\* shown in this example are not built-in, and only available for sampling purposes. First form uses a declarative approach whereas second form goes for a programmatic approach. We suggest running this sample in StackBlitz to view the comprehensive implementation.

```vue
<Fieldset legend="Form 1" pt:content:class="flex justify-center">
    <DynamicForm @submit="onFormSubmit('Form 1', $event)">
        <DynamicFormField groupId="userId_1" name="username">
            <DynamicFormLabel>Username</DynamicFormLabel>
            <DynamicFormControl defaultValue="PrimeVue" fluid :schema="userNameSchema" />
            <DynamicFormMessage />
        </DynamicFormField>
        <DynamicFormField groupId="passId_1" name="password">
            <DynamicFormLabel>Password</DynamicFormLabel>
            <DynamicFormControl as="Password" :feedback="false" toggleMask fluid :schema="passwordSchema" />
            <DynamicFormMessage errorType="minimum" />
            <DynamicFormMessage errorType="maximum" />
            <DynamicFormMessage errorType="uppercase" severity="warn" />
            <DynamicFormMessage errorType="lowercase" severity="warn" />
            <DynamicFormMessage errorType="number" severity="secondary" />
        </DynamicFormField>
        <DynamicFormSubmit />
    </DynamicForm>
</Fieldset>

<Fieldset legend="Form 2" pt:content:class="flex justify-center">
    <DynamicForm :fields @submit="onFormSubmit('Form 2', $event)" />
</Fieldset>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card grid md:grid-cols-2 gap-4 w-full">
        <Toast />

        <Fieldset legend="Form 1" pt:content:class="flex justify-center">
            <DynamicForm @submit="onFormSubmit('Form 1', $event)">
                <DynamicFormField groupId="userId_1" name="username">
                    <DynamicFormLabel>Username</DynamicFormLabel>
                    <DynamicFormControl defaultValue="PrimeVue" fluid :schema="userNameSchema" />
                    <DynamicFormMessage />
                </DynamicFormField>
                <DynamicFormField groupId="passId_1" name="password">
                    <DynamicFormLabel>Password</DynamicFormLabel>
                    <DynamicFormControl as="Password" :feedback="false" toggleMask fluid :schema="passwordSchema" />
                    <DynamicFormMessage errorType="minimum" />
                    <DynamicFormMessage errorType="maximum" />
                    <DynamicFormMessage errorType="uppercase" severity="warn" />
                    <DynamicFormMessage errorType="lowercase" severity="warn" />
                    <DynamicFormMessage errorType="number" severity="secondary" />
                </DynamicFormField>
                <DynamicFormSubmit />
            </DynamicForm>
        </Fieldset>

        <Fieldset legend="Form 2" pt:content:class="flex justify-center">
            <DynamicForm :fields @submit="onFormSubmit('Form 2', $event)" />
        </Fieldset>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';
import DynamicForm from './dynamic/DynamicForm.vue';
import DynamicFormControl from './dynamic/DynamicFormControl.vue';
import DynamicFormField from './dynamic/DynamicFormField.vue';
import DynamicFormLabel from './dynamic/DynamicFormLabel.vue';
import DynamicFormMessage from './dynamic/DynamicFormMessage.vue';
import DynamicFormSubmit from './dynamic/DynamicFormSubmit.vue';

const toast = useToast();

const userNameSchema = z.string().min(1, { message: 'Username is required.' });

const passwordSchema = z
    .string()
    .min(3, { message: 'Password must be at least 3 characters long.' })
    .max(8, { message: 'Password must not exceed 8 characters.' })
    .refine((value) => /[a-z]/.test(value), {
        errorType: 'lowercase',
        message: 'Password must contain at least one lowercase letter.'
    })
    .refine((value) => /[A-Z]/.test(value), {
        errorType: 'uppercase',
        message: 'Password must contain at least one uppercase letter.'
    })
    .refine((value) => /\d/.test(value), {
        errorType: 'number',
        message: 'Password must contain at least one number.'
    });

const fields = reactive({
    username: {
        groupId: 'userId_2',
        label: 'Username',
        defaultValue: 'PrimeVue',
        fluid: true,
        schema: userNameSchema
    },
    password: {
        groupId: 'passId_2',
        label: 'Password',
        as: 'Password',
        feedback: false,
        toggleMask: true,
        fluid: true,
        messages: [
            { errorType: 'minimum' },
            { errorType: 'maximum' },
            { errorType: 'uppercase', severity: 'warn' },
            { errorType: 'lowercase', severity: 'warn' },
            { errorType: 'number', severity: 'secondary' }
        ],
        schema: passwordSchema
    }
});

const onFormSubmit = (text, { valid }) => {
    if (valid) {
        toast.add({
            severity: 'success',
            summary: \`\${text} is submitted.\`,
            life: 3000
        });
    }
};
<\/script>
```

</details>

## Import

The form component is responsible for managing the form state and must encapsulate the form fields.

```vue
import { Form } from '@primevue/forms';
```

## Resolvers

Validations are implemented with the resolver property. A custom resolver is responsible for handling the validation and returning an errors object with key-value pairs where key is the form field name and value is an array of error object data. For productivity, we recommend using a schema validation library instead of building your own custom validation logic. The forms library provide built-in resolvers for popular options including Zod , Yup , Joi , Valibot , and Superstruct that can be imported from @primevue/forms/resolvers path.

```vue
<Form v-slot="$form" :initialValues :resolver="resolver" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <InputText name="username" type="text" placeholder="Username" fluid />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-5">
        <Toast />

        <Fieldset legend="Schema">
            <RadioButtonGroup v-model="selectedSchema" name="schema" class="flex flex-wrap gap-4" @update:modelValue="changeResolver">
                <div class="flex items-center gap-2">
                    <RadioButton inputId="zod" value="Zod" />
                    <label for="zod">Zod</label>
                </div>
                <div class="flex items-center gap-2">
                    <RadioButton inputId="yup" value="Yup" />
                    <label for="yup">Yup</label>
                </div>
                <div class="flex items-center gap-2">
                    <RadioButton inputId="valibot" value="Valibot" />
                    <label for="valibot">Valibot</label>
                </div>
                <div class="flex items-center gap-2">
                    <RadioButton inputId="superStruct" value="SuperStruct" />
                    <label for="superStruct">SuperStruct</label>
                </div>
                <div class="flex items-center gap-2">
                    <RadioButton inputId="custom" value="Custom" />
                    <label for="custom">Custom</label>
                </div>
            </RadioButtonGroup>
        </Fieldset>

        <Form v-slot="$form" :initialValues :resolver="resolver" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-1">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { superStructResolver } from '@primevue/forms/resolvers/superstruct';
import { valibotResolver } from '@primevue/forms/resolvers/valibot';
import { yupResolver } from '@primevue/forms/resolvers/yup';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import * as s from 'superstruct';
import * as v from 'valibot';
import * as yup from 'yup';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const initialValues = ref({
    username: ''
});
const selectedSchema = ref('Zod');

const resolver = ref(zodResolver(
    z.object({
        username: z.string().min(1, { message: 'Username is required via Zod.' })
    })
));

watch(selectedSchema, (newSchema) => {
    changeResolver(newSchema);
});

const changeResolver = (schema) => {
    if (schema === 'Zod') {
        resolver.value = zodResolver(
            z.object({
                username: z.string().min(1, { message: 'Username is required via Zod.' })
            })
        );
    } else if (schema === 'Yup') {
        resolver.value = yupResolver(
            yup.object().shape({
                username: yup.string().required('Username is required via Yup.')
            })
        );
    } else if (schema === 'Valibot') {
        resolver.value = valibotResolver(
            v.object({
                username: v.pipe(v.string(), v.minLength(1, 'Username is required via Valibot.'))
            })
        );
    } else if (schema === 'SuperStruct') {
        resolver.value = superStructResolver(
            s.object({
                username: s.nonempty(s.string())
            })
        );
    } else if (schema === 'Custom') {
        resolver.value = ({ values }) => {
            const errors = {};

            if (!values.username) {
                errors.username = [{ message: 'Username is required.' }];
            }

            return {
                values,
                errors
            };
        };
    }
}

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
}
<\/script>
```

</details>

## States

The $form object tracks the state management of the fields. Each field is linked with the name property. View the FormFieldState type in the API documentation for details about each property.

```vue
<Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="grid lg:grid-cols-2 gap-4 w-full">
    <div class="flex flex-col justify-center items-center gap-4">
        <InputText name="username" type="text" placeholder="Username" class="w-full sm:w-56" />
        <Button type="submit" severity="secondary" label="Submit" class="w-full sm:w-56" />
    </div>
    <Fieldset legend="Form States" class="h-80 overflow-auto">
        <pre class="whitespace-pre-wrap">{{ $form }}</pre>
    </Fieldset>
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast />

        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="grid lg:grid-cols-2 gap-4 w-full">
            <div class="flex flex-col justify-center items-center gap-4">
                <InputText name="username" type="text" placeholder="Username" class="w-full sm:w-56" />
                <Button type="submit" severity="secondary" label="Submit" class="w-full sm:w-56" />
            </div>
            <Fieldset legend="Form States" class="h-80 overflow-auto">
                <pre class="whitespace-pre-wrap">{{ $form }}</pre>
            </Fieldset>
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const initialValues = ref({
    username: ''
});

const resolver = ({ values }) => {
    const errors = { username: [] };

    if (!values.username) {
        errors.username.push({ type: 'required', message: 'Username is required.' });
    }

    if (values.username?.length < 3) {
        errors.username.push({ type: 'minimum', message: 'Username must be at least 3 characters long.' });
    }

    return {
        values,
        errors
    };
};

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
}
<\/script>
```

</details>

## Submit

The submit callback returns an object that encapsulates the form's validity, any existing errors, and its current state. This enables access to the form values, validation status, and any errors present at the time of submission. View the FormSubmitEvent in the API documentation for more information about the available event data.

```vue
<Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-60">
    <div class="flex flex-col gap-1">
        <InputText name="username" type="text" placeholder="Username" fluid />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error.message }}</Message>
    </div>
    <div class="flex flex-col gap-1">
        <Password name="password" placeholder="Password" :feedback="false" toggleMask fluid />
        <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
            <ul class="my-0 px-4 flex flex-col gap-1">
                <li v-for="(error, index) of $form.password.errors" :key="index">{{ error.message }}</li>
            </ul>
        </Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast />

        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-60">
            <div class="flex flex-col gap-1">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error.message }}</Message>
            </div>
            <div class="flex flex-col gap-1">
                <Password name="password" placeholder="Password" :feedback="false" toggleMask fluid />
                <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
                    <ul class="my-0 px-4 flex flex-col gap-1">
                        <li v-for="(error, index) of $form.password.errors" :key="index">{{ error.message }}</li>
                    </ul>
                </Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const initialValues = ref({
    username: '',
    password: ''
});

const resolver = zodResolver(
    z.object({
        username: z.string().min(1, { message: 'Username is required.' }),
        password: z
            .string()
            .min(3, { message: 'Minimum 3 characters.' })
            .max(8, { message: 'Maximum 8 characters.' })
            .refine((value) => /[a-z]/.test(value), {
                message: 'Must have a lowercase letter.'
            })
            .refine((value) => /[A-Z]/.test(value), {
                message: 'Must have an uppercase letter.'
            })
            .refine((value) => /\d/.test(value), {
                message: 'Must have a number.'
            })
    })
);

const onFormSubmit = (e) => {
    // e.originalEvent: Represents the native form submit event.
    // e.valid: A boolean that indicates whether the form is valid or not.
    // e.states: Contains the current state of each form field, including validity status.
    // e.errors: An object that holds any validation errors for the invalid fields in the form.
    // e.values: An object containing the current values of all form fields.
    // e.reset: A function that resets the form to its initial state.

    if (e.valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
```

</details>

## ValidateOn

Form component supports flexible validation triggers, allowing validation on value updates, blur events, form mount, or submission. These behaviors can be configured at form level or on specific fields via the validateOnValueUpdate , validateOnBlur , validateOnMount , and validateOnSubmit options of the formControl property. In this example, form disables validateOnValueUpdate and enables validateOnBlur at form level, and validates firstName on mount. The firstName field, overrides the form level setting locally.

```vue
<Form v-slot="$form" :initialValues :resolver :validateOnValueUpdate="false" :validateOnBlur="true" :validateOnMount="['firstName']" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <InputText name="username" type="text" placeholder="Username" fluid />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error.message }}</Message>
    </div>
    <div class="flex flex-col gap-1">
        <InputText name="firstName" type="text" placeholder="First Name" fluid :formControl="{ validateOnValueUpdate: true }" />
        <Message v-if="$form.firstName?.invalid" severity="error" size="small" variant="simple">{{ $form.firstName.error.message }}</Message>
    </div>
    <div class="flex flex-col gap-1">
        <InputText name="lastName" type="text" placeholder="Last Name" fluid />
        <Message v-if="$form.lastName?.invalid" severity="error" size="small" variant="simple">{{ $form.lastName.error.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast />

        <Form v-slot="$form" :initialValues :resolver :validateOnValueUpdate="false" :validateOnBlur="true" :validateOnMount="['firstName']" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-1">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error.message }}</Message>
            </div>
            <div class="flex flex-col gap-1">
                <InputText name="firstName" type="text" placeholder="First Name" fluid :formControl="{ validateOnValueUpdate: true }" />
                <Message v-if="$form.firstName?.invalid" severity="error" size="small" variant="simple">{{ $form.firstName.error.message }}</Message>
            </div>
            <div class="flex flex-col gap-1">
                <InputText name="lastName" type="text" placeholder="Last Name" fluid />
                <Message v-if="$form.lastName?.invalid" severity="error" size="small" variant="simple">{{ $form.lastName.error.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const initialValues = ref({
    username: '',
    firstName: '',
    lastName: ''
});

const resolver = ({ values }) => {
    const errors = {};

    if (!values.username) {
        errors.username = [{ message: 'Username is required.' }];
    }

    if (!values.name) {
        errors.firstName = [{ message: 'First name is required.' }];
    }

    if (!values.surname) {
        errors.lastName = [{ message: 'Last name is required.' }];
    }

    return {
        errors
    };
};

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
}
<\/script>
```

</details>

## Built In

Although PrimeVue components have built-in support for the Form API, you may still prefer to utilize the components as wrapped with the FormField. This is a matter of preference, for example in case you are also using FormField for other 3rd party components, your own custom components, and native elements, for consistency it may be an option.

```vue
<Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <FormField v-slot="$field" name="username" initialValue="" class="flex flex-col gap-1">
        <InputText type="text" placeholder="Username" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <FormField v-slot="$field" name="username" initialValue="" class="flex flex-col gap-1">
                <InputText type="text" placeholder="Username" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const resolver = zodResolver(
  z.object({
    username: z.string().min(1, { message: 'Username is required.' })
  })
);

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
  }
};
<\/script>
```

</details>

## FormField

The FormField is a helper component that provides validation and tracking for input elements, offering a more flexible structure to bind PrimeVue, non-PrimeVue components or native HTML elements to Form API. Additionally, with props like validateOn\* , initialValue , resolver , and name , behaviors can be controlled directly from this component.

```vue
import { FormField } from '@primevue/forms';
```

## Non Prime Vue

Form API is not strictly tied to PrimeVue components, providing a flexible way to manage validation and state for any native HTML elements, your own custom components or third-party libraries.

```vue
<Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <FormField v-slot="$field" name="username" initialValue="" class="flex flex-col gap-1">
        <input type="text" placeholder="Username" :class="[{ error: $field?.invalid }]" v-bind="$field.props" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" name="password" initialValue="PrimeVue" class="flex flex-col gap-1">
        <input v-model="$field.value" type="password" placeholder="Password" :class="[{ error: $field?.invalid }]" @input="$field.onInput" @blur="$field.onBlur" @change="$field.onChange" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <FormField v-slot="$field" name="username" initialValue="" class="flex flex-col gap-1">
                <input type="text" placeholder="Username" :class="[{ error: $field?.invalid }]" v-bind="$field.props" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <FormField v-slot="$field" name="password" initialValue="PrimeVue" class="flex flex-col gap-1">
                <input v-model="$field.value" type="password" placeholder="Password" :class="[{ error: $field?.invalid }]" @input="$field.onInput" @blur="$field.onBlur" @change="$field.onChange" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const resolver = zodResolver(
    z.object({
        username: z.string().min(1, { message: 'Username is required.' }),
        password: z.string().min(1, { message: 'Password is required.' })
    })
);

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
  }
};
<\/script>
<style scoped>
input {
    width: 100%;
    color: var(--p-inputtext-color);
    background: var(--p-inputtext-background);
    border: 1px solid var(--p-inputtext-border-color);
}

input.error {
    border-color: var(--p-inputtext-invalid-border-color);
}
<\/style>
```

</details>

## Resolver

Each FormField can have its own dedicated resolver, allowing you to define custom validation logic for individual fields. This flexibility enables tailored validation rules, ensuring that each form field meets specific criteria.

```vue
<Form :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-80">
    <FormField v-slot="$field" name="username" initialValue="" :resolver="zodUserNameResolver" class="flex flex-col gap-1">
        <InputText type="text" placeholder="Username" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" name="firstname" initialValue="" :resolver="yupFirstNameResolver" class="flex flex-col gap-1">
        <InputText type="text" placeholder="First Name" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" name="lastname" initialValue="" :resolver="valibotLastNameResolver" class="flex flex-col gap-1">
        <InputText type="text" placeholder="Last Name" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" name="password" initialValue="" :resolver="customPasswordResolver" class="flex flex-col gap-1">
        <Password type="text" placeholder="Password" :feedback="false" toggleMask fluid />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" name="details" class="flex flex-col gap-1">
        <Textarea placeholder="Details" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-80">
            <FormField v-slot="$field" name="username" initialValue="" :resolver="zodUserNameResolver" class="flex flex-col gap-1">
                <InputText type="text" placeholder="Username" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <FormField v-slot="$field" name="firstname" initialValue="" :resolver="yupFirstNameResolver" class="flex flex-col gap-1">
                <InputText type="text" placeholder="First Name" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <FormField v-slot="$field" name="lastname" initialValue="" :resolver="valibotLastNameResolver" class="flex flex-col gap-1">
                <InputText type="text" placeholder="Last Name" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <FormField v-slot="$field" name="password" initialValue="" :resolver="customPasswordResolver" class="flex flex-col gap-1">
                <Password type="text" placeholder="Password" :feedback="false" toggleMask fluid />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <FormField v-slot="$field" name="details" class="flex flex-col gap-1">
                <Textarea placeholder="Details" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { valibotResolver } from '@primevue/forms/resolvers/valibot';
import { yupResolver } from '@primevue/forms/resolvers/yup';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import * as v from 'valibot';
import * as yup from 'yup';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const initialValues = reactive({
    details: ''
});

const resolver = zodResolver(
    z.object({
        details: z.string().min(1, { message: 'Details is required via Form Resolver.' })
    })
);

const zodUserNameResolver = zodResolver(z.string().min(1, { message: 'Username is required via Zod.' }));
const yupFirstNameResolver = yupResolver(yup.string().required('First name is required via Yup.'));
const valibotLastNameResolver = valibotResolver(v.pipe(v.string(), v.minLength(1, 'Last name is required via Valibot.')));

const customPasswordResolver = ({ value }) => {
    const errors = [];

    if (!value) {
        errors.push({ message: 'Password is required via Custom.' });
    }

    return {
        errors
    };
};

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
  }
};
<\/script>
```

</details>

## Template

It renders as a HTML div element, but this behavior can be modified using the as and asChild props to render different HTML elements or to pass a custom component, allowing for greater flexibility in form structure.

```vue
<Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <FormField v-slot="$field" as="section" name="username" initialValue="" class="flex flex-col gap-2">
        <InputText type="text" placeholder="Username" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" asChild name="password" initialValue="">
        <section class="flex flex-col gap-2">
            <Password type="text" placeholder="Password" :feedback="false" toggleMask fluid />
            <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
        </section>
    </FormField>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <FormField v-slot="$field" as="section" name="username" initialValue="" class="flex flex-col gap-2">
                <InputText type="text" placeholder="Username" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <FormField v-slot="$field" asChild name="password" initialValue="">
                <section class="flex flex-col gap-2">
                    <Password type="text" placeholder="Password" :feedback="false" toggleMask fluid />
                    <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
                </section>
            </FormField>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const resolver =  zodResolver(
    z.object({
        username: z.string().min(1, { message: 'Username is required.' }),
        password: z.string().min(1, { message: 'Password is required.' })
    })
);

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
```

</details>

## Styled

Component does not apply any styling.

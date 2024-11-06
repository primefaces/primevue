<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <i>submit</i> callback returns an object that encapsulates the form's validity, any existing errors, and its current state. This enables access to the form values, validation status, and any errors present at the time of submission.
            View the <i>FormSubmitEvent</i> in the API documentation for more information about the available event data.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
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
    <DocSectionCode :code="code" :dependencies="{ zod: '3.23.8' }" />
</template>

<script>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                username: '',
                password: ''
            },
            resolver: zodResolver(
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
                            message: 'Must have a uppercase letter.'
                        })
                        .refine((value) => /\d/.test(value), {
                            message: 'Must have a number.'
                        })
                })
            ),
            code: {
                basic: `
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
`,
                options: `
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

<script>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                username: '',
                password: ''
            },
            resolver: zodResolver(
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
                            message: 'Must have a uppercase letter.'
                        })
                        .refine((value) => /\d/.test(value), {
                            message: 'Must have a number.'
                        })
                })
            )
        };
    },
    methods: {
        onFormSubmit(e) {
            // e.originalEvent: Represents the native form submit event.
            // e.valid: A boolean that indicates whether the form is valid or not.
            // e.states: Contains the current state of each form field, including validity status.
            // e.errors: An object that holds any validation errors for the invalid fields in the form.
            // e.values: An object containing the current values of all form fields.
            // e.reset: A function that resets the form to its initial state.

            if (e.valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
<\/script>
`,
                composition: `
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
`
            }
        };
    },
    methods: {
        onFormSubmit(e) {
            // e.originalEvent: Represents the native form submit event.
            // e.valid: A boolean that indicates whether the form is valid or not.
            // e.states: Contains the current state of each form field, including validity status.
            // e.errors: An object that holds any validation errors for the invalid fields in the form.
            // e.values: An object containing the current values of all form fields.
            // e.reset: A function that resets the form to its initial state.

            if (e.valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
</script>

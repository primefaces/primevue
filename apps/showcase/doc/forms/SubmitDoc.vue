<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>submit</i> callback provides an object containing the form's validity, all errors, and current states. This offers access to the form values as well as validation status and any existing errors during submission.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-2">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.errors[0]?.message }}</Message>
            </div>
            <div class="flex flex-col gap-2">
                <Password name="password" placeholder="Password" :feedback="false" fluid />
                <Message v-if="$form.password?.invalid" severity="error">
                    <ul class="mx-1 px-3">
                        <li v-for="(error, index) of $form.password.errors" :key="index" class="py-1">{{ error.message }}</li>
                    </ul>
                </Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
import { zodResolver } from '@primevue/form/resolvers';
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
                        .min(3, { message: 'Password must be at least 3 characters long.' })
                        .max(8, { message: 'Password must not exceed 8 characters.' })
                        .refine((value) => /[a-z]/.test(value), {
                            message: 'Password must contain at least one lowercase letter.'
                        })
                        .refine((value) => /[A-Z]/.test(value), {
                            message: 'Password must contain at least one uppercase letter.'
                        })
                        .refine((value) => /\d/.test(value), {
                            message: 'Password must contain at least one number.'
                        })
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-2">
        <InputText name="username" type="text" placeholder="Username" fluid />
        <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.errors[0]?.message }}</Message>
    </div>
    <div class="flex flex-col gap-2">
        <Password name="password" placeholder="Password" :feedback="false" fluid />
        <Message v-if="$form.password?.invalid" severity="error">
            <ul class="mx-1 px-3">
                <li v-for="(error, index) of $form.password.errors" :key="index" class="py-1">{{ error.message }}</li>
            </ul>
        </Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
        <div class="flex flex-col gap-2">
            <InputText name="username" type="text" placeholder="Username" fluid />
            <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.errors[0]?.message }}</Message>
        </div>
        <div class="flex flex-col gap-2">
            <Password name="password" placeholder="Password" :feedback="false" fluid />
            <Message v-if="$form.password?.invalid" severity="error">
                <ul class="mx-1 px-3">
                    <li v-for="(error, index) of $form.password.errors" :key="index" class="py-1">{{ error.message }}</li>
                </ul>
            </Message>
        </div>
        <Button type="submit" severity="secondary" label="Submit" />
    </Form>
</template>

<script>
import { zodResolver } from '@primevue/form/resolvers';
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
                        .min(3, { message: 'Password must be at least 3 characters long.' })
                        .max(8, { message: 'Password must not exceed 8 characters.' })
                        .refine((value) => /[a-z]/.test(value), {
                            message: 'Password must contain at least one lowercase letter.'
                        })
                        .refine((value) => /[A-Z]/.test(value), {
                            message: 'Password must contain at least one uppercase letter.'
                        })
                        .refine((value) => /\d/.test(value), {
                            message: 'Password must contain at least one number.'
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
    <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
    </Card>
</template>

<script setup>
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
            if (e.valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
</script>

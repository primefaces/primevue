<template>
    <DocSectionText v-bind="$attrs">
        <p>InputText is used with the <i>v-model</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-64">
            <div class="flex flex-col gap-1">
                <Password name="password" placeholder="Password" :feedback="false" fluid />
                <template v-if="$form.password?.invalid">
                    <Message v-for="(error, index) of $form.password.errors" :key="index" severity="error" size="small" variant="simple">{{ error.message }}</Message>
                </template>
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
                password: ''
            },
            resolver: zodResolver(
                z.object({
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
            ),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-64">
    <div class="flex flex-col gap-1">
        <Password name="password" placeholder="Password" :feedback="false" fluid />
        <template v-if="$form.password?.invalid">
            <Message v-for="(error, index) of $form.password.errors" :key="index" severity="error" size="small" variant="simple">{{ error.message }}</Message>
        </template>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-64">
            <div class="flex flex-col gap-1">
                <Password name="password" placeholder="Password" :feedback="false" fluid />
                <template v-if="$form.password?.invalid">
                    <Message v-for="(error, index) of $form.password.errors" :key="index" severity="error" size="small" variant="simple">{{ error.message }}</Message>
                </template>
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
                password: ''
            },
            resolver: zodResolver(
                z.object({
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
            )
        }
    },
    methods: {
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-64">
            <div class="flex flex-col gap-1">
                <Password name="password" placeholder="Password" :feedback="false" fluid />
                <template v-if="$form.password?.invalid">
                    <Message v-for="(error, index) of $form.password.errors" :key="index" severity="error" size="small" variant="simple">{{ error.message }}</Message>
                </template>
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
    password: ''
});
const resolver = ref(zodResolver(
    z.object({
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
));

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
        `
            }
        };
    },
    methods: {
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>InputText integrates seamlessly with the <NuxtLink to="/forms">PrimeVue Forms</NuxtLink> library.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-1">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
            </div>
            <div class="flex flex-col gap-1">
                <InputText name="email" type="text" placeholder="Email" fluid />
                <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
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
                email: ''
            },
            resolver: zodResolver(
                z.object({
                    username: z.string().min(1, { message: 'Username is required.' }),
                    email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' })
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-1">
        <InputText name="username" type="text" placeholder="Username" />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
    </div>
    <div class="flex flex-col gap-1">
        <InputText name="email" type="text" placeholder="Email" />
        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-1">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
            </div>
            <div class="flex flex-col gap-1">
                <InputText name="email" type="text" placeholder="Email" fluid />
                <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
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
                email: ''
            },
            resolver: zodResolver(
                z.object({
                    username: z.string().min(1, { message: 'Username is required.' }),
                    email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' })
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
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-1">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
            </div>
            <div class="flex flex-col gap-1">
                <InputText name="email" type="text" placeholder="Email" fluid />
                <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
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
    username: '',
    email: ''
});

const resolver = ref(zodResolver(
    z.object({
        username: z.string().min(1, { message: 'Username is required.' }),
        email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' })
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

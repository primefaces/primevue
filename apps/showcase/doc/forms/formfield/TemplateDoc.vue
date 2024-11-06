<template>
    <DocSectionText label="Template" :level="2" v-bind="$attrs">
        <p>It renders as a HTML div element, but this behavior can be modified using the <i>as</i> and <i>asChild</i> props to render different HTML elements or to pass a custom component, allowing for greater flexibility in form structure.</p>
    </DocSectionText>
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
    <DocSectionCode :code="code" :dependencies="{ zod: '3.23.8' }" />
</template>

<script>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export default {
    data() {
        return {
            resolver: zodResolver(
                z.object({
                    username: z.string().min(1, { message: 'Username is required.' }),
                    password: z.string().min(1, { message: 'Password is required.' })
                })
            ),
            code: {
                basic: `
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
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />

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

<script>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export default {
    data() {
        return {
            resolver: zodResolver(
                z.object({
                    username: z.string().min(1, { message: 'Username is required.' }),
                    password: z.string().min(1, { message: 'Password is required.' })
                })
            )
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
<\/script>
`,
                composition: `
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

<template>
    <DocSectionText label="Built-in" :level="2" v-bind="$attrs">
        <p>It can be easily integrated with PrimeVue built-in components by wrapping them inside the FormField and using its props to manage validation and state.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <FormField v-slot="$field" name="username" initialValue="" class="flex flex-col gap-2">
                <InputText type="text" placeholder="Username" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ zod: '3.23.8' }" />
</template>

<script>
import { zodResolver } from '@primevue/forms/resolvers';
import { z } from 'zod';

export default {
    data() {
        return {
            resolver: zodResolver(
                z.object({
                    username: z.string().min(1, { message: 'Username is required.' })
                })
            ),
            code: {
                basic: `
<Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <FormField v-slot="$field" name="username" initialValue="" class="flex flex-col gap-2">
        <InputText type="text" placeholder="Username" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />

        <Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <FormField v-slot="$field" name="username" initialValue="" class="flex flex-col gap-2">
                <InputText type="text" placeholder="Username" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script>
import { zodResolver } from '@primevue/forms/resolvers';
import { z } from 'zod';

export default {
    data() {
        return {
            resolver: zodResolver(
                z.object({
                    username: z.string().min(1, { message: 'Username is required.' })
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
            <FormField v-slot="$field" name="username" initialValue="" class="flex flex-col gap-2">
                <InputText type="text" placeholder="Username" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
            </FormField>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers';
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

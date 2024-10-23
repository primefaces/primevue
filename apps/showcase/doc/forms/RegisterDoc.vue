<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <i>register</i> callback allows non-PrimeVue components to be registered within Form component. This enables custom elements to participate in the form's validation and value tracking, ensuring they work alongside PrimeVue components.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-2">
                <input type="text" placeholder="Username" v-bind="$form.register('username')" />
                <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ zod: '3.23.8' }" />
</template>

<script>
import { zodResolver } from '@primevue/form/resolvers';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                username: ''
            },
            resolver: zodResolver(
                z.object({
                    username: z.string().min(1, { message: 'Username is required.' })
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-2">
        <input type="text" placeholder="Username" v-bind="$form.register('username')" />
        <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />

        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-2">
                <input type="text" placeholder="Username" v-bind="$form.register('username')" />
                <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script>
import { zodResolver } from '@primevue/form/resolvers';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                username: ''
            },
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
<style scoped>
input {
    width: 100%;
    color: var(--p-inputtext-color);
    background: var(--p-inputtext-background);
    border: 1px solid var(--p-inputtext-border-color);
}
<\/style>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-2">
                <input type="text" placeholder="Username" v-bind="$form.register('username')" />
                <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { zodResolver } from '@primevue/form/resolvers';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const initialValues = reactive({
  username: ''
});

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
<style scoped>
input {
    width: 100%;
    color: var(--p-inputtext-color);
    background: var(--p-inputtext-background);
    border: 1px solid var(--p-inputtext-border-color);
}
<\/style>
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
<style scoped>
input {
    width: 100%;
    color: var(--p-inputtext-color);
    background: var(--p-inputtext-background);
    border: 1px solid var(--p-inputtext-border-color);
}
</style>

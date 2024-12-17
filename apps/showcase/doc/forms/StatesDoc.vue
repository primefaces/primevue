<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>$form</i> object tracks the state management of the fields. Each field is linked with the <i>name</i> property. View the <i>FormFieldState</i> type in the API documentation for details about each property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
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
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            initialValues: {
                username: ''
            },
            code: {
                basic: `
<Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="grid lg:grid-cols-2 gap-4 w-full">
    <div class="flex flex-col justify-center items-center gap-4">
        <InputText name="username" type="text" placeholder="Username" class="w-full sm:w-56" />
        <Button type="submit" severity="secondary" label="Submit" class="w-full sm:w-56" />
    </div>
    <Fieldset legend="Form States" class="h-80 overflow-auto">
        <pre class="whitespace-pre-wrap">{{ $form }}</pre>
    </Fieldset>
</Form>
`,
                options: `
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

<script>
export default {
    data() {
        return {
            initialValues: {
                username: ''
            },
        };
    },
    methods: {
        resolver: ({ values }) => {
            const errors = { username: [] };

            if (!values.username) {
                errors.username.push({ type: 'required', message: 'Username is required.' });
            }

            if (values.username?.length < 3) {
                errors.username.push({ type: 'minimum', message: 'Username must be at least 3 characters long.' });
            }

            return {
                errors
            };
        },
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
        errors
    };
};

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
}
<\/script>
`
            }
        };
    },
    methods: {
        resolver: ({ values }) => {
            const errors = { username: [] };

            if (!values.username) {
                errors.username.push({ type: 'required', message: 'Username is required.' });
            }

            if (values.username?.length < 3) {
                errors.username.push({ type: 'minimum', message: 'Username must be at least 3 characters long.' });
            }

            return {
                errors
            };
        },
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
</script>

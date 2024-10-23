<template>
    <DocSectionText v-bind="$attrs">
        <p>Form uses the <i>name</i> property to create a state object for tracking values, errors, and actions.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="grid lg:grid-cols-2 gap-4 w-full">
            <div class="flex flex-col justify-center items-center gap-4">
                <InputText name="username" type="text" placeholder="Username" fluid class="sm:w-56" />
                <Button type="submit" severity="secondary" label="Submit" fluid class="sm:w-56" />
            </div>
            <Fieldset legend="Form States">
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
        <InputText name="username" type="text" placeholder="Username" />
        <Button type="submit" severity="secondary" label="Submit" />
    </div>
    <Fieldset legend="Form States">
        <pre class="whitespace-pre-wrap">{{ $form }}</pre>
    </Fieldset>
</Form>
`,
                options: `
<template>
    <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="grid md:grid-cols-2 gap-4 w-full">
        <div class="flex flex-col justify-center items-center gap-4">
            <InputText name="username" type="text" placeholder="Username" />
            <Button type="submit" severity="secondary" label="Submit" />
        </div>
        <Fieldset legend="Form States">
            <pre>{{ $form }}</pre>
        </Fieldset>
    </Form>
</template>

<script>
export default {
    data() {
        return {
            initialValues: {
                username: ''
            }
        };
    },
    methods: {
        resolver: ({ values }) => {
            const errors = {};

            if (!values.username) {
                errors.username = [{ message: 'Username is required.' }];
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

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Form is compatible with PrimeVue components, enabling smooth integration and functionality. Each component is linked to Form via a <i>name</i> property, which the form uses to create a state object for tracking values, errors and actions.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-2">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.errors[0]?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
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
<Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-2">
        <InputText name="username" type="text" placeholder="Username" fluid />
        <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.errors[0]?.message }}</Message>
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
        <Button type="submit" severity="secondary" label="Submit" />
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
</script>

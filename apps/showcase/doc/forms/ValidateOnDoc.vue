<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Form component supports flexible validation triggers, allowing validation on value updates, blur events, form mount, or submission, with options to apply this behavior globally or to specific fields via <i>validateOnValueUpdate</i>,
            <i>validateOnBlur</i>, <i>validateOnMount</i>, and <i>validateOnSubmit</i>.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :initialValues :resolver :validateOnValueUpdate="false" :validateOnBlur="true" :validateOnMount="['name']" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-2">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error.message }}</Message>
            </div>
            <div class="flex flex-col gap-2">
                <InputText name="name" type="text" placeholder="Name" fluid />
                <Message v-if="$form.name?.invalid" severity="error">{{ $form.name.error.message }}</Message>
            </div>
            <div class="flex flex-col gap-2">
                <InputText name="surname" type="text" placeholder="Surname" fluid />
                <Message v-if="$form.surname?.invalid" severity="error">{{ $form.surname.error.message }}</Message>
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
                username: '',
                name: '',
                surname: ''
            },
            code: {
                basic: `
<Form v-slot="$form" :initialValues :resolver :validateOnValueUpdate="false" :validateOnBlur="true" :validateOnMount="['name']" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-2">
        <InputText name="username" type="text" placeholder="Username" fluid />
        <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error.message }}</Message>
    </div>
    <div class="flex flex-col gap-2">
        <InputText name="name" type="text" placeholder="Name" fluid />
        <Message v-if="$form.name?.invalid" severity="error">{{ $form.name.error.message }}</Message>
    </div>
    <div class="flex flex-col gap-2">
        <InputText name="surname" type="text" placeholder="Surname" fluid />
        <Message v-if="$form.surname?.invalid" severity="error">{{ $form.surname.error.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
        <div class="flex flex-col gap-2">
            <InputText name="username" type="text" placeholder="Username" fluid />
            <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error.message }}</Message>
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

            if (!values.name) {
                errors.name = [{ message: 'Name is required.' }];
            }

            if (!values.surname) {
                errors.surname = [{ message: 'Surname is required.' }];
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

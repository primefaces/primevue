<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://vee-validate.logaretm.com/v4/">VeeValidate</a> is a popular library for handling forms in Vue.</p>
    </DocSectionText>
    <div class="card flex justify-content-center p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2 w-16rem">
            <span class="p-float-label">
                <InputText id="value" v-model="value" @input="onInput" type="text" :class="{ 'p-invalid': errors.value }" />
                <label for="value">Name - Surname</label>
            </span>
            <small class="p-error">{{ errors.value || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" @click="onSubmit" />
        </form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'vee-validate': '4.8.2' }" />
</template>

<script>
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleChange } = useField();
        const { errors, useFieldModel, handleSubmit } = useForm();
        const value = useFieldModel('value');

        const onInput = (e) => {
            handleChange('e.target.value');
        };

        const onSubmit = handleSubmit((values, actions) => {
            if (values.value === null || values.value === undefined || values.value === '') {
                actions.setErrors({ value: 'Name - Surname is required.' });
            } else {
                actions.setErrors({});
            }
        });

        return { value, errors, handleSubmit, onInput, onSubmit };
    },
    data() {
        return {
            code: {
                basic: `
<template>
    <div class="card flex justify-content-center p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2 w-16rem">
            <span class="p-float-label">
                <InputText id="value" v-model="value" @input="onInput" type="text" :class="{ 'p-invalid': errors.value }" />
                <label for="value">Name - Surname</label>
            </span>
            <small class="p-error">{{ errors.value || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" @click="onSubmit" />
        </form>
    </div>
</template>`,
                options: `
<template>
    <div class="card flex justify-content-center p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2 w-16rem">
            <span class="p-float-label">
                <InputText id="value" v-model="value" @input="onInput" type="text" :class="{ 'p-invalid': errors.value }" />
                <label for="value">Name - Surname</label>
            </span>
            <small class="p-error">{{ errors.value || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" @click="onSubmit" />
        </form>
    </div>
</template>

<script>
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleChange } = useField();
        const { errors, useFieldModel, handleSubmit } = useForm();
        const value = useFieldModel('value');

        const onInput = (e) => {
            handleChange('e.target.value');
        };

        const onSubmit = handleSubmit((values, actions) => {
            if (values.value === null || values.value === undefined || values.value === '') {
                actions.setErrors({ value: 'Name - Surname is required.' });
            } else {
                actions.setErrors({});
            }
        });

        return { value, errors, handleSubmit, onInput, onSubmit };
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2 w-16rem">
            <span class="p-float-label">
                <InputText id="value" v-model="value" @input="onInput" type="text" :class="{ 'p-invalid': errors.value }" />
                <label for="value">Name - Surname</label>
            </span>
            <small class="p-error">{{ errors.value || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" @click="onSubmit" />
        </form>
    </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
const { handleChange } = useField();
const { errors, useFieldModel, handleSubmit } = useForm();
const value = useFieldModel('value');

const onInput = (e) => {
    handleChange('e.target.value');
};

const onSubmit = handleSubmit((values, actions) => {
    if (values.value === null || values.value === undefined || values.value === '') {
        actions.setErrors({ value: 'Name - Surname is required.' });
    } else {
        actions.setErrors({});
    }
});
<\/script>
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://vee-validate.logaretm.com/v4/">VeeValidate</a> is a popular library for handling forms in Vue.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="year">Enter a year between 1960-2050.</label>
            <InputNumber id="year" v-model="value" :class="{ 'p-invalid': errorMessage }" :useGrouping="false" aria-describedby="number-error" />
            <small id="number-error" class="p-error">{{ errorMessage || (errors.length > 0 ? errors : '&nbsp;') }}</small>
            <Button type="submit" label="Submit" />
        </form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'vee-validate': '4.8.2' }" />
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleSubmit, resetForm } = useForm();
        const { value, errorMessage, errors } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Year is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values, actions) => {
            if (values.value && values.value >= 1960 && values.value <= 2050) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            } else {
                actions.setErrors({ value: 'Enter a valid year.' });
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage, errors };
    },
    data() {
        return {
            code: {
                basic: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="year">Enter a year between 1960-2050.</label>
            <InputNumber id="year" v-model="value" :class="{ 'p-invalid': errorMessage }" :useGrouping="false" aria-describedby="number-error" />
            <small class="p-error" id="number-error">{{ errorMessage || (errors.length > 0 ? errors : '&nbsp;') }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="year">Enter a year between 1960-2050.</label>
            <InputNumber id="year" v-model="value" :class="{ 'p-invalid': errorMessage }" :useGrouping="false" aria-describedby="number-error" />
            <small class="p-error" id="number-error">{{ errorMessage || (errors.length > 0 ? errors : '&nbsp;') }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleSubmit, resetForm } = useForm();
        const { value, errorMessage, errors } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Year is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values, actions) => {
            if (values.value && values.value >= 1960 && values.value <= 2050) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            } else {
                actions.setErrors({ value: 'Enter a valid year.' });
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage, errors };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="year">Enter a year between 1960-2050.</label>
            <InputNumber id="year" v-model="value" :class="{ 'p-invalid': errorMessage }" :useGrouping="false" aria-describedby="number-error" />
            <small class="p-error" id="number-error">{{ errorMessage || (errors.length > 0 ? errors : '&nbsp;') }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage, errors } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Year is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values, actions) => {
    if (values.value && values.value >= 1960 && values.value <= 2050) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    } else {
        actions.setErrors({ value: 'Enter a valid year.' });
    }
});
<\/script>
`
            }
        };
    }
};
</script>

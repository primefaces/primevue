<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://vee-validate.logaretm.com/v4/">VeeValidate</a> is a popular library for handling forms in Vue.</p>
    </DocSectionText>
    <div class="card p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <Chips v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="chips-error" />
            <small id="chips-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" class="w-7rem" />
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
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'At least one chip is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.join(','), life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            code: {
                basic: `
<template>
    <div class="card p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <Chips v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="chips-error" />
            <small class="p-error" id="chips-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" class="w-7rem" />
        </form>
        <Toast />
    </div>
</template>
`,
                options: `
<template>
    <div class="card p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <Chips v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="chips-error" />
            <small class="p-error" id="chips-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" class="w-7rem" />
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
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'At least one chip is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.join(','), life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <Chips v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="chips-error" />
            <small class="p-error" id="chips-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" class="w-7rem" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'At least one chip is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.join(','), life: 3000 });
        resetForm();
    }
});
<\/script>
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://vee-validate.logaretm.com/v4/">VeeValidate</a> is a popular library for handling forms in Vue.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <label for="chbx">I've read and accept the terms & conditions.</label>
            <Checkbox id="chbx" v-model="value" :class="{ 'p-invalid': errorMessage }" binary aria-describedby="chbx-error" />
            <small id="chbx-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
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
        const { handleSubmit } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Accept is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            code: {
                basic: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <label for="chbx">I've read and accept the terms & conditions.</label>
            <Checkbox id="chbx" v-model="value" :class="{ 'p-invalid': errorMessage }" binary aria-describedby="chbx-error" />
            <small class="p-error" id="chbx-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <label for="chbx">I've read and accept the terms & conditions.</label>
            <Checkbox id="chbx" v-model="value" :class="{ 'p-invalid': errorMessage }" binary aria-describedby="chbx-error" />
            <small class="p-error" id="chbx-error">{{ errorMessage || '&nbsp;' }}</small>
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
        const { handleSubmit } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Accept is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <label for="chbx">I've read and accept the terms & conditions.</label>
            <Checkbox id="chbx" v-model="value" :class="{ 'p-invalid': errorMessage }" binary aria-describedby="chbx-error" />
            <small class="p-error" id="chbx-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Accept is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
    }
});
<\/script>
`
            }
        };
    }
};
</script>

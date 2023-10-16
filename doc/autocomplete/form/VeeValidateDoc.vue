<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://vee-validate.logaretm.com/v4/">VeeValidate</a> is a popular library for handling forms in Vue.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="ac">Value</label>
            <AutoComplete v-model="value" :inputClass="{ 'p-invalid': errorMessage }" inputId="ac" :suggestions="items" @complete="search" aria-describedby="ac-error" />
            <small id="ac-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
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
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Value is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            items: [],
            code: {
                basic: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="ac">Value</label>
            <AutoComplete v-model="value" :inputClass="{ 'p-invalid': errorMessage }" inputId="ac" :suggestions="items" @complete="search" aria-describedby="ac-error" />
            <small class="p-error" id="ac-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
    </div>
</template>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="ac">Value</label>
            <AutoComplete v-model="value" :inputClass="{ 'p-invalid': errorMessage }" inputId="ac" :suggestions="items" @complete="search" aria-describedby="ac-error" />
            <small class="p-error" id="ac-error">{{ errorMessage || '&nbsp;' }}</small>
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
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Value is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            items: []
        }
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="ac">Value</label>
            <AutoComplete v-model="value" :inputClass="{ 'p-invalid': errorMessage }" inputId="ac" :suggestions="items" @complete="search" aria-describedby="ac-error" />
            <small class="p-error" id="ac-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();
const items = ref([]);

function validateField(value) {
    if (!value) {
        return 'Value is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    }
});

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
};
<\/script>
`
            }
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
</script>

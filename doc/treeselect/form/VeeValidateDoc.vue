<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://vee-validate.logaretm.com/v4/">VeeValidate</a> is a popular library for handling forms in Vue.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2 w-full md:w-20rem">
            <TreeSelect v-model="value" :class="['w-full md:w-20rem', { 'p-invalid': errorMessage }]" aria-describedby="text-error" :options="nodes" placeholder="Select Item" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'vee-validate': '4.8.2' }" :service="['NodeService']" />
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';
import { NodeService } from '/service/NodeService';
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
            if (values.value) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: 'The form is successfully submitted.', life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            nodes: null,
            code: {
                basic: `
<div class="card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column align-items-center gap-2 w-full md:w-20rem">
        <TreeSelect v-model="value" :class="['w-full md:w-20rem', { 'p-invalid': errorMessage }]" aria-describedby="text-error" :options="nodes" placeholder="Select Item" />
        <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
        <Button type="submit" label="Submit" />
    </form>
</div>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2 w-full md:w-20rem">
            <TreeSelect v-model="value" :class="['w-full md:w-20rem', { 'p-invalid': errorMessage }]" aria-describedby="text-error" :options="nodes" placeholder="Select Item" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';
import { NodeService } from '@/service/NodeService';

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
            if (values.value) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: 'The form is successfully submitted.', life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2 w-full md:w-20rem">
            <TreeSelect v-model="value" :class="['w-full md:w-20rem', { 'p-invalid': errorMessage }]" aria-describedby="text-error" :options="nodes" placeholder="Select Item" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';
import { NodeService } from '@/service/NodeService';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);

const toast = useToast();
const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

function validateField(value) {
    if (!value) {
        return 'Value is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: 'The form is successfully submitted.', life: 3000 });
        resetForm();
    }
});
<\/script>
`
            }
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
</script>

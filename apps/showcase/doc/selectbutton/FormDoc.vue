<template>
    <DocSectionText v-bind="$attrs">
        <p>SelectButton can be used with the <NuxtLink to="/forms">PrimeVue Forms</NuxtLink> library.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex items-center flex-col gap-2">
                <SelectButton name="selectbutton" :options="options" />
                <Message v-if="$form.selectbutton?.invalid" severity="error">{{ $form.selectbutton.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ zod: '3.23.8' }" />
</template>

<script>
import { zodResolver } from '@primevue/form/resolvers';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                selectbutton: ''
            },
            resolver: zodResolver(
                z.object({
                    selectbutton: z.preprocess((val) => (val === null ? '' : val), z.string().min(1, { message: 'SelectButton is required' }))
                })
            ),
            options: ['One-Way', 'Return'],
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
        <SelectButton name="selectbutton" :options="options" />
        <Message v-if="$form.selectbutton?.invalid" severity="error">{{ $form.selectbutton.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <SelectButton name="selectbutton" :options="options" />
                <Message v-if="$form.selectbutton?.invalid" severity="error">{{ $form.selectbutton.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script>
import { zodResolver } from '@primevue/form/resolvers';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                selectbutton: ''
            },
            resolver: zodResolver(
                z.object({
                    selectbutton: z.preprocess((val) => (val === null ? '' : val), z.string().min(1, { message: 'SelectButton is required' }))
                })
            ),
            options: ['One-Way', 'Return'],
        }
    },
    methods: {
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <SelectButton name="selectbutton" :options="options" />
                <Message v-if="$form.selectbutton?.invalid" severity="error">{{ $form.selectbutton.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/form/resolvers';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
    selectbutton: ''
});
const resolver = ref(zodResolver(
    z.object({
        selectbutton: z.preprocess((val) => (val === null ? '' : val), z.string().min(1, { message: 'SelectButton is required' }))
    })
));

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
        `
            }
        };
    },
    methods: {
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>SelectButton integrates seamlessly with the <NuxtLink to="/forms">PrimeVue Forms</NuxtLink> library.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex items-center flex-col gap-1">
                <SelectButton name="selection" :options="options" />
                <Message v-if="$form.selection?.invalid" severity="error" size="small" variant="simple">{{ $form.selection.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ zod: '3.23.8' }" />
</template>

<script>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                selection: ''
            },
            resolver: zodResolver(
                z.object({
                    selection: z.preprocess((val) => (val === null ? '' : val), z.string().min(1, { message: 'Selection is required' }))
                })
            ),
            options: ['One-Way', 'Return'],
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <SelectButton name="selection" :options="options" />
        <Message v-if="$form.selection?.invalid" severity="error">{{ $form.selection.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
                <SelectButton name="selection" :options="options" />
                <Message v-if="$form.selection?.invalid" severity="error">{{ $form.selection.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                selection: ''
            },
            resolver: zodResolver(
                z.object({
                    selection: z.preprocess((val) => (val === null ? '' : val), z.string().min(1, { message: 'Selection is required' }))
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
            <div class="flex flex-col gap-1">
                <SelectButton name="selection" :options="options" />
                <Message v-if="$form.selection?.invalid" severity="error">{{ $form.selection.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
    selection: ''
});
const resolver = ref(zodResolver(
    z.object({
        selection: z.preprocess((val) => (val === null ? '' : val), z.string().min(1, { message: 'Selection is required' }))
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

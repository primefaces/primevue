<template>
    <DocSectionText v-bind="$attrs">
        <p>Knob integrates seamlessly with the <NuxtLink to="/forms">PrimeVue Forms</NuxtLink> library.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col items-center gap-1">
                <Knob name="knob" />
                <Message v-if="$form.knob?.invalid" severity="error" size="small" variant="simple">{{ $form.knob.error?.message }}</Message>
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
                knob: 15
            },
            resolver: zodResolver(
                z.object({
                    knob: z.number().gt(25, { message: 'Must be greater than 25.' }).lt(75, { message: 'Must be less than 75.' })
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-1">
        <Knob name="knob" />
        <Message v-if="$form.knob?.invalid" severity="error" size="small" variant="simple">{{ $form.knob.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col items-center gap-1">
                <Knob name="knob" />
                <Message v-if="$form.knob?.invalid" severity="error" size="small" variant="simple">{{ $form.knob.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <Toast />
</template>

<script>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                knob: 15
            },
            resolver: zodResolver(
                z.object({
                    knob: z.number().gt(25, { message: 'Must be greater than 25.' }).lt(75, { message: 'Must be less than 75.' })
                })
            )
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
            <div class="flex flex-col items-center gap-1">
                <Knob name="knob" />
                <Message v-if="$form.knob?.invalid" severity="error" size="small" variant="simple">{{ $form.knob.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <Toast />
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';


const toast = useToast();
const initialValues = ref({
    knob: 15
});
const resolver = ref(zodResolver(
    z.object({
        knob: z.number().gt(25, { message: 'Must be greater than 25.' }).lt(75, { message: 'Must be less than 75.' })
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

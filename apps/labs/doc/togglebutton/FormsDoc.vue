<template>
    <DocSectionText v-bind="$attrs">
        <p>ToggleButton integrates seamlessly with the <NuxtLink to="/forms">PrimeVue Forms</NuxtLink> library.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col items-center gap-1">
                <ToggleButton name="consent" class="w-48" onLabel="Accept All" offLabel="Reject All" />
                <Message v-if="$form.consent?.invalid" severity="error" size="small" variant="simple">{{ $form.consent.error?.message }}</Message>
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
                consent: false
            },
            resolver: zodResolver(
                z.object({
                    consent: z.boolean().refine((val) => val === true, { message: 'Consent is mandatory.' })
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-1">
        <ToggleButton name="consent" class="w-48" onLabel="Accept All" offLabel="Reject All" />
        <Message v-if="$form.consent?.invalid" severity="error" variant="simple">{{ $form.consent.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col items-center gap-1">
                <ToggleButton name="consent" class="w-48" onLabel="Accept All" offLabel="Reject All" />
                <Message v-if="$form.consent?.invalid" severity="error" variant="simple">{{ $form.consent.error?.message }}</Message>
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
                consent: false
            },
            resolver: zodResolver(
                z.object({
                    consent: z.boolean().refine((val) => val === true, { message: 'Consent is mandatory.' })
                })
            ),
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
                <ToggleButton name="consent" class="w-48" onLabel="Accept All" offLabel="Reject All" />
                <Message v-if="$form.consent?.invalid" severity="error" variant="simple">{{ $form.consent.error?.message }}</Message>
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
    consent: false
});

const resolver = ref(zodResolver(
    z.object({
        consent: z.boolean().refine((val) => val === true, { message: 'Consent is mandatory.' })
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

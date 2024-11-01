<template>
    <DocSectionText v-bind="$attrs">
        <p>Rating integrates seamlessly with the <NuxtLink to="/forms">PrimeVue Forms</NuxtLink> library.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-40">
            <div class="flex flex-col items-center gap-2">
                <Rating name="rating" />
                <Message v-if="$form.rating?.invalid" severity="error" size="small" variant="simple">{{ $form.rating.error?.message }}</Message>
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
                rating: null
            },
            resolver: zodResolver(
                z.object({
                    rating: z.union([z.number(), z.literal(null)]).refine((value) => value !== null, { message: 'Rating is required.' })
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-40">
    <div class="flex flex-col items-center gap-2">
        <Rating name="rating" />
        <Message v-if="$form.rating?.invalid" severity="error" size="small" variant="simple">{{ $form.rating.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-40">
            <div class="flex flex-col items-center gap-2">
                <Rating name="rating" />
                <Message v-if="$form.rating?.invalid" severity="error" size="small" variant="simple">{{ $form.rating.error?.message }}</Message>
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
                rating: null
            },
            resolver: zodResolver(
                z.object({
                    rating: z.union([z.number(), z.literal(null)]).refine((value) => value !== null, { message: 'Rating is required.' })
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
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-40">
            <div class="flex flex-col items-center gap-2">
                <Rating name="rating" />
                <Message v-if="$form.rating?.invalid" severity="error" size="small" variant="simple">{{ $form.rating.error?.message }}</Message>
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
    rating: null
});
const resolver = ref(zodResolver(
    z.object({
        rating: z.union([z.number(), z.literal(null)]).refine((value) => value !== null, { message: 'Rating is required.' })
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

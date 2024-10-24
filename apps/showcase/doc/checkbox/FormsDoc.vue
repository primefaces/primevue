<template>
    <DocSectionText v-bind="$attrs">
        <p>Checkbox can be used with the <NuxtLink to="/forms">PrimeVue Forms</NuxtLink> library.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
            <div class="flex flex-col gap-2">
                <CheckboxGroup name="checkbox" class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="cheese" value="Cheese" />
                        <label for="cheese"> Cheese </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="mushroom" value="Mushroom" />
                        <label for="mushroom"> Mushroom </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="pepper" value="Pepper" />
                        <label for="pepper"> Pepper </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="onion" value="Onion" />
                        <label for="onion"> Onion </label>
                    </div>
                </CheckboxGroup>

                <Message v-if="$form.checkbox?.invalid" severity="error">{{ $form.checkbox.error?.message }}</Message>
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
                checkbox: []
            },
            resolver: zodResolver(
                z.object({
                    checkbox: z.array(z.string()).min(1, { message: 'At least one checkbox must be selected.' })
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-2">
        <CheckboxGroup name="checkbox" class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <Checkbox inputId="cheese" value="Cheese" />
                <label for="cheese"> Cheese </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="mushroom" value="Mushroom" />
                <label for="mushroom"> Mushroom </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="pepper" value="Pepper" />
                <label for="pepper"> Pepper </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox inputId="onion" value="Onion" />
                <label for="onion"> Onion </label>
            </div>
        </CheckboxGroup>

        <Message v-if="$form.checkbox?.invalid" severity="error">{{ $form.checkbox.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
            <div class="flex flex-col gap-2">
                <CheckboxGroup name="checkbox" class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="cheese" value="Cheese" />
                        <label for="cheese"> Cheese </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="mushroom" value="Mushroom" />
                        <label for="mushroom"> Mushroom </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="pepper" value="Pepper" />
                        <label for="pepper"> Pepper </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="onion" value="Onion" />
                        <label for="onion"> Onion </label>
                    </div>
                </CheckboxGroup>

                <Message v-if="$form.checkbox?.invalid" severity="error">{{ $form.checkbox.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <Toast />
</template>

<script>
import { zodResolver } from '@primevue/form/resolvers';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                checkbox: []
            },
            resolver: zodResolver(
                z.object({
                    checkbox: z.array(z.string()).min(1, { message: 'At least one checkbox must be selected.' })
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
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
            <div class="flex flex-col gap-2">
                <CheckboxGroup name="checkbox" class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="cheese" value="Cheese" />
                        <label for="cheese"> Cheese </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="mushroom" value="Mushroom" />
                        <label for="mushroom"> Mushroom </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="pepper" value="Pepper" />
                        <label for="pepper"> Pepper </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="onion" value="Onion" />
                        <label for="onion"> Onion </label>
                    </div>
                </CheckboxGroup>

                <Message v-if="$form.checkbox?.invalid" severity="error">{{ $form.checkbox.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <Toast />
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/form/resolvers';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
    checkbox: []
});
const resolver = ref(zodResolver(
    z.object({
        checkbox: z.array(z.string()).min(1, { message: 'At least one checkbox must be selected.' })
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

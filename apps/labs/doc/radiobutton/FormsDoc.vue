<template>
    <DocSectionText v-bind="$attrs">
        <p>RadioButton integrates seamlessly with the <NuxtLink to="/forms">PrimeVue Forms</NuxtLink> library.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <RadioButtonGroup name="ingredient" class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="cheese" value="Cheese" />
                        <label for="cheese">Cheese</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="mushroom" value="Mushroom" />
                        <label for="mushroom">Mushroom</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="pepper" value="Pepper" />
                        <label for="pepper">Pepper</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="onion" value="Onion" />
                        <label for="onion">Onion</label>
                    </div>
                </RadioButtonGroup>
                <Message v-if="$form.ingredient?.invalid" severity="error" size="small" variant="simple">{{ $form.ingredient.error?.message }}</Message>
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
                ingredient: ''
            },
            resolver: zodResolver(
                z.object({
                    ingredient: z.string().min(1, { message: 'Ingredient is required.' })
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
        <RadioButtonGroup name="ingredient" class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <RadioButton inputId="cheese" value="Cheese" />
                <label for="cheese">Cheese</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton inputId="mushroom" value="Mushroom" />
                <label for="mushroom">Mushroom</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton inputId="pepper" value="Pepper" />
                <label for="pepper">Pepper</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton inputId="onion" value="Onion" />
                <label for="onion">Onion</label>
            </div>
        </RadioButtonGroup>
        <Message v-if="$form.ingredient?.invalid" severity="error" size="small" variant="simple">{{ $form.ingredient.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <RadioButtonGroup name="ingredient" class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="cheese" value="Cheese" />
                        <label for="cheese">Cheese</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="mushroom" value="Mushroom" />
                        <label for="mushroom">Mushroom</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="pepper" value="Pepper" />
                        <label for="pepper">Pepper</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="onion" value="Onion" />
                        <label for="onion">Onion</label>
                    </div>
                </RadioButtonGroup>
                <Message v-if="$form.ingredient?.invalid" severity="error" size="small" variant="simple">{{ $form.ingredient.error?.message }}</Message>
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
                ingredient: ''
            },
            resolver: zodResolver(
                z.object({
                    ingredient: z.string().min(1, { message: 'Ingredient is required.' })
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
            <div class="flex flex-col gap-2">
                <RadioButtonGroup name="ingredient" class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="cheese" value="Cheese" />
                        <label for="cheese">Cheese</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="mushroom" value="Mushroom" />
                        <label for="mushroom">Mushroom</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="pepper" value="Pepper" />
                        <label for="pepper">Pepper</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="onion" value="Onion" />
                        <label for="onion">Onion</label>
                    </div>
                </RadioButtonGroup>
                <Message v-if="$form.ingredient?.invalid" severity="error" size="small" variant="simple">{{ $form.ingredient.error?.message }}</Message>
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
    ingredient: ''
});
const resolver = ref(zodResolver(
    z.object({
        ingredient: z.string().min(1, { message: 'Ingredient is required.' })
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

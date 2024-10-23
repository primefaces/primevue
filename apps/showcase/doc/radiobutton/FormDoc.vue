<template>
    <DocSectionText v-bind="$attrs">
        <p>RadioButton can be used with the <NuxtLink to="/forms">PrimeVue Forms</NuxtLink> library.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <RadioButtonGroup name="radiobutton" class="flex flex-wrap gap-4">
                <div class="flex items-center">
                    <RadioButton inputId="ingredient1" value="Cheese" />
                    <label for="ingredient1" class="ml-2">Cheese</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="ingredient2" value="Mushroom" />
                    <label for="ingredient2" class="ml-2">Mushroom</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="ingredient3" value="Pepper" />
                    <label for="ingredient3" class="ml-2">Pepper</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="ingredient4" value="Onion" />
                    <label for="ingredient4" class="ml-2">Onion</label>
                </div>
            </RadioButtonGroup>
            <Message v-if="$form.radiobutton?.invalid" severity="error" icon="pi pi-times-circle">{{ $form.radiobutton.error?.message }}</Message>
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
                radiobutton: ''
            },
            resolver: zodResolver(
                z.object({
                    radiobutton: z.string().min(1, { message: 'Selection is required.' })
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <RadioButtonGroup name="radiobutton" class="flex flex-wrap gap-4">
        <div class="flex items-center">
            <RadioButton inputId="ingredient1" value="Cheese" />
            <label for="ingredient1" class="ml-2">Cheese</label>
        </div>
        <div class="flex items-center">
            <RadioButton inputId="ingredient2" value="Mushroom" />
            <label for="ingredient2" class="ml-2">Mushroom</label>
        </div>
        <div class="flex items-center">
            <RadioButton inputId="ingredient3" value="Pepper" />
            <label for="ingredient3" class="ml-2">Pepper</label>
        </div>
        <div class="flex items-center">
            <RadioButton inputId="ingredient4" value="Onion" />
            <label for="ingredient4" class="ml-2">Onion</label>
        </div>
    </RadioButtonGroup>
    <Message v-if="$form.radiobutton?.invalid" severity="error" icon="pi pi-times-circle">{{ $form.radiobutton.error?.message }}</Message>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <RadioButtonGroup name="radiobutton" class="flex flex-wrap gap-4">
                <div class="flex items-center">
                    <RadioButton inputId="ingredient1" value="Cheese" />
                    <label for="ingredient1" class="ml-2">Cheese</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="ingredient2" value="Mushroom" />
                    <label for="ingredient2" class="ml-2">Mushroom</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="ingredient3" value="Pepper" />
                    <label for="ingredient3" class="ml-2">Pepper</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="ingredient4" value="Onion" />
                    <label for="ingredient4" class="ml-2">Onion</label>
                </div>
            </RadioButtonGroup>
            <Message v-if="$form.radiobutton?.invalid" severity="error" icon="pi pi-times-circle">{{ $form.radiobutton.error?.message }}</Message>
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
                radiobutton: ''
            },
            resolver: zodResolver(
                z.object({
                    radiobutton: z.string().min(1, { message: 'Selection is required.' })
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
            <RadioButtonGroup name="radiobutton" class="flex flex-wrap gap-4">
                <div class="flex items-center">
                    <RadioButton inputId="ingredient1" value="Cheese" />
                    <label for="ingredient1" class="ml-2">Cheese</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="ingredient2" value="Mushroom" />
                    <label for="ingredient2" class="ml-2">Mushroom</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="ingredient3" value="Pepper" />
                    <label for="ingredient3" class="ml-2">Pepper</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="ingredient4" value="Onion" />
                    <label for="ingredient4" class="ml-2">Onion</label>
                </div>
            </RadioButtonGroup>
            <Message v-if="$form.radiobutton?.invalid" severity="error" icon="pi pi-times-circle">{{ $form.radiobutton.error?.message }}</Message>
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
    radiobutton: ''
});
const resolver = ref(zodResolver(
    z.object({
        radiobutton: z.string().min(1, { message: 'Selection is required.' })
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

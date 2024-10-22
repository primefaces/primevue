<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
            <div class="flex flex-col gap-2">
                <CheckboxGroup name="checkbox" class="flex flex-wrap gap-4">
                    <div class="flex items-center">
                        <Checkbox inputId="ingredient1" value="Cheese" />
                        <label for="ingredient1" class="ml-2"> Cheese </label>
                    </div>
                    <div class="flex items-center">
                        <Checkbox inputId="ingredient2" value="Mushroom" />
                        <label for="ingredient2" class="ml-2"> Mushroom </label>
                    </div>
                    <div class="flex items-center">
                        <Checkbox inputId="ingredient3" value="Pepper" />
                        <label for="ingredient3" class="ml-2"> Pepper </label>
                    </div>
                    <div class="flex items-center">
                        <Checkbox inputId="ingredient4" value="Onion" />
                        <label for="ingredient4" class="ml-2"> Onion </label>
                    </div>
                </CheckboxGroup>

                <Message v-if="$form.checkbox?.invalid" severity="error">{{ $form.checkbox.errors[0]?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" class="self-center p-2">Submit</Button>
        </Form>
    </div>
    <DocSectionCode :code="code" />
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
            resolver: null,
            schema: z.object({
                checkbox: z.array(z.string()).min(1, { message: 'At least one checkbox must be selected.' })
            }),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-2">
        <InputText name="username" type="text" placeholder="Username" />
        <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.errors[0]?.message }}</Message>
    </div>
    <div class="flex flex-col gap-2">
        <InputText name="email" type="text" placeholder="Email" />
        <Message v-if="$form.email?.invalid" severity="error">{{ $form.email.errors[0]?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" class="self-center p-2">Submit</Button>
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputText type="text" v-model="value" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputText type="text" v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
        `
            }
        };
    },
    mounted() {
        this.resolver = zodResolver(this.schema);
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

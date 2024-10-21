<template>
    <DocSectionText v-bind="$attrs">
        <p>InputText is used with the <i>v-model</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :defaultValues="defaultValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
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
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
import { zodResolver } from '@primevue/form/resolvers';
import { z } from 'zod';

export default {
    data() {
        return {
            defaultValues: {
                username: '',
                email: ''
            },
            resolver: null,
            schema: z.object({
                username: z.string().min(1, { message: 'Please enter your username.' }),
                email: z.string().min(1, { message: 'Please enter your email.' }).email({ message: 'Email must be valid.' })
            }),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :defaultValues="defaultValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
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
        onFormSubmit({ valid, values, states }) {
            console.log(values, states);

            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
</script>

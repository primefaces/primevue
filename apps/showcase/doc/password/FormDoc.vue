<template>
    <DocSectionText v-bind="$attrs">
        <p>InputText is used with the <i>v-model</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
            <div class="flex flex-col gap-2">
                <Password name="password" placeholder="Password" :feedback="false" />
                <template v-if="$form.password?.invalid">
                    <Message v-for="(error, index) of $form.password.errors" :key="index" severity="error">{{ error.message }}</Message>
                </template>
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
                password: ''
            },
            resolver: null,
            schema: z.object({
                password: z
                    .string()
                    .min(3, { message: 'Password must be at least 3 characters long.' })
                    .max(8, { message: 'Password must not exceed 8 characters.' })
                    .refine((value) => /[a-z]/.test(value), {
                        message: 'Password must contain at least one lowercase letter.'
                    })
                    .refine((value) => /[A-Z]/.test(value), {
                        message: 'Password must contain at least one uppercase letter.'
                    })
                    .refine((value) => /\d/.test(value), {
                        message: 'Password must contain at least one number.'
                    })
            }),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-2">
        <Password name="password" placeholder="Password" :feedback="false" />
        <template v-if="$form.password?.invalid">
            <Message v-for="(error, index) of $form.password.errors" :key="index" severity="error">{{ error.message }}</Message>
        </template>
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

<template>
    <DocSectionText v-bind="$attrs">
        <p>This section demonstrates how to create a dynamic form using a custom Form component. It showcases an example where form fields are generated dynamically based on the provided configuration, allowing for flexible form structures.</p>
    </DocSectionText>
    <div class="card grid md:grid-cols-2 gap-4 w-full">
        <Fieldset legend="Form 1" pt:content:class="flex justify-center">
            <DynamicForm @submit="onFormSubmit('Form 1', $event)">
                <DynamicFormField groupId="userId_1" name="username">
                    <DynamicFormLabel>Username</DynamicFormLabel>
                    <DynamicFormControl defaultValue="PrimeVue" fluid :schema="userNameSchema" />
                    <DynamicFormMessage />
                </DynamicFormField>
                <DynamicFormField groupId="passId_1" name="password">
                    <DynamicFormLabel>Password</DynamicFormLabel>
                    <DynamicFormControl as="Password" :feedback="false" toggleMask fluid :schema="passwordSchema" />
                    <DynamicFormMessage errorType="minimum" />
                    <DynamicFormMessage errorType="maximum" />
                    <DynamicFormMessage errorType="uppercase" severity="warn" />
                    <DynamicFormMessage errorType="lowercase" severity="warn" />
                    <DynamicFormMessage errorType="number" severity="secondary" />
                </DynamicFormField>
                <DynamicFormSubmit />
            </DynamicForm>
        </Fieldset>

        <Fieldset legend="Form 2" pt:content:class="flex justify-center">
            <DynamicForm :fields @submit="onFormSubmit('Form 2', $event)" />
        </Fieldset>
    </div>
    <DocSectionCode :code="code" :dependencies="{ zod: '3.23.8' }" />
</template>

<script>
import { markRaw } from 'vue';
import { z } from 'zod';
import DynamicForm from './dynamic/DynamicForm.vue';
import DynamicFormControl from './dynamic/DynamicFormControl.vue';
import DynamicFormField from './dynamic/DynamicFormField.vue';
import DynamicFormLabel from './dynamic/DynamicFormLabel.vue';
import DynamicFormMessage from './dynamic/DynamicFormMessage.vue';
import DynamicFormSubmit from './dynamic/DynamicFormSubmit.vue';

export default {
    data() {
        return {
            userNameSchema: z.string().min(1, { message: 'Username is required.' }),
            passwordSchema: z
                .string()
                .min(3, { message: 'Password must be at least 3 characters long.' })
                .max(8, { message: 'Password must not exceed 8 characters.' })
                .refine((value) => /[a-z]/.test(value), {
                    errorType: 'lowercase',
                    message: 'Password must contain at least one lowercase letter.'
                })
                .refine((value) => /[A-Z]/.test(value), {
                    errorType: 'uppercase',
                    message: 'Password must contain at least one uppercase letter.'
                })
                .refine((value) => /\d/.test(value), {
                    errorType: 'number',
                    message: 'Password must contain at least one number.'
                }),
            fields: {
                username: {
                    groupId: 'userId_2',
                    label: 'Username',
                    defaultValue: 'PrimeVue',
                    fluid: true,
                    schema: z.string().min(1, { message: 'Username is required.' })
                },
                password: {
                    groupId: 'passId_2',
                    label: 'Password',
                    as: 'Password',
                    feedback: false,
                    toggleMask: true,
                    fluid: true,
                    messages: [{ errorType: 'minimum' }, { errorType: 'maximum' }, { errorType: 'uppercase', severity: 'warn' }, { errorType: 'lowercase', severity: 'warn' }, { errorType: 'number', severity: 'secondary' }],
                    schema: z
                        .string()
                        .min(3, { message: 'Password must be at least 3 characters long.' })
                        .max(8, { message: 'Password must not exceed 8 characters.' })
                        .refine((value) => /[a-z]/.test(value), {
                            errorType: 'lowercase',
                            message: 'Password must contain at least one lowercase letter.'
                        })
                        .refine((value) => /[A-Z]/.test(value), {
                            errorType: 'uppercase',
                            message: 'Password must contain at least one uppercase letter.'
                        })
                        .refine((value) => /\d/.test(value), {
                            errorType: 'number',
                            message: 'Password must contain at least one number.'
                        })
                }
            },
            code: {
                basic: `
<Fieldset legend="Form 1" pt:content:class="flex justify-center">
    <DynamicForm @submit="onFormSubmit('Form 1', $event)">
        <DynamicFormField groupId="userId_1" name="username">
            <DynamicFormLabel>Username</DynamicFormLabel>
            <DynamicFormControl defaultValue="PrimeVue" fluid :schema="userNameSchema" />
            <DynamicFormMessage />
        </DynamicFormField>
        <DynamicFormField groupId="passId_1" name="password">
            <DynamicFormLabel>Password</DynamicFormLabel>
            <DynamicFormControl as="Password" :feedback="false" toggleMask fluid :schema="passwordSchema" />
            <DynamicFormMessage errorType="minimum" />
            <DynamicFormMessage errorType="maximum" />
            <DynamicFormMessage errorType="uppercase" severity="warn" />
            <DynamicFormMessage errorType="lowercase" severity="warn" />
            <DynamicFormMessage errorType="number" severity="secondary" />
        </DynamicFormField>
        <DynamicFormSubmit />
    </DynamicForm>
</Fieldset>

<Fieldset legend="Form 2" pt:content:class="flex justify-center">
    <DynamicForm :fields @submit="onFormSubmit('Form 2', $event)" />
</Fieldset>
`,
                options: `
<template>
    <div class="card grid md:grid-cols-2 gap-4 w-full">
        <Toast />

        <Fieldset legend="Form 1" pt:content:class="flex justify-center">
            <DynamicForm @submit="onFormSubmit('Form 1', $event)">
                <DynamicFormField groupId="userId_1" name="username">
                    <DynamicFormLabel>Username</DynamicFormLabel>
                    <DynamicFormControl defaultValue="PrimeVue" fluid :schema="userNameSchema" />
                    <DynamicFormMessage />
                </DynamicFormField>
                <DynamicFormField groupId="passId_1" name="password">
                    <DynamicFormLabel>Password</DynamicFormLabel>
                    <DynamicFormControl as="Password" :feedback="false" toggleMask fluid :schema="passwordSchema" />
                    <DynamicFormMessage errorType="minimum" />
                    <DynamicFormMessage errorType="maximum" />
                    <DynamicFormMessage errorType="uppercase" severity="warn" />
                    <DynamicFormMessage errorType="lowercase" severity="warn" />
                    <DynamicFormMessage errorType="number" severity="secondary" />
                </DynamicFormField>
                <DynamicFormSubmit />
            </DynamicForm>
        </Fieldset>

        <Fieldset legend="Form 2" pt:content:class="flex justify-center">
            <DynamicForm :fields @submit="onFormSubmit('Form 2', $event)" />
        </Fieldset>
    </div>
</template>

<script>
import { markRaw } from 'vue';
import { z } from 'zod';
import DynamicForm from './dynamic/DynamicForm.vue';
import DynamicFormControl from './dynamic/DynamicFormControl.vue';
import DynamicFormField from './dynamic/DynamicFormField.vue';
import DynamicFormLabel from './dynamic/DynamicFormLabel.vue';
import DynamicFormMessage from './dynamic/DynamicFormMessage.vue';
import DynamicFormSubmit from './dynamic/DynamicFormSubmit.vue';

export default {
    data() {
        return {
            userNameSchema: z.string().min(1, { message: 'Username is required.' }),
            passwordSchema: z
                .string()
                .min(3, { message: 'Password must be at least 3 characters long.' })
                .max(8, { message: 'Password must not exceed 8 characters.' })
                .refine((value) => /[a-z]/.test(value), {
                    errorType: 'lowercase',
                    message: 'Password must contain at least one lowercase letter.'
                })
                .refine((value) => /[A-Z]/.test(value), {
                    errorType: 'uppercase',
                    message: 'Password must contain at least one uppercase letter.'
                })
                .refine((value) => /\d/.test(value), {
                    errorType: 'number',
                    message: 'Password must contain at least one number.'
                }),
            fields: {
                username: {
                    groupId: 'userId_2',
                    label: 'Username',
                    defaultValue: 'PrimeVue',
                    fluid: true,
                    schema: z.string().min(1, { message: 'Username is required.' })
                },
                password: {
                    groupId: 'passId_2',
                    label: 'Password',
                    as: 'Password',
                    feedback: false,
                    toggleMask: true,
                    fluid: true,
                    messages: [{ errorType: 'minimum' }, { errorType: 'maximum' }, { errorType: 'uppercase', severity: 'warn' }, { errorType: 'lowercase', severity: 'warn' }, { errorType: 'number', severity: 'secondary' }],
                    schema: z
                        .string()
                        .min(3, { message: 'Password must be at least 3 characters long.' })
                        .max(8, { message: 'Password must not exceed 8 characters.' })
                        .refine((value) => /[a-z]/.test(value), {
                            errorType: 'lowercase',
                            message: 'Password must contain at least one lowercase letter.'
                        })
                        .refine((value) => /[A-Z]/.test(value), {
                            errorType: 'uppercase',
                            message: 'Password must contain at least one uppercase letter.'
                        })
                        .refine((value) => /\d/.test(value), {
                            errorType: 'number',
                            message: 'Password must contain at least one number.'
                        })
                }
            }
        };
    },
    methods: {
        onFormSubmit(text, { valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: \`\${text} is submitted.\`, life: 3000 });
            }
        }
    },
    components: {
        DynamicForm: markRaw(DynamicForm),
        DynamicFormControl: markRaw(DynamicFormControl),
        DynamicFormField: markRaw(DynamicFormField),
        DynamicFormLabel: markRaw(DynamicFormLabel),
        DynamicFormMessage: markRaw(DynamicFormMessage),
        DynamicFormSubmit: markRaw(DynamicFormSubmit)
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card grid md:grid-cols-2 gap-4 w-full">
        <Toast />

        <Fieldset legend="Form 1" pt:content:class="flex justify-center">
            <DynamicForm @submit="onFormSubmit('Form 1', $event)">
                <DynamicFormField groupId="userId_1" name="username">
                    <DynamicFormLabel>Username</DynamicFormLabel>
                    <DynamicFormControl defaultValue="PrimeVue" fluid :schema="userNameSchema" />
                    <DynamicFormMessage />
                </DynamicFormField>
                <DynamicFormField groupId="passId_1" name="password">
                    <DynamicFormLabel>Password</DynamicFormLabel>
                    <DynamicFormControl as="Password" :feedback="false" toggleMask fluid :schema="passwordSchema" />
                    <DynamicFormMessage errorType="minimum" />
                    <DynamicFormMessage errorType="maximum" />
                    <DynamicFormMessage errorType="uppercase" severity="warn" />
                    <DynamicFormMessage errorType="lowercase" severity="warn" />
                    <DynamicFormMessage errorType="number" severity="secondary" />
                </DynamicFormField>
                <DynamicFormSubmit />
            </DynamicForm>
        </Fieldset>

        <Fieldset legend="Form 2" pt:content:class="flex justify-center">
            <DynamicForm :fields @submit="onFormSubmit('Form 2', $event)" />
        </Fieldset>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';
import DynamicForm from './dynamic/DynamicForm.vue';
import DynamicFormControl from './dynamic/DynamicFormControl.vue';
import DynamicFormField from './dynamic/DynamicFormField.vue';
import DynamicFormLabel from './dynamic/DynamicFormLabel.vue';
import DynamicFormMessage from './dynamic/DynamicFormMessage.vue';
import DynamicFormSubmit from './dynamic/DynamicFormSubmit.vue';

const toast = useToast();

const userNameSchema = z.string().min(1, { message: 'Username is required.' });

const passwordSchema = z
    .string()
    .min(3, { message: 'Password must be at least 3 characters long.' })
    .max(8, { message: 'Password must not exceed 8 characters.' })
    .refine((value) => /[a-z]/.test(value), {
        errorType: 'lowercase',
        message: 'Password must contain at least one lowercase letter.'
    })
    .refine((value) => /[A-Z]/.test(value), {
        errorType: 'uppercase',
        message: 'Password must contain at least one uppercase letter.'
    })
    .refine((value) => /\d/.test(value), {
        errorType: 'number',
        message: 'Password must contain at least one number.'
    });

const fields = reactive({
    username: {
        groupId: 'userId_2',
        label: 'Username',
        defaultValue: 'PrimeVue',
        fluid: true,
        schema: userNameSchema
    },
    password: {
        groupId: 'passId_2',
        label: 'Password',
        as: 'Password',
        feedback: false,
        toggleMask: true,
        fluid: true,
        messages: [
            { errorType: 'minimum' },
            { errorType: 'maximum' },
            { errorType: 'uppercase', severity: 'warn' },
            { errorType: 'lowercase', severity: 'warn' },
            { errorType: 'number', severity: 'secondary' }
        ],
        schema: passwordSchema
    }
});

const onFormSubmit = (text, { valid }) => {
    if (valid) {
        toast.add({
            severity: 'success',
            summary: \`\${text} is submitted.\`,
            life: 3000
        });
    }
};
<\/script>
`
            }
        };
    },
    methods: {
        onFormSubmit(text, { valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: `${text} is submitted.`, life: 3000 });
            }
        }
    },
    components: {
        DynamicForm: markRaw(DynamicForm),
        DynamicFormControl: markRaw(DynamicFormControl),
        DynamicFormField: markRaw(DynamicFormField),
        DynamicFormLabel: markRaw(DynamicFormLabel),
        DynamicFormMessage: markRaw(DynamicFormMessage),
        DynamicFormSubmit: markRaw(DynamicFormSubmit)
    }
};
</script>

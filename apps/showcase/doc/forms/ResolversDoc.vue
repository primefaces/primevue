<template>
    <DocSectionText v-bind="$attrs">
        <p>
            It can be integrated with with schema libraries such as <a href="https://zod.dev/">Zod</a>, <a href="https://github.com/jquense/yup">Yup</a>, <a href="https://joi.dev/">Joi</a>, <a href="https://valibot.dev/">Valibot</a>,
            <a href="https://docs.superstructjs.org/">Superstruct</a> or custom validation logic is possible using <i>resolver</i> property, with available resolvers from <i>@primevue/form/resolvers</i> for each schema.
        </p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-5">
        <Fieldset legend="Schema">
            <RadioButtonGroup v-model="selectedSchema" name="schema" class="flex flex-wrap gap-4" @update:modelValue="changeResolver">
                <div class="flex items-center">
                    <RadioButton inputId="zod" value="Zod" />
                    <label for="zod" class="ml-2">Zod</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="yup" value="Yup" />
                    <label for="yup" class="ml-2">Yup</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="valibot" value="Valibot" />
                    <label for="valibot" class="ml-2">Valibot</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="superStruct" value="SuperStruct" />
                    <label for="superStruct" class="ml-2">SuperStruct</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="custom" value="Custom" />
                    <label for="custom" class="ml-2">Custom</label>
                </div>
            </RadioButtonGroup>
        </Fieldset>

        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-2">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ zod: '3.23.8' }" />
</template>

<script>
import { superStructResolver, valibotResolver, yupResolver, zodResolver } from '@primevue/form/resolvers';
import * as s from 'superstruct';
import * as v from 'valibot';
import * as yup from 'yup';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                username: ''
            },
            selectedSchema: 'Zod',
            resolver: zodResolver(
                z.object({
                    username: z.string().min(1, { message: 'Username is required via Zod.' })
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-2">
        <InputText name="username" type="text" placeholder="Username" fluid />
        <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-5">
        <Toast />

        <Fieldset legend="Schema">
            <RadioButtonGroup v-model="selectedSchema" name="schema" class="flex flex-wrap gap-4" @update:modelValue="changeResolver">
                <div class="flex items-center">
                    <RadioButton inputId="zod" value="Zod" />
                    <label for="zod" class="ml-2">Zod</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="yup" value="Yup" />
                    <label for="yup" class="ml-2">Yup</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="valibot" value="Valibot" />
                    <label for="valibot" class="ml-2">Valibot</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="superStruct" value="SuperStruct" />
                    <label for="superStruct" class="ml-2">SuperStruct</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="custom" value="Custom" />
                    <label for="custom" class="ml-2">Custom</label>
                </div>
            </RadioButtonGroup>
        </Fieldset>

        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-2">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script>
import { superStructResolver, valibotResolver, yupResolver, zodResolver } from '@primevue/form/resolvers';
import * as s from 'superstruct';
import * as v from 'valibot';
import * as yup from 'yup';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                username: ''
            },
            selectedSchema: 'Zod',
            resolver: zodResolver(
                z.object({
                    username: z.string().min(1, { message: 'Username is required via Zod.' })
                })
            )
        };
    },
    methods: {
        changeResolver(schema) {
            if (schema === 'Zod') {
                this.resolver = zodResolver(
                    z.object({
                        username: z.string().min(1, { message: 'Username is required via Zod.' })
                    })
                );
            } else if (schema === 'Yup') {
                this.resolver = yupResolver(
                    yup.object().shape({
                        username: yup.string().required('Username is required via Yup.')
                    })
                );
            } else if (schema === 'Valibot') {
                this.resolver = valibotResolver(
                    v.object({
                        username: v.pipe(v.string(), v.minLength(1, 'Username is required via Valibot.'))
                    })
                );
            } else if (schema === 'SuperStruct') {
                this.resolver = superStructResolver(
                    s.object({
                        username: s.nonempty(s.string())
                    })
                );
            } else if (schema === 'Custom') {
                this.resolver = ({ values }) => {
                    const errors = {};

                    if (!values.username) {
                        errors.username = [{ message: 'Username is required.' }];
                    }

                    return {
                        errors
                    };
                };
            }
        },
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-5">
        <Toast />

        <Fieldset legend="Schema">
            <RadioButtonGroup v-model="selectedSchema" name="schema" class="flex flex-wrap gap-4" @update:modelValue="changeResolver">
                <div class="flex items-center">
                    <RadioButton inputId="zod" value="Zod" />
                    <label for="zod" class="ml-2">Zod</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="yup" value="Yup" />
                    <label for="yup" class="ml-2">Yup</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="valibot" value="Valibot" />
                    <label for="valibot" class="ml-2">Valibot</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="superStruct" value="SuperStruct" />
                    <label for="superStruct" class="ml-2">SuperStruct</label>
                </div>
                <div class="flex items-center">
                    <RadioButton inputId="custom" value="Custom" />
                    <label for="custom" class="ml-2">Custom</label>
                </div>
            </RadioButtonGroup>
        </Fieldset>

        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-2">
                <InputText name="username" type="text" placeholder="Username" fluid />
                <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.error.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { superStructResolver, valibotResolver, yupResolver, zodResolver } from '@primevue/form/resolvers';
import * as s from 'superstruct';
import * as v from 'valibot';
import * as yup from 'yup';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const initialValues = ref({
    username: ''
});
const selectedSchema = ref('Zod');

const resolver = ref(zodResolver(
    z.object({
        username: z.string().min(1, { message: 'Username is required via Zod.' })
    })
));

watch(selectedSchema, (newSchema) => {
    changeResolver(newSchema);
});

function changeResolver(schema) {
    if (schema === 'Zod') {
        resolver.value = zodResolver(
            z.object({
                username: z.string().min(1, { message: 'Username is required via Zod.' })
            })
        );
    } else if (schema === 'Yup') {
        resolver.value = yupResolver(
            yup.object().shape({
                username: yup.string().required('Username is required via Yup.')
            })
        );
    } else if (schema === 'Valibot') {
        resolver.value = valibotResolver(
            v.object({
                username: v.pipe(v.string(), v.minLength(1, 'Username is required via Valibot.'))
            })
        );
    } else if (schema === 'SuperStruct') {
        resolver.value = superStructResolver(
            s.object({
                username: s.nonempty(s.string())
            })
        );
    } else if (schema === 'Custom') {
        resolver.value = ({ values }) => {
            const errors = {};

            if (!values.username) {
                errors.username = [{ message: 'Username is required.' }];
            }

            return {
                errors
            };
        };
    }
}

function handleSubmit() {
    resolver.value({ values: initialValues.value }).then(({ valid }) => {
        if (valid) {
            toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
        }
    });
}
<\/script>
`
            }
        };
    },
    methods: {
        changeResolver(schema) {
            if (schema === 'Zod') {
                this.resolver = zodResolver(
                    z.object({
                        username: z.string().min(1, { message: 'Username is required via Zod.' })
                    })
                );
            } else if (schema === 'Yup') {
                this.resolver = yupResolver(
                    yup.object().shape({
                        username: yup.string().required('Username is required via Yup.')
                    })
                );
            } else if (schema === 'Valibot') {
                this.resolver = valibotResolver(
                    v.object({
                        username: v.pipe(v.string(), v.minLength(1, 'Username is required via Valibot.'))
                    })
                );
            } else if (schema === 'SuperStruct') {
                this.resolver = superStructResolver(
                    s.object({
                        username: s.nonempty(s.string())
                    })
                );
            } else if (schema === 'Custom') {
                this.resolver = ({ values }) => {
                    const errors = {};

                    if (!values.username) {
                        errors.username = [{ message: 'Username is required.' }];
                    }

                    return {
                        errors
                    };
                };
            }
        },
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
</script>

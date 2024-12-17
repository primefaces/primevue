<template>
    <DocSectionText v-bind="$attrs">
        <p>
            This section demonstrates how to create a dynamic form using a custom Form component. It showcases an example where form fields are generated dynamically based on the provided configuration, allowing for flexible form structures. The
            components named <i>Dynamic*</i> shown in this example are not built-in, and only available for sampling purposes. First form uses a declarative approach whereas second form goes for a programmatic approach. We suggest running this sample
            in StackBlitz to view the comprehensive implementation.
        </p>
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
    <DocSectionCode :code="code" :extFiles="extFiles" :dependencies="{ zod: '3.23.8', valibot: '0.42.1' }" />
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
            },
            extFiles: {
                options: {
                    'src/dynamic/DynamicForm.vue': {
                        content: `<template>
    <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="$emit('submit', $event)" class="flex flex-col gap-4 w-full sm:w-56">
        <slot v-bind="$form">
            <template v-for="({ groupId, label, messages, ...rest }, name) in fields" :key="name">
                <DynamicFormField :groupId="groupId" :name="name">
                    <DynamicFormLabel>{{ label }}</DynamicFormLabel>
                    <DynamicFormControl v-bind="rest" />
                    <DynamicFormMessage v-for="(message, index) in messages || [{}]" :key="index" v-bind="message" />
                </DynamicFormField>
            </template>
            <DynamicFormSubmit />
        </slot>
    </Form>
</template>

<script setup>
import { ref, computed, provide } from 'vue';
import { isNotEmpty } from '@primeuix/utils';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import DynamicFormControl from './DynamicFormControl.vue';
import DynamicFormField from './DynamicFormField.vue';
import DynamicFormLabel from './DynamicFormLabel.vue';
import DynamicFormMessage from './DynamicFormMessage.vue';
import DynamicFormSubmit from './DynamicFormSubmit.vue';

const props = defineProps({
    fields: Object
});

const emit = defineEmits(['submit']);

const defaultValues = ref({});
const schemas = ref({});

const resolver = computed(() => (isNotEmpty(schemas.value) ? zodResolver(z.object(schemas.value)) : undefined));
const initialValues = computed(() => defaultValues.value);

const addField = (name, schema, defaultValue) => {
    schema && (schemas.value[name] = schema);
    defaultValues.value[name] = defaultValue;
};

provide('$fcDynamicForm', {
    addField
});
<\/script>
`
                    },
                    'src/dynamic/DynamicFormControl.vue': {
                        content: `<template>
    <component :is="component" :id :name="name" class="w-full" />
</template>

<script setup>
import * as PrimeVue from 'primevue';
import { computed, inject } from 'vue';

const props = defineProps({
    as: {
        type: String,
        default: 'InputText'
    },
    schema: null,
    defaultValue: {
        default: ''
    }
});

const $fcDynamicForm = inject('$fcDynamicForm', undefined);
const $fcDynamicFormField = inject('$fcDynamicFormField', undefined);

const id = computed(() => $fcDynamicFormField?.groupId);
const name = computed(() => $fcDynamicFormField?.name);
const component = computed(() => PrimeVue[props.as] ?? props.as);

$fcDynamicForm?.addField(name.value, props.schema, props.defaultValue);
<\/script>
`
                    },
                    'src/dynamic/DynamicFormField.vue': {
                        content: `<template>
    <FormField class="flex flex-col gap-2">
        <slot />
    </FormField>
</template>

<script setup>
import { provide } from 'vue';

const props = defineProps({
    groupId: {
        type: String,
        default: undefined
    },
    name: {
        type: String,
        default: undefined
    }
});

provide('$fcDynamicFormField', {
    groupId: props.groupId,
    name: props.name
});
<\/script>
`
                    },
                    'src/dynamic/DynamicFormLabel.vue': {
                        content: `<template>
    <label :for="htmlFor">
        <slot />
    </label>
</template>

<script setup>
import { computed, inject } from 'vue';

const $fcDynamicFormField = inject('$fcDynamicFormField', undefined);

const htmlFor = computed(() => $fcDynamicFormField?.groupId);
<\/script>
`
                    },
                    'src/dynamic/DynamicFormMessage.vue': {
                        content: `<template>
    <Message v-if="visible" :severity :icon size="small" variant="simple">
        <slot>{{ message }}</slot>
    </Message>
</template>

<script setup>
import { isNotEmpty } from '@primeuix/utils';
import { computed, inject } from 'vue';

const props = defineProps({
    errorType: {
        type: String,
        default: undefined
    },
    severity: {
        type: String,
        default: 'error'
    },
    icon: {
        type: String,
        default: 'pi pi-key'
    }
});

const $pcForm = inject('$pcForm', undefined); // Inject PrimeVue Form component
const $fcDynamicFormField = inject('$fcDynamicFormField', undefined);

const fieldName = computed(() => $fcDynamicFormField?.name);
const state = computed(() => $pcForm?.states?.[fieldName.value]);
const errors = computed(() => state.value?.errors);
const invalid = computed(() => state.value?.invalid);
const error = computed(() => errors.value?.find((error) => props.errorType === error.errorType || isNotEmpty(error[props.errorType])));
const message = computed(() => (props.errorType ? error.value?.message : errors.value?.[0]?.message));
const visible = computed(() => invalid.value && (error.value || props.errorType === undefined));
<\/script>
`
                    },
                    'src/dynamic/DynamicFormSubmit.vue': {
                        content: `<template>
    <Button type="submit" :severity :label />
</template>

<script setup>
import Button from 'primevue/button';

const props = defineProps({
    severity: {
        type: String,
        default: 'secondary'
    },
    label: {
        type: String,
        default: 'Submit'
    }
});
<\/script>
`
                    }
                },
                composition: {
                    'src/dynamic/DynamicForm.vue': {
                        content: `<template>
    <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="$emit('submit', $event)" class="flex flex-col gap-4 w-full sm:w-56">
        <slot v-bind="$form">
            <template v-for="({ groupId, label, messages, ...rest }, name) in fields" :key="name">
                <DynamicFormField :groupId="groupId" :name="name">
                    <DynamicFormLabel>{{ label }}</DynamicFormLabel>
                    <DynamicFormControl v-bind="rest" />
                    <DynamicFormMessage v-for="(message, index) in messages || [{}]" :key="index" v-bind="message" />
                </DynamicFormField>
            </template>
            <DynamicFormSubmit />
        </slot>
    </Form>
</template>

<script setup>
import { ref, computed, provide } from 'vue';
import { isNotEmpty } from '@primeuix/utils';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import DynamicFormControl from './DynamicFormControl.vue';
import DynamicFormField from './DynamicFormField.vue';
import DynamicFormLabel from './DynamicFormLabel.vue';
import DynamicFormMessage from './DynamicFormMessage.vue';
import DynamicFormSubmit from './DynamicFormSubmit.vue';

const props = defineProps({
    fields: Object
});

const emit = defineEmits(['submit']);

const defaultValues = ref({});
const schemas = ref({});

const resolver = computed(() => (isNotEmpty(schemas.value) ? zodResolver(z.object(schemas.value)) : undefined));
const initialValues = computed(() => defaultValues.value);

const addField = (name, schema, defaultValue) => {
    schema && (schemas.value[name] = schema);
    defaultValues.value[name] = defaultValue;
};

provide('$fcDynamicForm', {
    addField
});
<\/script>
`
                    },
                    'src/dynamic/DynamicFormControl.vue': {
                        content: `<template>
    <component :is="component" :id :name="name" class="w-full" />
</template>

<script setup>
import * as PrimeVue from 'primevue';
import { computed, inject } from 'vue';

const props = defineProps({
    as: {
        type: String,
        default: 'InputText'
    },
    schema: null,
    defaultValue: {
        default: ''
    }
});

const $fcDynamicForm = inject('$fcDynamicForm', undefined);
const $fcDynamicFormField = inject('$fcDynamicFormField', undefined);

const id = computed(() => $fcDynamicFormField?.groupId);
const name = computed(() => $fcDynamicFormField?.name);
const component = computed(() => PrimeVue[props.as] ?? props.as);

$fcDynamicForm?.addField(name.value, props.schema, props.defaultValue);
<\/script>
`
                    },
                    'src/dynamic/DynamicFormField.vue': {
                        content: `<template>
    <FormField class="flex flex-col gap-2">
        <slot />
    </FormField>
</template>

<script setup>
import { provide } from 'vue';

const props = defineProps({
    groupId: {
        type: String,
        default: undefined
    },
    name: {
        type: String,
        default: undefined
    }
});

provide('$fcDynamicFormField', {
    groupId: props.groupId,
    name: props.name
});
<\/script>
`
                    },
                    'src/dynamic/DynamicFormLabel.vue': {
                        content: `<template>
    <label :for="htmlFor">
        <slot />
    </label>
</template>

<script setup>
import { computed, inject } from 'vue';

const $fcDynamicFormField = inject('$fcDynamicFormField', undefined);

const htmlFor = computed(() => $fcDynamicFormField?.groupId);
<\/script>
`
                    },
                    'src/dynamic/DynamicFormMessage.vue': {
                        content: `<template>
    <Message v-if="visible" :severity :icon size="small" variant="simple">
        <slot>{{ message }}</slot>
    </Message>
</template>

<script setup>
import { isNotEmpty } from '@primeuix/utils';
import { computed, inject } from 'vue';

const props = defineProps({
    errorType: {
        type: String,
        default: undefined
    },
    severity: {
        type: String,
        default: 'error'
    },
    icon: {
        type: String,
        default: 'pi pi-key'
    }
});

const $pcForm = inject('$pcForm', undefined); // Inject PrimeVue Form component
const $fcDynamicFormField = inject('$fcDynamicFormField', undefined);

const fieldName = computed(() => $fcDynamicFormField?.name);
const state = computed(() => $pcForm?.states?.[fieldName.value]);
const errors = computed(() => state.value?.errors);
const invalid = computed(() => state.value?.invalid);
const error = computed(() => errors.value?.find((error) => props.errorType === error.errorType || isNotEmpty(error[props.errorType])));
const message = computed(() => (props.errorType ? error.value?.message : errors.value?.[0]?.message));
const visible = computed(() => invalid.value && (error.value || props.errorType === undefined));
<\/script>
`
                    },
                    'src/dynamic/DynamicFormSubmit.vue': {
                        content: `<template>
    <Button type="submit" :severity :label />
</template>

<script setup>
import Button from 'primevue/button';

const props = defineProps({
    severity: {
        type: String,
        default: 'secondary'
    },
    label: {
        type: String,
        default: 'Submit'
    }
});
<\/script>
`
                    }
                }
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

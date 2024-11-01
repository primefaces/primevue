<template>
    <Form v-slot="$form" :initialValues :resolver @submit="$emit('submit', $event)" class="flex flex-col gap-4 w-full sm:w-56">
        <slot v-bind="$form">
            <template v-for="({ groupId, label, messages, ...rest }, name) in fields" :key="name">
                <DynamicFormField :groupId :name>
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
</script>

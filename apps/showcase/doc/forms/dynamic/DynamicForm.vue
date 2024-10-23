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

<script>
import { isNotEmpty } from '@primeuix/utils';
import { zodResolver } from '@primevue/form/resolvers';
import { z } from 'zod';
import DynamicFormControl from './DynamicFormControl.vue';
import DynamicFormField from './DynamicFormField.vue';
import DynamicFormLabel from './DynamicFormLabel.vue';
import DynamicFormMessage from './DynamicFormMessage.vue';
import DynamicFormSubmit from './DynamicFormSubmit.vue';

export default {
    name: 'DynamicForm',
    emits: ['submit'],
    props: {
        fields: Object
    },
    provide() {
        return {
            $fcDynamicForm: this
        };
    },
    data() {
        return {
            defaultValues: {},
            schemas: {}
        };
    },
    methods: {
        addField(name, schema, defaultValue) {
            schema && (this.schemas[name] = schema);
            this.defaultValues[name] = defaultValue;
        }
    },
    computed: {
        resolver() {
            return isNotEmpty(this.schemas) ? zodResolver(z.object(this.schemas)) : undefined;
        },
        initialValues() {
            return this.defaultValues;
        }
    },
    components: {
        DynamicFormControl,
        DynamicFormField,
        DynamicFormLabel,
        DynamicFormMessage,
        DynamicFormSubmit
    }
};
</script>

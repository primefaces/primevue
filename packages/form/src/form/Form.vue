<template>
    <form @submit.prevent="onSubmit" v-bind="ptmi('root')">
        <slot :register :valid :reset v-bind="states" />
    </form>
</template>

<script>
import { omit } from '@primeuix/utils';
import { useForm } from '@primevue/form/useform';
import BaseForm from './BaseForm.vue';

export default {
    name: 'Form',
    extends: BaseForm,
    inheritAttrs: false,
    emits: ['submit'],
    setup(props, { emit }) {
        const $form = useForm(props);

        const register = (field, options) => {
            const [, fieldProps] = $form.defineField(field, options);

            return fieldProps;
        };

        const onSubmit = $form.handleSubmit((e) => {
            emit('submit', e);
        });

        return {
            register,
            onSubmit,
            ...omit($form, ['defineField', 'handleSubmit'])
        };
    }
};
</script>

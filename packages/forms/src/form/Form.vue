<template>
    <form @submit.prevent="onSubmit" @reset.prevent="onReset" :class="cx('root')" v-bind="ptmi('root')">
        <slot :register :valid :reset v-bind="states" />
    </form>
</template>

<script>
import { omit } from '@primeuix/utils';
import { useForm } from '@primevue/forms/useform';
import BaseForm from './BaseForm.vue';

export default {
    name: 'Form',
    extends: BaseForm,
    inheritAttrs: false,
    emits: ['submit', 'reset'],
    setup(props, { emit }) {
        const $form = useForm(props);

        const register = (field, options) => {
            const [, fieldProps] = $form.defineField(field, options);

            return fieldProps;
        };

        const onSubmit = $form.handleSubmit((e) => {
            emit('submit', e);
        });

        const onReset = $form.handleReset((e) => {
            emit('reset', e);
        });

        return {
            register,
            onSubmit,
            onReset,
            ...omit($form, ['handleSubmit', 'handleReset'])
        };
    }
};
</script>

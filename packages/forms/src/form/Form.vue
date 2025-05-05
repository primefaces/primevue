<template>
    <form ref="formRef" @submit.prevent="onSubmit" @reset.prevent="onReset" :class="cx('root')" v-bind="ptmi('root')">
        <slot :register :valid :reset v-bind="states" />
    </form>
</template>

<script>
import { omit } from '@primeuix/utils';
import { useForm } from '@primevue/forms/useform';
import { ref } from 'vue';
import BaseForm from './BaseForm.vue';

export default {
    name: 'Form',
    extends: BaseForm,
    inheritAttrs: false,
    emits: ['submit', 'reset'],
    setup(props, { emit }) {
        const formRef = ref(null);
        const $form = useForm(props);

        const submit = () => {
            formRef.value?.requestSubmit();
        };

        const register = (field, options) => {
            if (!options?.novalidate) {
                const [, fieldProps] = $form.defineField(field, options);

                return fieldProps;
            }

            return {};
        };

        const onSubmit = $form.handleSubmit((e) => {
            emit('submit', e);
        });

        const onReset = $form.handleReset((e) => {
            emit('reset', e);
        });

        return {
            formRef,
            submit,
            register,
            onSubmit,
            onReset,
            ...omit($form, ['handleSubmit', 'handleReset'])
        };
    }
};
</script>

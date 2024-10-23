<template>
    <Message v-if="visible" :severity>
        <slot>{{ message }}</slot>
    </Message>
</template>

<script>
import { isNotEmpty } from '@primeuix/utils';

export default {
    name: 'DynamicFormLabel',
    props: {
        errorType: {
            type: String,
            default: undefined
        },
        severity: {
            type: String,
            default: 'error'
        }
    },
    inject: {
        $pcForm: {
            default: undefined
        },
        $fcDynamicFormField: {
            default: undefined
        }
    },
    computed: {
        visible() {
            return this.invalid && (this.error || this.errorType === undefined);
        },
        message() {
            return this.errorType ? this.error?.message : this.errors?.[0]?.message;
        },
        error() {
            return this.errors?.find((error) => error.errorType === this.errorType || isNotEmpty(error[this.errorType]));
        },
        fieldName() {
            return this.$fcDynamicFormField?.$props.name;
        },
        state() {
            return this.$pcForm?.states?.[this.fieldName];
        },
        errors() {
            return this.state?.errors;
        },
        invalid() {
            return this.state?.invalid;
        }
    }
};
</script>

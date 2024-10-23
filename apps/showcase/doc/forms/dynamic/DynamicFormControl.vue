<template>
    <component :is="component" :id :name class="w-full" />
</template>

<script>
import * as PrimeVue from 'primevue/primevue';

export default {
    name: 'DynamicFormControl',
    props: {
        as: {
            type: String,
            default: 'InputText'
        },
        schema: null,
        defaultValue: {
            default: ''
        }
    },
    inject: {
        $fcDynamicForm: {
            default: undefined
        },
        $fcDynamicFormField: {
            default: undefined
        }
    },
    created() {
        this.$fcDynamicForm?.addField(this.name, this.schema, this.defaultValue);
    },
    computed: {
        id() {
            return this.$fcDynamicFormField?.$props.groupId;
        },
        name() {
            return this.$fcDynamicFormField?.$props.name;
        },
        component() {
            return PrimeVue[this.as] ?? this.as;
        }
    }
};
</script>

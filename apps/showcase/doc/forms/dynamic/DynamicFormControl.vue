<template>
    <component :is="component" :id :name class="w-full" />
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
</script>

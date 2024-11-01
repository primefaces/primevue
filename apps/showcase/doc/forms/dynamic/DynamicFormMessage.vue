<template>
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
</script>

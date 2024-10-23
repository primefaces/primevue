<template>
    <label :for="htmlFor">
        <slot />
    </label>
</template>

<script>
export default {
    name: 'DynamicFormLabel',
    inject: {
        $fcDynamicFormField: {
            default: undefined
        }
    },
    computed: {
        htmlFor() {
            return this.$fcDynamicFormField?.$props.groupId;
        }
    }
};
</script>

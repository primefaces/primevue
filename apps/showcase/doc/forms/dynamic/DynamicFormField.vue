<template>
    <div class="flex flex-col gap-2">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'DynamicFormField',
    props: {
        groupId: {
            type: String,
            default: undefined
        },
        name: {
            type: String,
            default: undefined
        }
    },
    provide() {
        return {
            $fcDynamicFormField: this
        };
    }
};
</script>

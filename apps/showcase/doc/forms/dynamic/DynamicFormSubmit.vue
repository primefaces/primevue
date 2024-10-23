<template>
    <Button type="submit" :severity :label />
</template>

<script>
export default {
    name: 'DynamicFormSubmit',
    props: {
        severity: {
            type: String,
            default: 'secondary'
        },
        label: {
            type: String,
            default: 'Submit'
        }
    }
};
</script>

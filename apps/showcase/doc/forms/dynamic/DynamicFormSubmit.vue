<template>
    <Button type="submit" :severity :label />
</template>

<script setup>
import Button from 'primevue-vaultic/button';

const props = defineProps({
    severity: {
        type: String,
        default: 'secondary'
    },
    label: {
        type: String,
        default: 'Submit'
    }
});
</script>

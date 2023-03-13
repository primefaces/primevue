<template>
    <Button type="button" label="No" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    <Button type="button" label="Yes" icon="pi pi-check" @click="closeDialog({ buttonType: 'Yes' })" autofocus></Button>
</template>

<script>
export default {
    inject: ['dialogRef'],
    methods: {
        closeDialog(e) {
            this.dialogRef.close(e);
        }
    }
};
</script>

<template>
    <div class="flex flex-column align-items-center justify-content-center row-gap-3">
        <p>There are <strong>{{totalProducts}}</strong> products in total in this list.</p>
        <Button type="button" label="Close" @click="closeDialog"></Button>
    </div>
</template>

<script>
export default {
    inject: ['dialogRef'],
    data() {
        return {
            totalProducts: 0
        }
    },
    mounted() {
        this.totalProducts = this.dialogRef.data.totalProducts;
    },
    methods: {
        closeDialog() {
            this.dialogRef.hide();
        }
    }
}
</script>

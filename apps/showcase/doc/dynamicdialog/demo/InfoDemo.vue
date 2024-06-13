<template>
    <div>
        <p>
            There are <strong>{{ totalProducts }}</strong> products in total in this list.
        </p>
        <div class="flex justify-end">
            <Button autofocus type="button" label="Close" @click="closeDialog"></Button>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['dialogRef'],
    data() {
        return {
            totalProducts: 0
        };
    },
    mounted() {
        this.totalProducts = this.dialogRef.data.totalProducts;
    },
    methods: {
        closeDialog() {
            this.dialogRef.close();
        }
    }
};
</script>

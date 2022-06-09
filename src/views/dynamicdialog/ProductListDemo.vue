<template>
	<div>
    <DataTable :value="products" responsiveLayout="scroll">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
			<Column field="category" header="Category"></Column>
			<Column field="quantity" header="Quantity"></Column>
            <Column>
                <template #body>
                    <Button type="button" icon="pi pi-cog" @click="closeDialog"></Button>
                </template>
            </Column>
		</DataTable>
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        closeDialog() {
            this.$dialog.close('dialog');
        }
    }
}
</script>

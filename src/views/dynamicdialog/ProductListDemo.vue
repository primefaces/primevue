<template>
	<div>
        <Button label="Info" icon="pi pi-info-circle" class="p-button-sm p-button-outlined p-button-info my-2" @click="onInfoShow" />
        <DataTable :value="products" responsiveLayout="scroll">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
			<Column field="category" header="Category"></Column>
			<Column field="quantity" header="Quantity"></Column>
            <Column>
                <template #body="slotProps">
                    <Button type="button" icon="pi pi-cog" @click="closeDialog(slotProps.data)"></Button>
                </template>
            </Column>
		</DataTable>
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';
import InfoDemo from './InfoDemo.vue';

export default {
    inject: ['dialogRef'],
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
        closeDialog(data) {
            this.dialogRef.hide(data);
        },
        onInfoShow() {
            this.$dialog.open(InfoDemo, {
                props: {
                    header: 'Information',
                    modal: true,
                    dismissableMask: true
                },
                data: {
                    totalProducts: this.products ? this.products.length : 0
                }
            });
        }
    }
}
</script>
